"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { RefinedMagneticEffect } from "@/components/refined-magnetic-effect"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("")

  const pathname = usePathname()

  const isActiveLink = (href: string) => {
    // For non-homepage routes
    if (pathname !== "/") {
      if (href === "/poetry") {
        return pathname.startsWith("/poetry")
      }
      if (href === "/games") {
        return pathname.startsWith("/games")
      }
      return false
    }

    // For homepage sections, use scroll-based detection
    if (href === "/#projects") {
      return activeSection === "projects"
    }
    if (href === "/#about") {
      return activeSection === "about"
    }
    if (href === "/#contact") {
      return activeSection === "contact"
    }

    return false
  }

  // Scroll-based section detection for homepage
  useEffect(() => {
    if (pathname !== "/") return

    const handleScrollSections = () => {
      const sections = ["projects", "about", "contact"]
      const scrollPosition = window.scrollY + 100 // Offset for header height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            return
          }
        }
      }

      // If we're at the very top, default to projects
      if (window.scrollY < 100) {
        setActiveSection("projects")
      }
    }

    // Initial check
    handleScrollSections()

    // Throttled scroll listener
    let ticking = false
    const throttledScrollSections = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScrollSections()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScrollSections, { passive: true })
    return () => window.removeEventListener("scroll", throttledScrollSections)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Set scrolled state for background blur
      setIsScrolled(currentScrollY > 10)

      // Handle visibility based on scroll direction
      if (currentScrollY < 10) {
        // Always show at top of page
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold - hide
        setIsVisible(false)
        setIsMenuOpen(false) // Close mobile menu when hiding
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledHandleScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledHandleScroll)
  }, [lastScrollY])

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element
      if (isMenuOpen && !target.closest("header")) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.addEventListener("click", handleClickOutside)
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("click", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  // Initial entrance animation timing - appears after hero section
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimatedIn(true)
    }, pathname === "/" ? 3200 : 600) // 3.2s delay for homepage, 600ms for other pages

    return () => clearTimeout(timer)
  }, [pathname]) // Add pathname as dependency to re-run when route changes

  return (
    <motion.header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent",
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isVisible && hasAnimatedIn ? 0 : -100,
        opacity: isVisible && hasAnimatedIn ? 1 : 0,
      }}
      transition={{
        duration: 0.8,
        delay: hasAnimatedIn ? 0 : 0, // No additional delay after initial animation
        ease: [0.21, 0.47, 0.32, 0.98], // Match the hero section easing
      }}
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: hasAnimatedIn ? 1 : 0, x: hasAnimatedIn ? 0 : -30 }}
          transition={{ duration: 0.6, delay: hasAnimatedIn ? 0.1 : 0, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <RefinedMagneticEffect intensity={0.2} range={80}>
            <Link
              href="/"
              className="interactive font-medium transition-colors hover:text-foreground/80 px-2 py-1 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Vedant Darak
            </Link>
          </RefinedMagneticEffect>
        </motion.div>

        <div className="hidden md:flex md:items-center md:gap-6">
          <motion.nav 
            className="flex items-center gap-6"
            initial="hidden"
            animate={hasAnimatedIn ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {[
              { href: "/#projects", label: "Projects" },
              { href: "/#about", label: "About" },
              { href: "/#contact", label: "Contact" },
              { href: "/games", label: "Games" },
              { href: "/poetry", label: "Poetry" },
            ].map((item, index) => (
              <motion.div
                key={item.href}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    },
                  },
                }}
              >
                <RefinedMagneticEffect intensity={0.15} range={70}>
                  <Link
                    href={item.href}
                    className={`interactive text-sm hover:text-foreground/80 transition-all duration-300 px-3 py-2 rounded-md ${
                      isActiveLink(item.href) 
                        ? "font-bold text-foreground" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </RefinedMagneticEffect>
              </motion.div>
            ))}
          </motion.nav>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: hasAnimatedIn ? 1 : 0, x: hasAnimatedIn ? 0 : 30 }}
            transition={{ duration: 0.6, delay: hasAnimatedIn ? 0.7 : 0, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <RefinedMagneticEffect intensity={0.15} range={70}>
              <div className="interactive">
                <ThemeToggle />
              </div>
            </RefinedMagneticEffect>
          </motion.div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: hasAnimatedIn ? 1 : 0, x: hasAnimatedIn ? 0 : 30 }}
            transition={{ duration: 0.6, delay: hasAnimatedIn ? 0.5 : 0, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <RefinedMagneticEffect intensity={0.15} range={70}>
              <div className="interactive">
                <ThemeToggle />
              </div>
            </RefinedMagneticEffect>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: hasAnimatedIn ? 1 : 0, x: hasAnimatedIn ? 0 : 30 }}
            transition={{ duration: 0.6, delay: hasAnimatedIn ? 0.6 : 0, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <RefinedMagneticEffect intensity={0.15} range={70}>
              <Button
                variant="ghost"
                size="icon"
                className="interactive md:hidden rounded-md"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </RefinedMagneticEffect>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        id="mobile-menu"
        className="md:hidden"
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          opacity: { duration: isMenuOpen ? 0.3 : 0.2 },
        }}
        style={{ overflow: "hidden" }}
      >
        <motion.nav
          className="container flex flex-col gap-6 p-6 bg-background border-b"
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: {
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
            closed: {
              transition: { staggerChildren: 0.05, staggerDirection: -1 },
            },
          }}
        >
          {[
            { href: "/#projects", label: "Projects" },
            { href: "/#about", label: "About" },
            { href: "/#contact", label: "Contact" },
            { href: "/games", label: "Games" },
            { href: "/poetry", label: "Poetry" },
          ].map((item) => (
            <motion.div
              key={item.href}
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: -10 },
              }}
              transition={{ duration: 0.2 }}
            >
              <RefinedMagneticEffect intensity={0.15} range={70}>
                <Link
                  href={item.href}
                  className={`interactive text-lg font-medium transition-all duration-300 px-3 py-2 rounded-md w-fit block ${
                    isActiveLink(item.href) 
                      ? "font-bold text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </RefinedMagneticEffect>
            </motion.div>
          ))}
        </motion.nav>
      </motion.div>

      {/* Mobile menu backdrop */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm md:hidden"
          style={{ top: "100%" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </motion.header>
  )
}
