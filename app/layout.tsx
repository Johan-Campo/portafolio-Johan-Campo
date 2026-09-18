import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" })

export const metadata: Metadata = {
  title: "Johan Campo | AI Software Engineer",
  description:
    "AI Software Engineer focused on backend with Node.js and Next.js. Experience building AI-powered SaaS platforms, REST APIs and full-stack web applications with React on modern architectures.",
  keywords: [
    "Johan Campo",
    "AI Software Engineer",
    "Backend Developer",
    "Node.js",
    "Next.js",
    "React",
    "MongoDB",
    "Prisma",
    "AI Integrations",
    "Colombia",
    "Santa Marta",
  ],
  authors: [{ name: "Johan Alejandro Campo Pabón" }],
  openGraph: {
    title: "Johan Campo | AI Software Engineer",
    description:
      "AI Software Engineer focused on backend with Node.js and Next.js. Experience building AI-powered SaaS platforms, REST APIs and full-stack web applications with React.",
    type: "website",
    locale: "en_US",
    siteName: "Johan Campo — Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Johan Campo | AI Software Engineer",
    description:
      "AI Software Engineer focused on backend with Node.js and Next.js. Experience building AI-powered SaaS platforms, REST APIs and full-stack web applications.",
  },
  icons: {
    icon: "/icon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Johan Alejandro Campo Pabón",
    alternateName: "Johan Campo",
    jobTitle: "AI Software Engineer",
    url: "https://johan-campo-portfolio-2e9bb.web.app",
    sameAs: [
      "https://github.com/JohanCampo",
      "https://www.linkedin.com/in/johan-campo/",
    ],
    knowsAbout: [
      "Node.js",
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Prisma",
      "AI Integrations",
    ],
  }

  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`} suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to main content
        </a>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
