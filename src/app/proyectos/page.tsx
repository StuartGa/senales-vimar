import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { projects } from "@/lib/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Proyectos de señalización vial",
  description:
    "Casos de señalamiento vertical y horizontal, protección de obra y defensa metálica en infraestructura mexicana.",
  path: "/proyectos",
});

export default function ProjectsPage() {
  return (
    <>
      <Section className="pt-28 md:pt-32">
        <Container>
          <SectionHeading
            eyebrow="Proyectos"
            title="Obra ejecutada con precisión normativa"
            description="Una muestra de intervenciones en carretera, vialidad urbana y frentes de obra. Cada proyecto enlaza a cotización para solicitudes similares."
          />
        </Container>
      </Section>
      <Section tone="muted">
        <Container className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="flex h-full flex-col rounded-[var(--radius-md)] border border-line bg-surface-elevated p-6 md:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                {project.market}
              </p>
              <h2 className="display mt-3 text-2xl md:text-3xl">
                {project.title}
              </h2>
              <p className="mt-4 flex-1 text-ink-muted">{project.summary}</p>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-ink-muted">Cliente</dt>
                  <dd className="font-semibold text-ink">{project.client}</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Año</dt>
                  <dd className="font-semibold text-ink">{project.year}</dd>
                </div>
              </dl>
              <p className="mt-5 text-sm text-ink-muted">
                {project.tags.join(" · ")}
              </p>
              <Button href="/cotizacion" variant="secondary" className="mt-6 w-fit">
                Cotizar proyecto similar
              </Button>
            </article>
          ))}
        </Container>
      </Section>
    </>
  );
}
