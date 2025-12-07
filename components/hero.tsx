"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <section id="hero" ref={containerRef} className="relative h-screen w-full overflow-hidden bg-transparent">
      {/* Typography Overlay */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 h-full flex items-center justify-center p-8 md:p-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-5xl text-center"
        >
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl font-normal leading-[1.3] md:leading-[1.35] tracking-tight text-balance text-foreground">
            Hello! I'm Vedant Darak —{" "}
            <span className="text-white/80">
              I blend{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-sans text-foreground">Research</span>
                <span className="absolute left-0 right-0 top-1/2 h-[0.35em] -translate-y-1/2 bg-amber-500/40 -skew-x-2" />
              </span>
              {" + "}
              <span className="relative inline-block">
                <span className="relative z-10 font-sans text-foreground">Design</span>
                <span className="absolute left-0 right-0 top-1/2 h-[0.35em] -translate-y-1/2 bg-rose-500/40 -skew-x-2" />
              </span>
              {" + "}
              <span className="relative inline-block">
                <span className="relative z-10 font-sans text-foreground">Engineering</span>
                <span className="absolute left-0 right-0 top-1/2 h-[0.35em] -translate-y-1/2 bg-cyan-400/40 -skew-x-2" />
              </span>{" "}
              to craft intentional user experiences.
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg lg:text-xl 3xl:text-2xl font-mono tracking-wide text-foreground">
            Currently at{" "}
            <a
              href="https://cognijin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-foreground underline-offset-4 hover:text-white/80 transition-colors italic underline"
            >
              Cognijin Inc
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 3xl:w-6 3xl:h-6" />
            </a>
            , building the face of custom AI solutions across healthcare, law & entertainment.
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] 3xl:text-xs tracking-widest uppercase text-foreground">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent text-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
