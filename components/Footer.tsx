export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white py-8">
      <div className="mx-auto flex max-w-[var(--container-width)] flex-col gap-2 px-[var(--container-padding)] text-sm text-[var(--text-muted)] lg:flex-row lg:items-center lg:justify-between">
        <p>© {new Date().getFullYear()} MSI Consulting</p>
        <p>Master System Change Workshop</p>
      </div>
    </footer>
  );
}
