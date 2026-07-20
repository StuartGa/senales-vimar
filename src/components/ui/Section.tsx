import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 md:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  className,
  children,
  id,
  tone = "default",
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
  tone?: "default" | "muted" | "ink";
}) {
  const tones = {
    default: "bg-surface-elevated",
    muted: "bg-surface",
    ink: "bg-ink text-white",
  } as const;

  return (
    <section
      id={id}
      className={cn("py-[var(--space-section)]", tones[tone], className)}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.18em]",
            invert ? "text-white/70" : "text-brand",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "display text-3xl md:text-5xl",
          invert ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            invert ? "text-white/80" : "text-ink-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
