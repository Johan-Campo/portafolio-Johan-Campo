"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isChangingLang, setIsChangingLang] = useState(false)

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
  }, [])

  const toggleLanguage = () => {
    setIsChangingLang(true)
    setTimeout(() => {
      setLanguage(language === "en" ? "es" : "en")
      setIsChangingLang(false)
    }, 150)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
            JC
          </a>
          <div className="flex items-center gap-6">
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors hover:text-primary ${
                      activeSection === link.href.slice(1) ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-full border border-border bg-secondary/50 hover:bg-secondary hover:border-primary/50 transition-all duration-300 ${
                isChangingLang ? "opacity-50" : ""
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
          </div>
        </div>
      </nav>
    </header>
  )
}
