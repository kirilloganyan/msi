export function Contact() {
  return (
    <section id="contact" className="py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--container-padding)]">
        <div className="grid gap-8 rounded-xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-sm)] lg:grid-cols-2 lg:p-10">
          <div>
            <h2>Обсудим ваш приоритетный кейс</h2>
            <p className="mt-6 max-w-xl text-base text-[var(--text-secondary)]">Заполните форму, и мы вернемся с предложением формата работы в течение одного рабочего дня.</p>
            <form className="mt-8 grid gap-4">
              <input type="text" placeholder="Имя" className="rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-base outline-none focus:border-[var(--accent-blue)]" />
              <input type="email" placeholder="Email" className="rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-base outline-none focus:border-[var(--accent-blue)]" />
              <textarea placeholder="Задача" rows={4} className="rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-base outline-none focus:border-[var(--accent-blue)]" />
              <button type="submit" className="rounded-xl border border-[var(--accent-blue)] bg-[var(--accent-blue)] px-6 py-3 text-sm font-semibold text-white">Отправить заявку</button>
            </form>
          </div>
          <aside className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--accent-blue)]">Trust proof</p>
            <p className="mt-4 text-base text-[var(--text-secondary)]">40+ предприятий, 3.3 млрд ₽ экономического эффекта, руководители уровня CEO-1 в проектном контуре.</p>
            <div className="mt-6 grid gap-4">
              <div className="rounded-xl border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-sm)] transition hover:shadow-[var(--shadow-md)]">
                <p className="text-3xl font-bold text-[var(--text-primary)]">1 рабочий день</p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">срок первичного ответа</p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-sm)] transition hover:shadow-[var(--shadow-md)]">
                <p className="text-3xl font-bold text-[var(--text-primary)]">C-level формат</p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">структурированная рабочая сессия</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
