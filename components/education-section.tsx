"use client"

import React from "react"

import { GraduationCap, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function EducationSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id="education"
      className={`py-24 px-6 scroll-reveal ${isVisible ? "visible" : ""}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          <div>
            <span className="text-sm font-mono text-muted-foreground tracking-wider uppercase">{t.education.title}</span>
          </div>
          <div className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {t.education.degree}
                </h3>
                <p className="text-muted-foreground">{t.education.university}</p>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Santa Marta, Colombia</span>
                </div>
                <span className="inline-block mt-3 text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                  {t.education.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
