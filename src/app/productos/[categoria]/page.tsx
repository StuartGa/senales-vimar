import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import {
  Breadcrumbs,
  ProductCard,
} from "@/components/products/ProductCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { categories, getCategory } from "@/lib/products";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ categoria: string }> };

export function generateStaticParams() {
  return categories.map((category) => ({ categoria: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params;
  const category = getCategory(categoria);
  if (!category) return {};
  return buildMetadata({
    title: category.name,
    description: category.description,
    path: `/productos/${category.slug}`,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { categoria } = await params;
  const category = getCategory(categoria);
  if (!category) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Productos", path: "/productos" },
          { name: category.name, path: `/productos/${category.slug}` },
        ])}
      />
      <Section className="pt-28 md:pt-32">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Productos", href: "/productos" },
                { label: category.name },
              ]}
            />
            <div className="mt-6 max-w-3xl">
              <SectionHeading
                eyebrow="Categoría"
                title={category.name}
                description={category.description}
              />
            </div>
            <Button href="/cotizacion" className="mt-8">
              Cotizar {category.shortName.toLowerCase()}
            </Button>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)] border border-line">
            <Image
              src={category.image}
              alt={category.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Container>
      </Section>
      <Section tone="muted">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
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
    </>
  );
}
