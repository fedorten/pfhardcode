export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const BOT_TOKEN = "8078109443:AAHtuHwDwLab_DB4D68G14porbVoMRR6YtE";
    const CHAT_ID = "783223961";
    if (!BOT_TOKEN || !CHAT_ID) ;
    const text = `
🚀 Новая заявка HardCode

Имя: ${data.name}
Контакт: ${data.contact}
Уровень: ${data.level}
Цель: ${data.goal}
Пакет: ${data.package || "-"}
`;
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text })
    });
    const json = await res.json();
    if (!json.ok) throw new Error(json.description || "Ошибка Telegram API");
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Ошибка API lead:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
