export function About() {
  return (
    <section id="about" className="py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--container-padding)]">
        <h2 className="text-[var(--text-2xl)] leading-tight lg:text-[44px]">О MSI</h2>
        <p className="mt-5 max-w-3xl text-[var(--text-md)] text-[var(--color-muted)]">
          Мы объединяем стратегический консалтинг, операционную экспертизу и продуктовый подход, чтобы компании переходили от точечных улучшений к устойчивой системе роста.
        </p>
      </div>
    </section>
  );
}
