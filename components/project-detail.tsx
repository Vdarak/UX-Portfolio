"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface ProjectProps {
  project: {
    id: string
    title: string
    role: string
    outcome: string
    tags: string[]
    image: string
    year: string
    details: {
      responsibilities: string[]
      duration: string
      challenge: string
      results: string
    }
    caseStudy: {
      context: string
      users: string
      problem: string
      research: {
        method: string
        insight: string
        pivot: string
      }
      solution: {
        innovation: string
        howItWorks: string
        designChoices: string
      }
      contribution: string
      metrics: string[]
      learning: string
    }
  }
}

export function ProjectDetail({ project }: ProjectProps) {
  return (
    <article className="min-h-screen pt-32 pb-24 px-8 md:px-12 lg:px-24">
      {/* Back Button */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <Link
          href="/#works"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-16"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK TO WORKS
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-24"
      >
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] tracking-wider px-3 py-1 border border-white/20 rounded-full text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6">{project.title}</h1>
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <span className="inline-block font-mono font-bold text-[10px] tracking-wider px-3 py-1 bg-accent/20 text-accent rounded-full w-fit">
            {project.role}
          </span>
          <span className="font-mono font-bold text-xs text-muted-foreground">{project.year}</span>
          <span className="font-mono font-bold text-xs text-muted-foreground">{project.details.duration}</span>
        </div>
      </motion.header>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-32"
      >
        <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
        </div>
      </motion.div>

      {/* Section 1: The Setup */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-accent mb-4">01 — THE SETUP</p>
        <h2 className="font-sans text-3xl md:text-4xl font-light italic mb-12">What was the problem?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground mb-3">BUSINESS CONTEXT</p>
            <p className="font-mono text-base leading-relaxed">{project.caseStudy.context}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground mb-3">THE USERS</p>
            <p className="font-mono text-base leading-relaxed">{project.caseStudy.users}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground mb-3">WHAT WAS BROKEN</p>
            <p className="font-mono text-base leading-relaxed">{project.caseStudy.problem}</p>
          </div>
        </div>
      </motion.section>

      {/* Section 2: Research & Strategy */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-accent mb-4">02 — RESEARCH & STRATEGY</p>
        <h2 className="font-sans text-3xl md:text-4xl font-light italic mb-12">How did I think about it?</h2>

        <div className="space-y-8">
          <div className="bg-white/5 border border-white/10 rounded-lg p-8">
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground mb-3">RESEARCH METHOD</p>
            <p className="font-mono text-lg leading-relaxed">{project.caseStudy.research.method}</p>
          </div>

          {/* Key Insight - Highlighted */}
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-8">
            <p className="font-mono text-[10px] tracking-widest text-accent mb-3">KEY INSIGHT</p>
            <p className="font-sans text-2xl md:text-3xl font-light leading-relaxed italic">
              "{project.caseStudy.research.insight}"
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-8">
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground mb-3">THE PIVOT</p>
            <p className="font-mono text-lg leading-relaxed">{project.caseStudy.research.pivot}</p>
          </div>
        </div>
      </motion.section>

      {/* Section 3: Solution */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-accent mb-4">03 — THE SOLUTION</p>
        <h2 className="font-sans text-3xl md:text-4xl font-light italic mb-12">What did I build?</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 md:col-span-2">
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground mb-3">THE INNOVATION</p>
            <p className="font-mono text-xl font-light leading-relaxed">{project.caseStudy.solution.innovation}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground mb-3">HOW IT WORKS</p>
            <p className="font-mono text-base leading-relaxed">{project.caseStudy.solution.howItWorks}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground mb-3">DESIGN CHOICES</p>
            <p className="font-mono text-base leading-relaxed">{project.caseStudy.solution.designChoices}</p>
          </div>
        </div>
      </motion.section>

      {/* Section 4: Contribution */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-accent mb-4">04 — MY CONTRIBUTION</p>
        <h2 className="font-sans text-3xl md:text-4xl font-light italic mb-12">What was my specific role?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-lg p-8">
            <p className="font-mono text-lg leading-relaxed">{project.caseStudy.contribution}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground mb-3">RESPONSIBILITIES</p>
            <ul className="space-y-2">
              {project.details.responsibilities.map((resp) => (
                <li key={resp} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  <span className="font-mono text-sm">{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Section 5: Results */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-accent mb-4">05 — THE RESULTS</p>
        <h2 className="font-sans text-3xl md:text-4xl font-light italic mb-12">How did I measure success?</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.caseStudy.metrics.map((metric, index) => (
            <motion.div
              key={metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-accent/10 border border-accent/30 rounded-lg p-6 text-center"
            >
              <p className="font-mono text-sm text-foreground">{metric}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section 6: Learning */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-accent mb-4">06 — KEY LEARNING</p>

        <div className="bg-white/5 border border-white/10 rounded-lg p-8 md:p-12">
          <p className="font-sans text-2xl md:text-3xl font-light leading-relaxed italic text-center">
            "{project.caseStudy.learning}"
          </p>
        </div>
      </motion.section>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border-t border-white/10 pt-12"
      >
        <Link
          href="/#works"
          className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-mono text-sm tracking-wider hover:bg-accent transition-colors duration-300"
        >
          VIEW MORE PROJECTS
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </motion.div>
    </article>
  )
}
