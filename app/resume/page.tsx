"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowUpRight, Plus, Minus, Download } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    id: "cognijin",
    company: "Cognijin Inc.",
    role: "Design Engineer",
    type: "Full-time",
    duration: "Sep 2025 - Present",
    location: "Remote",
    responsibilities: [
      "Built reusable Next.js + React + TypeScript components for Pepper – AI job search assistant with design tokens and responsive patterns, focusing on accessibility, AI interactions and polished user experience.",
      "Led end-to-end UX design, UI design, Front-End functional development in CI/CD pipeline for Pepper - AI job search assistant including onboarding, job board, filter system, resume editor and AI interactions within the web application.",
      "Authored component documentation and contribution guidelines to standardize props, variants, and usage patterns; participated in code reviews and enforced linting/formatting for consistent quality.",
      "Owned redesign, development and hosting for 3 client websites in Next.js + React + Tailwind with an admin dashboard to review form submissions, AI chatbot transcripts, and auto-generated summaries; doubled lead capture rate and drove 50%+ increase in monthly revenue.",
      "Collaborated with designers, researchers, and AI engineers to scope, estimate, and deliver UI work in sprints; triaged accessibility and usability issues discovered in testing and production.",
    ],
  },
  {
    id: "infinichains",
    company: "Infinichains (Credibl) Inc.",
    role: "Software Designer",
    type: "Full-time",
    duration: "Jun 2022 - Aug 2023",
    location: "Remote",
    responsibilities: [
      "Architected ESG dashboard UI with React components and Chart.js visualizations; optimized API payloads and state flows for real-time metric updates and accurate data representation across enterprise clients.",
      "Built 20+ component design system with patterns and guidelines that reduced handoff friction; documented variants, usage, and constraints to maintain consistency across implementations.",
      "Led mixed-methods research (stakeholder interviews, usability tests, surveys) to identify navigation bottlenecks and visualization issues; validated a 25% task completion improvement via streamlined IA.",
      "Drove design system governance with usage guidance and pattern libraries, enabling scalable dashboard delivery and consistent UX across client deployments.",
    ],
  },
]

export default function ResumePage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [isDownloadHovered, setIsDownloadHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current && expandedIndex === null) {
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
  }

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
    setHoveredIndex(null)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="pt-32 pb-24 px-8 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="font-mono text-sm 3xl:text-base tracking-[0.3em] mb-4 text-white/60">RESUME</p>
            <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl 3xl:text-9xl font-light tracking-tight">
              Experience
            </h1>
          </div>

          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-2 font-mono text-sm 3xl:text-base tracking-wider text-accent hover:text-white transition-colors px-4 py-2"
            onMouseEnter={() => setIsDownloadHovered(true)}
            onMouseLeave={() => setIsDownloadHovered(false)}
          >
            DOWNLOAD PDF
            <motion.span
              animate={
                isDownloadHovered
                  ? {
                      y: [0, 4, 0],
                    }
                  : { y: 0 }
              }
              transition={
                isDownloadHovered
                  ? {
                      duration: 0.6,
                      ease: "easeInOut",
                      repeat: Number.POSITIVE_INFINITY,
                    }
                  : {
                      duration: 0.3,
                      ease: "easeOut",
                    }
              }
            >
              <Download className="w-4 h-4 3xl:w-5 3xl:h-5" />
            </motion.span>
          </a>
        </motion.div>

        {/* Experience List */}
        <div ref={containerRef} onMouseMove={handleMouseMove} className="relative">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative border-t border-white/10"
            >
              {/* Experience Header - Always visible */}
              <div
                data-cursor-hover
                className="py-8 md:py-12 cursor-pointer"
                onMouseEnter={() => expandedIndex === null && setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => toggleExpand(index)}
              >
                <div className="flex items-center justify-between gap-4 flex-1">
                  {/* Left side - Duration, Company, Role */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 flex-1">
                    {/* Duration - Increased size */}
                    <span className="font-mono text-xs 3xl:text-sm text-white/60 tracking-widest md:w-40 3xl:md:w-48">
                      {experience.duration}
                    </span>

                    {/* Company & Role Badge - Removed outcome/description */}
                    <div className="flex-1">
                      <motion.h3
                        className="font-sans text-3xl md:text-5xl lg:text-6xl 3xl:text-7xl font-light tracking-tight"
                        animate={{
                          x: hoveredIndex === index ? 20 : 0,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {experience.company}
                      </motion.h3>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="font-mono text-xs 3xl:text-sm tracking-wider px-3 py-1.5 3xl:px-4 3xl:py-2 bg-accent/20 text-accent rounded-full">
                          {experience.role}
                        </span>
                        <span className="font-mono text-xs 3xl:text-sm tracking-wider px-3 py-1.5 3xl:px-4 3xl:py-2 bg-white/10 text-white rounded-full">
                          {experience.type}
                        </span>
                        <span className="font-mono text-xs 3xl:text-sm tracking-wider px-3 py-1.5 3xl:px-4 3xl:py-2 bg-white/10 text-white rounded-full">
                          {experience.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="ml-auto pl-8"
                  >
                    <AnimatePresence mode="wait">
                      {expandedIndex === index ? (
                        <motion.div
                          key="minus"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Minus className="w-6 h-6 3xl:w-8 3xl:h-8 text-accent" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="plus"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Plus className="w-6 h-6 3xl:w-8 3xl:h-8 text-foreground" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </div>

              {/* Expanded Content - Responsibilities */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 pb-8 md:pl-40 3xl:md:pl-48">
                      <p className="font-mono text-base 3xl:text-lg tracking-widest text-accent mb-4 font-semibold">
                        KEY RESPONSIBILITIES
                      </p>
                      <ul className="space-y-3">
                        {experience.responsibilities.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className="flex items-start gap-3"
                          >
                            <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span className="font-mono text-sm 3xl:text-base text-white/80 leading-relaxed">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          {/* Bottom Border */}
          <div className="border-t border-white/10" />
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <p className="font-mono 3xl:text-base tracking-[0.3em] mb-8 text-lg text-foreground">EDUCATION</p>

          <div className="border-t border-white/10 py-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="font-mono text-xs 3xl:text-sm text-white/60 tracking-widest md:w-40 3xl:md:w-48">
                Jun 2025
              </span>
              <div className="flex-1">
                <h3 className="font-sans text-2xl md:text-3xl 3xl:text-4xl font-light tracking-tight">
                  Master of Science in Human-Computer Interaction
                </h3>
                <p className="font-mono text-sm 3xl:text-base text-white/60 mt-1">
                  DePaul University, Chicago, IL • GPA 3.6/4.00
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 py-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="font-mono text-xs 3xl:text-sm text-white/60 tracking-widest md:w-40 3xl:md:w-48">
                May 2022
              </span>
              <div className="flex-1">
                <h3 className="font-sans text-2xl md:text-3xl 3xl:text-4xl font-light tracking-tight">
                  Bachelor of Engineering in Computer Science
                </h3>
                <p className="font-mono text-sm 3xl:text-base text-white/60 mt-1">
                  VESIT, Mumbai, India • GPA 3.63/4.00
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10" />
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}
