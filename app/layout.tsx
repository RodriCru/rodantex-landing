import type { Metadata } from "next";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rodantex — Software de gestión de flotas, llantas y mantenimiento",
    template: "%s | Rodantex",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "gestión de flotas",
    "software para flotas",
    "control de llantas",
    "mantenimiento de flotas",
    "transporte escolar",
    "transporte público",
    "control de unidades",
    "México",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    locale: "es_MX",
    title: "Rodantex — Control de flotas, llantas y mantenimiento",
    description: "Controla llantas, mantenimientos y toda tu flota en un solo lugar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodantex — Control de flotas, llantas y mantenimiento",
    description: "Controla llantas, mantenimientos y toda tu flota en un solo lugar.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
