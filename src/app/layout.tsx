import type { Metadata } from "next";
import { Archivo, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MotionBanner } from "@/components/motion/MotionBanner";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessJsonLd, organizationJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Señalización vial profesional`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  keywords: [
    "señalización vial",
    "señalamiento vertical",
    "señalamiento horizontal",
    "defensa metálica",
    "protección de obra",
    "SCT",
    "México",
    "Señales Vimar",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Señalización vial profesional`,
    description: siteConfig.description,
    images: [{ url: "/og.png", width: 582, height: 292, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Señalización vial profesional`,
    description: siteConfig.description,
    images: ["/og.png"],
  },
  icons: {
    icon: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${archivo.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="atmosphere min-h-full flex flex-col font-sans">
        <MotionProvider>
          <a href="#contenido-principal" className="skip-link">
            Ir al contenido principal
          </a>
          <Header />
          <main id="contenido-principal" className="flex-1">
            {children}
          </main>
          <Footer />
          <MotionBanner />
          <JsonLd data={organizationJsonLd()} />
          <JsonLd data={localBusinessJsonLd()} />
        </MotionProvider>
      </body>
    </html>
  );
}
