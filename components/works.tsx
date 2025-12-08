"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Plus, Minus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: "media-bias",
    title: "Spotting the Bias in News",
    role: "UX Researcher & Designer",
    outcome: "",
    tags: ["AI", "UX Research", "Media Bias"],
    image: "/home-page.png",
    heroImage: "/ana-hero.png",
    year: "Apr 2025",
    comingSoon: false,
    details: {
      responsibilities: ["UX Research", "Survey Design", "Data Analysis", "Interaction Design"],
      duration: "6 months",
      description:
        "Most people read news online, but they don't know if the writer is being fair or biased. Readers feel confused or tricked because they can't easily tell if a story is leaning too far left or right.They needed a tool that doesn't just deliver news, but explains it.",
      results: [
        { stat: "66%", label: "couldn't distinguish topic from bias" },
        { stat: "82%", label: "never used an AI news aggregator" },
      ],
    },
  },
  {
    id: "canvas-chat",
    title: "Canvas Chat",
    role: "Personal Project",
    outcome: "",
    tags: ["Gemini", "Brainstorming", "Canvas UI"],
    image: "/home-page.png",
    heroImage: "/canvas/canvas-works-hero.png",
    year: "2025",
    comingSoon: false,
    details: {
      responsibilities: ["Concept Design", "Prototyping", "AI Integration", "Interaction Design"],
      duration: "Ongoing",
      description:
        "A canvas-style AI chat interface where you can spawn multiple conversations in the same infinite canvas. This enables both micro-level deep dives into specific topics and macro-level understanding of how ideas connect, perfect for brainstorming and complex problem-solving.",
      results: [
        { stat: "∞", label: "chats in one canvas" },
        { stat: "2", label: "levels of understanding" },
      ],
    },
  },
  {
    id: "creative-block",
    title: "Understanding Creative Block",
    role: "UX Researcher",
    outcome: "",
    tags: ["Feature Discovery", "UX Research", "Creativity"],
    image: "/home-page.png",
    heroImage: "/ana/ana-hero.png",
    year: "Jan 2024",
    comingSoon: true,
    details: {
      responsibilities: ["User Interviews", "Behavioral Analysis", "Feature Discovery", "Concept Testing"],
      duration: "4 months",
      description:
        'Creative block is everywhere, yet nowhere in technology. While artists struggle with a loss of confidence and productivity, current tools like Pinterest or Headspace only offer organization or general stress relief—not a cure for the block itself. Our goal was to uncover the invisible mental patterns of "feeling stuck" and design a dedicated digital assistant that helps creatives regain their momentum.',
      results: [
        { stat: "10", label: "potential features discovered" },
        { stat: "16", label: "participants interviewed" },
      ],
    },
  },
  {
    id: "hope",
    title: "Hope",
    role: "UX Designer",
    outcome: "",
    tags: ["Memory Care", "Elderly Care", "Recreation"],
    image: "/home-page.png",
    heroImage: "/ana/ana-hero.png",
    year: "2025",
    comingSoon: true,
    details: {
      responsibilities: ["User Research", "Service Design", "Prototyping", "Accessibility"],
      duration: "In Progress",
      description:
        "A memory care assistant designed for elderly residents in care homes. Hope serves as a recreational companion, helping seniors engage with activities, memories, and social connections to improve their quality of life and cognitive engagement.",
      results: [
        { stat: "—", label: "coming soon" },
        { stat: "—", label: "coming soon" },
      ],
    },
  },
  {
    id: "bookkeeping",
    title: "Augmenting Bookkeeping",
    role: "UX Designer",
    outcome: "",
    tags: ["AI", "Fintech", "Automation"],
    image: "/home-page.png",
    heroImage: "/ana/ana-hero.png",
    year: "2025",
    comingSoon: true,
    details: {
      responsibilities: ["User Research", "Workflow Analysis", "AI Integration", "Interface Design"],
      duration: "In Progress",
      description:
        "Designing AI-augmented tools for accountants to streamline bookkeeping workflows. The goal is to reduce manual data entry, catch errors proactively, and free up accountants to focus on higher-value advisory work.",
      results: [
        { stat: "—", label: "coming soon" },
        { stat: "—", label: "coming soon" },
      ],
    },
  },
]

