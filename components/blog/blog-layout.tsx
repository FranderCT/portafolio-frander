import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getBlogPath } from "@/lib/blog";
import type { Locale } from "@/lib/translations";

const copy = {
  es: { back: "Volver al portafolio", blog: "Blog" },
  en: { back: "Back to portfolio", blog: "Blog" },
} as const;

export function BlogLayout({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const t = copy[locale];
  const homeHref = locale === "en" ? "/en" : "/";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main id="main-content" className="px-6 pb-24 pt-28">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link href={homeHref} className="inline-flex items-center gap-1.5 transition hover:text-foreground">
              <ArrowLeft className="size-4" />
              {t.back}
            </Link>
            <span aria-hidden>/</span>
            <Link href={getBlogPath(locale)} className="transition hover:text-foreground">
              {t.blog}
            </Link>
          </nav>
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
