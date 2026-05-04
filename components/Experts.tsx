const experts = ["Партнеры Big4 и strategy consulting", "CPO и продуктовые директора", "Руководители digital и data-направлений", "Операционные лиды enterprise-компаний"];

export function Experts() {
  return (
    <section id="experts" className="py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--container-padding)]">
        <h2 className="text-[var(--text-2xl)] leading-tight lg:text-[44px]">Команда экспертов</h2>
        <p className="mt-4 max-w-3xl text-[var(--text-md)] text-[var(--color-muted)]">Междисциплинарная команда с опытом сопровождения сложных трансформаций в корпоративной среде.</p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {experts.map((item) => (
            <li key={item} className="rounded-[var(--radius-lg)] border border-[var(--border-light)] bg-white p-6 text-[var(--text-base)] shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border-medium)] hover:shadow-[var(--shadow-md)]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
