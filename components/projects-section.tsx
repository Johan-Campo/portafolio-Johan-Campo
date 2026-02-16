"use client"

import React, { useState, useEffect, useCallback } from "react"
import { Github, ExternalLink, FolderGit2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const projectTech = [
  ["Express", "React", "JavaScript", "TypeScript", "MongoDB", "Postman", "Tailwind CSS"],
  ["n8n", "AI/OCR", "Google APIs", "Excel"],
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
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          <div>
            <span className="text-sm font-mono text-muted-foreground tracking-wider uppercase">{t.projects.title}</span>
          </div>
          <div className="space-y-6">
            <div className="grid gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <FolderGit2 className="w-10 h-10 text-primary" />
                    <div className="flex gap-3">
                      {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      )}

                      {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs font-mono text-muted-foreground px-2 py-1 bg-secondary/50 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
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
