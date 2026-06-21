"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Download, ArrowDown, FileText, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { TextScramble } from "@/components/text-scramble"
import { MagneticButton } from "@/components/magnetic-button"

export function HeroSection() {
  const { t } = useLanguage()
  const fullName = "Johan Alejandro Campo Pabón"
  const [isGlitching, setIsGlitching] = useState(false)
  const [showCVPanel, setShowCVPanel] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const panelRef = useRef<HTMLDivElement>(null)

  // Rotate role title every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % t.hero.roles.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [t.hero.roles.length])

  // Glitch animation - triggers every 3-4 seconds
  const triggerGlitch = useCallback(() => {
    setIsGlitching(true)
    setTimeout(() => setIsGlitching(false), 400)
  }, [])

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      triggerGlitch()
    }, 2000)

    const glitchInterval = setInterval(() => {
      triggerGlitch()
    }, 3000 + Math.random() * 1000)

    return () => {
      clearTimeout(initialDelay)
      clearInterval(glitchInterval)
    }
  }, [triggerGlitch])

  // Close panel on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setShowCVPanel(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowCVPanel(false)
      }
    }

    if (showCVPanel) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [showCVPanel])

  const handleCVDownload = (lang: "es" | "en") => {
    // Placeholder links - replace with actual CV URLs
    const cvUrls = {
      es: "/cv/CV_Johan_Campo_ES.pdf",
      en: "/cv/CV_Johan_Campo_EN.pdf",
    }

    const link = document.createElement("a")
    link.href = cvUrls[lang]
    link.download = `CV_Johan_Campo_${lang.toUpperCase()}.pdf`
    link.click()
    setShowCVPanel(false)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className={`text-accent-teal font-mono text-sm tracking-wider glitch-text ${isGlitching ? "glitching" : ""}`}>
              <TextScramble text={t.hero.roles[roleIndex]} duration={800} />
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-semibold text-foreground leading-tight tracking-tight">
              <TextScramble text={fullName} duration={1500} />
            </h1>
          </div>

          <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-foreground">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-2 text-sm font-mono text-muted-foreground">
            <span className="tech-pill px-3 py-1 bg-secondary rounded-full border border-transparent cursor-default">Node.js, Express.js</span>
            <span className="text-muted-foreground/40">·</span>
            <span className="tech-pill px-3 py-1 bg-secondary rounded-full border border-transparent cursor-default">ASP.NET Core, .NET</span>
            <span className="text-muted-foreground/40">·</span>
            <span className="tech-pill px-3 py-1 bg-secondary rounded-full border border-transparent cursor-default">React, Next.js</span>
            <span className="text-muted-foreground/40">·</span>
            <span className="tech-pill px-3 py-1 bg-secondary rounded-full border border-transparent cursor-default">MongoDB, MySQL, SQL Server</span>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="relative" ref={panelRef}>
              <MagneticButton>
                <Button
                  size="lg"
                  className="gap-2"
                  onClick={() => setShowCVPanel(!showCVPanel)}
                >
                  <Download className="w-4 h-4" />
                  {t.hero.downloadCV}
                </Button>
              </MagneticButton>

              {/* CV Language Selection Panel */}
              {showCVPanel && (
                <div className="absolute top-full left-0 mt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200" role="dialog" aria-modal="true" aria-labelledby="cv-panel-title">
                  <div className="bg-card border-2 border-primary/30 rounded-lg p-4 shadow-lg shadow-primary/10 min-w-[220px]">
                    {/* Pixel-style corner decorations */}
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary" />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary" />
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary" />

                    <div className="flex items-center justify-between mb-3">
                      <span id="cv-panel-title" className="text-xs font-mono text-primary tracking-wider uppercase">Select Language</span>
                      <button
                        onClick={() => setShowCVPanel(false)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Close panel"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-2">
                      <button
                        onClick={() => handleCVDownload("es")}
                        className="w-full flex items-center gap-3 px-3 py-2.5 bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/50 rounded-md transition-all duration-200 group"
                      >
                        <FileText className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {t.hero.downloadCVSpanish}
                        </span>
                      </button>

                      <button
                        onClick={() => handleCVDownload("en")}
                        className="w-full flex items-center gap-3 px-3 py-2.5 bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/50 rounded-md transition-all duration-200 group"
                      >
                        <FileText className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {t.hero.downloadCVEnglish}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <MagneticButton>
              <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
                <a href="#projects">
                  <ArrowDown className="w-4 h-4" />
                  {t.hero.viewProjects}
                </a>
              </Button>
            </MagneticButton>
          </div>
        </div>
      </div>

    </section>
  )
}
