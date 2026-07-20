import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contacto",
  description:
    "Contacta a Señales Vimar en Miguel Hidalgo, CDMX. Teléfonos, email y formulario para consultas o cotizaciones.",
  path: "/contacto",
});

export default function ContactPage() {
  return (
    <>
      <Section className="pt-28 md:pt-32">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Contacto"
              title="Hablemos"
              description="Oficina central en Ciudad de México con atención a proyectos en toda la República."
            />
            <dl className="mt-8 space-y-5">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                  Dirección
                </dt>
                <dd className="mt-2 text-lg text-ink">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.locality}, CP{" "}
                  {siteConfig.address.postalCode}
                  <br />
                  {siteConfig.address.region}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                  Horario
                </dt>
                <dd className="mt-2 text-lg text-ink">{siteConfig.hours}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                  Teléfono
                </dt>
                <dd className="mt-2 space-y-1 text-lg text-ink">
                  {siteConfig.phonesDisplay.map((phone) => (
                    <a
                      key={phone}
                      className="block hover:text-brand"
                      href={`tel:+52${phone.replace(/\s/g, "")}`}
                    >
                      {phone}
                    </a>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                  Email
                </dt>
                <dd className="mt-2 text-lg">
                  <a
                    className="text-ink hover:text-brand"
                    href={`mailto:${siteConfig.email}`}
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
            </dl>
            <Button href="/cotizacion" className="mt-8" variant="secondary">
              Ir directo a cotización
            </Button>
          </div>
          <div>
            <h2 className="display mb-4 text-2xl">Envíanos tu consulta</h2>
            <QuoteForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
