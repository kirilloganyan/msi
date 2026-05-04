const cases = [
  {
    company: "FinCore Group",
    projects: "49 проектов",
    impact: "3.3 млрд ₽",
    outcome: "Перестроена модель коммерческого управления и цикл окупаемости инициатив сокращен до 9 месяцев.",
    roi: "ROI 55x",
  },
  {
    company: "Retail Point",
    projects: "27 проектов",
    impact: "-35%",
    outcome: "Оптимизирован контур поставок, сняты ключевые ограничения в закупке и логистике.",
    roi: "ROI 18x",
  },
  {
    company: "B2B Cloud",
    projects: "33 проекта",
    impact: "+140%",
    outcome: "Реализована go-to-market трансформация с масштабированием продаж в трех географиях.",
    roi: "ROI 22x",
  },
];

export function Cases() {
  return (
    <section id="cases" className="py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--container-padding)]">
        <h2>Impact blocks</h2>
        <p className="mt-6 max-w-2xl text-base text-[var(--text-secondary)]">Каждый кейс фиксирует прямой эффект на выручку, маржинальность или оборотный капитал.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cases.map((item) => (
            <article key={item.company} className="border border-[var(--border)] bg-white p-8 transition hover:shadow-[var(--shadow-hover)]">
              <p className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--text-muted)]">{item.projects}</p>
              <p className="metric-number mt-6 text-[var(--accent-gold)]">{item.impact}</p>
              <p className="mt-4 text-base font-medium text-[var(--text-primary)]">{item.roi}</p>
              <p className="mt-4 text-base text-[var(--text-secondary)]">{item.outcome}</p>
              <p className="mt-8 text-sm text-[var(--text-muted)]">{item.company}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
