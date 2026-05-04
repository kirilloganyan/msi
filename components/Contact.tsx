export function Contact() {
  return (
    <section id="contact" className="py-[var(--section-padding-mobile)] lg:py-[var(--section-padding)]">
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--container-padding)]">
        <div className="rounded-[var(--radius)] bg-white p-6 shadow-[var(--shadow-card)] lg:p-10">
          <h2 className="text-2xl lg:text-4xl">Свяжитесь с нами</h2>
          <p className="mt-4 max-w-2xl text-base lg:text-lg">Оставьте заявку — обсудим задачу, цели и формат сотрудничества в течение одного рабочего дня.</p>
          <form className="mt-8 grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Ваше имя"
              className="rounded-[var(--radius)] border border-gray-200 px-4 py-3 outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/30"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-[var(--radius)] border border-gray-200 px-4 py-3 outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/30"
            />
            <textarea
              placeholder="Кратко опишите задачу"
              rows={4}
              className="rounded-[var(--radius)] border border-gray-200 px-4 py-3 outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/30 md:col-span-2"
            />
            <button
              type="submit"
              className="rounded-[var(--radius)] bg-[var(--color-primary)] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 md:col-span-2 md:justify-self-start"
            >
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
