import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import arcjet, { tokenBucket } from "@arcjet/next";

const resend = new Resend(process.env.RESEND_API_KEY);

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

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(5000),
  turnstileToken: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const decision = await aj.protect(request, {
      requested: 1,
    });

    if (decision.isDenied()) {
      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
        },
        {
          status: 429,
        }
      );
    }

    const body = await request.json();

    const validatedData = contactSchema.parse(body);

    const {
      name,
      email,
      message,
      turnstileToken,
    } = validatedData;

    const captchaRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY!,
          response: turnstileToken,
        }),
      }
    );

    const captchaValidation = await captchaRes.json();

    if (!captchaValidation.success) {
      return NextResponse.json(
        {
          error: "CAPTCHA verification failed.",
        },
        {
          status: 400,
        }
      );
    }

    const data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: ["mollucrem@gmail.com"],
      subject: `New Inquiry from ${name}`,
      replyTo: email,
      text: `New Project Inquiry

Name: ${name}

Email: ${email}

Message:

${message}`,
    });

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: "Invalid form data",
          details: error.issues,
        },
        {
          status: 400,
        }
      );
    }

    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to send message",
      },
      {
        status: 500,
      }
    );
  }
}