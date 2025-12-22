
import { getPayload } from 'payload';
import config from '@/payload.config';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, message, boothInterest, company } = body;

        if (!email || !name) {
            return NextResponse.json({ error: 'Name and Email are required' }, { status: 400 });
        }

        // 1. Save to Payload CMS
        const payload = await getPayload({ config });

        // Combine extra info into message if needed
        let finalMessage = message;
        if (company) finalMessage = `Company: ${company}\n${finalMessage}`;

        await payload.create({
            collection: 'leads',
            data: {
                name,
                email,
                phone,
                message: finalMessage,
                boothInterest,
            },
        });

        // 2. Send to MailerLite
        const ML_API_KEY = process.env.MAILERLITE_API_KEY;
        const ML_GROUP_ID = '3640549';

        if (ML_API_KEY) {
            try {
                const mlPayload = {
                    email,
                    name,
                    fields: {
                        phone: phone || '',
                        company: company || boothInterest || 'Website Inquiry',
                    },
                };

                console.log('--- MailerLite: Sending Request ---');
                console.log('Endpoint:', `https://api.mailerlite.com/api/v2/groups/${ML_GROUP_ID}/subscribers`);
                console.log('Payload:', JSON.stringify(mlPayload, null, 2));

                const mlResponse = await fetch(`https://api.mailerlite.com/api/v2/groups/${ML_GROUP_ID}/subscribers`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-MailerLite-ApiKey': ML_API_KEY,
                    },
                    body: JSON.stringify(mlPayload),
                });

                const responseText = await mlResponse.text();
                console.log('--- MailerLite: Response ---');
                console.log('Status:', mlResponse.status);
                console.log('Body:', responseText);

                if (!mlResponse.ok) {
                    console.error('MailerLite API Error:', responseText);
                }

            } catch (e) {
                console.error('MailerLite Connection Error:', e);
            }
        }

        return NextResponse.json({ success: true }, { status: 201 });
    } catch (error) {
        console.error('Lead Submission Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
