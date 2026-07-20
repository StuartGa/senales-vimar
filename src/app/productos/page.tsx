import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { ProductCard } from "@/components/products/ProductCard";
import { categories } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Productos de señalización vial",
  description:
    "Catálogo de señalamiento vertical, horizontal, protección de obra y defensa metálica. Fabricación e instalación con cobertura nacional.",
  path: "/productos",
});

export default function ProductsPage() {
  return (
    <>
      <Section className="pt-28 md:pt-32">
        <Container>
          <SectionHeading
            eyebrow="Productos"
            title="Catálogo de señalización vial"
            description="Explora nuestras líneas de producto. Cada categoría incluye fichas técnicas orientadas a especificación de obra y cotización."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/productos/${category.slug}`}
                className="group overflow-hidden rounded-[var(--radius-md)] border border-line bg-surface transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
                    aria-hidden
                  />
                  <p className="absolute bottom-4 left-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/85">
                    0{index + 1} · {category.shortName}
                  </p>
                </div>
                <div className="p-5">
                  <h2 className="display text-2xl text-ink group-hover:text-brand">
                    {category.name}
                  </h2>
                  <p className="mt-2 text-sm text-ink-muted">{category.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    Ver categoría
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {categories.map((category) => (
        <Section key={category.slug} tone="muted" id={category.slug}>
          <Container>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                title={category.name}
                description={category.description}
              />
              <Button href={`/productos/${category.slug}`} variant="secondary">
                Ver categoría
              </Button>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {category.products.map((product) => (
                <ProductCard
                  key={product.slug}
                  category={category}
                  product={product}
                />
              ))}
            </div>
          </Container>
        </Section>
      ))}
    </>
  );
}
