import type { Metadata } from "next";
import type { Locale } from "@/lib/translations";

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://frandercarrillo.com",
  name: "Frander Carrillo",
  email: "info@frandercarrillo.com",
  phone: "+506 8650 5959",
  location: "Costa Rica",
  locale: "es_CR",
  alternateLocale: "en_US",
  twitterHandle: "@fran_ct05",
  sameAs: [
    "https://www.linkedin.com/in/frander-carrillo-7a52b8338/",
    "https://www.instagram.com/fran_ct05/",
    "https://www.facebook.com/frander.carrillotorres/",
  ],
  keywords: {
    es: [
      "Frander Carrillo",
      "desarrollador web Costa Rica",
      "desarrollo web a medida",
      "asesoría tecnológica",
      "sistemas de información",
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "Supabase",
      "freelance desarrollador",
      "portafolio desarrollador",
    ],
    en: [
      "Frander Carrillo",
      "web developer Costa Rica",
      "custom web development",
      "technology consulting",
      "information systems",
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "Supabase",
      "freelance developer",
      "developer portfolio",
    ],
  },
  copy: {
    es: {
      title: "Frander Carrillo | Desarrollador Web y Asesor Tecnológico",
      description:
        "Desarrollador web en Costa Rica. Diseño y desarrollo soluciones digitales a medida con React, Next.js y NestJS: sistemas de gestión, asesoría tecnológica y software que impulsa el crecimiento de tu negocio.",
      shortDescription:
        "Desarrollador web en Costa Rica especializado en soluciones a medida con React, Next.js y NestJS.",
      jobTitle: "Desarrollador Web y Asesor Tecnológico",
      ogAlt:
        "Frander Carrillo — Desarrollador web en Costa Rica, soluciones digitales a medida",
    },
    en: {
      title: "Frander Carrillo | Web Developer & Technology Advisor",
      description:
        "Web developer in Costa Rica. I design and build custom digital solutions with React, Next.js, and NestJS — management systems, technology consulting, and software that drives real business growth.",
      shortDescription:
        "Web developer in Costa Rica specializing in custom solutions with React, Next.js, and NestJS.",
      jobTitle: "Web Developer & Technology Advisor",
      ogAlt:
        "Frander Carrillo — Web developer in Costa Rica, custom digital solutions",
    },
  },
} as const;

export function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith("/en") ? "en" : "es";
}

function getSiteVerification(): Metadata["verification"] {
  const verification: NonNullable<Metadata["verification"]> = {};

  if (process.env.GOOGLE_SITE_VERIFICATION) {
    verification.google = process.env.GOOGLE_SITE_VERIFICATION;
  }
  if (process.env.BING_SITE_VERIFICATION) {
    verification.other = {
      ...verification.other,
      "msvalidate.01": process.env.BING_SITE_VERIFICATION,
    };
  }

  return Object.keys(verification).length > 0 ? verification : undefined;
}

export function buildMetadata(locale: Locale, path = "/"): Metadata {
  const copy = siteConfig.copy[locale];
  const canonicalPath = locale === "en" ? "/en" : "/";
  const languages: Record<string, string> = {
    es: `${siteConfig.url}/`,
    en: `${siteConfig.url}/en`,
    "x-default": `${siteConfig.url}/`,
  };

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: copy.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: copy.description,
    keywords: [...siteConfig.keywords[locale]],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    verification: getSiteVerification(),
    alternates: {
      canonical: canonicalPath,
      languages,
      types: {
        "application/rss+xml": [{ url: "/rss.xml", title: `${siteConfig.name} RSS` }],
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? siteConfig.locale : siteConfig.alternateLocale,
      alternateLocale: [
        locale === "es" ? siteConfig.alternateLocale : siteConfig.locale,
      ],
      url: `${siteConfig.url}${path === "/" ? "" : path}`,
      siteName: siteConfig.name,
      title: copy.title,
      description: copy.description,
      images: [
        {
          url: locale === "en" ? "/en/opengraph-image" : "/opengraph-image",
          width: 1200,
          height: 630,
          alt: copy.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.shortDescription,
      creator: siteConfig.twitterHandle,
      images: [locale === "en" ? "/en/opengraph-image" : "/opengraph-image"],
    },
    icons: {
      icon: [{ url: "/icon", type: "image/png" }],
      apple: [{ url: "/apple-icon", type: "image/png" }],
    },
    manifest: "/manifest.webmanifest",
    other: {
      "geo.region": "CR",
      "geo.placename": siteConfig.location,
    },
  };
}
