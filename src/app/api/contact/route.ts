import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import arcjet, { tokenBucket } from "@arcjet/next";

// 1. Initialize Arcjet Rate Limiter
const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    tokenBucket({
      mode: "LIVE",
      refillRate: 3,
      interval: 3600,
      capacity: 3,
    }),
  ],
});

const resend = new Resend(process.env.RESEND_API_KEY);

// 2. Define the Zod Schema (including turnstileToken)
const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name cannot exceed 100 characters"),
  email: z.string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email cannot exceed 255 characters"),
  message: z.string()
    .trim()
    .min(1, "Message is required")
    .max(5000, "Message cannot exceed 5000 characters"),
  turnstileToken: z.string().min(1, "CAPTCHA token is required"),
});

export async function POST(request: Request) {
  try {
    // 3. Run the Arcjet protection check first
    const decision = await aj.protect(request);

    if (decision.isDenied()) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // 4. Validate the incoming data against the Zod schema
    const validatedData = contactSchema.parse(body);
    const { name, email, message, turnstileToken } = validatedData;

    // 5. Verify the Turnstile CAPTCHA token with Cloudflare
    const verifyEndpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const captchaRes = await fetch(verifyEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${turnstileToken}`,
    });

    const captchaValidation = await captchaRes.json();

    if (!captchaValidation.success) {
      return NextResponse.json(
        { error: "CAPTCHA verification failed." },
        { status: 400 }
      );
    }

    // 6. Send the email using plain text via Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: ['mollucrem@gmail.com'],
      subject: `New Inquiry from ${name}`,
      replyTo: email,
      text: `New Project Inquiry\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true, data });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Error processing form:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}