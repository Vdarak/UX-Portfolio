"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLenis } from "lenis/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { AIChatTrigger, MobileAIChatTrigger } from "./ai-chat"
import { useAIChat } from "./ai-chat-provider"

const navLinks = [
  { label: "About", href: "/about", type: "page" },
  { label: "Works", href: "#works", type: "scroll" },
  { label: "Contact", href: "#contact", type: "scroll" },
  { label: "Fun", href: "/fun", type: "page", isFun: true },
  { label: "Resume", href: "/resume", type: "page" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLogoHovered, setIsLogoHovered] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const { isOpen: isChatOpen } = useAIChat()
  const lenis = useLenis()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024) // lg breakpoint
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false)
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element && lenis) {
      lenis.scrollTo(element, { offset: -80 })
    } else if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleNavClick = (link: (typeof navLinks)[0]) => {
    if (link.type === "scroll") {
      if (pathname !== "/") {
        // If not on home page, navigate to home first
        window.location.href = "/" + link.href
      } else {
        scrollToSection(link.href)
      }
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ 
          y: 0,
          paddingRight: isChatOpen && isLargeScreen ? 440 : 0,
        }}
        transition={{ 
          y: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          paddingRight: { type: "spring", damping: 30, stiffness: 300 }
        }}
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
        }`}
      >
        <nav className="flex items-center justify-between px-6 py-4 my-0 md:px-12 md:py-5">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            <motion.div
              animate={{ rotate: isLogoHovered ? 360 : 0 }}
              transition={{
                duration: isLogoHovered ? 2 : 0.5,
                ease: isLogoHovered ? [0.68, -0.55, 0.27, 1.55] : "easeOut",
                repeat: isLogoHovered ? Number.POSITIVE_INFINITY : 0,
              }}
            >
              <Image src="/logo-favicon.svg" alt="Logo" width={32} height={32} className="w-8 h-8" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.type === "page" ? (
                  <Link
                    href={link.href}
                    className={`group relative font-mono text-xs tracking-wider hover:text-foreground transition-colors duration-300 ${link.isFun ? "text-cyan-400" : "text-foreground"}`}
                  >
                    {link.label.toUpperCase()}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(link)}
                    className="group relative font-mono text-xs tracking-wider hover:text-foreground transition-colors duration-300 text-foreground"
                  >
                    {link.label.toUpperCase()}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                  </button>
                )}
              </li>
            ))}
            {/* Separator and AI Chat Trigger */}
            <li className="flex items-center gap-8">
              <span className="w-px h-4 bg-white/20" />
              <AIChatTrigger />
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="w-6 h-px bg-foreground origin-center"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="w-6 h-px bg-foreground"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              className="w-6 h-px bg-foreground origin-center"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.type === "page" ? (
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`group text-4xl font-sans tracking-tight ${link.isFun ? "text-cyan-400" : "text-foreground"}`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link)}
                      className="group text-4xl font-sans tracking-tight text-foreground"
                    >
                      {link.label}
                    </button>
                  )}
                </motion.div>
              ))}
              {/* Mobile AI Chat Trigger */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <MobileAIChatTrigger onClose={() => setIsMenuOpen(false)} />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
