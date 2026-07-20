import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { categories } from "@/lib/products";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export function AboutTeaser() {
  return (
    <Section tone="muted" id="acerca">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            eyebrow="Acerca de"
            title="Impulsamos la movilidad segura con soluciones profesionales"
            description="Acompañamos a constructoras, desarrolladores y entidades de gobierno en proyectos que exigen precisión, cumplimiento normativo y durabilidad."
          />
        </Reveal>
        <div>
          <div className="grid grid-cols-2 gap-4">
            {siteConfig.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 90} variant="scale">
                <div className="interactive-lift rounded-[var(--radius-md)] border border-line bg-surface-elevated p-5">
                  <p className="display text-3xl text-brand md:text-4xl">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={360}>
            <Button href="/acerca-de" variant="secondary" className="mt-6">
              Conocer la empresa
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Button>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export function ProductCategories() {
  return (
    <Section>
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Catálogo"
            title="Nuestros productos"
            description="Cuatro líneas especializadas para infraestructura carretera, vialidades urbanas y frentes de obra."
          />
          <Button href="/productos" variant="secondary">
            Ver catálogo completo
          </Button>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {categories.map((category, index) => (
            <Reveal key={category.slug} delay={index * 100}>
              <Link
                href={`/productos/${category.slug}`}
                className="interactive-lift group relative block overflow-hidden rounded-[var(--radius-md)] border border-line bg-surface hover:border-brand/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink/5">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent"
                    aria-hidden
                  />
                  <span
                    className="absolute left-0 top-0 h-full w-1.5"
                    style={{ backgroundColor: category.accent }}
                    aria-hidden
                  />
                  <p className="absolute bottom-4 left-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                    0{index + 1}
                  </p>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="display text-2xl text-ink transition-colors group-hover:text-brand md:text-3xl">
                    {category.name}
                  </h3>
                  <p className="mt-3 max-w-md text-ink-muted">
                    {category.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    Explorar
                    <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function FeaturedProjects() {
  return (
    <Section tone="muted">
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Proyectos"
            title="Historias de infraestructura"
            description="Selección de intervenciones reales en señalamiento, protección de obra y contención."
          />
          <Button href="/proyectos" variant="secondary">
            Ver todos los proyectos
          </Button>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.slice(0, 4).map((project, index) => (
            <Reveal
              key={project.slug}
              as="article"
              delay={index * 100}
              className="interactive-lift rounded-[var(--radius-md)] border border-line bg-surface-elevated p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                {project.market}
              </p>
              <h3 className="display mt-3 text-2xl text-ink">{project.title}</h3>
              <p className="mt-3 text-ink-muted">{project.summary}</p>
              <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-ink-muted">Cliente</dt>
                  <dd className="font-semibold text-ink">{project.client}</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Año</dt>
                  <dd className="font-semibold text-ink">{project.year}</dd>
                </div>
              </dl>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function CtaBand() {
  return (
    <Section tone="ink" className="relative overflow-hidden">
      <div
        className="cta-glow pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(47,125,50,0.45), transparent 45%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08), transparent 35%)",
        }}
        aria-hidden
      />
      <Container className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <Reveal className="max-w-2xl" variant="left">
          <h2 className="display text-3xl md:text-5xl">
            ¿Listo para cotizar tu próximo proyecto?
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Cuéntanos el alcance, la ubicación y la norma aplicable. Te
            respondemos con un presupuesto estimativo.
          </p>
        </Reveal>
        <Reveal delay={160} variant="scale">
          <Button href="/cotizacion" size="lg">
            Obtener cotización
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}

export function CoverageMap() {
  return (
    <Section tone="ink" className="overflow-hidden">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            eyebrow="Cobertura"
            title="Presencia en la República Mexicana"
            description="Atendemos proyectos en todo el país. Nuestra operación se concentra en nodos estratégicos como CDMX/Texcoco, Guadalajara, Monterrey, San Luis Potosí y Mérida."
            invert
          />
          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-white/75 sm:grid-cols-3">
            {[
              "CDMX / Texcoco",
              "Guadalajara",
              "Monterrey",
              "San Luis Potosí",
              "Mérida",
              "Cobertura nacional",
            ].map((city) => (
              <li
                key={city}
                className="border-l-2 border-brand pl-3 font-semibold tracking-wide"
              >
                {city}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120} variant="scale">
          <div className="relative overflow-hidden rounded-[var(--radius-md)] border border-white/10 bg-black">
            <Image
              src="/images/brand/mexico-map.png"
              alt="Mapa de cobertura de Señales Vimar en la República Mexicana"
              width={1920}
              height={1080}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export function ClientsStrip() {
  const clients = [
    "Gobierno",
    "Constructoras",
    "Desarrolladores",
    "Concesionarias",
    "Industria",
  ];

  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Clientes"
            title="Cada cliente es un aliado estratégico"
            description="Atendemos sector público y privado con el mismo estándar de calidad y cumplimiento."
            align="center"
          />
        </Reveal>
        <Reveal delay={120}>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-line bg-line sm:grid-cols-5">
            {clients.map((client, index) => (
              <li
                key={client}
                className="bg-surface-elevated px-4 py-5 text-center text-sm font-semibold tracking-wide text-ink-muted transition-colors duration-300 hover:bg-brand-soft hover:text-brand"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {client}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
