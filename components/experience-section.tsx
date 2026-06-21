"use client"

import React, { useState } from "react"

import { Briefcase, ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { SectionLabel } from "@/components/section-label"

const companyLogos: Record<string, string> = {
  "A13 Agency": "/a13agency-logo.webp",
  "WantDigital S.A.S": "/wantdigital-logo.webp",
}

export function ExperienceSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal()
  const [expanded, setExpanded] = useState<Record<number, boolean>>({})

  const jobSkills = [
    ["Node.js", "Express.js", "Next.js", "React", "MySQL", "MongoDB", "Prisma", "Pusher", "REST APIs"],
    ["Node.js", "Express.js", "TypeScript", "Sequelize", "Docker", "C#", ".NET", "ASP.NET Core", "SQL Server", "Entity Framework Core", "Azure", "Jira"],
  ]

  const experiences = t.experience.jobs.map((job, index) => ({
    ...job,
    skills: jobSkills[index] || [],
  }))

  const VISIBLE_COUNT = 2

  return (
    <section
      id="experience"
      className={`py-24 px-6 ${isVisible ? "visible" : ""}`}
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          <div className="stagger-child" style={{ transitionDelay: "0ms" }}>
            <SectionLabel>{t.experience.title}</SectionLabel>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const logo = companyLogos[exp.company]
              const isExpanded = expanded[index] ?? false
              const visibleResponsibilities = isExpanded
                ? exp.responsibilities
                : exp.responsibilities.slice(0, VISIBLE_COUNT)
              const hasMore = exp.responsibilities.length > VISIBLE_COUNT

              return (
                <div
                  key={index}
                  className="stagger-child group relative pl-8 pb-8 border-l border-border last:pb-0"
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  {/* Timeline dot — ping on current job */}
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-accent-teal timeline-dot-glow" />
                  {index === 0 && (
                    <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-accent-teal animate-ping opacity-40" />
                  )}

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono mb-1">
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        {logo && (
                          <img
                            src={logo}
                            alt={exp.company}
                            className="w-10 h-10 rounded-md object-contain bg-secondary/50 border border-border p-1 shrink-0"
                          />
                        )}
                        <div>
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
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {visibleResponsibilities.map((resp, i) => (
                        <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                          <span className="text-accent-teal mt-1.5">›</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {hasMore && (
                      <button
                        onClick={() => setExpanded((prev) => ({ ...prev, [index]: !isExpanded }))}
                        className="flex items-center gap-1.5 text-sm font-mono text-accent-teal hover:text-accent-teal/80 transition-colors"
                      >
                        {isExpanded ? t.experience.showLess : t.experience.showMore}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                      </button>
                    )}

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
