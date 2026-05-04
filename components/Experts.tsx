const experts = ["Стратегические консультанты", "Продуктовые лиды", "Финансовые аналитики", "Операционные директора"];

export function Experts() {
  return (
    <section id="experts" className="py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--container-padding)]">
        <h2 className="text-2xl lg:text-4xl">Эксперты</h2>
        <p className="mt-5 max-w-3xl text-base lg:text-lg">Над проектами работают междисциплинарные команды с опытом в международных и быстрорастущих компаниях.</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {experts.map((item) => (
            <li key={item} className="rounded-[var(--radius)] bg-white p-5 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
