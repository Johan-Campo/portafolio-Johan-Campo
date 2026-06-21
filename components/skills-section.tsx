"use client"

import React from "react"

import { Server, Database, Globe, Layers, Cloud, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { SpotlightCard } from "@/components/spotlight-card"
import { SectionLabel } from "@/components/section-label"

export function SkillsSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal()

  const skillCategories = [
    {
      title: t.skills.categories.backend,
      icon: Server,
      skills: ["Node.js", "Express.js", "TypeScript", "ASP.NET Core", ".NET", "Entity Framework Core", "REST APIs"],
    },
    {
      title: t.skills.categories.frontend,
      icon: Globe,
      skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML"],
    },
    {
      title: t.skills.categories.databases,
      icon: Database,
      skills: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB", "Prisma"],
    },
    {
      title: t.skills.categories.architecture,
      icon: Layers,
      skills: ["Real-time Systems", "Pusher Channels", "API Integrations", "WebSockets"],
    },
    {
      title: t.skills.categories.tools,
      icon: Cloud,
      skills: ["Azure", "Docker", "Git", "GitHub Actions", "Postman", "n8n", "Jira"],
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
      className={`py-24 px-6 ${isVisible ? "visible" : ""}`}
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          <div className="stagger-child" style={{ transitionDelay: "0ms" }}>
            <SectionLabel>{t.skills.title}</SectionLabel>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="stagger-child"
                style={{ transitionDelay: `${(index + 1) * 80}ms` }}
              >
                <SpotlightCard className="group h-full p-6 bg-card rounded-lg border border-border hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="text-sm px-3 py-1 bg-secondary text-muted-foreground rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
