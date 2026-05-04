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
    <header className="sticky top-0 z-50 border-b border-[var(--border-light)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[var(--container-width)] items-center justify-between px-[var(--container-padding)] py-5">
        <a href="#" className="text-[var(--text-lg)] font-semibold tracking-tight text-[var(--color-text)] lg:text-[var(--text-xl)]">
          MSI Consulting
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-[var(--text-sm)] font-medium text-[var(--color-muted)] transition-opacity hover:opacity-70">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-[var(--radius-md)] border border-[var(--border-light)] bg-white px-4 py-2 text-[var(--text-sm)] font-medium text-[var(--color-text)] shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border-medium)] hover:shadow-[var(--shadow-md)] md:inline-flex"
        >
          Консультация
        </a>
      </div>
    </header>
  );
}
