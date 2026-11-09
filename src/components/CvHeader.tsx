const facts = [
  { label: "Carrera", value: "Ingeniería en Informática" },
  { label: "Universidad", value: "Duoc UC · Sede San Joaquín" },
  { label: "Ubicación", value: "Santiago, Chile" },
  { label: "Enfoque", value: "Desarrollo Full Stack" },
  { label: "Inglés", value: "B1 · Intermedio" },
];

function CvHeader() {
  return (
    <header id="inicio" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
        <div className="absolute -top-40 right-[-10%] h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute top-24 left-[-12%] h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pt-16 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pt-24 lg:pb-28">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Disponible para oportunidades
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Benjamín Ignacio
            <span className="mt-1 block text-accent">Pérez Sarmiento</span>
          </h1>

          <p className="mt-5 text-lg font-medium text-ink sm:text-xl">
            Desarrollador Full Stack en formación
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Estudiante de Ingeniería en Informática en Duoc UC. Me interesa
            construir aplicaciones web limpias, bien estructuradas y centradas
            en las personas, combinando backend, frontend y buenas prácticas de
            desarrollo.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-contrast shadow-sm transition-all hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-md"
            >
              Hablemos
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-sm"
            >
              Ver proyectos
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
            <a
              href="mailto:benja.ignacio.0515@gmail.com"
              className="inline-flex items-center gap-2 transition-colors hover:text-ink"
            >
              <svg
                className="h-4 w-4 text-accent"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              benja.ignacio.0515@gmail.com
            </a>
            <span className="inline-flex items-center gap-2">
              <svg
                className="h-4 w-4 text-accent"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Santiago, Chile
            </span>
          </div>
        </div>

        <aside
          className="animate-fade-up rounded-2xl border border-line bg-surface p-1 shadow-sm"
          style={{ animationDelay: "120ms" }}
          aria-label="Resumen del perfil"
        >
          <div className="rounded-xl border border-line/70 bg-elevated/50 p-6">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <p className="font-display text-sm font-semibold text-ink">
                Ficha rápida
              </p>
              <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-accent uppercase">
                CV 2026
              </span>
            </div>

            <dl className="divide-y divide-line">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-4 py-3.5"
                >
                  <dt className="text-xs font-medium tracking-wide text-muted uppercase">
                    {fact.label}
                  </dt>
                  <dd className="text-right text-sm font-medium text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </header>
  );
}

export default CvHeader;
