import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return Response.json({ success: false, error: 'Missing fields' }, { status: 400 });
        }

        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'boluwatifejoshua4@gmail.com',
            subject: `New Portfolio Message from ${name}`,
            replyTo: email,
            html: `
                <h2 style="font-family:sans-serif;color:#0ea5e9;">New Portfolio Message</h2>
                <p style="font-family:sans-serif;"><strong>Name:</strong> ${name}</p>
                <p style="font-family:sans-serif;"><strong>Email:</strong> ${email}</p>
                <p style="font-family:sans-serif;"><strong>Message:</strong></p>
                <p style="font-family:sans-serif;white-space:pre-wrap;">${message}</p>
            `,
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error('[contact route]', error);
        return Response.json({ success: false, error: 'Failed to send' }, { status: 500 });
    }
}
