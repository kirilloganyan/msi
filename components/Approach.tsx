const steps = [
  { title: "Диагностика", text: "Аудит операционной модели, воронок роста и ключевых ограничений." },
  { title: "Архитектура изменений", text: "Проектирование дорожной карты, метрик и ответственности на уровне руководства." },
  { title: "Реализация", text: "Сопровождение внедрения в рабочих циклах до достижения целевых KPI." },
];

export function Approach() {
  return (
    <section id="approach" className="py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--container-padding)]">
        <h2>Наш подход</h2>
        <p className="mt-6 max-w-2xl text-base text-[var(--text-secondary)]">Структурированный цикл трансформации с фокусом на управляемость и скорость решений.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="border border-[var(--border)] bg-white p-8 transition hover:shadow-[var(--shadow-hover)]">
              <p className="text-xs uppercase tracking-[0.08em] text-[var(--text-muted)]">Шаг {index + 1}</p>
              <h3 className="mt-4 text-2xl">{step.title}</h3>
              <p className="mt-4 text-base text-[var(--text-secondary)]">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
