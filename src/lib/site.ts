export const siteConfig = {
  name: "Señales Vimar",
  legalName: "Señales Vimar",
  tagline: "Señalando caminos, garantizando seguridad.",
  description:
    "Fabricamos, suministramos e instalamos señalamiento vial vertical y horizontal, protección de obra y defensa metálica. Cobertura nacional desde 2011.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.senalesvimar.com",
  locale: "es_MX",
  foundedYear: 2011,
  email: "contacto@senalesvimar.com",
  phones: ["+52 55 5748 7069", "+52 55 5748 5374"],
  phonesDisplay: ["55 5748 7069", "55 5748 5374"],
  address: {
    street: "San Isidro, Reforma Social",
    locality: "Miguel Hidalgo",
    region: "Ciudad de México",
    postalCode: "11650",
    country: "MX",
  },
  hours: "Lunes a viernes: 8:00–17:00 h",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  stats: [
    { value: "48", label: "Obras en curso" },
    { value: "282", label: "Proyectos completados" },
    { value: "35", label: "Socios comerciales" },
    { value: "15+", label: "Años de experiencia" },
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos", children: true },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/acerca-de", label: "Acerca de" },
  { href: "/contacto", label: "Contacto" },
] as const;
