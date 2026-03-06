"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactForm() {
  const { locale } = useLanguage()
  const t = translations[locale].form

  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [errors, setErrors] = useState<{ nombre?: string; email?: string; mensaje?: string }>({})
  const [submitted, setSubmitted] = useState(false)

  function validate(): boolean {
    const next: typeof errors = {}
    if (!nombre.trim()) next.nombre = t.nameRequired
    if (!email.trim()) next.email = t.emailRequired
    else if (!EMAIL_REGEX.test(email)) next.email = t.emailInvalid
    if (!mensaje.trim()) next.mensaje = t.messageRequired
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    setNombre("")
    setEmail("")
    setMensaje("")
    setErrors({})
  }

  if (submitted) {
    return (
      <p className="rounded-lg border border-border bg-muted/30 p-4 text-center text-sm text-muted-foreground">
        {t.success}
      </p>
    )
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <Label htmlFor="nombre">{t.name}</Label>
        <Input
          id="nombre"
          placeholder={t.namePlaceholder}
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          aria-invalid={!!errors.nombre}
          aria-describedby={errors.nombre ? "error-nombre" : undefined}
        />
        {errors.nombre && (
          <p id="error-nombre" className="text-sm text-destructive">
            {errors.nombre}
          </p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">{t.email}</Label>
        <Input
          id="email"
          type="email"
          placeholder={t.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "error-email" : undefined}
        />
        {errors.email && (
          <p id="error-email" className="text-sm text-destructive">
            {errors.email}
          </p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="mensaje">{t.message}</Label>
        <Input
          id="mensaje"
          placeholder={t.messagePlaceholder}
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          aria-invalid={!!errors.mensaje}
          aria-describedby={errors.mensaje ? "error-mensaje" : undefined}
        />
        {errors.mensaje && (
          <p id="error-mensaje" className="text-sm text-destructive">
            {errors.mensaje}
          </p>
        )}
      </div>
      <Button type="submit">{t.submit}</Button>
    </form>
  )
}
