const steps = [
  { title: "Диагностика", text: "Проводим аудит операционной модели, воронок роста и ключевых ограничений." },
  { title: "Архитектура изменений", text: "Проектируем дорожную карту, метрики и зону ответственности на уровне руководства." },
  { title: "Реализация", text: "Сопровождаем внедрение в рабочих циклах до достижения целевых KPI." },
];

export function Approach() {
  return (
    <section id="approach" className="py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--container-padding)]">
        <h2 className="text-[var(--text-2xl)] leading-tight lg:text-[44px]">Наш подход</h2>
        <p className="mt-4 max-w-2xl text-[var(--text-md)] text-[var(--color-muted)]">Структурированный цикл трансформации с фокусом на скорость и управляемость изменений.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-[var(--radius-lg)] border border-[var(--border-light)] bg-white p-6 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border-medium)] hover:shadow-[var(--shadow-md)]">
              <p className="text-[var(--text-sm)] font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)]">Шаг {index + 1}</p>
              <h3 className="mt-3 text-[var(--text-lg)] font-bold">{step.title}</h3>
              <p className="mt-3 text-[var(--text-base)] text-[var(--color-muted)]">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
