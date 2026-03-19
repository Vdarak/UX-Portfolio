"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

type ResultType = "Good Result" | "AI Slop" | "OK" | "In Progress"

interface Project {
  id: string
  title: string
  image?: string
  link?: string
  year: string
  result: ResultType
  story: string
}

const projects: Project[] = [
  {
    id: "mentalist",
    title: "Mentalist AI",
    year: "2025",
    result: "In Progress",
    story: "An agentic system based on a book about cold reading. Building an AI that can read people the way mentalists do. Coming soon.",
  },
  {
    id: "shaders",
    title: "Shader Playground",
    image: "/fun/shader-playground.png",
    link: "https://shader-pg.vercel.app",
    year: "2025",
    result: "Good Result",
    story: "A playground for testing React paper shaders — exploring what works for backgrounds, cards, elements, and animations.",
  },
  {
    id: "gex",
    title: "Gamma Exposure Dashboard",
    image: "/fun/gex.png",
    link: "https://gamma-exposure-dashboard.vercel.app",
    year: "2024",
    result: "Good Result",
    story: "Built a GEX dashboard for options dealer positioning analysis. Tools like this cost $100s — why pay when you can build?",
  },
  {
    id: "blackjack",
    title: "BlackJack 21",
    image: "/fun/bj.png",
    link: "https://bjgame.vercel.app",
    year: "2024",
    result: "Good Result",
    story: "Card counting phase. Running count toggle + basic strategy suggestions. Strategic blackjack mirrors options trading — position sizing, betting, knowing when to sit out.",
  },
  {
    id: "tribe",
    title: "Tribe Redesign",
    image: "/fun/tribe-redesign.png",
    link: "https://tribe-redesign.vercel.app",
    year: "2025",
    result: "Good Result",
    story: "Redesigned the Tribe app interface from scratch using AI — generating assets unique to the brand's story.",
  },
  {
    id: "freshlook",
    title: "Fresh Look Refinishing",
    image: "/fun/fresh-look.png",
    link: "https://freshlookrefinishing.vercel.app",
    year: "2024",
    result: "Good Result",
    story: "Client website built at Cognijin using AI tools and deployed on Vercel.",
  },
  {
    id: "colorado",
    title: "Colorado Carpet Care",
    image: "/fun/colorado-carpet.png",
    link: "https://coloradocarpetcareco.vercel.app",
    year: "2024",
    result: "Good Result",
    story: "Client website built at Cognijin using AI tools and deployed on Vercel.",
  },
  {
    id: "diagnostician",
    title: "Diagnostician",
    image: "/fun/diagnostician.png",
    link: "https://diagnostician.vercel.app",
    year: "2024",
    result: "Good Result",
    story: "A mechanic website built at Cognijin using AI tools and deployed on Vercel.",
  },
  {
    id: "particle",
    title: "Particle Animator",
    image: "/fun/particle-animator.png",
    link: "https://v0-particle-animation-creator.vercel.app",
    year: "2025",
    result: "Good Result",
    story: "Particle animation generator for hero sections, UI components, and landing pages. Playing with unique motion for the web.",
  },
  {
    id: "pixel",
    title: "Pixel Grid Animations",
    image: "/fun/pixel-animator.png",
    link: "https://v0-pixel-grid-gui.vercel.app",
    year: "2025",
    result: "Good Result",
    story: "Pixel grid animation creator for unique visual effects — exploring what works for backgrounds and interactive elements.",
  },
  {
    id: "workout",
    title: "Workout Tracker",
    image: "/fun/workout-tracker.png",
    link: "https://v0-workout-tracker-app-topaz.vercel.app",
    year: "2025",
    result: "Good Result",
    story: "Calendar-based workout split tracker with periodisation phases. Shows the day's workout and cycles through training phases.",
  },
]

function resultColor(result: ResultType) {
  switch (result) {
    case "Good Result": return "text-emerald-400 bg-emerald-400/10 border-emerald-400/20"
    case "AI Slop": return "text-red-400 bg-red-400/10 border-red-400/20"
    case "OK": return "text-amber-400 bg-amber-400/10 border-amber-400/20"
    case "In Progress": return "text-cyan-400 bg-cyan-400/10 border-cyan-400/20"
  }
}

export default function FunPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const hoveredProject = projects.find((p) => p.id === hoveredId)

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
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
          className="mb-16"
        >
          <p className="font-mono text-4xl font-medium 3xl:text-6xl tracking-[0.3em] mb-4 text-foreground">
            VIBE CODING PLAYGROUND
          </p>
        </motion.div>

        {/* Project List */}
        <div className="relative" ref={containerRef} onMouseMove={handleMouseMove}>
          {/* Project titles */}
          <div className="relative z-10">
            {projects.map((project, index) => {
              const textContent = (
                <>
                  <h2
                    className="font-sans text-[clamp(2.5rem,8vw,9rem)] font-light leading-[0.95] tracking-tight transition-colors duration-300"
                    style={{
                      color: hoveredId === project.id
                        ? "rgba(255,255,255,0.7)"
                        : "rgba(255,255,255,0.9)",
                    }}
                  >
                    {project.title}
                  </h2>
                  <sup
                    className="font-mono text-[0.6rem] md:text-xs tracking-wider ml-1 mt-1 transition-colors duration-300"
                    style={{
                      color: hoveredId === project.id
                        ? "rgba(255,255,255,0.7)"
                        : "rgba(255,255,255,0.9)",
                    }}
                  >
                    {project.year}
                  </sup>
                </>
              )

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="py-2 md:py-3"
                >
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start cursor-pointer"
                      onMouseEnter={() => setHoveredId(project.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      {textContent}
                    </a>
                  ) : (
                    <div
                      className="inline-flex items-start"
                      onMouseEnter={() => setHoveredId(project.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      {textContent}
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Hover Image — sticky within the project list container */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-[700px] xl:w-[780px] z-20 pointer-events-none">
            <div className="sticky top-[50vh] -translate-y-1/2">
              {hoveredProject?.image && (
                <div className="w-full aspect-[1895/850] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={hoveredProject.image}
                    alt={hoveredProject.title}
                    width={1895}
                    height={850}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mouse-following tooltip */}
      {hoveredProject && (
        <div
          className="fixed z-[100] pointer-events-none hidden md:block"
          style={{
            left: mousePos.x + 20,
            top: mousePos.y + 16,
          }}
        >
          <div className="w-72 p-3 bg-background/95 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl">
            <p className="font-mono text-xs text-white/70 leading-relaxed">
              {hoveredProject.story}
            </p>
            {hoveredProject.result === "In Progress" && (
              <div className="mt-2">
                <span className={`font-mono text-[10px] tracking-wider px-2 py-0.5 rounded-full border ${resultColor(hoveredProject.result)}`}>
                  {hoveredProject.result.toUpperCase()}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
