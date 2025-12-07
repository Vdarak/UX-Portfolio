"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const [time, setTime] = useState("")
  const [month, setMonth] = useState("")
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      const seconds = now.getSeconds().toString().padStart(2, "0")
      const milliseconds = now.getMilliseconds().toString().padStart(3, "0")
      setTime(`${hours}:${minutes}:${seconds}.${milliseconds}`)
      setMonth(now.toLocaleString("en-US", { month: "short" }))
    }

    updateTime()
    const interval = setInterval(updateTime, 10)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer id="contact" className="relative">
      {/* Main CTA */}
      <motion.a
        href="mailto:vdarak.infinity@gmail.com"
        data-cursor-hover
        className="relative block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Content */}
        <div className="relative py-16 md:py-24 px-8 md:px-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Text and Arrow in same row */}
            <div className="flex items-center gap-4 md:gap-8">
              {/* Text container */}
              <div className="relative pr-4">
                <h2 className="font-sans text-4xl md:text-6xl lg:text-8xl font-light tracking-tight whitespace-nowrap text-white">
                  Let's <span className="italic">Collaborate</span>
                </h2>
                {/* Orange text overlay that slides up */}
                <motion.h2
                  className="absolute top-0 left-0 pr-4 font-sans text-4xl md:text-6xl lg:text-8xl font-light tracking-tight whitespace-nowrap text-accent"
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  animate={{ clipPath: isHovered ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)" }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Let's <span className="italic">Collaborate</span>
                </motion.h2>
              </div>

              {/* Arrow container */}
              <div className="relative flex-shrink-0">
                <motion.div animate={{ rotate: isHovered ? 45 : 0 }} transition={{ duration: 0.3 }}>
                  <ArrowUpRight className="w-8 h-8 md:w-16 md:h-16 text-white" />
                </motion.div>
                {/* Orange arrow overlay that slides up */}
                <motion.div
                  className="absolute top-0 left-0"
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  animate={{
                    clipPath: isHovered ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)",
                    rotate: isHovered ? 45 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <ArrowUpRight className="w-8 h-8 md:w-16 md:h-16 text-accent" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.a>

      {/* Footer Info */}
      <div className="px-8 md:px-12 py-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Local Time */}
          <div className="font-mono text-xs tracking-widest text-white/60">
            <span className="mr-2 text-slate-300">LOCAL TIME</span>
            <span className="text-white tabular-nums">{time}</span>
          </div>

          {/* Links - Resume now links to /resume page */}
          <div className="flex gap-8">
            <Link
              href="/resume"
              data-cursor-hover
              className="font-mono text-xs tracking-widest hover:text-white transition-colors duration-300 text-white"
            >
              Resume
            </Link>
            {["LinkedIn", "GitHub", "Twitter"].map((link) => (
              <a
                key={link}
                href="#"
                data-cursor-hover
                className="font-mono text-xs tracking-widest hover:text-white transition-colors duration-300 text-foreground"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-4 font-mono text-xs tracking-widest text-foreground">
            <span>
              © {month} {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
