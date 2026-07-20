import type { Metadata } from "next";
import Image from "next/image";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { faqs } from "@/lib/faq";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Acerca de Señales Vimar",
  description:
    "Más de una década fabricando e instalando señalización vial en México. Cumplimiento normativo SCT, cobertura nacional y enfoque en seguridad.",
  path: "/acerca-de",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <Section className="pt-28 md:pt-32">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Acerca de"
            title="Señales Vimar"
            description="Desarrollamos e implementamos soluciones integrales en señalización vial para proyectos urbanos, carreteros e industriales."
          />
          <div className="mt-8 space-y-5 text-lg text-ink-muted">
            <p>
              Trabajamos bajo normatividad vigente, garantizando calidad,
              visibilidad y durabilidad en cada producto.
            </p>
            <p>
              Acompañamos a constructoras, desarrolladores y entidades
              gubernamentales en la ejecución de proyectos que priorizan la
              seguridad y el orden en la infraestructura.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Servicios",
              body: "Señalamiento vertical y horizontal, dispositivos de seguridad vial y defensa metálica para carreteras, urbanas, estacionamientos, aeropuertos y ciclovías.",
            },
            {
              title: "Experiencia",
              body: `Con trayectoria desde ${siteConfig.foundedYear}, atendemos proyectos de distintas escalas con soluciones confiables, eficientes y alineadas a la norma.`,
            },
            {
              title: "Responsabilidad",
              body: "Cada producto está pensado para mejorar la movilidad, prevenir riesgos y promover una infraestructura vial más segura.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[var(--radius-md)] border border-line bg-surface-elevated p-6"
            >
              <h2 className="display text-2xl text-ink">{item.title}</h2>
              <p className="mt-3 text-ink-muted">{item.body}</p>
            </article>
          ))}
        </Container>
      </Section>

      <Section tone="ink">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Cobertura"
              title="Presencia nacional"
              description="Cobertura en toda la República Mexicana, con nodos en CDMX/Texcoco, Guadalajara, Monterrey, San Luis Potosí y Mérida."
              invert
            />
          </div>
          <div className="overflow-hidden rounded-[var(--radius-md)] border border-white/10 bg-black">
            <Image
              src="/images/brand/mexico-map.png"
              alt="Mapa de cobertura de Señales Vimar en México"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="¿Necesitas más información?"
            description="Respuestas frecuentes sobre cobertura, mínimos de pedido, normas y tiempos de entrega."
          />
          <FaqAccordion items={faqs} />
        </Container>
      </Section>

      <Section tone="ink">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="display text-3xl">Hablemos de tu proyecto</h2>
            <p className="mt-3 max-w-xl text-white/75">
              Cotiza con datos reales de alcance, ubicación y norma aplicable.
            </p>
          </div>
          <Button href="/cotizacion" size="lg">
            Ir a cotización
          </Button>
        </Container>
      </Section>
    </>
  );
}
