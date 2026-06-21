"use client"

import { useLanguage } from "@/lib/language-context"
import { PixelBackground } from "@/components/pixel-background"
import { CursorGlow } from "@/components/cursor-glow"
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
import { Preloader } from "@/components/preloader"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"
import { GradientOrbs } from "@/components/gradient-orbs"

function MainContent() {
  const { isTransitioning } = useLanguage()
  return (
    <div className={`transition-opacity duration-150 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
      <main id="main-content">
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
    </div>
  )
}

export function PortfolioClient() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <GradientOrbs />
      <div className="noise-overlay" aria-hidden="true" />
      <PixelBackground />
      <CursorGlow />
      <Navigation />
      <MainContent />
      <BackToTop />
    </>
  )
}
