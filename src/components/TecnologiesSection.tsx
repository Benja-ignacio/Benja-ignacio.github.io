import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    title: "Lenguajes",
    skills: ["Java", "Python"],
  },
  {
    title: "Frameworks y librerías",
    skills: ["Spring Boot", "React", "TypeScript"],
  },
  {
    title: "Herramientas",
    skills: ["Git", "GitHub", "Docker", "Linux"],
  },
];

const languages = [
  { name: "Español", level: "Nativo", value: 100 },
  { name: "Inglés", level: "B1 · Intermedio", value: 60 },
];

function TecnologiesSection() {
  return (
    <section id="habilidades" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Habilidades"
        title="Tecnologías e idiomas"
        description="Herramientas que utilizo en mi formación y proyectos, junto con las aptitudes complementarias de mi perfil."
      />

      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <article className="rounded-2xl border border-line bg-surface p-6 shadow-sm">
          <h3 className="mb-6 flex items-center gap-3 font-display text-lg font-semibold text-ink">
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
                <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
              </svg>
            </span>
            Stack técnico
          </h3>

          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                  {group.title}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-line bg-elevated/60 px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-line bg-surface p-6 shadow-sm">
          <h3 className="mb-6 flex items-center gap-3 font-display text-lg font-semibold text-ink">
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
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
              </svg>
            </span>
            Idiomas
          </h3>

          <ul className="space-y-6">
            {languages.map((language) => (
              <li key={language.name}>
                <div className="mb-2 flex items-baseline justify-between gap-3">
                  <span className="text-sm font-semibold text-ink">
                    {language.name}
                  </span>
                  <span className="text-xs font-medium text-muted">
                    {language.level}
                  </span>
                </div>
                <div
                  className="h-2 overflow-hidden rounded-full bg-elevated"
                  role="progressbar"
                  aria-label={`Nivel de ${language.name}`}
                  aria-valuenow={language.value}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{ width: `${language.value}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-6 border-t border-line pt-5 text-sm leading-relaxed text-muted">
            Comunicación técnica en inglés para lectura de documentación y
            trabajo con herramientas de desarrollo.
          </p>
        </article>
      </div>
    </section>
  );
}

export default TecnologiesSection;
