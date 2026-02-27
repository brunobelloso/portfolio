"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { featuredProjects, otherProjects } from "@/config/site";
import { ProjectThumbnail } from "@/components/ui/project-thumbnail";
import { ProjectModal, type ProjectDetail } from "@/components/ui/project-modal";

function TagBadge({ tag }: { tag: string }) {
  return (
    <span className="rounded-md border border-border bg-surface-2 px-2 py-0.5 text-xs font-medium text-muted-foreground">
      {tag}
    </span>
  );
}

export function ProjectsSection() {
  const [selected, setSelected] = useState<ProjectDetail | null>(null);

  return (
    <section id="proyectos" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            Portfolio
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Proyectos destacados
          </h2>
        </motion.div>

        {/* Featured projects */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              onClick={() => setSelected(project)}
              className="group relative flex flex-col rounded-xl border border-border bg-surface overflow-hidden hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-shadow cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative h-32 overflow-hidden">
                <ProjectThumbnail variant={project.thumbnail} className="h-full w-full" />
                {/* Hover overlay with action links */}
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.github}
                      className="flex items-center gap-1 rounded-md bg-black/50 px-2.5 py-1 text-xs text-white backdrop-blur-sm hover:bg-black/70 transition-colors"
                      aria-label="Ver código"
                    >
                      <Github className="size-3" />
                      Código
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-1 rounded-md bg-accent/80 px-2.5 py-1 text-xs text-white backdrop-blur-sm hover:bg-accent transition-colors"
                      aria-label="Ver demo"
                    >
                      <ExternalLink className="size-3" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 font-semibold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <TagBadge key={tag} tag={tag} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section divider */}
        <div className="mb-8 text-center">
          <h3 className="text-lg font-semibold text-muted-foreground">
            Otros proyectos
          </h3>
        </div>

        {/* Other projects */}
        <div className="grid gap-4 sm:grid-cols-3">
          {otherProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              onClick={() => setSelected(project)}
              className="group rounded-xl border border-border bg-surface overflow-hidden hover:border-accent/40 transition-colors cursor-pointer"
            >
              {/* Thumbnail strip */}
              <ProjectThumbnail variant={project.thumbnail} className="h-20 w-full" />

              {/* Content */}
              <div className="p-5">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  <span
                    className="shrink-0 text-muted-foreground group-hover:text-foreground transition-colors"
                    aria-hidden
                  >
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
                <p className="mb-3 text-xs text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <TagBadge key={tag} tag={tag} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
