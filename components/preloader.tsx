"use client"

import { useEffect, useRef, useState } from "react"
import { PIXEL_LETTER_J, PIXEL_LETTER_C } from "@/components/pixel-logo"

const MATRIX_CHARS = "01"
const PACMAN_BAR_WIDTH = 192
const PACMAN_SIZE = 22
const DOT_COUNT = 10

const PIXEL_SIZE = 9
const PIXEL_GAP = 2

function PixelLetter({
  grid,
  baseDelay,
  isDrawing,
}: {
  grid: number[][]
  baseDelay: number
  isDrawing: boolean
}) {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${grid[0].length}, ${PIXEL_SIZE}px)`,
        gridTemplateRows: `repeat(${grid.length}, ${PIXEL_SIZE}px)`,
        gap: PIXEL_GAP,
      }}
    >
      {grid.map((row, r) =>
        row.map((cell, c) => {
          if (!cell) return <div key={`${r}-${c}`} />
          const delay = baseDelay + r * 55 + c * 18
          return (
            <div
              key={`${r}-${c}`}
              className={`pixel-block ${isDrawing ? "pixel-drop" : ""}`}
              style={{ animationDelay: `${delay}ms` }}
            />
          )
        }),
      )}
    </div>
  )
}

export function Preloader() {
  const [phase, setPhase] = useState<"drawing" | "filling" | "done">("drawing")
  const [visible, setVisible] = useState(true)
  const [percent, setPercent] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const fillTimer = setTimeout(() => setPhase("filling"), 1300)
    const doneTimer = setTimeout(() => setPhase("done"), 2500)
    const hideTimer = setTimeout(() => setVisible(false), 3000)

    return () => {
      clearTimeout(fillTimer)
      clearTimeout(doneTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  // Pac-Man progress counter
  useEffect(() => {
    if (phase !== "filling") return
    const interval = setInterval(() => {
      setPercent((p) => (p >= 100 ? 100 : p + 2))
    }, 22)
    return () => clearInterval(interval)
  }, [phase])

  // Matrix-style digital rain background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const fontSize = 14
    const columns = Math.ceil(canvas.width / fontSize)
    const drops = Array.from({ length: columns }, () => Math.random() * -50)

    let animationId = 0
    const draw = () => {
      ctx.fillStyle = "rgba(10, 15, 12, 0.15)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${fontSize}px var(--font-mono, monospace)`

      for (let i = 0; i < drops.length; i++) {
        const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]
        const opacity = Math.random() * 0.4 + 0.15
        ctx.fillStyle = `rgba(45, 212, 191, ${opacity})`
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
      animationId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  if (!visible) return null

  const isDone = phase === "done"
  const pacmanLeft = (percent / 100) * (PACMAN_BAR_WIDTH - PACMAN_SIZE)

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background overflow-hidden transition-opacity duration-700 ${isDone ? "opacity-0" : "opacity-100"}`}
    >
      {/* Matrix digital rain */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50" />

      <div className="relative flex flex-col items-center gap-9">
        {/* Pixel-grid "JC" logo, drops into place like falling blocks */}
        <div className="flex items-end gap-3">
          <PixelLetter grid={PIXEL_LETTER_J} baseDelay={0} isDrawing={phase === "drawing"} />
          <PixelLetter grid={PIXEL_LETTER_C} baseDelay={250} isDrawing={phase === "drawing"} />
        </div>

        {/* Pac-Man eating progress bar */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative" style={{ width: PACMAN_BAR_WIDTH, height: PACMAN_SIZE }}>
            <div className="absolute inset-0 flex items-center justify-between px-0.5">
              {Array.from({ length: DOT_COUNT }).map((_, i) => (
                <span
                  key={i}
                  className={`pacman-dot ${percent >= ((i + 1) / DOT_COUNT) * 100 ? "eaten" : ""}`}
                />
              ))}
            </div>
            <div
              className={`pacman ${phase === "filling" ? "pacman-chomp" : ""}`}
              style={{ left: `${pacmanLeft}px` }}
            />
          </div>

          {/* Terminal-style status */}
          <p
            className={`text-[10px] font-mono text-muted-foreground tracking-[0.4em] uppercase transition-opacity duration-500 ${
              isDone ? "opacity-0" : "opacity-100"
            }`}
          >
            cargando_sistema {String(Math.min(percent, 100)).padStart(3, "0")}%
            <span className="animate-cursor-blink">_</span>
          </p>
        </div>
      </div>
    </div>
  )
}
