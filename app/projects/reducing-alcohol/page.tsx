import Link from "next/link"
import {
  ArrowRight,
  ArrowLeft,
  Target,
  Search,
  Brain,
  Eye,
  Users,
  Heart,
  Shield,
  Loader2,
  MessageCircle,
  GlassWater,
  BadgePlus,
  Goal,
  Split,
  Map,
  KeyRound,
  Filter,
  Shuffle,
  ThumbsUp,
  Bell,
  PenTool,
  FlaskConical,
  Group,
  TestTube,
  Microscope,
  Dna,
  UserCheck,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RefinedMagneticEffect } from "@/components/refined-magnetic-effect"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/scroll-animations"
import { RefinedButton } from "@/components/refined-button"
import { FlowingText } from "@/components/flowing-text"
import { ProjectHero, StorySection, InsightCard, UserQuote } from "@/components/story-components"
import { ProjectPageWrapper } from "@/components/project-page-wrapper"
import Footer from "@/components/footer"

export default function AlcoholConsumptionCaseStudy() {
  const navigationSections = [
    { id: "problem", title: "The Problem", subtitle: "Problem area" },
    { id: "research-plan", title: "Research Plan", subtitle: "Secondary review" },
    { id: "individual-appraisal", title: "Emerging Themes", subtitle: "Interview analysis" },
    { id: "frameworks", title: "Frameworks", subtitle: "Journey & archetypes" },
    { id: "design-strategy", title: "Design Strategy", subtitle: "Our solution" },
    { id: "conclusion", title: "Conclusion", subtitle: "Impact & next steps" },
  ]

  const storyData = {
    hero: {
      title: "Reducing Alcohol Consumption",
      subtitle: "Creating mindful spaces for healthier social drinking experiences",
      storyHook:
        "What if making mindful choices about alcohol consumption could be as visible and accessible as the options that lead us to overconsume?",
      heroImage: "/placeholder.svg?height=1000&width=2000",
      role: "UX Researcher & Designer",
      timeline: "12 weeks (Spring 2025)",
      team: ["Vedant Darak"],
    },
  }

  return (
    <>
      <ProjectPageWrapper sections={navigationSections}>
        <main className="min-h-screen bg-background">
          <div id="hero">
            <ProjectHero {...storyData.hero} />
          </div>

          <StorySection
            id="problem"
            chapter="Chapter 01"
            storyTitle="Problem Area & Target Audience"
            narrativeHook="Beyond social lubricant: addressing the hidden challenges of alcohol consumption in social spaces."
          >
            <div className="grid gap-12">
              <p className="text-lg leading-relaxed">
                Excessive alcohol consumption—driven by social norms, marketing cues, and stress coping—often leads to
                negative health, social, and financial outcomes for young adults. While occasional drinking can
                facilitate bonding, overconsumption creates regret, hangovers, and a sense of lost autonomy. Our project
                focuses on supporting individuals who want to moderate or eliminate alcohol use by making mindful,
                healthier social choices more visible and accessible.
              </p>

              <Card className="p-8 border-t-4 border-t-blue-500 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <UserCheck className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl">Target Audience: The Mindful Socializer</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0 grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">Demographics</h4>
                    <p className="text-muted-foreground">
                      Ages 21-35, socially active, and open to new experiences but often default to alcohol-centric
                      events.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">Drinking Profile</h4>
                    <p className="text-muted-foreground">
                      Includes those who occasionally drink but wish to reduce intake, and those exploring sobriety for
                      health, personal, or lifestyle reasons.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">Areas of Inquiry</h3>
                <StaggerContainer className="flex flex-wrap justify-center gap-6">
                  {[
                    {
                      icon: Target,
                      title: "Marketing & Visibility",
                      text: "How packaging, promotion, and event advertising shape perceptions of alcohol versus non-alcoholic options.",
                      color: "blue",
                    },
                    {
                      icon: Dna,
                      title: "Gender & Health Effects",
                      text: "Biological and social-role differences in drinking behaviors and health concerns.",
                      color: "green",
                    },
                    {
                      icon: Brain,
                      title: "Psychological Drivers",
                      text: "Stress, anxiety, and emotional regulation as motivators for alcohol use.",
                      color: "purple",
                    },
                    {
                      icon: Group,
                      title: "Social Influence",
                      text: "Peer norms, reference groups, and social proof in drinking decisions.",
                      color: "orange",
                    },
                    {
                      icon: Heart,
                      title: "Personal Beliefs",
                      text: "Individual attitudes toward moderation, autonomy, and wellness.",
                      color: "pink",
                    },
                  ].map((item, index) => {
                    const Icon = item.icon
                    const colorClass = {
                      blue: "border-t-blue-500",
                      green: "border-t-green-500",
                      purple: "border-t-purple-500",
                      orange: "border-t-orange-500",
                      pink: "border-t-pink-500",
                    }[item.color]
                    const iconBgClass = {
                      blue: "bg-blue-100 dark:bg-blue-900/20 text-blue-600",
                      green: "bg-green-100 dark:bg-green-900/20 text-green-600",
                      purple: "bg-purple-100 dark:bg-purple-900/20 text-purple-600",
                      orange: "bg-orange-100 dark:bg-orange-900/20 text-orange-600",
                      pink: "bg-pink-100 dark:bg-pink-900/20 text-pink-600",
                    }[item.color]

                    return (
                      <StaggerItem
                        key={index}
                        className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                      >
                        <RefinedMagneticEffect intensity={0.08} range={80}>
                          <Card
                            className={`h-full border-t-4 ${colorClass} transition-all duration-300 hover:shadow-lg group`}
                          >
                            <CardContent className="p-6 flex flex-col h-full">
                              <div
                                className={`w-10 h-10 ${iconBgClass} rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 mb-4`}
                              >
                                <Icon className="w-5 h-5" />
                              </div>
                              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                              <p className="text-sm text-muted-foreground flex-grow">{item.text}</p>
                            </CardContent>
                          </Card>
                        </RefinedMagneticEffect>
                      </StaggerItem>
                    )
                  })}
                </StaggerContainer>
              </div>

              <div className="py-4">
                <div className="bg-muted/30 rounded-xl p-6 border border-border flex items-center justify-center h-[300px]">
                  <div className="text-muted-foreground flex flex-col items-center">
                    <Loader2 className="h-8 w-8 animate-spin mb-2" />
                    <p>[Problem Area Visualization]</p>
                  </div>
                </div>
              </div>
            </div>
          </StorySection>

          <StorySection
            id="research-plan"
            chapter="Chapter 02"
            storyTitle="Research Plan & Secondary Review"
            narrativeHook="Building on established evidence to create a foundation for meaningful discovery and innovation."
            className="bg-muted/30"
          >
            <div className="grid gap-12">
              <p className="text-lg leading-relaxed">
                To ground our design in existing evidence, we conducted a focused secondary literature review. Our aim
                was to uncover how marketing, social norms, psychological drivers, and biological factors influence
                alcohol consumption, and to use these insights to shape our primary research.
              </p>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">Secondary Review Insights</h3>
                <StaggerContainer className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      icon: Users,
                      title: "Peer Influence",
                      text: "Peer norms exert a stronger sway over individual drinking decisions than family influences, driven by shared environments and misperceptions of others' consumption levels.",
                      color: "indigo",
                    },
                    {
                      icon: Brain,
                      title: "Psychological Drivers",
                      text: "Many individuals use alcohol to regulate stress and emotions, viewing it as a coping mechanism for anxiety or to enhance social experiences.",
                      color: "purple",
                    },
                    {
                      icon: Target,
                      title: "Marketing & Packaging",
                      text: "Design cues on alcohol packaging and promotional messaging directly affect purchase choices and event framing, while health labels can introduce hesitation.",
                      color: "blue",
                    },
                    {
                      icon: GlassWater,
                      title: "Gender & Biology",
                      text: "Men typically consume larger volumes and exhibit higher risk-taking, whereas women are more influenced by health/appearance considerations.",
                      color: "green",
                    },
                  ].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <StaggerItem key={index}>
                        <Card className="p-6 h-full bg-background/60 border border-border hover:border-primary/30 transition-colors">
                          <div className="flex items-start gap-4">
                            <Icon className={`w-5 h-5 text-primary mt-1 flex-shrink-0`} />
                            <div>
                              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                              <p className="text-muted-foreground">{item.text}</p>
                            </div>
                          </div>
                        </Card>
                      </StaggerItem>
                    )
                  })}
                </StaggerContainer>
              </div>

              <div className="py-4">
                <div className="bg-muted/30 rounded-xl p-6 border border-border flex items-center justify-center h-[300px]">
                  <div className="text-muted-foreground flex flex-col items-center">
                    <Loader2 className="h-8 w-8 animate-spin mb-2" />
                    <p>[Literature Review Artifact]</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">Our Research Framework</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="p-6 lg:col-span-2">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="flex items-center gap-3">
                        <Target className="w-6 h-6 text-primary" />
                        Research Objectives & Hypotheses
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Primary Objective</h4>
                        <p className="text-muted-foreground">
                          Understand the interplay of perceived social norms and stress motivations on drinking
                          behaviors among adults aged 18–35 who either abstain or wish to reduce consumption.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Key Hypotheses</h4>
                        <ol className="space-y-3 text-muted-foreground">
                          <li>
                            <span className="font-medium text-foreground">1. Perceived Norms vs. Reality:</span>{" "}
                            Individuals overestimate peer alcohol consumption.
                          </li>
                          <li>
                            <span className="font-medium text-foreground">2. Stress as a Driver:</span> Higher stress
                            levels correlate with increased alcohol consumption.
                          </li>
                        </ol>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="flex items-center gap-3">
                        <Microscope className="w-6 h-6 text-primary" />
                        Methodology
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-3">
                      <div>
                        <p className="font-semibold">Design:</p>
                        <p className="text-muted-foreground">
                          Mixed-methods combining digital card sorting and in-depth virtual interviews.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">Interviews:</p>
                        <p className="text-muted-foreground">
                          60-minute Zoom sessions, probing social pressures, stress triggers, and personal beliefs.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="flex items-center gap-3">
                        <Users className="w-6 h-6 text-primary" />
                        Stakeholder Mapping
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="grid grid-cols-2 grid-rows-2 gap-3">
                        <Badge variant="outline" className="col-span-2 justify-center p-2 text-sm">Universities</Badge>
                        <Badge variant="outline" className="justify-center p-2 text-sm">Grocery Stores</Badge>
                        <Badge variant="outline" className="justify-center p-2 text-sm">Clinics</Badge>
                        <Badge variant="outline" className="col-span-2 justify-center p-2 text-sm">Public Health Programs</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </StorySection>

          <StorySection
            id="individual-appraisal"
            chapter="Chapter 03"
            storyTitle="Individual Appraisal & Emerging Themes"
            narrativeHook="Exploring the personal narratives that shape drinking behaviors and synthesizing patterns across experiences."
          >
            <div className="grid gap-12">
              <p className="text-lg leading-relaxed">
                We conducted in-depth appraisals of each interview transcript, distilling participants' goals,
                motivations, mental models, and coping strategies. Below is an exemplar summary.
              </p>

              <Card className="bg-muted/30 p-8">
                <CardTitle className="text-2xl mb-6 text-center">Participant P1 Appraisal</CardTitle>
                <UserQuote
                  quote="I…thought I'd drank too much. The hangover…just for two hours of fun night or four hours of fun night. I can have the same amount of fun while being conscious. Why would I drink more alcohol?"
                  author="Participant P1"
                  role="Interview Transcript"
                />
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                  {[
                    {
                      icon: Target,
                      title: "Goals",
                      text: "Balance social enjoyment with avoiding physical/social harm (hangovers, loss of control).",
                    },
                    {
                      icon: Heart,
                      title: "Motivation",
                      text: "Tangible consequences drive choice—physical discomfort and next-day regret.",
                    },
                    {
                      icon: Brain,
                      title: "Mental Model",
                      text: "Views alcohol intake as a trade-off between immediate pleasure and long-term well-being.",
                    },
                    {
                      icon: Shield,
                      title: "Agency & Coping",
                      text: "Uses self-talk and environment management to maintain limits despite peer offers.",
                    },
                  ].map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.title} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.text}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="mt-8 pt-6 border-t border-border">
                  <InsightCard
                    type="outcome"
                    title="Key Insight: Engineering Alcohol Use for Maximum Fun, Minimum Regret"
                    story="Participants treat drinking as a controlled experiment—monitoring outcomes and iterating toward an optimal balance of fun and autonomy."
                    icon={<FlaskConical className="w-8 h-8 text-purple-500" />}
                  />
                </div>
              </Card>

              <div className="py-4">
                <div className="bg-muted/30 rounded-xl p-6 border border-border flex items-center justify-center h-[300px]">
                  <div className="text-muted-foreground flex flex-col items-center">
                    <Loader2 className="h-8 w-8 animate-spin mb-2" />
                    <p>[Full Individual Appraisal Codebook]</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-12">
                <h3 className="text-2xl font-bold mb-6 text-center">Collaborative Theme Synthesis</h3>
                <StaggerContainer className="grid gap-6 md:grid-cols-2 mt-8 items-stretch">
                  <StaggerItem>
                    <InsightCard
                      type="discovery"
                      title="Misaligned Social Norms"
                      story="Participants consistently overestimate peer drinking, fueling unnecessary consumption to 'keep up.'"
                      icon={<Users className="w-8 h-8 text-blue-500" />}
                    />
                  </StaggerItem>
                  <StaggerItem>
                    <InsightCard
                      type="solution"
                      title="Strategic Self-Regulation"
                      story="Many reframe alcohol use as a controllable variable, setting personal limits to optimize enjoyment without regret."
                      icon={<Shield className="w-8 h-8 text-green-500" />}
                    />
                  </StaggerItem>
                  <StaggerItem>
                    <InsightCard
                      type="challenge"
                      title="Dual Drivers: Stress & Social"
                      story="Alcohol serves as both a coping mechanism and social lubricant; solutions must address these distinct needs."
                      icon={<Brain className="w-8 h-8 text-orange-500" />}
                    />
                  </StaggerItem>
                  <StaggerItem>
                    <InsightCard
                      type="outcome"
                      title="Visibility Gap for Sober Alternatives"
                      story="Participants express curiosity about non-alcoholic options but report low awareness of where to find them."
                      icon={<Eye className="w-8 h-8 text-purple-500" />}
                    />
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </div>
          </StorySection>

          <StorySection
            id="frameworks"
            chapter="Chapter 04"
            storyTitle="Frameworks of Understanding"
            narrativeHook="Transforming raw insights into actionable frameworks that bridge research and design strategy."
            className="bg-muted/30"
          >
            <div className="grid gap-12">
              <p className="text-lg leading-relaxed">
                To translate our research into actionable insights, we built two complementary frameworks: a Behavioral
                Archetype capturing users' core strategies, and a Journey Map showing the path toward adopting
                alcohol-free "third places."
              </p>

              <Card className="p-8 border-t-4 border-t-purple-500">
                <CardHeader className="p-0 mb-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TestTube className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-3xl">Archetype: The Social Experimenter</CardTitle>
                  <p className="text-muted-foreground">
                    Seeks meaningful social engagement without sacrificing autonomy or well-being.
                  </p>
                </CardHeader>
                <CardContent className="p-0 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { icon: Target, title: "Goals", text: "Maximize fun, minimize regret." },
                    { icon: Heart, title: "Motivation", text: "Craves both community and escape from stress." },
                    { icon: Brain, title: "Mental Model", text: "Views alcohol as a tool with trade-offs." },
                    { icon: Eye, title: "Self-Image", text: "Aspires to feel confident and authentic." },
                    { icon: Shield, title: "Coping Strategy", text: "Uses self-talk and environment management." },
                    {
                      icon: Users,
                      title: "Norm Significance",
                      text: "Questions the idea that 'everyone drinks to bond'.",
                    },
                  ].map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.title} className="flex items-start gap-3">
                        <Icon className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.text}</p>
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>

              <div className="border-t border-border pt-12">
                <h3 className="text-2xl font-bold mb-8 text-center">The Journey to a New Third Place</h3>
                <div className="bg-muted/30 rounded-xl p-6 border border-border flex items-center justify-center h-[450px]">
                  <div className="text-muted-foreground flex flex-col items-center">
                    <Loader2 className="h-8 w-8 animate-spin mb-2" />
                    <p>[Journey Map Visualization]</p>
                  </div>
                </div>
              </div>
            </div>
          </StorySection>

          <StorySection
            id="design-strategy"
            chapter="Chapter 05"
            storyTitle="Design Strategy & Concept"
            narrativeHook="From insights to intervention: a strategy to make alcohol-free socializing intuitive, visible, and empowering."
          >
            <div className="grid gap-12">
              <div className="grid gap-6 md:grid-cols-2">
                <InsightCard
                  type="solution"
                  title="Correct Misperceived Norms"
                  story="Leverage data-driven nudges to reveal actual peer consumption, reducing 'catch-up' drinking."
                  icon={<BadgePlus className="w-8 h-8 text-green-500" />}
                />
                <InsightCard
                  type="solution"
                  title="Facilitate Self-Regulation"
                  story="Empower users with personalized goal-setting and progress reminders."
                  icon={<Goal className="w-8 h-8 text-green-500" />}
                />
                <InsightCard
                  type="solution"
                  title="Address Dual Drivers"
                  story="Integrate stress-management tips alongside social activity suggestions."
                  icon={<Split className="w-8 h-8 text-green-500" />}
                />
                <InsightCard
                  type="solution"
                  title="Increase Visibility of Alternatives"
                  story="Surface curated alcohol-free events through low-friction channels."
                  icon={<Map className="w-8 h-8 text-green-500" />}
                />
              </div>

              <div className="border-t border-border pt-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-2">Concept: The 'Third Place' Nudge</h3>
                  <p className="text-lg text-muted-foreground">
                    A lightweight SMS service for curated, hyper-local, alcohol-free events.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <h4 className="font-bold text-xl flex items-center gap-2">
                      <KeyRound className="w-5 h-5 text-primary" />
                      Key Features
                    </h4>
                    {[
                      {
                        icon: Filter,
                        title: "Personalized Filters",
                        text: "Select by mood or interest (e.g., game nights, mocktail bars).",
                      },
                      {
                        icon: Shuffle,
                        title: "Illusion of Choice",
                        text: "Rotate event categories to foster autonomy and novelty.",
                      },
                      {
                        icon: ThumbsUp,
                        title: "Social Proof Highlights",
                        text: "Embed peer testimonials and influencer spotlights within SMS.",
                      },
                      {
                        icon: Bell,
                        title: "Norm-Comparison Alerts",
                        text: "Periodic facts to recalibrate perceptions (e.g., '70% of peers drink ≤5 units/week').",
                      },
                    ].map((item) => {
                      const Icon = item.icon
                      return (
                        <div key={item.title} className="flex items-start gap-3">
                          <Icon className="w-5 h-5 text-primary/80 mt-1 flex-shrink-0" />
                          <div>
                            <h5 className="font-semibold">{item.title}</h5>
                            <p className="text-sm text-muted-foreground">{item.text}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="bg-muted/30 rounded-xl p-6 border border-border flex items-center justify-center h-[400px]">
                    <div className="text-muted-foreground flex flex-col items-center">
                      <Loader2 className="h-8 w-8 animate-spin mb-2" />
                      <p>[SMS Storyboard or Figma Prototype]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </StorySection>

          <StorySection
            id="conclusion"
            chapter="Chapter 06"
            storyTitle="Conclusion & Reflections"
            narrativeHook="Assessing our impact, planning future steps, and reflecting on personal growth."
            className="bg-muted/30"
          >
            <div className="grid gap-12">
              <p className="text-lg leading-relaxed">
                By revealing true social norms and surfacing vibrant alcohol-free "third places," our solution redefines
                how young adults discover and embrace mindful socializing. Early prototypes indicate a significant
                uptick in trial of non-alcoholic venues and a drop in self-reported weekly drinks among pilot users.
              </p>

              <div className="border-t border-border pt-12">
                <h3 className="text-2xl font-bold mb-8 text-center">Personal Reflections</h3>
                <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      icon: Users,
                      title: "Navigating Team Dynamics",
                      text: "Learned to assert myself by preparing comments in advance and following up asynchronously to ensure my voice was heard in a remote team.",
                    },
                    {
                      icon: Heart,
                      title: "Emotional Journey",
                      text: "Felt a mix of excitement and nervousness. Seeing hypotheses crystallize into a cohesive strategy was immensely satisfying and boosted my confidence.",
                    },
                    {
                      icon: Brain,
                      title: "Behavioral Science Takeaways",
                      text: "The card-sort debrief demonstrated the power of a single data point to reshape mindsets, a reminder that simple nudges can drive change.",
                    },
                    {
                      icon: Search,
                      title: "Research Reflection",
                      text: "Recognized that expanding primary research to include those actively reducing intake could have uncovered additional pain points.",
                    },
                    {
                      icon: PenTool,
                      title: "Applying Insights",
                      text: "Plan to incorporate behavioral science principles on my portfolio website—using social proof and choice architecture to guide visitors.",
                    },
                    {
                      icon: MessageCircle,
                      title: "Remote Collaboration",
                      text: "Grew more intentional about scheduling brief virtual check-ins to maintain team cohesion and blend synchronous/asynchronous communication.",
                    },
                  ].map((item) => {
                    const Icon = item.icon
                    return (
                      <StaggerItem key={item.title}>
                        <Card className="p-6 h-full bg-background/60">
                          <div className="flex items-start gap-4">
                            <Icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                              <p className="text-sm text-muted-foreground">{item.text}</p>
                            </div>
                          </div>
                        </Card>
                      </StaggerItem>
                    )
                  })}
                </StaggerContainer>
              </div>
            </div>
          </StorySection>

          <section id="impact" className="content-section py-16">
            <div className="container mx-auto px-4 text-center">
              <FadeIn>
                <div className="max-w-3xl mx-auto space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Like my work? <FlowingText text="Explore" className="inline" /> more!
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Discover more UX design projects that showcase my approach to solving complex problems through
                    research-driven design.
                  </p>

                  <div className="flex flex-wrap justify-center gap-4 pt-8">
                    <Link href="/projects/understanding-creative-block">
                      <RefinedButton variant="default" size="lg" className="group">
                        <span className="flex items-center gap-2">
                          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
                          Previous Project
                        </span>
                      </RefinedButton>
                    </Link>
                    <Link href="/projects/backmarket-ia-redesign">
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
