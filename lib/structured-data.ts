import { siteConfig } from "@/lib/seo";
import type { Locale } from "@/lib/translations";

export function buildStructuredData(locale: Locale) {
  const copy = siteConfig.copy[locale];
  const pageUrl = locale === "en" ? `${siteConfig.url}/en` : siteConfig.url;

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    jobTitle: copy.jobTitle,
    description: copy.description,
    image: `${siteConfig.url}/IMG_5923.jpg`,
    nationality: {
      "@type": "Country",
      name: siteConfig.location,
    },
    sameAs: siteConfig.sameAs,
    knowsAbout: [
      "Web Development",
      "React",
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Supabase",
      "Technology Consulting",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad Nacional de Costa Rica",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: copy.description,
    inLanguage: locale === "es" ? "es-CR" : "en-US",
    publisher: { "@id": `${siteConfig.url}/#person` },
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${pageUrl}/#webpage`,
    url: pageUrl,
    name: copy.title,
    description: copy.description,
    inLanguage: locale === "es" ? "es-CR" : "en-US",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#person` },
    mainEntity: { "@id": `${siteConfig.url}/#person` },
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#service`,
    name: `${siteConfig.name} — ${copy.jobTitle}`,
    url: siteConfig.url,
    description: copy.description,
    areaServed: {
      "@type": "Country",
      name: siteConfig.location,
    },
    provider: { "@id": `${siteConfig.url}/#person` },
    serviceType: [
      "Custom Web Development",
      "Technology Consulting",
      "Information Systems",
    ],
  };

  return [person, website, webPage, professionalService];
}
