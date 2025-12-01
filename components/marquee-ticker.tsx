"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface MarqueeTickerProps {
  children: React.ReactNode
  className?: string
  speed?: "slow" | "normal" | "fast"
  direction?: "left" | "right"
  pauseOnHover?: boolean
  separator?: React.ReactNode
  repeat?: number
}

/**
 * MarqueeTicker - Cyberpunk-style scrolling ticker
 * Creates an infinite scrolling text animation
 */
export function MarqueeTicker({
  children,
  className,
  speed = "normal",
  direction = "left",
  pauseOnHover = true,
  separator = <span className="mx-8 text-cyber-yellow">◆</span>,
  repeat = 4,
}: MarqueeTickerProps) {
  const speeds = {
    slow: "40s",
    normal: "30s",
    fast: "20s",
  }

  const animationDuration = speeds[speed]
  const animationDirection = direction === "right" ? "reverse" : "normal"

  return (
    <div 
      className={cn(
        "overflow-hidden whitespace-nowrap border-y border-border/50 py-3",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animationDuration,
          animationDirection,
        }}
      >
        {/* Repeat content for seamless loop */}
        {Array.from({ length: repeat }).map((_, i) => (
          <React.Fragment key={i}>
            {children}
            {separator}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

/**
 * TickerItem - Individual item in the ticker
 */
export function TickerItem({ 
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
        "font-mono text-sm tracking-widest uppercase",
        accent ? "text-cyber-yellow font-semibold" : "text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  )
}

/**
 * StatusTicker - A ticker showing live status updates
 */
export function StatusTicker({
  items,
  className,
}: {
  items: Array<{ label: string; value: string; accent?: boolean }>
  className?: string
}) {
  return (
    <MarqueeTicker className={className}>
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-2 mx-6">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            {item.label}:
          </span>
          <span 
            className={cn(
              "font-mono text-sm font-semibold",
              item.accent ? "text-cyber-yellow" : "text-foreground"
            )}
          >
            {item.value}
          </span>
        </span>
      ))}
    </MarqueeTicker>
  )
}
