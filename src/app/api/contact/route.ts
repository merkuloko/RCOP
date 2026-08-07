import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { promises as dns } from 'dns';

const resend = new Resend(process.env.RESEND_API_KEY);

// ------------------------------------------------------------------
// 1. IN-MEMORY RATE LIMITER
// Note: This resets on serverless cold starts, but it effectively
// prevents rapid-fire bot spamming on an active instance.
// ------------------------------------------------------------------
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_MAX = 3; // Max 3 emails per IP
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour in milliseconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userRecord = rateLimitMap.get(ip) || { count: 0, lastReset: now };

  // Reset the window if an hour has passed
  if (now - userRecord.lastReset > RATE_LIMIT_WINDOW_MS) {
    userRecord.count = 0;
    userRecord.lastReset = now;
  }

  // Block if they hit the limit
  if (userRecord.count >= RATE_LIMIT_MAX) {
    return false;
  }

  // Increment and save
  userRecord.count += 1;
  rateLimitMap.set(ip, userRecord);
  return true;
}

// ------------------------------------------------------------------
// 2. EMAIL DOMAIN VALIDATOR (MX RECORD CHECK)
// ------------------------------------------------------------------
async function isRealEmailDomain(email: string): Promise<boolean> {
  // Basic regex for structural validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return false;

  const domain = email.split('@')[1];
  if (!domain) return false;

  try {
    // Queries the DNS to see if the domain is actually configured to receive mail
    const records = await dns.resolveMx(domain);
    return records && records.length > 0;
  } catch (error) {
    // If DNS resolution fails or no MX records exist, the domain can't receive mail
    return false;
  }
}

// ------------------------------------------------------------------
// 3. MAIN POST HANDLER
// ------------------------------------------------------------------
export async function POST(request: Request) {
  try {
    // Extract IP address from Vercel's proxy headers
    const ip = request.headers.get('x-forwarded-for') ?? 'unknown_ip';

    // Apply Rate Limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message } = body;

    // Validate Input Existence
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    // Authenticate Email Domain
    const isValidEmail = await isRealEmailDomain(email);
    if (!isValidEmail) {
      return NextResponse.json(
        { success: false, error: 'Invalid or unreachable email address.' },
        { status: 400 }
      );
    }

    // Send the email via Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>', // Keep until custom domain is verified
      to: ['mollucrem@gmail.com'], // Replace with actual client email
      subject: `New Inquiry from ${name}`,
      replyTo: email,
      html: `
        <h3>New Project Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error('Email API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error.' },
      { status: 500 }
    );
  }
}