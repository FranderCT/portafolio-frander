"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

const CONTACT_LINKS = [
  { href: "mailto:frandercarrillo2@gmail.com", label: "email" },
  { href: "https://github.com/FranderCT", label: "GitHub" },
  { href: "https://www.instagram.com/fran_ct05/", label: "Instagram" },
  { href: "https://www.facebook.com/frander.carrillotorres", label: "Facebook" },
] as const;

export function ContactSection() {
  const { locale } = useLanguage();
  const t = translations[locale].contact;

  return (
    <section
      id="contacto"
      className="px-6 py-24"
      aria-labelledby="titulo-contacto"
    >
      <div className="mx-auto max-w-md">
        <h2
          id="titulo-contacto"
          className="mb-8 text-center font-mono text-sm font-medium text-muted-foreground"
        >
          {t.title}
        </h2>
        <p className="mb-8 text-center text-muted-foreground">
          {t.intro}
        </p>
        <Card>
          <CardHeader>
            <CardTitle>{t.cardTitle}</CardTitle>
            <CardDescription>
              {t.cardDescription}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
          {CONTACT_LINKS.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={
                href.startsWith("http")
                  ? "text-muted-foreground transition hover:text-foreground"
                  : "text-primary underline-offset-4 hover:underline"
              }
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
