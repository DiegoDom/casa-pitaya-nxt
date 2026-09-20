import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://casapitaya.mx"),
  title: "Casa Pitaya | Casa Vacacional en Puerto Vallarta",
  description:
    "Casa Pitaya es una residencia vacacional completa en Puerto Vallarta con 6 recámaras, 8 camas, 4 baños y alberca privada para grupos grandes de hasta 16 personas.",
  keywords: [
    "Casa Pitaya",
    "Puerto Vallarta",
    "casa vacacional Puerto Vallarta",
    "alojamiento para grupos Puerto Vallarta",
    "casa con alberca Puerto Vallarta",
    "Las Gaviotas Puerto Vallarta",
  ],
  authors: [{ name: "Diana Zavala" }],
  openGraph: {
    title: "Casa Pitaya | Casa Vacacional en Puerto Vallarta",
    description:
      "Residencia vacacional completa en Las Gaviotas, Puerto Vallarta. 6 recámaras, alberca privada y espacio para grupos de hasta 16 personas.",
    url: "https://casapitaya.mx",
    siteName: "Casa Pitaya",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/images/client/logo-stacked.svg",
        width: 800,
        height: 600,
        alt: "Casa Pitaya — Puerto Vallarta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa Pitaya | Casa Vacacional en Puerto Vallarta",
    description:
      "Residencia vacacional completa en Las Gaviotas, Puerto Vallarta para grupos de hasta 16 personas con alberca privada.",
    images: ["/images/client/logo-stacked.svg"],
  },
  icons: {
    icon: "/images/client/favicon.svg",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-MX"
      className={`${notoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
