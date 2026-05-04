const services = ["Корпоративная стратегия", "Операционная трансформация", "Запуск и масштабирование продуктов", "Корпоративная аналитика и BI"];

export function Services() {
  return (
    <section id="services" className="bg-[var(--surface)] py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--container-padding)]">
        <h2>Услуги</h2>
        <p className="mt-6 max-w-2xl text-base text-[var(--text-secondary)]">Проектируем изменения под бизнес-модель компании, а не по шаблону.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <article key={service} className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-sm)] transition hover:shadow-[var(--shadow-md)]">
              <h3 className="text-xl font-bold">{service}</h3>
              <p className="mt-3 text-base text-[var(--text-secondary)]">Практические решения с прозрачной экономикой и фокусом на достижение целевых показателей.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
