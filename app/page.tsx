"use client"

import { LanguageProvider } from "@/lib/language-context"
import { PixelBackground } from "@/components/pixel-background"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TechnologiesCarousel } from "@/components/technologies-carousel"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  return (
    <LanguageProvider>
      <PixelBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <TechnologiesCarousel />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
