import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, company, phone, service, message, recaptchaToken } = await req.json();

    // 1. Verify reCAPTCHA token if provided
    if (recaptchaToken) {
      const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY || '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'; // Fallback to Google test key
      const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`;

      const response = await fetch(verificationUrl, { method: 'POST' });
      const recaptchaResult = await response.json();

      if (!recaptchaResult.success) {
        return NextResponse.json({ success: false, error: 'reCAPTCHA verification failed. Please try again.' }, { status: 400 });
      }
    }

    // 2. Set up Nodemailer transporter
    // For development/demonstration, we use basic SMTP. 
    // In production, ensure SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS are set in .env
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.ethereal.email',
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 3. Send email to company Inbox
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender address
      to: process.env.CONTACT_EMAIL || 'info@rowad.com', // list of receivers
      subject: `New Contact Request: ${service ? service : 'General Inquiry'}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || 'N/A'}
        Phone: ${phone || 'N/A'}
        Service Requested: ${service || 'N/A'}
        
        Message:
        ${message}
      `,
    });

    return NextResponse.json({ success: true, message: 'Message sent securely!' });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
