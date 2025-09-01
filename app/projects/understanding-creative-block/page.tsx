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
import { ObservationAffinityDiagram, InterviewAffinityDiagram, PersonaSpectrum, DetailedPersonas, PersonaScenarios, SequentialTaskAnalysis, FeaturePriorityMatrix } from "./components"

export default function CreativeBlockCaseStudy() {
  // Define navigation sections
  const navigationSections = [
    { id: "problem", title: "Introduction", subtitle: "Problem Introduction" },
    { id: "methodology", title: "Methodology", subtitle: "Research approach" },
    { id: "insights", title: "Key Insights", subtitle: "What we discovered" },
    { id: "solution", title: "Solution", subtitle: "Our approach" }
  ]
  const storyData = {
    hero: {
      title: "Understanding Creative Block",
      subtitle: "Uncovering the hidden patterns behind creative block and generating actionable design requirements",
      storyHook: "What are the user needs in a technology-based solution to address creative block?",
      heroImage: "/images/creativeblock-dark.png?height=1000&width=2000",
      role: "UX Researcher & Team Lead",
      timeline: "10 weeks (January 2024 - March 2024)",
      team: ["2 UX Designers", "2 UX Researchers"]
    },
    
    timeline: [
      {
        phase: "Problem Definition",
        title: "The Invisible Struggle",
        story: "Creative block affects millions daily, yet no dedicated technology solution addresses this universal challenge. We set out to understand what creative block really means for those experiencing it.",
        insight: "Creative block isn't just about lacking ideas—it's about confidence, environment, process, and the complex relationship between creativity and mental well-being.",
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
        story: "We conducted 8 scenario-based observational studies over Zoom, watching creative individuals naturally respond when hitting blocks. This challenged our assumptions about 'creative process' and revealed deeply personal coping strategies.",
        insight: "People don't wait for inspiration—they have sophisticated, personal systems for managing creative challenges. Understanding these individual approaches is key.",
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
        story: "Through affinity diagramming and sequential task analysis, five key themes emerged. Most surprising? Digital vs. physical tool preferences reflected fundamentally different relationships with creativity itself.",
        insight: "Tools that work for one creative person can be completely ineffective for another. Solutions must embrace this diversity rather than impose one-size-fits-all approaches.",
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
        story: "Our priority matrix revealed inspiration during ideation had high impact but medium feasibility, while routine development offered high feasibility with medium impact. This guided recommendations for realistic technology solutions.",
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

      {/* Chapter 01: Introduction */}
      <StorySection
        id="problem"
        chapter="Chapter 01"
        storyTitle="Introduction"
        narrativeHook="Creative block is everywhere, yet nowhere in technology. How do we study something so personal and invisible?"
      >
        <div className="grid gap-8">
          {/* Problem Definition */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">The Problem</h3>
            <p className="text-lg leading-relaxed">
              Creative block, as defined by the Interaction Design Foundation, is a period of limited creativity and productivity. Creative specialists and hobbyists need additional skills to navigate various thoughts and ideas throughout their creative block. Even famous artists encounter lulls of inspiration.
            </p>
            
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 rounded-xl p-8 border border-purple-200 dark:border-purple-800">
              <blockquote className="text-lg italic text-center">
                "In recovering from our creative blocks, it is necessary to go gently and slowly... These are baby steps. 
                Progress, not perfection, is what we should be asking of ourselves"
              </blockquote>
              <cite className="block text-center mt-4 text-sm text-muted-foreground">— Julia Cameron, 2001</cite>
            </div>
            
            <p className="text-lg leading-relaxed">
              Although creative blocks may seem like barriers to success, they can be necessary in creative projects. Most designers and artists naturally experience highs and lows throughout their careers. However, little research exists on effective solutions. In a content-saturated world, creatives may benefit from reliable technology tools to support their creativity and ingenuity.
            </p>
          </div>

          {/* Existing Solutions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Existing Solutions</h3>
            <p className="text-lg leading-relaxed">
              In the current market, few technological tools exist to help artists and designers curb creative block. Furthermore, existing tools are not exclusively designed for creative blocks.
            </p>
            
            <StaggerContainer className="grid gap-6 md:grid-cols-2 mt-8 items-stretch">
                <StaggerItem className="h-full flex">
                <InsightCard
                  type="competitor"
                  title="Pinterest"
                  story="Indirectly addresses creative blocks, it provides a space for artists, designers, and hobbyists to organize images found on their websites into mood boards. While this may help with creative blocks, this solution lacks focus. Furthermore, Pinterest is now pivoting away from image gathering towards selling items."
                  icon={<Palette className="w-8 h-8 text-pink-500" />}
                />
              </StaggerItem>
              <StaggerItem className="h-full flex">
                <InsightCard
                  type="competitor"
                  title="Headspace"
                  story="A paid service that helps users overcome various mental health scenarios. They offer stress relief services and provide articles about creative blocks. However, they do not offer concrete solutions or efforts focused on creative blocks."
                  icon={<Brain className="w-8 h-8 text-green-500" />}
                />
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Our Approach */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Approach</h3>
            <p className="text-lg leading-relaxed">
              Our study investigates current pathways of artists and designers during creative block to understand their motivations and mental models. We explore user needs in a technology-based solution that helps artists, designers, and hobbyists address creative blocks.
            </p>
      
            <p className="text-lg leading-relaxed">
              We began with scenario-based observation of creative block, then conducted interviews for further investigation. This report discusses our methods, findings, and design implications for a technology-based solution.
            </p>
          </div>
        </div>
      </StorySection>

      {/* Chapter 02: Research Methodology */}
      <StorySection
        id="methodology"
        chapter="Chapter 02"
        storyTitle="Research Methods"
        narrativeHook="To understand something as personal as creative block, we needed to both observe and listen—watching real behavior and hearing authentic stories."
        className="bg-muted/30"
      >
        <div className="grid gap-8 lg:gap-12 overflow-hidden">
          {/* Observations Section */}
          <div className="space-y-6 lg:space-y-8 overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 lg:mb-6 overflow-hidden">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold break-words hyphens-auto overflow-wrap-anywhere">Scenario-Based Observations</h3>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 items-stretch overflow-hidden">
              <Card className="p-4 sm:p-6 overflow-hidden">
                <div className="space-y-3 sm:space-y-4 overflow-hidden">
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 break-words">Participants</h4>
                  <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-3 sm:p-4 overflow-hidden">
                    <p className="text-sm leading-relaxed break-words overflow-wrap-anywhere">
                      We recruited 8 participants (ages 22-57) using the CDM participant pool, friends, and family—individuals with previous creative block experiences.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-6 overflow-hidden">
                <div className="space-y-3 sm:space-y-4 overflow-hidden">
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 break-words">Data Collection Method</h4>
                  <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-3 sm:p-4 overflow-hidden">
                    <p className="text-sm leading-relaxed break-words overflow-wrap-anywhere">
                      We conducted our scenario-based observations remotely via Zoom calls, using the screen sharing 
                      feature to view each participant's screen during the scenario.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="bg-background rounded-xl p-4 sm:p-6 lg:p-8 border overflow-hidden">
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 break-words">What We Actually Did</h4>
              <div className="space-y-3 sm:space-y-4 text-md leading-relaxed overflow-hidden">
                <p className="break-words overflow-wrap-anywhere">
                  After receiving verbal consent, we asked participants to share their creative experiences. We then presented a general project scenario with creative block and tasked participants with showing their process to overcome this block via Zoom screen-sharing.
                </p>
                <p className="break-words overflow-wrap-anywhere">
                  In the second half, we asked follow-up questions about their experience with the scenario and in-depth questions about feelings, previous experiences, and other creative block strategies. We concluded with demographic questions. Sessions lasted approximately 30 minutes.
                </p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 overflow-hidden">
              <h4 className="text-lg sm:text-xl font-bold break-words">Data Analysis Method</h4>
              <p className="text-md leading-relaxed mb-4 sm:mb-6 break-words overflow-wrap-anywhere">
                We organized findings through affinity diagramming and created sequential task analysis for visualizing themes and relationships among identified variables.
              </p>
              
              {/* Affinity Diagram Placeholder */}
              <ObservationAffinityDiagram />

              {/* Sequential Task Analysis */}
              <SequentialTaskAnalysis />
            </div>
          </div>

          {/* Interviews Section */}
          <div className="space-y-6 lg:space-y-8 border-t pt-8 lg:pt-12 overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 lg:mb-6 overflow-hidden">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold break-words hyphens-auto overflow-wrap-anywhere">In-Depth Interviews</h3>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 items-stretch overflow-hidden">
              <Card className="p-4 sm:p-6 overflow-hidden">
                <div className="space-y-3 sm:space-y-4 overflow-hidden">
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 break-words">Participants</h4>
                  <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-3 sm:p-4 overflow-hidden">
                    <p className="text-sm leading-relaxed break-words overflow-wrap-anywhere">
                      We recruited 8 participants (ages 24-32) using the CDM participant pool and friends—individuals with previous creative block experiences.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-6 overflow-hidden">
                <div className="space-y-3 sm:space-y-4 overflow-hidden">
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 break-words">Data Collection Method</h4>
                  <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-3 sm:p-4 overflow-hidden">
                    <p className="text-sm leading-relaxed break-words overflow-wrap-anywhere">
                      We conducted our interview remotely via Zoom calls. During the recruitment process, we screened 
                      participants who experienced creative block.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="bg-background rounded-xl p-4 sm:p-6 lg:p-8 border">
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">What We Actually Did</h4>
              <div className="space-y-3 sm:space-y-4 text-md leading-relaxed">
                <p>
                  First, we received verbal consent. We asked participants about their creative experience with recent projects, work and hobby activities, and inspiration sources. We then explored their preparation before creative tasks, digital or physical tools used, relaxation methods, and personal creative block experiences.
                </p>
                <p>
                  We concluded by asking participants to describe potential features of a technology-based solution for overcoming creative block. Demographic information was collected at the end: gender identity, age, occupation, education level and field, and years of creative experience. Each interview lasted approximately 45 minutes.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-lg sm:text-xl font-bold">Data Analysis Method</h4>
              <p className="text-md leading-relaxed mb-4 sm:mb-6">
                Each team member applied descriptive codes to interview scripts using Atlas.ti. We combined findings into an affinity diagram and created a codebook for unified coding. From these findings, we created a persona spectrum, personas, scenarios, experience map, and priority matrix.
              </p>
              
              {/* Interview Affinity Diagram */}
              <InterviewAffinityDiagram />

              {/* Persona Spectrum */}
              <PersonaSpectrum />

              {/* Personas Section */}
              <DetailedPersonas />

              {/* User Scenarios */}
              <PersonaScenarios />

              {/* Experience Maps */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-left mb-6">Experience Maps</h3>
                  <p className="text-left text-muted-foreground mb-8">
                    Detailed journey maps showing how Sara and Taylor experience creative blocks and interact with potential solutions.
                  </p>
                </div>
                
                {/* Sara's Experience Map */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-left">Sara's Creative Block Journey</h4>
                  <div className="w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    <img 
                      src="/images/ExperienceMapSara.png" 
                      alt="Sara's Experience Map - Creative block journey showing touchpoints, emotions, and opportunities"
                      className="w-full h-auto object-contain bg-white"
                    />
                  </div>
                </div>

                {/* Taylor's Experience Map */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-left">Taylor's Creative Block Journey</h4>
                  <div className="w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    <img 
                      src="/images/ExperienceMapTaylor.png" 
                      alt="Taylor's Experience Map - Creative block journey showing touchpoints, emotions, and opportunities"
                      className="w-full h-auto object-contain bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StorySection>

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
            Through affinity diagramming and thematic analysis, five key insights emerged that would shape our design recommendations. Each insight revealed not just what people do when blocked, but why their current strategies work or fail.
          </p>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6" staggerDelay={0.1}>
            {/* Insight 1: Preparation */}
            <StaggerItem>
              <RefinedMagneticEffect intensity={0.08} range={80}>
                <Card className="xl:h-[70vh] lg:h-[60vh] md:h-full border-t-4 border-t-blue-500 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-3 sm:p-4 flex flex-col h-full">
                    {/* Icon and Number */}
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      </div>
                      <div className="text-xs font-mono text-blue-600 bg-blue-50 dark:bg-blue-950/20 px-2 py-1 rounded">
                        01
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 leading-tight">
                      Preparation
                    </h3>
                    
                    {/* Description */}
                    <div className="flex-grow mb-2 sm:mb-3">
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Participants actively prepared their environment and created routines to mitigate creative blocks. Physical space decluttering and organizing essential tools were critical initial steps.
                      </p>
                    </div>
                    
                    {/* Design Implication */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-2 sm:p-3 mt-auto">
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
                <Card className="xl:h-[70vh] lg:h-[60vh] md:h-full border-t-4 border-t-green-500 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-3 sm:p-4 flex flex-col h-full">
                    {/* Icon and Number */}
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <PenTool className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                      </div>
                      <div className="text-xs font-mono text-green-600 bg-green-50 dark:bg-green-950/20 px-2 py-1 rounded">
                        02
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 leading-tight">
                      Digital vs Physical
                    </h3>
                    
                    {/* Description */}
                    <div className="flex-grow mb-2 sm:mb-3">
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Digital creators emphasized reliability and convenience of digital platforms, while physical artists preferred tangible, organic experiences. Tool effectiveness varied by personal preferences and project type.
                      </p>
                    </div>
                    
                    {/* Design Implication */}
                    <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-2 sm:p-3 mt-auto">
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
                <Card className="xl:h-[70vh] lg:h-[60vh] md:h-full border-t-4 border-t-purple-500 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-3 sm:p-4 flex flex-col h-full">
                    {/* Icon and Number */}
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                      </div>
                      <div className="text-xs font-mono text-purple-600 bg-purple-50 dark:bg-purple-950/20 px-2 py-1 rounded">
                        03
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 leading-tight">
                      Relaxation
                    </h3>
                    
                    {/* Description */}
                    <div className="flex-grow mb-2 sm:mb-3">
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Breaks and relaxation techniques (meditation, walking, nature) were crucial for mental resets. However, participants struggled with guilt and shame during blocks.
                      </p>
                    </div>
                    
                    {/* Design Implication */}
                    <div className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-2 sm:p-3 mt-auto">
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
                <Card className="xl:h-[70vh] lg:h-[60vh] md:h-full border-t-4 border-t-orange-500 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-3 sm:p-4 flex flex-col h-full">
                    {/* Icon and Number */}
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <Target className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                      </div>
                      <div className="text-xs font-mono text-orange-600 bg-orange-50 dark:bg-orange-950/20 px-2 py-1 rounded">
                        04
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 leading-tight">
                      Creative Block
                    </h3>
                    
                    {/* Description */}
                    <div className="flex-grow mb-2 sm:mb-3">
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Participants desired solutions that offer new perspectives, alleviate personal biases, and encourage alternative thinking patterns. Confidence often dropped significantly during blocks.
                      </p>
                    </div>
                    
                    {/* Design Implication */}
                    <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-2 sm:p-3 mt-auto">
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
                <Card className="xl:h-[70vh] lg:h-[60vh] md:h-full border-t-4 border-t-pink-500 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-3 sm:p-4 flex flex-col h-full">
                    {/* Icon and Number */}
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-100 dark:bg-pink-900/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
                      </div>
                      <div className="text-xs font-mono text-pink-600 bg-pink-50 dark:bg-pink-950/20 px-2 py-1 rounded">
                        05
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 leading-tight">
                      Inspiration
                    </h3>
                    
                    {/* Description */}
                    <div className="flex-grow mb-2 sm:mb-3">
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Inspiration sources ranged widely—friends, digital tools, nature, AI, spirituality. The key was that inspiration needed to be personally meaningful and trusted.
                      </p>
                    </div>
                    
                    {/* Design Implication */}
                    <div className="bg-pink-50 dark:bg-pink-950/20 rounded-lg p-2 sm:p-3 mt-auto">
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

      {/* Chapter 05: Solution Framework */}
      <StorySection
        id="solution"
        chapter="Chapter 04"
        storyTitle="Design Implications & Priority Features"
        narrativeHook="Our research pointed toward a technology solution that doesn't fight creative block—it works with it."
        className="bg-muted/30"
      >
        <div className="grid gap-8">
          <p className="text-lg leading-relaxed">
            Rather than trying to eliminate creative block (which may be impossible and counterproductive), our research suggests designing tools that support creators through the natural ebb and flow of creative work. Here's what that looks like.
          </p>
                    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
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
          <FeaturePriorityMatrix />
        </div>
      </StorySection>

      {/* Chapter 06: Future Research */}
      <StorySection
        chapter="Chapter 05"
        storyTitle="Next Steps & Impact"
        narrativeHook="This research opened doors to deeper questions about creativity, technology, and human-centered design."
        className="bg-gradient-to-br from-primary/5 to-secondary/5"
      >
        <div className="grid gap-8">
          <p className="text-lg leading-relaxed">
            Our study provided a foundation for understanding creative block, but also revealed the need for broader research and prototype testing. The implications extend beyond individual tools to how we design technology that supports human creativity.
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
                <Link href="/projects/media-bias-ai">
                  <RefinedButton variant="default" size="lg" className="group">
                    <span className="flex items-center gap-2">
                      <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
                      Ana: AI News Aggregator
                    </span>
                  </RefinedButton>
                </Link>
                <Link href="/projects/backmarket-ia-redesign">
                  <RefinedButton variant="outline" size="lg" className="group">
                    <span className="flex items-center gap-2">
                      BackMarket IA Redesign
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </RefinedButton>
                </Link>
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
