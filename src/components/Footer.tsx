function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-display text-xs font-semibold text-accent-contrast">
            BP
          </span>
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Benjamín Pérez. Todos los derechos
            reservados.
          </p>
        </div>

        <nav aria-label="Enlaces del pie de página">
          <ul className="flex items-center gap-5 text-sm font-medium text-muted">
            <li>
              <a
                href="#sobre-mi"
                className="transition-colors hover:text-ink"
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="#proyectos"
                className="transition-colors hover:text-ink"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Benja-ignacio"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-ink"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
