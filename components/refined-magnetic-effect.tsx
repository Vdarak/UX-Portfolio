"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface RefinedMagneticProps {
  children: React.ReactNode
  className?: string
  intensity?: number
  range?: number
}

export function RefinedMagneticEffect({
  children,
  className,
  intensity = 0.15, // Much more subtle default
  range = 100, // Magnetic field range in pixels
}: RefinedMagneticProps) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200, mass: 0.8 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

      // Only apply magnetic effect within range
      if (distance < range) {
        const factor = (1 - distance / range) * intensity
        const magneticX = deltaX * factor
        const magneticY = deltaY * factor

        // Apply easing to make the effect even more subtle
        x.set(magneticX * 0.5)
        y.set(magneticY * 0.5)
      } else {
        x.set(0)
        y.set(0)
      }
    }

    const handleMouseEnter = () => {
      document.addEventListener("mousemove", handleMouseMove)
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
      document.removeEventListener("mousemove", handleMouseMove)
    }

    element.addEventListener("mouseenter", handleMouseEnter)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter)
      element.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [x, y, intensity, range])

  return (
    <motion.div ref={ref} className={`interactive relative ${className}`} style={{ x: springX, y: springY }}>
      {children}
    </motion.div>
  )
}
