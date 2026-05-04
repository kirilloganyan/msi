const services = ["Корпоративная стратегия", "Операционная трансформация", "Запуск и масштабирование продуктов", "Корпоративная аналитика и BI"];

export function Services() {
  return (
    <section id="services" className="py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--container-padding)]">
        <h2 className="text-[var(--text-2xl)] leading-tight lg:text-[44px]">Услуги</h2>
        <p className="mt-4 max-w-2xl text-[var(--text-md)] text-[var(--color-muted)]">Проектируем изменения под бизнес-модель компании, а не по шаблону.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <article key={service} className="rounded-[var(--radius-lg)] border border-[var(--border-light)] bg-white p-6 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border-medium)] hover:shadow-[var(--shadow-md)]">
              <h3 className="text-[var(--text-lg)] font-bold">{service}</h3>
              <p className="mt-3 text-[var(--text-base)] text-[var(--color-muted)]">Практические решения с прозрачной экономикой и фокусом на достижение целевых показателей.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
