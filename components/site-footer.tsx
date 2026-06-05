"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function SiteFooter() {
  const { locale } = useLanguage();
  const t = translations[locale].footer;
  const year = new Date().getFullYear();
  const blogHref = locale === "en" ? "/en/blog" : "/blog";

  return (
    <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted-foreground">
      <p>{t.copyright.replace("{year}", String(year))}</p>
      <p className="mt-2">
        <Link href={blogHref} className="transition hover:text-foreground">
          {translations[locale].nav.blog}
        </Link>
        <span aria-hidden className="mx-2">
          ·
        </span>
        <a href="/rss.xml" className="transition hover:text-foreground">
          RSS
        </a>
      </p>
    </footer>
  );
}
