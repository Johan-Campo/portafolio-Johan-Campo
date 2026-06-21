import React from "react"

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex gap-0.5" aria-hidden="true">
        <span className="w-1.5 h-1.5 bg-accent-teal" />
        <span className="w-1.5 h-1.5 bg-accent-teal/50" />
        <span className="w-1.5 h-1.5 bg-accent-teal/20" />
      </span>
      <span className="text-sm font-mono tracking-wider uppercase text-muted-foreground">{children}</span>
    </div>
  )
}
