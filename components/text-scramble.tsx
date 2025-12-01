"use client"

import * as React from "react"
import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface TextScrambleProps {
  text: string
  className?: string
  scrambleOnHover?: boolean
  scrambleOnMount?: boolean
  duration?: number
  characters?: string
}

/**
 * TextScramble - Cyberpunk text scrambling effect
 * Creates a glitchy text reveal animation
 */
export function TextScramble({
  text,
  className,
  scrambleOnHover = false,
  scrambleOnMount = true,
  duration = 1000,
  characters = "!<>-_\\/[]{}—=+*^?#________",
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(scrambleOnMount ? "" : text)
  const [isScrambling, setIsScrambling] = useState(false)
  const frameRef = useRef<number>(0)
  const queueRef = useRef<Array<{ from: string; to: string; start: number; end: number; char?: string }>>([])

  const scramble = React.useCallback(() => {
    if (isScrambling) return
    
    setIsScrambling(true)
    const startTime = Date.now()
    const length = text.length
    
    // Create queue of character transitions
    queueRef.current = text.split("").map((char, i) => ({
      from: displayText[i] || "",
      to: char,
      start: Math.floor(Math.random() * 40),
      end: Math.floor(Math.random() * 40) + 40,
    }))

    const update = () => {
      const elapsed = Date.now() - startTime
      const progress = elapsed / duration

      let complete = 0
      let output = ""

      for (let i = 0; i < length; i++) {
        const { from, to, start, end } = queueRef.current[i]
        
        if (progress * 80 >= end) {
          complete++
          output += to
        } else if (progress * 80 >= start) {
          if (!queueRef.current[i].char || Math.random() < 0.28) {
            queueRef.current[i].char = characters[Math.floor(Math.random() * characters.length)]
          }
          output += queueRef.current[i].char
        } else {
          output += from
        }
      }

      setDisplayText(output)

      if (complete === length) {
        setIsScrambling(false)
      } else {
        frameRef.current = requestAnimationFrame(update)
      }
    }

    frameRef.current = requestAnimationFrame(update)
  }, [text, displayText, duration, characters, isScrambling])

  useEffect(() => {
    if (scrambleOnMount) {
      scramble()
    }
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleMouseEnter = () => {
    if (scrambleOnHover) {
      scramble()
    }
  }

  return (
    <span
      className={cn(
        "font-mono inline-block",
        isScrambling && "text-cyber-yellow",
        className
      )}
      onMouseEnter={handleMouseEnter}
    >
      {displayText || text}
    </span>
  )
}

/**
 * GlitchText - Text with CSS-based glitch effect
 */
export function GlitchText({ 
  children, 
  className 
}: { 
  children: string
  className?: string 
}) {
  return (
    <span 
      className={cn("glitch-text relative inline-block", className)}
      data-text={children}
    >
      {children}
    </span>
  )
}
