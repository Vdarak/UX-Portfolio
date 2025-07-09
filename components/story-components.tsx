"use client"

import type React from "react"
import { motion } from "framer-motion"
import { 
  Lightbulb, 
  Quote, 
  Target, 
  Search, 
  Brain, 
  Eye, 
  Users, 
  Video, 
  BookOpen, 
  TrendingUp, 
  Palette, 
  CheckCircle,
  ChevronRight,
  Heart,
  Smartphone,
  Shield,
  Zap,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/scroll-animations"
import { RefinedMagneticEffect } from "@/components/refined-magnetic-effect"
import { FlowingText } from "@/components/flowing-text"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectHeroProps {
  title: string
  subtitle: string
  storyHook: string
  heroImage: string
  role: string
  timeline: string
  team?: string[]
}

export function ProjectHero({ title, subtitle, storyHook, heroImage, role, timeline, team }: ProjectHeroProps) {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/10 pt-16 md:pt-20">
      {/* Back to all projects button - with responsive positioning */}
      <Link 
        href="/#projects" 
        className="absolute top-24 md:top-24 left-4 md:left-8 z-30 flex items-center text-sm font-medium text-foreground/70 hover:text-foreground transition-colors group"
      >
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-x-1" />
        Back to all projects
      </Link>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/40 z-10" />
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={heroImage}
            alt={`${title} hero image`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      
      <div className="container relative z-20 px-4 mx-auto text-center mt-20 md:mt-8">
        <FadeIn direction="up" delay={0.2}>
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Story Hook - The compelling opening */}
            <blockquote className="text-2xl md:text-4xl font-light leading-relaxed text-foreground/90 mb-12">
              <span className="text-6xl text-primary/30 font-serif leading-none">"</span>
              {storyHook}
              <span className="text-6xl text-primary/30 font-serif leading-none">"</span>
            </blockquote>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                {title === "Understanding Creative Block" ? (
                  <>Understanding <FlowingText text="Creative" className="inline" /> Block</>
                ) : title === "BackMarket IA Redesign" ? (
                  <>BackMarket <FlowingText text="IA" className="inline-block" /> Redesign</>
                ) : title === "Reducing Alcohol Consumption" ? (
                  <>Reducing <FlowingText text="Alcohol" className="inline" /> Consumption</>
                ) : title === "Ana: AI News Aggregator" ? (
                  <>Ana: AI <FlowingText text="News" className="inline" /> Aggregator</>
                ) : (
                  title
                )}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                {subtitle}
              </p>
            </div>
            
            {/* Project Meta */}
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <div className="text-center">
                <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Role</div>
                <div className="text-lg font-medium">{role}</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Timeline</div>
                <div className="text-lg font-medium">{timeline}</div>
              </div>
              {team && (
                <div className="text-center">
                  <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Team</div>
                  <div className="text-lg font-medium">{team.join(", ")}</div>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

interface StorySectionProps {
  chapter: string
  storyTitle: string
  narrativeHook: string
  children: React.ReactNode
  className?: string
  id?: string
}

export function StorySection({ chapter, storyTitle, narrativeHook, children, className = "", id }: StorySectionProps) {
  return (
    <section id={id} className={`content-section py-24 relative ${className}`}>
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-mono text-primary font-bold tracking-widest">
                {chapter}
              </span>
              <div className="h-px bg-border flex-1" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{storyTitle}</h2>
            <p className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed font-light">
              {narrativeHook}
            </p>
          </div>
        </FadeIn>
        
        <div className="max-w-4xl mx-auto prose prose-lg prose-neutral dark:prose-invert max-w-none">
          {children}
        </div>
      </div>
    </section>
  )
}

interface TimelineEvent {
  phase: string
  title: string
  story: string
  insight: string
  visual?: string
  metrics?: { label: string; value: string }[]
  highlights?: { icon: string; text: string; color: string }[]
  methodology?: { step: string; detail: string }[]
  quotes?: { text: string; author: string }[]
}

export function ProjectTimeline({ events }: { events: TimelineEvent[] }) {
  // Map icon names to components
  const iconMap: Record<string, React.ComponentType<any>> = {
    Target,
    Search,
    Brain,
    Eye,
    Users,
    Video,
    BookOpen,
    TrendingUp,
    Palette,
    CheckCircle,
    Lightbulb,
    Heart,
    Smartphone,
    Shield,
    Zap
  }

  return (
    <div className="space-y-24">
      {events.map((event, index) => (
        <FadeIn key={index} delay={index * 0.1}>
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            {/* Left side - Story content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ChevronRight className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                    {event.phase}
                  </p>
                  <h3 className="text-2xl font-bold">{event.title}</h3>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                {event.story}
              </p>
              
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border-l-4 border-primary">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Key Insight</h4>
                    <p className="text-sm italic">{event.insight}</p>
                  </div>
                </div>
              </div>

              {/* Methodology steps if available */}
              {event.methodology && (
                <div className="space-y-3">
                  <h4 className="font-semibold">Methodology</h4>
                  <div className="grid gap-2">
                    {event.methodology.map((method, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-mono">
                          {idx + 1}
                        </div>
                        <div>
                          <span className="font-medium">{method.step}:</span>
                          <span className="text-muted-foreground ml-2">{method.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right side - Enhanced visual section */}
            <div className="lg:col-span-5 space-y-6">
              {/* Metrics cards */}
              {event.metrics && (
                <div className="grid gap-3">
                  {event.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-background rounded-lg p-4 border">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{metric.label}</span>
                        <span className="font-mono font-bold text-primary">{metric.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Highlights if available */}
              {event.highlights && (
                <div className="space-y-3">
                  {event.highlights.map((highlight, idx) => {
                    const IconComponent = iconMap[highlight.icon] || Target;
                    const colorClasses = {
                      blue: "bg-blue-100 dark:bg-blue-900/20 text-blue-600",
                      orange: "bg-orange-100 dark:bg-orange-900/20 text-orange-600",
                      purple: "bg-purple-100 dark:bg-purple-900/20 text-purple-600",
                      green: "bg-green-100 dark:bg-green-900/20 text-green-600",
                      yellow: "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600"
                    }
                    
                    return (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${colorClasses[highlight.color as keyof typeof colorClasses] || colorClasses.blue}`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium">{highlight.text}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Quote if available */}
              {event.quotes && event.quotes[0] && (
                <div className="bg-background rounded-xl p-6 border">
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <blockquote className="text-sm italic text-muted-foreground mb-2">
                        "{event.quotes[0].text}"
                      </blockquote>
                      <cite className="text-xs text-muted-foreground">
                        — {event.quotes[0].author}
                      </cite>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  )
}

interface InsightCardProps {
  type: 'discovery' | 'challenge' | 'solution' | 'outcome'
  title: string
  story: string
  icon?: React.ReactNode
  metrics?: { value: string; label: string }
  className?: string
}

export function InsightCard({ type, title, story, icon, metrics, className = "" }: InsightCardProps) {
  const typeStyles = {
    discovery: "border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/20",
    challenge: "border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/20", 
    solution: "border-l-4 border-green-500 bg-green-50/50 dark:bg-green-950/20",
    outcome: "border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/20"
  }

  return (
    <RefinedMagneticEffect intensity={0.08} range={80}>
      <Card className={`${typeStyles[type]} ${className} group cursor-pointer transition-all duration-300 hover:shadow-lg border-0 h-full flex flex-col`}>
        <CardContent className="p-6 flex flex-col h-full">
          {icon && (
            <div className="mb-4 flex-shrink-0 w-8 h-8 overflow-hidden">
              <div className="transform group-hover:scale-110 transition-transform duration-300 w-full h-full flex items-center justify-center">
                {icon}
              </div>
            </div>
          )}
          
          <h3 className="font-bold text-lg mb-3 text-foreground flex-shrink-0">{title}</h3>
          <p className="leading-relaxed text-muted-foreground mb-4 flex-grow">{story}</p>
          
          {metrics && (
            <div className="pt-4 border-t border-border/50 flex-shrink-0">
              <div className="text-2xl font-bold text-primary">{metrics.value}</div>
              <div className="text-sm text-muted-foreground">{metrics.label}</div>
            </div>
          )}
        </CardContent>
      </Card>
    </RefinedMagneticEffect>
  )
}

interface UserQuoteProps {
  quote: string
  author: string
  role?: string
  avatar?: string
}

export function UserQuote({ quote, author, role, avatar }: UserQuoteProps) {
  return (
    <FadeIn>
      <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-8">
          <div className="flex items-start gap-4">
            <Quote className="w-8 h-8 text-primary/40 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <blockquote className="text-xl italic leading-relaxed text-foreground mb-4">
                "{quote}"
              </blockquote>
              <cite className="flex items-center gap-3 not-italic">
                {avatar && (
                  <img 
                    src={avatar} 
                    alt={author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                <div>
                  <div className="font-semibold text-foreground">— {author}</div>
                  {role && <div className="text-sm text-muted-foreground">{role}</div>}
                </div>
              </cite>
            </div>
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  )
}
