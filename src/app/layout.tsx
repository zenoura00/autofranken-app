import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientBody } from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Möbelmontage Nürnberg | Küchenmontage & Möbelaufbau Service",
  description: "Professionelle Küchen- und Möbelmontage in Nürnberg und Umgebung. Wir holen, liefern und montieren Ihre Möbel von IKEA, XXXLutz, Höffner & mehr. 150km Umkreis. ☎ +49 176 32333561",
  keywords: [
    "Möbelmontage Nürnberg",
    "Küchenmontage Nürnberg",
    "Möbelaufbau Service",
    "IKEA Montage Nürnberg",
    "Möbel aufbauen lassen",
    "Küche montieren",
    "Möbelmonteur Nürnberg",
    "Möbelmontage Fürth",
    "Möbelmontage Erlangen",
    "Möbellieferung Nürnberg"
  ],
  authors: [{ name: "Möbelmontage Nürnberg" }],
  creator: "Möbelmontage Nürnberg",
  publisher: "Möbelmontage Nürnberg",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://moebelmontage-nuernberg.de",
    siteName: "Möbelmontage Nürnberg",
    title: "Möbelmontage Nürnberg | Küchenmontage & Möbelaufbau",
    description: "Professionelle Küchen- und Möbelmontage in Nürnberg. Wir holen und montieren Ihre Möbel von allen bekannten Möbelhäusern. 8+ Jahre Erfahrung!",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 1024,
        alt: "Möbelmontage Nürnberg - Küchenmontage Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Möbelmontage Nürnberg | Küchenmontage & Möbelaufbau",
    description: "Professionelle Küchen- und Möbelmontage in Nürnberg. Kostenlose Anfrage & faire Preise!",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://moebelmontage-nuernberg.de",
  },
  category: "Home Services",
};

// Structured Data for Google Rich Snippets
const structuredData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Möbelmontage Nürnberg",
  "description": "Professionelle Küchen- und Möbelmontage in Nürnberg und Umgebung. Wir holen, liefern und montieren Ihre Möbel von IKEA, XXXLutz, Höffner, POCO und mehr.",
  "url": "https://moebelmontage-nuernberg.de",
  "telephone": "+49-176-32333561",
  "email": "info@moebelmontage-nuernberg.de",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nürnberg",
    "addressRegion": "Bayern",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "49.4521",
    "longitude": "11.0767"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "08:00",
    "closes": "20:00"
  },
  "priceRange": "€€",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "49.4521",
      "longitude": "11.0767"
    },
    "geoRadius": "150000"
  },
  "sameAs": [],
};

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Möbelmontage Nürnberg",
  "image": "https://moebelmontage-nuernberg.de/brand/logo-light.png",
  "telephone": "+49-176-32333561",
  "email": "info@moebelmontage-nuernberg.de",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nürnberg",
    "addressRegion": "Bayern",
    "postalCode": "90402",
    "addressCountry": "DE"
  },
  "priceRange": "€€",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "20:00"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#10B981" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
        />

        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
