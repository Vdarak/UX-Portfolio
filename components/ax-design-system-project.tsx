"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowUpRight, Check, X, Shield, Eye, Zap, Users, Lock, Clock, FileCode, Layers, GitBranch, CheckCircle, AlertTriangle, Settings, Activity } from "lucide-react"
import Link from "next/link"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Footer } from "@/components/footer"

interface ProjectProps {
  project: {
    id: string
    title: string
    role: string
    tags: string[]
    year: string
    details: {
      duration: string
    }
  }
}

function ComponentCard({ name, description, states, icon: Icon }: { name: string; description: string; states: string[]; icon: React.ElementType }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border border-white/10 rounded-xl p-6 hover:border-accent/30 transition-colors"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-2 bg-accent/20 rounded-lg">
          <Icon className="w-5 h-5 text-accent" />
        </div>
        <div>
          <h4 className="font-sans text-lg font-medium mb-1">{name}</h4>
          <p className="font-mono text-sm text-white/60">{description}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {states.map((state) => (
          <span key={state} className="font-mono text-xs px-2 py-1 bg-white/5 rounded text-white/50">
            {state}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export function AXDesignSystemProject({ project }: ProjectProps) {
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
              className="font-mono text-xs 3xl:text-sm tracking-wider px-3 py-1.5 border border-white/20 rounded-full text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl 3xl:text-9xl font-light tracking-tight mb-6">
          {project.title}
        </h1>
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-12">
          <span className="inline-block font-mono font-bold text-xs 3xl:text-sm tracking-wider px-4 py-2 bg-accent/20 text-accent rounded-full w-fit">
            {project.role}
          </span>
          <span className="font-mono font-bold text-sm 3xl:text-base text-white/60">{project.year}</span>
          <span className="font-mono font-bold text-sm 3xl:text-base text-white/60">{project.details.duration}</span>
          <span className="font-mono font-bold text-sm 3xl:text-base text-white/60">
            Federated Team Model
          </span>
        </div>

        {/* Project Metadata Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <p className="font-mono text-xs tracking-widest text-accent">PLATFORMS</p>
            <p className="font-mono text-sm text-white/80">Web App • API Surfaces • Agent Contracts</p>
          </div>
          <div className="space-y-2">
            <p className="font-mono text-xs tracking-widest text-accent">PROCESS</p>
            <p className="font-mono text-sm text-white/80">Dual-Track Agile with Design Sprints</p>
          </div>
          <div className="space-y-2">
            <p className="font-mono text-xs tracking-widest text-accent">TEAM</p>
            <p className="font-mono text-sm text-white/80">3 Designers • 5 Engineers • 2 PMs</p>
          </div>
        </div>
      </motion.header>

      {/* Outcomes Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <p className="font-mono text-lg tracking-widest text-accent mb-8">KEY OUTCOMES</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { stat: "65%", label: "Faster time-to-ship for agent features" },
            { stat: "94%", label: "Component adoption across teams" },
            { stat: "40%", label: "Reduction in trust-related support tickets" },
            { stat: "100%", label: "WCAG 2.1 AA compliance" },
            { stat: "0", label: "Critical safety incidents post-launch" },
            { stat: "3x", label: "Faster governance review throughput" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <span className="text-5xl md:text-6xl 3xl:text-7xl font-bold text-accent block mb-2">
                {item.stat}
              </span>
              <span className="font-mono text-sm 3xl:text-base text-white/70">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Hero Visual Placeholder */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <div className="rounded-xl overflow-hidden bg-gradient-to-br from-accent/20 via-background to-background border border-white/10 p-12 min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <Layers className="w-16 h-16 text-accent mx-auto mb-6" />
            <p className="font-sans text-2xl md:text-3xl font-light text-white/80 mb-2">AX Design System</p>
            <p className="font-mono text-sm text-white/50">Component Library • Token System • Agent Contracts</p>
          </div>
        </div>
      </motion.section>

      {/* Context: Who is AX for? */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl 3xl:text-6xl font-light mb-12">
          Who is AX For?
        </h2>
        <p className="font-mono text-lg 3xl:text-xl leading-relaxed text-white/80 max-w-4xl mb-12">
          Agentic Experience (AX) design serves two distinct audiences with fundamentally different needs. Understanding this duality shaped every decision in our system architecture.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border border-white/10 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-accent" />
              <p className="font-mono text-lg tracking-widest text-accent">AX TODAY</p>
            </div>
            <h3 className="font-sans text-2xl 3xl:text-3xl font-medium mb-4">Human ↔ Agent Relationship</h3>
            <ul className="space-y-3">
              {[
                "Trust calibration and boundary setting",
                "Initiative and autonomy levels",
                "Memory and context management",
                "Point of view and persona design",
                "Consent and approval workflows",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span className="font-mono text-base text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-white/10 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <GitBranch className="w-6 h-6 text-accent" />
              <p className="font-mono text-lg tracking-widest text-accent">AX TOMORROW</p>
            </div>
            <h3 className="font-sans text-2xl 3xl:text-3xl font-medium mb-4">Agent ↔ Software ↔ Agent</h3>
            <ul className="space-y-3">
              {[
                "Machine-legible structure and contracts",
                "Autonomous decision boundaries",
                "Auditability and traceability",
                "Inter-agent negotiation protocols",
                "Policy enforcement and rate limits",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span className="font-mono text-base text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-l-4 border-accent pl-8 md:pl-12">
          <p className="text-xl md:text-2xl lg:text-3xl 3xl:text-4xl font-sans text-white/80 leading-relaxed">
            We designed for a future where agents are both users and builders—requiring interfaces that work for humans and machine-legible contracts that enable safe automation.
          </p>
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
        <h2 className="font-sans text-4xl md:text-5xl 3xl:text-6xl font-light mb-6">
          The Problem
        </h2>
        <p className="font-mono text-lg 3xl:text-xl text-white/80 mb-12 max-w-4xl">
          Without a unified design system, our agent-powered products were accumulating significant UX debt and safety risks.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Layers,
              title: "Fragmented UI Patterns",
              description: "Agent chat, workspaces, tool runners, settings, and admin surfaces all used different component libraries.",
            },
            {
              icon: Eye,
              title: "Inconsistent Trust Cues",
              description: "No shared visual language for what the agent did vs. what it plans to do vs. what requires approval.",
            },
            {
              icon: AlertTriangle,
              title: "Missing Agent States",
              description: "Thinking, executing, awaiting approval, failed, rolled back—each team invented their own representations.",
            },
            {
              icon: Lock,
              title: "Safety Without Standards",
              description: "Permissions, audit logs, reversibility, and explainability were implemented ad-hoc across products.",
            },
            {
              icon: FileCode,
              title: "Duplicate Engineering",
              description: "Teams reinvented tool calls, streaming, citations, and trace IDs—wasting 40% of sprint capacity.",
            },
            {
              icon: Clock,
              title: "Slow Development Cycles",
              description: "Agent features took 3x longer to ship because every team started from scratch.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-white/10 rounded-xl p-6"
            >
              <item.icon className="w-6 h-6 text-accent mb-4" />
              <h3 className="font-sans text-lg font-medium mb-2">{item.title}</h3>
              <p className="font-mono text-sm text-white/60">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="border border-red-500/30 rounded-xl p-8">
          <p className="font-mono text-lg tracking-widest text-red-500 mb-6">SYMPTOMS WE OBSERVED</p>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "23 different button implementations across agent UIs",
              "No standard for streaming response rendering",
              "Support tickets about confusing agent status indicators",
              "Security review bottlenecks on every agent feature",
              "Inconsistent keyboard navigation in chat interfaces",
              "Training materials outdated within weeks of writing",
              "No shared vocabulary between design and engineering",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="font-mono text-sm text-white/70">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* The Goal */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl 3xl:text-6xl font-light mb-6">
          The Goal
        </h2>
        
        <div className="border-l-4 border-accent pl-8 md:pl-12 mb-12">
          <p className="text-xl md:text-2xl 3xl:text-3xl font-sans text-white/90 leading-relaxed">
            Build a unified AX design system that accelerates development, reduces risk, and creates consistent trust and control across human and agent users.
          </p>
        </div>

        <p className="font-mono text-lg tracking-widest text-accent mb-8">ACCEPTANCE CRITERIA</p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: CheckCircle, label: "WCAG 2.1 AA compliance for all components" },
            { icon: Shield, label: "Security and safety rails built into every interaction" },
            { icon: Activity, label: "Full observability with audit logging" },
            { icon: Layers, label: "Theming support for brand flexibility" },
            { icon: GitBranch, label: "Cross-surface portability (UI + API + events)" },
            { icon: Users, label: "Clear governance and contribution model" },
            { icon: FileCode, label: "Machine-legible contracts alongside UI components" },
            { icon: Zap, label: "Sub-100ms render for streaming responses" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-4 p-4 border border-white/10 rounded-lg"
            >
              <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="font-mono text-sm text-white/80">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* What Kind of System is AX? */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl 3xl:text-6xl font-light mb-6">
          What Kind of System is AX?
        </h2>
        <p className="font-mono text-lg 3xl:text-xl text-white/80 mb-12 max-w-4xl">
          AX is not a typical component library. It operates as two coupled layers designed to serve both human interfaces and machine contracts.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border border-accent/30 rounded-xl p-8 bg-accent/5">
            <p className="font-mono text-lg tracking-widest text-accent mb-6">HUMAN UI LAYER</p>
            <ul className="space-y-4">
              {[
                "Visual components (buttons, cards, dialogs)",
                "Interaction patterns (streaming, approvals, undo)",
                "Content guidelines and tone",
                "Accessibility and responsive behavior",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="font-mono text-base text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-accent/30 rounded-xl p-8 bg-accent/5">
            <p className="font-mono text-lg tracking-widest text-accent mb-6">AGENT LAYER</p>
            <ul className="space-y-4">
              {[
                "Machine-legible schemas and contracts",
                "Event specifications for agent actions",
                "Policy definitions for autonomy boundaries",
                "Trace and audit data structures",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="font-mono text-base text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border border-white/10 rounded-xl p-8">
          <p className="font-mono text-lg tracking-widest text-white/60 mb-6">NON-GOALS (NOT YET STANDARDIZED)</p>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Multi-agent orchestration choreography",
              "Model-specific prompt templates",
              "Domain-specific business logic",
              "Third-party integration adapters",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <X className="w-5 h-5 text-white/40 mt-0.5 flex-shrink-0" />
                <span className="font-mono text-sm text-white/50">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* AX Principles */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl 3xl:text-6xl font-light mb-6">
          AX Principles
        </h2>
        <p className="font-mono text-lg 3xl:text-xl text-white/80 mb-12 max-w-4xl">
          Our principles split into two categories: those governing human-agent relationships, and those enabling safe autonomous operation.
        </p>

        <div className="mb-12">
          <p className="font-mono text-lg tracking-widest text-accent mb-8">RELATIONSHIP DESIGN (HUMAN ↔ AGENT)</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Make Agency Visible",
                description: "Always distinguish between plan, act, and done states. Users should never wonder what the agent is doing.",
              },
              {
                title: "Consent Before Consequence",
                description: "High-impact actions require explicit approval gates. No silent changes to user data or external systems.",
              },
              {
                title: "Memory With Control",
                description: "Users see what is remembered, can edit context, and can erase data. Transparency builds trust.",
              },
              {
                title: "Boundaries By Default",
                description: "Scope, time, and data access start limited. Users expand permissions; agents never assume them.",
              },
              {
                title: "Repair is a Feature",
                description: "Every action has undo, rollback, retry, or escalation. Recovery paths are first-class citizens.",
              },
              {
                title: "Explain Decisions",
                description: "Confidence scores, source citations, and reasoning are always available on request.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-white/10 rounded-xl p-6"
              >
                <h3 className="font-sans text-lg font-medium mb-2">{item.title}</h3>
                <p className="font-mono text-sm text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-lg tracking-widest text-accent mb-8">AUTONOMOUS DESIGN (AGENT ↔ SYSTEMS)</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Contract-First Surfaces",
                description: "Schemas define behavior before layouts. Machine-readable specs enable safe automation.",
              },
              {
                title: "Every Action is Traceable",
                description: "Trace IDs, logs, and provenance for every operation. Debugging and auditing are non-negotiable.",
              },
              {
                title: "Safe Autonomy",
                description: "Policies, rate limits, and tool permissions enforce boundaries that agents cannot override.",
              },
              {
                title: "Deterministic Fallbacks",
                description: "When models fail, systems degrade gracefully to known-safe behaviors. No undefined states.",
              },
              {
                title: "Machine-Legible Navigation",
                description: "Structured endpoints, event feeds, and semantic schemas enable agent-to-agent coordination.",
              },
              {
                title: "Least Privilege Default",
                description: "Agents request only what they need for the current task. Scope expansion requires justification.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-white/10 rounded-xl p-6"
              >
                <h3 className="font-sans text-lg font-medium mb-2">{item.title}</h3>
                <p className="font-mono text-sm text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Atomic Principles */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl 3xl:text-6xl font-light mb-6">
          Atomic Principles (AX Edition)
        </h2>
        <p className="font-mono text-lg 3xl:text-xl text-white/80 mb-12 max-w-4xl">
          We extended atomic design with AX-specific token types that capture agent behavior and trust semantics.
        </p>

        <div className="grid md:grid-cols-6 gap-4 mb-12">
          {[
            { name: "Tokens", color: "bg-blue-500" },
            { name: "Atoms", color: "bg-green-500" },
            { name: "Molecules", color: "bg-yellow-500" },
            { name: "Organisms", color: "bg-orange-500" },
            { name: "Templates", color: "bg-red-500" },
            { name: "Pages", color: "bg-purple-500" },
          ].map((item) => (
            <div key={item.name} className="text-center">
              <div className={`w-full h-2 ${item.color} rounded mb-2`} />
              <span className="font-mono text-xs text-white/60">{item.name}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-accent/30 rounded-xl p-8">
            <p className="font-mono text-lg tracking-widest text-accent mb-6">BEHAVIOR TOKENS</p>
            <p className="font-mono text-sm text-white/70 mb-4">
              Timing and interaction semantics unique to agent experiences.
            </p>
            <ul className="space-y-3">
              {[
                "Streaming chunk timing (50ms, 100ms, 200ms)",
                "Thinking indicator duration thresholds",
                "Confidence display breakpoints",
                "Animation easing for state transitions",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="font-mono text-sm text-white/60">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-accent/30 rounded-xl p-8">
            <p className="font-mono text-lg tracking-widest text-accent mb-6">TRUST TOKENS</p>
            <p className="font-mono text-sm text-white/70 mb-4">
              Risk and safety semantics that map to visual treatment.
            </p>
            <ul className="space-y-3">
              {[
                "Risk levels (low, medium, high, critical)",
                "Approval requirement thresholds",
                "Disclosure intensity (subtle, prominent, blocking)",
                "Audit label visibility rules",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="font-mono text-sm text-white/60">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Foundations (Tokens) */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl 3xl:text-6xl font-light mb-6">
          Foundations (Tokens)
        </h2>
        <p className="font-mono text-lg 3xl:text-xl text-white/80 mb-12 max-w-4xl">
          Our token system powers theming, consistency, and machine-legible design decisions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { name: "Color", items: ["Brand palette", "Status colors", "Risk indicators", "Surface hierarchy"] },
            { name: "Typography", items: ["Font families", "Scale system", "Line heights", "Weight mappings"] },
            { name: "Spacing & Layout", items: ["Base unit (4px)", "Responsive breakpoints", "Container widths", "Grid columns"] },
            { name: "Motion", items: ["Easing curves", "Duration scale", "Streaming animations", "State transitions"] },
            { name: "Iconography", items: ["Semantic icons", "Trust indicators", "Action symbols", "Status glyphs"] },
            { name: "Trust & Safety", items: ["Risk tier colors", "Approval prompts", "Audit labels", "Warning patterns"] },
          ].map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-white/10 rounded-xl p-6"
            >
              <h3 className="font-sans text-lg font-medium mb-4">{category.name}</h3>
              <ul className="space-y-2">
                {category.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="font-mono text-xs text-white/60">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border border-green-500/30 rounded-xl p-8">
          <p className="font-mono text-lg tracking-widest text-green-500 mb-6">PRODUCTION-READY DEFINITION</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Versioned in semantic versioning",
              "Documented with examples",
              "Linted for consistency",
              "Exported to CSS/JSON/TypeScript",
              "Tested across browsers",
              "Changelogged for updates",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="font-mono text-sm text-white/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Component Inventory */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl 3xl:text-6xl font-light mb-6">
          Component Inventory
        </h2>
        <p className="font-mono text-lg 3xl:text-xl text-white/80 mb-12 max-w-4xl">
          Production-ready components designed for agentic experiences, with full documentation and accessibility support.
        </p>

        {/* Atoms */}
        <div className="mb-16">
          <p className="font-mono text-lg tracking-widest text-accent mb-8">ATOMS</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Button / IconButton", description: "Primary actions with loading states", states: ["default", "hover", "active", "disabled", "loading"], icon: Zap },
              { name: "StatusPill", description: "Agent state indicators", states: ["thinking", "executing", "done", "failed"], icon: Activity },
              { name: "TrustBadge", description: "Risk and approval indicators", states: ["low", "medium", "high", "critical"], icon: Shield },
              { name: "Avatar / AgentAvatar", description: "User and agent identity", states: ["online", "typing", "idle"], icon: Users },
              { name: "Spinner / Progress", description: "Loading and streaming indicators", states: ["indeterminate", "determinate"], icon: Clock },
              { name: "TextField / TextArea", description: "Input fields with validation", states: ["default", "focus", "error", "disabled"], icon: FileCode },
            ].map((component, i) => (
              <ComponentCard key={i} {...component} />
            ))}
          </div>
        </div>

        {/* Molecules */}
        <div className="mb-16">
          <p className="font-mono text-lg tracking-widest text-accent mb-8">MOLECULES</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "PermissionPrompt", description: "Scoped consent dialogs", states: ["request", "granted", "denied"], icon: Lock },
              { name: "TrustDisclosure", description: "Confidence and source display", states: ["collapsed", "expanded"], icon: Eye },
              { name: "StepIndicator", description: "Plan and execution progress", states: ["pending", "active", "complete", "error"], icon: CheckCircle },
              { name: "InlineAlert", description: "Contextual warnings and info", states: ["info", "warning", "error", "risk"], icon: AlertTriangle },
              { name: "SearchField", description: "Filtered search with suggestions", states: ["empty", "typing", "results"], icon: Settings },
              { name: "Toast / Snackbar", description: "Transient notifications", states: ["info", "success", "error", "action"], icon: Zap },
            ].map((component, i) => (
              <ComponentCard key={i} {...component} />
            ))}
          </div>
        </div>

        {/* Organisms */}
        <div className="mb-16">
          <p className="font-mono text-lg tracking-widest text-accent mb-8">ORGANISMS</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "ChatComposer", description: "Message input with attachments, tool selection, and guardrails", states: ["idle", "composing", "sending"], icon: FileCode },
              { name: "MessageThread", description: "Streaming messages with citations, edits, and redactions", states: ["streaming", "complete", "edited"], icon: Layers },
              { name: "AgentPlanViewer", description: "Step visualization with dependencies and approval gates", states: ["planning", "executing", "awaiting", "complete"], icon: GitBranch },
              { name: "ExecutionTimeline", description: "Event log with durations and trace IDs", states: ["live", "complete", "filtered"], icon: Activity },
              { name: "ToolRunnerPanel", description: "Tool execution with inputs, outputs, and retries", states: ["ready", "running", "success", "failed"], icon: Settings },
              { name: "AuditLogTable", description: "Filterable audit trail with export", states: ["loading", "populated", "filtered"], icon: Shield },
            ].map((component, i) => (
              <ComponentCard key={i} {...component} />
            ))}
          </div>
        </div>

        {/* Templates & Pages */}
        <div>
          <p className="font-mono text-lg tracking-widest text-accent mb-8">TEMPLATES & PAGES</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Brief → Plan → Execute → Review workspace",
              "Research sprint workspace",
              "Support triage workspace",
              "Agent marketplace template",
              "Incident & rollback template",
              "Policy management page",
              "Audit compliance reporting page",
              "Cost & latency dashboard page",
            ].map((template, i) => (
              <div key={i} className="flex items-center gap-3 p-4 border border-white/10 rounded-lg">
                <Layers className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="font-mono text-sm text-white/70">{template}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Agent-Facing System */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl 3xl:text-6xl font-light mb-6">
          Agent-Facing System
        </h2>
        <p className="font-mono text-lg 3xl:text-xl text-white/80 mb-12 max-w-4xl">
          Beyond visual components, AX defines machine-legible contracts that enable safe agent automation.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Action Schema",
              description: "Typed inputs/outputs with validation rules and error taxonomy for every tool call.",
            },
            {
              title: "Event Schema",
              description: "Stream chunks, step transitions, approval requests, and rollback events.",
            },
            {
              title: "Trace Model",
              description: "Trace IDs, spans, and provenance linking every action to its source.",
            },
            {
              title: "Permission Model",
              description: "Scopes, expiration, and least-privilege defaults for agent capabilities.",
            },
            {
              title: "Memory Schema",
              description: "What can be stored, TTL policies, and user control mechanisms.",
            },
            {
              title: "Tool Manifest",
              description: "Capability declarations, limits, and safety notes for each integrated tool.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-white/10 rounded-xl p-6"
            >
              <h3 className="font-sans text-lg font-medium mb-2">{item.title}</h3>
              <p className="font-mono text-sm text-white/60">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Governance */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl 3xl:text-6xl font-light mb-6">
          Governance Model
        </h2>
        <p className="font-mono text-lg 3xl:text-xl text-white/80 mb-12 max-w-4xl">
          A self-scaling governance model that balances rapid iteration with system integrity.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="border border-white/10 rounded-xl p-6">
            <p className="font-mono text-lg tracking-widest text-accent mb-4">CORE TEAM</p>
            <p className="font-mono text-sm text-white/70 mb-4">
              Owns system architecture, token definitions, and breaking change decisions.
            </p>
            <ul className="space-y-2">
              <li className="font-mono text-xs text-white/50">• 2 Design Systems Designers</li>
              <li className="font-mono text-xs text-white/50">• 2 Platform Engineers</li>
              <li className="font-mono text-xs text-white/50">• 1 Security Representative</li>
            </ul>
          </div>

          <div className="border border-white/10 rounded-xl p-6">
            <p className="font-mono text-lg tracking-widest text-accent mb-4">CONTRIBUTORS</p>
            <p className="font-mono text-sm text-white/70 mb-4">
              Product teams propose and build components following system guidelines.
            </p>
            <ul className="space-y-2">
              <li className="font-mono text-xs text-white/50">• RFC process for new patterns</li>
              <li className="font-mono text-xs text-white/50">• Design + Eng review gates</li>
              <li className="font-mono text-xs text-white/50">• Security sign-off for trust components</li>
            </ul>
          </div>

          <div className="border border-white/10 rounded-xl p-6">
            <p className="font-mono text-lg tracking-widest text-accent mb-4">RELEASE CADENCE</p>
            <p className="font-mono text-sm text-white/70 mb-4">
              Predictable releases with clear deprecation windows.
            </p>
            <ul className="space-y-2">
              <li className="font-mono text-xs text-white/50">• Minor releases: bi-weekly</li>
              <li className="font-mono text-xs text-white/50">• Major releases: quarterly</li>
              <li className="font-mono text-xs text-white/50">• Deprecation notice: 2 releases</li>
            </ul>
          </div>
        </div>

        <div className="border border-accent/30 rounded-xl p-8">
          <p className="font-mono text-lg tracking-widest text-accent mb-6">QUALITY GATES</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Accessibility audit (axe-core)",
              "Unit + integration tests",
              "Performance budget check",
              "Security review for trust patterns",
            ].map((gate, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="font-mono text-sm text-white/70">{gate}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pattern Library */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl 3xl:text-6xl font-light mb-6">
          Pattern Library
        </h2>
        <p className="font-mono text-lg 3xl:text-xl text-white/80 mb-12 max-w-4xl">
          Beyond components, AX provides behavior-driven patterns that standardize complex agent interactions.
        </p>

        <div className="space-y-6">
          {[
            {
              name: "Consent & Approvals",
              intent: "Ensure users explicitly authorize high-impact actions",
              elements: "PermissionPrompt, ConfirmDialog, ApprovalGate",
              failure: "Graceful degradation to manual workflow",
            },
            {
              name: "Streaming Responses",
              intent: "Display agent output progressively for long-running tasks",
              elements: "StreamingText, ChunkRenderer, ProgressIndicator",
              failure: "Timeout with retry option",
            },
            {
              name: "Citations & Provenance",
              intent: "Attribute agent claims to verifiable sources",
              elements: "CitationLink, SourceCard, ProvenanceTooltip",
              failure: "Flag as unverified with warning",
            },
            {
              name: "Undo & Rollback",
              intent: "Enable users to reverse agent actions safely",
              elements: "UndoButton, RollbackDialog, ActionHistory",
              failure: "Escalate to manual intervention",
            },
            {
              name: "Human-in-the-Loop Review",
              intent: "Insert human checkpoints in autonomous workflows",
              elements: "ReviewQueue, ApprovalCard, EscalationBanner",
              failure: "Pause workflow, notify stakeholders",
            },
            {
              name: "Multi-Agent Handoffs",
              intent: "Summarize context when transferring between agents",
              elements: "HandoffSummary, ContextCard, AgentTransition",
              failure: "Preserve full context, retry handoff",
            },
          ].map((pattern, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-white/10 rounded-xl p-6"
            >
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <p className="font-mono text-xs text-accent mb-1">PATTERN</p>
                  <h3 className="font-sans text-lg font-medium">{pattern.name}</h3>
                </div>
                <div>
                  <p className="font-mono text-xs text-white/40 mb-1">INTENT</p>
                  <p className="font-mono text-sm text-white/70">{pattern.intent}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-white/40 mb-1">ELEMENTS</p>
                  <p className="font-mono text-sm text-white/70">{pattern.elements}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-white/40 mb-1">FAILURE MODE</p>
                  <p className="font-mono text-sm text-white/70">{pattern.failure}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Measuring Maturity */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl 3xl:text-6xl font-light mb-6">
          Measuring Maturity
        </h2>
        <p className="font-mono text-lg 3xl:text-xl text-white/80 mb-12 max-w-4xl">
          A rubric for tracking design system adoption and impact across the organization.
        </p>

        <div className="space-y-8 mb-12">
          {[
            {
              level: "Level 1: Foundation",
              criteria: "Tokens defined, core atoms available, documentation exists",
              adoption: "20-40%",
              incidents: "Baseline",
            },
            {
              level: "Level 2: Adoption",
              criteria: "Molecules and organisms in production, teams contributing",
              adoption: "40-70%",
              incidents: "30% reduction",
            },
            {
              level: "Level 3: Integration",
              criteria: "Agent contracts standardized, governance operational",
              adoption: "70-90%",
              incidents: "50% reduction",
            },
            {
              level: "Level 4: Optimization",
              criteria: "Performance budgets met, accessibility certified",
              adoption: "90%+",
              incidents: "70% reduction",
            },
            {
              level: "Level 5: Innovation",
              criteria: "System enables new patterns, cross-team collaboration",
              adoption: "Universal",
              incidents: "Near-zero",
            },
          ].map((level, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-white/10 rounded-xl p-6"
            >
              <div className="grid md:grid-cols-4 gap-4 items-center">
                <div>
                  <p className="font-sans text-lg font-medium text-accent">{level.level}</p>
                </div>
                <div>
                  <p className="font-mono text-sm text-white/70">{level.criteria}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-white/40 mb-1">ADOPTION</p>
                  <p className="font-mono text-sm text-white/80">{level.adoption}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-white/40 mb-1">SAFETY INCIDENTS</p>
                  <p className="font-mono text-sm text-white/80">{level.incidents}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border-l-4 border-accent pl-8 md:pl-12">
          <p className="text-xl md:text-2xl 3xl:text-3xl font-sans text-white/80 leading-relaxed">
            We reached Level 3 within 6 months—standardized agent contracts across all products with measurable safety improvements.
          </p>
        </div>
      </motion.section>

      {/* Results & What's Next */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl 3xl:text-6xl font-light mb-6">
          Results & What's Next
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border border-green-500/30 rounded-xl p-8">
            <p className="font-mono text-lg tracking-widest text-green-500 mb-6">WHAT WORKED</p>
            <ul className="space-y-4">
              {[
                "Dual-layer approach (UI + contracts) addressed both audiences",
                "Trust tokens reduced inconsistent safety patterns by 80%",
                "Federated model accelerated adoption without bottlenecks",
                "Pattern library prevented repeated design mistakes",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="font-mono text-base text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-red-500/30 rounded-xl p-8">
            <p className="font-mono text-lg tracking-widest text-red-500 mb-6">TRADEOFFS LEARNED</p>
            <ul className="space-y-4">
              {[
                "Contract-first slowed initial development by 2 weeks",
                "Strict governance created friction with fast-moving teams",
                "Some edge cases still require escape hatches",
                "Multi-agent patterns need more real-world validation",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="font-mono text-base text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <p className="font-mono text-lg tracking-widest text-accent mb-8">ROADMAP (TOMORROW-READY)</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Multi-Agent Orchestration UI",
                description: "Visualization and controls for agent-to-agent workflows",
              },
              {
                title: "Headless Agent Journeys",
                description: "Actions before UI for background automation",
              },
              {
                title: "Machine-Legible Navigation",
                description: "Structured feeds for agent discovery and coordination",
              },
              {
                title: "Audit Automation",
                description: "Compliance reporting without manual extraction",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-white/10 rounded-xl p-6"
              >
                <h3 className="font-sans text-lg font-medium mb-2">{item.title}</h3>
                <p className="font-mono text-sm text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="border-l-4 border-accent pl-8 md:pl-12">
          <p className="text-xl md:text-2xl 3xl:text-3xl font-sans text-white/80 leading-relaxed">
            The hardest part of building for agents is accepting that your users might not be human—and designing systems that work for both.
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
          className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-mono text-sm 3xl:text-base tracking-wider hover:bg-accent transition-colors duration-300"
        >
          VIEW MORE PROJECTS
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </motion.div>

      <Footer />
      <ScrollToTop />
    </article>
  )
}
