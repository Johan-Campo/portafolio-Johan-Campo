"use client"

import React from "react"

import { useLanguage } from "@/lib/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { SectionLabel } from "@/components/section-label"

export function AboutSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id="about"
      className={`py-24 px-6 scroll-reveal ${isVisible ? "visible" : ""}`}
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          <div>
            <SectionLabel>{t.about.title}</SectionLabel>
          </div>
          <div className="rounded-lg border border-border bg-card overflow-hidden">
            {/* Terminal title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/30">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <span className="text-xs font-mono text-muted-foreground ml-2">about.sh</span>
            </div>

            {/* Terminal body */}
            <div className="p-6 font-mono text-sm space-y-4">
              <div>
                <p className="text-accent-teal mb-2">
                  <span className="text-muted-foreground">$</span> whoami
                </p>
                <p className="text-foreground leading-relaxed pl-4">{t.about.p1}</p>
              </div>

              <div>
                <p className="text-accent-teal mb-2">
                  <span className="text-muted-foreground">$</span> cat skills.md
                </p>
                <p className="text-foreground leading-relaxed pl-4">{t.about.p3}</p>
              </div>

              <p className="text-accent-teal flex items-center gap-1">
                <span className="text-muted-foreground">$</span>
                <span className="animate-cursor-blink">_</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
