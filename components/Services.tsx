const services = ["Корпоративная стратегия", "Оптимизация бизнес-процессов", "Запуск и развитие продуктов", "Аналитика и BI-системы"];

export function Services() {
  return (
    <section id="services" className="py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--container-padding)]">
        <h2 className="text-2xl lg:text-4xl">Услуги</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service}
              className="rounded-[var(--radius)] bg-white p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
            >
              <h3 className="text-xl">{service}</h3>
              <p className="mt-3 text-base lg:text-lg">Фокусируемся на практических изменениях и быстрых бизнес-результатах.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
