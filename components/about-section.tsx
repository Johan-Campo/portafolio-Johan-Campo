"use client"

import React from "react"

import { useLanguage } from "@/lib/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function AboutSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id="about"
      className={`py-24 px-6 scroll-reveal ${isVisible ? "visible" : ""}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          <div>
            <span className="text-sm font-mono tracking-wider uppercase text-muted-foreground">{t.about.title}</span>
          </div>
          <div className="space-y-6">
            <p className="text-foreground text-lg leading-relaxed">
              {t.about.p1}{" "}
              <span className="text-primary font-medium">Node.js</span>,{" "}
              <span className="text-primary font-medium">NestJS</span>,{" "}
              <span className="text-primary font-medium">Express</span>
              {t.about.p1Cont}{" "}
              <span className="text-primary font-medium">n8n</span>.
            </p>
            <p className="leading-relaxed text-foreground">
              {t.about.p2}
            </p>
            <p className="leading-relaxed text-foreground">
              {t.about.p3}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
