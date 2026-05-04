const steps = [
  { title: "Диагностика", text: "Проводим аудит бизнеса, процессов и клиентского пути." },
  { title: "Стратегия", text: "Формируем дорожную карту изменений с метриками результата." },
  { title: "Реализация", text: "Сопровождаем внедрение и развиваем внутреннюю команду." },
];

export function Approach() {
  return (
    <section id="approach" className="py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--container-padding)]">
        <h2 className="text-2xl lg:text-4xl">Наш подход</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[var(--radius)] bg-white p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
            >
              <p className="text-sm font-semibold text-[var(--color-blue)]">Шаг {index + 1}</p>
              <h3 className="mt-2 text-xl">{step.title}</h3>
              <p className="mt-3 text-base lg:text-lg">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
