"use client"

import React from "react"
import { useLanguage } from "@/lib/language-context"
import { TechIcons } from "./tech-icons"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { SectionLabel } from "@/components/section-label"

const technologies = [
  { name: "Node.js", icon: TechIcons.nodejs },
  { name: "TypeScript", icon: TechIcons.typescript },
  { name: "Express.js", icon: TechIcons.nodejs },
  { name: "ASP.NET Core", icon: TechIcons.dotnet },
  { name: ".NET", icon: TechIcons.dotnet },
  { name: "Next.js", icon: TechIcons.nextjs },
  { name: "React", icon: TechIcons.react },
  { name: "JavaScript", icon: TechIcons.javascript },
  { name: "Tailwind CSS", icon: TechIcons.tailwindcss },
  { name: "HTML", icon: TechIcons.html },
  { name: "SQL Server", icon: TechIcons.sqlserver },
  { name: "MySQL", icon: TechIcons.mysql },
  { name: "PostgreSQL", icon: TechIcons.postgresql },
  { name: "MongoDB", icon: TechIcons.mongodb },
  { name: "Prisma", icon: TechIcons.prisma },
  { name: "Sequelize", icon: TechIcons.sequelize },
  { name: "Docker", icon: TechIcons.docker },
  { name: "Postman", icon: TechIcons.postman },
  { name: "Git", icon: TechIcons.git },
  { name: "Jira", icon: TechIcons.jira },
]

export function TechnologiesCarousel() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      className={`py-16 overflow-hidden scroll-reveal ${isVisible ? "visible" : ""}`}
      ref={ref}
    >
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <SectionLabel>{t.technologies.title}</SectionLabel>
      </div>

      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-scroll-left-fast md:animate-scroll-left">
          {/* First set */}
          {technologies.map((tech, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center gap-2.5 px-4 py-3 mx-1.5 bg-card/50 border border-border rounded-lg shrink-0 hover:border-primary/50 transition-all duration-300"
            >
              <span className="text-primary opacity-80 flex items-center justify-center">{tech.icon}</span>
              <span className="text-sm font-medium text-foreground whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {technologies.map((tech, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center gap-2.5 px-4 py-3 mx-1.5 bg-card/50 border border-border rounded-lg shrink-0 hover:border-primary/50 transition-all duration-300"
            >
              <span className="text-primary opacity-80 flex items-center justify-center">{tech.icon}</span>
              <span className="text-sm font-medium text-foreground whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
