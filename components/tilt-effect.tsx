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
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2
    
    // Calculate rotation with correct mapping (like TiltedCard)
    const rotateX = (offsetY / (rect.height / 2)) * -maxAngle * intensity
    const rotateY = (offsetX / (rect.width / 2)) * maxAngle * intensity
    
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
