"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RefinedMagneticEffect } from "@/components/refined-magnetic-effect"
import { FlowingText } from "@/components/flowing-text"

interface NavigationSection {
  id: string
  title: string
  subtitle?: string
}

interface FloatingSectionNavProps {
  sections: NavigationSection[]
  className?: string
}

export function FloatingSectionNav({ sections, className = "" }: FloatingSectionNavProps) {
  const [activeSection, setActiveSection] = useState<string>("")
  const [isVisible, setIsVisible] = useState(false)
  const [navPosition, setNavPosition] = useState({ right: 8, top: 80 })
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Intelligent positioning system
  useEffect(() => {
    const updatePosition = () => {
      const viewportWidth = window.innerWidth
      const contentElements = document.querySelectorAll('main > div > *')
      let maxContentRight = 0
      
      contentElements.forEach(el => {
        const rect = el.getBoundingClientRect()
        if (rect.right > maxContentRight) {
          maxContentRight = rect.right
        }
      })
      
      // Calculate optimal position with 16px below main nav
      const availableSpace = viewportWidth - maxContentRight
      const minSpacing = 48 // Increased from 40 to 48 for 8px more space from content on left
      const navWidth = 200 // Approximate nav width
      
      let newRight = 8 // Default - moved 8px closer to edge (from 16 to 8)
      if (availableSpace > navWidth + minSpacing) {
        newRight = Math.min(8, Math.max(4, viewportWidth - maxContentRight - navWidth - minSpacing))
      }
      
      setNavPosition({ right: newRight, top: 80 }) // 80px = 64px header + 16px spacing
    }
    
    updatePosition()
    window.addEventListener('resize', updatePosition)
    return () => window.removeEventListener('resize', updatePosition)
  }, [])

  // Show nav when reaching Chapter 1 and track active section
  useEffect(() => {
    const handleScroll = () => {
      const chapter1Element = document.getElementById(sections[0]?.id)
      if (chapter1Element) {
        const chapter1Top = chapter1Element.offsetTop - 100
        const scrollY = window.scrollY
        
        // Show/hide nav logic
        if (!isVisible && scrollY >= chapter1Top) {
          setIsVisible(true)
        }
        if (isVisible && scrollY < chapter1Top) {
          setIsVisible(false)
        }
        
        // Track active section based on scroll position
        if (isVisible) {
          // default to the current active so we don't reset when scrolling past all sections
          let currentActiveSection = activeSection || sections[0]?.id || ""

           // Find which section is currently most visible
           sections.forEach((section) => {
             const element = document.getElementById(section.id)
             if (element) {
               const rect = element.getBoundingClientRect()
               const elementTop = rect.top + scrollY
               const elementBottom = elementTop + rect.height
               
               // Check if we're within this section (with some offset for better UX)
               if (scrollY + 200 >= elementTop && scrollY + 200 < elementBottom) {
                currentActiveSection = section.id
               }
             }
           })
           
          // Only update if changed
          if (currentActiveSection !== activeSection) {
            setActiveSection(currentActiveSection)
          }
         }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections, isVisible, activeSection])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 100 // Account for nav spacing
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && typeof window !== 'undefined' && window.innerWidth >= 1376 && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, x: 100, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100, y: -10 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            mass: 0.8,
            opacity: { duration: 0.2 },
            x: { duration: 0.4 }
          }}
          className={`fixed z-40`}
          style={{
            top: `${navPosition.top}px`, 
            right: `${navPosition.right}px`
          }}
        >
          <div className="backdrop-blur-xl bg-background/90 border border-border/30 rounded-xl shadow-lg shadow-black/5 dark:shadow-black/20 px-3 py-2">
            {/* Desktop Compact Sidebar Version */}
            <div className="flex flex-col gap-1">
              {sections.map((section, index) => {
                const isActive = section.id === activeSection
                
                return (
                  <RefinedMagneticEffect key={section.id} intensity={0.12} range={30}>
                    <motion.button
                      onClick={() => scrollToSection(section.id)}
                      className="group relative flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-200 hover:bg-muted/50 min-w-0"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      title={`${section.title}${section.subtitle ? ` - ${section.subtitle}` : ''}`}
                    >
                      {/* Active indicator dot */}
                      <div className={`
                        relative flex-shrink-0 w-1.5 h-1.5 rounded-full transition-all duration-300
                        ${isActive 
                          ? 'bg-primary scale-150' 
                          : 'bg-muted-foreground/30 group-hover:bg-muted-foreground/60'
                        }
                      `}>
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute inset-0 rounded-full bg-primary"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                        {isActive && (
                          <div className="absolute inset-0 rounded-full bg-primary animate-pulse opacity-50" />
                        )}
                      </div>

                      {/* Section title - compact */}
                      <div className="flex-1 min-w-0 text-left">
                        <div className={`
                          text-[10px] font-medium transition-colors duration-200 truncate leading-tight
                          ${isActive 
                            ? '' 
                            : 'text-muted-foreground group-hover:text-foreground'
                          }
                        `}>
                          {isActive ? (
                            <FlowingText 
                              text={section.title}
                              className=""
                            />
                          ) : (
                            section.title
                          )}
                        </div>
                      </div>

                      {/* Active section highlight */}
                      {isActive && (
                        <motion.div
                          layoutId="activeBg"
                          className="absolute inset-0 bg-primary/5 rounded-lg border border-primary/20"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.button>
                  </RefinedMagneticEffect>
                )
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
