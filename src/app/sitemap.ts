import type { MetadataRoute } from "next";
import { categories, allProductPaths } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

function abs(path: string) {
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return `${siteConfig.url}${normalized === "/" ? "/" : normalized}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/productos/",
    "/proyectos/",
    "/acerca-de/",
    "/cotizacion/",
    "/contacto/",
    "/politica-de-privacidad/",
  ].map((path) => ({
    url: abs(path),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const categoryRoutes = categories.map((category) => ({
    url: abs(`/productos/${category.slug}/`),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const productRoutes = allProductPaths().map((item) => ({
    url: abs(`/productos/${item.category}/${item.slug}/`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
