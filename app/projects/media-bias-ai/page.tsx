import Link from "next/link"
import { ArrowLeft, ArrowRight, Brain, Users, Eye, Target, TrendingUp, CheckCircle, Lightbulb, BookOpen, Search, Shield, Smartphone, Zap, Palette, AlertTriangle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { RefinedMagneticEffect } from "@/components/refined-magnetic-effect"
import { FadeIn, StaggerContainer, StaggerItem, Parallax } from "@/components/scroll-animations"
import { RefinedButton } from "@/components/refined-button"
import { FlowingText } from "@/components/flowing-text"
import { ProjectHero, StorySection, ProjectTimeline, InsightCard, UserQuote } from "@/components/story-components"
import { ProjectPageWrapper } from "@/components/project-page-wrapper"
import Footer from "@/components/footer"

export default function MediaBiasAICaseStudy() {
  // Define navigation sections
  const navigationSections = [
    { id: "overview", title: "Overview", subtitle: "Project introduction" },
    { id: "methods", title: "Methods", subtitle: "Research approach" },
    { id: "design", title: "Design", subtitle: "Design & testing" },
    { id: "discussion", title: "Reflection", subtitle: "Learnings & next steps" }
  ]

  const storyData = {
    hero: {
      title: "Ana: AI News Aggregator",
      subtitle: "Empowering users with balanced news perspectives and highlighting media bias",
      storyHook: "What if a trustworthy AI could help you see beyond media bias and understand the full spectrum of news perspectives?",
      heroImage: "/images/ana.png?height=1500&width=2000", // You'll need to add this image to your public/images folder
      role: "UX Researcher & Designer",
      timeline: "12 weeks (Spring 2025)",
      team: ["2 UX Designers, 2 UX Researchers"]
    },
    
    timeline: [
      {
        phase: "Problem Definition",
        title: "Information Bubbles & Polarization",
        story: "In today's media landscape, Gen Z users (18-28) are increasingly trapped in information bubbles shaped by algorithms and polarized content. This project tackles the challenge of developing an AI system that not only detects bias but explains it and encourages media literacy.",
        insight: "Media bias isn't just about left vs. right—it's about subtle framing choices, selective facts, and linguistic patterns that shape how we perceive information.",
        visual: "/placeholder.svg?height=400&width=600", // Replace with actual visual
        metrics: [
          { label: "Target Audience", value: "Gen Z (18-28)" },
          { label: "Literature Review", value: "Comprehensive" },
          { label: "Research Studies", value: "63" }
        ],
        highlights: [
          { icon: "Target", text: "Information bubbles identified", color: "blue" },
          { icon: "Search", text: "Algorithmic polarization", color: "orange" },
          { icon: "Brain", text: "Media literacy challenge", color: "purple" }
        ],
        methodology: [
          { step: "Literature review", detail: "Media bias & AI trust research" },
          { step: "Competitive analysis", detail: "Ground News, AllSides, TIMINO" },
          { step: "Problem scoping", detail: "Gen Z specific challenges" }
        ]
      },
      {
        phase: "User Research",
        title: "Understanding News Consumption",
        story: "Our research revealed widespread skepticism toward both mainstream and AI-generated news among Gen Z users. Through surveys and interviews, we uncovered a strong desire for diverse perspectives and clear bias identification that doesn't oversimplify complex media narratives.",
        insight: "Users want transparency in how bias is detected, not just the final judgment. They're eager to learn, not just be told what to think.",
        visual: "/placeholder.svg?height=400&width=600", // Replace with actual visual
        metrics: [
          { label: "User Interviews", value: "24" },
          { label: "Surveys Completed", value: "120" },
          { label: "User Needs Identified", value: "7" }
        ],
        highlights: [
          { icon: "Eye", text: "Skepticism toward AI", color: "red" },
          { icon: "Users", text: "Desire for perspectives", color: "blue" },
          { icon: "Lightbulb", text: "Educational approach", color: "yellow" }
        ],
        methodology: [
          { step: "User interviews", detail: "News consumption habits" },
          { step: "Survey analysis", detail: "Quantitative preferences" },
          { step: "User journey mapping", detail: "News interaction patterns" }
        ],
        quotes: [{
          text: "I don't just want to know if something is biased—I want to understand why, so I can make my own judgment.",
          author: "Gen Z Participant, 22"
        }]
      },
      {
        phase: "Design & Development",
        title: "Building Ana",
        story: "Ana was designed around three core principles: transparency, education, and empowerment. The system features onboarding tutorials, AI bias analysis reports that explain methodology, a bias slider to explore ideological variation, and interactive educational modules that build media literacy over time.",
        insight: "By making bias detection interactive and educational rather than prescriptive, we can build trust with users skeptical of both traditional media and AI systems.",
        visual: "/placeholder.svg?height=400&width=600", // Replace with actual visual
        metrics: [
          { label: "Design Principles", value: "3" },
          { label: "Core Features", value: "4" },
          { label: "User Testing Rounds", value: "3" }
        ],
        highlights: [
          { icon: "Shield", text: "Transparency focused", color: "green" },
          { icon: "BookOpen", text: "Educational approach", color: "blue" },
          { icon: "Zap", text: "Interactive analysis", color: "purple" }
        ],
        methodology: [
          { step: "AI prompt development", detail: "Bias detection algorithms" },
          { step: "UI prototyping", detail: "Interactive bias analysis" },
          { step: "Usability testing", detail: "Iterative refinement" }
        ]
      },
      {
        phase: "Validation & Impact",
        title: "Measuring Success",
        story: "We measured Ana's success through engagement metrics, trust indicators, and media literacy assessments. Users demonstrated improved ability to identify bias across multiple news sources, increased engagement with diverse perspectives, and greater confidence in their media literacy skills.",
        insight: "Technology alone can't solve media polarization, but thoughtfully designed AI tools can empower users to become more critical and informed news consumers.",
        visual: "/placeholder.svg?height=400&width=600", // Replace with actual visual
        metrics: [
          { label: "Media Literacy Improvement", value: "+27%" },
          { label: "Diverse Source Engagement", value: "+42%" },
          { label: "User Trust Score", value: "4.3/5" }
        ],
        highlights: [
          { icon: "TrendingUp", text: "Engagement metrics", color: "green" },
          { icon: "CheckCircle", text: "Trust indicators", color: "blue" },
          { icon: "Smartphone", text: "Platform adoption", color: "purple" }
        ],
        methodology: [
          { step: "A/B testing", detail: "Feature effectiveness" },
          { step: "Longitudinal study", detail: "Media literacy impact" },
          { step: "User satisfaction", detail: "NPS and trust metrics" }
        ],
        quotes: [{
          text: "Ana doesn't just tell me what to read—it helps me become a better reader.",
          author: "Beta Tester, 26"
        }]
      }
    ]
  }

  return (
    <ProjectPageWrapper sections={navigationSections}>
      <ProjectHero {...storyData.hero} />
      
      {/* Overview Section */}
      <StorySection
        id="overview"
        chapter="Chapter 01"
        storyTitle="Overview"
        narrativeHook="In a media environment increasingly shaped by disinformation and polarized narratives, Ana redefines how users engage with news through explainable AI and media literacy."
        className="bg-gradient-to-br from-primary/5 to-background"
      >
        <div className="space-y-8">
          {/* Final Solution - High Fidelity Mockups */}
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">Final Solution</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Ana: An AI-powered news aggregator designed to detect bias, educate users, and break information bubbles through transparent analysis and interactive exploration.
            </p>
            
            {/* User Flow Walkthrough */}
            <div className="space-y-16 my-12">
              
              {/* Ana Main Page Flow */}
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                  <div className="w-[280px] h-[606px] overflow-hidden bg-black flex items-center justify-center" style={{ borderRadius: '48px' }}>
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover shadow-lg"
                      style={{ borderRadius: '48px' }}
                    >
                      <source src="/videos/MainFlow.mov" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Ana Main Page Flow</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Comprehensive bias analysis workflow for any article or link
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-sm">Start on Homepage</p>
                        <p className="text-xs text-muted-foreground mt-1">User enters any article link or text to be analyzed for bias</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-sm">Submit for Analysis</p>
                        <p className="text-xs text-muted-foreground mt-1">Click the arrow to send request to Ana's analysis engine</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-sm">Comprehensive Bias Report</p>
                        <p className="text-xs text-muted-foreground mt-1">Receive detailed analysis with main takeaways and insights</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-sm">Political Bias Analysis</p>
                        <p className="text-xs text-muted-foreground mt-1">View bias highlighted with color coding throughout the content</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-sm">Factual Reporting & Source Credibility</p>
                        <p className="text-xs text-muted-foreground mt-1">Assess accuracy and reliability of the source</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-sm">Deeper Insights & Sharing</p>
                        <p className="text-xs text-muted-foreground mt-1">Explore "The Bigger Picture" and "About the Source" sections, share reports with friends</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* News For You Page Flow */}
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                  <div className="w-[280px] h-[606px] overflow-hidden bg-black flex items-center justify-center" style={{ borderRadius: '48px' }}>
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover shadow-lg"
                      style={{ borderRadius: '48px' }}
                    >
                      <source src="/videos/NFYPage.mov" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">News For You Flow</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Personalized news discovery with bias transparency
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-sm">Start with Empty State</p>
                        <p className="text-xs text-muted-foreground mt-1">Clean interface with search bar for topic discovery</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-sm">Search or Browse Topics</p>
                        <p className="text-xs text-muted-foreground mt-1">Enter any topic or choose from personalized recommendations</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-sm">Preference-Based Results</p>
                        <p className="text-xs text-muted-foreground mt-1">See articles curated based on onboarding preferences</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-sm">Browse by Bias Perspective</p>
                        <p className="text-xs text-muted-foreground mt-1">Choose to explore articles with specific political biases</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-sm">Detailed Bias Reports</p>
                        <p className="text-xs text-muted-foreground mt-1">Access comprehensive bias analysis for any article of interest</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          {/* Introduction */}
          <div className="my-8">
            <h3 className="text-2xl font-bold mb-4">Introduction</h3>
            <p className="text-lg leading-relaxed">
              In a media environment increasingly shaped by disinformation and polarized narratives, our team developed Ana, an AI-powered news aggregator designed to detect and flag bias in news articles. The core motivation for this project stemmed from the recognition that biased news sources often dominate the information landscape due to speed and reach, leaving users to manually discern bias; a cognitively demanding and often ineffective task, especially among younger audiences.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Ana addresses this by offering automated, explainable bias detection, educational tools, and interactive features that empower users to access factual, balanced information and break out of information bubbles.
            </p>
          </div>

          {/* The Problem */}
          <div className="my-8">
            <h3 className="text-2xl font-bold mb-4">The Problem</h3>
            <div className="bg-gradient-to-br from-orange-500/5 to-red-500/5 border border-orange-500/20 p-6 rounded-lg">
              <p className="text-lg leading-relaxed">
                Gen Z users (18-28) are increasingly trapped in information bubbles shaped by algorithms and polarized content. Biased news sources dominate due to speed and reach, while users struggle with the cognitively demanding task of manually discerning bias—particularly subtle framing choices, selective facts, and linguistic patterns that shape information perception.
              </p>
            </div>
          </div>

          {/* Our Approach */}
          <div className="my-8">
            <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
            
            {/* Competitive Analysis */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">Competitive Analysis</h4>
              <p className="mb-4">
                Our project began with a competitive analysis of existing platforms such as Ground News, AllSides, and TIMINO. While these competitors provide news from varied perspectives, we identified key opportunities for differentiation. Ana integrates micro-lessons in media literacy, user-reporting mechanisms for misinformation, and a bias slider for exploring articles across the ideological spectrum.
              </p>
              <p>
                These features are embedded within a clean, accessible UI tailored for Gen Z users and optimized for mobile platforms.
              </p>
            </div>

            {/* Literature Review */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">Literature Review</h4>
              <p className="mb-4">
                Our literature review significantly shaped both the technical and conceptual foundations of Ana. Key findings from synthesizing 63 studies and 18 datasets revealed that media bias is often subtle and context-dependent, with multilingual, multi-domain datasets lacking in current AI systems.
              </p>
              <p className="mb-4">
                Research emphasized that current AI-driven detection systems are still in early development stages, identifying 17 distinct forms of media bias ranging from spin and ideology bias to statement and gatekeeping bias. This review helped us determine Ana's bias taxonomy, training examples, and the need for multi-perspective article presentation.
              </p>
              <p>
                Additional psychological frameworks for building trustworthy AI highlighted that transparency, context-awareness, and accountability are essential to user trust, influencing Ana's emphasis on visual explanations, bias-source links, and user-controlled feedback loops.
              </p>
            </div>

            {/* Design Principles */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">Design Principles</h4>
              <p className="mb-4">
                Guided by these findings, our team established three core design principles for Ana: <strong>transparency</strong>, <strong>education</strong>, and <strong>empowerment</strong>. These principles are reflected across the platform from onboarding tutorials that clarify how bias detection works, to a bias slider that invites exploration of contrasting narratives.
              </p>
              <p>
                Ana is not just a news filter—it is a literacy tool and trust-building system designed to meet the cognitive, emotional, and social needs of its users.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="flex flex-col items-center text-center p-4 bg-blue-500/5 rounded-lg border border-blue-500/20">
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-blue-500" />
                  </div>
                  <h5 className="font-medium mb-2">Transparency</h5>
                  <p className="text-sm text-muted-foreground">Clear explanations of how bias is detected and analyzed</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-green-500/5 rounded-lg border border-green-500/20">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                    <BookOpen className="w-8 h-8 text-green-500" />
                  </div>
                  <h5 className="font-medium mb-2">Education</h5>
                  <p className="text-sm text-muted-foreground">Embedded media literacy tools and micro-lessons</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-purple-500/5 rounded-lg border border-purple-500/20">
                  <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                    <Zap className="w-8 h-8 text-purple-500" />
                  </div>
                  <h5 className="font-medium mb-2">Empowerment</h5>
                  <p className="text-sm text-muted-foreground">Interactive features for exploring diverse perspectives</p>
                </div>
              </div>
            </div>
          </div>

          {/* Goals */}
          <div className="my-8">
            <h3 className="text-2xl font-bold mb-4">Goals</h3>
            <p className="mb-6">
              Our research validated user concerns about mainstream and AI-generated news, revealing deep skepticism and fears of misinformation. Based on these insights and our literature review, we established goals that were iterated as new findings came to light. The following are our final, refined goals:
            </p>
            
            <div className="grid md:grid-cols-1 gap-4">
              {[
                {
                  goal: "Goal 1 (Reader Habits)",
                  description: "This goal remained unchanged but was executed with more emphasis on qualitative insights due to limitations in eye-tracking resources. Instead of tracking cursor or eye movements, we focused on interview narratives and time-on-task observations during prototype testing."
                },
                {
                  goal: "Goal 2 (Topic Preferences)", 
                  description: "Unchanged. Surveys and interviews successfully gathered user preferences, reaffirming interest in political, social, and environmental news, as well as a strong demand for regional customization."
                },
                {
                  goal: "Goal 3 (AI Prompt Trials)",
                  description: "This goal required refinement. We initially planned extensive prompt testing across multiple models but narrowed our scope to iterating on a focused set of prompts for one model (ChatGPT), informed by research which cautioned against uncontrolled outputs from less constrained models."
                },
                {
                  goal: "Goal 4 (User vs. AI Bias Perception)",
                  description: "Unchanged, and successfully carried out through the bias comparison sprint activity. Results revealed that users and AI often differed in bias interpretation—particularly with subtle framing or omissions—which informed our emphasis on explainable bias visualizations."
                },
                {
                  goal: "Goal 5 (Impactful Bias Types)",
                  description: "This goal remained but was expanded. Based on user feedback, we placed additional emphasis on statement bias and spin bias, which users found most misleading. These were prioritized in our bias indicator designs."
                },
                {
                  goal: "Goal 6 (Engagement and Trust)",
                  description: "Adjusted slightly. While we originally intended to measure trust quantitatively, we instead collected qualitative indicators through interviews and usability feedback, focusing on trust in AI assessments and clarity of bias explanations."
                },
                {
                  goal: "Goal 7 (Media Literacy)",
                  description: "Unchanged in scope but expanded in delivery. Due to strong user demand for contextual learning, we added additional micro-lessons and an onboarding tutorial to enhance literacy without overwhelming users."
                }
              ].map((item, index) => (
                <div key={index} className="bg-muted/20 p-4 rounded-lg border border-muted/30">
                  <h5 className="font-semibold text-primary mb-2">{item.goal}</h5>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Summary */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/5 p-6 rounded-lg border border-primary/20 my-8">
            <p className="italic text-center">
              By combining evidence-based design with human-centered AI, Ana redefines how users engage with the news. It is not just a content delivery system but a cognitive aid built to detect bias, illuminate nuance, and cultivate critical thinking in a media landscape that urgently demands it.
            </p>
          </div>
        </div>
      </StorySection>

      {/* Methods Section */}
      <StorySection
        id="methods"
        chapter="Chapter 02"
        storyTitle="Research Methods"
        narrativeHook="A multi-stage, mixed-methods research approach grounding every design decision in evidence."
        className="bg-gradient-to-br from-background to-secondary/5"
      >
        <div className="space-y-8">
          <p className="lead text-xl">
            Our approach to designing Ana was rooted in a multi-stage, mixed-methods research and design process. We began with broad, qualitative exploration to understand the human problem, then used quantitative methods to validate our insights, followed by systematic AI development subjected to iterative evaluation and user-centered testing.
          </p>
          
          {/* Competitive Analysis */}
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">Competitive Analysis</h3>
            <p className="mb-6">
              Our competitive analysis identified three key players in the news bias space, revealing opportunities for differentiation through AI integration and educational features:
            </p>
            
            <div className="grid md:grid-cols-1 gap-6 my-8">
              {[
                {
                  name: "Ground News",
                  description: "Offers tools to track media bias and compare coverage across sources. Features a bias checker, bias distribution visuals, and AI-generated summaries. Available via desktop, mobile app, website, and Chrome extension.",
                  strengths: "Strong multi-platform presence, visual bias distribution",
                  gaps: "Limited educational content"
                },
                {
                  name: "AllSides", 
                  description: "Emphasizes presenting diverse political and social perspectives. Includes a media bias vote and human-written articles to highlight contrasting viewpoints. Available on desktop and mobile.",
                  strengths: "Community-driven bias assessment, diverse perspectives",
                  gaps: "Lacks AI summaries and in-depth bias comparison tools"
                },
                {
                  name: "TIMINO",
                  description: "Provides bias insights through a checker and comparison features. Relies on human-written content but does not support AI summaries or article reporting.",
                  strengths: "Focused bias detection tools",
                  gaps: "No AI summaries, limited interactive features"
                }
              ].map((competitor, index) => (
                <Card key={competitor.name} className="bg-muted/20">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-4 items-start">
                      <div>
                        <h4 className="font-bold text-lg text-primary">{competitor.name}</h4>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-sm text-muted-foreground">{competitor.description}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs font-medium text-green-600">Strengths: {competitor.strengths}</p>
                        <p className="text-xs font-medium text-orange-600">Gaps: {competitor.gaps}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-lg border border-primary/20">
              <p className="font-medium text-primary mb-2">Key Opportunity Identified:</p>
              <p className="text-sm">Ana integrates micro-lessons in media literacy, user-reporting mechanisms for misinformation, and a bias slider for exploring articles across the ideological spectrum—features not comprehensively integrated in any existing platform.</p>
            </div>
          </div>

          {/* Literature Review */}
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">Literature Review Findings</h3>
            
            {/* Human Tendencies */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">Key Human Tendencies in Information Consumption</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-orange-500/5 to-red-500/5 border border-orange-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                        <Eye className="w-5 h-5 text-orange-500" />
                      </div>
                      <h5 className="font-semibold">Naive Realism</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Leads individuals to view their interpretations as objective truths, causing them to dismiss opposing perspectives as biased or misinformed. This hinders balanced news consumption.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-blue-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <Brain className="w-5 h-5 text-blue-500" />
                      </div>
                      <h5 className="font-semibold">Confirmation Bias</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Drives people to seek information that aligns with their existing beliefs. In digital spaces, this is amplified by algorithm-driven "information bubbles" which restrict exposure to diverse viewpoints.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Media Bias Types */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">Media Bias Complexity</h4>
              <div className="bg-muted/20 p-6 rounded-lg border border-muted/30">
                <p className="mb-4">
                  We learned that the <strong>17 types of media bias</strong>—such as spin, ideology, omission, placement, labeling, and source selection—can be identified by experts but remain largely undetectable by current AI systems, which are still in early stages of development.
                </p>
                <p className="text-sm text-muted-foreground">
                  This gap led us to explore prompt engineering and ways to build trust between humans and AI content.
                </p>
              </div>
            </div>

            {/* Trustworthy AI Framework */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">Building Trustworthy AI</h4>
              <p className="mb-4">
                Based on research on "Developing trustworthy artificial intelligence," we identified three critical components for AI trust:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-green-500" />
                      </div>
                      <h5 className="font-semibold">The Trustor (User)</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      User's background—age, education, job, culture, and experience with AI—impacts their relationship with AI systems.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-purple-500/5 to-violet-500/5 border border-purple-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-purple-500" />
                      </div>
                      <h5 className="font-semibold">The Trustee (AI System)</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      An AI system that is accountable, focuses on privacy protection with proper safeguards, and is transparent increases user trust.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <Target className="w-5 h-5 text-blue-500" />
                      </div>
                      <h5 className="font-semibold">Interactive Context</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      The context of AI impacts perceived trust based on how well it is viewed by media and society.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* User Research */}
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">User Research</h3>
            
            {/* Data Collection Methods */}
            <div className="mb-8">
              {/* User Interviews */}
              <div className="mb-6">
                <h5 className="text-lg font-medium mb-3">User Interviews with Card Sorting</h5>
                <p className="mb-4">
                  We conducted nine semi-structured interviews with participants sourced from the DePaul CDM Participant Pool and personal networks, screening for individuals over 18 who were interested in news. The interviews explored political views, perceptions of bias, and news consumption habits, conducted remotely via Zoom with participant consent for recording.
                </p>
                <p className="mb-4">
                  During these sessions, participants completed a card sorting exercise to understand their mental models for organizing news-related concepts like "source credibility," "political bias," and "balance check," which directly informed Ana's information architecture. The card sorting aimed at gathering data for the order of Ana's output, with results analyzed quantitatively to find average placement of each topic. The 9 topics were split into 3 groups: <strong>Core Evaluation</strong>, <strong>Contextual Analysis</strong>, and <strong>Explore More</strong>.
                </p>
              </div>

              {/* Survey */}
              <div className="mb-6">
                <h5 className="text-lg font-medium mb-3">Qualtrics Survey (n=43)</h5>
                <p className="mb-4">
                  Simultaneously, we deployed a comprehensive survey on Qualtrics and analyzed results using R. Key insights from our participant pool:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <Card className="bg-gradient-to-br from-primary/5 to-blue-500/5 border border-primary/20">
                    <CardContent className="p-6">
                      <h6 className="font-semibold mb-3">Demographics & Usage</h6>
                      <ul className="space-y-2 text-sm">
                        <li>• Total participants: <strong>43 (US residents)</strong></li>
                        <li>• Age range: <strong>20-34 (avg: 26.7)</strong></li>
                        <li>• Political leaning: <strong>68% left-leaning</strong></li>
                        <li>• AI news aggregator usage: <strong>82% never used</strong></li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-secondary/5 to-green-500/5 border border-secondary/20">
                    <CardContent className="p-6">
                      <h6 className="font-semibold mb-3">Key Insights</h6>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Market education potential:</strong> High unfamiliarity with AI news tools</li>
                        <li>• <strong>Full story priority:</strong> Users want depth and multiple perspectives</li>
                        <li>• <strong>Political perspective impact:</strong> System must account for users' own biases</li>
                        <li>• <strong>Generalization limits:</strong> Young, politically homogeneous sample</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-orange-500/5 border border-orange-500/20 p-4 rounded-lg">
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    <strong>Limitation:</strong> The sample's left-leaning political composition (68%) and modest size (43 responses) may have impacted perceptions, with participants potentially having difficulty recognizing bias aligned with their own views.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Analysis */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">Data Analysis</h4>
              
              <div className="space-y-8">
                {/* Affinity Diagrams - Full Width */}
                <div>
                  <h5 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-500" />
                    Affinity Diagrams
                  </h5>
                  <p className="text-sm text-muted-foreground mb-4">
                    Each team member coded interviews using inductive coding method, with findings aggregated into a comprehensive affinity diagram in FigJam to identify key themes.
                  </p>
                </div>

                {/* Personas - Full Width */}
                <div>
                  <h5 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-500" />
                    User Personas
                  </h5>
                  <p className="text-sm text-muted-foreground mb-4">
                    Insights distilled into three distinct user personas: "Laura Left" and "Alex Neutral," capturing diverse goals, behaviors, and pain points.
                  </p>
                  <div className="space-y-6">
                    {/* Laura Left Persona */}
                    <div className="bg-muted/20 p-6 rounded-xl border border-muted/30">
                      <div className="relative overflow-hidden rounded-lg">
                        <img 
                          src="/images/ANA/laura-left.png" 
                          alt="Laura Left - User Persona"
                          className="w-full h-auto object-contain"
                          style={{ borderRadius: '12px' }}
                        />
                      </div>
                    </div>
                    
                    {/* Alex Neutral Persona */}
                    <div className="bg-muted/20 p-6 rounded-xl border border-muted/30">
                      <div className="relative overflow-hidden rounded-lg">
                        <img 
                          src="/images/ANA/alex-neutral.png" 
                          alt="Alex Neutral - User Persona"
                          className="w-full h-auto object-contain"
                          style={{ borderRadius: '12px' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Journey Map - Full Width */}
                <div>
                  <h5 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-500" />
                    User Journey Map
                  </h5>
                  <p className="text-sm text-muted-foreground mb-4">
                    Visualized typical user path from discovering Ana to building trust, highlighting "Evaluation & Trust Building" as the most critical stage.
                  </p>
                  <div className="bg-muted/20 p-6 rounded-xl border border-muted/30">
                    <div className="relative overflow-hidden rounded-lg">
                      <img 
                        src="/images/ANA/journeymap.png" 
                        alt="User Journey Map - Ana's Complete User Experience"
                        className="w-full h-auto object-contain"
                        style={{ borderRadius: '12px' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* User's Dilemma */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">The User's Dilemma</h4>
              <div className="bg-gradient-to-br from-orange-500/5 to-red-500/5 border border-orange-500/20 p-6 rounded-lg">
                <p className="mb-4">
                  Our interviews revealed engaged yet weary news consumers facing a foundational problem Ana solves. Participants expressed profound frustration with the modern media environment, describing misinformation as a "dangerous virus." Users felt so overwhelmed by "misinformation and exaggeration" that they needed mental health breaks from the news.
                </p>
                <p className="mb-4">
                  This skepticism targets both content and platforms. Users distrust mainstream outlets due to corporate ownership and perform laborious verification rituals: cross-referencing multiple sources, checking comment sections for dissent, and seeking sources with journalistic distance.
                </p>
                <p className="text-sm text-muted-foreground">
                  AI enters this environment viewed both as a boon and curse—a potential "Socratic method machine" for exploring perspectives, yet shadowed by deep skepticism and fears of adding another opaque layer of bias.
                </p>
              </div>
            </div>

            {/* Survey Insights - Bias Detection */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">Survey Insights: Bias Detection Challenges</h4>
              <p className="mb-4">
                Our headline analysis revealed significant "blind spots" in how users perceive bias, validating Ana's core premise:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-red-500/5 to-orange-500/5 border border-red-500/20">
                  <CardContent className="p-6">
                    <h6 className="font-semibold text-red-600 mb-3">Subtle Framing</h6>
                    <p className="text-sm text-muted-foreground">
                      <strong>46.2%</strong> misidentified a right-center headline ("Trump needs unity...") as "Least Biased," showing users miss bias embedded in seemingly neutral language.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-purple-500/5 to-violet-500/5 border border-purple-500/20">
                  <CardContent className="p-6">
                    <h6 className="font-semibold text-purple-600 mb-3">Subject vs. Perspective</h6>
                    <p className="text-sm text-muted-foreground">
                      <strong>66.7%</strong> misidentified a left-leaning headline critical of GOP as right-leaning, confusing the article's subject with its critical perspective.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/20">
                  <CardContent className="p-6">
                    <h6 className="font-semibold text-green-600 mb-3">Overt Bias</h6>
                    <p className="text-sm text-muted-foreground">
                      <strong>51.3%</strong> accurately identified headlines with overt, emotionally charged language, showing better recognition of obvious bias.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Creating Custom Research-Based GPT */}
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">Creating Custom Research-Based GPT for Ana</h3>
            <p className="mb-6">
              We developed a rule-based analytical framework to ensure Ana's analysis is transparent and defensible—not the output of an arbitrary "black box." This approach grounds Ana's assessments in information science and media analysis.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/20">
                <CardContent className="p-6">
                  <h5 className="font-semibold mb-3">Source Credibility Assessment</h5>
                  <p className="text-sm text-muted-foreground mb-4">
                    We adapted the "5 Ws" method, a standard framework used by academic institutions like the University of Washington Libraries to evaluate source reliability.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Author credentials assessment</li>
                    <li>• Publisher reputation evaluation</li>
                    <li>• Content purpose analysis</li>
                    <li>• Sourcing practices review</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-500/5 to-violet-500/5 border border-purple-500/20">
                <CardContent className="p-6">
                  <h5 className="font-semibold mb-3">Political Bias Scoring</h5>
                  <p className="text-sm text-muted-foreground mb-4">
                    We operationalized the methodology of Media Bias/Fact Check (MBFC), adopting their weighted scoring system across multiple dimensions.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Economic systems evaluation</li>
                    <li>• Social values assessment</li>
                    <li>• Editorial bias patterns</li>
                    <li>• Seven-point spectrum placement</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Validation Testing */}
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">Bias Check Validation & User-AI Perception Gap</h3>
            <p className="mb-6">
              To validate that Ana was correctly identifying bias without introducing its own bias, we conducted focused testing to examine the user-AI perception gap.
            </p>
            
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20">
              <CardContent className="p-6">
                <h5 className="font-semibold mb-4">Media Bias Detection Sprint</h5>
                <p className="mb-4">
                  We conducted an in-class "Media Bias Detection Sprint" following a structured protocol. Classmates manually analyzed headlines for specific bias types (e.g., spin, statement bias) and compared their findings to Ana's AI output.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-orange-500/5 p-4 rounded border border-orange-500/20">
                    <h6 className="font-medium text-orange-600 mb-2">Human Analysis Patterns</h6>
                    <p className="text-sm text-muted-foreground">
                      Participants were often swayed by emotional language (e.g., the word "bloodbath"), focusing on surface-level emotional triggers rather than systematic bias patterns.
                    </p>
                  </div>
                  
                  <div className="bg-blue-500/5 p-4 rounded border border-blue-500/20">
                    <h6 className="font-medium text-blue-600 mb-2">AI Analysis Strengths</h6>
                    <p className="text-sm text-muted-foreground">
                      The AI could more systematically identify and categorize bias types, providing consistent methodology across different content samples.
                    </p>
                  </div>
                </div>
                
                <div className="bg-green-500/5 p-4 rounded border border-green-500/20 mt-4">
                  <p className="text-sm font-medium text-green-700 dark:text-green-300">
                    Outcome: This experiment reinforced the necessity of a methodical, rule-based tool to augment human intuition and successfully validated Goal 4 (Compare user vs. AI perceptions of bias).
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </StorySection>

      {/* Results Section */}
      <StorySection
        id="design"
        chapter="Chapter 03"
        storyTitle="Iterative Design & Testing"
        narrativeHook="From concept to prototype: How user feedback and peer evaluation shaped Ana's evolution through structured design iterations."
        className="bg-gradient-to-br from-secondary/5 to-background"
      >
        <div className="space-y-8">
          <p className="lead text-xl">
            Our design process moved from low-fidelity concepts to a refined mid-fidelity prototype through a structured, iterative cycle of feedback and testing. This chapter explores how we transformed research insights into a functional, user-centered design.
          </p>
          
          {/* User Flow Chart */}
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">Early Stages & User Flow Mapping</h3>
            <p className="mb-6">
              To define what we wanted in the MVP of Ana, we created a user flow chart of various tasks and functionality of potential pages. The created flowchart grounded us in our decision making, allowing us to identify the most important aspects to design and test.
            </p>
            
            <div className="bg-muted/20 p-8 rounded-lg border border-muted/30 my-8">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/images/ANA/user-flow.png" 
                  alt="User Flow Chart - Ana's Core Functionality"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            
            <p className="mb-4">
              The most important flows identified included:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Article Bias Analysis",
                "News For You", 
                "Account Creation",
                "Discussions",
                "Methodology"
              ].map((flow, index) => (
                <Card key={flow} className="p-4 bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                    <span className="font-medium">{flow}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Lo-Fi Prototyping */}
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">Lo-Fi Prototyping</h3>
            <p className="mb-6">
              Ana's primary function is to provide information regarding articles and their political bias (based on their country of origin). As a team, we kicked off the design with sketches on what various screens would look like. Everyone contributed in the early design stages, allowing us to explore how Ana would function.
            </p>
            
            <p className="mb-8">
              Teammates proficient in Figma then created wireframes of the sketches, initiating the early design phase of Ana. We began with lo-fi wireframes to map out the basic user flow and information architecture.
            </p>
            
            {/* Lo-Fi Mockups */}
            <div className="bg-muted/20 p-6 rounded-xl border border-muted/30">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div className="relative overflow-hidden" style={{ borderRadius: '48px' }}>
                    <img 
                      src="/images/ANA/lofi-home.png" 
                      alt="Lo-Fi Home Screen"
                      className="w-full h-full object-contain"
                      style={{ borderRadius: '48px' }}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium">Lo-Fi Home Screen</p>
                    <p className="text-xs text-muted-foreground mt-1">Initial Layout Concept</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="relative overflow-hidden" style={{ borderRadius: '48px' }}>
                    <img 
                      src="/images/ANA/lofi-bias.png" 
                      alt="Lo-Fi Bias Analysis"
                      className="w-full h-full object-contain"
                      style={{ borderRadius: '48px' }}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium">Lo-Fi Bias Analysis</p>
                    <p className="text-xs text-muted-foreground mt-1">Core Feature Wireframe</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="relative overflow-hidden" style={{ borderRadius: '48px' }}>
                    <img 
                      src="/images/ANA/lofi-NFY.png" 
                      alt="Lo-Fi News For You"
                      className="w-full h-full object-contain"
                      style={{ borderRadius: '48px' }}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium">Lo-Fi News For You</p>
                    <p className="text-xs text-muted-foreground mt-1">Article Discovery Flow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RFP Evaluation */}
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">Peer Evaluation: RFP Exchange with "Her Team"</h3>
            <p className="mb-6">
              As a crucial intermediate step, we engaged in a Request for Proposal (RFP) exchange with "Her Team" for an expert cognitive walkthrough of our lo-fi prototype. Their evaluation provided invaluable external validation and critique that informed our design changes.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <h4 className="text-lg font-semibold text-green-700 dark:text-green-300">Strengths Identified</h4>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <span>Core concept was strong and compelling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <span>Onboarding flow was "smooth and intuitive"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <span>Successfully provided detailed bias information</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-orange-500/5 to-red-500/5 border border-orange-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-orange-500" />
                    </div>
                    <h4 className="text-lg font-semibold text-orange-700 dark:text-orange-300">Critical Weaknesses</h4>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                      <span>Inconsistent design and unclear terminology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                      <span>Non-functional navigation elements ("Core Evaluation")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                      <span>Meaningless visual indicators without context</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                      <span>"Home" and "News for You" pages were conflated</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-lg">
              <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
                <strong>Impact:</strong> This peer feedback was instrumental in validating our decision to pivot to a mid-fidelity design using a standardized iOS component library, which would resolve the inconsistencies in navigation and visual language that were undermining the user experience.
              </p>
            </div>
          </div>

          {/* Design Pivot to Mid-Fi */}
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">Design Pivot to Mid-Fi</h3>
            <p className="mb-6">
              One of the biggest hurdles of designing Ana was embracing a design pivot. The team found themselves debating over micro design decisions that could easily be solved using a component library. We selected the iOS component library because of its popularity amongst mobile users.
            </p>
            
            <p className="mb-8">
              Informed by the peer evaluation done by Her Team, we developed a mid-fidelity prototype in Figma. This version incorporated a standardized iOS component library to resolve the inconsistencies identified in the lo-fi design, creating a more professional and intuitive user interface.
            </p>
            
            {/* Mid-Fi Mockups */}
            <div className="space-y-8 my-8">
              {/* First Row - Main Screens */}
              <div className="bg-muted/20 p-6 rounded-xl border border-muted/30">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="space-y-4">
                    <div className="relative overflow-hidden" style={{ borderRadius: '48px' }}>
                      <img 
                        src="/images/ANA/Login.png" 
                        alt="Login Page"
                        className="w-full h-full object-contain"
                        style={{ borderRadius: '48px' }}
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium">Login Page</p>
                      <p className="text-xs text-muted-foreground mt-1">User Authentication</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative overflow-hidden" style={{ borderRadius: '48px' }}>
                      <img 
                        src="/images/ANA/Home Page.png" 
                        alt="Home Page"
                        className="w-full h-full object-contain"
                        style={{ borderRadius: '48px' }}
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium">Home Page</p>
                      <p className="text-xs text-muted-foreground mt-1">Main Dashboard</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative overflow-hidden" style={{ borderRadius: '48px' }}>
                      <img 
                        src="/images/ANA/Bias Analysis Report Page.png" 
                        alt="Bias Analysis Report"
                        className="w-full h-full object-contain"
                        style={{ borderRadius: '48px' }}
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium">Bias Analysis Report</p>
                      <p className="text-xs text-muted-foreground mt-1">Detailed Analysis</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative overflow-hidden" style={{ borderRadius: '48px' }}>
                      <img 
                        src="/images/ANA/Methodology.png" 
                        alt="Methodology Page"
                        className="w-full h-full object-contain"
                        style={{ borderRadius: '48px' }}
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium">Methodology Page</p>
                      <p className="text-xs text-muted-foreground mt-1">AI Explanation</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Second Row - News For You & Community Features */}
              <div className="bg-muted/20 p-6 rounded-xl border border-muted/30">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="space-y-4">
                    <div className="relative overflow-hidden" style={{ borderRadius: '48px' }}>
                      <img 
                        src="/images/ANA/NFY-2.png" 
                        alt="News For You - Browse"
                        className="w-full h-full object-contain"
                        style={{ borderRadius: '48px' }}
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium">News For You - Browse</p>
                      <p className="text-xs text-muted-foreground mt-1">Article Discovery</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative overflow-hidden" style={{ borderRadius: '48px' }}>
                      <img 
                        src="/images/ANA/NFY-3.png" 
                        alt="News For You - Filters"
                        className="w-full h-full object-contain"
                        style={{ borderRadius: '48px' }}
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium">News For You - Filters</p>
                      <p className="text-xs text-muted-foreground mt-1">Bias Filtering</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative overflow-hidden" style={{ borderRadius: '48px' }}>
                      <img 
                        src="/images/ANA/Discussions.png" 
                        alt="Discussions Page"
                        className="w-full h-full object-contain"
                        style={{ borderRadius: '48px' }}
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium">Discussions</p>
                      <p className="text-xs text-muted-foreground mt-1">Community Features</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative overflow-hidden" style={{ borderRadius: '48px' }}>
                      <img 
                        src="/images/ANA/Methology-keyword.png" 
                        alt="Methodology Keywords"
                        className="w-full h-full object-contain"
                        style={{ borderRadius: '48px' }}
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium">Methodology Details</p>
                      <p className="text-xs text-muted-foreground mt-1">Keyword Analysis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Early Branding */}
            <div className="my-8">
              <h4 className="text-xl font-semibold mb-4">Early Branding</h4>
              <p className="mb-4">
                While branding for the project had always been listed as low priority, we found an opportunity to use color within the mid-fi prototype to help with hierarchy as well as prototype what the final design could look like.
              </p>
              
              <div className="bg-muted/20 p-6 rounded-lg border border-muted/30">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-gray-600" />
                    </div>
                    <h5 className="font-semibold mb-2">Trustworthy White</h5>
                    <p className="text-sm text-muted-foreground">Heavy usage of white for trustworthy look/feel, giving space for political expression</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <Lightbulb className="w-8 h-8 text-yellow-800" />
                    </div>
                    <h5 className="font-semibold mb-2">Yellow Highlighter</h5>
                    <p className="text-sm text-muted-foreground">Represents the act of highlighting key information</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-semibold mb-2">Purple Interactables</h5>
                    <p className="text-sm text-muted-foreground">Anomaly color compared to iOS blue to implicate political favorability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RITE Method */}
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">RITE Method: Rapid Iterative Testing & Evaluation</h3>
            <p className="mb-6">
              We tested the mid-fidelity prototype using the RITE (Rapid Iterative Testing and Evaluation) method. This involved two rounds of usability testing where we made targeted design changes based on participant feedback after each session.
            </p>
            
            <p className="mb-8">
              This agile approach allowed us to quickly identify and fix usability issues, ensuring the final prototype was directly responsive to user needs. Working under pressure produced great design decisions and gave us valuable insights.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <Card className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-4">Design Strengths Confirmed</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Aesthetic and Tone:</span>
                        <p className="text-muted-foreground">Users responded positively to the soft, authoritative color scheme, which established credibility</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Clarity:</span>
                        <p className="text-muted-foreground">Users found the general layout and typography intuitive</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-orange-500/5 to-red-500/5 border border-orange-500/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-4">Areas for Improvement</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Information Hierarchy:</span>
                        <p className="text-muted-foreground">Users needed to see "Main Takeaways" immediately, but initial design buried this content below the scroll</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Interactive Clarity:</span>
                        <p className="text-muted-foreground">Key interactive elements lacked strong visual cues to show they were clickable</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Screen Real Estate:</span>
                        <p className="text-muted-foreground">Mobile layout used space inefficiently with oversized elements</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Sharing Options:</span>
                        <p className="text-muted-foreground">Users wanted to share specific sections, not just the entire article</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Design Changes */}
            <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-4">Iterative Design Changes</h4>
              <p className="text-sm mb-4">
                This feedback directly informed our design pivot. The redesign incorporated the following improvements:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                    <span>Elevated "Main Takeaways" for immediate visibility</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                    <span>Collapsed summary to prioritize key points</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                    <span>Added visual borders to clarify button interactivity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                    <span>Implemented prominent flag and share icons</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm mt-4 font-medium text-blue-700 dark:text-blue-300">
                This iterative loop demonstrates how we refined Ana from a strong concept into a functional, intuitive prototype.
              </p>
            </div>
          </div>
        </div>
      </StorySection>

      {/* Discussion Section */}
      <StorySection
        id="discussion"
        chapter="Chapter 04"
        storyTitle="Reflection & Next Steps"
        narrativeHook="Looking back on our journey and forward to Ana's potential: What we learned, what we'd do differently, and where we go from here."
        className="bg-gradient-to-br from-background to-primary/5"
      >
        <div className="space-y-8">
          <p className="lead text-xl">
            Ana represents a promising step toward a new generation of news tools built on trust and media literacy. By combining AI's analytical power with a deep commitment to user-centered design, this project provides a framework for empowering users to not just consume news, but to understand it critically.
          </p>
          
          {/* Project Reflection */}
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">Project Reflection</h3>
            
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <Card className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <h4 className="text-lg font-semibold text-green-700 dark:text-green-300">What Went Well</h4>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <span><strong>User-Centered Research:</strong> Our mixed-methods approach successfully uncovered deep insights about user perception gaps and bias blind spots</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <span><strong>Iterative Design Process:</strong> The RITE method and RFP feedback led to significant usability improvements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <span><strong>AI Framework Development:</strong> Successfully created a rule-based, transparent bias detection system</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <span><strong>Educational Integration:</strong> Seamlessly combined bias detection with media literacy learning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-orange-500/5 to-red-500/5 border border-orange-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-orange-500" />
                    </div>
                    <h4 className="text-lg font-semibold text-orange-700 dark:text-orange-300">What Could Be Improved</h4>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                      <span><strong>Demographic Diversity:</strong> Our sample was heavily left-leaning (68%) and limited in age range, potentially skewing insights</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                      <span><strong>AI Explainability:</strong> Current system struggles with nuanced explanations for complex bias cases</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                      <span><strong>Long-term Validation:</strong> Limited testing period for measuring sustained behavior change</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                      <span><strong>Technical Scalability:</strong> Resource-intensive analysis may create latency issues at scale</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Project Limitations */}
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">Project Limitations</h3>
            <p className="mb-6">
              While Ana shows promise, several limitations emerged during our research and development process that future iterations should address:
            </p>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 my-8">
              <Card className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-500" />
                    </div>
                    <h4 className="text-lg font-semibold">Sample Bias</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our participant pool's political homogeneity and limited age range (20-34) may not represent broader user needs, particularly among conservative users or older demographics who consume news differently.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-500/5 to-violet-500/5 border border-purple-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                      <Brain className="w-5 h-5 text-purple-500" />
                    </div>
                    <h4 className="text-lg font-semibold">AI Complexity</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The subject/perspective confusion we observed highlights AI's current limitations in understanding nuanced bias, particularly when article subjects differ from editorial perspectives.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>
                    <h4 className="text-lg font-semibold">Scale Validation</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    While prototype testing showed promise, real-world deployment with thousands of users and diverse news sources would likely reveal additional challenges and edge cases.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Next Steps */}
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">Next Steps</h3>
            <p className="mb-6">
              Looking forward, the next steps for Ana involve expanding its capabilities and validating its effectiveness with a broader audience. Future work should focus on three key areas:
            </p>
            
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Brain className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-semibold mb-3">Enhancing AI Explainability</h4>
                      <p className="text-muted-foreground mb-4">
                        Develop the AI to provide more nuanced explanations for its bias ratings, particularly for complex cases like the subject/perspective confusion we observed. This includes:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-primary" />
                          <span>Advanced prompt engineering for contextual analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-primary" />
                          <span>Multi-layered bias detection beyond left/right paradigms</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-primary" />
                          <span>Visual explanations showing AI reasoning process</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-secondary/5 to-primary/5 border border-secondary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-secondary-foreground/80" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-semibold mb-3">Broader Demographic Testing</h4>
                      <p className="text-muted-foreground mb-4">
                        Conduct studies with a more politically and demographically diverse user base to ensure Ana is effective for all users. This expansion should include:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-secondary-foreground/80" />
                          <span>Conservative and moderate political perspectives</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-secondary-foreground/80" />
                          <span>Broader age ranges (35-65+) and cultural backgrounds</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-secondary-foreground/80" />
                          <span>International users with different media landscapes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-500/5 to-blue-500/5 border border-green-500/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-green-500" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-semibold mb-3">Building Interactivity</h4>
                      <p className="text-muted-foreground mb-4">
                        Implement user-requested flagging and feedback mechanisms to create a "human-in-the-loop" system that refines AI assessments over time, building trust and engagement:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-green-500" />
                          <span>User flagging system for bias detection accuracy</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-green-500" />
                          <span>Community-driven bias validation and appeals process</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-green-500" />
                          <span>Continuous learning algorithms that adapt to user feedback</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Final Reflection */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/5 p-8 rounded-lg border border-primary/20 my-8">
            <h3 className="text-2xl font-bold mb-4">Final Reflection</h3>
            <p className="text-lg leading-relaxed mb-4">
              Ana is more than just a tool for detecting bias—it's an educational platform that helps users develop a critical lens for all media consumption. In today's fragmented information landscape, we need technologies that don't just tell us what to think, but help us think better for ourselves.
            </p>
            <p className="text-lg leading-relaxed">
              This project demonstrates that combining rigorous user research with thoughtful AI development can create solutions that address real user needs while building the media literacy skills our society desperately needs. The future of news consumption isn't about perfect AI—it's about empowering humans to be better critical thinkers.
            </p>
            <p className="mt-4 text-right text-muted-foreground font-medium">— The Fantastic Four Team</p>
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
                <Link href="/projects/understanding-creative-block">
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


      <Footer />
    </ProjectPageWrapper>
  )
}
