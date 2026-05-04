export function Contact() {
  return (
    <section id="contact" className="py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--container-padding)]">
        <div className="grid gap-8 rounded-[var(--radius-lg)] border border-[var(--border-light)] bg-white p-6 shadow-[var(--shadow-md)] lg:grid-cols-2 lg:p-10">
          <div>
            <h2 className="text-[var(--text-2xl)] leading-tight lg:text-[44px]">Обсудим ваш приоритетный кейс</h2>
            <p className="mt-4 max-w-xl text-[var(--text-md)] text-[var(--color-muted)]">Заполните форму, и мы вернемся с предложением формата работы в течение одного рабочего дня.</p>
            <form className="mt-8 grid gap-4">
              <input type="text" placeholder="Ваше имя" className="rounded-[var(--radius-md)] border border-[var(--border-light)] px-4 py-3 text-[var(--text-base)] outline-none transition focus:border-[var(--border-medium)]" />
              <input type="email" placeholder="Email" className="rounded-[var(--radius-md)] border border-[var(--border-light)] px-4 py-3 text-[var(--text-base)] outline-none transition focus:border-[var(--border-medium)]" />
              <textarea placeholder="Кратко опишите задачу" rows={4} className="rounded-[var(--radius-md)] border border-[var(--border-light)] px-4 py-3 text-[var(--text-base)] outline-none transition focus:border-[var(--border-medium)]" />
              <button type="submit" className="rounded-[var(--radius-md)] bg-[var(--color-primary)] px-6 py-3 text-[var(--text-sm)] font-semibold text-white transition-opacity hover:opacity-90">Отправить заявку</button>
            </form>
          </div>
          <aside className="rounded-[var(--radius-lg)] border border-[var(--border-light)] bg-[var(--surface-alt)] p-6">
            <p className="text-[var(--text-sm)] font-medium uppercase tracking-[0.08em] text-[var(--color-primary)]">Trust proof</p>
            <p className="mt-4 text-[var(--text-md)] text-[var(--color-muted)]">С нами работают команды, которым нужны предсказуемые изменения без потери операционного темпа.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[var(--radius-md)] border border-[var(--border-light)] bg-white p-4">
                <p className="metric-number text-[var(--text-xl)] font-bold">40+</p>
                <p className="text-[var(--text-sm)] text-[var(--color-muted)]">клиентских программ</p>
              </div>
              <div className="rounded-[var(--radius-md)] border border-[var(--border-light)] bg-white p-4">
                <p className="metric-number text-[var(--text-xl)] font-bold">15 лет</p>
                <p className="text-[var(--text-sm)] text-[var(--color-muted)]">средний опыт партнеров</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
