import { e as createComponent, k as renderSlot, l as renderHead, r as renderTemplate, m as maybeRenderHead, n as renderComponent, o as renderScript } from '../chunks/astro/server_CbQgag24.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="ru"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>
        <slot name="title">HardCode — Backend для взрослых</slot>
    </title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">${renderSlot($$result, $$slots["head"])}${renderHead()}</head> <body> <!-- Header --> <header> <div class="container header-content"> <div class="logo">Hard<span>Code</span></div> <button class="mobile-menu-btn" id="mobileMenuBtn"> <i class="fas fa-bars"></i> </button> <nav id="mainNav"> <ul> <li><a href="/">Главная</a></li> <li><a href="#for-whom">Для кого</a></li> <li><a href="#steps">Этапы</a></li> <li><a href="#packages">Пакеты</a></li> <li><a href="#stories">Истории</a></li> <li><a href="#cta">Запись</a></li> </ul> </nav> </div> </header> ${renderSlot($$result, $$slots["default"])} <!-- Footer --> <footer> <div class="container"> <div class="footer-grid"> <div> <h4>HardCode</h4> <p>Онлайн-школа для взрослых, которые хотят получить реальный опыт backend-разработки и работать в IT с зарплатой от 200k ₽.</p> </div> <div> <h4>Навигация</h4> <ul class="footer-links"> <li><a href="#for-whom">Для кого</a></li> <li><a href="#steps">Этапы обучения</a></li> <li><a href="#packages">Пакеты</a></li> <li><a href="#stories">Истории успеха</a></li> </ul> </div> <div> <h4>FAQ</h4> <ul class="footer-links"> <li><a href="#">Как проходят занятия?</a></li> <li><a href="#">Что если я не справлюсь?</a></li> <li><a href="#">Какие результаты после курса?</a></li> <li><a href="#">Есть ли рассрочка?</a></li> </ul> </div> <div> <h4>Контакты</h4> <ul class="footer-links"> <li><a href="https://t.me/hardcode_school">Telegram: @HardCode</a></li> <li><a href="mailto:info@hardcode.ru">Email: info@hardcode.ru</a></li> <li><a href="#">Политика конфиденциальности</a></li> <li><a href="#">Договор-оферта</a></li> </ul> </div> </div> <div class="footer-bottom"> <p>© 2023 HardCode. Все права защищены.</p> </div> </div> </footer> </body></html>`;
}, "/home/fedor/Desktop/HardCode_landing/src/layouts/Layout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<div class="form-overlay" id="formOverlay"> <div class="lead-form"> <button class="close-form" onclick="window.hideForm()">\u2715</button> <h3 class="form-title">\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043A\u0443\u0440\u0441</h3> <form id="leadForm"> <input name="name" class="form-control" placeholder="\u0418\u043C\u044F" required> <input name="contact" class="form-control" placeholder="Telegram / WhatsApp / Email" required> <select name="level" class="form-control" required> <option value="">\u0423\u0440\u043E\u0432\u0435\u043D\u044C</option> <option value="0">\u0421 \u043D\u0443\u043B\u044F</option> <option value="basic">\u0415\u0441\u0442\u044C \u0431\u0430\u0437\u0430</option> <option value="code">\u041F\u0438\u0441\u0430\u043B \u043A\u043E\u0434</option> <option value="experience">\u0414\u0440\u0443\u0433\u043E\u0439 \u044F\u0437\u044B\u043A</option> </select> <select name="goal" class="form-control" required> <option value="">\u0426\u0435\u043B\u044C</option> <option value="job">\u0420\u0430\u0431\u043E\u0442\u0430</option> <option value="career">\u0421\u043C\u0435\u043D\u0430 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438</option> <option value="skill">\u041F\u0440\u043E\u043A\u0430\u0447\u043A\u0430</option> <option value="freelance">\u0424\u0440\u0438\u043B\u0430\u043D\u0441</option> </select> <button type="submit" class="btn btn-block">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443</button> </form> </div> </div> <script type="module">
const overlay = document.getElementById('formOverlay')
const form = document.getElementById('leadForm')

window.showForm = () => {
  overlay.classList.add('active')
  document.body.style.overflow = 'hidden'
}
window.hideForm = () => {
  overlay.classList.remove('active')
  document.body.style.overflow = 'auto'
}

