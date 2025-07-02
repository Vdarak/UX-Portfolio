"use client"

import type React from "react"
import { FloatingSectionNav } from "@/components/floating-section-nav"
import { useIsMobile } from "@/hooks/use-mobile"

interface NavigationSection {
  id: string
  title: string
  subtitle?: string
}

interface ProjectPageWrapperProps {
  children: React.ReactNode
  sections: NavigationSection[]
}

export function ProjectPageWrapper({ children, sections }: ProjectPageWrapperProps) {
  const isMobile = useIsMobile()
  
  return (
    <div className="relative">
      {/* Hero sections remain full-width, content sections get responsive spacing */}
      <div className="project-content-wrapper">
        {children}
      </div>
      <FloatingSectionNav sections={sections} />
    </div>
  )
}
