import type { APIRoute } from 'astro';

// Делаем endpoint серверным
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();

        const BOT_TOKEN = import.meta.env.PUBLIC_TELEGRAM_BOT_TOKEN;
        const CHAT_ID = import.meta.env.PUBLIC_TELEGRAM_CHAT_ID;

        if (!BOT_TOKEN || !CHAT_ID) {
            return new Response('Telegram не настроен', { status: 500 });
        }

        const text = `
🚀 Новая заявка HardCode

Имя: ${data.name}
Контакт: ${data.contact}
Уровень: ${data.level}
Цель: ${data.goal}
Пакет: ${data.package || '-'}
`;

        const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: CHAT_ID, text }),
        });

        const json = await res.json();
        if (!json.ok) throw new Error(json.description || 'Ошибка Telegram API');

        return new Response(JSON.stringify({ ok: true }), { status: 200 });
    } catch (err: any) {
        console.error('Ошибка API lead:', err);
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
};
