const navItems = [
  { href: "#about", label: "О нас" },
  { href: "#approach", label: "Подход" },
  { href: "#services", label: "Услуги" },
  { href: "#cases", label: "Кейсы" },
  { href: "#experts", label: "Эксперты" },
  { href: "#contact", label: "Контакты" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[var(--container-width)] items-center justify-between px-[var(--container-padding)] py-4">
        <a href="#" className="text-xl font-semibold text-[var(--color-text)] lg:text-2xl">
          GrowthLab
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm transition-opacity hover:opacity-70 lg:text-base">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-[var(--radius)] border border-gray-200 px-3 py-2 text-sm md:hidden"
          aria-label="Открыть меню"
        >
          Меню
        </button>
      </div>
    </header>
  );
}
