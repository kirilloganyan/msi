const services = ["Корпоративная стратегия", "Операционная трансформация", "Запуск и масштабирование продуктов", "Корпоративная аналитика и BI"];

export function Services() {
  return (
    <section id="services" className="bg-[var(--surface)] py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--container-padding)]">
        <h2>Услуги</h2>
        <p className="mt-6 max-w-2xl text-base text-[var(--text-secondary)]">Решения под бизнес-модель компании с прозрачной экономикой внедрения.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <article key={service} className="border border-[var(--border)] bg-white p-8 transition hover:shadow-[var(--shadow-hover)]">
              <p className="text-xs uppercase tracking-[0.08em] text-[var(--text-muted)]">Практика</p>
              <h3 className="mt-4 text-2xl">{service}</h3>
              <p className="mt-4 text-base text-[var(--text-secondary)]">Исполняемая программа изменений с измеримым бизнес-эффектом.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