export function Works() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [hoveredCTAIndex, setHoveredCTAIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
    setHoveredIndex(null)
  }

  return (
    <section id="works" className="relative py-32 px-8 md:px-12 md:py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <p className="font-mono text-lg 3xl:text-xl tracking-[0.3em] mb-4 text-foreground">WORKS</p>
      </motion.div>

      {/* Projects List */}
      <div className="relative">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative border-t border-white/10"
          >
            {/* Project Header - Always visible */}
            <div
              data-cursor-hover
              className="py-8 md:py-12 cursor-pointer"
              onMouseEnter={() => expandedIndex === null && setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => toggleExpand(index)}
            >
              <div className="flex items-center justify-between gap-4 flex-1">
                {/* Left side - Year, Title, Role */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 flex-1">
                  {/* Year */}
                  <span className="font-mono text-xs 3xl:text-sm text-white/60 tracking-widest md:w-20 3xl:md:w-24">
                    {project.year}
                  </span>

                  {/* Title & Role Badge + Tech Stack */}
                  <div className="flex-1">
                    <motion.h3
                      className="font-sans text-3xl md:text-5xl lg:text-6xl 3xl:text-7xl font-light tracking-tight group-hover:text-white/70 transition-colors duration-300"
                      animate={{
                        x: hoveredIndex === index ? 20 : 0,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {project.title}
                    </motion.h3>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="font-mono text-xs 3xl:text-sm tracking-wider px-3 py-1.5 3xl:px-4 3xl:py-2 bg-accent/20 text-accent rounded-full">
                        {project.role}
                      </span>
                      {project.comingSoon && (
                        <span className="font-mono text-xs 3xl:text-sm tracking-wider px-3 py-1.5 3xl:px-4 3xl:py-2 bg-cyan-400/20 text-cyan-400 rounded-full">
                          Coming Soon
                        </span>
                      )}
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs 3xl:text-sm tracking-wider px-3 py-1.5 3xl:px-4 3xl:py-2 bg-white/10 text-white rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
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

            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="overflow-hidden"
                >
                  <div className="md:pl-24 3xl:md:pl-28 pt-8 pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                      {/* Left - Description & Challenge */}
                      <div className="space-y-8">
                        <div>
                          <p className="font-mono text-base 3xl:text-lg tracking-widest text-accent mb-4 font-semibold">
                            THE CHALLENGE
                          </p>
                          <p className="font-mono text-base 3xl:text-lg leading-relaxed text-foreground">
                            {project.details.description}
                          </p>
                        </div>

                        {/* Results / Impact */}
                        <div>
                          <p className="font-mono text-base 3xl:text-lg tracking-widest text-accent mb-6 font-semibold">
                            FINDINGS
                          </p>
                          <div className="flex flex-wrap gap-8">
                            {project.details.results.map((result, i) => (
                              <div key={i} className="flex flex-col">
                                <span className="text-5xl md:text-6xl 3xl:text-7xl font-bold text-accent">
                                  {result.stat}
                                </span>
                                <span className="font-mono text-sm 3xl:text-base mt-1 max-w-[140px] 3xl:max-w-[180px] text-foreground">
                                  {result.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA - Conditional rendering for coming soon */}
                        {project.comingSoon ? (
                          <span className="inline-flex items-center gap-2 font-mono text-base 3xl:text-lg tracking-wider text-white/40">
                            CASE STUDY COMING SOON
                          </span>
                        ) : (
                          <Link
                            href={`/project/${project.id}`}
                            className="group inline-flex items-center gap-2 font-mono text-base 3xl:text-lg tracking-wider text-accent hover:text-white transition-colors duration-300"
                            onMouseEnter={() => setHoveredCTAIndex(index)}
                            onMouseLeave={() => setHoveredCTAIndex(null)}
                          >
                            VIEW FULL CASE STUDY
                            <motion.span
                              animate={
                                hoveredCTAIndex === index
                                  ? {
                                      x: [0, 4, 0],
                                      y: [0, -4, 0],
                                    }
                                  : { x: 0, y: 0 }
                              }
                              transition={
                                hoveredCTAIndex === index
                                  ? {
                                      duration: 1,
                                      ease: "easeInOut",
                                      repeat: Number.POSITIVE_INFINITY,
                                    }
                                  : {
                                      duration: 0.3,
                                      ease: "easeOut",
                                    }
                              }
                            >
                              <ArrowUpRight className="w-5 h-5 3xl:w-6 3xl:h-6" />
                            </motion.span>
                          </Link>
                        )}
                      </div>

                      <div className="flex items-center justify-center">
                        <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden">
                          <Image
                            src={project.heroImage || "/placeholder.svg"}
                            alt={`${project.title} hero`}
                            width={800}
                            height={600}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Bottom Border */}
      <div className="border-t border-white/10" />
    </section>
  )
}
