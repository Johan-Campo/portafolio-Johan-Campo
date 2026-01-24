"use client"

import React from "react"

import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "#",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "#",
  },
]

export function ContactSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal()

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.email,
      value: "Johancampo12@gmail.com",
      href: "mailto:Johancampo12@gmail.com",
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+57 311 462 8917",
      href: "tel:+573114628917",
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: "Santa Marta, Colombia",
      href: null,
    },
  ]

  return (
    <section
      id="contact"
      className={`py-24 px-6 scroll-reveal ${isVisible ? "visible" : ""}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          <div>
            <span className="text-sm font-mono text-muted-foreground tracking-wider uppercase">{t.contact.title}</span>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-2">{t.contact.heading}</h2>
              <p className="text-muted-foreground">
                {t.contact.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group"
                    >
                      <item.icon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                      <item.icon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-sm text-foreground">{item.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              {socialLinks.map((link) => (
                <Button key={link.label} variant="outline" size="icon" asChild className="bg-transparent">
                  <a href={link.href} aria-label={link.label}>
                    <link.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
