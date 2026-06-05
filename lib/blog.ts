import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Locale } from "@/lib/translations";

export type BlogPost = {
  slug: string;
  locale: Locale;
  title: string;
  description: string;
  date: string;
  updated?: string;
  tags: string[];
  readingTime: string;
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

function estimateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min`;
}

function parsePostFile(filePath: string, locale: Locale): BlogPost {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug: String(data.slug),
    locale,
    title: String(data.title),
    description: String(data.description),
    date: String(data.date),
    updated: data.updated ? String(data.updated) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readingTime: estimateReadingTime(content),
    content: content.trim(),
  };
}

function getLocaleDir(locale: Locale) {
  return path.join(CONTENT_DIR, locale);
}

export function getAllPosts(locale: Locale): BlogPost[] {
  const dir = getLocaleDir(locale);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => parsePostFile(path.join(dir, file), locale))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string, locale: Locale): BlogPost | null {
  return getAllPosts(locale).find((post) => post.slug === slug) ?? null;
}

export function getAllSlugs(locale: Locale): string[] {
  return getAllPosts(locale).map((post) => post.slug);
}

export function getBlogPath(locale: Locale, slug?: string) {
  const base = locale === "en" ? "/en/blog" : "/blog";
  return slug ? `${base}/${slug}` : base;
}
