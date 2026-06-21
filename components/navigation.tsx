"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { PixelLogo } from "@/components/pixel-logo"

export function Navigation() {
  const { language, setLanguage, t, isTransitioning } = useLanguage()
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#education", label: t.nav.education },
    { href: "#contact", label: t.nav.contact },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      if (isMenuOpen) setIsMenuOpen(false)

      const sections = ["about", "skills", "experience", "projects", "education", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMenuOpen])

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center opacity-90 hover:opacity-100 transition-opacity" aria-label="Home">
            <PixelLogo size={3} gap={1} />
          </a>
          <div className="flex items-center gap-4">
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`flex items-center gap-2 text-sm transition-colors hover:text-primary ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 transition-all duration-200 ${
                          isActive ? "bg-accent-teal animate-cursor-blink" : "bg-transparent"
                        }`}
                        aria-hidden="true"
                      />
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-full border border-border bg-secondary/50 hover:bg-secondary hover:border-primary/50 transition-all duration-300 ${
                isTransitioning ? "opacity-50" : ""
              }`}
              aria-label="Toggle language"
            >
              <span className={`transition-all duration-150 ${language === "en" ? "text-primary" : "text-muted-foreground"}`}>
                EN
              </span>
              <span className="text-muted-foreground/50">/</span>
              <span className={`transition-all duration-150 ${language === "es" ? "text-primary" : "text-muted-foreground"}`}>
                ES
              </span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1.5 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="overflow-hidden">
          <ul className="flex flex-col px-6 py-2 border-t border-border">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 text-sm transition-colors hover:text-primary border-b border-border/30 last:border-0 ${
                    activeSection === link.href.slice(1) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
