import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Category, Product } from "@/lib/products";

export function ProductCard({
  category,
  product,
}: {
  category: Category;
  product: Product;
}) {
  return (
    <Link
      href={`/productos/${category.slug}/${product.slug}`}
      className="group flex h-full flex-col rounded-[var(--radius-md)] border border-line bg-surface-elevated p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[var(--shadow-soft)]"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
        {category.shortName}
      </p>
      <h3 className="display mt-3 text-2xl text-ink">{product.name}</h3>
      <p className="mt-3 flex-1 text-ink-muted">{product.summary}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
        Ver detalle
        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: Array<{ label: string; href?: string }>;
}) {
  return (
    <nav aria-label="Migas de pan" className="text-sm text-ink-muted">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden>/</span> : null}
            {item.href ? (
              <Link href={item.href} className="hover:text-ink">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
