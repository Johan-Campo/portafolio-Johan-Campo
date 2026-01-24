"use client"

import { useEffect, useRef } from "react"

export function PixelBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const pixelSize = 20
    const cols = Math.ceil(canvas.width / pixelSize) + 1
    const rows = Math.ceil(canvas.height / pixelSize) + 1

    // Dark green/gray/black palette
    const colors = [
      "rgba(20, 30, 25, 0.8)",
      "rgba(25, 40, 30, 0.6)",
      "rgba(15, 25, 20, 0.9)",
      "rgba(30, 45, 35, 0.5)",
      "rgba(10, 18, 14, 0.95)",
      "rgba(35, 55, 40, 0.4)",
      "rgba(22, 35, 28, 0.7)",
    ]

    interface Pixel {
      x: number
      y: number
      color: string
      targetColor: string
      transitionProgress: number
      transitionSpeed: number
    }

    const pixels: Pixel[] = []

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const color = colors[Math.floor(Math.random() * colors.length)]
        pixels.push({
          x: i * pixelSize,
          y: j * pixelSize,
          color,
          targetColor: color,
          transitionProgress: 1,
          transitionSpeed: 0.005 + Math.random() * 0.01,
        })
      }
    }

    const lerp = (start: number, end: number, t: number) => start + (end - start) * t

    const parseColor = (color: string) => {
      const match = color.match(/rgba?$$(\d+),\s*(\d+),\s*(\d+),?\s*([\d.]+)?$$/)
      if (match) {
        return {
          r: Number.parseInt(match[1]),
          g: Number.parseInt(match[2]),
          b: Number.parseInt(match[3]),
          a: Number.parseFloat(match[4] || "1"),
        }
      }
      return { r: 0, g: 0, b: 0, a: 1 }
    }

    const animate = () => {
      ctx.fillStyle = "rgb(10, 15, 12)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      pixels.forEach((pixel) => {
        if (pixel.transitionProgress < 1) {
          pixel.transitionProgress += pixel.transitionSpeed

          const startColor = parseColor(pixel.color)
          const endColor = parseColor(pixel.targetColor)

          const r = Math.round(lerp(startColor.r, endColor.r, pixel.transitionProgress))
          const g = Math.round(lerp(startColor.g, endColor.g, pixel.transitionProgress))
          const b = Math.round(lerp(startColor.b, endColor.b, pixel.transitionProgress))
          const a = lerp(startColor.a, endColor.a, pixel.transitionProgress)

          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
        } else {
          ctx.fillStyle = pixel.targetColor

          if (Math.random() < 0.001) {
            pixel.color = pixel.targetColor
            pixel.targetColor = colors[Math.floor(Math.random() * colors.length)]
            pixel.transitionProgress = 0
            pixel.transitionSpeed = 0.005 + Math.random() * 0.01
          }
        }

        ctx.fillRect(pixel.x, pixel.y, pixelSize - 1, pixelSize - 1)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10">
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background/90" />
    </div>
  )
}
