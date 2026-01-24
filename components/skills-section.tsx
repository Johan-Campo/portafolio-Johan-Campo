"use client"

import React from "react"

import { Server, Database, Zap, Layout, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function SkillsSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal()

  const skillCategories = [
    {
      title: t.skills.categories.backend,
      icon: Server,
      skills: ["APIs REST", "Node.js", "NestJS", "Express", "PHP", "Laravel"],
    },
    {
      title: t.skills.categories.frontend,
      icon: Layout,
      skills: ["JavaScript", "React", "Tailwind CSS", "HTML"],
    },
    {
      title: t.skills.categories.automation,
      icon: Zap,
      skills: ["n8n", "API Integrations", "OCR & AI Services"],
    },
    {
      title: t.skills.categories.databases,
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: t.skills.categories.soft,
      icon: Users,
      skills: t.skills.softSkills,
    },
  ]

  return (
    <section
      id="skills"
      className={`py-24 px-6 scroll-reveal ${isVisible ? "visible" : ""}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          <div>
            <span className="text-sm font-mono tracking-wider uppercase text-muted-foreground">{t.skills.title}</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 flex-row">
                  {category.skills.map((skill) => (
                    <span key={skill} className="text-sm px-3 py-1 bg-secondary text-muted-foreground rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
