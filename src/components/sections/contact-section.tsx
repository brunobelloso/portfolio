"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Loader2, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { socialLinks } from "@/config/site";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresá un email válido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;
type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Error al enviar");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="scroll-mt-20 py-20 md:py-28 bg-surface/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            Contacto
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Tenés un proyecto en mente?
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-8 text-muted-foreground leading-relaxed">
              Estoy disponible para proyectos freelance, colaboraciones y oportunidades
              full-time. Contame tu idea y te respondo en menos de 24hs.
            </p>

            <div className="space-y-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 hover:border-accent/40 hover:bg-surface-2 transition-colors group"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-surface-2 text-muted-foreground group-hover:text-accent transition-colors">
                  <Github className="size-5" />
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">GitHub</div>
                  <div className="text-xs text-muted-foreground">Ver mis proyectos</div>
                </div>
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 hover:border-accent/40 hover:bg-surface-2 transition-colors group"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-surface-2 text-muted-foreground group-hover:text-accent transition-colors">
                  <Linkedin className="size-5" />
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">LinkedIn</div>
                  <div className="text-xs text-muted-foreground">Conectar profesionalmente</div>
                </div>
              </a>

              <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4">
                <div className="flex size-10 items-center justify-center rounded-lg bg-surface-2 text-muted-foreground">
                  <Mail className="size-5" />
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">Email</div>
                  <div className="text-xs text-muted-foreground">O usá el formulario →</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
                <CheckCircle className="size-12 text-green-400" />
                <h3 className="text-xl font-semibold text-foreground">¡Mensaje enviado!</h3>
                <p className="text-muted-foreground text-sm">
                  Te respondo en menos de 24 horas.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm text-accent underline underline-offset-4 hover:text-accent-light transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-1.5">
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    aria-invalid={!!errors.name}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive">{errors.name.message}</p>
                  )}
                </div>

                <div className="grid gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="grid gap-1.5">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    placeholder="Contame sobre tu proyecto..."
                    rows={4}
                    aria-invalid={!!errors.message}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive">{errors.message.message}</p>
                  )}
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-md bg-destructive/10 border border-destructive/30 px-3 py-2 text-sm text-destructive">
                    <AlertCircle className="size-4 shrink-0" />
                    Hubo un error al enviar. Intentá de nuevo.
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading"}
                  className="w-full"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      Enviar mensaje
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
