"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Activity, Lock, Eye, Layout } from "lucide-react"
import Link from "next/link"
import { ComponentShowcase } from './ax-design-system/component-showcase';
import { MaturityChart } from './ax-design-system/maturity-chart';
import { TokenGallery } from './ax-design-system/token-gallery';
import { ArtifactCard } from './ax-design-system/artifact-card';
import { Foundations } from './ax-design-system/foundations';
import { Footer } from "@/components/footer";

const Metric = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col p-4">
    <span className="text-4xl md:text-5xl font-bold text-accent font-sans tracking-tight">{value}</span>
    <span className="text-sm font-medium text-white/80 uppercase tracking-wide mt-2 font-mono">{label}</span>
  </div>
);

const PrincipleCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="p-5">
    <h3 className="text-2xl font-sans font-bold text-white mb-3">{title}</h3>
    <p className="text-base text-white/80 leading-relaxed font-mono">{desc}</p>
  </div>
);

export function AxDesignSystemProject() {
  return (
    <article className="min-h-screen pt-32 pb-24 px-8 md:px-12 lg:px-24">
      {/* Back Button */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <Link
          href="/#works"
          className="inline-flex items-center gap-2 font-mono text-xs 3xl:text-sm tracking-widest text-white/80 hover:text-foreground transition-colors mb-16"
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
          {["Design System", "AI Agents", "React"].map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs 3xl:text-sm tracking-wider px-3 py-1.5 border border-white/20 rounded-full text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-sans text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-8 text-white">
          AX Design System
        </h1>
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-12">
          <span className="inline-block font-mono font-bold text-xs 3xl:text-sm tracking-wider px-4 py-2 bg-accent/20 text-accent rounded-full w-fit">
            Lead Product Designer
          </span>
          <span className="font-mono font-bold text-sm 3xl:text-base text-white/80">2025</span>
          <span className="font-mono font-bold text-sm 3xl:text-base text-white/80">Ongoing</span>
        </div>
        
        <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl font-mono">
            A case study on building a design system that treats UI as one surface, while making agent-facing contracts (schemas, policies, context, and audit trails) equally “designed.”
        </p>

        <div className="w-full h-[400px] md:h-[600px] bg-white/5 rounded-2xl border border-white/10 mt-16 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-white/20 text-sm uppercase tracking-widest">Project Hero Visual Placeholder</span>
            </div>
        </div>
      </motion.header>


      {/* Context */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32 max-w-4xl"
      >
        <h2 className="font-sans text-4xl md:text-5xl font-light tracking-tight mb-12 text-white">Who is AX for?</h2>
        <div className="font-mono text-lg 3xl:text-xl leading-relaxed text-white/80 space-y-8">
            <p>
                As AI agents move from "chatbots" to "autonomous workers," they need more than just a text box. They need to interact with complex systems, make decisions, and report back to humans.
            </p>
            <p>
                The AX (Agent Experience) Design System was created to bridge the gap between human interfaces and agent capabilities. It provides a shared language for developers and designers to build tools that are both human-readable and agent-executable.
            </p>
        </div>
      </motion.section>

      {/* Problem */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32 max-w-4xl"
      >
        <h2 className="font-sans text-4xl md:text-5xl font-light tracking-tight mb-12 text-white">The Problem</h2>
        <div className="font-mono text-lg 3xl:text-xl leading-relaxed text-white/80 space-y-8">
            <p>
                Before AX, every team was building their own "agent tools" from scratch. This led to:
            </p>
            <ul className="list-disc pl-5 space-y-4">
                <li><strong className="text-white">Inconsistent Behavior:</strong> Agents in one part of the app behaved differently than in others.</li>
                <li><strong className="text-white">Security Risks:</strong> No standardized way to limit agent permissions or approve high-stakes actions.</li>
                <li><strong className="text-white">Poor Observability:</strong> It was hard to tell what an agent was doing or why it failed.</li>
                <li><strong className="text-white">Duplicated Effort:</strong> Engineers were rewriting the same "approval UI" over and over.</li>
            </ul>
        </div>
      </motion.section>

      {/* Goal */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32 max-w-4xl"
      >
        <h2 className="font-sans text-4xl md:text-5xl font-light tracking-tight mb-12 text-white">The Goal</h2>
        <div className="border-l-4 border-accent pl-8 py-4 mb-8">
            <p className="font-sans text-2xl md:text-3xl text-white/90 leading-relaxed">
                Create one shared AX system that standardizes:<br /> (1) how agents ask, plan, act, and report;<br /> (2) how humans approve and recover; <br /> (3) how the platform exposes agent-addressable capabilities safely.
            </p>
        </div>
        <p className="font-mono text-lg 3xl:text-xl leading-relaxed text-white/80">
            The success metric is not “pixel consistency”—it’s consistent behavior, predictable control points, and reliable auditability across every agentic workflow.
        </p>
      </motion.section>

      {/* Constraints */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl font-light tracking-tight mb-12 text-white">System Type & Constraints</h2>
        <p className="font-mono text-lg 3xl:text-xl leading-relaxed text-white/80 mb-16 max-w-4xl">
            This AX system is <strong className="text-white">Bi-Modal</strong>: it includes a traditional UI kit and an “agent interface kit” (contracts + context + policy patterns). This aligns with the principle that agents should have access parity with humans.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
            <PrincipleCard 
                icon={Activity} 
                title="Two Audiences" 
                desc="Human users need trust, clarity, and control. Agents need structure, context, and predictable APIs."
            />
             <PrincipleCard 
                icon={Lock} 
                title="High Stakes" 
                desc="Purchasing, credential changes, and data deletion require standardized interactivity patterns."
            />
             <PrincipleCard 
                icon={Eye} 
                title="Observability" 
                desc="AX must differentiate agent-initiated actions from human-initiated actions in all logs and traces."
            />
             <PrincipleCard 
                icon={Layout} 
                title="Parity" 
                desc="Agents shouldn't scrape. They deserve explicit interfaces designed for their consumption."
            />
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
        <h2 className="font-sans text-4xl md:text-5xl font-light tracking-tight mb-12 text-white">Atomic Principles (AX Edition)</h2>
        <p className="font-mono text-lg 3xl:text-xl leading-relaxed text-white/80 mb-16 max-w-4xl">
            We extended Atomic Design to include "Trust" and "Contract" atoms, acknowledging that in an agentic system, trust and data contracts are as fundamental as buttons and inputs.
        </p>
        
        <div className="mb-24">
            <h3 className="text-2xl font-sans font-bold text-white mb-8">System Foundations</h3>
            <Foundations />
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 font-sans">
            <TokenGallery />
        </div>
      </motion.section>

      {/* Components */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl font-light tracking-tight mb-12 text-white">Building Components</h2>
        <p className="font-mono text-lg 3xl:text-xl leading-relaxed text-white/80 mb-16 max-w-4xl">
            The component library is divided into Atoms, Molecules, and Organisms, but with a twist: we include "Trust Atoms" (like confidence scores) and "Contract Atoms" (like schema definitions) alongside standard UI elements.
        </p>

        {/* Atomic Flow Visual */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-24 p-8 border border-white/10 rounded-xl bg-white/5">
            <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
                    <span className="font-mono text-xs text-purple-300">Token</span>
                </div>
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Tokens</span>
            </div>
            
            <div className="h-px w-12 bg-white/20 md:w-24"></div>

            <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Atoms</span>
            </div>

            <div className="h-px w-12 bg-white/20 md:w-24"></div>

            <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                </div>
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Molecules</span>
            </div>

            <div className="h-px w-12 bg-white/20 md:w-24"></div>

            <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-lg bg-accent/20 border border-accent/40 flex flex-col items-center justify-center gap-1">
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    </div>
                    <div className="w-8 h-2 bg-accent/40 rounded-full"></div>
                </div>
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Organisms</span>
            </div>
        </div>

        <div className="font-sans">
            <ComponentShowcase />
        </div>
      </motion.section>

      {/* Future: Agent to Agent */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl font-light tracking-tight mb-12 text-white">Future: Agent-to-Agent Interaction</h2>
        <p className="font-mono text-lg 3xl:text-xl leading-relaxed text-white/80 mb-16 max-w-4xl">
            As we move forward, the role of the human interface will diminish. The next phase of AX focuses on <strong className="text-white">Agent-to-Agent (A2A)</strong> protocols, where agents negotiate contracts, verify trust, and execute complex workflows with minimal human intervention.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
            <div className="font-sans">
                <div className="p-8 border border-white/10 rounded-xl bg-white/5 h-full flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-8 opacity-50">
                        <div className="w-12 h-12 rounded-full bg-white/10" />
                        <div className="h-px flex-1 bg-white/20 mx-4" />
                        <div className="w-12 h-12 rounded-full bg-white/10" />
                    </div>
                    <p className="text-center font-mono text-sm text-white/60">
                        "Replacing the governance matrix with autonomous negotiation protocols."
                    </p>
                </div>
            </div>

            <div className="font-mono text-lg leading-relaxed text-white/80">
                <h3 className="text-2xl font-sans font-bold text-white mb-6">The Shift</h3>
                <ul className="list-disc pl-5 space-y-4 marker:text-accent">
                    <li><strong className="text-white">From Approval to Policy:</strong> Humans will define the "rules of engagement" rather than approving every step.</li>
                    <li><strong className="text-white">Inter-Agent Trust:</strong> Agents will use cryptographic signatures to verify each other's identity and authority.</li>
                    <li><strong className="text-white">Semantic Handshakes:</strong> Standardized protocols for agents to "interview" each other before sharing data.</li>
                </ul>
            </div>
        </div>
      </motion.section>

      <Footer />

    </article>
  );
}
