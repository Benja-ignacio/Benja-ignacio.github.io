const contacts = [
  {
    label: "Correo",
    value: "benja.ignacio.0515@gmail.com",
    href: "mailto:benja.ignacio.0515@gmail.com",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
  {
    label: "Teléfono",
    value: "+56 9 1234 5678",
    href: "tel:+56912345678",
    icon: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
    ),
  },
  {
    label: "GitHub",
    value: "github.com/Benja-ignacio",
    href: "https://github.com/Benja-ignacio",
    icon: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 4.9 4.9 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.2 1.7 5 2.1 5 2.1a4.9 4.9 0 0 0-.1 3.7A5.3 5.3 0 0 0 3.5 9.6c0 5.2 3.2 6.4 6.2 6.8a3.4 3.4 0 0 0-.9 2.6V22" />
    ),
  },
];

function ContactSection() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 shadow-sm sm:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
        />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Contacto
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              ¿Construimos algo juntos?
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              Estoy abierto a oportunidades de práctica, proyectos freelance y
              colaboraciones donde pueda seguir aprendiendo y aportar.
            </p>
            <a
              href="mailto:benja.ignacio.0515@gmail.com"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-contrast shadow-sm transition-all hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-md"
            >
              Enviar un correo
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
          </div>

          <ul className="grid gap-3">
            {contacts.map((contact) => (
              <li key={contact.label}>
                <a
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    contact.href.startsWith("http") ? "noreferrer" : undefined
                  }
                  className="flex items-center gap-4 rounded-xl border border-line bg-elevated/50 p-4 transition-all hover:border-accent/40 hover:bg-elevated"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
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
                      {contact.icon}
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-medium tracking-wide text-muted uppercase">
                      {contact.label}
                    </span>
                    <span className="mt-0.5 block truncate text-sm font-medium text-ink">
                      {contact.value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
