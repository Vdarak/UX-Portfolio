"use client"
import { FlowingText } from "@/components/flowing-text"
import { PixelGridExhibit } from "@/components/pixel-grid"
import Footer from "@/components/footer"
import { RefinedButton } from "@/components/refined-button"
import { RefinedMagneticEffect } from "@/components/refined-magnetic-effect"
import { TiltEffect } from "@/components/tilt-effect"
import { TechBorder, AccentLine, DataLabel, DataValue } from "@/components/tech-border"
import { TextScramble } from "@/components/text-scramble"
import { MarqueeTicker, TickerItem } from "@/components/marquee-ticker"
import { Download, ArrowRight, Briefcase, Mail, Terminal, Code2, Cpu, Zap } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem, Parallax } from "@/components/scroll-animations"
import RefinedProjectCard from "@/components/refined-project-card"
import Image from "next/image"
import Link from "next/link"
import { useMousePosition } from "@/hooks/use-mouse-position"
import { useRef } from "react"
import { motion } from "framer-motion"

export default function Home() {
  const heroSectionRef = useRef<HTMLElement>(null)
  const { x, y } = useMousePosition()

  return (
    <main className="min-h-screen bg-background pt-16">
      
      {/* Status Ticker */}
      <div className="fixed top-16 left-0 right-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm">
        <MarqueeTicker speed="slow" pauseOnHover>
          <TickerItem>DESIGN_SYSTEM.V2</TickerItem>
          <TickerItem accent>INDUSTRIAL_FINTECH</TickerItem>
          <TickerItem>STATUS: ONLINE</TickerItem>
          <TickerItem accent>CYBERPUNK_AESTHETIC</TickerItem>
          <TickerItem>UX_ENGINEERING</TickerItem>
          <TickerItem accent>REACT + NEXT.JS</TickerItem>
        </MarqueeTicker>
      </div>
      
      {/* Hero Section */}
      <section 
        ref={heroSectionRef}
        className="container relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] mt-24 px-4 mx-auto space-y-8 md:space-y-12 md:px-6 overflow-hidden pb-8 md:pb-8"
      >

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 justify-between items-center w-full">
          {/* Text content */}
          <div className="lg:col-span-8 max-w-4xl space-y-6 text-left lg:text-left">
              <FadeIn direction="right" delay={0.4}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-cyber-yellow animate-pulse" />
                  <DataLabel>SYS.INIT</DataLabel>
                  <span className="font-mono text-xs text-muted-foreground">//</span>
                  <DataValue accent>VEDANT.DARAK</DataValue>
                </div>
                <h1 className="heading-xl text-foreground tracking-tight">
                  Namaste 🙏 → I'm <span className="text-cyber-yellow">Vedant</span>
                </h1>
              </FadeIn>
              <FadeIn direction="right" delay={0.5}>
                <h2 className="heading-lg tracking-tight text-foreground">
                  <span className="font-serif-accent text-cyber-yellow">Design</span> Engineer
                </h2>
              </FadeIn>
              <FadeIn direction="right" delay={0.6}>
                <TechBorder variant="notched" className="p-4 bg-card/50">
                  <p className="body-lg text-muted-foreground">
                    Create with intention, preserve with devotion, transform with courage → ensures your product stays innovative without accruing chaos.
                  </p>
                </TechBorder>
              </FadeIn>
          </div>

          {/* Creative Coding Exhibit */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <FadeIn direction="left" delay={0.4}>
              <RefinedMagneticEffect intensity={0.08} range={100}>
                <TechBorder variant="glow" className="p-1">
                  <PixelGridExhibit 
                    width={340}
                    height={340}
                  />
                </TechBorder>
              </RefinedMagneticEffect>
            </FadeIn>
          </div>
        </div>

        {/* Enhanced CTA buttons - Using FadeIn component */}
        <FadeIn delay={0.7} direction="up">
          <div className="flex flex-col items-center gap-4 sm:flex-row z-10 mb-16 md:mb-32">
        
          <RefinedButton 
            variant="cyber-filled"
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
            <span className="flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </span>
          </RefinedButton>

          <RefinedButton 
            variant="cyber" 
            size="lg" 
            intensity={0.2}
            className="interactive"
            onClick={() => {
              window.location.href = 'mailto:vdarak.infinity@gmail.com'
            }}
          >
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Get in Touch
            </span>
          </RefinedButton>
          </div>
        </FadeIn>

        {/* Tech specs display */}
        <FadeIn delay={0.8} direction="up">
          <div className="flex items-center gap-8 text-muted-foreground font-mono text-xs tracking-widest">
            <div className="flex items-center gap-2">
              <Code2 className="w-3 h-3 text-cyber-yellow" />
              <span>REACT_19</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-3 h-3 text-cyber-yellow" />
              <span>NEXT_15</span>
            </div>
            <div className="flex items-center gap-2">
              <Terminal className="w-3 h-3 text-cyber-yellow" />
              <span>TS_5</span>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Projects Hero Section */}
      <section id="projects" className="w-full pt-24 lg:-mb-32 md:-mb-32 sm:mb-0 bg-secondary border-y border-border">
        {/* Top accent line */}
        <AccentLine className="mb-12" />
        
        <FadeIn delay={0.4}>
          <div className="container px-4 mx-auto md:px-6 text-center">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-4 h-4 text-cyber-yellow" />
                <DataLabel>PORTFOLIO.PROJECTS</DataLabel>
              </div>
              <h1 className="heading-lg font-bold tracking-tight mb-4 leading-[1.15] overflow-visible pb-1">
                Selected <span className="text-cyber-yellow font-serif-accent">Projects</span>
              </h1>
              <TechBorder variant="default" accentColor="none" className="max-w-2xl mx-auto p-4 bg-card/30">
                <p className="body-lg text-muted-foreground">
                  A collection of UX projects that showcase my approach to solving problems through research-driven design and user-centered thinking.
                </p>
              </TechBorder>
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
                    hoverImage="/images/ANA/ana-hero.png"
                  tags={["AI Ethics", "Media Bias Detection", "UX Research", "UX Design", "Testing"]}
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
                    hoverImage="/images/creative-block.png"
                    tags={["HCI Research", "Mixed Methods", "User Interviews", "Persona Development", "Design Implications"]}
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
                    hoverImage="/images/backmarket/backmarket-hero.png"
                    tags={["Information Architecture", "Content Strategy", "UX Research", "Usability Testing", "Sitemap"]}
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
                      hoverImage="/images/alcohol-hero.png"
                      tags={["UX Research", "Mixed Methods", "Behavioral UX"]}
                      href="/projects/reducing-alcohol"
                    />
                </FadeIn>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background border-t border-border">
        <AccentLine className="mb-16" />
        
        <div className="container px-5 mx-auto md:px-12">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <FadeIn delay={0.5} direction="left">
              <TiltEffect maxAngle={15} intensity={0.8} className="interactive">
                <TechBorder variant="clipped" className="overflow-hidden">
                  <div className="relative aspect-[2/3] scale-[0.9] origin-center">
                    <Image
                      src="/images/vedant-portrait.JPG"
                      alt="Portrait of Vedant Darak"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Scanline overlay on image */}
                    <div className="absolute inset-0 pointer-events-none scanlines opacity-30" />
                  </div>
                </TechBorder>
              </TiltEffect>
            </FadeIn>
            <FadeIn delay={0.5} direction="right">
              <div className="space-y-6 px-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-cyber-yellow animate-pulse" />
                  <DataLabel>ABOUT.ME</DataLabel>
                </div>
                <h2 className="heading-lg tracking-tight">About <span className="text-cyber-yellow">Me</span></h2>
                <TechBorder variant="notched" className="p-4 bg-card/30">
                  <p className="body-lg text-muted-foreground">
                    UX engineer with an HCI background bridging design systems and front-end engineering. I translate Figma signatures into resilient React/TypeScript systems while keeping accessibility and performance guardrails in place.
                  </p>
                </TechBorder>
                <p className="body-md text-muted-foreground">
                  Currently, I'm shaping adaptive workflows as a Design Engineering Intern at Cognijin—building AI-first knowledge tools, pairing closely with researchers, AI engineers, and shipping reusable components that scale from prototypes to production.
                </p>
                <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                  <StaggerItem>
                    <div className="flex items-start gap-3">
                      <Code2 className="w-4 h-4 text-cyber-yellow mt-1 flex-shrink-0" />
                      <p className="body-sm text-muted-foreground">
                        <strong className="text-foreground">Design Engineering Craft:</strong> I architect component systems, translate design tokens into React and Next.js, and prototype interactions with TypeScript, Tailwind, and Framer Motion.
                      </p>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex items-start gap-3">
                      <Terminal className="w-4 h-4 text-cyber-yellow mt-1 flex-shrink-0" />
                      <p className="body-sm text-muted-foreground">
                        <strong className="text-foreground">Evidence-Led Systems:</strong> I run mixed-method studies, instrument prototypes, and synthesize telemetry with qualitative insight to steer roadmaps.
                      </p>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex items-start gap-3">
                      <Cpu className="w-4 h-4 text-cyber-yellow mt-1 flex-shrink-0" />
                      <p className="body-sm text-muted-foreground">
                        <strong className="text-foreground">AI-Enabled Experiences:</strong> I collaborate with ML teams to choreograph agentic workflows, craft explainable UI patterns, and deliver resilient design ops.
                      </p>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
                <FadeIn delay={0.4}>
                  <div className="flex gap-3">
                    <RefinedButton variant="cyber-filled" intensity={0.2} size="md" asChild>
                      <a 
                        href="/Resume_Vedant.pdf" 
                        download="Vedant-Resume"
                        className="flex items-center gap-2 group"
                      >
                        <Download className="w-4 h-4 transition-transform duration-300 ease-out group-hover:scale-110" />
                        Download Resume
                      </a>
                    </RefinedButton>
                  </div>
                </FadeIn>
                <FadeIn delay={0.6}>
                  <TechBorder variant="default" className="mt-8 p-4 bg-card/30">
                    <p className="body-sm text-muted-foreground">
                      <strong className="text-cyber-yellow">Beyond Design:</strong> When I'm not crafting user experiences, you'll find me playing badminton, 
                      exploring nature's adventures, writing <Link href="/poetry" className="text-cyber-yellow hover:underline underline-offset-4">poetry</Link>, or analyzing the stock market.
                    </p>
                  </TechBorder>
                </FadeIn>
              </div>
            </FadeIn>
          </div>
        </div>
        {/* Centered philosophical quote below image and skills */}
        <FadeIn delay={0.5}>
          <div className="mt-16 px-4">
            <TechBorder variant="clipped" className="mx-auto max-w-2xl p-8 bg-card/30">
              <blockquote className="text-center relative">
                <DataLabel className="block mb-4">PHILOSOPHY</DataLabel>
                <p className="heading-md font-serif-accent text-cyber-yellow">
                  "Consistency over Perfection"
                </p>
              </blockquote>
            </TechBorder>
          </div>
        </FadeIn>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-border">
        <AccentLine className="mb-16" />
        
        <div className="container px-4 mx-auto md:px-6">
          <FadeIn delay={0.3}>
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail className="w-4 h-4 text-cyber-yellow" />
                <DataLabel>CONTACT.INIT</DataLabel>
              </div>
              <h2 className="heading-lg tracking-tight mb-6">Get in <span className="text-cyber-yellow">Touch</span></h2>
              <TechBorder variant="notched" className="p-6 mb-8 bg-card/30">
                <p className="body-lg text-muted-foreground">
                  Interested in working together? I'd love to hear about your project.
                </p>
              </TechBorder>
              <div className="flex justify-center">
                <RefinedButton variant="cyber-filled" size="lg" intensity={0.2}>
                  <a href="mailto:vdarak.infinity@gmail.com" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    vdarak.infinity@gmail.com
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
