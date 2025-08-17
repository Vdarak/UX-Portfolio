"use client"
import { FlowingText } from "@/components/flowing-text"
import { PixelGridExhibit } from "@/components/pixel-grid"
import Footer from "@/components/footer"
import { RefinedButton } from "@/components/refined-button"
import { RefinedMagneticEffect } from "@/components/refined-magnetic-effect"
import { Download, ArrowRight, Briefcase, Mail } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem, Parallax } from "@/components/scroll-animations"
import RefinedProjectCard from "@/components/refined-project-card"
import Image from "next/image"
import { useMousePosition } from "@/hooks/use-mouse-position"
import { useRef } from "react"
import { motion } from "framer-motion"

export default function Home() {
  const heroSectionRef = useRef<HTMLElement>(null)
  const { x, y } = useMousePosition()

  return (
    <main className="min-h-screen bg-background pt-16">
      
      {/* Hero Section */}
      <section 
        ref={heroSectionRef}
        className="container relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 mx-auto space-y-8 md:space-y-12 md:px-6 overflow-hidden pb-16 md:pb-8"
      >
        {/* Subtle background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 opacity-60" />
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 justify-between items-center w-full">
          {/* Text content */}
          <div className="lg:col-span-8 max-w-4xl space-y-4 text-center lg:text-left">
              <FadeIn direction="right" delay={0.4}>
                <h1 className="text-3xl font-light tracking-tight md:text-4xl inline">
                  Namaste 🙏 {'->'} I'm Vedant Darak
                </h1>
              </FadeIn>
              <FadeIn direction="right" delay={0.4}>
                <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
                <FlowingText text="Thoughtful" className="inline" /> UX, designed in cycles
                </h2>
              </FadeIn>
              <FadeIn direction="right" delay={0.4}>
                <p className="text-xl text-neutral-600 dark:text-neutral-300 relative overflow-hidden">
                  My cyclical design process — create with intention, preserve with devotion, transform with courage — ensures your product stays innovative without accruing chaos.
                </p>
              </FadeIn>
          </div>

          {/* Creative Coding Exhibit */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <FadeIn direction="left" delay={0.4}>
              <RefinedMagneticEffect intensity={0.08} range={100}>
                <PixelGridExhibit 
                  width={375}
                  height={375}
                />
              </RefinedMagneticEffect>
            </FadeIn>
          </div>
        </div>

        {/* Enhanced CTA buttons - Using direct motion animation instead of FadeIn */}
        <motion.div
          className="flex flex-col items-center gap-4 sm:flex-row z-10 mb-24 md:mb-32"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, // Adjusted for smoother entrance
            delay: 0.4, // Ensures it appears after other hero elements
            ease: [0.21, 0.47, 0.32, 0.98] // Matches your existing animation easing
          }}
        >
          <RefinedButton 
            size="lg" 
            intensity={0.2}
            className="interactive group"
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              })
            }}  
          >
            <span className="flex items-center">
              View my work
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 ease-out group-hover:translate-x-2" />
            </span>
          </RefinedButton>

          <RefinedButton 
            variant="outline" 
            size="lg" 
            intensity={0.2}
            className="interactive"
            onClick={() => {
              // Open default mail client to send email
              window.location.href = 'mailto:hello@vedantdarak.design'
            }}
          >
            <span>Get in touch</span>
          </RefinedButton>
        </motion.div>

        {/* Floating navigation - replacing profile image */}
        <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 hidden lg:block">
          {/* Intentionally left empty as requested */}
        </div>
      </section>

      {/* Projects Hero Section - Simplified */}
      
        <section id="projects" className="w-full pt-16 lg:-mb-32 md:-mb-32 sm:mb-0 bg-secondary">
          <FadeIn delay={0.4}>
            <div className="container px-4 mx-auto md:px-6 text-center">
              <div className="flex flex-col items-center justify-center">
                <span className="flex items-center gap-2 text-muted-foreground text-base font-medium mb-2">
                  <Briefcase className="w-6 h-6" />
                  Projects
              </span>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-[1.15] overflow-visible pb-1">
                Selected <FlowingText text="Projects" className="inline align-baseline leading-[1.15]" />
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                A collection of UX projects that showcase my approach to solving complex problems through research-driven design and user-centered thinking.
              </p>
            </div>
          </div>
         </FadeIn>
        </section>
      
      {/* Projects Grid */}
      <section id="projects-grid" className="bg-secondary">
        <div className="container px-4 mx-auto md:px-6 -mb-16">
          <div className="scale-[0.87] origin-center">
            <StaggerContainer className="grid gap-20 lg:grid-cols-1" staggerDelay={0.2}>
              <StaggerItem>
                <FadeIn delay={0.3}>
                  <RefinedProjectCard
                    title="Ana: AI-Powered News Aggregator"
                    description="An AI system that detects media bias and enhances media literacy for Gen Z users through explainable AI and educational tools."
                    image="/images/ana.png"
                    hoverImage="/images/ANA/ana-hero.png" // Added hover image
                  tags={["AI Ethics", "Media Literacy", "Gen Z Users", "UX Research"]}
                  href="/projects/media-bias-ai"
                />
                </FadeIn>
              </StaggerItem>
              <StaggerItem>
                <FadeIn delay={0.3}>
                  <RefinedProjectCard
                    title="Understanding Creative Block"
                    description="Research study exploring how creative professionals experience and manage creative blocks, with design implications for supporting technology."
                    image="/images/creativeblock-dark.png"
                    hoverImage="/images/logo.png" // Added hover image
                    tags={["HCI Research", "Mixed Methods", "User Interviews", "Persona Development"]}
                    href="/projects/understanding-creative-block"
                  />
                </FadeIn>
              </StaggerItem>
              <StaggerItem>
                <FadeIn delay={0.3}>
                  <RefinedProjectCard
                    title="BackMarket IA Redesign"
                    description="A deep dive into restructuring the information architecture of a leading refurbished electronics marketplace to enhance usability and content clarity."
                    image="/images/backmarket-dark.png"
                    hoverImage="/images/logo.png" // Added hover image
                    tags={["Information Architecture", "Content Strategy", "UX Research"]}
                    href="/projects/backmarket-ia-redesign"
                  />
                </FadeIn>
              </StaggerItem>
              <StaggerItem>
                <FadeIn delay={0.3}>
                  <RefinedProjectCard
                      title="Reducing Alcohol Consumption"
                      description="Supporting healthier relationships with alcohol through research-driven design to make mindful social choices more visible and accessible."
                      image="/images/alcohol.png"
                      hoverImage="/images/logo.png" // Added hover image
                      tags={["UX Research", "Mixed Methods", "Behavioral Design"]}
                      href="/projects/reducing-alcohol"
                    />
                </FadeIn>
              </StaggerItem>
              <StaggerItem>
                <FadeIn delay={0.3}>
                  <RefinedProjectCard
                    title="Finance Dashboard"
                    description="A comprehensive financial management dashboard for personal and small business users."
                    image="/images/gamma.png"
                    hoverImage="/images/logo.png" // Added hover image
                    tags={["Data Visualization", "User Testing", "Interaction Design"]}
                    href="/projects/finance-dashboard"
                  />
                </FadeIn>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white dark:bg-black">
        <div className="container px-5 mx-auto md:px-12">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <FadeIn delay={0.5} direction="left">
              <Parallax offset={-30}>
                <RefinedMagneticEffect intensity={0.08} range={150}>
                  <div className="relative overflow-hidden rounded-xl aspect-[2/3] scale-[0.72] origin-center">
                    <Image
                      src="/images/vedant-portrait.png"
                      alt="Portrait of Vedant Darak, UX Designer"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </RefinedMagneticEffect>
              </Parallax>
            </FadeIn>
            <FadeIn delay={0.5} direction="right">
              <div className="space-y-6 px-2">
                <h2 className="text-3xl font-medium tracking-tight md:text-4xl">About Me</h2>
                <p className="text-xl text-neutral-600 dark:text-neutral-300">
                  I'm a UX designer with 1 year of experience creating user-centered digital products that solve real
                  problems.
                </p>
                <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                  <StaggerItem>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      My approach combines empathy-driven research with strategic design thinking to create experiences
                      that are both functional and delightful. I believe in designing with intention, where every
                      element serves a purpose.
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      With a background in cognitive psychology and human-computer interaction, I bring a unique
                      perspective to understanding user behavior and designing solutions that feel intuitive and
                      natural.
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      When I'm not designing, you can find me hiking, reading about design psychology, or experimenting
                      with ceramics.
                    </p>
                  </StaggerItem>
                </StaggerContainer>
                <FadeIn delay={0.4}>
                  <div className="flex gap-3">
                    <RefinedButton intensity={0.2} size="md" asChild>
                      <a 
                        href="/Vedant.docx" 
                        download="Vedant-Resume"
                        className="flex items-center group"
                      >
                        <Download className="w-4 h-4 mr-2 transition-transform duration-300 ease-out group-hover:scale-110" />
                        Download Resume
                      </a>
                    </RefinedButton>
                    <RefinedButton variant="outline" intensity={0.2} size="md" asChild>
                      <a
                        href="/poetry"
                        className="flex items-center group"
                      >
                        View Poetry
                      </a>
                    </RefinedButton>
                  </div>
                </FadeIn>
                {/* Skills & Expertise 
                <FadeIn delay={0.6}>
                  <div className="mt-10 space-y-8">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-medium">Skills &amp; Confidence Levels</h3>
                      <div className="flex items-center">
                        <span className="text-xs text-muted-foreground">Low</span>
                        <div className="w-24 h-1 mx-2 bg-gradient-to-r from-muted/30 to-primary rounded-full"></div>
                        <span className="text-xs text-muted-foreground">High Confidence</span>
                      </div>
                    </div>
                    
                    {/* T-shaped visualization - Research strong, breadth across other areas */}
                    {/* <div>
                      <div className="grid gap-8">
                        <div className="space-y-4">
                          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Core Strengths</h4>
                          {[
                            { label: 'User Research', pct: '95%', description: 'My primary expertise' },
                            { label: 'Agentic AI', pct: '98%', description: 'Advanced integration skills' },
                          ].map(({ label, pct, description }) => (
                            <div key={label} className="group">
                              <div className="flex justify-between text-xs mb-2 items-baseline">
                                <span className="font-medium">{label}</span>
                                <span className="text-xs text-muted-foreground">{description}</span>
                              </div>
                              <div className="w-full bg-neutral-200 dark:bg-neutral-700 h-2 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: pct }}
                                  transition={{ duration: 1, ease: 'easeOut' }}
                                  className="h-full rounded-full animate-subtle-gradient"
                                  style={{
                                    backgroundImage: 'linear-gradient(to right, #8b5cf6, #c084fc, #4079ff, #c084fc, #8b5cf6)',
                                    backgroundSize: '200% 100%',
                                    animationDuration: '8s',
                                    WebkitMaskImage: 'linear-gradient(to right, black 0%, black 90%, transparent 100%)',
                                    maskImage: 'linear-gradient(to right, black 0%, black 90%, transparent 100%)',
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="space-y-4">
                          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Design & Testing</h4>
                          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                            {[
                              { label: 'Wireframing', pct: '80%' },
                              { label: 'Prototyping', pct: '80%' },
                              { label: 'Usability Testing', pct: '80%' },
                              { label: 'Quantitative Analysis', pct: '80%' },
                            ].map(({ label, pct }) => (
                              <div key={label} className="group">
                                <div className="flex justify-between text-xs mb-2">
                                  <span className="font-medium">{label}</span>
                                </div>
                                <div className="w-full bg-neutral-200 dark:bg-neutral-700 h-1.5 rounded-full overflow-hidden">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: pct }}
                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                    className="h-full rounded-full animate-subtle-gradient"
                                    style={{
                                      backgroundImage: 'linear-gradient(to right, #8b5cf6, #c084fc, #4079ff, #c084fc, #8b5cf6)',
                                      backgroundSize: '200% 100%',
                                      animationDuration: '8s',
                                      WebkitMaskImage: 'linear-gradient(to right, black 0%, black 90%, transparent 100%)',
                                      maskImage: 'linear-gradient(to right, black 0%, black 90%, transparent 100%)',
                                    }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Supporting Skills</h4>
                          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                            {[
                              { label: 'Agile UX', pct: '60%' },
                              { label: 'Front-End Development', pct: '60%' },
                            ].map(({ label, pct }) => (
                              <div key={label} className="group">
                                <div className="flex justify-between text-xs mb-2">
                                  <span className="font-medium">{label}</span>
                                </div>
                                <div className="w-full bg-neutral-200 dark:bg-neutral-700 h-1.5 rounded-full overflow-hidden">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: pct }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                    className="h-full rounded-full animate-subtle-gradient"
                                    style={{
                                      backgroundImage: 'linear-gradient(to right, #8b5cf6, #c084fc, #4079ff, #c084fc, #8b5cf6)',
                                      backgroundSize: '200% 100%',
                                      animationDuration: '8s',
                                      WebkitMaskImage: 'linear-gradient(to right, black 0%, black 90%, transparent 100%)',
                                      maskImage: 'linear-gradient(to right, black 0%, black 90%, transparent 100%)',
                                    }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
                */}
              </div>
            </FadeIn>
          </div>
        </div>
        {/* Centered philosophical quote below image and skills */}
        <FadeIn delay={0.5}>
          <blockquote className="mx-auto max-w-2xl text-2xl md:text-3xl italic text-center relative mt-12">
            <div className="absolute -left-6 -top-4 text-4xl md:text-6xl text-primary/10 font-serif">"</div>
            <div className="absolute -right-6 -bottom-4 text-4xl md:text-6xl text-primary/10 font-serif rotate-180">"</div>
            <p className="relative z-10 px-6">A philosopher who only does philosophy is a bad philosopher</p>
          </blockquote>
        </FadeIn>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container px-4 mx-auto md:px-6">
          <FadeIn delay={0.3}>
            <div className="max-w-3xl mx-auto space-y-6 text-center">
              <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Get in Touch</h2>
              <p className="text-xl text-neutral-600 dark:text-neutral-300">
                Interested in working together? I'd love to hear about your project.
              </p>
              <div className="flex justify-center">
                <RefinedButton size="lg" intensity={0.2}>
                  <a href="mailto:hello@vedantdarak.design" className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" /> vdarak.infinity@gmail.com
                  </a>
                </RefinedButton>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </main>
  )
}
