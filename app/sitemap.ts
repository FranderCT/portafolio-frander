import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { getBlogPath } from "@/lib/blog";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const blogEntries: MetadataRoute.Sitemap = [
    ...getAllPosts("es").map((post) => ({
      url: `${siteConfig.url}${getBlogPath("es", post.slug)}`,
      lastModified: new Date(post.updated ?? post.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...getAllPosts("en").map((post) => ({
      url: `${siteConfig.url}${getBlogPath("en", post.slug)}`,
      lastModified: new Date(post.updated ?? post.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          es: siteConfig.url,
          en: `${siteConfig.url}/en`,
        },
      },
    },
    {
      url: `${siteConfig.url}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          es: siteConfig.url,
          en: `${siteConfig.url}/en`,
        },
      },
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: {
        languages: {
          es: `${siteConfig.url}/blog`,
          en: `${siteConfig.url}/en/blog`,
        },
      },
    },
    {
      url: `${siteConfig.url}/en/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: {
        languages: {
          es: `${siteConfig.url}/blog`,
          en: `${siteConfig.url}/en/blog`,
        },
      },
    },
    ...blogEntries,
  ];
}
