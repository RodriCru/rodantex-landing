import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

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
    <html lang="es" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}