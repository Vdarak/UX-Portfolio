"use client"

import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { RefinedMagneticEffect } from "@/components/refined-magnetic-effect"
import { Slot } from "@radix-ui/react-slot"

interface RefinedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost" | "cyber" | "cyber-filled"
  size?: "sm" | "md" | "lg"
  intensity?: number
  asChild?: boolean
}

export function RefinedButton({
  children,
  className,
  variant = "default",
  size = "md",
  intensity = 0.15,
  asChild = false,
  onClick,
  ...props
}: RefinedButtonProps) {
  const Comp = asChild ? Slot : motion.button

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  }

  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 border border-primary",
    outline: "border border-border bg-transparent hover:bg-accent/10 hover:border-accent",
    ghost: "hover:bg-accent/10 border border-transparent",
    cyber: cn(
      "bg-transparent border border-foreground text-foreground",
      "hover:bg-accent hover:text-accent-foreground hover:border-accent",
      "hover:shadow-[0_0_20px_hsl(var(--accent)/0.5)]"
    ),
    "cyber-filled": cn(
      "bg-accent text-accent-foreground border border-accent",
      "hover:bg-accent/90 hover:shadow-[0_0_30px_hsl(var(--accent)/0.6)]"
    ),
  }

  // Tech-style clip path for cyber variants
  const clipPath = (variant === "cyber" || variant === "cyber-filled") 
    ? "polygon(0 4px, 4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px))"
    : undefined

  const buttonContent = (
    <Comp
      className={cn(
        "interactive btn-text relative inline-flex items-center justify-center font-semibold tracking-wider uppercase transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      onClick={onClick}
      style={{ clipPath }}
      {...(!asChild && {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
        transition: { type: "spring", stiffness: 400, damping: 20 },
      })}
      {...props}
    >
      <span className="relative z-10">
        {children}
      </span>
    </Comp>
  )

  return (
    <RefinedMagneticEffect intensity={intensity} range={100}>
      {buttonContent}
    </RefinedMagneticEffect>
  )
}
