"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { siteConfig, socialLinks } from "@/config/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      {/* Radial gradient blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgb(59 130 246 / 0.15) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 md:order-1">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light"
            >
              <span className="size-1.5 rounded-full bg-accent animate-pulse" />
              {siteConfig.role}
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Hola, soy{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Bruno Belloso
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-8 max-w-lg text-lg text-muted-foreground leading-relaxed"
            >
              {siteConfig.description}
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3"
            >
              <a
                href="#proyectos"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-8 text-base font-medium text-white hover:bg-accent-dark shadow-sm shadow-accent/20 transition-all"
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-accent px-8 text-base font-medium text-accent bg-transparent hover:bg-accent/10 transition-all"
              >
                Contactar
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center size-12 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-accent/50 transition-colors"
                aria-label="GitHub"
              >
                <Github className="size-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center size-12 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-accent/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/40 to-accent-light/20 blur-2xl scale-110" />
              <div
                className="relative size-52 sm:size-64 md:size-72 rounded-full overflow-hidden border-2 border-accent/30"
                style={{ animation: "float 6s ease-in-out infinite" }}
              >
                <Image
                  src="/bruno.png"
                  alt="Bruno Belloso"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#sobre-mi"
            className="flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Scroll</span>
            <ArrowDown className="size-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
