"use client";

import { Mail, Linkedin, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.949h.004c4.368 0 7.927-3.558 7.93-7.93a7.9 7.9 0 0 0-2.327-5.592zM7.994 14.52a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.618-4.984c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.354 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
    </svg>
  );
}

const CONTACT_CHANNELS = [
  {
    href: "mailto:info@frandercarrillo.com",
    label: "Email",
    value: "info@frandercarrillo.com",
    icon: Mail,
    color: "hover:border-red-500/50 hover:bg-red-500/5 hover:text-red-400",
  },
  {
    href: WHATSAPP_URL,
    label: "WhatsApp",
    value: "+506 8650 5959",
    icon: WhatsAppIcon,
    color: "hover:border-[#25D366]/50 hover:bg-[#25D366]/5 hover:text-[#25D366]",
  },
  {
    href: "https://www.linkedin.com/in/frander-carrillo-7a52b8338/",
    label: "LinkedIn",
    value: "Frander Carrillo",
    icon: Linkedin,
    color: "hover:border-blue-500/50 hover:bg-blue-500/5 hover:text-blue-400",
  },
  {
    href: "https://www.instagram.com/fran_ct05/",
    label: "Instagram",
    value: "@fran_ct05",
    icon: Instagram,
    color: "hover:border-pink-500/50 hover:bg-pink-500/5 hover:text-pink-400",
  },
  {
    href: "https://www.facebook.com/frander.carrillotorres/",
    label: "Facebook",
    value: "Frander Carrillo",
    icon: Facebook,
    color: "hover:border-blue-600/50 hover:bg-blue-600/5 hover:text-blue-500",
  },
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
      <div className="mx-auto max-w-2xl">
        <h2
          id="titulo-contacto"
          className="mb-6 text-center font-mono text-sm font-medium text-muted-foreground"
        >
          {t.title}
        </h2>
        <p className="mb-12 text-center text-muted-foreground max-w-md mx-auto">
          {t.intro}
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {CONTACT_CHANNELS.map((channel) => {
            const Icon = channel.icon;
            return (
              <a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-zinc-950/20 backdrop-blur-md p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
                  channel.color
                )}
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.05] group-hover:bg-transparent transition-colors">
                  <Icon className="size-5 transition-transform group-hover:scale-110" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {channel.label}
                  </p>
                  <p className="mt-0.5 truncate text-sm font-medium text-foreground">
                    {channel.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
