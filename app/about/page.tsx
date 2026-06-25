"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowUpRight, Mail, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const skills = [
    // Languages & Frameworks
    "CSS3",
    "HTML5",
    "JavaScript",
    "Python",
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    // Tools
    "Figma",
    "GitHub",
    "Jira",
    "Miro",
    "Lighthouse",
    "WAVE",
    "Qualtrics",
    "R Studio",
    "NVDA",
    "v0",
    // Design & UX
    "A/B Testing",
    "ARIA Implementation",
    "Accessibility Audits",
    "Design Systems",
    "Front-end Development",
    "Information Architecture",
    "Journey Mapping",
    "Mobile Design",
    "Rapid Prototyping",
    "Responsive Design",
    "Storytelling",
    "Typography",
    "UX Design",
    "User Research",
    "WCAG 2.1",
    "Wireframing",
    // Soft Skills
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
          <p className="font-mono text-4xl font-medium 3xl:text-6xl tracking-[0.3em] mb-4 text-foreground">
            VEDANT DARAK
          </p>
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
                I'm a Frontend Design Engineer skilled in blending UI/UX design, front-end engineering, and human-centered research to deliver effective digital solutions. My background spans creative AI systems, enterprise SaaS infrastructure, reusable design systems, interactive prototyping, and cross-functional collaboration.
              </p>
            </div>

            <div>
              <p className="font-mono text-md 3xl:text-base tracking-widest text-accent mb-4 text-lg">BEYOND WORK</p>
              <div className="space-y-4">
                <p className="font-mono text-sm 3xl:text-base leading-relaxed text-white/80">
                  I play badminton (I played on my college team). I’m a stock market enthusiast — options and stock trader
                  as hobbies.
                </p>
                <p className="font-mono text-sm 3xl:text-base leading-relaxed text-white/80">
                  I read a lot. Currently reading <span className="italic">Technological Republic</span> by Alex Karp.
                </p>
                <p className="font-mono text-sm 3xl:text-base leading-relaxed text-white/80">
                  I like to read books to understand the perspective of others — it’s like stepping into their awareness of the world. Even if you don’t accept that world as your reality, it still shows you many interesting things
                  you can learn.
                </p>
                <p className="font-mono text-sm 3xl:text-base leading-relaxed text-white/80">
                  I exercise and do yoga everyday in the morning. Occasional hiker and sea waves enjoyer.
                </p>
                <p className="font-mono text-sm 3xl:text-base leading-relaxed text-white/80">
                  I’m deeply interested in how LLMs work. 3Blue1Brown was one of my favs to understand how LLMs are
                  actually probabilistic and not deterministic.
                </p>
                <p className="font-mono text-sm 3xl:text-base leading-relaxed text-white/80">
                  I’m into podcasts like Andrew Huberman and Chris Williamson to learn more about bio maxing and self
                  improvement. I can talk to you about AI even if you wake me up at 3 AM.
                </p>
                <p className="font-mono text-sm 3xl:text-base leading-relaxed text-white/80">
                  I like to tinker with the new AI tools — I vibecode with them and create interesting (sometimes absurd,
                  irrelevant) projects because there’s learning and fun in the process of it. The journey is more
                  important than destination.
                </p>
                <p className="font-mono text-sm 3xl:text-base leading-relaxed text-white/80">
                  You’ll often see me drop quotes like this (PS: I also have a list of banger quotes in my notes, along
                  with a few poems, my story ideas, my knowledge about myself, truth about the world, my worst fears,
                  tattoo ideas, book recommendations, story writing principles from movies and TV shows, random thoughts,
                  ideas, dream journal, trade journal, and there’s a big rabbit hole on mentalism).
                </p>
                <p className="font-mono text-sm 3xl:text-base leading-relaxed text-white/80">
                  Topics of interest — AI, Universe, Stocks, Banned Books, Radical Ideas.
                </p>
              </div>
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
                Frontend Design Expert at Mercor — evaluating generative AI design quality across 14+ domains (UI, branding, 3D, editorial, motion, and interactive), designing evaluation prompts, and prototyping interactive visual concepts to validate AI model outputs.
              </p>
            </div>

            <div>
              <p className="font-mono text-md 3xl:text-base tracking-widest text-accent mb-4 text-lg">PREVIOUSLY</p>
              <ul className="space-y-2">
                <li className="font-mono text-sm 3xl:text-base text-white/80">
                  Frontend Design Engineer at Cognijin Inc.
                </li>
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
