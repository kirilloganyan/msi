const experts = ["Партнеры Big4 и strategy consulting", "CPO и продуктовые директора", "Руководители digital и data-направлений", "Операционные лиды enterprise-компаний"];

export function Experts() {
  return (
    <section id="experts" className="bg-[var(--surface)] py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--container-padding)]">
        <h2>Команда экспертов</h2>
        <p className="mt-6 max-w-3xl text-base text-[var(--text-secondary)]">Междисциплинарная команда с опытом сопровождения сложных трансформаций в корпоративной среде.</p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {experts.map((item) => (
            <li key={item} className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-sm)] transition hover:shadow-[var(--shadow-md)]">
              <p className="text-lg font-bold text-[var(--text-primary)]">{item}</p>
              <p className="mt-3 text-base text-[var(--text-muted)]">Опыт внедрения в крупном корпоративном контуре.</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
