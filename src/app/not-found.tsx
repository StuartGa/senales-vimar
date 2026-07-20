import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section className="pt-28 md:pt-32">
      <Container className="max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          404
        </p>
        <h1 className="display mt-4 text-4xl text-ink md:text-5xl">
          Página no encontrada
        </h1>
        <p className="mt-4 text-ink-muted">
          La ruta no existe o fue renombrada. Vuelve al inicio o explora el
          catálogo de productos.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Ir al inicio</Button>
          <Button href="/productos" variant="secondary">
            Ver productos
          </Button>
        </div>
        <p className="mt-6 text-sm text-ink-muted">
          ¿Buscabas contacto?{" "}
          <Link href="/contacto" className="text-brand underline">
            /contacto
          </Link>{" "}
          o{" "}
          <Link href="/cotizacion" className="text-brand underline">
            /cotizacion
          </Link>
          .
        </p>
      </Container>
    </Section>
  );
}
