import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/products/ProductCard";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { allProductPaths, getProduct } from "@/lib/products";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ categoria: string; slug: string }>;
};

export function generateStaticParams() {
  return allProductPaths().map((item) => ({
    categoria: item.category,
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria, slug } = await params;
  const result = getProduct(categoria, slug);
  if (!result) return {};
  return buildMetadata({
    title: result.product.name,
    description: result.product.description,
    path: `/productos/${result.category.slug}/${result.product.slug}`,
  });
}

export default async function ProductPage({ params }: Props) {
  const { categoria, slug } = await params;
  const result = getProduct(categoria, slug);
  if (!result) notFound();
  const { category, product } = result;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Productos", path: "/productos" },
          { name: category.name, path: `/productos/${category.slug}` },
          {
            name: product.name,
            path: `/productos/${category.slug}/${product.slug}`,
          },
        ])}
      />
      <Section className="pt-28 md:pt-32">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Productos", href: "/productos" },
                { label: category.name, href: `/productos/${category.slug}` },
                { label: product.name },
              ]}
            />
            <h1 className="display mt-6 text-4xl text-ink md:text-6xl">
              {product.name}
            </h1>
            <p className="mt-5 text-lg text-ink-muted">{product.description}</p>
            <div className="mt-8">
              <h2 className="display text-2xl">Características</h2>
              <ul className="mt-4 space-y-3 text-ink-muted">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 border-b border-line pb-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <h2 className="display text-2xl">Normatividad de referencia</h2>
              <p className="mt-3 text-ink-muted">{product.norms.join(" · ")}</p>
            </div>
            <Button href={`/productos/${category.slug}`} variant="secondary" className="mt-8">
              Volver a {category.name}
            </Button>
          </div>
          <div>
            <h2 className="display mb-4 text-2xl">Solicitar cotización</h2>
            <QuoteForm defaultProduct={product.name} compact />
          </div>
        </Container>
      </Section>
    </>
  );
}
