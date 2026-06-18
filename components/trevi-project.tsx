"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

function MediaPlaceholder({
  type = "image",
  title,
  description,
  caption,
}: {
  type?: "image" | "video" | "comparison" | "three-up" | "detail" | "concept" | "mobile"
  title: string
  description: string
  caption?: string
}) {
  const typeLabel = {
    image: "IMAGE",
    video: "VIDEO",
    comparison: "COMPARISON",
    "three-up": "THREE-UP",
    detail: "DETAIL SHOT",
    concept: "CONCEPT",
    mobile: "MOBILE",
  }

  const borderColor = type === "video" ? "border-purple-500/30" : "border-accent/20"
  const bgColor = type === "video" ? "bg-purple-500/5" : "bg-accent/5"
  const iconBg = type === "video" ? "bg-purple-500/20 text-purple-400" : "bg-accent/20 text-accent"

  return (
    <div
      className={`relative border-2 border-dashed ${borderColor} ${bgColor} rounded-2xl p-8 md:p-12 my-8 md:my-12`}
    >
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`font-mono text-[10px] tracking-widest px-3 py-1 rounded-full ${iconBg}`}
        >
          {type === "video" ? "\uD83C\uDFAC" : "\uD83D\uDCF8"} {typeLabel[type]}
        </span>
        <span className="font-mono text-xs tracking-widest text-white/30">PLACEHOLDER</span>
      </div>
      <p className="font-sans text-lg md:text-xl font-medium text-white/70 mb-3">{title}</p>
      <p className="font-mono text-sm text-white/40 leading-relaxed max-w-3xl whitespace-pre-line">
        {description}
      </p>
      {caption && (
        <p className="font-mono text-xs text-white/30 mt-4 italic border-t border-white/5 pt-4">
          Caption: {caption}
        </p>
      )}
    </div>
  )
}

