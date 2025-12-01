"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TechBorderProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "clipped" | "notched" | "glow"
  accentColor?: "yellow" | "white" | "none"
  cornerSize?: "sm" | "md" | "lg"
}

/**
 * TechBorder - Industrial Fintech / Cyberpunk border component
 * Features precision lines, corner clips, and accent notches
 */
export function TechBorder({
  children,
  className,
  variant = "default",
  accentColor = "yellow",
  cornerSize = "md",
}: TechBorderProps) {
  const cornerSizes = {
    sm: "6px",
    md: "10px",
    lg: "14px",
  }

  const corner = cornerSizes[cornerSize]

  const baseStyles = "relative border border-border transition-all duration-300"

  const variantStyles = {
    default: "",
    clipped: "",
    notched: "",
    glow: "border-accent shadow-[0_0_10px_hsl(var(--accent)/0.3),inset_0_0_10px_hsl(var(--accent)/0.1)]",
  }

  const clipPath = variant === "clipped" 
    ? {
        clipPath: `polygon(
          0 ${corner}, ${corner} 0, 
          calc(100% - ${corner}) 0, 100% ${corner},
          100% calc(100% - ${corner}), calc(100% - ${corner}) 100%,
          ${corner} 100%, 0 calc(100% - ${corner})
        )`
      }
    : {}

  return (
    <div
      className={cn(baseStyles, variantStyles[variant], className)}
      style={clipPath}
    >
      {/* Corner accents for notched variant */}
      {variant === "notched" && accentColor !== "none" && (
        <>
          {/* Top-left corner */}
          <div 
            className={cn(
              "absolute top-0 left-4 w-4 h-0.5",
              accentColor === "yellow" ? "bg-cyber-yellow" : "bg-foreground"
            )} 
          />
          {/* Bottom-right corner */}
          <div 
            className={cn(
              "absolute bottom-0 right-4 w-4 h-0.5",
              accentColor === "yellow" ? "bg-cyber-yellow" : "bg-foreground"
            )} 
          />
        </>
      )}
      
      {/* Corner markers */}
      {(variant === "default" || variant === "glow") && accentColor !== "none" && (
        <>
          {/* Top-left corner marker */}
          <div className="absolute -top-px -left-px">
            <div 
              className={cn(
                "w-3 h-px",
                accentColor === "yellow" ? "bg-cyber-yellow" : "bg-foreground"
              )} 
            />
            <div 
              className={cn(
                "w-px h-3",
                accentColor === "yellow" ? "bg-cyber-yellow" : "bg-foreground"
              )} 
            />
          </div>
          {/* Bottom-right corner marker */}
          <div className="absolute -bottom-px -right-px">
            <div 
              className={cn(
                "absolute bottom-0 right-0 w-3 h-px",
                accentColor === "yellow" ? "bg-cyber-yellow" : "bg-foreground"
              )} 
            />
            <div 
              className={cn(
                "absolute bottom-0 right-0 w-px h-3",
                accentColor === "yellow" ? "bg-cyber-yellow" : "bg-foreground"
              )} 
            />
          </div>
        </>
      )}

      {children}
    </div>
  )
}

/**
 * AccentLine - A decorative line with gradient and glow effect
 */
export function AccentLine({ className }: { className?: string }) {
  return (
    <div 
      className={cn(
        "h-0.5 bg-gradient-to-r from-transparent via-cyber-yellow to-transparent",
        className
      )} 
    />
  )
}

/**
 * DataLabel - Technical label with mono font styling
 */
export function DataLabel({ 
  children, 
  className 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  return (
    <span 
      className={cn(
        "font-mono text-xs font-medium tracking-widest uppercase text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  )
}

/**
 * DataValue - Technical value display with accent styling
 */
export function DataValue({ 
  children, 
  accent = false,
  className 
}: { 
  children: React.ReactNode
  accent?: boolean
  className?: string 
}) {
  return (
    <span 
      className={cn(
        "font-mono text-sm font-semibold tracking-wide",
        accent ? "text-cyber-yellow" : "text-foreground",
        className
      )}
    >
      {children}
    </span>
  )
}
