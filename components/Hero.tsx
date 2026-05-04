export function Hero() {
  return (
    <section id="hero" className="py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto grid max-w-[var(--container-width)] gap-12 px-[var(--container-padding)] lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 text-[var(--text-sm)] font-medium uppercase tracking-[0.14em] text-[var(--color-primary)]">Master System Change Workshop</p>
          <h1 className="max-w-xl text-[40px] leading-[1.05] tracking-tight lg:text-[var(--text-4xl)]">Системные изменения, которые ускоряют рост enterprise-бизнеса</h1>
          <p className="mt-6 max-w-xl text-[var(--text-md)] text-[var(--color-muted)]">
            Помогаем советам директоров и C-level командам реализовать стратегические инициативы с измеримым финансовым результатом.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="rounded-[var(--radius-md)] bg-[var(--color-primary)] px-7 py-3 text-center text-[var(--text-sm)] font-semibold text-white transition-opacity hover:opacity-90">Обсудить проект</a>
            <a href="#cases" className="rounded-[var(--radius-md)] border border-[var(--border-light)] bg-white px-7 py-3 text-center text-[var(--text-sm)] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border-medium)]">Смотреть кейсы</a>
          </div>
          <div className="mt-10 grid gap-4 rounded-[var(--radius-lg)] border border-[var(--border-light)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)] sm:grid-cols-3">
            <div>
              <p className="metric-number text-[var(--text-xl)] font-bold">40+</p>
              <p className="text-[var(--text-sm)] text-[var(--color-muted)]">трансформаций
              </p>
            </div>
            <div>
              <p className="metric-number text-[var(--text-xl)] font-bold">12</p>
              <p className="text-[var(--text-sm)] text-[var(--color-muted)]">отраслей экспертизы</p>
            </div>
            <div>
              <p className="metric-number text-[var(--text-xl)] font-bold">NPS 78</p>
              <p className="text-[var(--text-sm)] text-[var(--color-muted)]">по итогам программ</p>
            </div>
          </div>
        </div>

        <div className="relative rounded-[var(--radius-lg)] border border-[var(--border-light)] bg-white p-6 shadow-[var(--shadow-md)]">
          <div className="absolute inset-0 rounded-[var(--radius-lg)] bg-[linear-gradient(130deg,rgba(31,59,122,0.06),transparent_45%)]" />
          <div className="relative grid gap-4">
            <div className="rounded-[var(--radius-md)] border border-[var(--border-light)] bg-[var(--surface-alt)] p-5">
              <p className="text-[var(--text-sm)] text-[var(--color-muted)]">Системный эффект</p>
              <p className="metric-number mt-2 text-[var(--text-3xl)] font-bold">3.3B ₽</p>
              <p className="mt-2 text-[var(--text-sm)] text-[var(--color-muted)]">суммарный экономический эффект клиентских программ</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[var(--radius-md)] border border-[var(--border-light)] bg-white p-4">
                <p className="text-[var(--text-sm)] text-[var(--color-muted)]">Revenue uplift</p>
                <p className="metric-number mt-1 text-[var(--text-xl)] font-bold">+140%</p>
              </div>
              <div className="rounded-[var(--radius-md)] border border-[var(--border-light)] bg-white p-4">
                <p className="text-[var(--text-sm)] text-[var(--color-muted)]">Time-to-value</p>
                <p className="metric-number mt-1 text-[var(--text-xl)] font-bold">-35%</p>
              </div>
            </div>
            <div className="rounded-[var(--radius-md)] border border-dashed border-[var(--border-medium)] bg-white p-4 text-[var(--text-sm)] text-[var(--color-muted)]">
              Strategy • Operations • Product • Data
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
