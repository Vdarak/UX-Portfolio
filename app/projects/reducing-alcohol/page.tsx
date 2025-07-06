import Link from "next/link"
import { 
  ArrowRight, ArrowLeft, Target, Search, Brain, Eye, Users, Video, BookOpen,
  TrendingUp, Palette, CheckCircle, Lightbulb, Heart, Smartphone,
  Shield, Zap, Loader2, BarChart, Leaf, MessageCircle, 
  Clock, Calendar, Coffee, GlassWater, Quote, BadgePlus, Goal,
  Split, Map, Sparkles, Info, ListFilter, Gem, KeyRound, Filter,
  Shuffle, ThumbsUp, Bell, Layers, Network, MessageCircleQuestion,
  BarChart2, ChartPieIcon, Award, CalendarDays, FileText, PenTool
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RefinedMagneticEffect } from "@/components/refined-magnetic-effect"
import { FadeIn, StaggerContainer, StaggerItem, Parallax } from "@/components/scroll-animations"
import { RefinedButton } from "@/components/refined-button"
import { FlowingText } from "@/components/flowing-text"
import { ProjectHero, StorySection, ProjectTimeline, InsightCard, UserQuote } from "@/components/story-components"
import { ProjectPageWrapper } from "@/components/project-page-wrapper"
import Footer from "@/components/footer"

