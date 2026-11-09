import SectionHeading from "./SectionHeading";

const highlights = [
  {
    title: "Desarrollo web",
    description:
      "Construcción de interfaces y servicios con foco en un código claro, mantenible y fácil de evolucionar.",
    icon: (
      <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
    ),
  },
  {
    title: "Buenas prácticas",
    description:
      "Versionado con Git, entornos reproducibles con Docker y aprendizaje continuo de arquitectura de software.",
    icon: (
      <path d="M12 3v18M5 8l7-4 7 4M5 16l7 4 7-4M5 8v8M19 8v8" />
    ),
  },
  {
    title: "Trabajo en equipo",
    description:
      "Experiencia en atención al público y operaciones que reforzó la comunicación, la responsabilidad y la constancia.",
    icon: (
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    ),
  },
];

function AboutSection() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Sobre mí"
        title="Perfil profesional"
        description="Combino mi formación en informática con experiencia laboral en entornos exigentes, aportando orden, responsabilidad y ganas de seguir creciendo como desarrollador."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-line bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-sm"
          >
            <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
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
                {item.icon}
              </svg>
            </span>
            <h3 className="font-display text-base font-semibold text-ink">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