form.addEventListener('submit', async e => {
  e.preventDefault()
  const btn = form.querySelector('button')
  btn.disabled = true
  btn.textContent = '\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430...'

  const data = Object.fromEntries(new FormData(form))

  try {
    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!res.ok) throw new Error()
    alert('\u2705 \u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430')
    form.reset()
    hideForm()
  } catch {
    alert('\u274C \u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438')
  } finally {
    btn.disabled = false
    btn.textContent = '\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443'
  }
})

overlay.addEventListener('click', e => {
  if (e.target === overlay) hideForm()
})

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') hideForm()
})
<\/script>`])), maybeRenderHead());
}, "/home/fedor/Desktop/HardCode_landing/src/components/ContactForm.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "HardCode \u2014 Backend \u0434\u043B\u044F \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0445" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="hero"> <div class="container hero-content"> <h1 class="fade-in">Backend-разработка для взрослых</h1> <p class="hero-subtitle fade-in">
3–4 месяца интенсивного обучения через боевые задачи. Индивидуальное обучение → буткэмп → стажировка →
                опыт, с которым берут на работу.
</p> <button class="btn fade-in" onclick="window.showForm && window.showForm()">Начать карьеру в IT</button> <div class="hero-stats fade-in"> <div class="stat-item"> <span class="stat-number">87%</span> <span class="stat-label">Трудоустраиваются</span> </div> <div class="stat-item"> <span class="stat-number">200к+</span> <span class="stat-label">Средняя ЗП после</span> </div> <div class="stat-item"> <span class="stat-number">3-4</span> <span class="stat-label">Месяца обучения</span> </div> </div> </div> </section>  <section id="for-whom" class="fit-section"> <div class="container"> <div class="section-title"> <h2>Кому подходит HardCode</h2> </div> <div class="grid"> <div class="fit-card fit-yes fade-in"> <h3>✅ Подходит, если вы:</h3> <ul> <li>Взрослый человек, который хочет всерьёз войти в IT</li> <li>Готов уделять 8–12 часов в неделю на обучение и практику</li> <li>Хотите реальный опыт, а не просто сертификат</li> <li>Ищете менторство от практикующих разработчиков</li> <li>Готовы к сложным задачам и интенсивному обучению</li> </ul> </div> <div class="fit-card fit-no fade-in"> <h3>❌ Не подойдёт, если вы:</h3> <ul> <li>Ищете лёгкий курс "по вечерам для галочки"</li> <li>Не готовы писать код руками и разбираться в ошибках</li> <li>Хотите быстрых денег без усилий и практики</li> <li>Ждёте, что всё сделают за вас</li> <li>Не готовы работать в команде и получать код-ревью</li> </ul> </div> </div> </div> </section>  <section id="steps" class="steps"> <div class="container"> <div class="section-title"> <h2>Как проходит обучение</h2> </div> <div class="steps-container"> <div class="step fade-in"> <div class="step-number">1</div> <div class="step-content"> <h3>Индивидуальное обучение</h3> <p>2 часа в неделю 1-на-1 с опытным разработчиком. Быстро закрываем пробелы в знаниях, изучаем
                            основы и подготавливаем к реальной работе. Фокус на практических заданиях и разборе ошибок.
</p> <ul> <li>Персональный план обучения</li> <li>Разбор вашего кода и ошибок</li> <li>Подготовка к командной работе</li> </ul> </div> </div> <div class="step fade-in"> <div class="step-number">2</div> <div class="step-content"> <h3>Буткэмп в мини-группе</h3> <p>Небольшая группа до 5 человек. Работа над реальными задачами, как в продуктовой компании.
                            Преподаватель — тимлид с опытом 5+ лет. Обучение через решение практических кейсов.</p> <ul> <li>Командные проекты и код-ревью</li> <li>Работа с Git и CI/CD</li> <li>Подготовка к собеседованиям</li> </ul> </div> </div> <div class="step fade-in"> <div class="step-number">3</div> <div class="step-content"> <h3>Стажировка на реальном проекте</h3> <p>Работа над реальным продуктом 5–10 часов в неделю. Созвоны, планирование задач, код-ревью,
                            командная разработка. Получение опыта, который ценится работодателями.</p> <ul> <li>Опыт работы в команде</li> <li>Работа с production-кодом</li> <li>Портфолио для резюме</li> </ul> </div> </div> </div> </div> </section>  <section id="packages" class="packages"> <div class="container"> <div class="section-title"> <h2>Пакеты обучения</h2> </div> <div class="packages-grid"> <div class="package-card fade-in"> <div class="package-header"> <h3>Start</h3> <div class="package-price">25 000 ₽</div> <div class="package-period">за этап</div> </div> <div class="package-features"> <ul> <li>Индивидуальные занятия 2ч/нед</li> <li>Проверка домашних заданий</li> <li>Доступ к материалам курса</li> <li>Поддержка в чате</li> </ul> <button class="btn btn-outline btn-block" onclick="window.showForm && window.showForm()">
Выбрать пакет
</button> </div> </div> <div class="package-card popular fade-in"> <div class="popular-badge">Популярный</div> <div class="package-header"> <h3>Core</h3> <div class="package-price">75 000 ₽</div> <div class="package-period">за весь курс</div> </div> <div class="package-features"> <ul> <li>Всё из пакета Start</li> <li>Участие в буткэмпе</li> <li>Стажировка на реальном проекте</li> <li>Подготовка резюме и портфолио</li> <li>Помощь с трудоустройством</li> <li>Менторство 3 месяца после курса</li> </ul> <button class="btn btn-block" onclick="window.showForm && window.showForm()">
Выбрать пакет
</button> </div> </div> <div class="package-card fade-in"> <div class="package-header"> <h3>HardCode</h3> <div class="package-price">120 000 ₽</div> <div class="package-period">за весь курс</div> </div> <div class="package-features"> <ul> <li>Всё из пакета Core</li> <li>Увеличенное время с ментором</li> <li>Индивидуальный проект для портфолио</li> <li>Гарантированное трудоустройство</li> <li>Пожизненный доступ к обновлениям</li> <li>Участие в закрытом комьюнити</li> </ul> <button class="btn btn-outline btn-block" onclick="window.showForm && window.showForm()">
Выбрать пакет
</button> </div> </div> </div> </div> </section>  <section id="stories" class="stories"> <div class="container"> <div class="section-title"> <h2>Истории успеха</h2> </div> <div class="stories-grid"> <div class="story-card fade-in"> <div class="story-header"> <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Иван" class="story-avatar"> <div> <h3>Иван, 29 лет</h3> <p>Backend-разработчик</p> </div> </div> <div class="story-content"> <p><strong>Было:</strong> офисный менеджер, 60 000 ₽</p> <p><strong>Стало:</strong> backend в fintech, 210 000 ₽</p> <p class="story-quote">«Было тяжело. Постоянно хотелось сдаться, особенно когда код не работал в
                            2 ночи. Но именно это дало результат — научился решать реальные проблемы, а не писать
                            учебные примеры.»</p> </div> </div> <div class="story-card fade-in"> <div class="story-header"> <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Алексей" class="story-avatar"> <div> <h3>Алексей, 34 года</h3> <p>Backend-разработчик</p> </div> </div> <div class="story-content"> <p><strong>Было:</strong> фриланс, нестабильный доход</p> <p><strong>Стало:</strong> продуктовая компания, 180 000 ₽</p> <p class="story-quote">«До HardCode я "учился" на трёх разных курсах. Здесь я впервые начал
                            работать как разработчик — с дедлайнами, код-ревью и командой. Это другой уровень.»</p> </div> </div> <div class="story-card fade-in"> <div class="story-header"> <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Мария" class="story-avatar"> <div> <h3>Мария, 27 лет</h3> <p>Backend-разработчик</p> </div> </div> <div class="story-content"> <p><strong>Было:</strong> почти ноль в программировании</p> <p><strong>Стало:</strong> junior backend, 140 000 ₽</p> <p class="story-quote">«Никто не уговаривал и не жалел. Или делаешь — или не идёшь дальше.
                            Сначала было обидно, но потом поняла: так и работают в реальных проектах. Благодарна за эту
                            школу жизни.»</p> </div> </div> </div> </div> </section>  <section id="cta" class="cta-section fade-in"> <div class="container"> <h2 class="cta-title">Готовы попробовать себя в реальной разработке?</h2> <p class="cta-text">
Оставьте заявку, и мы свяжемся с вами в течение 24 часов.
                Обсудим ваш текущий уровень, цели и подберём подходящий формат обучения.
</p> <button class="btn cta-btn" onclick="window.showForm && window.showForm()">
Записаться на курс
</button> </div> </section>  ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} ${renderScript($$result2, "/home/fedor/Desktop/HardCode_landing/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/fedor/Desktop/HardCode_landing/src/pages/index.astro", void 0);

const $$file = "/home/fedor/Desktop/HardCode_landing/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
