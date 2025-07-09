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
    { id: "results", title: "Results", subtitle: "Key findings" },
    { id: "discussion", title: "Discussion", subtitle: "Interpretation & insights" },
    { id: "conclusion", title: "Conclusion", subtitle: "Outcomes & next steps" }
  ]

  const storyData = {
    hero: {
      title: "Ana: AI News Aggregator",
      subtitle: "Empowering Gen Z with balanced news perspectives and enhanced media literacy",
      storyHook: "What if an AI could help you see beyond information bubbles and understand the full spectrum of news perspectives?",
      heroImage: "/images/logo.png", // You'll need to add this image to your public/images folder
      role: "UX Researcher & Designer",
      timeline: "12 weeks (Spring 2025)",
      team: ["The Fantastic Four Team"]
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
        chapter="01. OVERVIEW"
        storyTitle="Tackling Media Bias with AI"
        narrativeHook="In a world increasingly divided by information bubbles, Ana bridges perspectives through explainable AI and media literacy."
        className="bg-gradient-to-br from-primary/5 to-background"
      >
        <div className="space-y-8">
          <p className="lead text-xl">
            This project presents Ana, an AI-powered news aggregator designed to detect media bias and support users in accessing factual, balanced news. The goal was to develop a system that not only flags bias but also explains its origins and encourages media literacy through embedded educational content.
          </p>
          
          <div className="my-12 p-8 bg-secondary/5 border border-secondary/10 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Ana's Core Mission</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                  <Eye className="w-8 h-8 text-blue-500" />
                </div>
                <h4 className="font-medium mb-2">Bias Detection</h4>
                <p className="text-sm text-muted-foreground">Automated, explainable analysis of media content</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="font-medium mb-2">Media Literacy</h4>
                <p className="text-sm text-muted-foreground">Educational tools integrated into the news experience</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-purple-500" />
                </div>
                <h4 className="font-medium mb-2">User Empowerment</h4>
                <p className="text-sm text-muted-foreground">Interactive features allowing exploration of perspectives</p>
              </div>
            </div>
          </div>
          
          <p>
            In a media environment shaped by disinformation and polarized narratives, Ana offers automated, explainable bias detection, educational tools, and interactive features. It is built upon a literature review on media bias and AI trust, competitive analysis of platforms like Ground News, AllSides, and TIMINO, and findings from 63 studies.
          </p>
          
          <div className="my-8">
            <h3 className="text-2xl font-bold mb-4">Project Goals</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <RefinedMagneticEffect intensity={0.05}>
                <Card className="h-full bg-gradient-to-br from-background to-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-medium mb-3">User Understanding</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>Understanding reader habits with varying perspectives</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>Identifying user interests through surveys</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>Measuring engagement and trust</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </RefinedMagneticEffect>
              
              <RefinedMagneticEffect intensity={0.05}>
                <Card className="h-full bg-gradient-to-br from-background to-secondary/5 border-secondary/20">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-medium mb-3">Technical Innovation</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-secondary-foreground/80 mr-2 mt-1 flex-shrink-0" />
                        <span>Developing and refining AI prompts for bias detection</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-secondary-foreground/80 mr-2 mt-1 flex-shrink-0" />
                        <span>Comparing AI and user perceptions of bias</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-secondary-foreground/80 mr-2 mt-1 flex-shrink-0" />
                        <span>Identifying cognitively disruptive media bias types</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </RefinedMagneticEffect>
            </div>
          </div>
          
          <div className="bg-muted/20 p-6 rounded-lg my-8">
            <p className="italic text-muted-foreground text-center">
              [Text: Insert visualization of Ana's system architecture or high-level user flow]
            </p>
          </div>
        </div>
      </StorySection>

      {/* Methods Section */}
      <StorySection
        id="methods"
        chapter="02. METHODS"
        storyTitle="Research & Development Process"
        narrativeHook="A multi-faceted approach combining user research, AI development, and design thinking."
        className="bg-gradient-to-br from-background to-secondary/5"
      >
        <div className="space-y-8">
          <p className="lead text-xl">
            Our research methodology combined qualitative and quantitative approaches to understand news consumption patterns, media bias perceptions, and user needs. This multidisciplinary approach informed both the AI development and user experience design.
          </p>
          
          <div className="my-8">
            <h3 className="text-2xl font-bold mb-6">Literature Review</h3>
            <p>
              We conducted a comprehensive review of academic research on media bias, cognitive biases in news consumption, and user trust in AI systems. Key findings included:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Confirmation bias strongly influences news selection and retention</li>
              <li>Algorithmic filtering creates "filter bubbles" that reinforce existing beliefs</li>
              <li>Explainability is critical for establishing trust in AI recommendations</li>
              <li>Media literacy education significantly improves critical consumption</li>
            </ul>
            <div className="bg-muted/20 p-6 rounded-lg my-4">
              <p className="italic text-muted-foreground text-center">
                [Text: Insert literature review summary visualization or key papers cited]
              </p>
            </div>
          </div>
          
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">Competitive Analysis</h3>
            <p className="mb-6">
              We analyzed existing media bias detection platforms to identify strengths, weaknesses, and opportunities for innovation:
            </p>
            
            <Card className="bg-muted/20">
              <CardContent className="p-4 md:p-6">
                <div className="space-y-4">
                  {[
                    { name: "Ground News", description: "Strengths in showing multiple sources across the political spectrum.", insight: "Users value side-by-side comparisons.", color: "text-blue-500" },
                    { name: "AllSides", description: "Clear bias labeling system with community input.", insight: "Transparency in methodology builds trust.", color: "text-green-500" },
                    { name: "TIMINO", description: "Algorithmic analysis of linguistic patterns.", insight: "Technical depth needs clear explanation.", color: "text-purple-500" }
                  ].map((item, index) => (
                    <div key={item.name}>
                      {index > 0 && <div className="border-t border-border/50 my-4"></div>}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2">
                        <h4 className="font-bold text-md md:text-lg">{item.name}</h4>
                        <p className="text-sm text-muted-foreground md:col-span-1">{item.description}</p>
                        <p className={`text-sm font-medium ${item.color} md:text-right`}>
                          {item.insight}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <p className="mt-6">
              Our analysis revealed an opportunity for a system that combines algorithmic bias detection with educational content and user-controlled exploration—features not comprehensively integrated in any existing platform.
            </p>
          </div>
          
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">User Research</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-background to-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-medium">Surveys (n=120)</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                    <li>News consumption habits and frequency</li>
                    <li>Self-reported media literacy skills</li>
                    <li>Trust in mainstream vs. alternative sources</li>
                    <li>Attitudes toward AI-powered news tools</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-background to-secondary/5 border-secondary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-secondary-foreground/80" />
                    </div>
                    <h4 className="text-lg font-medium">Interviews (n=24)</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                    <li>In-depth exploration of news selection process</li>
                    <li>Cognitive walkthroughs of bias identification</li>
                    <li>Reactions to existing bias detection tools</li>
                    <li>Educational needs and preferences</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-muted/20 p-6 rounded-lg my-8">
              <p className="italic text-muted-foreground text-center">
                [Text: Insert user research findings visualization or participant quotes]
              </p>
            </div>
            
            <UserQuote
              quote="I've completely lost trust in mainstream news, but I also don't know how to find reliable alternatives. I end up just feeling overwhelmed and tuning out."
              author="Research Participant"
              role="24, Graduate Student"
            />
          </div>
          
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">AI Development Process</h3>
            <p className="mb-6">
              We developed and refined AI prompts specifically designed to detect various forms of media bias:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gradient-to-br from-background to-primary/5 p-6 rounded-lg border border-primary/20">
                <h4 className="text-lg font-medium mb-3">Bias Categories Analyzed</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Source selection bias</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Story selection bias</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Coverage bias (space/time)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Language bias (framing/terminology)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-background to-secondary/5 p-6 rounded-lg border border-secondary/20">
                <h4 className="text-lg font-medium mb-3">AI Development Iterations</h4>
                <ol className="space-y-2 list-decimal pl-5">
                  <li>Initial prompt development and testing</li>
                  <li>Expert validation with journalism professors</li>
                  <li>Refinement based on diverse news samples</li>
                  <li>User testing of AI explanations and recommendations</li>
                  <li>Final calibration and threshold adjustment</li>
                </ol>
              </div>
            </div>
            
            <div className="bg-muted/20 p-6 rounded-lg my-8">
              <p className="italic text-muted-foreground text-center">
                [Text: Insert AI prompt examples or bias detection visualization]
              </p>
            </div>
          </div>
          
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">User Experience Design</h3>
            <p className="mb-6">
              Our design process focused on creating an intuitive, educational interface that empowers users:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-blue-500" />
                  </div>
                  <h4 className="font-medium">Ideation</h4>
                  <p className="text-sm text-muted-foreground">
                    Design workshops and concept mapping to explore various approaches to visualizing bias
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Palette className="w-6 h-6 text-green-500" />
                  </div>
                  <h4 className="font-medium">Prototyping</h4>
                  <p className="text-sm text-muted-foreground">
                    Low and high-fidelity prototypes focusing on the bias detection interface and educational modules
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-purple-500" />
                  </div>
                  <h4 className="font-medium">User Testing</h4>
                  <p className="text-sm text-muted-foreground">
                    Iterative testing with 18 participants across three rounds of design refinement
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-muted/20 p-6 rounded-lg my-8">
              <p className="italic text-muted-foreground text-center">
                [Text: Insert UI design evolution or key screens from Ana's interface]
              </p>
            </div>
          </div>
        </div>
      </StorySection>

      {/* Results Section */}
      <StorySection
        id="results"
        chapter="03. RESULTS"
        storyTitle="Ana's Key Features & Impact"
        narrativeHook="A comprehensive system designed to make bias detection transparent, educational, and empowering."
        className="bg-gradient-to-br from-secondary/5 to-background"
      >
        <div className="space-y-8">
          <p className="lead text-xl">
            Our research and development process resulted in Ana, a comprehensive platform that offers users both immediate bias insights and long-term media literacy development.
          </p>
          
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">Core Features</h3>
            
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <InsightCard
                type="discovery"
                title="Transparent Bias Analysis"
                story="Ana provides detailed breakdowns of how bias was detected, including specific linguistic patterns, source analysis, and comparison to similar coverage across the political spectrum."
                icon={<Eye className="w-6 h-6" />}
              />
              
              <InsightCard
                type="solution"
                title="Interactive Bias Slider"
                story="Users can dynamically explore how the same story might be covered across different perspectives, with AI-generated variations highlighting key differences."
                icon={<Zap className="w-6 h-6" />}
              />
              
              <InsightCard
                type="discovery"
                title="Media Literacy Modules"
                story="Embedded educational content that teaches users how to identify common bias patterns, manipulative techniques, and credibility indicators."
                icon={<BookOpen className="w-6 h-6" />}
              />
              
              <InsightCard
                type="solution"
                title="Personalized News Diet"
                story="Analytics and recommendations to help users balance their news consumption across perspectives while maintaining information quality."
                icon={<Users className="w-6 h-6" />}
              />
            </div>
            
            <div className="bg-muted/20 p-6 rounded-lg my-8">
              <p className="italic text-muted-foreground text-center">
                [Text: Insert UI screenshots of key features in action]
              </p>
            </div>
          </div>
          
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">User Impact</h3>
            <p>
              Our evaluation with 48 beta testers over a 4-week period revealed significant improvements in several key metrics:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8">
              <div className="text-center p-6 bg-gradient-to-br from-background to-blue-500/5 rounded-lg border border-blue-500/20">
                <h4 className="text-4xl font-bold text-blue-500">27%</h4>
                <p className="text-sm text-muted-foreground mt-2">Improvement in media literacy scores</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-background to-green-500/5 rounded-lg border border-green-500/20">
                <h4 className="text-4xl font-bold text-green-500">42%</h4>
                <p className="text-sm text-muted-foreground mt-2">Increased engagement with diverse sources</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-background to-purple-500/5 rounded-lg border border-purple-500/20">
                <h4 className="text-4xl font-bold text-purple-500">4.3</h4>
                <p className="text-sm text-muted-foreground mt-2">User trust score (out of 5)</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-background to-orange-500/5 rounded-lg border border-orange-500/20">
                <h4 className="text-4xl font-bold text-orange-500">86%</h4>
                <p className="text-sm text-muted-foreground mt-2">Would recommend to friends</p>
              </div>
            </div>
            
            <UserQuote
              quote="I've always thought I was pretty good at spotting bias, but Ana showed me subtle patterns I never noticed before. Now I read the news completely differently."
              author="Beta Tester"
              role="25, Marketing Professional"
            />
            
            <div className="bg-muted/20 p-6 rounded-lg my-8">
              <p className="italic text-muted-foreground text-center">
                [Text: Insert user impact data visualization or user journey]
              </p>
            </div>
          </div>
        </div>
      </StorySection>

      {/* Discussion Section */}
      <StorySection
        id="discussion"
        chapter="04. DISCUSSION"
        storyTitle="Challenges & Design Considerations"
        narrativeHook="Balancing algorithmic analysis with human judgment in a politically charged landscape."
        className="bg-gradient-to-br from-background to-primary/5"
      >
        <div className="space-y-8">
          <p className="lead text-xl">
            Developing Ana required navigating complex technical, ethical, and design challenges at the intersection of AI, media literacy, and user experience.
          </p>
          
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">Technical Challenges</h3>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 my-8">
              <div className="bg-gradient-to-br from-background to-orange-500/5 border border-orange-500/20 rounded-lg p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/10 p-2 rounded-full mt-1">
                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-orange-500">AI Limitations</h4>
                    <p className="text-muted-foreground text-sm">
                      Even advanced AI struggles with subtle contextual bias and can miss culturally-specific forms of media manipulation.
                    </p>
                  </div>
                </div>
                <div className="border-t border-border/50"></div>
                <div className="flex items-start gap-4 pt-2">
                  <div className="bg-green-500/10 p-2 rounded-full mt-1">
                    <Shield className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h5 className="font-medium">Our Approach</h5>
                    <p className="text-sm text-muted-foreground">
                      Combining AI analysis with user-reporting systems and periodic expert review to catch edge cases and improve the system over time.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-background to-red-500/5 border border-red-500/20 rounded-lg p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-red-500/10 p-2 rounded-full mt-1">
                    <Zap className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-red-500">Scale & Performance</h4>
                    <p className="text-muted-foreground text-sm">
                      Deep analysis of news articles requires significant computational resources, creating latency challenges for real-time use.
                    </p>
                  </div>
                </div>
                <div className="border-t border-border/50"></div>
                <div className="flex items-start gap-4 pt-2">
                  <div className="bg-green-500/10 p-2 rounded-full mt-1">
                    <Shield className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h5 className="font-medium">Our Approach</h5>
                    <p className="text-sm text-muted-foreground">
                      Implementing a tiered analysis system with quick initial assessments followed by more in-depth analysis delivered progressively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">Ethical Considerations</h3>
            
            <div className="bg-gradient-to-br from-background to-secondary/5 p-8 rounded-lg border border-secondary/20 my-8">
              <h4 className="text-xl font-medium mb-4">Key Ethical Questions We Addressed</h4>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                <div>
                  <h5 className="font-medium mb-2 flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary-foreground/80 mr-2" />
                    Avoiding Our Own Bias
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    How do we ensure our own perspectives don't influence the AI's training and bias detection?
                  </p>
                </div>
                <div>
                  <h5 className="font-medium mb-2 flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary-foreground/80 mr-2" />
                    Transparency vs. Information Overload
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    How much methodology should we reveal without overwhelming users?
                  </p>
                </div>
                <div>
                  <h5 className="font-medium mb-2 flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary-foreground/80 mr-2" />
                    User Agency
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    How do we avoid being prescriptive while still providing clear guidance?
                  </p>
                </div>
                <div>
                  <h5 className="font-medium mb-2 flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary-foreground/80 mr-2" />
                    Access to Diverse Perspectives
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    How do we ensure representation across the ideological spectrum?
                  </p>
                </div>
              </div>
            </div>
            
            <UserQuote
              quote="The most challenging part was making sure we weren't just creating another algorithm that reinforces our own biases. We needed multiple layers of validation and diverse perspectives on the team."
              author="Project Lead"
              role="Research & Design"
            />
          </div>
          
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">User Experience Insights</h3>
            <p className="mb-6">
              Our iterative design process revealed several key insights about how users interact with bias detection systems:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <InsightCard
                type="challenge"
                title="Bias Label Resistance"
                story="Users resist simple left/right labels as oversimplifications of complex media landscapes."
              />
              
              <InsightCard
                type="challenge"
                title="Trust Building Process"
                story="Users need to see consistent, accurate results before trusting algorithmic bias detection."
              />
              
              <InsightCard
                type="challenge"
                title="Educational Appetite"
                story="Users have varying levels of interest in media literacy content; flexible engagement is crucial."
              />
            </div>
            
            <div className="bg-muted/20 p-6 rounded-lg my-8">
              <p className="italic text-muted-foreground text-center">
                [Text: Insert user testing observations or design iteration examples]
              </p>
            </div>
          </div>
        </div>
      </StorySection>

      {/* Conclusion Section */}
      <StorySection
        id="conclusion"
        chapter="05. CONCLUSION"
        storyTitle="Impact & Future Directions"
        narrativeHook="Building media literacy for the algorithmic age through transparent AI and user empowerment."
        className="bg-gradient-to-br from-primary/5 to-secondary/5"
      >
        <div className="space-y-8">
          <p className="lead text-xl">
            Ana represents a new approach to media bias detection that emphasizes user education, transparent AI, and balanced perspectives. While just a beginning, it points toward a future where technology helps bridge divides rather than deepen them.
          </p>
          
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">Project Outcomes</h3>
            
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h4 className="font-medium">Immediate Impact</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>Functional prototype demonstrating core features</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>Validated AI prompts for bias detection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>Educational module framework</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>User research insights document</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h4 className="font-medium">Long-term Potential</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-secondary-foreground/80 mr-2 mt-1 flex-shrink-0" />
                      <span>Enhanced media literacy among Gen Z users</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-secondary-foreground/80 mr-2 mt-1 flex-shrink-0" />
                      <span>More balanced news consumption patterns</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-secondary-foreground/80 mr-2 mt-1 flex-shrink-0" />
                      <span>Increased critical thinking about media sources</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-secondary-foreground/80 mr-2 mt-1 flex-shrink-0" />
                      <span>Bridge-building across information bubbles</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">Future Directions</h3>
            <p className="mb-6">
              While Ana provides a strong foundation, we identified several areas for future development:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <RefinedMagneticEffect intensity={0.05}>
                <Card className="h-full bg-gradient-to-br from-background to-blue-500/5 border-blue-500/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                      <Brain className="w-6 h-6 text-blue-500" />
                    </div>
                    <h4 className="text-lg font-medium mb-2">Advanced AI Capabilities</h4>
                    <p className="text-sm text-muted-foreground">
                      Expanding AI analysis to include visual content, developing more nuanced bias categories beyond left/right paradigms
                    </p>
                  </CardContent>
                </Card>
              </RefinedMagneticEffect>
              
              <RefinedMagneticEffect intensity={0.05}>
                <Card className="h-full bg-gradient-to-br from-background to-green-500/5 border-green-500/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-green-500" />
                    </div>
                    <h4 className="text-lg font-medium mb-2">Personalization System</h4>
                    <p className="text-sm text-muted-foreground">
                      Developing adaptive learning paths that respond to individual user needs, interests, and media literacy levels
                    </p>
                  </CardContent>
                </Card>
              </RefinedMagneticEffect>
              
              <RefinedMagneticEffect intensity={0.05}>
                <Card className="h-full bg-gradient-to-br from-background to-purple-500/5 border-purple-500/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                      <Smartphone className="w-6 h-6 text-purple-500" />
                    </div>
                    <h4 className="text-lg font-medium mb-2">Browser Integration</h4>
                    <p className="text-sm text-muted-foreground">
                      Creating browser extensions that provide real-time bias analysis during normal web browsing
                    </p>
                  </CardContent>
                </Card>
              </RefinedMagneticEffect>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-background to-primary/10 p-8 rounded-lg border border-primary/20 my-8">
            <h3 className="text-2xl font-bold mb-4">Final Reflection</h3>
            <p className="italic">
              "Ana is more than just a tool for detecting bias—it's an educational platform that helps users develop a critical lens for all media consumption. In today's fragmented information landscape, we need technologies that don't just tell us what to think, but help us think better for ourselves."
            </p>
            <p className="mt-4 text-right text-muted-foreground">— The Fantastic Four Team</p>
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


      <Footer />
    </ProjectPageWrapper>
  )
}
