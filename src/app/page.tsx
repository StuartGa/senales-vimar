import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import {
  AboutTeaser,
  ClientsStrip,
  CoverageMap,
  CtaBand,
  FeaturedProjects,
  ProductCategories,
} from "@/components/home/Sections";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} | Señalización vial profesional`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <ProductCategories />
      <FeaturedProjects />
      <CoverageMap />
      <ClientsStrip />
      <CtaBand />
    </>
  );
}
