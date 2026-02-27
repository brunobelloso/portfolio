"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { stats } from "@/config/site";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent blur-xl" />
              <div className="relative size-72 sm:size-80 rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/bruno.png"
                  alt="Bruno Belloso"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              Sobre mí
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              <em className="not-italic text-foreground">Construyo productos</em>{" "}
              <span className="text-muted-foreground">que generan impacto</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy un desarrollador Full Stack apasionado por construir soluciones
                que combinan tecnología moderna con experiencia de usuario impecable.
                Me especializo en el ciclo completo de desarrollo: desde la arquitectura
                backend hasta la interfaz final.
              </p>
              <p>
                Con experiencia en startups y proyectos freelance, he desarrollado
                plataformas SaaS, MVPs, automatizaciones con IA y herramientas de
                visión computacional. Me gusta trabajar en proyectos que resuelven
                problemas reales con código limpio y escalable.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-surface p-4 text-center"
                >
                  <div className="text-2xl font-bold text-accent">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
