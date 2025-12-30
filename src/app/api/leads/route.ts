
import { getPayload } from 'payload';
import config from '@/payload.config';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, message, boothInterest, company, eventDate } = body;

        if (!email || !name) {
            return NextResponse.json({ error: 'Name and Email are required' }, { status: 400 });
        }

        // 1. Save to Payload CMS
        const payload = await getPayload({ config });

        // Combine extra info into message if needed
        let finalMessage = message;
        if (eventDate) finalMessage = `Event Date: ${eventDate}\n${finalMessage}`;
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

        console.log('----------------------------------------------------------');
        console.log('📧  EMAIL DEBUG: Email Server Not Configured');
        console.log('----------------------------------------------------------');
        console.log(`To:      Admin <hello@partybox.ae>`);
        console.log(`Subject: New Lead Generated`);
        console.log(`From:    ${name} <${email}>`);
        console.log(`Body:`);
        console.log(`Name:    ${name}`);
        console.log(`Email:   ${email}`);
        console.log(`Phone:   ${phone}`);
        console.log(`Date:    ${eventDate || 'N/A'}`);
        console.log(`Company: ${company || 'N/A'}`);
        console.log(`Message: \n${finalMessage}`);
        console.log('----------------------------------------------------------');

        // 2. Send to MailerLite
        const ML_API_KEY = process.env.MAILERLITE_API_KEY;
        const ML_GROUP_ID = '174482523496121854';

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
                console.log('API Key Loaded:', ML_API_KEY ? `${ML_API_KEY.substring(0, 4)}...***` : 'UNDEFINED');
                console.log('Endpoint:', `https://api.mailerlite.com/api/v2/groups/${ML_GROUP_ID}/subscribers`);
                console.log('Payload:', JSON.stringify(mlPayload, null, 2));

                const mlResponse = await fetch(`https://api.mailerlite.com/api/v2/groups/${ML_GROUP_ID}/subscribers`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-MailerLite-ApiKey': ML_API_KEY,
                    },
                    body: JSON.stringify({
                        email,
                        name,
                        fields: {
                            phone: phone || '',
                            company: company || boothInterest || 'Website Inquiry',
                        }
                    }),
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

        // 3. Send to Google Sheets (via Webhook)
        const GOOGLE_SHEETS_WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

        if (GOOGLE_SHEETS_WEBHOOK_URL) {
            try {
                console.log('--- Google Sheets: Sending Request ---');
                const sheetsPayload = {
                    date: new Date().toISOString(),
                    name,
                    email,
                    phone: phone || '',
                    company: company || '',
                    eventDate: eventDate || '',
                    boothInterest: boothInterest || '',
                    message: finalMessage || ''
                };

                // Add timeout to prevent hanging
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 5000);

                try {
                    await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(sheetsPayload),
                        signal: controller.signal,
                    });
                    console.log('--- Google Sheets: Request Sent ---');
                } finally {
                    clearTimeout(timeoutId);
                }
            } catch (e) {
                console.error('Google Sheets Connection Error:', e);
            }
        }

        return NextResponse.json({ success: true }, { status: 201 });
    } catch (error) {
        console.error('Lead Submission Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
