const jobs = [
  {
    company: "KFC",
    role: "Atención al cliente y operaciones",
    start: "2026-04",
    startLabel: "Abril 2026",
    endLabel: "Actualidad",
    current: true,
    description:
      "Atención y servicio a clientes, preparación de productos y mantenimiento del orden y la limpieza del área de trabajo, apoyando las distintas funciones del restaurante.",
  },
  {
    company: "Globalclean",
    role: "Limpieza y mantenimiento de espacios",
    start: "2025-12",
    startLabel: "Diciembre 2025",
    end: "2026-04",
    endLabel: "Abril 2026",
    current: false,
    description:
      "Realización de labores de limpieza y mantenimiento de espacios, procurando mantener ambientes limpios, ordenados y en buenas condiciones.",
  },
];

function ExperienceSection() {
  return (
    <section
      id="experiencia"
      aria-labelledby="experiencia-title"
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
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
          </svg>
        </span>
        <h2
          id="experiencia-title"
          className="font-display text-xl font-semibold text-ink"
        >
          Experiencia
        </h2>
      </div>

      <ol className="relative space-y-7 border-l border-line pl-6">
        {jobs.map((job) => (
          <li key={job.company} className="relative">
            <span
              className={`absolute top-1.5 -left-[31px] h-2.5 w-2.5 rounded-full ring-4 ring-surface ${
                job.current ? "bg-emerald-500" : "bg-accent/50"
              }`}
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-sm font-semibold text-ink">{job.company}</h3>
              <p className="text-xs font-medium text-muted">
                <time dateTime={job.start}>{job.startLabel}</time>
                <span aria-hidden="true"> — </span>
                {job.end ? (
                  <time dateTime={job.end}>{job.endLabel}</time>
                ) : (
                  <span>{job.endLabel}</span>
                )}
              </p>
            </div>
            <p className="mt-1 text-sm font-medium text-accent">{job.role}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {job.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default ExperienceSection;