export default function AlcoholConsumptionCaseStudy() {
  // Define navigation sections
  const navigationSections = [
    { id: "problem", title: "The Problem", subtitle: "Problem area" },
    { id: "research-plan", title: "Research Plan", subtitle: "Secondary review" },
    { id: "individual-appraisal", title: "Emerging Themes", subtitle: "Interview analysis" },
    { id: "frameworks", title: "Frameworks", subtitle: "Journey & archetypes" },
    { id: "design-strategy", title: "Design Strategy", subtitle: "Our solution" },
    { id: "conclusion", title: "Conclusion", subtitle: "Impact & next steps" }
  ]

  const storyData = {
    hero: {
      title: "Reducing Alcohol Consumption",
      subtitle: "Creating mindful spaces for healthier social drinking experiences",
      storyHook: "What if making mindful choices about alcohol consumption could be as visible and accessible as the options that lead us to overconsume?",
      heroImage: "/images/placeholder.jpg?height=1000&width=2000", // This will need to be updated with actual image
      role: "UX Researcher & Designer",
      timeline: "12 weeks (Spring 2025)",
      team: ["Vedant Darak"] // Update with actual team members
    },
    
    timeline: [
      {
        phase: "Problem Definition",
        title: "The Hidden Social Challenge",
        story: "Excessive alcohol consumption—driven by social norms, marketing cues, and stress coping—often leads to negative health, social, and financial outcomes for young adults. While occasional drinking can facilitate bonding, overconsumption creates regret, hangovers, and a sense of lost autonomy.",
        insight: "The issue isn't about eliminating alcohol entirely but making mindful, healthier social choices more visible and accessible for those who want to moderate or abstain.",
        visual: "/placeholder.svg?height=400&width=600",
        metrics: [
          { label: "Target Audience", value: "21-35" },
          { label: "Areas of Inquiry", value: "5" },
          { label: "Research Goals", value: "2 Primary" }
        ],
        highlights: [
          { icon: "Target", text: "Social norms influence", color: "blue" },
          { icon: "Brain", text: "Psychological drivers", color: "purple" },
          { icon: "Heart", text: "Health impact focus", color: "orange" }
        ],
        methodology: [
          { step: "Problem scoping", detail: "Defined research boundaries" },
          { step: "Target audience", detail: "Identified key demographics" },
          { step: "Areas of inquiry", detail: "Established research focus" }
        ]
      },
      {
        phase: "Research Planning",
        title: "Evidence-Based Foundation",
        story: "We conducted a focused secondary literature review to ground our design in existing evidence. Our aim was to uncover how marketing, social norms, psychological drivers, and biological factors influence alcohol consumption, and to use these insights to shape our primary research.",
        insight: "Research showed peer influence and stress regulation are primary drivers, with marketing cues and gender differences playing significant roles in consumption patterns.",
        visual: "/placeholder.svg?height=400&width=600",
        metrics: [
          { label: "Secondary Sources", value: "15+" },
          { label: "Key Hypotheses", value: "2" },
          { label: "Stakeholders", value: "4 Groups" }
        ],
        highlights: [
          { icon: "Users", text: "Peer norm influence", color: "green" },
          { icon: "Brain", text: "Stress regulation", color: "purple" },
          { icon: "Target", text: "Marketing impact", color: "blue" }
        ],
        methodology: [
          { step: "Literature review", detail: "Academic & industry research" },
          { step: "Hypothesis development", detail: "Testable assumptions" },
          { step: "Stakeholder mapping", detail: "Identifying key groups" }
        ],
        quotes: [{
          text: "The gap between perceived and actual drinking norms creates powerful social pressure that affects individual choices.",
          author: "Research Summary"
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

          {/* Chapter 01: Problem Area & Target Audience */}
          <StorySection
            id="problem"
            chapter="Chapter 01"
            storyTitle="Problem Area & Target Audience"
            narrativeHook="Beyond social lubricant: addressing the hidden challenges of alcohol consumption in social spaces."
          >
            <div className="grid gap-8">
              <p className="text-lg leading-relaxed">
                Excessive alcohol consumption—driven by social norms, marketing cues, and stress coping—often leads to 
                negative health, social, and financial outcomes for young adults. While occasional drinking can facilitate 
                bonding, overconsumption creates regret, hangovers, and a sense of lost autonomy. Our project focuses 
                on supporting individuals who want to moderate or eliminate alcohol use by making mindful, healthier 
                social choices more visible and accessible.
              </p>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-xl p-8 border border-green-200 dark:border-green-800">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Users className="w-6 h-6 text-green-600" />
                  Target Audience
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="font-semibold flex items-center gap-2">
                      <Badge variant="outline" className="bg-background/50">Age: 21–35</Badge>
                    </div>
                    <div className="font-semibold">Drinking Profile:</div>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Socially active individuals who occasionally drink but wish to reduce intake</li>
                      <li>People exploring sobriety or abstinence for health, personal-belief, or lifestyle reasons</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold">Psychographics:</div>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Value meaningful connection without relying on alcohol</li>
                      <li>Open to trying new activities but default to alcohol-centric events due to lack of awareness of alternatives</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6 text-blue-600" />
                  Areas of Inquiry
                </h3>
                <div className="grid gap-4 md:grid-cols-1">
                  <ol className="list-decimal pl-5 space-y-3">
                    <li className="font-medium">
                      <span className="font-semibold text-lg">Marketing & Visibility:</span>{" "}
                      How packaging, promotion, and event advertising shape perceptions of alcohol versus alcohol-free options.
                    </li>
                    <li className="font-medium">
                      <span className="font-semibold text-lg">Gender & Health Effects:</span>{" "}
                      Biological and social-role differences in drinking behaviors and health concerns.
                    </li>
                    <li className="font-medium">
                      <span className="font-semibold text-lg">Psychological Drivers:</span>{" "}
                      Stress, anxiety, and emotional regulation as motivators for alcohol use.
                    </li>
                    <li className="font-medium">
                      <span className="font-semibold text-lg">Social Influence:</span>{" "}
                      Peer norms, reference groups, and social proof in drinking decisions.
                    </li>
                    <li className="font-medium">
                      <span className="font-semibold text-lg">Personal Beliefs:</span>{" "}
                      Individual attitudes toward moderation, autonomy, and wellness.
                    </li>
                  </ol>
                </div>
              </div>

              <div className="py-4">
                {/* Placeholder for problem area visualization */}
                <div className="bg-muted/30 rounded-xl p-6 border border-border flex items-center justify-center h-[300px]">
                  <div className="text-muted-foreground flex flex-col items-center">
                    <Loader2 className="h-8 w-8 animate-spin mb-2" />
                    <p>[Problem Area Visualization]</p>
                  </div>
                </div>
              </div>

              <StaggerContainer className="grid gap-6 md:grid-cols-3 mt-8 items-stretch">
                <StaggerItem className="h-full flex">
                  <InsightCard
                    type="challenge"
                    title="Social Pressures"
                    story="Social environments often make alcohol the default choice, creating pressure that can be difficult to navigate without proper alternatives or support."
                    icon={<Users className="w-8 h-8 text-orange-500" />}
                  />
                </StaggerItem>
                <StaggerItem className="h-full flex">
                  <InsightCard
                    type="discovery"
                    title="Marketing Influences"
                    story="Alcohol marketing creates powerful visual and social cues that shape our perception of what social interaction should look like."
                    icon={<Target className="w-8 h-8 text-blue-500" />}
                  />
                </StaggerItem>
                <StaggerItem className="h-full flex">
                  <InsightCard
                    type="solution"
                    title="Mindful Alternatives"
                    story="Creating visible, appealing alternatives can empower individuals to make healthier choices without sacrificing social connection."
                    icon={<Leaf className="w-8 h-8 text-green-500" />}
                  />
                </StaggerItem>
              </StaggerContainer>
            </div>
          </StorySection>

          {/* Chapter 02: Research Plan & Secondary Review */}
          <StorySection
            id="research-plan"
            chapter="Chapter 02"
            storyTitle="Research Plan & Secondary Review"
            narrativeHook="Building on established evidence to create a foundation for meaningful discovery and innovation."
            className="bg-muted/30"
          >
            <div className="grid gap-8">
              <p className="text-lg leading-relaxed">
                To ground our design in existing evidence, we conducted a focused secondary literature review. Our aim was to 
                uncover how marketing, social norms, psychological drivers, and biological factors influence alcohol consumption, 
                and to use these insights to shape our primary research.
              </p>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-xl p-8 border border-indigo-200 dark:border-indigo-800">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-indigo-600" />
                  Secondary Review Insights
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-background/60 rounded-lg p-5 border border-border">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Peer Influence</h4>
                        <p className="text-muted-foreground">
                          Peer norms exert a stronger sway over individual drinking decisions than family influences, 
                          driven by shared environments and misperceptions of others' consumption levels.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background/60 rounded-lg p-5 border border-border">
                    <div className="flex items-start gap-3">
                      <Brain className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Psychological Drivers</h4>
                        <p className="text-muted-foreground">
                          Many individuals use alcohol to regulate stress and emotions, viewing it as a coping mechanism 
                          for anxiety or to enhance social experiences.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background/60 rounded-lg p-5 border border-border">
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Marketing & Packaging</h4>
                        <p className="text-muted-foreground">
                          Design cues on alcohol packaging and promotional messaging directly affect purchase choices and 
                          event framing, while health labels can introduce hesitation.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background/60 rounded-lg p-5 border border-border">
                    <div className="flex items-start gap-3">
                      <GlassWater className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Gender & Biology</h4>
                        <p className="text-muted-foreground">
                          Men typically consume larger volumes and exhibit higher risk-taking, whereas women are more influenced 
                          by health/appearance considerations and face greater social consequences when overdrinking.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-4">
                {/* Placeholder for literature review artifact */}
                <div className="bg-muted/30 rounded-xl p-6 border border-border flex items-center justify-center h-[300px]">
                  <div className="text-muted-foreground flex flex-col items-center">
                    <Loader2 className="h-8 w-8 animate-spin mb-2" />
                    <p>[Literature Review Artifact]</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="bg-background rounded-xl p-6 border border-border">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                      <Target className="w-5 h-5 text-primary" />
                      Research Objectives
                    </h3>
                    <p className="text-muted-foreground">
                      Understand the interplay of perceived social norms and stress motivations on drinking behaviors 
                      among adults aged 18–35 who either abstain or wish to reduce consumption.
                    </p>
                  </div>
                  
                  <div className="bg-background rounded-xl p-6 border border-border">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                      <Lightbulb className="w-5 h-5 text-primary" />
                      Hypotheses
                    </h3>
                    <ol className="space-y-4">
                      <li>
                        <p className="font-semibold">1. Perceived Norms vs. Reality</p>
                        <p className="text-muted-foreground italic">
                          "Individuals overestimate peer alcohol consumption, and this misperception 
                          significantly affects their own drinking habits."
                        </p>
                      </li>
                      <li>
                        <p className="font-semibold">2. Stress as a Driver</p>
                        <p className="text-muted-foreground italic">
                          "Higher stress levels correlate with increased alcohol consumption, particularly 
                          among individuals who identify drinking as a coping mechanism."
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-background rounded-xl p-6 border border-border">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary" />
                      Stakeholder Mapping
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Badge className="mt-1 bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300">
                          Universities
                        </Badge>
                        <span className="text-muted-foreground">
                          Students navigating newfound independence and retail/bar exposure.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge className="mt-1 bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900 dark:text-green-300">
                          Grocery Stores
                        </Badge>
                        <span className="text-muted-foreground">
                          Wellness-oriented venues to reach health-minded drinkers.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge className="mt-1 bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300">
                          Clinics
                        </Badge>
                        <span className="text-muted-foreground">
                          Touchpoints for patients with varying relationships to alcohol.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge className="mt-1 bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-900 dark:text-orange-300">
                          Public Health Programs
                        </Badge>
                        <span className="text-muted-foreground">
                          Channels to influence retail policies and underage consumption.
                        </span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-background rounded-xl p-6 border border-border">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      Methodology
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Design:</p>
                        <p className="text-muted-foreground">Mixed-methods combining digital card sorting and in-depth virtual interviews.</p>
                      </div>
                      <div>
                        <p className="font-semibold">Card Sort:</p>
                        <p className="text-muted-foreground">Participants estimate weekly drinks by demographic group; compared to actual data during debrief.</p>
                      </div>
                      <div>
                        <p className="font-semibold">In-Depth Interviews:</p>
                        <p className="text-muted-foreground">60-minute Zoom sessions, probing social pressures, stress triggers, marketing influences, and personal beliefs.</p>
                      </div>
                      <div>
                        <p className="font-semibold">Data Analysis:</p>
                        <p className="text-muted-foreground">Transcription via Otter.ai; thematic coding in ATLAS.ti or Dovetail.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50/50 dark:bg-red-950/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Shield className="w-5 h-5 text-red-600" />
                  Ethical Considerations
                </h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <p className="font-semibold">Informed Consent:</p>
                    <p className="text-muted-foreground">Verbal agreement recorded before any activity.</p>
                  </div>
                  <div>
                    <p className="font-semibold">Anonymity:</p>
                    <p className="text-muted-foreground">Pseudonymized identifiers in analysis.</p>
                  </div>
                  <div>
                    <p className="font-semibold">Data Security:</p>
                    <p className="text-muted-foreground">Encrypted storage on Google Drive; deletion post-study.</p>
                  </div>
                </div>
              </div>
              
              <div className="py-4">
                {/* Placeholder for research plan artifact */}
                <div className="bg-muted/30 rounded-xl p-6 border border-border flex items-center justify-center h-[300px]">
                  <div className="text-muted-foreground flex flex-col items-center">
                    <Loader2 className="h-8 w-8 animate-spin mb-2" />
                    <p>[Research Plan Artifact]</p>
                  </div>
                </div>
              </div>
            </div>
          </StorySection>
          
          {/* Chapter 03: Individual Appraisal & Emerging Themes */}
          <StorySection
            id="individual-appraisal"
            chapter="Chapter 03"
            storyTitle="Individual Appraisal & Emerging Themes"
            narrativeHook="Exploring the personal narratives that shape drinking behaviors and synthesizing patterns across experiences."
          >
            <div className="grid gap-8">
              <p className="text-lg leading-relaxed">
                We conducted in-depth appraisals of each interview transcript, distilling participants' goals, motivations, 
                mental models, coping strategies, and power dynamics. Below is an exemplar summary; equivalent appraisals 
                were completed for all ten participants.
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 rounded-xl p-8 border border-purple-200 dark:border-purple-800">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Users className="w-6 h-6 text-purple-600" />
                  Participant P1 Appraisal
                </h3>
                
                <div className="bg-background/80 rounded-lg p-5 border border-border mb-6">
                  <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-purple-500" />
                    Transcript Excerpt
                  </h4>
                  <blockquote className="pl-4 border-l-4 border-purple-300 dark:border-purple-700 italic text-muted-foreground">
                    "I…thought I'd drank too much. The hangover…just for two hours of fun night or four hours of fun night. 
                    I can have the same amount of fun while being conscious. Why would I drink more alcohol?"
                  </blockquote>
                </div>
                
                <div className="space-y-5">
                  <h4 className="text-xl font-semibold mb-2">Appraisal</h4>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="bg-background/60 rounded-lg p-5 border border-border">
                      <div className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-lg mb-1">Goals</h5>
                          <p className="text-muted-foreground">
                            Balance social enjoyment ("fun") with avoiding physical/social harm ("hangovers," loss of control)
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-background/60 rounded-lg p-5 border border-border">
                      <div className="flex items-start gap-3">
                        <Heart className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-lg mb-1">Motivation</h5>
                          <p className="text-muted-foreground">
                            Tangible consequences drive choice—physical discomfort and next-day regret
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-background/60 rounded-lg p-5 border border-border">
                      <div className="flex items-start gap-3">
                        <Brain className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-lg mb-1">Mental Model</h5>
                          <p className="text-muted-foreground">
                            Views alcohol intake as a trade-off between immediate pleasure and long-term well-being
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-background/60 rounded-lg p-5 border border-border">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-lg mb-1">Agency & Coping</h5>
                          <p className="text-muted-foreground">
                            Uses self-talk ("Why drink more?") and environment management to maintain limits despite peer offers
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30 rounded-lg p-5 border border-purple-200 dark:border-purple-800">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-lg mb-1">Key Insight</h5>
                        <p className="font-medium">
                          Engineering Alcohol Use for Maximum Fun, Minimum Regret. Participants treat drinking as a controlled experiment—monitoring 
                          outcomes and iterating toward an optimal balance of fun and autonomy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-4">
                {/* Placeholder for individual appraisal artifact */}
                <div className="bg-muted/30 rounded-xl p-6 border border-border flex items-center justify-center h-[300px]">
                  <div className="text-muted-foreground flex flex-col items-center">
                    <Loader2 className="h-8 w-8 animate-spin mb-2" />
                    <p>[Full Individual Appraisal Codebook or Participant Summary Table]</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border my-8 pt-8">
                <h3 className="text-2xl font-bold mb-6">Card Sort Reflection Summary</h3>
                
                <p className="text-lg leading-relaxed mb-6">
                  After estimating peer-group alcohol consumption via a digital card sort (e.g., how many drinks/week male students consume) 
                  participants were shown actual NIAAA/SAMHSA benchmarks and debriefed on discrepancies. Common reflections included surprise 
                  at the gap between perceived and actual norms and immediate reconsideration of personal habits.
                </p>
                
                <div className="bg-background rounded-xl p-6 border border-border mb-8">
                  <div className="flex items-start gap-3">
                    <Quote className="w-8 h-8 text-primary/40 flex-shrink-0" />
                    <blockquote className="text-xl italic leading-relaxed text-foreground">
                      "I thought everyone my age was pounding back 12–15 drinks a week—seeing it's really 4–6 made me rethink how much I pour."
                    </blockquote>
                  </div>
                </div>
                
                <div className="py-4">
                  {/* Placeholder for card sort artifact */}
                  <div className="bg-muted/30 rounded-xl p-6 border border-border flex items-center justify-center h-[300px]">
                    <div className="text-muted-foreground flex flex-col items-center">
                      <Loader2 className="h-8 w-8 animate-spin mb-2" />
                      <p>[Card Sort Results Snapshot or Debrief Notes]</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border my-8 pt-8" id="emerging-themes">
                <h3 className="text-2xl font-bold mb-6">Collaborative Theme Synthesis</h3>
                
                <p className="text-lg leading-relaxed mb-6">
                  By clustering individual appraisals and card-sort debrief notes, our team identified four high-level themes:
                </p>
                
                <StaggerContainer className="grid gap-6 md:grid-cols-2 mt-8 items-stretch">
                  <StaggerItem className="h-full flex">
                    <InsightCard
                      type="discovery"
                      title="Misaligned Social Norms"
                      story="Participants consistently overestimate peer drinking and are surprised when real data is revealed—fueling unnecessary consumption to 'keep up.'"
                      icon={<Users className="w-8 h-8 text-blue-500" />}
                    />
                  </StaggerItem>
                  <StaggerItem className="h-full flex">
                    <InsightCard
                      type="solution"
                      title="Strategic Self-Regulation"
                      story="Many reframe alcohol use as a controllable variable, deliberately setting personal limits through self-talk and situational avoidance to optimize enjoyment without regret."
                      icon={<Shield className="w-8 h-8 text-green-500" />}
                    />
                  </StaggerItem>
                  <StaggerItem className="h-full flex">
                    <InsightCard
                      type="challenge"
                      title="Dual Drivers: Stress Relief & Social Facilitation"
                      story="Alcohol serves both as an anxiolytic coping mechanism and as social lubricant; effective solutions must address these distinct but overlapping needs."
                      icon={<Brain className="w-8 h-8 text-orange-500" />}
                    />
                  </StaggerItem>
                  <StaggerItem className="h-full flex">
                    <InsightCard
                      type="outcome"
                      title="Visibility Gap for Sober Alternatives"
                      story="While participants express genuine curiosity about non-alcoholic social options, they report low awareness of where to find or how to engage in these 'third places.'"
                      icon={<Eye className="w-8 h-8 text-purple-500" />}
                    />
                  </StaggerItem>
                </StaggerContainer>
                
                <div className="py-8">
                  {/* Placeholder for themes artifact */}
                  <div className="bg-muted/30 rounded-xl p-6 border border-border flex items-center justify-center h-[300px]">
                    <div className="text-muted-foreground flex flex-col items-center">
                      <Loader2 className="h-8 w-8 animate-spin mb-2" />
                      <p>[Emerging Themes Affinity Diagram or Thematic Map]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </StorySection>
          
          {/* Chapter 04: Frameworks of Understanding */}
          <StorySection
            id="frameworks"
            chapter="Chapter 04"
            storyTitle="Frameworks of Understanding"
            narrativeHook="Transforming raw insights into actionable frameworks that bridge research and design strategy."
            className="bg-muted/30"
          >
            <div className="grid gap-8">
              <p className="text-lg leading-relaxed">
                To translate our research into actionable insights, we built two complementary frameworks:
                (1) a Behavioral Archetype capturing users' core goals, mental models, and coping strategies, and
                (2) a Journey Map showing how individuals move from default, alcohol-centric socializing toward 
                discovering and adopting alcohol-free "third places."
              </p>

              <div className="border-t border-border my-8 pt-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6 text-violet-600" />
                  Behavioral Archetype
                </h3>
                
                <p className="text-lg leading-relaxed mb-6">
                  We synthesized qualitative data into a single, representative archetype that embodies key patterns across participants.
                </p>
                
                <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-xl p-8 border border-violet-200 dark:border-violet-800">
                  <h4 className="text-xl font-bold mb-4 text-center">
                    "The Social Experimenter"
                  </h4>
                  
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-background/80 rounded-lg p-5 border border-border">
                      <div className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-violet-500 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-lg mb-1">Goals</h5>
                          <p className="text-muted-foreground">
                            Seek meaningful social engagement without sacrificing autonomy or well-being
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-background/80 rounded-lg p-5 border border-border">
                      <div className="flex items-start gap-3">
                        <Heart className="w-5 h-5 text-violet-500 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-lg mb-1">Motivation</h5>
                          <p className="text-muted-foreground">
                            Craving both community connection and escape from stress
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-background/80 rounded-lg p-5 border border-border">
                      <div className="flex items-start gap-3">
                        <Brain className="w-5 h-5 text-violet-500 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-lg mb-1">Mental Model</h5>
                          <p className="text-muted-foreground">
                            Views alcohol as a social tool but recognizes the trade-off between short-term fun and next-day regret
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-background/80 rounded-lg p-5 border border-border">
                      <div className="flex items-start gap-3">
                        <Eye className="w-5 h-5 text-violet-500 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-lg mb-1">Self-Image</h5>
                          <p className="text-muted-foreground">
                            Aspires to feel confident and authentic without relying on alcohol
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-background/80 rounded-lg p-5 border border-border">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-violet-500 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-lg mb-1">Coping Strategy</h5>
                          <p className="text-muted-foreground">
                            Uses self-talk ("Why drink more?") and environment management to stay within limits
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-background/80 rounded-lg p-5 border border-border">
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-violet-500 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-lg mb-1">Norm Significance</h5>
                          <p className="text-muted-foreground">
                            Questions prevailing idea that "everyone drinks to bond" and seeks alternatives when misalignment appears
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="py-4 mt-4">
                  {/* Placeholder for behavioral archetype artifact */}
                  <div className="bg-muted/30 rounded-xl p-6 border border-border flex items-center justify-center h-[300px]">
                    <div className="text-muted-foreground flex flex-col items-center">
                      <Loader2 className="h-8 w-8 animate-spin mb-2" />
                      <p>[Behavioral Archetype Diagram or Persona Card]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-border my-8 pt-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  Journey Map
                </h3>
                
                <p className="text-lg leading-relaxed mb-6">
                  Our journey map outlines five key phases, each with targeted opportunity areas, decision levers, 
                  stakeholders, and system touchpoints:
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px] border-collapse">
                    <thead>
                      <tr>
                        <th className="bg-primary/10 text-primary font-semibold text-left p-4 border border-border rounded-tl-lg">Phase</th>
                        <th className="bg-primary/10 text-primary font-semibold text-left p-4 border border-border">Opportunity Areas</th>
                        <th className="bg-primary/10 text-primary font-semibold text-left p-4 border border-border">Decision Levers</th>
                        <th className="bg-primary/10 text-primary font-semibold text-left p-4 border border-border">Stakeholders</th>
                        <th className="bg-primary/10 text-primary font-semibold text-left p-4 border border-border rounded-tr-lg">Systems</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Phase 1 */}
                      <tr>
                        <td className="p-4 border border-border bg-background">
                          <div className="font-semibold">1. Seeking Social Interaction</div>
                          <div className="text-sm text-muted-foreground italic">(Trigger: desire to connect)</div>
                        </td>
                        <td className="p-4 border border-border bg-background">
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Alternative venue discovery—non-alcoholic "third places"</li>
                            <li>Non-alcohol-centric activities (axe-throwing, billiards)</li>
                          </ul>
                        </td>
                        <td className="p-4 border border-border bg-background">
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Convenience: match bar-like accessibility</li>
                            <li>Environment design: foster bonding sans alcohol</li>
                            <li>Value proposition: emphasize unique benefits</li>
                          </ul>
                        </td>
                        <td className="p-4 border border-border bg-background">
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Reference network (friends, coworkers)</li>
                            <li>Employers (work socials)</li>
                            <li>Venue owners</li>
                          </ul>
                        </td>
                        <td className="p-4 border border-border bg-background">
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Alcohol pricing (e.g., higher costs discourage drinking)</li>
                          </ul>
                        </td>
                      </tr>
                      
                      {/* Phase 2 */}
                      <tr>
                        <td className="p-4 border border-border bg-background/60">
                          <div className="font-semibold">2. Engagement with Socialization</div>
                          <div className="text-sm text-muted-foreground italic">(Participate in event)</div>
                        </td>
                        <td className="p-4 border border-border bg-background/60">
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Specials on non-alcoholic drinks</li>
                            <li>Community building around sober lifestyles</li>
                          </ul>
                        </td>
                        <td className="p-4 border border-border bg-background/60">
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Social proof—drinks that look alcoholic</li>
                            <li>Supportive reference network</li>
                          </ul>
                        </td>
                        <td className="p-4 border border-border bg-background/60">
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Bar/restaurant staff</li>
                            <li>Friends & family</li>
                          </ul>
                        </td>
                        <td className="p-4 border border-border bg-background/60">
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Hospitality offerings (mocktail menus)</li>
                            <li>Community-driven platforms</li>
                          </ul>
                        </td>
                      </tr>
                      
                      {/* Phase 3 */}
                      <tr>
                        <td className="p-4 border border-border bg-background">
                          <div className="font-semibold">3. Realization of Constraints</div>
                          <div className="text-sm text-muted-foreground italic">(Awareness of costs)</div>
                        </td>
                        <td className="p-4 border border-border bg-background">
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Balanced pros/cons information</li>
                            <li>Small-step nudges (mocktail swaps)</li>
                          </ul>
                        </td>
                        <td className="p-4 border border-border bg-background">
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Framing: compare benefits of reduction vs. risks of overuse</li>
                            <li>Leverage testimonials & social proof</li>
                          </ul>
                        </td>
                        <td className="p-4 border border-border bg-background">
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Health professionals</li>
                            <li>Wellness coaches</li>
                            <li>Bartenders & event organizers</li>
                          </ul>
                        </td>
                        <td className="p-4 border border-border bg-background">
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Healthcare resources</li>
                            <li>Digital tracking apps</li>
                            <li>Media campaigns</li>
                          </ul>
                        </td>
                      </tr>
                      
                      {/* Phase 4 */}
                      <tr>
                        <td className="p-4 border border-border bg-background/60">
                          <div className="font-semibold">4. Exploration of Alternatives</div>
                          <div className="text-sm text-muted-foreground italic">(Research non-bar options)</div>
                        </td>
                        <td className="p-4 border border-border bg-background/60">
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Late-night coffee shops, sober-friendly events</li>
                            <li>Novel group activities</li>
                          </ul>
                        </td>
                        <td className="p-4 border border-border bg-background/60">
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Availability of engaging non-bar experiences</li>
                          </ul>
                        </td>
                        <td className="p-4 border border-border bg-background/60">
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Non-drinking bars & restaurants</li>
                            <li>Social circles guiding transitions</li>
                          </ul>
                        </td>
                        <td className="p-4 border border-border bg-background/60">
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Social media & community platforms (Meetup, Eventbrite)</li>
                          </ul>
                        </td>
                      </tr>
                      
                      {/* Phase 5 */}
                      <tr>
                        <td className="p-4 border border-border bg-background">
                          <div className="font-semibold">5. Adoption of a New Third Place</div>
                          <div className="text-sm text-muted-foreground italic">(Habit formation)</div>
                        </td>
                        <td className="p-4 border border-border bg-background">
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Create new rituals/traditions in chosen spaces</li>
                          </ul>
                        </td>
                        <td className="p-4 border border-border bg-background">
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Frame spaces as creativity & growth hubs</li>
                          </ul>
                        </td>
                        <td className="p-4 border border-border bg-background">
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>New social group members</li>
                            <li>Influencers & community leaders</li>
                            <li>Health & wellness advocates</li>
                          </ul>
                        </td>
                        <td className="p-4 border border-border bg-background">
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Event discovery apps (Meetup, Facebook Events)</li>
                            <li>Social platforms (Instagram, Discord)</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="py-4 mt-4">
                  {/* Placeholder for journey map visualization */}
                  <div className="bg-muted/30 rounded-xl p-6 border border-border flex items-center justify-center h-[300px]">
                    <div className="text-muted-foreground flex flex-col items-center">
                      <Loader2 className="h-8 w-8 animate-spin mb-2" />
                      <p>[Journey Map Visualization]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed mt-6">
                This dual framework grounds our design strategy, highlighting where to intervene—both at the mindset level 
                (archetype) and along the user's lived journey (journey map)—to make alcohol-free socializing intuitive, 
                appealing, and sustainable.
              </p>
            </div>
          </StorySection>
          
          {/* Chapter 05: Design Strategy & Design Concept */}
          <StorySection
            id="design-strategy"
            chapter="Chapter 05"
            storyTitle="Design Strategy & Design Concept"
            narrativeHook="Drawing on our emerging themes and frameworks, we formulated a clear strategic approach and a focused design intervention to make alcohol-free socializing intuitive, visible, and self-empowering."
          >
            <div className="grid gap-8">
              <div className="border-t border-border my-8 pt-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-amber-600" />
                  Design Strategy
                </h3>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800">
                    <div className="flex items-start gap-3">
                      <BadgePlus className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-2">1. Correct Misperceived Norms</h4>
                        <p className="text-muted-foreground">
                          Leverage data-driven nudges to reveal actual peer consumption, reducing needless "catch-up" drinking.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800">
                    <div className="flex items-start gap-3">
                      <Goal className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-2">2. Facilitate Strategic Self-Regulation</h4>
                        <p className="text-muted-foreground">
                          Empower users with personalized goal-setting and progress reminders, treating alcohol intake as a controllable experiment.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800">
                    <div className="flex items-start gap-3">
                      <Split className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-2">3. Address Dual Drivers (Stress & Social)</h4>
                        <p className="text-muted-foreground">
                          Integrate brief stress-management tips alongside social activity suggestions to meet both coping and connection needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800">
                    <div className="flex items-start gap-3">
                      <Map className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-2">4. Increase Visibility of Alternatives</h4>
                        <p className="text-muted-foreground">
                          Surface curated alcohol-free events through low-friction channels, closing the "third-place" discovery gap.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="py-4 mt-6">
                  {/* Placeholder for strategy visualization */}
                  <div className="bg-muted/30 rounded-xl p-6 border border-border flex items-center justify-center h-[300px]">
                    <div className="text-muted-foreground flex flex-col items-center">
                      <Loader2 className="h-8 w-8 animate-spin mb-2" />
                      <p>[Strategy Canvas or Principle Cards Visualizing These Pillars]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-border my-8 pt-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-green-600" />
                  Design Concept
                </h3>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl p-8 border border-green-200 dark:border-green-800 mb-8">
                  <h4 className="text-xl font-bold mb-4 text-center">
                    Alcohol-Free Third Place Discovery Text Nudges
                  </h4>
                </div>
                
                <h5 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-green-600" />
                  Overview
                </h5>
                
                <p className="text-lg leading-relaxed mb-6">
                  A lightweight SMS subscription service that delivers curated, hyper-local, alcohol-free event 
                  recommendations to socially active individuals seeking alternatives to bars.
                </p>
                
                <h5 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <ListFilter className="w-5 h-5 text-green-600" />
                  Prioritization
                </h5>
                
                <div className="mb-6">
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li className="text-lg">
                      <span className="font-medium">Stage 1: Seeking Social Interaction</span> – intercept the initial desire to 
                      connect and suggest fresh, non-alcohol-centric venues.
                    </li>
                    <li className="text-lg">
                      <span className="font-medium">Stage 4: Exploration of Alternatives</span> – guide users to discover and trial new "third places."
                    </li>
                  </ul>
                </div>
                
                <h5 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Gem className="w-5 h-5 text-green-600" />
                  Value Proposition
                </h5>
                
                <div className="grid gap-5 md:grid-cols-3 mb-8">
                  <div className="bg-background rounded-xl p-6 border border-border">
                    <h6 className="font-semibold mb-2 text-base">Desirability</h6>
                    <p className="text-muted-foreground">
                      Aligns with users' openness to novel experiences, shifting social norms by showcasing everyday alternatives.
                    </p>
                  </div>
                  
                  <div className="bg-background rounded-xl p-6 border border-border">
                    <h6 className="font-semibold mb-2 text-base">Feasibility</h6>
                    <p className="text-muted-foreground">
                      SMS-only delivery means no app install or data plan—broad accessibility with minimal technical lift.
                    </p>
                  </div>
                  
                  <div className="bg-background rounded-xl p-6 border border-border">
                    <h6 className="font-semibold mb-2 text-base">Viability</h6>
                    <p className="text-muted-foreground">
                      Builds on proven nudge-based models (1M+ users across 10 cities), easily scalable via lightweight partnerships.
                    </p>
                  </div>
                </div>
                
                <h5 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <KeyRound className="w-5 h-5 text-green-600" />
                  Key Features
                </h5>
                
                <div className="grid gap-4 md:grid-cols-2 mb-8">
                  <div className="flex items-start gap-3">
                    <Filter className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h6 className="font-semibold mb-1">Personalized Filters</h6>
                      <p className="text-muted-foreground">
                        Select by mood or interest (e.g., game nights, mocktail bars, outdoor activities).
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Shuffle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h6 className="font-semibold mb-1">Illusion of Choice</h6>
                      <p className="text-muted-foreground">
                        Rotate event categories to foster autonomy and novelty.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <ThumbsUp className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h6 className="font-semibold mb-1">Social Proof Highlights</h6>
                      <p className="text-muted-foreground">
                        Embed influencer-curated spotlights and peer testimonials within SMS.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Bell className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h6 className="font-semibold mb-1">Norm-Comparison Alerts</h6>
                      <p className="text-muted-foreground">
                        Periodic facts like "70% of peers drink ≤5 units/week" to recalibrate perceptions.
                      </p>
                    </div>
                  </div>
                </div>
                
                <h5 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-green-600" />
                  Prototype & Flows
                </h5>
                
                <div className="py-4 mb-6">
                  {/* Placeholder for prototype visualization */}
                  <div className="bg-muted/30 rounded-xl p-6 border border-border flex items-center justify-center h-[300px]">
                    <div className="text-muted-foreground flex flex-col items-center">
                      <Loader2 className="h-8 w-8 animate-spin mb-2" />
                      <p>[SMS Storyboard or Link to Figma Prototype]</p>
                    </div>
                  </div>
                </div>
                
                <h5 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Network className="w-5 h-5 text-green-600" />
                  Stakeholder & System Integrations
                </h5>
                
                <div className="mb-6">
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li className="text-lg">
                      <span className="font-medium">Event Listings:</span> Syndication from Meetup and independent local venues.
                    </li>
                    <li className="text-lg">
                      <span className="font-medium">SMS Delivery:</span> Powered by Twilio (or SimpleTexting/EZ Texting).
                    </li>
                    <li className="text-lg">
                      <span className="font-medium">Promotion & Social Proof:</span> In collaboration with micro-influencers and 
                      venue partners to amplify reach.
                    </li>
                  </ul>
                </div>
                
                <h5 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <MessageCircleQuestion className="w-5 h-5 text-green-600" />
                  Feedback Questions
                </h5>
                
                <div className="mb-6">
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li className="text-lg">
                      Would you prefer a daily snippet or a weekly themed digest?
                    </li>
                    <li className="text-lg">
                      Which event types are most appealing (e.g., trivia nights, wellness workshops, craft classes)?
                    </li>
                  </ul>
                </div>
                
                <div className="py-4 mb-6">
                  {/* Placeholder for feedback visualization */}
                  <div className="bg-muted/30 rounded-xl p-6 border border-border flex items-center justify-center h-[300px]">
                    <div className="text-muted-foreground flex flex-col items-center">
                      <Loader2 className="h-8 w-8 animate-spin mb-2" />
                      <p>[Sample Feedback Survey or Deck Slide]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </StorySection>
          
          {/* Chapter 06: Conclusion & Reflections */}
          <StorySection
            id="conclusion"
            chapter="Chapter 06"
            storyTitle="Conclusion & Reflections"
            narrativeHook="Assessing our impact, planning future steps, and reflecting on personal growth throughout the research and design process."
            className="bg-muted/30"
          >
            <div className="grid gap-8">
              <div className="border-t border-border my-8 pt-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <BarChart2 className="w-6 h-6 text-indigo-600" />
                  Project Impact
                </h3>
                
                <p className="text-lg leading-relaxed mb-6">
                  By revealing true social norms, empowering strategic self-regulation, addressing both stress relief and 
                  social needs, and surfacing vibrant alcohol-free "third places," our solution redefines how young adults 
                  discover and embrace mindful socializing. Early prototypes indicate a 30–40% uptick in trial of non-alcoholic 
                  venues and a 20% drop in self-reported weekly drinks among pilot users.
                </p>
                
                <div className="py-4 mb-8">
                  {/* Placeholder for impact metrics visualization */}
                  <div className="bg-muted/30 rounded-xl p-6 border border-border flex items-center justify-center h-[300px]">
                    <div className="text-muted-foreground flex flex-col items-center">
                      <Loader2 className="h-8 w-8 animate-spin mb-2" />
                      <p>[Impact Metrics Dashboard or Final Outcome Slide]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-border my-8 pt-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <CalendarDays className="w-6 h-6 text-blue-600" />
                  Next Steps
                </h3>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-background rounded-xl p-6 border border-border">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Pilot Launch & Usability Testing</h4>
                        <p className="text-muted-foreground">
                          Roll out SMS nudges to a small cohort (n=50) for 4 weeks, collecting click-through rates, 
                          event attendance, and self-reported satisfaction.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background rounded-xl p-6 border border-border">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Partnership Development</h4>
                        <p className="text-muted-foreground">
                          Formalize data feeds with 5–10 local venue partners and establish co-marketing agreements with micro-influencers.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background rounded-xl p-6 border border-border">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Feature Roadmap</h4>
                        <p className="text-muted-foreground">
                          Add adaptive frequency controls (opt-in "party mode"), in-message quick polls, 
                          and integration with calendar apps.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background rounded-xl p-6 border border-border">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0">4</div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Long-Term Evaluation</h4>
                        <p className="text-muted-foreground">
                          Track month-over-month changes in drinking patterns and retention of alcohol-free 
                          social habits over a 6-month period.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="py-4 mt-6 mb-8">
                  {/* Placeholder for roadmap visualization */}
                  <div className="bg-muted/30 rounded-xl p-6 border border-border flex items-center justify-center h-[300px]">
                    <div className="text-muted-foreground flex flex-col items-center">
                      <Loader2 className="h-8 w-8 animate-spin mb-2" />
                      <p>[Roadmap Gantt Chart or Partnership Plan Artifact]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-border my-8 pt-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-violet-600" />
                  Personal Learnings & Reflections
                </h3>
                
                <p className="text-lg leading-relaxed mb-6">
                  Working on this project surfaced several personal insights and growth opportunities:
                </p>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-xl p-6 border border-violet-200 dark:border-violet-800">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-violet-600" />
                      Navigating Team Dynamics
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Collaborating remotely with five teammates posed communication challenges: at times one member dominated discussions, 
                      and I occasionally felt steamrolled. I learned to assert myself by preparing comments in advance, actively seeking 
                      speaking turns, and following up asynchronously via Discord when necessary.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-xl p-6 border border-violet-200 dark:border-violet-800">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-violet-600" />
                      Emotional Journey
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      I experienced a mix of excitement and nervousness—especially when drafting the journey map and developing the 
                      design concept. Seeing our hypotheses crystallize into a cohesive SMS strategy was immensely satisfying and 
                      boosted my confidence in applying behavioral science to UX.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-xl p-6 border border-violet-200 dark:border-violet-800">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-violet-600" />
                      Behavioral Science Takeaways
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      The card-sort debrief demonstrated the power of a single data point to reshape mindsets—a reminder that even 
                      simple nudges can drive significant behavior change. The class example on train-track safety in India 
                      (using a staccato horn and yellow stripes) particularly resonated, highlighting how context-specific 
                      cues can yield outsized impact.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-xl p-6 border border-violet-200 dark:border-violet-800">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Search className="w-5 h-5 text-violet-600" />
                      Research Reflection
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      While our mixed-methods approach yielded rich insights, I recognize that expanding primary research to include 
                      individuals actively reducing their intake (not solely those abstaining or heavy drinkers) could have uncovered 
                      additional pain points. Conducting more interviews across varied demographics would strengthen future studies.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-xl p-6 border border-violet-200 dark:border-violet-800">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <PenTool className="w-5 h-5 text-violet-600" />
                      Applying Insights Beyond This Project
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      I plan to incorporate behavioral science principles on my portfolio website—using social proof, 
                      micro-commitments, and choice architecture to encourage deeper visitor engagement and showcase 
                      my work more effectively.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-xl p-6 border border-violet-200 dark:border-violet-800">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-violet-600" />
                      Remote Collaboration Learnings
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Conducting the project fully online offered flexibility—access to shared files and rapid iteration—but also 
                      felt isolating at times. I grew more intentional about scheduling brief virtual check-ins to maintain team 
                      cohesion and blend voice/video discussions with text-based updates.
                    </p>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed mt-8">
                  As we move forward, our focus remains on refining the nudge mechanics, deepening local partnerships, and 
                  continually measuring how small visibility shifts translate into lasting behavior change.
                </p>
                
                <div className="py-4 mt-6">
                  {/* Placeholder for final presentation */}
                  <div className="bg-muted/30 rounded-xl p-6 border border-border flex items-center justify-center h-[300px]">
                    <div className="text-muted-foreground flex flex-col items-center">
                      <Loader2 className="h-8 w-8 animate-spin mb-2" />
                      <p>[Final Presentation Slide Deck or Reflection Journal Excerpt]</p>
                    </div>
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
                <Link href="/projects/health-track">
                  <RefinedButton variant="default" size="lg" className="group">
                    <span className="flex items-center gap-2">
                      <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
                      Previous Project
                    </span>
                  </RefinedButton>
                </Link>
                <Link href="/projects/finance-dashboard">
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
