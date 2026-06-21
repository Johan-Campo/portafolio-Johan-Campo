"use client"

import type React from "react"
import { useRef, type MouseEvent } from "react"

interface SpotlightCardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function SpotlightCard({ children, className = "", style }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty("--mouse-x", `${x}px`)
    card.style.setProperty("--mouse-y", `${y}px`)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`spotlight-card ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}
