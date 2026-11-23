import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const RECIPIENTS: Record<string, string | undefined> = {
  'General Inquiry': process.env.CONTACT_EMAIL_GENERAL,
  Other: process.env.CONTACT_EMAIL_GENERAL,
  'Project Discussion': process.env.CONTACT_EMAIL_PROJECTS,
  Partnership: process.env.CONTACT_EMAIL_PROJECTS,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, company } = await request.json();

    // Honeypot: real users never fill this hidden field; bots usually do.
    if (company) return NextResponse.json({ ok: true });

    if (
      !name ||
      !email ||
      !subject ||
      !message ||
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof subject !== 'string' ||
      typeof message !== 'string' ||
      !EMAIL_RE.test(email) ||
      message.length > 5000
    ) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
    }

    const to = RECIPIENTS[subject] ?? process.env.CONTACT_EMAIL_GENERAL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!to || !from || !process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Server not configured' }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Website] ${subject} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error: 'Email failed to send' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}
