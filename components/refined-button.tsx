"use client"

import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { RefinedMagneticEffect } from "@/components/refined-magnetic-effect"

interface RefinedButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  intensity?: number
  onClick?: () => void
}

export function RefinedButton({
  children,
  className,
  variant = "default",
  size = "md",
  intensity = 0.15,
  onClick,
  ...props
}: RefinedButtonProps) {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  }

  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/80",
    outline: "border border-input bg-background hover:bg-accent/50",
    ghost: "hover:bg-accent/30",
  }

  return (
    <RefinedMagneticEffect intensity={intensity} range={100}>
      <motion.button
        className={cn(
          "interactive relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group",
          sizeClasses[size],
          variantClasses[variant],
          className,
        )}
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        {...props}
      >
        <span className="relative z-10">
          {children}
        </span>
      </motion.button>
    </RefinedMagneticEffect>
  )
}
