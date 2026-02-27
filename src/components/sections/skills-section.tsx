"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Database, Bot } from "lucide-react";
import { skillCategories } from "@/config/site";

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="size-5" />,
  Server: <Server className="size-5" />,
  Database: <Database className="size-5" />,
  Bot: <Bot className="size-5" />,
};

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 py-20 md:py-28 bg-surface/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            Stack técnico
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tecnologías que utilizo
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <div className="mb-4 flex items-center gap-2 text-accent">
                {iconMap[cat.icon]}
                <span className="font-semibold text-foreground">{cat.category}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted-foreground hover:border-accent/50 hover:text-accent hover:bg-accent/5 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
