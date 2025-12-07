"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

interface CanvasChatProjectProps {
  project: {
    title: string
    role: string
    year: string
    tags: string[]
  }
}

export function CanvasChatProject({ project }: CanvasChatProjectProps) {
  return (
    <article className="min-h-screen pt-32 pb-24 px-8 md:px-12 lg:px-24">
      {/* Back Button */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <Link
          href="/#works"
          className="inline-flex items-center gap-2 font-mono text-xs 3xl:text-sm tracking-widest text-white/60 hover:text-foreground transition-colors mb-16"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK TO WORKS
        </Link>
      </motion.div>

      {/* Hero Section - matching media-bias styling */}
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
              className="font-mono text-xs 3xl:text-sm tracking-wider px-3 py-1.5 border border-white/20 rounded-full text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl 3xl:text-9xl font-light tracking-tight mb-6">
          {project.title}
        </h1>
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <span className="inline-block font-mono font-bold text-xs 3xl:text-sm tracking-wider px-4 py-2 bg-accent/20 text-accent rounded-full w-fit">
            {project.role}
          </span>
          <span className="font-mono font-bold text-sm 3xl:text-base text-white/60">{project.year}</span>
          <span className="font-mono font-bold text-sm 3xl:text-base text-white/60">Personal Project</span>
        </div>
      </motion.header>

      {/* Hero Visual - Full Width */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/canvas/canvas-hero.png"
            alt="Canvas Chat - Infinite Canvas AI Chat Interface"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </div>
      </motion.section>

      {/* The Problem */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-light tracking-tight mb-12">
          AI Chats Lack Visual Context
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-white/10 rounded-lg p-6 md:p-8 border-none">
            <h3 className="font-mono text-base 3xl:text-lg mb-4 text-accent">CURRENT STATE</h3>
            <p className="text-white/80 text-base 3xl:text-lg leading-relaxed font-mono">
              Traditional chat interfaces are linear and limiting. You scroll endlessly through a single thread, losing
              context of where ideas branched or how concepts connect. There&apos;s no way to see the macro-level
              picture of your exploration.
            </p>
          </div>

          <div className="border border-white/10 rounded-lg p-6 md:p-8 border-none">
            <h3 className="font-mono text-base 3xl:text-lg mb-4 text-green-500">THE INSIGHT</h3>
            <p className="text-white/80 text-base 3xl:text-lg leading-relaxed font-mono">
              Figma revolutionized design by giving us infinite canvas. Why can&apos;t AI conversations work the same
              way? I wanted to build a tool where you can see all your threads, branch from any point, and understand
              the full landscape of your thinking.
            </p>
          </div>
        </div>
      </motion.section>

      {/* The Solution */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-light tracking-tight mb-6">
          Canvas Chat
        </h2>
        <p className="text-white/80 text-lg 3xl:text-xl leading-relaxed mb-12 max-w-3xl font-mono">
          An infinite canvas for AI conversations. Spawn chats anywhere, branch from any message, and orchestrate
          multiple agents simultaneously—giving you both micro and macro level understanding.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Feature 1 */}
          <div className="border border-white/10 rounded-lg p-6 md:p-8 hover:border-white/20 transition-colors border-none">
            <h3 className="text-xl 3xl:text-2xl font-medium mb-3">Infinite Canvas</h3>
            <p className="text-white/60 text-sm 3xl:text-base leading-relaxed font-mono">
              Pan, zoom, and navigate your conversations like a design file. See the full picture of your exploration at
              any zoom level.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="border border-white/10 rounded-lg p-6 md:p-8 hover:border-white/20 transition-colors border-none">
            <h3 className="text-xl 3xl:text-2xl font-medium mb-3">Branch From Anywhere</h3>
            <p className="text-white/60 text-sm 3xl:text-base leading-relaxed font-mono">
              Select any text, message, or start fresh. Create branches to explore alternative directions without losing
              your original thread.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="border border-white/10 rounded-lg p-6 md:p-8 hover:border-white/20 transition-colors border-none">
            <h3 className="text-xl 3xl:text-2xl font-medium mb-3">Multiple Agents</h3>
            <p className="text-white/60 text-sm 3xl:text-base leading-relaxed font-mono">
              Spawn as many custom agents as you need. Query multiple chats simultaneously to get diverse perspectives
              on the same problem.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="border border-white/10 rounded-lg p-6 md:p-8 hover:border-white/20 transition-colors border-none">
            <h3 className="text-xl 3xl:text-2xl font-medium mb-3">Custom Instructions</h3>
            <p className="text-white/60 text-sm 3xl:text-base leading-relaxed font-mono">
              Edit system instructions for each agent individually. Customize what each agent does—one for code, one for
              research, one for creative writing.
            </p>
          </div>
        </div>

        {/* Features Visual - Full Width */}
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/canvas/canvas-branch.png"
            alt="Canvas Chat - Branching Feature"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        </div>
      </motion.section>

      {/* Why I Built This */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <div className="border-l-4 border-accent pl-8 md:pl-12">
          <p className="text-xl md:text-2xl lg:text-3xl 3xl:text-4xl font-sans text-white/80 leading-relaxed">
            &ldquo;When brainstorming, I don&apos;t think linearly. Ideas branch, connect, and sometimes circle back. I
            needed a tool that mirrors how my mind actually works—not a scrolling chat log, but a living map of
            exploration.&rdquo;
          </p>
        </div>
      </motion.section>

      {/* Try It Yourself */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <p className="3xl:text-lg text-accent mb-6 font-sans text-5xl tracking-normal">Try It Yourself </p>
        <p className="text-white/60 text-base 3xl:text-lg font-mono mb-8 max-w-2xl">
          Please be patient and gentle with requests—it&apos;s running on the free tier of Gemini API, so responses may
          take a moment.
        </p>
        <a
          href="https://canvaschat.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 border border-accent text-accent hover:bg-accent hover:text-background transition-colors rounded-lg font-mono text-base 3xl:text-lg"
        >
          <span>LAUNCH CANVAS CHAT</span>
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </motion.section>

      <Footer />
      <ScrollToTop />
    </article>
  )
}
