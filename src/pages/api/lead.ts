import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.text();
        if (!body) {
            return new Response('Empty body', { status: 400 });
        }

        const data = JSON.parse(body);

        const BOT_TOKEN = import.meta.env.PUBLIC_TELEGRAM_BOT_TOKEN;
        const CHAT_ID = import.meta.env.PUBLIC_TELEGRAM_CHAT_ID;

        if (!BOT_TOKEN || !CHAT_ID) {
            console.error('ENV missing');
            return new Response('ENV missing', { status: 500 });
        }

        const text =
            `🚀 Новая заявка HardCode

Имя: ${data.name}
Контакт: ${data.contact}
Уровень: ${data.level}
Цель: ${data.goal}
`;

        const tgRes = await fetch(
            `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text,
                }),
            }
        );

        const tgText = await tgRes.text(); // ← КЛЮЧЕВО

        if (!tgRes.ok) {
            console.error('Telegram error:', tgText);
            return new Response('Telegram failed', { status: 502 });
        }

        return new Response(JSON.stringify({ ok: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (err) {
        console.error('API CRASH:', err);
        return new Response('Server error', { status: 500 });
    }
};
