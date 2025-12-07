"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowUpRight, Check, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ScrollToTop } from "@/components/scroll-to-top"

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

function DonutChart({ percentage, color = "accent" }: { percentage: number; color?: string }) {
  const radius = 45
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative w-32 h-32 mx-auto mb-4">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={color === "accent" ? "rgb(251, 146, 60)" : color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-sans font-bold text-accent text-4xl">{percentage}%</span>
      </div>
    </div>
  )
}

export function MediaBiasProject({ project }: ProjectProps) {
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
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <span className="inline-block font-mono font-bold text-xs 3xl:text-sm tracking-wider px-4 py-2 bg-accent/20 text-accent rounded-full w-fit">
            {project.role}
          </span>
          <span className="font-mono font-bold text-sm 3xl:text-base text-white/60">Spring 2025</span>
          <span className="font-mono font-bold text-sm 3xl:text-base text-white/60">12 weeks</span>
          <span className="font-mono font-bold text-sm 3xl:text-base text-white/60">
            2 UX Designers • 2 UX Researchers
          </span>
        </div>
      </motion.header>

      {/* Project Visual Placeholder */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/ana/ana-hero.jpg"
            alt="Ana - Breaking Information Bubbles with Trustworthy AI"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </div>
      </motion.section>

      {/* Section 1: The Problem */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl 3xl:text-6xl font-light mb-12">
          Young Readers Can't Spot Hidden Bias
        </h2>

        <div className="space-y-12 mb-16">
          <div className="space-y-6">
            <p className="font-mono text-lg 3xl:text-xl leading-relaxed text-white/80 max-w-4xl">
              Young people (18-28) today are stuck in &quot;information bubbles.&quot; This means they only see news
              from one side, kind of like being stuck in a bubble that only shows them one type of story
            </p>

            <div className="space-y-4">
              <p className="font-mono text-base 3xl:text-lg text-accent font-bold">Why This Happens:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span className="font-mono text-base 3xl:text-lg text-white/70">Bad news travels super fast</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span className="font-mono text-base 3xl:text-lg text-white/70">
                    News companies sometimes share stories that aren't totally fair
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span className="font-mono text-base 3xl:text-lg text-white/70">
                    People have to work really hard to figure out what's real
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <p className="font-mono text-base 3xl:text-lg text-accent font-bold">What We Found Out:</p>
            <p className="font-mono text-base 3xl:text-lg text-white/70 leading-relaxed">
              When we talked to young people, they said:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span className="font-mono text-base 3xl:text-lg text-white/70">
                  They feel tired and confused by all the false stories
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span className="font-mono text-base 3xl:text-lg text-white/70">
                  They spend a lot of time checking if stories are really true
                </span>
              </li>
            </ul>

            <div className="bg-white/5 border-l-4 border-accent rounded-r-xl p-8 mt-8">
              <p className="text-2xl md:text-3xl 3xl:text-4xl text-white/90 leading-relaxed mb-4 font-sans">
                "Fake news is like a dangerous virus — it spreads fast and hurts people"
              </p>
              <p className="font-mono text-sm 3xl:text-base text-accent tracking-wider">— P3, Interview Participant</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 2: Our Approach - Survey Findings */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl 3xl:text-6xl font-light mb-6">
          What We Learned From Asking People Questions
        </h2>
        <p className="font-mono text-lg 3xl:text-xl text-white/80 mb-16 max-w-4xl">
          We asked people to read different news headlines and tell us if they were biased (unfair). Our survey research
          with 43 people showed they have &quot;blind spots&quot; about bias.
        </p>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Hidden Bias */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-white/10 rounded-2xl p-8 text-center bg-background border-none"
          >
            <p className="font-mono 3xl:text-sm tracking-widest text-accent mb-6 text-lg">HIDDEN BIAS</p>
            <DonutChart percentage={46.2} />

            <p className="font-mono text-base 3xl:text-lg text-white/70 leading-relaxed">
              of people missed bias that was hidden in neutral-sounding headlines
            </p>
          </motion.div>

          {/* Confusing Topic with Opinion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-white/10 rounded-2xl p-8 text-center bg-background border-none"
          >
            <p className="font-mono 3xl:text-sm tracking-widest text-accent mb-6 text-lg">
              CONFUSING TOPIC WITH OPINION
            </p>
            <DonutChart percentage={66.7} />

            <p className="font-mono text-base 3xl:text-lg text-white/70 leading-relaxed">
              of people got confused about what an article was about vs. what side it was taking
            </p>
          </motion.div>

          {/* Obvious Bias */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-white/10 rounded-2xl p-8 text-center bg-background border-none"
          >
            <p className="font-mono 3xl:text-sm tracking-widest text-accent mb-6 text-lg">
              OBVIOUS BIAS (EASIER TO SPOT)
            </p>
            <DonutChart percentage={51.3} />

            <p className="font-mono text-base 3xl:text-lg text-white/70 leading-relaxed">
              of people could correctly identify obvious bias with emotional words
            </p>
          </motion.div>
        </div>

        {/* Big Takeaway */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-accent/30 rounded-2xl p-12 text-center bg-background"
        >
          <p className="font-sans text-2xl md:text-3xl 3xl:text-4xl font-light text-white">
            People need help spotting the bias they don't realize they're missing.
          </p>
        </motion.div>
      </motion.section>

      {/* Section 3: Research Process */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl 3xl:text-6xl font-light mb-6">How We Figured This Out</h2>
        <p className="font-mono text-lg 3xl:text-xl text-white/80 mb-16 max-w-4xl">
          We used four steps to understand the problem and design Ana:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              step: "01",
              title: "Foundation Research",
              points: [
                "Studied similar apps and read academic research",
                "Learned about how people think and what the market looks like",
              ],
            },
            {
              step: "02",
              title: "Understanding Users",
              points: [
                "Talked to people one-on-one about their news habits",
                "Asked surveys to learn what makes them frustrated",
              ],
            },
            {
              step: "03",
              title: "AI Development",
              points: [
                "Built a custom AI system that's transparent and explainable",
                "Tested it multiple times to make sure it works",
              ],
            },
            {
              step: "04",
              title: "Design & Testing",
              points: [
                "Made simple sketches first",
                "Had other designers give feedback",
                "Tested with real users and fixed problems",
              ],
            },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-white/10 rounded-xl p-6 bg-background border-none pl-0"
            >
              <h3 className="font-sans 3xl:text-2xl font-medium mb-4 text-2xl">{item.title}</h3>
              <ul className="space-y-2">
                {item.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="font-mono text-sm 3xl:text-base text-white/60">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section 4: Market Research */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl 3xl:text-6xl font-light mb-6">Market Research & Gaps</h2>
        <p className="font-mono text-lg 3xl:text-xl text-white/80 mb-16 max-w-4xl">
          Other news apps exist but none do everything Ana does.
        </p>

        {/* Competitor Comparison Table */}
        <div className="overflow-x-auto mb-16">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/20">
                <th className="font-mono 3xl:text-base text-left py-4 pr-8 text-foreground text-lg">Feature</th>
                <th className="font-mono 3xl:text-base text-center py-4 px-4 text-foreground text-lg">Ground News</th>
                <th className="font-mono 3xl:text-base text-center py-4 px-4 text-foreground text-lg">AllSides</th>
                <th className="font-mono 3xl:text-base text-center py-4 px-4 text-foreground text-lg">TIMINO</th>
                <th className="font-mono 3xl:text-base text-center py-4 px-4 text-accent text-lg">Ana</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Different Perspectives", ground: true, all: true, timino: true, ana: true },
                { feature: "Bias Checkers", ground: true, all: true, timino: false, ana: true },
                { feature: "Community Rating", ground: false, all: true, timino: true, ana: true },
                { feature: "AI-Powered Micro-Lessons", ground: false, all: false, timino: false, ana: true },
                { feature: "User Fake News Reporting", ground: false, all: false, timino: false, ana: true },
                { feature: "Interactive Bias Slider", ground: false, all: false, timino: false, ana: true },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/10">
                  <td className="font-mono text-sm 3xl:text-base py-4 pr-8 text-white/80">{row.feature}</td>
                  <td className="text-center py-4 px-4">
                    {row.ground ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-white/30 mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {row.all ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-white/30 mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {row.timino ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-white/30 mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {row.ana ? (
                      <Check className="w-5 h-5 text-accent mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-white/30 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Academic Research */}
      </motion.section>

      {/* Section 5: Solution - Ana */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl 3xl:text-6xl font-light mb-6">What is Ana? </h2>
        <p className="font-mono text-lg 3xl:text-xl text-white/80 mb-16 max-w-4xl">
          Ana is a smart tool designed to help you think critically about news.
        </p>

        <div className="space-y-16">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center justify-between">
            <div>
              <h3 className="font-sans text-3xl md:text-4xl 3xl:text-5xl font-light mb-4">Analyzes News for Bias</h3>
              <ul className="space-y-2 font-mono text-base 3xl:text-lg text-white/70 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  Copy a link or article
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  Ana breaks down: Main points, political lean, source trustworthiness
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  Shows you left-leaning, right-leaning, or center bias
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden flex items-center justify-center h-[400px] md:h-[500px] bg-transparent">
              <video
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MainFlow-HWtszrwi0gTdRD7h1kA7MEcrMczkoc.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-auto object-contain rounded-3xl"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden order-2 md:order-1 flex items-center justify-center h-[400px] md:h-[500px]">
              <Image
                src="/ana/methodology.png"
                alt="Ana Methodology Screen"
                width={800}
                height={500}
                className="h-full w-auto object-contain bg-background"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-sans text-3xl md:text-4xl 3xl:text-5xl font-light mb-4">Teaches You About Bias</h3>
              <p className="font-mono text-base 3xl:text-lg text-white/70 leading-relaxed">
                Teaches users about the framework of our bias analysis through interactive lessons.
              </p>
            </div>
          </div>

          {/* Feature 3 & 4 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-sans text-3xl md:text-4xl 3xl:text-5xl font-light mb-4">News For You</h3>
              <p className="font-mono text-base 3xl:text-lg text-white/70 leading-relaxed">
                A personalized page with balanced news tailored to you.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden flex items-center justify-center h-[400px] md:h-[500px] bg-background">
              <video
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NFYPage-DTCATyqcWoYdjX3D3qZRsfC7TyxYie.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-auto object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 6: Low-Fidelity Wireframes */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl 3xl:text-6xl font-light mb-6">Starting Simple</h2>
        <p className="font-mono text-lg 3xl:text-xl text-white/80 mb-16 max-w-4xl">
          We started with simple lo-fi wireframes and asked for feedback.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border border-white/10 rounded-xl p-6 bg-background border-none pl-0">
            <p className="font-mono 3xl:text-sm tracking-widest text-green-500 mb-4 text-lg">WHAT WORKED WELL</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="font-mono text-base 3xl:text-lg text-white/70">
                  The core idea was strong and made sense
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="font-mono text-base 3xl:text-lg text-white/70">
                  The welcome/onboarding steps were easy to follow
                </span>
              </li>
            </ul>
          </div>
          <div className="border border-white/10 rounded-xl p-6 bg-background border-none">
            <p className="font-mono 3xl:text-sm tracking-widest text-red-500 mb-4 text-lg">WHAT NEEDED FIXING</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="font-mono text-base 3xl:text-lg text-white/70">
                  Design looked inconsistent (things didn't match)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="font-mono text-base 3xl:text-lg text-white/70">Terms weren't clear</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lo-fi mockups placeholder */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-[400px] md:h-[500px] flex items-center justify-center">
            <Image
              src="/ana/lofi-bias.png"
              alt="Lo-fi wireframe for bias analysis"
              width={600}
              height={500}
              className="h-full w-auto object-contain rounded-xl"
            />
          </div>
          <div className="h-[400px] md:h-[500px] flex items-center justify-center">
            <Image
              src="/ana/lofi-NFY.png"
              alt="Lo-fi wireframe for News For You"
              width={600}
              height={500}
              className="h-full w-auto object-contain rounded-xl"
            />
          </div>
        </div>
      </motion.section>

      {/* Section 7: Mid-Fidelity Prototype */}

      {/* Section 8: Bias Slider Evolution */}

      {/* Section 9: Testing & Fixing */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl 3xl:text-6xl font-light mb-6">Finding and Fixing Problems</h2>
        <p className="font-mono text-lg 3xl:text-xl text-white/80 mb-16 max-w-4xl">
          For the final round of testing with real users and we found usability problems, then fixed them.
        </p>

        <div className="space-y-8 mb-12">
          {[
            {
              problem: "Main Points Were Hard to Find",
              description: "Users had to scroll down to see the most important information",
              fix: "We moved 'Main Takeaways' to the top so it shows immediately. We collapsed (hid) the long summary below.",
            },
            {
              problem: "Buttons Weren't Clear",
              description: "Users didn't know what buttons did",
              fix: "We added boxes around buttons and bigger icons so they're obvious.",
            },
            {
              problem: "Users Wanted to Share Parts",
              description: "People wanted to share just one section of the report, not the whole thing",
              fix: "We added share buttons next to each section so they can pick what to share.",
            },
          ].map((item, i) => (
            <div key={i} className="border border-white/10 rounded-xl p-8 border-none bg-background pl-0">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-sans 3xl:text-2xl font-medium mb-2 text-2xl">{item.problem}</h3>
                  <p className="font-mono text-base 3xl:text-lg text-white/60">{item.description}</p>
                </div>
                <div>
                  <p className="font-mono 3xl:text-sm tracking-widest text-green-500 mb-2 text-lg">FIX</p>
                  <p className="font-mono text-base 3xl:text-lg text-white/70">{item.fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="font-mono text-lg 3xl:text-xl text-white/80 mb-8">
          After applying all the fixes, these were the main screens of Ana:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { src: "/ana/Login.png", alt: "Ana Login" },
            { src: "/ana/home-page.png", alt: "Ana Home Page" },
            { src: "/ana/bias-analysis-report-page.png", alt: "Bias Analysis Report Page" },
            { src: "/ana/NFY-4.png", alt: "News For You Page" },
            { src: "/ana/Discussions.png", alt: "Discussions Page" },
            { src: "/ana/Methology-keyword.png", alt: "Methodology Keyword" },
          ].map((img, i) => (
            <div key={i} className="h-[400px] md:h-[500px] flex items-center justify-center">
              <Image
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                width={400}
                height={600}
                className="h-full w-auto object-contain rounded-xl"
              />
            </div>
          ))}
        </div>
      </motion.section>

      {/* Section 10: AI vs Human Analysis */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl 3xl:text-6xl font-light mb-6">AI vs. Human Analysis Speedrun</h2>
        <p className="font-mono text-lg 3xl:text-xl text-white/80 mb-16 max-w-4xl">
          We compared how humans analyze bias vs. how AI analyzes it.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border border-red-500/30 rounded-xl p-8 bg-background border-none pl-0">
            <p className="font-mono 3xl:text-sm tracking-widest text-red-500 mb-6 text-lg">WHAT HUMANS DO WRONG</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="font-mono text-base 3xl:text-lg text-white/70">
                  Focus on emotional words like "bloodbath"
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="font-mono text-base 3xl:text-lg text-white/70">
                  Get distracted by feelings instead of patterns
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="font-mono text-base 3xl:text-lg text-white/70">Miss the systematic problems</span>
              </li>
            </ul>
          </div>
          <div className="border border-green-500/30 rounded-xl p-8 bg-background border-none pl-0">
            <p className="font-mono 3xl:text-sm tracking-widest text-green-500 mb-6 text-lg">WHAT AI DOES BETTER</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="font-mono text-base 3xl:text-lg text-white/70">
                  Looks for specific types of bias: "spin" and "statement bias"
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="font-mono text-base 3xl:text-lg text-white/70">Checks every article the same way</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="font-mono text-base 3xl:text-lg text-white/70">
                  Systematic, consistent, and doesn't get emotional
                </span>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-accent/30 rounded-2xl p-12 text-center bg-background"
        >
          <p className="font-sans text-2xl md:text-3xl 3xl:text-4xl font-light text-white">
            We need both! People plus AI working together is better than either one alone.
          </p>
        </motion.div>
      </motion.section>

      {/* Section 11: Prompt Engineering */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl 3xl:text-6xl font-light mb-6">How Ana Actually Works</h2>
        <p className="font-mono text-lg 3xl:text-xl text-white/80 mb-16 max-w-4xl">
          Ana&apos;s analysis isn't a black box. Here's exactly how it works across 5 key pillars:
        </p>

        <div className="space-y-12">
          {/* Pillar 1: Source Credibility - 5W Method */}
          <div className="border border-white/10 rounded-xl p-8 bg-background border-none pl-0">
            <p className="font-mono 3xl:text-base tracking-widest text-accent mb-6 text-lg">
              PILLAR 1: SOURCE CREDIBILITY ASSESSMENT
            </p>
            <h3 className="font-sans text-2xl 3xl:text-3xl font-medium mb-6">The 5W Method</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  w: "WHO",
                  question: "Who is the author?",
                  detail: "Evaluate credentials, qualifications, and affiliations",
                },
                {
                  w: "WHAT",
                  question: "What kind of information?",
                  detail: "Assess relevance, appropriateness, and depth",
                },
                {
                  w: "WHERE",
                  question: "Where does it come from?",
                  detail: "Examine publisher reputation and citation practices",
                },
                {
                  w: "WHY",
                  question: "Why does it exist?",
                  detail: "Analyze purpose, potential bias, and intended audience",
                },
                {
                  w: "HOW",
                  question: "How does it compare?",
                  detail: "Compare with other sources reporting on the same topic",
                },
              ].map((item) => (
                <div key={item.w} className="text-center">
                  <span className="font-sans text-4xl 3xl:text-5xl font-bold text-accent block mb-3">{item.w}</span>
                  <p className="font-mono text-sm 3xl:text-base text-white font-medium mb-2">{item.question}</p>
                  <p className="font-mono text-xs 3xl:text-sm text-white/60">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pillar 2: Political Spectrum - MBFC Methodology */}
          <div className="border border-white/10 rounded-xl p-8 bg-background border-none pl-0">
            <p className="font-mono 3xl:text-base tracking-widest text-accent mb-6 text-lg">
              PILLAR 2: POLITICAL SPECTRUM PLACEMENT
            </p>
            <h3 className="font-sans text-2xl 3xl:text-3xl font-medium mb-6">MBFC Methodology</h3>
            <p className="font-mono text-base 3xl:text-lg text-white/70 mb-8">
              Calculate bias using a weighted composite score from four categories:
            </p>

            <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-2 lg:gap-3 mb-10">
              {[
                { category: "Economic", weight: "35%", scale: "State (-10) to Free (+10)" },
                { category: "Social", weight: "35%", scale: "Progressive (-10) to Traditional (+10)" },
                { category: "News", weight: "15%", scale: "Left (-10) to Right (+10)" },
                { category: "Editorial", weight: "15%", scale: "Left (-10) to Right (+10)" },
              ].map((item, index) => (
                <div key={item.category} className="flex items-center gap-2 lg:gap-3">
                  <div className="text-center min-w-[80px] lg:min-w-[120px]">
                    <span className="font-sans text-2xl lg:text-3xl 3xl:text-4xl font-bold text-accent block mb-1">
                      {item.weight}
                    </span>
                    <p className="font-mono text-xs lg:text-sm 3xl:text-base text-white font-medium mb-1">
                      {item.category}
                    </p>
                    <p className="font-mono text-[10px] lg:text-xs 3xl:text-sm text-white/50">{item.scale}</p>
                  </div>
                  {index < 3 && (
                    <span className="font-sans text-2xl lg:text-3xl 3xl:text-4xl font-bold text-white/60">+</span>
                  )}
                </div>
              ))}
              <span className="font-sans text-2xl lg:text-3xl 3xl:text-4xl font-bold text-white/60">=</span>
              <div className="text-center px-3 py-2 border border-accent/30 rounded-lg bg-background min-w-[100px] lg:min-w-[140px]">
                <span className="font-mono 3xl:text-sm tracking-widest text-accent block text-sm">
                  POSITION ON SCALE
                </span>
              </div>
            </div>

            {/* Bias Scale */}
            <div className="rounded-lg p-6 bg-background">
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { label: "Extreme Left", range: "-10 to -8.0", color: "bg-blue-900" },
                  { label: "Far Left", range: "-7.9 to -7.0", color: "bg-blue-700" },
                  { label: "Left", range: "-6.9 to -5.0", color: "bg-blue-500" },
                  { label: "Left-Center", range: "-4.9 to -2.0", color: "bg-blue-300" },
                  { label: "Least Biased", range: "-1.9 to +1.9", color: "bg-accent" },
                  { label: "Right-Center", range: "+2.0 to +4.9", color: "bg-red-300" },
                  { label: "Right", range: "+5.0 to +6.9", color: "bg-red-500" },
                  { label: "Far Right", range: "+7.0 to +7.9", color: "bg-red-700" },
                  { label: "Extreme Right", range: "+8.0 to +10", color: "bg-red-900" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <span className={`inline-block w-4 h-4 rounded-full ${item.color} mb-1`} />
                    <p className="font-mono 3xl:text-sm text-white/80 text-sm">{item.label}</p>
                    <p className="font-mono 3xl:text-xs text-white/40 text-xs">{item.range}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pillar 3: Factual Reporting Assessment */}
          <div className="border border-white/10 rounded-xl p-8 bg-background border-none pl-0">
            <p className="font-mono 3xl:text-base tracking-widest text-accent mb-6 text-lg">
              PILLAR 3: FACTUAL REPORTING ASSESSMENT
            </p>
            <h3 className="font-sans text-2xl 3xl:text-3xl font-medium mb-6">Weighted Scoring System</h3>

            <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-2 lg:gap-3 mb-8">
              {[
                {
                  factor: "Failed Fact Checks",
                  weight: "40%",
                  detail: "Score 0-10 based on failed fact checks",
                },
                { factor: "Sourcing", weight: "25%", detail: "Score 0-10 based on source quality" },
                {
                  factor: "Transparency",
                  weight: "25%",
                  detail: "Score 0-10 based on disclosure",
                },
                {
                  factor: "One-Sidedness",
                  weight: "10%",
                  detail: "Score 0-10 based on balance",
                },
              ].map((item, index) => (
                <div key={item.factor} className="flex items-center gap-2 lg:gap-3">
                  <div className="text-center p-2 lg:p-3 min-w-[100px] lg:min-w-[140px]">
                    <span className="font-sans text-2xl lg:text-3xl 3xl:text-4xl font-bold text-accent block mb-1">
                      {item.weight}
                    </span>
                    <p className="font-mono text-xs lg:text-sm 3xl:text-base text-white font-medium mb-1">
                      {item.factor}
                    </p>
                    <p className="font-mono text-[10px] lg:text-xs 3xl:text-sm text-white/50">{item.detail}</p>
                  </div>
                  {index < 3 && (
                    <span className="font-sans text-2xl lg:text-3xl 3xl:text-4xl font-bold text-white/60">+</span>
                  )}
                </div>
              ))}
              <span className="font-sans text-2xl lg:text-3xl 3xl:text-4xl font-bold text-white/60">=</span>
              <div className="text-center p-2 lg:p-3 border border-accent/30 rounded-lg bg-background min-w-[100px] lg:min-w-[120px]">
                <span className="font-mono text-xs lg:text-sm 3xl:text-base tracking-widest text-accent block">
                  FINAL RATING
                </span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-3">
              {[
                { rating: "Very High", points: "9-10", color: "bg-green-500/20 text-green-400" },
                { rating: "High", points: "7-8", color: "bg-green-500/10 text-green-300" },
                { rating: "Mostly Factual", points: "5-6", color: "bg-white/10 text-white/60" },
                { rating: "Mixed", points: "3-4", color: "bg-orange-500/20 text-orange-400" },
                { rating: "Low", points: "0-2", color: "bg-red-500/20 text-red-400" },
              ].map((item, index, arr) => (
                <div key={item.rating} className="flex items-center gap-3">
                  <div className={`font-mono text-sm px-4 py-2 rounded-full ${item.color} text-center`}>
                    <span className="font-bold">{item.points}</span>
                    <span className="mx-2">•</span>
                    <span>{item.rating}</span>
                  </div>
                  {index < arr.length - 1 && <span className="font-sans text-xl font-bold text-white/40">→</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Pillar 4 & 5 Row */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pillar 4: Bias Pattern Recognition */}
            <div className="border border-white/10 rounded-xl p-8 bg-background border-none pl-0">
              <p className="font-mono 3xl:text-base tracking-widest text-accent mb-6 text-lg">
                PILLAR 4: BIAS PATTERN RECOGNITION
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span className="font-mono text-base 3xl:text-lg text-white/70">
                    Identify specific cognitive biases present
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span className="font-mono text-base 3xl:text-lg text-white/70">
                    Highlight logical fallacies (straw man arguments, etc.)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span className="font-mono text-base 3xl:text-lg text-white/70">
                    Detect framing devices and loaded language
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span className="font-mono text-base 3xl:text-lg text-white/70">
                    Identify selective presentation of facts
                  </span>
                </li>
              </ul>
            </div>

            {/* Pillar 5: Content Structure Analysis */}
            <div className="border border-white/10 rounded-xl p-8 bg-background border-none px-8 pl-0">
              <p className="font-mono 3xl:text-base tracking-widest text-accent mb-6 text-lg">
                PILLAR 5: CONTENT STRUCTURE ANALYSIS
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span className="font-mono text-base 3xl:text-lg text-white/70">
                    Distinguish between fact-based reporting and opinion
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span className="font-mono text-base 3xl:text-lg text-white/70">
                    Evaluate headline-to-content consistency
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span className="font-mono text-base 3xl:text-lg text-white/70">
                    Assess source diversity and representation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span className="font-mono text-base 3xl:text-lg text-white/70">
                    Identify potential omissions of key information
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Output Format */}
          <div className="border border-accent/30 rounded-xl p-8 bg-background border-none pl-0">
            <h3 className="font-sans 3xl:text-3xl font-medium mb-6 text-3xl">What Ana Delivers for Every Article</h3>
            <ul className="space-y-3 md:columns-2 lg:columns-4 gap-8">
              {[
                "Summary (2-3 sentences)",
                "Source Credibility Rating",
                "Political Bias Score & Rating",
                "Factuality Rating",
                "Bias Patterns Detected",
                "Balance Check & Omissions",
                "Alternative Framing",
                "Recommended Sources",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 break-inside-avoid">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="font-mono text-sm 3xl:text-base text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Section 12: Reflection */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl 3xl:text-6xl font-light mb-6">What Went Well & What Didn't</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border border-green-500/30 rounded-xl p-8 bg-background border-none pl-0">
            <p className="font-mono 3xl:text-sm tracking-widest text-green-500 mb-6 text-lg">WHAT WENT WELL</p>
            <div className="space-y-6">
              <div>
                <h3 className="font-sans 3xl:text-xl font-medium mb-2 text-2xl">Listening to Users</h3>
                <p className="font-mono text-base 3xl:text-lg text-white/60">
                  Found real problems people have. Discovered they miss subtle bias.
                </p>
              </div>
              <div>
                <h3 className="font-sans 3xl:text-xl font-medium mb-2 text-2xl">Fixing Problems Quickly</h3>
                <p className="font-mono text-base 3xl:text-lg text-white/60">
                  Tested with users, found problems, and fixed them. The app got much better.
                </p>
              </div>
              <div>
                <h3 className="font-sans 3xl:text-xl font-medium mb-2 text-2xl">Transparent AI</h3>
                <p className="font-mono text-base 3xl:text-lg text-white/60">
                  Built AI that explains its decisions. It's not a mystery black box.
                </p>
              </div>
            </div>
          </div>
          <div className="border border-red-500/30 rounded-xl p-8 bg-background border-none pl-0">
            <p className="font-mono 3xl:text-sm tracking-widest text-red-500 mb-6 text-lg">LIMITATIONS</p>
            <div className="space-y-6">
              <div>
                <h3 className="font-sans 3xl:text-xl font-medium mb-2 text-2xl">Limited Diversity in Testing</h3>
                <p className="font-mono text-base 3xl:text-lg text-white/60">
                  68% of test users were left-leaning, ages 20-34. May not represent everyone.
                </p>
              </div>
              <div>
                <h3 className="font-sans 3xl:text-xl font-medium mb-2 text-2xl">AI Can Still Be Confusing</h3>
                <p className="font-mono text-base 3xl:text-lg text-white/60">
                  For complicated cases, AI struggles to explain why something is biased.
                </p>
              </div>
              <div>
                <h3 className="font-sans 3xl:text-xl font-medium mb-2 text-2xl">No Long-Term Testing</h3>
                <p className="font-mono text-base 3xl:text-lg text-white/60">
                  Only tested for 12 weeks. Don't know if it actually helps people learn over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 13: Future Plans */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h2 className="font-sans text-4xl md:text-5xl 3xl:text-6xl font-light mb-6">What Comes Next</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              plan: "01",
              title: "Make AI Smarter at Explaining",
              points: [
                "Improve explanations for why something is biased",
                "Use advanced AI techniques",
                "Go beyond just left vs. right labels",
              ],
            },
            {
              plan: "02",
              title: "Test with More Diverse People",
              points: [
                "Include conservative and moderate perspectives",
                "Test with different age groups",
                "Make sure Ana works for everyone",
              ],
            },
            {
              plan: "03",
              title: "Let Users Help the AI Learn",
              points: [
                "Let people flag incorrect bias ratings",
                "Collect community feedback",
                "Build trust through transparency",
              ],
            },
          ].map((item) => (
            <motion.div
              key={item.plan}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-white/10 rounded-xl p-6 bg-background border-none pl-0"
            >
              <h3 className="font-sans 3xl:text-2xl font-medium mb-4 text-2xl">{item.title}</h3>
              <ul className="space-y-2">
                {item.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="font-mono text-sm 3xl:text-base text-white/60">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
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
      <ScrollToTop />
    </article>
  )
}
