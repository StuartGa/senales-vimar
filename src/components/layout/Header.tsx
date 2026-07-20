"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { cn } from "@/lib/cn";
import { categories } from "@/lib/products";
import { navLinks } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const menuId = useId();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,color] duration-300",
        solid
          ? "bg-[rgba(247,250,247,0.94)] text-ink shadow-[0_1px_0_var(--line)] backdrop-blur-md"
          : "bg-transparent text-white",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 md:h-20">
        <Logo variant={solid ? "light" : "auto"} priority />

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            if ("children" in link && link.children) {
              return (
                <div key={link.href} className="relative">
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-1 rounded-[var(--radius-sm)] px-3 py-2 text-sm font-semibold uppercase tracking-[0.08em] transition-colors",
                      pathname.startsWith("/productos")
                        ? solid
                          ? "text-brand"
                          : "text-white"
                        : solid
                          ? "text-ink-muted hover:text-ink"
                          : "text-white/80 hover:text-white",
                    )}
                    aria-expanded={productsOpen}
                    aria-controls={`${menuId}-desktop`}
                    onClick={() => setProductsOpen((v) => !v)}
                    onBlur={(e) => {
                      if (
                        !e.currentTarget.parentElement?.contains(
                          e.relatedTarget as Node,
                        )
                      ) {
                        setProductsOpen(false);
                      }
                    }}
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4" aria-hidden />
                  </button>
                  <div
                    id={`${menuId}-desktop`}
                    hidden={!productsOpen}
                    className="absolute left-0 top-full mt-2 min-w-64 rounded-[var(--radius-md)] border border-line bg-surface-elevated p-2 text-ink shadow-[var(--shadow-soft)]"
                  >
                    <Link
                      href="/productos"
                      className="block rounded-[var(--radius-sm)] px-3 py-2 text-sm font-semibold hover:bg-brand-soft"
                    >
                      Ver todos los productos
                    </Link>
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/productos/${category.slug}`}
                        className="block rounded-[var(--radius-sm)] px-3 py-2 text-sm text-ink-muted hover:bg-brand-soft hover:text-ink"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-[var(--radius-sm)] px-3 py-2 text-sm font-semibold uppercase tracking-[0.08em] transition-colors",
                  active
                    ? solid
                      ? "text-brand"
                      : "text-white"
                    : solid
                      ? "text-ink-muted hover:text-ink"
                      : "text-white/80 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href="/cotizacion"
            size="md"
            className={cn(
              "hidden sm:inline-flex",
              !solid && "bg-brand text-white hover:bg-brand-strong",
            )}
          >
            Cotizar
          </Button>
          <button
            type="button"
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] lg:hidden",
              solid ? "bg-surface text-ink" : "bg-white/10 text-white",
            )}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <div
        id={menuId}
        hidden={!open}
        className="border-t border-line bg-surface-elevated text-ink lg:hidden"
      >
        <Container className="flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-[var(--radius-sm)] px-3 py-3 text-base font-semibold"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 border-t border-line pt-3">
            <p className="px-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
              Categorías
            </p>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/productos/${category.slug}`}
                className="block rounded-[var(--radius-sm)] px-3 py-2 text-sm text-ink-muted"
              >
                {category.name}
              </Link>
            ))}
          </div>
          <Button href="/cotizacion" className="mt-3 w-full">
            Cotizar
          </Button>
        </Container>
      </div>
    </header>
  );
}
