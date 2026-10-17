import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      name, 
      parentName, 
      childName, 
      email, 
      phone, 
      eventType, 
      date, 
      timeSlot, 
      guests, 
      package: pkg, 
      coachingMode, 
      country, 
      message 
    } = body;

    console.log('[AIM Chess Academy Demo Booking Enquiry]', {
      parentName: parentName || name,
      childName,
      email,
      phone,
      eventType,
      date,
      timeSlot,
      childAge: guests,
      level: pkg,
      coachingMode,
      country,
      message,
      receivedAt: new Date().toISOString(),
    });

    // If Resend API key is provided, email the academy admin
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'AIM Chess Academy <noreply@aimchessacademy.com>',
          to: ['contact@aimchessacademy.com'],
          subject: `New Free Demo Booking: ${childName || name} (${coachingMode || 'Online'})`,
          replyTo: email,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #042047; border: 2px solid #00aeef; border-radius: 12px; max-width: 600px;">
              <h2 style="color: #042047; margin-top:0; border-bottom: 2px solid #ffe80a; padding-bottom: 8px;">
                ♟️ New AIM Chess Academy Demo Class Enquiry
              </h2>
              <p><strong>Parent / Guardian:</strong> ${parentName || name}</p>
              <p><strong>Child's Name:</strong> ${childName || 'Not specified'}</p>
              <p><strong>Child's Age:</strong> ${guests || 'Not specified'}</p>
              <p><strong>WhatsApp / Mobile:</strong> ${phone}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Playing Level:</strong> ${pkg || 'Beginner'}</p>
              <p><strong>Coaching Preference:</strong> ${coachingMode || 'Online'}</p>
              <p><strong>Country:</strong> ${country || 'India'}</p>
              <p><strong>Preferred Batch:</strong> ${timeSlot}</p>
              <p><strong>Requested Date:</strong> ${date}</p>
              ${message ? `
                <div style="margin-top: 15px; padding: 12px; background-color: #f1f5f9; border-left: 4px solid #00aeef; border-radius: 4px;">
                  <strong>Notes / Experience:</strong><br/>
                  <p style="white-space: pre-wrap; margin-top: 4px;">${message}</p>
                </div>
              ` : ''}
            </div>
          `,
        });
      } catch (emailErr) {
        console.warn('Resend email failed, but enquiry logged:', emailErr);
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Demo class request received successfully. Our FIDE coach will contact you within 24 hours.' 
    });
  } catch (err) {
    console.error('Enquiries API Error:', err);
    return NextResponse.json({ success: true, message: 'Request logged successfully' });
  }
}
