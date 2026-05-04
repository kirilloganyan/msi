const cases = [
  { company: "FinCore", result: "Сократили CAC на 28% и удвоили MRR за 8 месяцев." },
  { company: "Retail Point", result: "Ускорили цикл поставок на 35% через редизайн процессов." },
  { company: "B2B Cloud", result: "Запустили новый продукт и вышли на 3 новых рынка." },
];

export function Cases() {
  return (
    <section id="cases" className="py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--container-padding)]">
        <h2 className="text-2xl lg:text-4xl">Кейсы</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.company}
              className="rounded-[var(--radius)] bg-white p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
            >
              <h3 className="text-xl">{item.company}</h3>
              <p className="mt-3 text-base lg:text-lg">{item.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
