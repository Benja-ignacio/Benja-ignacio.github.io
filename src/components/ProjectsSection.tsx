import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Proyecto semestral Full Stack",
    description:
      "Aplicación web desarrollada como proyecto académico, integrando frontend, backend y despliegue en contenedores. El trabajo incluyó el diseño de la interfaz, la lógica del servidor y la gestión del repositorio.",
    tags: ["Java", "Spring Boot", "React", "Docker"],
    meta: "Proyecto académico",
    href: "https://github.com/Benja-ignacio",
    linkLabel: "Ver perfil de GitHub",
  },
  {
    title: "Portafolio personal",
    description:
      "Este sitio: una aplicación construida con React y TypeScript, con diseño responsive, componentes reutilizables y un sistema de temas claro/oscuro persistente.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    meta: "Proyecto personal",
    href: "https://github.com/Benja-ignacio/cv",
    linkLabel: "Ver repositorio",
  },
];

function ProjectsSection() {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Proyectos"
        title="Trabajo destacado"
        description="Una selección de los proyectos en los que he trabajado durante mi formación y de forma personal."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-md"
          >
            <div className="mb-5 flex items-center justify-between gap-3">
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
                  <path d="M4 19.5V6a2 2 0 0 1 2-2h9l5 5v10.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
                  <path d="M14 4v6h6M8 14h8M8 18h5" />
                </svg>
              </span>
              <span className="rounded-full border border-line bg-elevated/60 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-muted uppercase">
                {project.meta}
              </span>
            </div>

            <h3 className="font-display text-lg font-semibold text-ink">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
            >
              {project.linkLabel}
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
