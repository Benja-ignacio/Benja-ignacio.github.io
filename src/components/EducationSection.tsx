function EducationSection() {
  return (
    <section
      id="educacion"
      aria-labelledby="educacion-title"
      className="h-full rounded-2xl border border-line bg-surface p-6 shadow-sm"
    >
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 10 12 5 2 10l10 5 10-5Z" />
            <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
          </svg>
        </span>
        <h2
          id="educacion-title"
          className="font-display text-xl font-semibold text-ink"
        >
          Formación
        </h2>
      </div>

      <div className="rounded-xl border border-line bg-elevated/50 p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-ink">
              Ingeniería en Informática
            </h3>
            <p className="mt-1 text-sm text-muted">Duoc UC · Santiago</p>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-emerald-600 uppercase dark:text-emerald-400">
            En curso
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted">
          Formación orientada al desarrollo de software, bases de datos y
          gestión de proyectos, con énfasis en la aplicación práctica de los
          conocimientos.
        </p>

        <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-line pt-4 text-sm">
          <div>
            <dt className="text-xs font-medium tracking-wide text-muted uppercase">
              Sede
            </dt>
            <dd className="mt-1 font-medium text-ink">San Joaquín</dd>
          </div>
          <div>
            <dt className="text-xs font-medium tracking-wide text-muted uppercase">
              Estado
            </dt>
            <dd className="mt-1 font-medium text-ink">En proceso</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default EducationSection;
