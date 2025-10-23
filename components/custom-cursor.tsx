"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye } from "lucide-react"
import { usePathname } from "next/navigation"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHoveringProject, setIsHoveringProject] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const pathname = usePathname()

  // Handle mounting to avoid hydration issues
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Reset cursor state when route changes
  useEffect(() => {
    setIsHoveringProject(false)
  }, [pathname])

  const updateMousePosition = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  const handleProjectHover = useCallback(() => {
    setIsHoveringProject(true)
  }, [])

  const handleProjectLeave = useCallback(() => {
    setIsHoveringProject(false)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    // Add mouse move listener
    document.addEventListener("mousemove", updateMousePosition, { passive: true })

    // Function to add listeners to project images
    const addProjectListeners = () => {
      // Remove existing listeners first
      const existingImages = document.querySelectorAll("[data-project-image]")
      existingImages.forEach((image) => {
        image.removeEventListener("mouseenter", handleProjectHover)
        image.removeEventListener("mouseleave", handleProjectLeave)
      })

      // Add new listeners
      const projectImages = document.querySelectorAll("[data-project-image]")
      projectImages.forEach((image) => {
        image.addEventListener("mouseenter", handleProjectHover, { passive: true })
        image.addEventListener("mouseleave", handleProjectLeave, { passive: true })
      })

      return () => {
        projectImages.forEach((image) => {
          image.removeEventListener("mouseenter", handleProjectHover)
          image.removeEventListener("mouseleave", handleProjectLeave)
        })
      }
    }

    // Initial setup
    const cleanupInitial = addProjectListeners()

    // Set up mutation observer to handle dynamic content
    const observer = new MutationObserver((mutations) => {
      let shouldUpdate = false
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element
              if (element.querySelector && element.querySelector("[data-project-image]")) {
                shouldUpdate = true
              }
              if (element.hasAttribute && element.hasAttribute("data-project-image")) {
                shouldUpdate = true
              }
            }
          })
        }
      })

      if (shouldUpdate) {
        // Small delay to ensure DOM is fully updated
        setTimeout(addProjectListeners, 100)
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      document.removeEventListener("mousemove", updateMousePosition)
      cleanupInitial()
      observer.disconnect()
    }
  }, [isMounted, updateMousePosition, handleProjectHover, handleProjectLeave])

  useEffect(() => {
    if (isMounted) {
      setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
    }
  }, [isMounted])

  if (!isMounted || isTouchDevice) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence mode="wait">
        {isHoveringProject && (
          <motion.div
            className="absolute"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              x: -32, // Center the cursor (adjusted for wider element with text)
              y: -16,
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          >
            <div className="relative">
              {/* Cohesive eye and text cursor */}
              <motion.div
                className="bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center gap-2 px-3 py-1 border border-primary/40 shadow-lg"
                animate={{ scale: isHoveringProject ? 1.05 : 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Eye className="w-4 h-4 text-primary" strokeWidth={2} />
                <span className="text-sm font-medium text-primary">View</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
