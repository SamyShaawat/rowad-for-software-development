import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const RECAPTCHA_TIMEOUT_MS = 5_000;
const MAX_FIELD_LENGTH = 500;
const DEFAULT_CONTACT_EMAIL = 'info@rowad.com';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Remove newlines, trim, and cap length to prevent header injection. */
function sanitize(str: string | undefined): string {
  if (!str) return '';
  return str
    .replace(/[\r\n]/g, '')
    .trim()
    .slice(0, MAX_FIELD_LENGTH);
}

/** Basic email format check. */
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ---------------------------------------------------------------------------
// POST handler
// ---------------------------------------------------------------------------

export async function POST(req: Request) {
  try {
    const { name, email, company, phone, service, message, recaptchaToken } = await req.json();

    // --- 1. Validate & sanitize user input --------------------------------
    const safeName = sanitize(name);
    const safeEmail = sanitize(email);

    if (!safeName) {
      return NextResponse.json({ success: false, error: 'Name is required.' }, { status: 400 });
    }

    if (!safeEmail || !isValidEmail(safeEmail)) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    const safeMessage = sanitize(message);
    if (!safeMessage) {
      return NextResponse.json({ success: false, error: 'Message is required.' }, { status: 400 });
    }

    const safeCompany = sanitize(company);
    const safePhone = sanitize(phone);
    const safeService = sanitize(service);

    // --- 2. Enforce reCAPTCHA on EVERY submission -------------------------
    if (!recaptchaToken) {
      return NextResponse.json(
        {
          success: false,
          error: 'reCAPTCHA verification required. Please complete the CAPTCHA challenge.',
        },
        { status: 400 }
      );
    }

    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaSecret) {
      return NextResponse.json(
        {
          success: false,
          error: 'Server configuration error. reCAPTCHA secret key is not set.',
        },
        { status: 500 }
      );
    }

    // URL-encode parameters to prevent injection
    const verificationUrl = new URL('https://www.google.com/recaptcha/api/siteverify');
    verificationUrl.searchParams.set('secret', recaptchaSecret);
    verificationUrl.searchParams.set('response', recaptchaToken);

    // Fetch with timeout to avoid hanging requests
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), RECAPTCHA_TIMEOUT_MS);

    let recaptchaResult: { success?: boolean; score?: number };
    try {
      const response = await fetch(verificationUrl.toString(), {
        method: 'POST',
        signal: controller.signal,
      });

      if (!response.ok) {
        return NextResponse.json(
          {
            success: false,
            error: 'CAPTCHA verification service unavailable. Please try again later.',
          },
          { status: 503 }
        );
      }

      recaptchaResult = await response.json();
    } finally {
      clearTimeout(timeout);
    }

    if (!recaptchaResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'reCAPTCHA verification failed. Please try again.',
        },
        { status: 400 }
      );
    }

    // --- 3. Validate SMTP configuration -----------------------------------
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email service is not configured. Please contact support.',
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      auth: { user: smtpUser, pass: smtpPass },
    });

    // --- 4. Send email ----------------------------------------------------
    await transporter.sendMail({
      from: `"${safeName}" <${safeEmail}>`,
      to: process.env.CONTACT_EMAIL || DEFAULT_CONTACT_EMAIL,
      subject: `New Contact Request: ${safeService || 'General Inquiry'}`,
      text: `
Name: ${safeName}
Email: ${safeEmail}
Company: ${safeCompany || 'N/A'}
Phone: ${safePhone || 'N/A'}
Service Requested: ${safeService || 'N/A'}

Message:
${safeMessage}
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Message sent securely!',
    });
  } catch (error) {
    // Avoid leaking raw error details to logs in production
    const reason =
      error instanceof Error && error.name === 'AbortError'
        ? 'reCAPTCHA request timed out'
        : 'unknown error';

    // In a real app, use a structured logger (e.g. pino, winston)
    // eslint-disable-next-line no-console
    console.error('Contact form submission failed:', reason);

    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
