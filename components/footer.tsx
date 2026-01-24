"use client"

import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Johan Alejandro Campo Pabón</p>
          <p className="text-sm text-muted-foreground">{t.footer.role}</p>
        </div>
      </div>
    </footer>
  )
}