export function TreviProject() {
  return (
    <div className="bg-background min-h-screen">
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-6 md:left-12 lg:left-24 z-50"
      >
        <Link
          href="/#works"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-white/60 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden md:inline">BACK TO WORKS</span>
          <span className="md:hidden">BACK</span>
        </Link>
      </motion.div>

      {/* ── Hero Section ───────────────────────────────────────────── */}
      <motion.header
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-16 px-8 md:px-12 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {["AI Research", "React Flow", "Spatial UX"].map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs tracking-wider px-3 py-1.5 border border-white/20 rounded-full text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-sans text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-4">
            TREVI
          </h1>

          <p className="font-sans text-2xl md:text-3xl lg:text-4xl font-light text-white/80 mb-8 max-w-4xl leading-snug">
            Reimagining AI Research as a Spatial, Explorable Experience
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="font-mono text-sm tracking-wider px-3 py-1.5 bg-accent/20 text-accent rounded-full">
              Lead Designer & Frontend Engineer
            </span>
            <span className="font-mono text-sm text-white/50">2 weeks</span>
            <span className="font-mono text-sm text-white/50">3-person team</span>
          </div>

          <a
            href="https://trevi.fyi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm tracking-wider text-accent hover:text-white transition-colors"
          >
            Visit trevi.fyi
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </motion.header>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-8 md:px-12 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/trevi/hero.png"
              alt="Trevi — a multi-branch knowledge graph with chat sidebar and citation tooltips"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* ── The Problem ─────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 md:py-32 px-8 md:px-12 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs md:text-sm tracking-widest text-accent mb-4">
            THE PROBLEM
          </p>

          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-light mb-8">
            Linear AI Isn&apos;t Built for Research
          </h2>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-8 max-w-4xl">
            A neurosurgeon came to us with a specific frustration. He was using AI tools to research
            complex medical concepts — comparing treatments, tracing relationships between ideas,
            building mental models of deep topics. Every tool he tried worked the same way: a chat
            window. Linear. Flat. Scroll up to find what you said ten minutes ago.
          </p>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-10 max-w-4xl">
            Two things were fundamentally broken for a research-heavy use case like his:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="border border-white/10 rounded-xl p-6 md:p-8">
              <p className="font-sans text-lg md:text-xl font-medium mb-3">Navigation</p>
              <p className="font-mono text-sm md:text-base text-white/50 leading-relaxed">
                There was no way to see where you&apos;d been, where you could go, or how concepts
                related to each other spatially.
              </p>
            </div>
            <div className="border border-white/10 rounded-xl p-6 md:p-8">
              <p className="font-sans text-lg md:text-xl font-medium mb-3">Trust</p>
              <p className="font-mono text-sm md:text-base text-white/50 leading-relaxed">
                AI responses gave no transparency into where the information was coming from. For a
                medical professional, that&apos;s not a UX problem. It&apos;s a credibility problem.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-10">
            <p className="font-sans text-lg md:text-xl text-white/70 italic">
              &ldquo;Build something like a canvas app.&rdquo;
            </p>
            <p className="font-mono text-xs text-white/40 mt-2">
              Two weeks to build the MVP from the ground up.
            </p>
          </div>


        </div>
      </motion.section>

      {/* ── Framing the MVP ─────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="pb-24 md:pb-32 px-8 md:px-12 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs md:text-sm tracking-widest text-accent mb-4">
            FRAMING THE MVP
          </p>

          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Two Non-Negotiables
          </h2>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-10 max-w-4xl">
            The first question wasn&apos;t{" "}
            <span className="text-white/90">what do we build</span> — it was{" "}
            <span className="text-white/90">
              what is the minimum that makes this meaningfully different
            </span>{" "}
            from a traditional AI chat?
          </p>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-8 max-w-4xl">
            We aligned on two non-negotiables for alpha:
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-6">
              <span className="font-sans text-4xl md:text-5xl font-light text-accent/80">01</span>
              <div>
                <p className="font-sans text-lg md:text-xl font-medium mb-1">
                  A spatial, explorable topic tree
                </p>
                <p className="font-mono text-sm md:text-base text-white/50">
                  that replaces the linear chat model
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <span className="font-sans text-4xl md:text-5xl font-light text-accent/80">02</span>
              <div>
                <p className="font-sans text-lg md:text-xl font-medium mb-1">
                  Citation transparency at the source level
                </p>
                <p className="font-mono text-sm md:text-base text-white/50">
                  not just links, but the exact snippet used to generate a response
                </p>
              </div>
            </div>
          </div>

          <p className="font-mono text-sm text-white/40">
            Everything else was in service of those two things.
          </p>
        </div>
      </motion.section>

      {/* ── Starting Point ───────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="pb-24 md:pb-32 px-8 md:px-12 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs md:text-sm tracking-widest text-accent mb-4">
            STARTING POINT
          </p>

          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-light mb-8">
            Three Artifacts, Zero Product
          </h2>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-6 max-w-4xl">
            We had two artifacts at kickoff: low-fidelity wireframes (non-functional, but a shared
            visual language) and a Streamlit prototype built by the AI engineer purely for testing
            the RAG pipeline — no UI polish, no design intent.
          </p>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-6 max-w-4xl">
            My job was to bridge the gap between those two things and ship something real.
          </p>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-6 max-w-4xl">
            <span className="text-white/90 font-medium">The first tool decision mattered:</span> A
            while back a friend had mentioned React Flow, a library for building canvas and
            node-based interfaces. It clicked immediately. Modular, customizable, and built precisely
            for this kind of spatial interaction. To validate it fast and get aligned with the AI
            engineer, I built a quick functional prototype in v0 via prompting — testing tree
            behaviors like collapse, expand, and hover-path-to-root, and stress-testing performance
            with hundreds of branches. React Flow held up. NotebookLM&apos;s mind map served as the
            UX reference point for how the tree should feel and behave.
          </p>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-10 max-w-4xl">
            That prototype wasn&apos;t a deliverable. It was a communication tool — a way to speak
            precisely to an engineer and a non-technical stakeholder without waiting for specs to be
            perfect.
          </p>

          {/* Starting Artifacts Visual: Wireframe Cluster + Streamlit → v0 */}
          <div className="space-y-8">
            {/* Wireframe cluster */}
            <div>
              <p className="font-mono text-xs tracking-widest text-white/30 mb-4">WIREFRAMES</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div key={n} className="rounded-lg overflow-hidden border border-white/10">
                    <Image
                      src={`/trevi/wireframe-${n}.png`}
                      alt={`Wireframe ${n}`}
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
              <p className="font-mono text-xs text-white/30 mt-2">
                Shared visual language, not a spec.
              </p>
            </div>

            {/* Streamlit + Arrow → v0 */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-center">
              <div>
                <p className="font-mono text-xs tracking-widest text-white/30 mb-4">STREAMLIT</p>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/trevi/streamlit.png"
                    alt="AI engineer's Streamlit prototype"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="font-mono text-xs text-white/30 mt-2">
                  Functional RAG pipeline, no design intent.
                </p>
              </div>

              <div className="hidden md:flex items-center justify-center text-white/20 text-3xl font-light">
                &rarr;
              </div>

              <div>
                <p className="font-mono text-xs tracking-widest text-white/30 mb-4">
                  V0 PROTOTYPE
                </p>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/trevi/v0.png"
                    alt="v0 React Flow prototype with 50+ nodes"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="font-mono text-xs text-white/30 mt-2">
                  Communication tool — built to align, not to ship.
                </p>
              </div>
            </div>

            <p className="font-mono text-xs text-white/40 italic text-center pt-4">
              Three starting points. None of them were the product. All of them shaped it.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── V1: Building the Foundation ────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="pb-24 md:pb-32 px-8 md:px-12 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs md:text-sm tracking-widest text-accent mb-4">
            V1 — BUILDING THE FOUNDATION
          </p>

          {/* Layout & Navigation */}
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-light mb-8">
            Layout & Navigation
          </h2>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-6 max-w-4xl">
            The base layout emerged from synthesizing the wireframes, the Streamlit app, and
            alignment sessions with the team. The structure was intentionally simple:
          </p>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-6 max-w-4xl">
            A left sidebar held branding, chat history, and a new topic button. The right panel
            started as a familiar chat interface, transitioned through a loading state, then opened
            into the full canvas — a topic tree with a chat on the side and a modal that fired on
            node click.
          </p>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-10 max-w-4xl">
            I established a simple design system early — Geist typography, a defined color theme,
            foundational components — so every decision downstream had something to snap to.
          </p>

          {/* V1 Screenshot */}
          <div className="rounded-2xl overflow-hidden border border-white/10 mb-2">
            <Image
              src="/trevi/v1.png"
              alt="V1 layout — sidebar, canvas with topic tree, and chat sidebar"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>
          <p className="font-mono text-xs text-white/30 mb-10">
            Simple structure, intentional. Sidebar &rarr; Canvas &rarr; Chat. Everything else plugs
            into this frame.
          </p>
        </div>
      </motion.section>



      {/* ── Trust, Feedback & Alpha Infrastructure (merged bento) ─────── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="pb-24 md:pb-32 px-8 md:px-12 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-light mb-8">
            Trust & Feedback Infrastructure
          </h2>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-6 max-w-4xl">
            Citation transparency was non-negotiable from day one. I implemented citation bubbles on
            hover — revealing the exact text snippet used to generate a response. Clicking navigated
            directly to the source. For a research professional evaluating AI-generated content, this
            wasn&apos;t a feature. It was the foundation of the product&apos;s credibility.
          </p>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-6 max-w-4xl">
            I embedded feedback infrastructure directly into the product. Feedback buttons on hover
            across the entire UI let users rate AI responses instantly or type extended notes. A
            nudge every five minutes reminded users to share feedback. This wasn&apos;t an
            afterthought — for an alpha with a small, expert user group, every session was a data
            collection opportunity.
          </p>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-10 max-w-4xl">
            Additional utility features — download thread and shareable chat links for non-Trevi
            users — rounded out V1.
          </p>

          {/* Bento grid — two tall portraits bookending two squares */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" style={{ gridTemplateRows: "1fr 1fr" }}>
            {/* Citation bubble — tall left */}
            <div className="row-span-2 rounded-xl overflow-hidden border border-white/10 relative group">
              <Image
                src="/trevi/citation-bubble.png"
                alt="Citation bubble showing exact source text on hover"
                width={689}
                height={856}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="font-mono text-[11px] text-white/80">Citation Tooltip</p>
              </div>
            </div>

            {/* Feedback canvas — square top middle */}
            <div className="rounded-xl overflow-hidden border border-white/10 relative group">
              <Image
                src="/trevi/feedback-integration-canvas.png"
                alt="Feedback popover on canvas with preset tag options"
                width={461}
                height={409}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="font-mono text-[11px] text-white/80">Canvas Feedback</p>
              </div>
            </div>

            {/* Feedback response — tall right */}
            <div className="row-span-2 rounded-xl overflow-hidden border border-white/10 relative group">
              <Image
                src="/trevi/feedback-integration-response.png"
                alt="Feedback popover with preset reasons and custom input"
                width={564}
                height={858}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="font-mono text-[11px] text-white/80">Response Feedback</p>
              </div>
            </div>

            {/* Feedback nudge — square bottom middle */}
            <div className="rounded-xl overflow-hidden border border-white/10 relative group">
              <Image
                src="/trevi/feedback-nudge.png"
                alt="Periodic feedback nudge tooltip"
                width={355}
                height={352}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="font-mono text-[11px] text-white/80">Feedback Nudge</p>
              </div>
            </div>
          </div>
          <p className="font-mono text-xs text-white/30 text-center mt-4 leading-relaxed">
            Every response. Every node. Every surface. Feedback isn&apos;t a modal at the end — it&apos;s
            woven into the reading experience.
          </p>
        </div>
      </motion.section>



      {/* ── What V1 Revealed → V2 ─────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="pb-24 md:pb-32 px-8 md:px-12 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs md:text-sm tracking-widest text-accent mb-4">
            WHAT V1 REVEALED
          </p>

          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-light mb-8">
            The Honest Audit
          </h2>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-6 max-w-4xl">
            After sharing V1 with subject matter experts in the stakeholder&apos;s network, the feedback
            wasn&apos;t about features — it was diagnostic. The UI was asking users to do too much work
            before giving them anything useful in return. V2 wasn&apos;t a feature sprint. It was a philosophy sprint — two principles drove every change.
          </p>

          {/* V1 → V2 side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
            <div>
              <p className="font-mono text-xs tracking-widest text-white/30 mb-3">BEFORE — V1</p>
              <div className="rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="/trevi/v1.png"
                  alt="V1 interface"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
              <p className="font-mono text-xs text-white/30 mt-2">Every button is a decision the user has to make.</p>
            </div>
            <div>
              <p className="font-mono text-xs tracking-widest text-white/30 mb-3">AFTER — V2</p>
              <div className="rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="/trevi/v2.png"
                  alt="V2 interface — streamlined"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
              <p className="font-mono text-xs text-white/30 mt-2">Fewer controls. More canvas. Less cognitive load.</p>
            </div>
          </div>
        </div>
      </motion.section>



      {/* ── V2: Progressive Disclosure ────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="pb-24 md:pb-32 px-8 md:px-12 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          <h3 className="font-sans text-2xl md:text-3xl lg:text-4xl font-light mb-4">
            Progressive Disclosure
          </h3>

          <p className="font-mono text-base md:text-lg text-white/50 italic mb-8">
            Reveal the right amount of information at the right moment, scaled to what the user is
            actually doing.
          </p>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-8 max-w-4xl">
            Every node now has three information states:
          </p>

          <div className="space-y-6 mb-8 max-w-4xl">
            <div>
              <p className="font-sans text-lg md:text-xl font-medium mb-2">Default</p>
              <p className="font-mono text-sm md:text-base text-white/60 leading-relaxed">
                a short description beneath the title. You know what the node is without touching it.
              </p>
            </div>
            <div>
              <p className="font-sans text-lg md:text-xl font-medium mb-2">Hover</p>
              <p className="font-mono text-sm md:text-base text-white/60 leading-relaxed">
                the Gist tooltip expands with research-worthy context. Enough to decide if you want
                more.
              </p>
            </div>
            <div>
              <p className="font-sans text-lg md:text-xl font-medium mb-2">Click</p>
              <p className="font-mono text-sm md:text-base text-white/60 leading-relaxed">
                the modal opens with full detail. The stakeholder preferred the modal over the
                in-tree view, and it aligned with the original wireframe mental model, so we
                committed to it fully.
              </p>
            </div>
          </div>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-6 max-w-4xl">
            <span className="text-white/90 italic">Glance. Hover. Click.</span> Each tier earns the
            next one.
          </p>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-10 max-w-4xl">
            This principle also extended to the chat — clickable areas to explore inside the Gist
            content now trigger exploration simultaneously in both the chat and the canvas, keeping
            both surfaces in sync.
          </p>

          {/* Progressive Disclosure — Hover & Click images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <div className="rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="/trevi/explore-hover-bite.png"
                  alt="Hovering a direction node reveals a quick context bite"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p className="font-mono text-xs text-white/30 mt-3">
                Hover — direction nodes reveal a context bite. Enough to decide if you want more.
              </p>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="/trevi/node-hover-gist.png"
                  alt="Hovering a conversation node shows the Gist tooltip"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p className="font-mono text-xs text-white/30 mt-3">
                Hover — conversation nodes surface the Gist with research-worthy context.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── V2: Subtraction ───────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="pb-24 md:pb-32 px-8 md:px-12 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          <h3 className="font-sans text-2xl md:text-3xl lg:text-4xl font-light mb-4">
            Subtraction
          </h3>

          <p className="font-mono text-base md:text-lg text-white/50 italic mb-8">
            Knowing what to remove is a design skill.
          </p>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-6 max-w-4xl">
            The in-tree view was deprecated — the modal did the job better and users preferred it.
            Extra zoom in/zoom out buttons were removed — the canvas was navigable enough with scroll
            and grab. The result was a cleaner toolbar, less cognitive load, and a canvas that felt
            more open.
          </p>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-10 max-w-4xl">
            Every removal was a deliberate choice, not a cleanup. When users are processing dense
            research content, the interface should disappear as much as possible.
          </p>

          <p className="font-mono text-xs text-white/40 italic mt-8">
            Every removal was a deliberate choice, not a cleanup.
          </p>
        </div>
      </motion.section>

      {/* ── System Design ─────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="pb-24 md:pb-32 px-8 md:px-12 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs md:text-sm tracking-widest text-accent mb-4">
            SYSTEM DESIGN
          </p>

          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Architecture Overview
          </h2>

          <p className="font-mono text-sm text-white/40 italic mb-12 max-w-4xl">
            This section is included for interviewers who want to go deeper on technical
            architecture. Read the room — if the conversation is design-focused, skip to
            &ldquo;Beyond the Sprint.&rdquo; If engineering-curious, walk through these diagrams.
          </p>

          {/* Frontend Architecture */}
          <div className="mb-12">
            <h3 className="font-sans text-xl md:text-2xl font-light mb-6">
              Frontend Architecture
            </h3>
            <div className="border border-white/10 rounded-xl p-6 md:p-8 overflow-x-auto">
              <pre className="font-mono text-[11px] md:text-xs text-white/50 leading-relaxed whitespace-pre">
                {`                         app/page.tsx
                   (State Orchestrator — 1402 lines)

  ┌───────────────┐   ┌──────────────────┐   ┌──────────────────┐
  │  View Router  │   │  State Stores    │   │ Event Handlers   │
  │               │   │                  │   │                  │
  │  Landing      │   │  ChatStore       │   │  onNewChat()     │
  │  Loading      │   │  ConnectionMgr   │   │  onChatSelect()  │
  │  Canvas+Chat  │   │  briefCache      │   │  onDirectionClick│
  └───────┬───────┘   └────────┬─────────┘   └────────┬─────────┘
          └────────────────────┼────────────────────────┘
                               │
         ┌─────────────────────┼─────────────────────┐
         ▼                     ▼                     ▼
  ┌────────────┐   ┌────────────────────┐   ┌────────────────┐
  │  Sidebar   │   │  KnowledgeGraph    │   │  ChatSidebar   │
  │            │   │  (React Flow)      │   │                │
  │  • Chats   │   │                    │   │  Thread│Full   │
  │  • New     │   │  ConceptNode       │   │  Bibliography  │
  │  • Logo    │   │  Layout Engine     │   │  GistNotch     │
  │            │   │  Animation Hook    │   │  GistCard      │
  │            │   │  StatusPill        │   │  Messages      │
  │            │   │  Tooltip           │   │  QuickFeedback │
  │            │   │  QuickFeedback     │   │  ChatInput     │
  └────────────┘   └────────────────────┘   └────────────────┘`}
              </pre>
            </div>
          </div>

          {/* API & Data Flow */}
          <div className="mb-12">
            <h3 className="font-sans text-xl md:text-2xl font-light mb-6">API & Data Flow</h3>
            <div className="border border-white/10 rounded-xl p-6 md:p-8 overflow-x-auto">
              <pre className="font-mono text-[11px] md:text-xs text-white/50 leading-relaxed whitespace-pre">
                {`   Frontend (Next.js)
       │
       │  /proxy/:path* (same-origin for cookies)
       ▼
   Next.js Rewrite Proxy → Python/FastAPI Backend
                                    │
                    ┌───────────────┼───────────────┐
                    ▼               ▼               ▼
             Session Mgmt     Messaging       Graph & Features
             ─────────────    ─────────       ────────────────
             user-metadata    messages        graph
             chats            messages/status history
             feedback         chat/edit       bibliography
                              chat/delete     trevi-brief
                              delete/node     share
                                    │
                                    ▼
                            Agentic RAG Engine
                            • Multi-source retrieval
                            • Citation extraction
                            • Direction generation
                            • Gist summarization`}
              </pre>
            </div>
          </div>

          {/* Polling */}
          <div className="mb-8">
            <h3 className="font-sans text-xl md:text-2xl font-light mb-6">
              Why Polling, Not Streaming
            </h3>
            <div className="border border-white/10 rounded-xl p-6 md:p-8 overflow-x-auto mb-6">
              <pre className="font-mono text-[11px] md:text-xs text-white/50 leading-relaxed whitespace-pre">
                {`   POST /messages → { chat_id, status: "processing" }
        │
        │   Poll every 4s, max 60 attempts (4 min timeout)
        │
        ├──▶ POST /messages/status → "processing" (continue)
        ├──▶ POST /messages/status → "processing" (continue)
        └──▶ POST /messages/status → "complete"
                                      │
                                      ├── node_id, payload[]
                                      ├── citations[], references[]
                                      ├── direction_nodes[]
                                      └── graph_data
                                           │
                                           ▼
                                      Build graph → Animate → Update UI`}
              </pre>
            </div>
            <p className="font-mono text-sm md:text-base text-white/60 leading-relaxed max-w-4xl">
              <span className="text-white/80 font-medium">Why this over SSE/WebSocket?</span>{" "}
              Simpler backend implementation given the timeline. Better reliability across hospital
              networks and mobile. Easier debugging during alpha. No long-lived connection
              complexity.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── Beyond the Sprint ─────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="pb-24 md:pb-32 px-8 md:px-12 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs md:text-sm tracking-widest text-accent mb-4">
            BEYOND THE SPRINT
          </p>

          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-light mb-8">
            What Comes Next
          </h2>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-6 max-w-4xl">
            A heuristic evaluation and full UI walkthrough after V2 surfaced 30+ documented
            improvements for the next phase — evidence that the product was taken seriously enough to
            audit rigorously, not just shipped and forgotten.
          </p>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-10 max-w-4xl">
            The long-term visual direction I&apos;m pursuing: replacing circular nodes with a{" "}
            <span className="text-white/90 font-medium">beehive of hexagonal cells</span>. Denser,
            spatially intuitive, and conceptually simpler as the tree scales to hundreds of topics.
            It&apos;s the natural form factor for a tool that&apos;s ultimately about{" "}
            <span className="italic">how ideas connect</span>, not just{" "}
            <span className="italic">what they are</span> — and we can form intuitive topic
            clusters around it which will serve later as a community-driven knowledge exploration
            concept (a social community idea where people explore together).
          </p>


        </div>
      </motion.section>

      {/* ── What I Learned ────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="pb-24 md:pb-32 px-8 md:px-12 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs md:text-sm tracking-widest text-accent mb-4">
            WHAT I LEARNED
          </p>

          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-light mb-8">
            Compression Test
          </h2>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-6 max-w-4xl">
            This project was a compression test. Two weeks forced prioritization that longer
            timelines let you avoid. The clearest lesson:{" "}
            <span className="text-white/90 font-medium">
              a fast, disposable prototype is worth more than a perfect brief.
            </span>{" "}
            The v0 prototype I built to communicate with the AI engineer shaped the entire product
            direction. The Streamlit app gave us something real to react to. Neither was precious.
            Both were essential.
          </p>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-6 max-w-4xl">
            The mobile scope addition mid-sprint was a planning gap — mobile should have been scoped
            at kickoff. Owning that, I absorbed it without slipping the timeline, but it&apos;s the
            kind of constraint that&apos;s far cheaper to address in week one than week two.
          </p>

          <p className="font-mono text-base md:text-lg text-white/70 leading-relaxed mb-10 max-w-4xl">
            The principle I&apos;ll carry forward:{" "}
            <span className="text-white/90 font-medium">
              subtraction is a form of respect for the user.
            </span>{" "}
            Every button you remove is a decision they don&apos;t have to make.
          </p>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-wrap gap-2">
              {["Next.js 16", "React 19", "TypeScript", "React Flow", "Framer Motion", "Geist"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs tracking-wider px-3 py-1.5 border border-white/10 rounded-full text-white/40"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
