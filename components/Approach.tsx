const steps = [
  { title: "Диагностика", text: "Проводим аудит операционной модели, воронок роста и ключевых ограничений." },
  { title: "Архитектура изменений", text: "Проектируем дорожную карту, метрики и зону ответственности на уровне руководства." },
  { title: "Реализация", text: "Сопровождаем внедрение в рабочих циклах до достижения целевых KPI." },
];

export function Approach() {
  return (
    <section id="approach" className="py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--container-padding)]">
        <h2>Наш подход</h2>
        <p className="mt-6 max-w-2xl text-base text-[var(--text-secondary)]">Структурированный цикл трансформации с фокусом на скорость и управляемость изменений.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-sm)] transition hover:shadow-[var(--shadow-md)]">
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--accent-blue)]">Шаг {index + 1}</p>
              <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-base text-[var(--text-secondary)]">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
