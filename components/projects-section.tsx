"use client"

import React, { useState, useEffect, useCallback } from "react"
import { Github, ExternalLink, FolderGit2, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { SpotlightCard } from "@/components/spotlight-card"
import { SectionLabel } from "@/components/section-label"

const projectTech = [
  ["React", "TypeScript", "Express", "MongoDB", "TanStack Query", "JWT", "Cloudinary", "Tailwind CSS"],
  ["Next.js", "TypeScript", "React", "Supabase", "PostgreSQL", "Wompi", "Recharts", "Vercel"],
  ["PHP", "MySQL", "MVC", "Apache", "Bulma CSS", "FPDF", "Vanilla JS", "Fetch API"],
  ["ASP.NET Core MVC", "C#", "Entity Framework Core", "SQL Server", "Identity", "Azure", "GitHub Actions"],
]


export function ProjectsSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal()
  const [isGlitching, setIsGlitching] = useState(false)

  // Glitch animation for building message - every 3-4 seconds
  const triggerGlitch = useCallback(() => {
    setIsGlitching(true)
    setTimeout(() => setIsGlitching(false), 400)
  }, [])

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      triggerGlitch()
    }, 1500)

    const glitchInterval = setInterval(() => {
      triggerGlitch()
    }, 3000 + Math.random() * 1000)

    return () => {
      clearTimeout(initialDelay)
      clearInterval(glitchInterval)
    }
  }, [triggerGlitch])

  const projects = t.projects.items.map((item, index) => ({
    ...item,
    tech: projectTech[index] || [],
  }))

  return (
    <section
      id="projects"
      className={`py-24 px-6 scroll-reveal ${isVisible ? "visible" : ""}`}
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          <div>
            <SectionLabel>{t.projects.title}</SectionLabel>
          </div>
          <div className="space-y-6">
            <div className="grid gap-6">
              {projects.map((project, index) => {
                const links = (
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 active:scale-95 active:bg-primary/20 transition-all duration-150 text-xs font-mono"
                        aria-label="View GitHub repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 active:scale-95 active:bg-primary/20 transition-all duration-150 text-xs font-mono"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                )

                const preview = project.previewImage && (
                  project.previewImage.endsWith(".svg") ? (
                    <div className="w-full h-full flex items-center justify-center px-6 py-4 bg-secondary/20">
                      <img
                        src={project.previewImage}
                        alt={`Logo of ${project.title}`}
                        className="h-16 w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <img
                      src={project.previewImage}
                      alt={`Preview of ${project.title}`}
                      className="w-full h-full object-cover"
                    />
                  )
                )

                const demoHost = project.demo ? new URL(project.demo).hostname.replace(/^www\./, "") : null

                const highlights = project.highlights?.map((highlight) => (
                  <span
                    key={highlight}
                    className="flex items-center gap-1.5 text-xs font-mono text-accent-teal px-2 py-1 bg-accent-teal/10 border border-accent-teal/20 rounded-full"
                  >
                    <Sparkles className="w-3 h-3" />
                    {highlight}
                  </span>
                ))

                const techPills = (
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="tech-pill text-xs font-mono text-muted-foreground px-2 py-1 bg-secondary/50 border border-transparent rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )

                return (
                  <SpotlightCard
                    key={index}
                    className="group stagger-child p-6 bg-card rounded-lg border border-border hover:-translate-y-1 hover:shadow-[0_8px_30px_-12px_var(--accent-teal-glow)] transition-all duration-300"
                    style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <FolderGit2 className="w-10 h-10 text-primary transition-[filter] duration-300 group-hover:drop-shadow-[0_0_6px_var(--accent-teal-glow)]" />
                      {links}
                    </div>

                    {preview && (
                      <div className="w-full mb-4 rounded-md border border-border/40 overflow-hidden">
                        <div className="flex items-center gap-2 px-3 py-2 bg-secondary/40 border-b border-border/40">
                          <div className="flex gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                          </div>
                          {demoHost && (
                            <span className="text-xs font-mono text-muted-foreground truncate">{demoHost}</span>
                          )}
                        </div>
                        <div className="w-full h-72">{preview}</div>
                      </div>
                    )}

                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                    {highlights && <div className="flex flex-wrap gap-2 mb-4">{highlights}</div>}

                    {techPills}
                  </SpotlightCard>
                )
              })}
            </div>

            {/* Building message with glitch animation */}
            <div className="pt-4 text-center">
              <p className={`text-sm font-mono text-primary/80 tracking-wide glitch-text ${isGlitching ? "glitching" : ""}`}>
                {t.projects.buildingMessage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
