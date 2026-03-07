"use client";

import { MessageCircle } from "lucide-react";
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
import { WHATSAPP_URL } from "@/lib/constants";


const CONTACT_LINKS = [
  { href: "mailto:frandercarrillo2@gmail.com", label: "Email" },
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
          className="mb-8 text-center font-mono text-sm font-medium text-muted-foreground animate-fade-in-up"
        >
          {t.title}
        </h2>
        <p className="mb-8 text-center text-muted-foreground animate-fade-in-up animate-fade-in-up-delay-1">
          {t.intro}
        </p>

        <Card className="animate-fade-in-up animate-fade-in-up-delay-2 transition-shadow duration-300 hover:shadow-md">
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

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#25D366] bg-transparent px-6 py-3 font-medium text-[#25D366] transition-all duration-300 hover:scale-[1.02] hover:bg-[#25D366]/10 hover:shadow-md active:scale-[0.98] animate-fade-in-up animate-fade-in-up-delay-3"
        >
          <MessageCircle className="size-5 shrink-0" />
          {t.whatsappCta}
        </a>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm animate-fade-in-up animate-fade-in-up-delay-4">
          {CONTACT_LINKS.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-muted-foreground transition-all duration-300 hover:scale-105 hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
