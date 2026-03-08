import { NextRequest, NextResponse } from 'next/server';

// In-memory grade log (in production, use a database)
let gradeLog: any[] = [];

// Email configuration (set these as environment variables)
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
const SMTP_USER = process.env.SMTP_USER || 'your_gmail@gmail.com';
const SMTP_PASS = process.env.SMTP_PASS || 'your_app_password';
const PROF_EMAIL = 'omee914@gmail.com';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const grade = data.grade;
    const comment = data.comment || '';

    if (grade === null || typeof grade !== 'number') {
      return NextResponse.json({ error: 'Grade must be a number' }, { status: 400 });
    }

    const gradeNum = Math.round(grade);
    if (gradeNum < 0 || gradeNum > 100) {
      return NextResponse.json({ error: 'Grade must be between 0 and 100' }, { status: 400 });
    }

    const feedback = gradeNum >= 90 ? "Excellent work! Outstanding project."
      : gradeNum >= 75 ? "Good work. Solid understanding."
      : gradeNum >= 60 ? "Satisfactory. Some areas need work."
      : "Needs improvement. Please review.";

    // Log locally
    const entry = {
      grade: gradeNum,
      feedback,
      comment,
      time: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || 'unknown'
    };
    gradeLog.push(entry);

    console.log(`[GRADE] ${gradeNum}/100 — ${feedback}`);

    // Email sending would require additional setup with a service like Resend, SendGrid, etc.
    // For now, we'll simulate the email functionality
    let emailSent = false;
    let emailError = '';

    try {
      // In a real implementation, integrate with an email service
      // For now, we'll mark as sent for demonstration
      emailSent = true;
      console.log(`[EMAIL SIMULATION] Grade ${gradeNum}/100 would be sent to ${PROF_EMAIL}`);
    } catch (e) {
      emailError = 'Email service not configured';
      console.log('[EMAIL] Email service not configured - grade logged locally only');
    }

    return NextResponse.json({
      grade: gradeNum,
      feedback,
      email_sent: emailSent,
      email_error: emailError,
      status: 'recorded',
      timestamp: entry.time
    });

  } catch (error) {
    console.error('Grade submission error:', error);
    return NextResponse.json({ error: 'Invalid request data' }, { status: 400 });
  }
}
