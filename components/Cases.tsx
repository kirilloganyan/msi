const cases = [
  {
    company: "FinCore Group",
    industry: "FinTech",
    metric: "3.3 млрд ₽",
    outcome: "Создали новую модель коммерческого управления и сократили срок окупаемости инициатив до 9 месяцев.",
    roi: "ROI 4.8x",
  },
  {
    company: "Retail Point",
    industry: "Retail",
    metric: "-35%",
    outcome: "Пересобрали операционный контур поставок и устранили ключевые bottleneck в закупке и логистике.",
    roi: "ROI 3.1x",
  },
  {
    company: "B2B Cloud",
    industry: "SaaS",
    metric: "+140%",
    outcome: "Запустили go-to-market трансформацию и масштабировали продажи на трех новых географиях.",
    roi: "ROI 5.2x",
  },
];

export function Cases() {
  return (
    <section id="cases" className="py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--container-padding)]">
        <h2 className="text-[var(--text-2xl)] leading-tight lg:text-[44px]">Кейсы и результаты</h2>
        <p className="mt-4 max-w-2xl text-[var(--text-md)] text-[var(--color-muted)]">Каждый проект строится вокруг измеримого эффекта на EBITDA, выручку или оборотный капитал.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cases.map((item) => (
            <article key={item.company} className="rounded-[16px] border border-[var(--border-light)] bg-white p-6 shadow-[var(--shadow-sm)] transition duration-300 hover:-translate-y-1 hover:border-[var(--border-medium)] hover:shadow-[var(--shadow-md)]">
              <p className="text-[var(--text-sm)] font-medium text-[var(--color-text)]">{item.company}</p>
              <p className="mt-1 text-[var(--text-sm)] text-[var(--color-muted)]">{item.industry}</p>
              <p className="metric-number mt-5 text-[var(--text-3xl)] font-bold leading-none">{item.metric}</p>
              <p className="mt-4 text-[var(--text-base)] text-[var(--color-muted)]">{item.outcome}</p>
              <span className="mt-5 inline-block rounded-full border border-[var(--border-light)] bg-[var(--surface-alt)] px-3 py-1 text-[var(--text-xs)] font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)]">{item.roi}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
