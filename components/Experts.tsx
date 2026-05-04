const experts = ["Партнеры Big4 и strategy consulting", "CPO и продуктовые директора", "Руководители digital и data-направлений", "Операционные лиды enterprise-компаний"];

export function Experts() {
  return (
    <section id="experts" className="bg-[var(--surface)] py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--container-padding)]">
        <h2>Команда экспертов</h2>
        <p className="mt-6 max-w-3xl text-base text-[var(--text-secondary)]">Междисциплинарная команда с опытом реализации сложных трансформаций в корпоративной среде.</p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {experts.map((item) => (
            <li key={item} className="border border-[var(--border)] bg-white p-8 transition hover:shadow-[var(--shadow-hover)]">
              <p className="text-xs uppercase tracking-[0.08em] text-[var(--text-muted)]">Экспертиза</p>
              <p className="mt-4 text-2xl text-[var(--text-primary)]">{item}</p>
              <p className="mt-4 text-base text-[var(--text-secondary)]">Опыт внедрения в многослойной enterprise-организации.</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
