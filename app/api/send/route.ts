import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, eventType, date, timeSlot, guests, package: pkg, message } = body;

    // Log the enquiry on the server
    console.log('[Esplúdic Booking Enquiry]', {
      name,
      email,
      phone,
      eventType,
      date,
      timeSlot,
      guests,
      package: pkg,
      message,
      receivedAt: new Date().toISOString(),
    });

    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'Esplúdic <info@espludic.com>',
          to: ['info@espludic.com'],
          subject: `Nova Sol·licitud de Reserva: ${name} (${eventType})`,
          replyTo: email,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333; border: 1px solid #00aeef; border-radius: 12px;">
              <h2 style="color: #00aeef; margin-top:0;">Nova Reserva Esplúdic</h2>
              <p><strong>Nom:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Telèfon:</strong> ${phone}</p>
              <p><strong>Tipus d'Esdeveniment:</strong> ${eventType}</p>
              <p><strong>Data:</strong> ${date}</p>
              <p><strong>Franja Horària:</strong> ${timeSlot}</p>
              <p><strong>Convidats:</strong> ${guests}</p>
              <p><strong>Pack:</strong> ${pkg}</p>
              <div style="margin-top: 15px; padding: 12px; background-color: #f1f5f9; border-left: 4px solid #ffe80a; border-radius: 4px;">
                <strong>Comentaris:</strong><br/>
                <p style="white-space: pre-wrap; margin-top: 4px;">${message || 'Cap comentari'}</p>
              </div>
            </div>
          `,
        });
      } catch (emailErr) {
        console.warn('Resend email failed, but enquiry logged:', emailErr);
      }
    }

    return NextResponse.json({ success: true, message: 'Enquiry received successfully' });
  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ success: true, message: 'Enquiry received' });
  }
}