import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { HeroVideo } from "@/components/home/HeroVideo";
import { ScrollCue } from "@/components/motion/ScrollCue";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden text-white">
      <HeroVideo />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
        aria-hidden
      />
      <div className="noise absolute inset-0" aria-hidden />

      <Container className="relative flex min-h-[100svh] flex-col justify-center pb-28 pt-28">
        <p className="animate-fade text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
          Infraestructura y señalización vial · desde {siteConfig.foundedYear}
        </p>
        <h1 className="display animate-rise mt-5 max-w-4xl text-4xl sm:text-5xl md:text-7xl">
          {siteConfig.tagline}
        </h1>
        <p className="animate-rise delay-1 mt-6 max-w-2xl text-lg text-white/85 md:text-xl">
          Expertos en fabricación, suministro e instalación de señalamiento
          vertical, horizontal, protección de obra y defensa metálica.
        </p>
        <div className="animate-rise delay-2 mt-10 flex flex-wrap gap-3">
          <Button href="/productos" variant="onDark" size="lg">
            Ver productos
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Button>
          <Button href="/cotizacion" size="lg">
            Cotizar proyecto
          </Button>
        </div>
      </Container>
      <ScrollCue />
    </section>
  );
}
