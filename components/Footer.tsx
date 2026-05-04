export function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="mx-auto flex max-w-[var(--container-width)] flex-col gap-2 px-[var(--container-padding)] text-sm lg:flex-row lg:items-center lg:justify-between">
        <p>© {new Date().getFullYear()} GrowthLab</p>
        <p>Стратегический консалтинг для устойчивого роста</p>
      </div>
    </footer>
  );
}
