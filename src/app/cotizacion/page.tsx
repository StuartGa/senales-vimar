import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Cotización de señalización vial",
  description:
    "Solicita un presupuesto estimativo de señalamiento vertical, horizontal, protección de obra o defensa metálica. Respuesta en horario hábil.",
  path: "/cotizacion",
});

export default function QuotePage() {
  return (
    <Section className="pt-28 md:pt-32">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Cotización"
            title="Obtener cotización"
            description="Te enviaremos un presupuesto estimativo. Completa el formulario con el producto y la ubicación del proyecto."
          />
          <div className="mt-8 space-y-4 text-ink-muted">
            <p>
              <strong className="text-ink">Horario:</strong> {siteConfig.hours}
            </p>
            <p>
              <strong className="text-ink">Email:</strong>{" "}
              <a className="underline" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </p>
            <p>
              <strong className="text-ink">Teléfonos:</strong>{" "}
              {siteConfig.phonesDisplay.join(" · ")}
            </p>
          </div>
        </div>
        <QuoteForm />
      </Container>
    </Section>
  );
}
