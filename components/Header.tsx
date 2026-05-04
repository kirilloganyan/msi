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
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[var(--container-width)] items-center justify-between px-[var(--container-padding)] py-5">
        <a href="#" className="text-xl font-semibold tracking-tight text-[var(--text-primary)]">MSI Consulting</a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden rounded-xl border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--text-primary)] md:inline-flex">
          Консультация
        </a>
      </div>
    </header>
  );
}
