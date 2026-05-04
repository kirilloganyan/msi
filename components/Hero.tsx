export function Hero() {
  return (
    <section id="hero" className="py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto grid max-w-[var(--container-width)] gap-10 px-[var(--container-padding)] lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.12em] text-[var(--color-primary)]">Консалтинг нового уровня</p>
          <h1 className="text-3xl leading-tight lg:text-5xl">Помогаем бизнесу расти быстрее через стратегию, продукт и данные</h1>
          <p className="mt-6 max-w-xl text-base lg:text-lg">
            Строим понятные планы масштабирования, повышаем эффективность процессов и запускаем инициативы, которые дают измеримый результат.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-[var(--radius)] bg-[var(--color-primary)] px-6 py-3 text-center font-semibold text-white transition-opacity hover:opacity-90"
            >
              Обсудить проект
            </a>
            <a
              href="#cases"
              className="rounded-[var(--radius)] border border-gray-200 bg-white px-6 py-3 text-center font-semibold transition-transform hover:-translate-y-0.5"
            >
              Смотреть кейсы
            </a>
          </div>
        </div>

        <div className="rounded-[var(--radius)] bg-white p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[var(--radius)] bg-[var(--color-primary)]/10 p-4">
              <p className="text-3xl font-semibold text-[var(--color-primary)] lg:text-4xl">+140%</p>
              <p className="mt-2 text-sm">Средний рост выручки клиентов за 12 месяцев</p>
            </div>
            <div className="rounded-[var(--radius)] bg-[var(--color-success)]/10 p-4">
              <p className="text-3xl font-semibold text-[var(--color-success)] lg:text-4xl">36</p>
              <p className="mt-2 text-sm">Успешно реализованных трансформаций</p>
            </div>
            <div className="rounded-[var(--radius)] bg-[var(--color-accent)]/10 p-4 sm:col-span-2">
              <p className="text-sm">Работаем с B2B, FinTech, Retail и SaaS-компаниями в России и СНГ.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
