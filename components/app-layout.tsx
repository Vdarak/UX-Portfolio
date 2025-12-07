"use client"

import { useState, useEffect, type ReactNode } from "react"
import { motion } from "framer-motion"
import { useAIChat } from "./ai-chat-provider"

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  const { isOpen } = useAIChat()
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024) // lg breakpoint
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  return (
    <motion.div
      className="min-h-screen w-full"
      animate={{
        paddingRight: isOpen && isLargeScreen ? 440 : 0,
      }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
    >
      {children}
    </motion.div>
  )
}
