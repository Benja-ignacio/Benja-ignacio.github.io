type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 max-w-2xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
