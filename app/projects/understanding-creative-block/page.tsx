import Link from "next/link"
import { ArrowLeft, ArrowRight, Brain, Users, Eye, Target, TrendingUp, CheckCircle, Lightbulb, BookOpen, Coffee, PenTool, Palette, Search, UserCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { RefinedMagneticEffect } from "@/components/refined-magnetic-effect"
import { FadeIn, StaggerContainer, StaggerItem, Parallax } from "@/components/scroll-animations"
import { RefinedButton } from "@/components/refined-button"
import { FlowingText } from "@/components/flowing-text"
import { ProjectHero, StorySection, ProjectTimeline, InsightCard, UserQuote } from "@/components/story-components"
import { ProjectPageWrapper } from "@/components/project-page-wrapper"
import Footer from "@/components/footer"

export default function CreativeBlockCaseStudy() {
  // Define navigation sections
  const navigationSections = [
    { id: "problem", title: "The Problem", subtitle: "Research problem" },
    { id: "methodology", title: "Methodology", subtitle: "Research approach" },
    { id: "journey", title: "Research Journey", subtitle: "Timeline & process" },
    { id: "insights", title: "Key Insights", subtitle: "What we discovered" },
    { id: "personas", title: "Personas", subtitle: "User archetypes" },
    { id: "solution", title: "Solution", subtitle: "Our approach" },
    { id: "impact", title: "Impact", subtitle: "Results & learnings" }
  ]
  const storyData = {
    hero: {
      title: "Understanding Creative Block",
      subtitle: "Uncovering the hidden patterns behind creative struggles and designing pathways to breakthrough",
      storyHook: "What if creative block isn't a wall to break through, but a signal pointing toward what creators really need?",
      heroImage: "/images/creativeblock-dark.png?height=1000&width=2000",
      role: "UX Researcher & Team Lead",
      timeline: "10 weeks (Winter Quarter 2023-2024)",
      team: ["Caroline Rumani", "Diego Reyes-Alicea", "Valerie Fahel-Schaffer", "Vedant Darak"]
    },
    
    timeline: [
      {
        phase: "Problem Definition",
        title: "The Invisible Struggle",
        story: "Creative block affects millions of designers, artists, and writers daily, yet there's no dedicated technology solution addressing this universal challenge. Our team set out to understand not just what creative block looks like, but what it really means for the people experiencing it.",
        insight: "Creative block isn't just about running out of ideas—it's about confidence, environment, process, and the complex relationship between creativity and mental well-being.",
        visual: "/placeholder.svg?height=400&width=600",
        metrics: [
          { label: "Research Problem", value: "Defined" },
          { label: "Literature Review", value: "Complete" },
          { label: "Research Goals", value: "2 Primary" }
        ],
        highlights: [
          { icon: "Target", text: "Universal challenge identified", color: "blue" },
          { icon: "Search", text: "No existing tech solutions", color: "orange" },
          { icon: "Brain", text: "Multi-dimensional problem", color: "purple" }
        ],
        methodology: [
          { step: "Literature review", detail: "Academic research on creative cognition" },
          { step: "Problem scoping", detail: "Defined research boundaries" },
          { step: "Goal setting", detail: "Established primary objectives" }
        ]
      },
      {
        phase: "Mixed Methods Research",
        title: "Observing Real Creative Struggles",
        story: "We conducted 8 scenario-based observational studies over Zoom, watching how creative individuals naturally respond when they hit a wall. What we saw challenged our assumptions about 'creative process' and revealed the deeply personal strategies people develop to navigate their blocks.",
        insight: "People don't just sit and wait for inspiration—they have sophisticated, personal systems for managing creative challenges. The key is understanding these individual approaches.",
        visual: "/placeholder.svg?height=400&width=600",
        metrics: [
          { label: "Observational Studies", value: "8" },
          { label: "In-Depth Interviews", value: "8" },
          { label: "Age Range", value: "22-57" }
        ],
        highlights: [
          { icon: "Eye", text: "Behavioral observation", color: "green" },
          { icon: "Users", text: "Personal coping strategies", color: "purple" },
          { icon: "Video", text: "Remote methodology", color: "blue" }
        ],
        methodology: [
          { step: "Participant screening", detail: "Diverse creative backgrounds" },
          { step: "Scenario design", detail: "Realistic creative challenges" },
          { step: "Observation protocol", detail: "Natural behavior capture" }
        ],
        quotes: [{
          text: "I thought everyone just pushed through blocks, but people have incredibly sophisticated systems.",
          author: "Research Team Lead"
        }]
      },
      {
        phase: "Data Analysis",
        title: "Patterns in the Chaos",
        story: "Through affinity diagramming and sequential task analysis, five key themes emerged. The most surprising discovery? Digital vs. physical tool preferences weren't just about convenience—they reflected fundamentally different relationships with creativity itself.",
        insight: "The tools that work for one creative person can be completely ineffective for another. Any solution needs to embrace this diversity rather than impose a one-size-fits-all approach.",
        visual: "/placeholder.svg?height=400&width=600",
        metrics: [
          { label: "Key Insights", value: "5" },
          { label: "Personas Created", value: "2" },
          { label: "Priority Features", value: "4" }
        ],
        highlights: [
          { icon: "BookOpen", text: "Affinity diagramming", color: "blue" },
          { icon: "TrendingUp", text: "Sequential analysis", color: "green" },
          { icon: "Palette", text: "Tool preference patterns", color: "orange" }
        ],
        methodology: [
          { step: "Data coding", detail: "Thematic analysis of transcripts" },
          { step: "Pattern identification", detail: "Cross-participant themes" },
          { step: "Insight synthesis", detail: "Key findings extraction" }
        ],
        quotes: [{
          text: "The digital vs. physical divide wasn't about technology—it was about different creative identities.",
          author: "Lead Researcher"
        }]
      },
      {
        phase: "Synthesis & Design Implications",
        title: "From Research to Solutions",
        story: "Our priority matrix revealed that inspiration during ideation had high impact but medium feasibility, while routine development offered high feasibility with medium impact. This guided our recommendations for a technology solution that could realistically help creators.",
        insight: "The most effective creative block solutions aren't about generating ideas—they're about creating the right conditions for creativity to flourish naturally.",
        visual: "/placeholder.svg?height=400&width=600",
        metrics: [
          { label: "Design Implications", value: "5" },
          { label: "Priority Features", value: "Mapped" },
          { label: "Future Research", value: "Defined" }
        ],
        highlights: [
          { icon: "Target", text: "Priority matrix created", color: "purple" },
          { icon: "Lightbulb", text: "Solution framework", color: "yellow" },
          { icon: "CheckCircle", text: "Validated recommendations", color: "green" }
        ],
        methodology: [
          { step: "Impact mapping", detail: "Feature priority assessment" },
          { step: "Feasibility analysis", detail: "Technical constraint evaluation" },
          { step: "Recommendation synthesis", detail: "Actionable design guidelines" }
        ],
        quotes: [{
          text: "We're not fighting creative block—we're designing with it as a natural part of creativity.",
          author: "Design Team"
        }]
      }
    ]
  }

  return (
    <>
      <ProjectPageWrapper sections={navigationSections}>
        <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <div id="hero">
          <ProjectHero {...storyData.hero} />
        </div>

      {/* Chapter 01: The Research Problem */}
      <StorySection
        id="problem"
        chapter="Chapter 01"
        storyTitle="The Research Problem"
        narrativeHook="Creative block is everywhere, yet nowhere in technology. How do we study something so personal and invisible?"
      >
        <div className="grid gap-8">
          <p className="text-lg leading-relaxed">
            In creative fields, the pressure to consistently produce innovative work is immense. Yet when creativity stalls, 
            professionals are left with generic productivity apps or expensive therapy sessions. Our team at DePaul University 
            recognized this gap and set out to understand the true nature of creative block.
          </p>
          
          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl p-8 border border-orange-200 dark:border-orange-800">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Target className="w-6 h-6 text-orange-600" />
              Research Goals
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Investigate Experiences</h4>
                  <p className="text-sm text-muted-foreground">How do creative individuals experience and manage creative blocks?</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Identify Technology Needs</h4>
                  <p className="text-sm text-muted-foreground">What user needs exist for a technology-based solution?</p>
                </div>
              </div>
            </div>
          </div>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 mt-8 items-stretch">
            <StaggerItem className="h-full flex">
              <InsightCard
                type="discovery"
                title="The Gap in Technology"
                story="Despite creative block being a universal challenge, no dedicated technology solutions existed specifically for this problem—only generic productivity apps or expensive professional help."
                icon={<Search className="w-8 h-8 text-blue-500" />}
                metrics={{ value: "0", label: "Dedicated Solutions" }}
              />
            </StaggerItem>
            <StaggerItem className="h-full flex">
              <InsightCard
                type="challenge"
                title="High-Pressure Environment"
                story="Creative professionals face constant pressure to innovate and produce, making creative blocks not just frustrating but professionally threatening."
                icon={<TrendingUp className="w-8 h-8 text-orange-500" />}
                metrics={{ value: "High", label: "Professional Impact" }}
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </StorySection>

      {/* Chapter 02: Research Methodology */}
      <StorySection
        id="methodology"
        chapter="Chapter 02"
        storyTitle="Mixed Methods Approach"
        narrativeHook="To understand something as personal as creative block, we needed to both observe and listen—watching real behavior and hearing authentic stories."
        className="bg-muted/30"
      >
        <div className="grid gap-8">
          <p className="text-lg leading-relaxed">
            Our research combined observational studies to see how people naturally handle creative challenges with 
            in-depth interviews to understand the emotional and cognitive aspects of creative block. This dual approach 
            revealed both visible behaviors and hidden struggles.
          </p>

          <div className="grid gap-6 md:grid-cols-2 items-stretch">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold">Observational Studies</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Participants</h4>
                  <p className="text-sm">8 individuals, ages 22-57, diverse creative backgrounds</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Method</h4>
                  <p className="text-sm">Scenario-based tasks conducted remotely over Zoom, observing natural creative block management strategies</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold">In-Depth Interviews</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Participants</h4>
                  <p className="text-sm">8 individuals, ages 24-32, primarily digital creatives</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Focus</h4>
                  <p className="text-sm">Personal experiences, techniques, tools, and desired technology features for addressing creative blocks</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-background rounded-xl p-8 border">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Brain className="w-6 h-6 text-purple-600" />
              Analysis Methods
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold">Affinity Diagrams</h4>
                <p className="text-sm text-muted-foreground">Pattern identification</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold">Sequential Task Analysis</h4>
                <p className="text-sm text-muted-foreground">Process mapping</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto">
                  <UserCheck className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold">Persona Development</h4>
                <p className="text-sm text-muted-foreground">User archetypes</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold">Priority Matrix</h4>
                <p className="text-sm text-muted-foreground">Feature prioritization</p>
              </div>
            </div>
          </div>
        </div>
      </StorySection>

      {/* The Journey Timeline */}
      <section id="journey" className="content-section py-24">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Research Journey</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From problem definition to design implications, here's how we uncovered the patterns 
                behind creative block and translated insights into actionable solutions.
              </p>
            </div>
          </FadeIn>
          <ProjectTimeline events={storyData.timeline} />
        </div>
      </section>

      {/* Chapter 03: Key Insights */}
      <StorySection
        id="insights"
        chapter="Chapter 03"
        storyTitle="Five Key Insights"
        narrativeHook="The data revealed five critical patterns that challenged our assumptions about creative block and pointed toward solution opportunities."
        className="bg-gradient-to-br from-primary/5 to-secondary/5"
      >
        <div className="grid gap-8">
          <p className="text-lg leading-relaxed">
            Through affinity diagramming and thematic analysis, five key insights emerged that would shape our 
            design recommendations. Each insight revealed not just what people do when blocked, but why their 
            current strategies work or fail.
          </p>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6" staggerDelay={0.1}>
            {/* Insight 1: Preparation */}
            <StaggerItem>
              <RefinedMagneticEffect intensity={0.08} range={80}>
                <Card className="h-[420px] border-t-4 border-t-blue-500 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-4 flex flex-col h-full">
                    {/* Icon and Number */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <Coffee className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="text-xs font-mono text-blue-600 bg-blue-50 dark:bg-blue-950/20 px-2 py-1 rounded">
                        01
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold mb-3 leading-tight">
                      Preparation
                    </h3>
                    
                    {/* Description */}
                    <div className="flex-grow mb-3">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Participants actively prepared their environment and created routines to mitigate creative blocks. 
                        Physical space decluttering and organizing essential tools were critical initial steps.
                      </p>
                    </div>
                    
                    {/* Design Implication */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-3 mt-auto">
                      <p className="text-xs font-medium text-blue-700 dark:text-blue-300 mb-1">Design Implication:</p>
                      <p className="text-xs text-blue-600 dark:text-blue-400 leading-relaxed">
                        Technology should prompt users to create personalized pre-task routines and environment setup guides.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </RefinedMagneticEffect>
            </StaggerItem>

            {/* Insight 2: Digital vs Physical */}
            <StaggerItem>
              <RefinedMagneticEffect intensity={0.08} range={80}>
                <Card className="h-[420px] border-t-4 border-t-green-500 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-4 flex flex-col h-full">
                    {/* Icon and Number */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <PenTool className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="text-xs font-mono text-green-600 bg-green-50 dark:bg-green-950/20 px-2 py-1 rounded">
                        02
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold mb-3 leading-tight">
                      Digital vs Physical
                    </h3>
                    
                    {/* Description */}
                    <div className="flex-grow mb-3">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Digital creators emphasized reliability and convenience of digital platforms, while physical artists 
                        preferred tangible, organic experiences. Tool effectiveness varied by personal preferences and project type.
                      </p>
                    </div>
                    
                    {/* Design Implication */}
                    <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-3 mt-auto">
                      <p className="text-xs font-medium text-green-700 dark:text-green-300 mb-1">Design Implication:</p>
                      <p className="text-xs text-green-600 dark:text-green-400 leading-relaxed">
                        Solutions must accommodate both digital and physical creative preferences with flexible interaction models.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </RefinedMagneticEffect>
            </StaggerItem>

            {/* Insight 3: Relaxation */}
            <StaggerItem>
              <RefinedMagneticEffect intensity={0.08} range={80}>
                <Card className="h-[420px] border-t-4 border-t-purple-500 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-4 flex flex-col h-full">
                    {/* Icon and Number */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <Brain className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="text-xs font-mono text-purple-600 bg-purple-50 dark:bg-purple-950/20 px-2 py-1 rounded">
                        03
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold mb-3 leading-tight">
                      Relaxation
                    </h3>
                    
                    {/* Description */}
                    <div className="flex-grow mb-3">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Breaks and relaxation techniques (meditation, walking, nature) were crucial for mental resets. 
                        However, participants struggled with guilt and shame during blocks.
                      </p>
                    </div>
                    
                    {/* Design Implication */}
                    <div className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-3 mt-auto">
                      <p className="text-xs font-medium text-purple-700 dark:text-purple-300 mb-1">Design Implication:</p>
                      <p className="text-xs text-purple-600 dark:text-purple-400 leading-relaxed">
                        Integrate mental health checks and normalize breaks with supportive, non-judgmental prompts.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </RefinedMagneticEffect>
            </StaggerItem>

            {/* Insight 4: Creative Block Management */}
            <StaggerItem>
              <RefinedMagneticEffect intensity={0.08} range={80}>
                <Card className="h-[420px] border-t-4 border-t-orange-500 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-4 flex flex-col h-full">
                    {/* Icon and Number */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <Target className="w-5 h-5 text-orange-600" />
                      </div>
                      <div className="text-xs font-mono text-orange-600 bg-orange-50 dark:bg-orange-950/20 px-2 py-1 rounded">
                        04
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold mb-3 leading-tight">
                      Creative Block
                    </h3>
                    
                    {/* Description */}
                    <div className="flex-grow mb-3">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Participants desired solutions that offer new perspectives, alleviate personal biases, and encourage 
                        alternative thinking patterns. Confidence often dropped significantly during blocks.
                      </p>
                    </div>
                    
                    {/* Design Implication */}
                    <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-3 mt-auto">
                      <p className="text-xs font-medium text-orange-700 dark:text-orange-300 mb-1">Design Implication:</p>
                      <p className="text-xs text-orange-600 dark:text-orange-400 leading-relaxed">
                        Provide tools for gaining novel perspectives and breaking out of mental patterns while building confidence.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </RefinedMagneticEffect>
            </StaggerItem>

            {/* Insight 5: Inspiration */}
            <StaggerItem>
              <RefinedMagneticEffect intensity={0.08} range={80}>
                <Card className="h-[420px] border-t-4 border-t-pink-500 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-4 flex flex-col h-full">
                    {/* Icon and Number */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <Lightbulb className="w-5 h-5 text-pink-600" />
                      </div>
                      <div className="text-xs font-mono text-pink-600 bg-pink-50 dark:bg-pink-950/20 px-2 py-1 rounded">
                        05
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold mb-3 leading-tight">
                      Inspiration
                    </h3>
                    
                    {/* Description */}
                    <div className="flex-grow mb-3">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Inspiration sources ranged widely—friends, digital tools, nature, AI, spirituality. 
                        The key was that inspiration needed to be personally meaningful and trusted.
                      </p>
                    </div>
                    
                    {/* Design Implication */}
                    <div className="bg-pink-50 dark:bg-pink-950/20 rounded-lg p-3 mt-auto">
                      <p className="text-xs font-medium text-pink-700 dark:text-pink-300 mb-1">Design Implication:</p>
                      <p className="text-xs text-pink-600 dark:text-pink-400 leading-relaxed">
                        Offer highly personalized, meaningful inspiration sources that users can trust and relate to.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </RefinedMagneticEffect>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </StorySection>

      {/* Chapter 04: Personas */}
      <StorySection
        id="personas"
        chapter="Chapter 04"
        storyTitle="Meet the Creators"
        narrativeHook="From our research emerged two distinct personas representing different approaches to creativity and different needs during blocks."
      >
        <div className="grid gap-8">
          <p className="text-lg leading-relaxed">
            While every creative professional's experience is unique, our analysis revealed two primary patterns 
            in how people approach creative work and manage blocks. These personas guided our design recommendations.
          </p>

          <div className="grid gap-8 md:grid-cols-2 items-stretch">
            {/* Sara Persona */}
            <Card className="p-8 h-full">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    S
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Sara</h3>
                    <p className="text-muted-foreground">UX Designer, 28</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Primary Challenge</h4>
                    <p className="text-sm text-muted-foreground">
                      Struggles with imposter syndrome during ideation phases, often feeling unsure about where to start 
                      or whether her ideas are valuable.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">What She Needs</h4>
                    <p className="text-sm text-muted-foreground">
                      Guidance on starting points, validation that her creative process is normal, and confidence-building 
                      tools that help her trust her instincts.
                    </p>
                  </div>
                  
                  <UserQuote
                    quote="I know I'm capable, but when I'm staring at a blank screen, I feel like I don't know anything about design."
                    author="Sara"
                    role="Research Participant"
                    avatar="/placeholder.svg?height=100&width=100"
                  />
                </div>
              </div>
            </Card>

            {/* Taylor Persona */}
            <Card className="p-8 h-full">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    T
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Taylor</h3>
                    <p className="text-muted-foreground">UX Designer, 31</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Primary Challenge</h4>
                    <p className="text-sm text-muted-foreground">
                      Experiences fatigue from professional demands and feels overwhelmed by complex creative projects 
                      that seem too big to tackle.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">What They Need</h4>
                    <p className="text-sm text-muted-foreground">
                      Structured breakdowns of creative tasks into manageable pieces, energy management tools, 
                      and ways to maintain momentum without burnout.
                    </p>
                  </div>
                  
                  <UserQuote
                    quote="The project feels so big that I don't even know where to begin. I need someone to help me break it down into pieces I can actually handle."
                    author="Taylor"
                    role="Research Participant"
                    avatar="/placeholder.svg?height=100&width=100"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </StorySection>

      {/* Chapter 05: Solution Framework */}
      <StorySection
        id="solution"
        chapter="Chapter 05"
        storyTitle="Design Implications & Priority Features"
        narrativeHook="Our research pointed toward a technology solution that doesn't fight creative block—it works with it."
        className="bg-muted/30"
      >
        <div className="grid gap-8">
          <p className="text-lg leading-relaxed">
            Rather than trying to eliminate creative block (which may be impossible and even counterproductive), 
            our research suggests designing tools that support creators through the natural ebb and flow of 
            creative work. Here's what that looks like.
          </p>

          <div className="bg-background rounded-xl p-8 border">
            <h3 className="text-2xl font-bold mb-8 text-center">Priority Features Matrix</h3>
            
            {/* Matrix Grid - 2x2 Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* High Impact, High Feasibility */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/20 rounded-full">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-semibold text-green-700 dark:text-green-300">High Impact, High Feasibility</span>
                  </div>
                </div>
                
                <Card className="p-6 border-2 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/10">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Coffee className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Structured Routines & Self-Care</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Personalized pre-work routines and mental health check-ins that create the right conditions for creativity to flourish.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* High Impact, Medium Feasibility */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/20 rounded-full">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="font-semibold text-orange-700 dark:text-orange-300">High Impact, Medium Feasibility</span>
                  </div>
                </div>
                
                <Card className="p-6 border-2 border-orange-200 dark:border-orange-800 bg-orange-50/50 dark:bg-orange-950/10">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Lightbulb className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Inspiration During Ideation</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Contextual creative prompts and perspective-shifting tools that help break through mental blocks and generate fresh ideas.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Lower Priority Section */}
            <div className="border-t pt-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <span className="font-semibold text-gray-600 dark:text-gray-400">Medium Impact, Low Feasibility</span>
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="p-4 border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/20">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-400 rounded-md flex items-center justify-center flex-shrink-0">
                      <Target className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Hierarchical Project Analysis</h5>
                      <p className="text-xs text-muted-foreground">AI-powered task breakdown and project structuring</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4 border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/20">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-400 rounded-md flex items-center justify-center flex-shrink-0">
                      <Brain className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Personalized Inspiration</h5>
                      <p className="text-xs text-muted-foreground">Machine learning-based content curation</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            <InsightCard
              type="solution"
              title="Routine Development"
              story="Help users create and maintain personalized pre-task routines that set them up for creative success, reducing the friction of getting started."
              icon={<Coffee className="w-8 h-8 text-green-500" />}
            />
            <InsightCard
              type="solution"
              title="Self-Care Integration"
              story="Normalize breaks and mental health awareness with gentle check-ins and supportive messaging that reduces guilt around creative struggles."
              icon={<Brain className="w-8 h-8 text-green-500" />}
            />
            <InsightCard
              type="solution"
              title="Novel Perspectives"
              story="Provide tools and prompts that help creators step outside their usual thinking patterns and approach problems from fresh angles."
              icon={<Lightbulb className="w-8 h-8 text-green-500" />}
            />
          </div>
        </div>
      </StorySection>

      {/* Chapter 06: Future Research */}
      <StorySection
        chapter="Chapter 06"
        storyTitle="Next Steps & Impact"
        narrativeHook="This research opened doors to deeper questions about creativity, technology, and human-centered design."
        className="bg-gradient-to-br from-primary/5 to-secondary/5"
      >
        <div className="grid gap-8">
          <p className="text-lg leading-relaxed">
            Our study provided a foundation for understanding creative block, but it also revealed the need for 
            broader research and prototype testing. The implications extend beyond individual tools to how we 
            design technology that supports human creativity.
          </p>

          <div className="grid gap-6 md:grid-cols-2 items-stretch">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <Search className="w-6 h-6 text-blue-600" />
                Future Research Directions
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Expand research with diverse demographics and creative occupations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Conduct prototype testing to validate usability and effectiveness</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Investigate cultural differences in creative block experiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Study long-term effectiveness of creative block interventions</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-purple-600" />
                Research Impact
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">First comprehensive study of creative block technology needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Design framework for creativity-supporting technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Evidence-based approach to creative tool design</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Foundation for future HCI creativity research</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="bg-background rounded-xl p-8 border">
            <h3 className="text-2xl font-bold mb-6">Key Contributions to HCI Field</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mx-auto">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold">Methodological</h4>
                <p className="text-sm text-muted-foreground">Mixed-methods approach for studying invisible creative processes</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mx-auto">
                  <Palette className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold">Theoretical</h4>
                <p className="text-sm text-muted-foreground">Framework for understanding individual differences in creative block</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold">Practical</h4>
                <p className="text-sm text-muted-foreground">Design implications for creativity-supporting technology</p>
              </div>
            </div>
          </div>
        </div>
      </StorySection>

      {/* Like my work? Explore more! Section */}
      <section id="impact" className="content-section py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Like my work? <FlowingText text="Explore" className="inline" /> more!
              </h2>
              <p className="text-lg text-muted-foreground">
                Discover more UX design projects that showcase my approach to solving complex problems through research-driven design.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 pt-8">
                <Link href="/projects/finance-dashboard">
                  <RefinedButton variant="default" size="lg" className="group">
                    <span className="flex items-center gap-2">
                      <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
                      Previous Project
                    </span>
                  </RefinedButton>
                </Link>
                <Link href="/projects/reducing-alcohol">
                  <RefinedButton variant="outline" size="lg" className="group">
                    <span className="flex items-center gap-2">
                      Next Project
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </RefinedButton>
                </Link>
              </div>
              
              <div className="flex justify-center gap-8 pt-8 text-sm text-muted-foreground">
                <div className="text-center">
                  <div className="font-mono text-lg font-bold">04</div>
                  <div>Projects</div>
                </div>
                <div className="text-center">
                  <div className="font-mono text-lg font-bold">50+</div>
                  <div>User Interviews</div>
                </div>
                <div className="text-center">
                  <div className="font-mono text-lg font-bold">12</div>
                  <div>Prototypes</div>
                </div>
                <div className="text-center">
                  <div className="font-mono text-lg font-bold">05</div>
                  <div>Years Experience</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      </main>
      </ProjectPageWrapper>
      <Footer />
    </>
  )
}
