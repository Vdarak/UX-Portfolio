"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowUpRight, Mail, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const skills = [
    "CSS3",
    "HTML5",
    "JavaScript",
    "Python",
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Figma",
    "GitHub",
    "Jira",
    "Miro",
    "v0",
    "Copilot",
    "API Integration",
    "Agile UX",
    "Design Systems",
    "Front-end Development",
    "Information Architecture",
    "Mobile Design",
    "Responsive Design",
    "Rapid Prototyping",
    "Storytelling",
    "Typography",
    "UI Implementation",
    "UX Design",
    "Wireframing",
    "Web Development",
    "Adaptability",
    "Communication",
    "Decision Making",
    "Problem-Solving",
    "Teamwork",
  ]

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
          <p className="font-mono text-md 3xl:text-base tracking-[0.3em] mb-4 text-white/60">ABOUT</p>
          <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl 3xl:text-9xl font-light tracking-tight">
            Vedant Darak
          </h1>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <p className="font-mono text-md 3xl:text-base tracking-widest text-accent mb-4 text-lg">WHO I AM</p>
              <p className="font-mono text-sm 3xl:text-base leading-relaxed text-white/80">
                I'm an AI-first UX Design Engineer operating at the intersection of Research, Design, and Engineering. Based in
                Chicago, IL, I believe the best digital experiences emerge when human insight meets technical precision.
              </p>
            </div>

            <div>
              <p className="font-mono text-md 3xl:text-base tracking-widest text-accent mb-4 text-lg">WHAT I DO</p>
              <p className="font-mono text-sm 3xl:text-base leading-relaxed text-white/80">
                I design and build AI-powered interfaces that feel intuitive, accessible, and genuinely useful. From
                conversational AI assistants to enterprise dashboards, I focus on making complex technology feel simple
                and human through end-to-end UX design, UI implementation, and front-end development.
              </p>
            </div>

            <div>
              <p className="font-mono text-md 3xl:text-base tracking-widest text-accent mb-4 text-lg">HOW I WORK</p>
              <p className="font-mono text-sm 3xl:text-base leading-relaxed text-white/80">
                I approach every project with curiosity and rigor. I start with deep research—stakeholder interviews,
                usability tests, surveys—to understand users and context, translate insights into thoughtful design
                decisions, and bring ideas to life through clean, performant code in CI/CD pipelines. I value
                collaboration, iteration, and shipping work that makes a real impact.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <p className="font-mono text-md 3xl:text-base tracking-widest text-accent mb-4 text-lg">CURRENTLY</p>
              <p className="font-mono text-sm 3xl:text-base leading-relaxed text-white/80">
                Design Engineer at Cognijin Inc., building custom AI solutions including Pepper—an AI job search
                assistant—with a focus on accessibility, AI interactions, and polished user experiences.
              </p>
            </div>

            <div>
              <p className="font-mono text-md 3xl:text-base tracking-widest text-accent mb-4 text-lg">PREVIOUSLY</p>
              <ul className="space-y-2">
                <li className="font-mono text-sm 3xl:text-base text-white/80">
                  Software Designer at Infinichains (Credibl) Inc.
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-md 3xl:text-base tracking-widest text-accent mb-4 text-lg">SKILLS</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs 3xl:text-sm tracking-wider px-3 py-1.5 3xl:px-4 3xl:py-2 bg-white/10 text-white rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-md 3xl:text-base tracking-widest text-accent mb-4 text-lg">CONNECT</p>
              <div className="flex items-center gap-4">
                <a
                  href="mailto:vdarak.infinity@gmail.com"
                  className="group p-2 3xl:p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 3xl:w-6 3xl:h-6 text-white/60 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/Vdarak8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 3xl:p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 3xl:w-6 3xl:h-6 text-white/60 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://github.com/Vdarak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 3xl:p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 3xl:w-6 3xl:h-6 text-white/60 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
