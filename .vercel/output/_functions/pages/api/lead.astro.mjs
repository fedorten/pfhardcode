export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const body = await request.text();
    if (!body) {
      return new Response("Empty body", { status: 400 });
    }
    const data = JSON.parse(body);
    const BOT_TOKEN = "8078109443:AAHtuHwDwLab_DB4D68G14porbVoMRR6YtE";
    const CHAT_ID = "783223961";
    if (!BOT_TOKEN || !CHAT_ID) ;
    const text = `🚀 Новая заявка HardCode

Имя: ${data.name}
Контакт: ${data.contact}
Уровень: ${data.level}
Цель: ${data.goal}
`;
    const tgRes = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text
        })
      }
    );
    const tgText = await tgRes.text();
    if (!tgRes.ok) {
      console.error("Telegram error:", tgText);
      return new Response("Telegram failed", { status: 502 });
    }
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("API CRASH:", err);
    return new Response("Server error", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
