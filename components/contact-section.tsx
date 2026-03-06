import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";

const CONTACT_LINKS = [
  { href: "mailto:tu@email.com", label: "tu@email.com" },
  { href: "https://github.com", label: "GitHub" },
  { href: "https://linkedin.com", label: "LinkedIn" },
] as const;

export function ContactSection() {
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
          Contacto
        </h2>
        <p className="mb-8 text-center text-muted-foreground">
          ¿Tienes una idea o quieres colaborar? Me encantaría saber de ti.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Envíame un mensaje</CardTitle>
            <CardDescription>
              Completa el formulario y te responderé lo antes posible.
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
