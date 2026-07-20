import type { Metadata } from "next";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Política de privacidad",
  description:
    "Información sobre el tratamiento de datos personales en el sitio de Señales Vimar.",
  path: "/politica-de-privacidad",
});

export default function PrivacyPage() {
  return (
    <Section className="pt-28 md:pt-32">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Legal"
          title="Política de privacidad"
          description="Esta política describe de forma general cómo tratamos los datos que nos compartes al solicitar una cotización o contactarnos."
        />
        <div className="mt-8 space-y-6 text-ink-muted">
          <p>
            Los formularios de este sitio recolectan nombre, correo, datos del
            proyecto y cualquier información que decidas incluir para elaborar
            un presupuesto.
          </p>
          <p>
            Utilizamos esa información únicamente para responder tu solicitud,
            dar seguimiento comercial y cumplir obligaciones legales aplicables.
          </p>
          <p>
            Para ejercer derechos ARCO o aclarar el uso de tus datos, escribe a{" "}
            <a className="text-brand underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>{" "}
            o llama a {siteConfig.phonesDisplay[0]}.
          </p>
          <p>
            Responsable: {siteConfig.legalName}, {siteConfig.address.street},{" "}
            {siteConfig.address.locality}, {siteConfig.address.postalCode},{" "}
            {siteConfig.address.region}.
          </p>
        </div>
      </Container>
    </Section>
  );
}
