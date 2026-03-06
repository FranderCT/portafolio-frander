"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactForm() {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [errors, setErrors] = useState<{ nombre?: string; email?: string; mensaje?: string }>({})
  const [submitted, setSubmitted] = useState(false)

  function validate(): boolean {
    const next: typeof errors = {}
    if (!nombre.trim()) next.nombre = "El nombre es obligatorio"
    if (!email.trim()) next.email = "El email es obligatorio"
    else if (!EMAIL_REGEX.test(email)) next.email = "Introduce un email válido"
    if (!mensaje.trim()) next.mensaje = "El mensaje es obligatorio"
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
        ¡Mensaje enviado! Te responderé lo antes posible.
      </p>
    )
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <Label htmlFor="nombre">Nombre</Label>
        <Input
          id="nombre"
          placeholder="Tu nombre"
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
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="tu@email.com"
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
        <Label htmlFor="mensaje">Mensaje</Label>
        <Input
          id="mensaje"
          placeholder="Escribe tu mensaje..."
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
      <Button type="submit">Enviar</Button>
    </form>
  )
}
