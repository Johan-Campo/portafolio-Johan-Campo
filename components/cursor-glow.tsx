"use client"

import { useEffect, useRef } from "react"

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return
      glowRef.current.style.transform = `translate(${e.clientX - 192}px, ${e.clientY - 192}px)`
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 w-96 h-96 rounded-full blur-3xl bg-primary hidden md:block"
      style={{ opacity: 0.07, willChange: "transform", transform: "translate(-500px, -500px)" }}
    />
  )
}
