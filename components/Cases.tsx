const cases = [
  {
    company: "FinCore Group",
    projects: "49 проектов",
    metric: "3.3 млрд ₽",
    outcome: "Новая модель коммерческого управления и срок окупаемости инициатив 9 месяцев.",
    roi: "ROI 55x",
  },
  {
    company: "Retail Point",
    projects: "27 проектов",
    metric: "-35%",
    outcome: "Пересобран операционный контур поставок и устранены bottleneck закупки и логистики.",
    roi: "ROI 18x",
  },
  {
    company: "B2B Cloud",
    projects: "33 проекта",
    metric: "+140%",
    outcome: "Запущена go-to-market трансформация и масштабирование продаж в трех географиях.",
    roi: "ROI 22x",
  },
];

export function Cases() {
  return (
    <section id="cases" className="py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--container-padding)]">
        <h2>Кейсы и результаты</h2>
        <p className="mt-6 max-w-2xl text-base text-[var(--text-secondary)]">Каждый проект строится вокруг измеримого эффекта на EBITDA, выручку или оборотный капитал.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cases.map((item) => (
            <article key={item.company} className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-sm)] transition hover:shadow-[var(--shadow-md)]">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">{item.company}</p>
              <p className="mt-4 text-5xl font-bold leading-none text-[var(--accent-gold)]">{item.metric}</p>
              <p className="mt-3 text-sm font-semibold text-[var(--text-primary)]">{item.projects}</p>
              <p className="mt-4 text-base text-[var(--text-secondary)]">{item.outcome}</p>
              <p className="mt-4 text-sm font-semibold text-[var(--text-primary)]">{item.roi}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
