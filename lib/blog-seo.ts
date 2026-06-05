import type { Metadata } from "next";
import type { BlogPost } from "@/lib/blog";
import { getBlogPath } from "@/lib/blog";
import { siteConfig } from "@/lib/seo";
import type { Locale } from "@/lib/translations";

export function buildBlogIndexMetadata(locale: Locale): Metadata {
  const isEn = locale === "en";
  const path = getBlogPath(locale);
  const title = isEn ? "Blog" : "Blog";
  const description = isEn
    ? "Articles on custom web development, Next.js, React, and technology consulting for businesses in Costa Rica."
    : "Artículos sobre desarrollo web a medida, Next.js, React y asesoría tecnológica para empresas en Costa Rica.";

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        es: `${siteConfig.url}/blog`,
        en: `${siteConfig.url}/en/blog`,
        "x-default": `${siteConfig.url}/blog`,
      },
    },
    openGraph: {
      type: "website",
      locale: isEn ? siteConfig.alternateLocale : siteConfig.locale,
      url: `${siteConfig.url}${path}`,
      title: `${title} | ${siteConfig.name}`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}

export function buildBlogPostMetadata(post: BlogPost): Metadata {
  const path = getBlogPath(post.locale, post.slug);

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "article",
      locale: post.locale === "es" ? siteConfig.locale : siteConfig.alternateLocale,
      url: `${siteConfig.url}${path}`,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [siteConfig.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      creator: siteConfig.twitterHandle,
    },
    other: {
      "article:author": siteConfig.name,
      "article:published_time": post.date,
      "article:tag": post.tags.join(", "),
    },
  };
}

export function buildArticleJsonLd(post: BlogPost) {
  const path = getBlogPath(post.locale, post.slug);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteConfig.url}${path}/#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${path}`,
    },
    inLanguage: post.locale === "es" ? "es-CR" : "en-US",
    keywords: post.tags.join(", "),
    url: `${siteConfig.url}${path}`,
  };
}

export function buildBlogIndexJsonLd(locale: Locale) {
  const path = getBlogPath(locale);
  const isEn = locale === "en";

  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteConfig.url}${path}/#blog`,
    name: isEn ? "Frander Carrillo Blog" : "Blog de Frander Carrillo",
    description: isEn
      ? "Web development and technology consulting articles"
      : "Artículos de desarrollo web y asesoría tecnológica",
    url: `${siteConfig.url}${path}`,
    inLanguage: isEn ? "en-US" : "es-CR",
    author: { "@id": `${siteConfig.url}/#person` },
  };
}
