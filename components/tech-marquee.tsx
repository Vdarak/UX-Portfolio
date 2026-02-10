"use client"

import { motion } from "framer-motion"

const techItems = [
  "AI",
  "FIGMA",
  "HTML",
  "NEXT.JS",
  "REACT",
  "TAILWIND",
  "THREE.JS",
  "TYPESCRIPT",
  "V0",
]

const concepts = [
  "ACCESSIBILITY",
  "CONTENT STRATEGY",
  "DESIGN SYSTEMS",
  "INFORMATION ARCHITECTURE",
  "ITERATIONS",
  "JOURNEY MAPS",
  "PERSONAS",
  "PROTOTYPING",
  "USABILITY TESTING",
  "USER EXPERIENCE",
  "USER RESEARCH",
]

function MarqueeRow({ items, direction = "left" }: { items: string[]; direction?: "left" | "right" }) {
  const duplicatedItems = [...items, ...items, ...items, ...items]

  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className={`flex gap-8 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{ width: "fit-content" }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className="group font-sans text-5xl md:text-7xl lg:text-8xl 3xl:text-9xl font-light tracking-tight whitespace-nowrap cursor-default"
            style={{
              color: "rgba(255,255,255,0.5)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "white"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.5)"
            }}
          >
            {item}
            <span className="mx-8 text-white/40">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function TechMarquee() {
  return (
    <section className="relative py-24 overflow-hidden md:py-32">
      {/* Section Header - Added 3xl sizing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-8 md:px-12 mb-16"
      >
        <p className="font-mono text-4xl font-medium 3xl:text-6xl tracking-[0.3em] mb-4 text-foreground">COMPETENCIES</p>
      </motion.div>

      {/* Marquee Rows */}
      <div className="space-y-4">
        <MarqueeRow items={techItems} direction="left" />
        <MarqueeRow items={concepts} direction="right" />
      </div>
    </section>
  )
}
