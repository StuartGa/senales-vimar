export type Product = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  features: string[];
  norms: string[];
};

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  description: string;
  accent: string;
  image: string;
  imageAlt: string;
  products: Product[];
};

export const categories: Category[] = [
  {
    slug: "senalamiento-vertical",
    name: "Señalamiento vertical",
    shortName: "Vertical",
    summary:
      "Señales preventivas, restrictivas e informativas con reflejante de alto rendimiento.",
    description:
      "Diseñamos y fabricamos señalamiento vertical conforme a la normatividad vigente de la SCT y estándares aplicables en proyectos urbanos y carreteros. Suministro e instalación a nivel nacional.",
    accent: "#2F7D32",
    image: "/images/categories/vertical.jpg",
    imageAlt: "Señalamiento vertical informativo instalado en carretera",
    products: [
      {
        slug: "senales-preventivas",
        name: "Señales preventivas",
        summary: "Advertencia de riesgos y cambios en la vía.",
        description:
          "Tableros preventivos en lámina galvanizada con película reflejante grado ingeniería o alta intensidad, según especificación del proyecto.",
        features: [
          "Formas y códigos según manual SCT",
          "Soportes y anclajes incluidos bajo pedido",
          "Opciones de recubrimiento anticorrosivo",
        ],
        norms: ["SCT", "NOM aplicables"],
      },
      {
        slug: "senales-restrictivas",
        name: "Señales restrictivas",
        summary: "Regulación de circulación y prioridad.",
        description:
          "Señalamiento restrictivo para control de velocidad, sentido, estacionamiento y prioridad en intersecciones.",
        features: [
          "Alta legibilidad diurna y nocturna",
          "Personalización por proyecto",
          "Fabricación desde 1 pieza",
        ],
        norms: ["SCT", "Protección Civil"],
      },
      {
        slug: "senales-informativas",
        name: "Señales informativas y SID",
        summary: "Orientación, destinos y servicios en ruta.",
        description:
          "Señalamiento informativo y sistemas de información direccional (SID) para carreteras, urbanas y desarrollos.",
        features: [
          "Diagramación tipográfica normativa",
          "Paneles modulares",
          "Instalación y supervisión de obra",
        ],
        norms: ["SCT"],
      },
    ],
  },
  {
    slug: "senalamiento-horizontal",
    name: "Señalamiento horizontal",
    shortName: "Horizontal",
    summary:
      "Pintura vial, termoplástico, botones y vialetas para demarcación durable.",
    description:
      "Soluciones de demarcación horizontal para vialidades urbanas, carreteras, estacionamientos, aeropuertos y ciclovías, con materiales de línea y de alto desempeño.",
    accent: "#1F6B8A",
    image: "/images/categories/horizontal.jpg",
    imageAlt: "Dispositivos de señalamiento horizontal y control vial",
    products: [
      {
        slug: "pintura-vim",
        name: "Pintura VIM",
        summary: "Pintura vial de alto rendimiento para demarcación.",
        description:
          "Pintura vial formulada para adherencia, cobertura y visibilidad en condiciones de tráfico intenso.",
        features: [
          "Aplicación mecánica o manual",
          "Colores normalizados",
          "Compatible con microesfera reflejante",
        ],
        norms: ["SCT"],
      },
      {
        slug: "pintura-termoplastica",
        name: "Pintura termoplástica FT",
        summary: "Demarcación termoplástica de larga duración.",
        description:
          "Material termoplástico para marcas longitudinales y simbología con excelente retención de perlas reflejantes.",
        features: [
          "Alta durabilidad en tráfico pesado",
          "Secado rápido",
          "Espesor controlado por especificación",
        ],
        norms: ["SCT"],
      },
      {
        slug: "botones-y-vialetas",
        name: "Botones y vialetas",
        summary: "Dispositivos reflejantes de apoyo a la demarcación.",
        description:
          "Botones y vialetas para refuerzo de carriles, bordes y zonas de riesgo, con opciones de anclaje según sustrato.",
        features: [
          "Reflejante diurno/nocturno",
          "Resistencia al impacto",
          "Instalación en obra nueva o rehabilitación",
        ],
        norms: ["SCT"],
      },
    ],
  },
  {
    slug: "senalamiento-proteccion-obra",
    name: "Señalamiento de protección de obra",
    shortName: "Protección de obra",
    summary:
      "Canalización, dispositivos temporales y seguridad en zonas de trabajo.",
    description:
      "Equipamos frentes de obra con dispositivos de canalización y señalamiento temporal para proteger trabajadores y usuarios de la vía.",
    accent: "#C45C12",
    image: "/images/categories/proteccion.jpg",
    imageAlt: "Barreras naranjas de protección de obra en vialidad",
    products: [
      {
        slug: "barreras-y-canalizadores",
        name: "Barreras y canalizadores",
        summary: "Delimitación temporal de carriles y frentes de obra.",
        description:
          "Conos, delineadores, barreras y sistemas de canalización para desvíos y protección perimetral.",
        features: [
          "Alta visibilidad",
          "Montaje rápido",
          "Kits por etapa de obra",
        ],
        norms: ["SCT", "Protección Civil"],
      },
      {
        slug: "senalamiento-temporal",
        name: "Señalamiento temporal",
        summary: "Señales y dispositivos para desvíos y cierres parciales.",
        description:
          "Señalamiento temporal conforme al plan de manejo de tránsito del proyecto.",
        features: [
          "Soportes portátiles",
          "Reflejante de obra",
          "Asesoría en layout de desvío",
        ],
        norms: ["SCT"],
      },
      {
        slug: "amortiguadores-de-impacto",
        name: "Amortiguadores de impacto",
        summary: "Dispositivos de atenuación en zonas críticas.",
        description:
          "Sistemas de atenuación de impacto para terminales y puntos de riesgo en obra o infraestructura permanente.",
        features: [
          "Selección según velocidad de diseño",
          "Instalación especializada",
          "Mantenimiento y refacciones",
        ],
        norms: ["SCT"],
      },
    ],
  },
  {
    slug: "defensa-metalica",
    name: "Defensa metálica",
    shortName: "Defensa metálica",
    summary:
      "Barreras de contención metálica para carreteras y vialidades.",
    description:
      "Suministro e instalación de defensa metálica y componentes asociados para contención vehicular en infraestructura carretera y urbana.",
    accent: "#5A6570",
    image: "/images/categories/defensa.jpg",
    imageAlt: "Defensa metálica tipo W instalada en carretera",
    products: [
      {
        slug: "defensa-w",
        name: "Defensa tipo W",
        summary: "Barrera de contención metálica estándar.",
        description:
          "Defensa metálica tipo W con postes, terminales y herrajes según especificación del proyecto.",
        features: [
          "Acero galvanizado",
          "Terminales y transiciones",
          "Instalación y nivelación en sitio",
        ],
        norms: ["SCT"],
      },
      {
        slug: "terminales-y-transiciones",
        name: "Terminales y transiciones",
        summary: "Extremos y empalmes seguros de barrera.",
        description:
          "Componentes de inicio/fin y transición entre sistemas de contención.",
        features: [
          "Compatibilidad con defensa W",
          "Anclajes certificados bajo pedido",
          "Asesoría técnica de trazo",
        ],
        norms: ["SCT"],
      },
      {
        slug: "postes-y-herrajes",
        name: "Postes y herrajes",
        summary: "Componentes estructurales para montaje completo.",
        description:
          "Postes, tornillería y herrajes para instalación completa de sistemas de defensa metálica.",
        features: [
          "Inventario de línea",
          "Corte y perforación a medida",
          "Logística a obra",
        ],
        norms: ["SCT"],
      },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProduct(categorySlug: string, productSlug: string) {
  const category = getCategory(categorySlug);
  if (!category) return null;
  const product = category.products.find((p) => p.slug === productSlug);
  if (!product) return null;
  return { category, product };
}

export function allProductPaths() {
  return categories.flatMap((category) =>
    category.products.map((product) => ({
      category: category.slug,
      slug: product.slug,
    })),
  );
}
