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
    id: "mercor",
    company: "Mercor",
    role: "AI Data Analytics Expert & Frontend Design Expert",
    type: "Contract",
    duration: "Jan 2026 - Present",
    location: "Remote",
    responsibilities: [
      "Validated 4,000+ lines of AI-generated SQL against legacy relational databases, correcting 45+ semantic join errors to ensure pinpoint accuracy for MRR reporting.",
      "Engineered a 50-table Snowflake semantic layer in Python to convert raw transaction feeds into governed, AI-ready financial metrics.",
      "Authored a 200-term enterprise business glossary standardizing KPI calculation logic, reducing metric discrepancies between expert human data and HQ by 30%.",
      "Accelerated enterprise reporting cycles by 14 days by migrating 120+ undocumented legacy views into a centralized mapped data warehouse.",
      "Evaluated generative AI design quality across 14+ domains (UI, branding, 3D, editorial, motion, interactive), designing 200+ targeted evaluation prompts that improved model output quality scores by 18% across 3 design mediums.",
      "Prototyped and stress-tested interactive visual concepts in HTML/CSS, Three.js, and Processing to validate AI model outputs, accelerating stakeholder feedback cycles by 2 weeks per review.",
      "Established evaluation rubrics and scoring documentation for 14 design and data mediums, reducing inter-rater variance by 30% and cutting per-session review time from 90 to under 45 minutes.",
    ],
  },
  {
    id: "cognijin",
    company: "Cognijin Inc.",
    role: "Frontend Design Engineer & Data Analyst",
    type: "Full-time",
    duration: "Aug 2025 - Dec 2025",
    location: "Remote",
    responsibilities: [
      "Redesigned and shipped 3 client websites with Next.js admin dashboards, driving a combined 114% increase in organic traffic, $50K+ in monthly revenue, and doubling lead capture rate across all engagements.",
      "Built a 30+ component design system in Next.js, React, and TypeScript with Figma-to-code token alignment and WCAG 2.1 AA compliance, adopted as the production component library for an agentic AI job search product.",
      "Mapped data lineage for 35+ AWS RDS source systems to address physical-to-logical transformations and regulatory compliance gaps; architected governed SQL data models to integrate AI chatbots with backend client analytics.",
      "Decreased manual data validation by 16 hours weekly by deploying automated SQL quality checks, null-value alerts, and Python validation pipelines to audit AI outputs against raw source data.",
      "Led end-to-end UX in Figma and frontend engineering within a CI/CD pipeline, reducing prototype-to-production cycle from 6 weeks to under 2; conducted WAVE and Lighthouse audits achieving an average Lighthouse accessibility score of 94/100.",
      "Conducted 20+ stakeholder interviews to translate executive performance requests into strict technical reporting requirements and standard business glossaries.",
    ],
  },
  {
    id: "infinichains",
    company: "Infinichains (Credibl) Inc.",
    role: "Software Designer & Data Analyst",
    type: "Full-time",
    duration: "Jun 2022 - Aug 2023",
    location: "Remote",
    responsibilities: [
      "Architected an ESG analytics dashboard for 3 enterprise clients serving 500+ users in React and Chart.js, designing component architecture and optimizing API state flows for real-time accuracy contributing to a 10% increase in client retention.",
      "Optimized 60+ slow-running SQL queries using CTEs and indexing, reducing ESG dashboard refresh times for 1.2M+ row datasets by 25%; audited BI report outputs against raw PostgreSQL databases to resolve a critical aggregation flaw in user retention logic.",
      "Built a 20+ component design system with Figma documentation covering variants, usage constraints, and interaction patterns, reducing design-to-dev handoff friction by 30% and enabling consistent UX across all client deployments.",
      "Led mixed-methods research (stakeholder interviews, usability tests, surveys) to identify navigation bottlenecks, validating a 25% task completion improvement and a 10% uptick in user satisfaction scores via restructured information architecture.",
      "Published comprehensive SLA documentation and data dictionaries for 3 enterprise clients, cutting onboarding time from 3 weeks to 4 days.",
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
            <p className="font-mono text-4xl font-medium 3xl:text-6xl tracking-[0.3em] mb-4 text-foreground">
              EXPERIENCE
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/Vedant.pdf"
              download
              className="group inline-flex items-center gap-2 font-mono text-sm 3xl:text-base tracking-wider text-accent hover:text-white transition-colors px-4 py-2 border border-accent/30 hover:border-white/30 rounded"
            >
              RESUME
              <Download className="w-4 h-4 3xl:w-5 3xl:h-5" />
            </a>
          </div>
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
          <p className="font-mono text-4xl font-medium 3xl:text-6xl tracking-[0.3em] mb-8 text-foreground">EDUCATION</p>

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
