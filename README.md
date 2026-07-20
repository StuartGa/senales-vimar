# Señales Vimar — sitio web

Rebuild del sitio comercial de Señales Vimar (señalización vial) con Next.js App Router, SEO técnico y export estático.

## Demo

GitHub Pages: https://stuartga.github.io/senales-vimar/

## Desarrollo

```bash
npm install
npm run dev
```

Build estático (como en Pages):

```bash
NEXT_PUBLIC_BASE_PATH=/senales-vimar \
NEXT_PUBLIC_SITE_URL=https://stuartga.github.io/senales-vimar \
npm run build
```

La salida queda en `out/`.

## Stack

- Next.js 16 (static export) + TypeScript + Tailwind CSS 4
- Design tokens, animaciones con respeto a `prefers-reduced-motion`
- SEO: metadata, sitemap, robots, JSON-LD

## Contenido editable

Datos en `src/lib/` (`site.ts`, `products.ts`, `projects.ts`, `faq.ts`).
Assets de marca en `public/images/brand/`.
