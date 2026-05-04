export function Hero() {
  return (
    <section id="hero" className="py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto grid max-w-[var(--container-width)] gap-8 px-[var(--container-padding)] lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent-blue)]">Master System Change Workshop</p>
          <h1 className="mt-4 max-w-2xl">Системные изменения, которые ускоряют рост enterprise-бизнеса</h1>
          <p className="mt-6 max-w-xl text-base text-[var(--text-secondary)]">
            Помогаем советам директоров и C-level командам реализовать стратегические инициативы с измеримым финансовым результатом.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="rounded-xl border border-[var(--accent-blue)] bg-[var(--accent-blue)] px-7 py-3 text-center text-sm font-semibold text-white">Обсудить проект</a>
            <a href="#cases" className="rounded-xl border border-[var(--border)] bg-white px-7 py-3 text-center text-sm font-semibold text-[var(--text-primary)]">Смотреть кейсы</a>
          </div>
          <p className="mt-6 text-sm text-[var(--text-secondary)]">40+ предприятий · 3.3 млрд ₽ эффекта</p>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-sm)]">
          <div className="grid gap-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-16 rounded-lg border border-[var(--border)] bg-white" />
              <div className="h-16 rounded-lg border border-[var(--border)] bg-white" />
              <div className="h-16 rounded-lg border border-[var(--border)] bg-white" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-24 rounded-lg border border-[var(--border)] bg-white" />
              <div className="h-24 rounded-lg border border-[var(--border)] bg-white" />
            </div>
            <div className="h-20 rounded-lg border border-[var(--border)] bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
