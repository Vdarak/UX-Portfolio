"use client"

import React, { useRef, useState, MouseEvent, ReactNode } from 'react'

interface TiltEffectProps {
  children: ReactNode
  maxAngle?: number
  className?: string
  intensity?: number
  resetOnLeave?: boolean
}

export function TiltEffect({ 
  children, 
  maxAngle = 20, 
  className = '', 
  intensity = 1,
  resetOnLeave = true 
}: TiltEffectProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current) return

    const rect = elementRef.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    // Calculate relative position (-0.5 to 0.5)
    const relX = (mouseX / rect.width) - 0.5
    const relY = (mouseY / rect.height) - 0.5
    
    // Convert to rotation angles with intensity multiplier (inverted for natural feel)
    const rotateY = maxAngle * (2 * relX) * intensity
    const rotateX = maxAngle * (2 * relY) * intensity
    
    // Apply transform
    elementRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (elementRef.current) {
      elementRef.current.style.transformStyle = 'preserve-3d'
      elementRef.current.style.transition = 'transform 0.1s ease-out'
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (elementRef.current && resetOnLeave) {
      elementRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
      elementRef.current.style.transition = 'transform 0.6s ease-out'
    }
  }

  return (
    <div
      ref={elementRef}
      className={`tilt-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s ease-out'
      }}
    >
      {children}
    </div>
  )
}
