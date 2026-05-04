export function Hero() {
  return (
    <section id="hero" className="py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto grid max-w-[var(--container-width)] gap-12 px-[var(--container-padding)] lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-[var(--text-secondary)]">Master System Change Workshop</p>
          <h1 className="mt-6 max-w-3xl">Системные изменения для управляемого роста enterprise-компаний</h1>
          <p className="mt-6 max-w-xl text-base text-[var(--text-secondary)]">
            Работаем с советами директоров и C-level командами, чтобы превращать стратегические инициативы в подтвержденный экономический результат.
          </p>
          <p className="mt-8 border-y border-[var(--border)] py-4 text-sm font-medium text-[var(--text-primary)]">40+ предприятий · 3.3 млрд ₽ эффекта</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#cases" className="rounded-none border border-[var(--text-primary)] bg-[var(--text-primary)] px-8 py-3 text-center text-sm font-medium text-white hover:opacity-90">Ключевые результаты</a>
            <a href="#contact" className="rounded-none border border-[var(--border)] bg-white px-8 py-3 text-center text-sm font-medium text-[var(--text-primary)] hover:border-[var(--text-primary)]">Запросить встречу</a>
          </div>
        </div>

        <div className="border border-[var(--border)] bg-[var(--surface)] p-8">
          <div className="grid gap-4">
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-2 h-16 border border-[var(--border)] bg-white" />
              <div className="col-span-4 h-16 border border-[var(--border)] bg-white" />
            </div>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-3 h-24 border border-[var(--border)] bg-white" />
              <div className="col-span-3 h-24 border border-[var(--border)] bg-white" />
            </div>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-4 h-20 border border-[var(--border)] bg-white" />
              <div className="col-span-2 h-20 border border-[var(--border)] bg-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
