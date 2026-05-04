export function Contact() {
  return (
    <section id="contact" className="py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--container-padding)]">
        <div className="grid gap-8 border border-[var(--border)] bg-white p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <p className="text-xs uppercase tracking-[0.08em] text-[var(--text-muted)]">Контакт</p>
            <h2 className="mt-4">Обсудим приоритетную трансформацию</h2>
            <p className="mt-6 max-w-xl text-base text-[var(--text-secondary)]">Оставьте короткий запрос — вернемся с форматом взаимодействия в течение одного рабочего дня.</p>
            <form className="mt-8 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Имя" className="border border-[var(--border)] bg-white px-4 py-3 text-base outline-none focus:border-[var(--accent-blue)]" />
                <input type="email" placeholder="Email" className="border border-[var(--border)] bg-white px-4 py-3 text-base outline-none focus:border-[var(--accent-blue)]" />
              </div>
              <textarea placeholder="Бизнес-задача" rows={4} className="border border-[var(--border)] bg-white px-4 py-3 text-base outline-none focus:border-[var(--accent-blue)]" />
              <button type="submit" className="w-full border border-[var(--text-primary)] bg-[var(--text-primary)] px-6 py-3 text-sm font-medium text-white hover:opacity-90 sm:w-auto">Отправить запрос</button>
            </form>
          </div>
          <aside className="border border-[var(--border)] bg-[var(--surface)] p-8">
            <p className="text-xs uppercase tracking-[0.08em] text-[var(--text-muted)]">Trust proof</p>
            <p className="metric-number mt-4 text-[var(--accent-gold)]">3.3 млрд ₽</p>
            <p className="mt-3 text-base font-medium text-[var(--text-primary)]">подтвержденного экономического эффекта</p>
            <div className="mt-8 space-y-4">
              <div className="border border-[var(--border)] bg-white p-6 transition hover:shadow-[var(--shadow-hover)]">
                <p className="text-xs uppercase tracking-[0.08em] text-[var(--text-muted)]">Охват</p>
                <p className="mt-2 text-3xl text-[var(--text-primary)]">40+ предприятий</p>
              </div>
              <div className="border border-[var(--border)] bg-white p-6 transition hover:shadow-[var(--shadow-hover)]">
                <p className="text-xs uppercase tracking-[0.08em] text-[var(--text-muted)]">Формат</p>
                <p className="mt-2 text-3xl text-[var(--text-primary)]">C-level working sessions</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
