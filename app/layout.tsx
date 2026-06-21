import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" })

export const metadata: Metadata = {
  title: "Johan Campo | Software Developer",
  description:
    "Software developer focused on backend with .NET and Node.js. Experience building APIs, enterprise systems and full-stack web applications with React and Next.js on modern architectures.",
  keywords: [
    "Johan Campo",
    "Software Developer",
    "Backend Developer",
    ".NET",
    "ASP.NET Core",
    "Node.js",
    "React",
    "Next.js",
    "C#",
    "Colombia",
    "Santa Marta",
  ],
  authors: [{ name: "Johan Alejandro Campo Pabón" }],
  openGraph: {
    title: "Johan Campo | Software Developer",
    description:
      "Software developer focused on backend with .NET and Node.js. Experience building APIs, enterprise systems and full-stack web applications with React and Next.js.",
    type: "website",
    locale: "en_US",
    siteName: "Johan Campo — Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Johan Campo | Software Developer",
    description:
      "Software developer focused on backend with .NET and Node.js. Experience building APIs, enterprise systems and full-stack web applications.",
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
    jobTitle: "Software Developer",
    url: "https://johan-campo-portfolio-2e9bb.web.app",
    sameAs: [
      "https://github.com/JohanCampo",
      "https://www.linkedin.com/in/johan-campo/",
    ],
    knowsAbout: [
      ".NET",
      "ASP.NET Core",
      "Node.js",
      "React",
      "Next.js",
      "C#",
      "SQL Server",
      "TypeScript",
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
