import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { categories } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-4 max-w-sm text-white/70">
            Soluciones profesionales en señalización vial desde{" "}
            {siteConfig.foundedYear}. Fabricación, suministro e instalación con
            cobertura nacional.
          </p>
          <Button href="/cotizacion" className="mt-6">
            Obtener cotización
          </Button>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            Productos
          </p>
          <ul className="mt-4 space-y-2">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/productos/${category.slug}`}
                  className="text-white/80 transition-colors hover:text-white"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            Empresa
          </p>
          <ul className="mt-4 space-y-2 text-white/80">
            <li>
              <Link href="/acerca-de" className="hover:text-white">
                Acerca de
              </Link>
            </li>
            <li>
              <Link href="/proyectos" className="hover:text-white">
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-white">
                Contacto
              </Link>
            </li>
            <li>
              <Link href="/politica-de-privacidad" className="hover:text-white">
                Privacidad
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            Oficina central
          </p>
          <address className="mt-4 not-italic text-white/80">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.locality}, {siteConfig.address.postalCode}
            <br />
            {siteConfig.address.region}
          </address>
          <p className="mt-4 text-white/80">{siteConfig.hours}</p>
          <p className="mt-4 space-y-1">
            {siteConfig.phonesDisplay.map((phone) => (
              <a
                key={phone}
                href={`tel:+52${phone.replace(/\s/g, "")}`}
                className="block hover:text-white"
              >
                {phone}
              </a>
            ))}
            <a
              href={`mailto:${siteConfig.email}`}
              className="block hover:text-white"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
            reservados.
          </p>
          <p>CDMX · Cobertura nacional</p>
        </Container>
      </div>
    </footer>
  );
}
