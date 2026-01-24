"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Download, ArrowDown, FileText, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()
  const fullName = "Johan Alejandro Campo Pabón"
  const [displayedName, setDisplayedName] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [isGlitching, setIsGlitching] = useState(false)
  const [showCVPanel, setShowCVPanel] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  // Typing animation
  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setIsTypingComplete(true)
      }
    }, 60)

    return () => clearInterval(typingInterval)
  }, [])

  // Glitch animation - triggers every 3-4 seconds (faster)
  const triggerGlitch = useCallback(() => {
    setIsGlitching(true)
    setTimeout(() => setIsGlitching(false), 400)
  }, [])

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      triggerGlitch()
    }, 2000)

    // Repeat glitch every 3-4 seconds (reduced from 5-7)
    const glitchInterval = setInterval(() => {
      triggerGlitch()
    }, 3000 + Math.random() * 1000)

    return () => {
      clearTimeout(initialDelay)
      clearInterval(glitchInterval)
    }
  }, [triggerGlitch])

  // Close panel on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setShowCVPanel(false)
      }
    }

    if (showCVPanel) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
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
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className={`text-primary font-mono text-sm tracking-wider glitch-text ${isGlitching ? "glitching" : ""}`}>
              {t.hero.role}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-semibold text-foreground leading-tight tracking-tight">
              <span className="inline-block min-h-[1.2em]">
                {displayedName.split(" ").slice(0, 2).join(" ")}
                {!isTypingComplete && displayedName.length <= 15 && (
                  <span className="animate-cursor-blink text-primary/70 font-normal">_</span>
                )}
                {isTypingComplete && displayedName.split(" ").length <= 2 && (
                  <span className="animate-cursor-blink text-primary/70 font-normal">_</span>
                )}
              </span>
              <br />
              <span className="text-muted-foreground inline-block min-h-[1.2em]">
                {displayedName.split(" ").slice(2).join(" ")}
                {!isTypingComplete && displayedName.length > 15 && (
                  <span className="animate-cursor-blink text-primary/70 font-normal">_</span>
                )}
                {isTypingComplete && displayedName.split(" ").length > 2 && (
                  <span className="animate-cursor-blink text-primary/70 font-normal">_</span>
                )}
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-foreground">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-3 text-sm font-mono text-muted-foreground">
            <span className="px-3 py-1 bg-secondary rounded-full">Node.js</span>
            <span className="px-3 py-1 bg-secondary rounded-full">NestJS</span>
            <span className="px-3 py-1 bg-secondary rounded-full">Express</span>
            <span className="px-3 py-1 bg-secondary rounded-full">TypeScript</span>
            <span className="px-3 py-1 bg-secondary rounded-full">Laravel</span>
            <span className="px-3 py-1 bg-secondary rounded-full">PHP</span>
            <span className="px-3 py-1 bg-secondary rounded-full">n8n</span>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="relative" ref={panelRef}>
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => setShowCVPanel(!showCVPanel)}
              >
                <Download className="w-4 h-4" />
                {t.hero.downloadCV}
              </Button>
              
              {/* CV Language Selection Panel */}
              {showCVPanel && (
                <div className="absolute top-full left-0 mt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-card border-2 border-primary/30 rounded-lg p-4 shadow-lg shadow-primary/10 min-w-[220px]">
                    {/* Pixel-style corner decorations */}
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary" />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary" />
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary" />
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-primary tracking-wider uppercase">Select Language</span>
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
            
            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
              <a href="#projects">
                <ArrowDown className="w-4 h-4" />
                {t.hero.viewProjects}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
