import { Navbar } from "@/components/navbar"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { ProjectDetail } from "@/components/project-detail"
import { MediaBiasProject } from "@/components/media-bias-project"
import { CanvasChatProject } from "@/components/canvas-chat-project"

// Project data matching the works component
const projects: Record<
  string,
  {
    id: string
    title: string
    role: string
    outcome: string
    tags: string[]
    image: string
    year: string
    isCustom?: boolean
    customComponent?: "media-bias" | "canvas-chat"
    details: {
      responsibilities: string[]
      duration: string
      challenge: string
      results: string
    }
    caseStudy: {
      context: string
      users: string
      problem: string
      research: {
        method: string
        insight: string
        pivot: string
      }
      solution: {
        innovation: string
        howItWorks: string
        designChoices: string
      }
      contribution: string
      metrics: string[]
      learning: string
    }
  }
> = {
  "media-bias": {
    id: "media-bias",
    title: "Spotting the Bias in News",
    role: "UX Researcher & Designer",
    outcome: "66% of users couldn't distinguish topic from bias",
    tags: ["AI", "UX Research", "Media Bias"],
    image: "/ana-hero.png",
    year: "2024",
    isCustom: true,
    customComponent: "media-bias",
    details: {
      responsibilities: ["UX Research", "Interaction Design", "Usability Testing", "Prototyping"],
      duration: "4 months",
      challenge:
        "Gen Z readers are trapped in algorithmic echo chambers, only seeing news that confirms their existing beliefs. Our research revealed a startling truth: 66% of users couldn't tell the difference between a story's topic and the writer's bias.",
      results: "46% bias detection gap identified, validating the need for AI-assisted news literacy tools.",
    },
    caseStudy: {
      context:
        "Most people get news from social media, trapping them in bubbles where they only see one side of the story.",
      users: "Gen Z readers who struggle to identify bias and are trapped in algorithmic echo chambers.",
      problem:
        "Algorithms show us what we already like. It is hard to tell when a news story is spinning the truth. Without help, readers can't see the full picture.",
      research: {
        method: "User surveys and usability testing with 16 participants to understand bias detection capabilities.",
        insight: "66% of users could not tell the difference between the topic of a story and the bias of the writer.",
        pivot:
          "We shifted from building another news aggregator to creating an AI-powered bias education tool that teaches critical reading.",
      },
      solution: {
        innovation:
          "An AI tool that doesn't just filter news—it teaches you how to read critically by highlighting bias in real-time.",
        howItWorks:
          "Color-coded bias highlighting, interactive Bias Slider to explore perspectives, and Micro-lessons that explain AI decisions.",
        designChoices:
          "Transparency-first design with escape hatches. Every AI decision is explainable to build user trust.",
      },
      contribution:
        "Led end-to-end UX research including survey design, usability testing, and iterative design using RITE methodology.",
      metrics: [
        "66% couldn't detect bias",
        "82% never used AI news tools",
        "46% missed headline spin",
        "16 research participants",
      ],
      learning:
        "AI can help us think better, not just tell us what to think. The goal is augmenting human judgment, not replacing it.",
    },
  },
  "ai-dashboard": {
    id: "ai-dashboard",
    title: "AI Analytics Dashboard",
    role: "Lead UX Designer",
    outcome: "Reduced decision time by 40% with predictive insights",
    tags: ["AI/ML", "Data Viz", "React"],
    image: "/futuristic-data-dashboard-dark-minimal.jpg",
    year: "2024",
    details: {
      responsibilities: ["UX Strategy", "Design Systems", "User Research", "Prototyping"],
      duration: "6 months",
      challenge:
        "Enterprise teams struggled with overwhelming data dashboards. The existing solution had a 45% task abandonment rate due to cognitive overload and poor information hierarchy.",
      results: "40% faster decision-making, 89% task completion rate (up from 55%), NPS increased from 32 to 67.",
    },
    caseStudy: {
      context:
        "A Fortune 500 company needed to modernize their analytics platform used by 5,000+ employees across 12 countries.",
      users:
        "Data analysts, business intelligence teams, and C-suite executives who needed quick insights from complex datasets.",
      problem:
        "The existing dashboard was a data dump with 200+ metrics on a single screen. Users couldn't find relevant information without extensive training.",
      research: {
        method: "Conducted 24 user interviews, contextual inquiries with 8 teams, and analyzed 6 months of usage data.",
        insight:
          "Users only needed 12-15 key metrics for 80% of their decisions. The rest was noise creating analysis paralysis.",
        pivot:
          "We initially planned to add AI recommendations as a feature. Research showed it should be the core organizing principle of the entire interface.",
      },
      solution: {
        innovation:
          "AI-prioritized dashboard that surfaces relevant metrics based on user role, time of day, and historical patterns.",
        howItWorks:
          "Machine learning model analyzes user behavior to predict which metrics they'll need. Surface-level shows AI recommendations; depth is always accessible.",
        designChoices:
          "Progressive disclosure pattern reduces initial cognitive load by 70%. High-contrast data visualization for quick scanning.",
      },
      contribution:
        "I led the end-to-end UX process: research synthesis, information architecture, interaction design, and design system updates. Collaborated with ML engineers on the recommendation algorithm's UX implications.",
      metrics: [
        "Task completion: 55% → 89%",
        "Time to insight: 12 min → 7 min",
        "User satisfaction: NPS 32 → 67",
        "Training time: 2 weeks → 3 days",
      ],
      learning:
        "AI should augment human decision-making, not replace it. The best AI interfaces give users confidence in their choices rather than making choices for them.",
    },
  },
  "conversational-ux": {
    id: "conversational-ux",
    title: "Conversational AI Interface",
    role: "UX Design Engineer",
    outcome: "92% user satisfaction with natural language interactions",
    tags: ["LLM", "Voice UI", "TypeScript"],
    image: "/abstract-neural-network-visualization-dark-theme.jpg",
    year: "2024",
    details: {
      responsibilities: ["Interaction Design", "Prompt Engineering", "Frontend Dev", "Usability Testing"],
      duration: "4 months",
      challenge:
        "Users found traditional chatbot interfaces robotic and frustrating. 68% of conversations ended without resolution.",
      results: "92% satisfaction rate, 78% first-contact resolution.",
    },
    caseStudy: {
      context:
        "A healthcare platform needed to help patients navigate complex insurance questions and appointment scheduling.",
      users: "Patients of all ages and technical abilities, many dealing with health anxiety and time pressure.",
      problem:
        "Existing chatbot used rigid decision trees that frustrated users. Average 6 messages before users gave up and called support.",
      research: {
        method:
          "Analyzed 10,000 chat transcripts, conducted 16 user interviews, and ran comparative studies against 5 competitor solutions.",
        insight:
          "Users don't want to feel like they're talking to a bot. They want acknowledgment of their situation before solutions.",
        pivot: "Shifted from 'efficient resolution' to 'empathetic efficiency' as the core design principle.",
      },
      solution: {
        innovation:
          "Empathy-first conversational AI that acknowledges user emotions before problem-solving. Contextual memory across sessions.",
        howItWorks:
          "LLM interprets intent and emotional state. Response framework: Acknowledge → Clarify → Resolve → Confirm understanding.",
        designChoices:
          "Typing indicators simulate human response time. Chunked responses for readability. Escape hatches to human support always visible.",
      },
      contribution:
        "Owned interaction design and implemented the frontend in TypeScript/React. Collaborated with ML team on prompt engineering and response templating.",
      metrics: [
        "First-contact resolution: 45% → 78%",
        "User satisfaction: 58% → 92%",
        "Average messages to resolution: 6 → 3",
        "Escalation to human: 40% → 12%",
      ],
      learning:
        "In conversational AI, the pauses matter as much as the words. Intentional friction (like thinking indicators) builds trust.",
    },
  },
  "design-system": {
    id: "design-system",
    title: "Adaptive Design System",
    role: "Design Systems Lead",
    outcome: "Shipped to 50+ products, 70% faster component delivery",
    tags: ["Design Tokens", "Figma", "Storybook"],
    image: "/abstract-memory-storage-visualization.jpg",
    year: "2023",
    details: {
      responsibilities: ["System Architecture", "Documentation", "Component Library", "Team Training"],
      duration: "8 months",
      challenge: "Design inconsistency across 50+ products led to fragmented user experiences.",
      results: "70% faster component delivery, 100% design consistency.",
    },
    caseStudy: {
      context: "A multi-product SaaS company with 50+ applications needed unified design language.",
      users: "30 designers and 80 developers across 12 product teams who needed consistent, accessible components.",
      problem:
        "Each team built components from scratch. Same button had 23 different implementations. Accessibility debt was growing.",
      research: {
        method:
          "Audited all 50 products, surveyed 40 team members, analyzed component usage patterns, and benchmarked against industry systems.",
        insight:
          "Teams didn't resist consistency—they lacked tooling. 90% wanted a system; they just couldn't wait for one.",
        pivot:
          "Instead of building everything first, we launched with 12 core components and grew based on adoption data.",
      },
      solution: {
        innovation:
          "Token-based system that adapts to product context while maintaining consistency. AI-assisted component selection.",
        howItWorks:
          "Semantic design tokens feed into themed component variants. Storybook documentation auto-generates from Figma specs.",
        designChoices:
          "Composition over configuration—components are building blocks, not finished solutions. Escape hatches for edge cases.",
      },
      contribution:
        "Led system architecture, wrote component specifications, built Figma library, and conducted bi-weekly training sessions. Did not write code—worked closely with 3 frontend engineers.",
      metrics: [
        "Component delivery: 2 weeks → 4 days",
        "Design consistency: 45% → 100%",
        "Accessibility violations: 156 → 0",
        "Adoption rate: 94% within 6 months",
      ],
      learning:
        "A design system succeeds when teams forget it exists. If it's invisible and just works, you've done your job.",
    },
  },
  "voice-assistant": {
    id: "voice-assistant",
    title: "Voice-First Assistant",
    role: "Senior UX Designer",
    outcome: "4.8/5 app store rating with 2M+ active users",
    tags: ["Voice UI", "Accessibility", "Mobile"],
    image: "/sound-wave-visualization-dark-theme.jpg",
    year: "2023",
    details: {
      responsibilities: ["Voice UX Research", "Accessibility Audit", "Interaction Flows", "A/B Testing"],
      duration: "5 months",
      challenge: "Voice assistants felt impersonal and frequently misunderstood user intent.",
      results: "4.8/5 app store rating, 2M+ active users, WCAG 2.1 AAA compliance.",
    },
    caseStudy: {
      context:
        "A consumer app company wanted to add voice control for their productivity suite targeting users with accessibility needs.",
      users:
        "Users with visual impairments, motor disabilities, and situational accessibility needs (driving, cooking, etc.).",
      problem:
        "Existing voice commands were rigid and required exact phrasing. Error recovery was frustrating and often looped.",
      research: {
        method:
          "Partnered with accessibility advocates, conducted 30 user sessions (60% with disabilities), analyzed 500 hours of voice interaction data.",
        insight: "People speak in fragments and corrections. Systems that expect complete sentences will always fail.",
        pivot: "Designed for speech patterns, not grammar. Embraced partial commands and real-time correction.",
      },
      solution: {
        innovation: "Conversational command parsing that understands fragments, corrections, and contextual shortcuts.",
        howItWorks:
          "NLP model maintains conversation context. Users can interrupt, correct, and chain commands naturally.",
        designChoices:
          "Audio-first feedback design. Distinct sound signatures for success/error/waiting. Never require visual confirmation.",
      },
      contribution:
        "Led all UX research and design. Worked with iOS/Android teams on implementation feasibility. Created audio design specifications and conducted A/B tests.",
      metrics: [
        "App Store rating: 3.2 → 4.8",
        "Active users: 400K → 2M+",
        "Command success rate: 62% → 91%",
        "Accessibility users: 40% prefer over visual UI",
      ],
      learning: "Voice UI isn't about making screens talk—it's about designing for how humans actually communicate.",
    },
  },
  "canvas-chat": {
    id: "canvas-chat",
    title: "Canvas Chat",
    role: "Designer & Developer",
    outcome: "Personal brainstorming tool",
    tags: ["AI", "Canvas", "React"],
    image: "/canvas-chat-interface.jpg",
    year: "2025",
    isCustom: true,
    customComponent: "canvas-chat",
    details: {
      responsibilities: ["Design", "Development", "Prototyping"],
      duration: "Ongoing",
      challenge: "Current AI chat interfaces are linear and lack visual context for complex brainstorming.",
      results: "Personal tool for visual AI-assisted thinking.",
    },
    caseStudy: {
      context: "Personal project to improve AI-assisted brainstorming.",
      users: "Myself and anyone who thinks visually.",
      problem: "AI chats don't show macro-level context of conversations.",
      research: {
        method: "Personal frustration with existing tools.",
        insight: "Figma's infinite canvas model works great for design—why not for AI chat?",
        pivot: "Built it myself.",
      },
      solution: {
        innovation: "Infinite canvas for AI conversations with branching and multiple agents.",
        howItWorks: "Spawn chats anywhere, branch from any message, customize each agent.",
        designChoices: "Figma-inspired navigation with AI-native interactions.",
      },
      contribution: "Designed and built the entire application.",
      metrics: ["Infinite canvas", "Multiple agents", "Branching conversations"],
      learning: "The best tools mirror how we actually think.",
    },
  },
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects[id]

  if (!project) {
    return (
      <SmoothScroll>
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <p className="font-mono text-muted-foreground">Project not found</p>
        </main>
      </SmoothScroll>
    )
  }

  const renderProject = () => {
    if (project.customComponent === "media-bias") {
      return <MediaBiasProject project={project} />
    }
    if (project.customComponent === "canvas-chat") {
      return <CanvasChatProject project={project} />
    }
    return <ProjectDetail project={project} />
  }

  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>{renderProject()}</main>
    </SmoothScroll>
  )
}
