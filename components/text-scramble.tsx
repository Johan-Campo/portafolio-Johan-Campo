"use client"

import { useEffect, useState, useCallback } from "react"

const CHARS = "!<>-_\\/[]{}=+*^?#________"

interface TextScrambleProps {
  text: string
  className?: string
  duration?: number
}

export function TextScramble({ text, className = "", duration = 1200 }: TextScrambleProps) {
  const [display, setDisplay] = useState("")
  const [done, setDone] = useState(false)

  const scramble = useCallback(() => {
    const length = text.length
    const queue: { from: string; to: string; start: number; end: number }[] = []
    for (let i = 0; i < length; i++) {
      queue.push({
        from: CHARS[Math.floor(Math.random() * CHARS.length)],
        to: text[i],
        start: Math.floor(Math.random() * 40),
        end: Math.floor(Math.random() * 40) + 40,
      })
    }

    let frame = 0
    const totalFrames = Math.ceil(duration / 16)

    const update = () => {
      let output = ""
      let complete = 0

      for (let i = 0; i < length; i++) {
        const { from, to, start, end } = queue[i]
        const charFrame = Math.floor((frame / totalFrames) * (end - start) + start)

        if (charFrame >= end) {
          output += to
          complete++
        } else if (charFrame >= start) {
          output += CHARS[Math.floor(Math.random() * CHARS.length)]
        } else {
          output += from
        }
      }

      setDisplay(output)
      frame++

      if (complete === length) {
        setDone(true)
        return
      }
      requestAnimationFrame(update)
    }

    update()
  }, [text, duration])

  useEffect(() => {
    const timer = setTimeout(scramble, 300)
    return () => clearTimeout(timer)
  }, [scramble])

  return (
    <span className={className} aria-label={text}>
      {display || text}
      {!done && (
        <span className="animate-cursor-blink text-primary/70 font-normal" aria-hidden="true">_</span>
      )}
    </span>
  )
}
