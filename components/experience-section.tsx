"use client"

import React from "react"

import { Briefcase } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function ExperienceSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal()

  const experiences = t.experience.jobs.map((job) => ({
    ...job,
    skills: ["n8n", "AI/OCR", "Google APIs", "Excel", "API Integrations"],
  }))

  return (
    <section
      id="experience"
      className={`py-24 px-6 scroll-reveal ${isVisible ? "visible" : ""}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          <div>
            <span className="text-sm font-mono text-muted-foreground tracking-wider uppercase">{t.experience.title}</span>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative pl-8 pb-8 border-l border-border last:pb-0">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-primary" />

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono mb-1">
                      <span>{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span>·</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                        <span className="text-primary mt-1.5">›</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
