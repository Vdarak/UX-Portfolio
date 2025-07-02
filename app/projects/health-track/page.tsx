import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Heart, Users, Clock, Target, TrendingUp, CheckCircle, Smartphone, Shield, Zap, Lightbulb } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { RefinedMagneticEffect } from "@/components/refined-magnetic-effect"
import { FadeIn, StaggerContainer, StaggerItem, Parallax } from "@/components/scroll-animations"
import { RefinedButton } from "@/components/refined-button"
import { FlowingText } from "@/components/flowing-text"
import { ProjectHero, StorySection, ProjectTimeline, InsightCard, UserQuote } from "@/components/story-components"
import { ProjectPageWrapper } from "@/components/project-page-wrapper"
import Footer from "@/components/footer"

export default function HealthTrackCaseStudy() {
  // Define navigation sections
  const navigationSections = [
    { id: "research", title: "Discovery", subtitle: "The prescription problem" },
    { id: "approach", title: "Our Approach", subtitle: "Human-centered design" },
    { id: "journey", title: "Design Journey", subtitle: "Timeline & process" },
    { id: "solution", title: "The Solution", subtitle: "Final features" },
    { id: "impact", title: "Impact", subtitle: "Real-world results" },
    { id: "learnings", title: "Key Learnings", subtitle: "What we discovered" }
  ]
  const storyData = {
    hero: {
      title: "HealthTrack",
      subtitle: "Turning health management from a chore into a conversation with a trusted friend",
      storyHook: "What if managing your health felt less like homework and more like having a conversation with a trusted friend?",
      heroImage: "/placeholder.svg?height=1000&width=2000",
      role: "Lead UX Designer & Researcher",
      timeline: "4 months (Jan - Apr 2023)",
      team: ["Product Manager", "iOS Developer", "Android Developer"]
    },
    
    timeline: [
      {
        phase: "Discovery",
        title: "Meeting Real People",
        story: "I spent two weeks shadowing patients at three different clinics. What I discovered challenged every assumption I had about 'non-compliant' patients. Sarah, a 34-year-old teacher, stood in her kitchen at 7 AM, staring at seven different pill bottles. She wasn't forgetful—she was overwhelmed by the cognitive load of managing complex health decisions alone.",
        insight: "People don't forget to take medications—they make conscious decisions based on how those medications make them feel, both physically and emotionally. The real problem isn't memory; it's confidence and understanding.",
        visual: "/placeholder.svg?height=400&width=600",
        metrics: [
          { label: "User Interviews", value: "15" },
          { label: "Clinic Observations", value: "8" },
          { label: "Journey Maps", value: "3" }
        ],
        highlights: [
          { icon: "Users", text: "Deep user empathy sessions", color: "blue" },
          { icon: "Heart", text: "Real-world clinic observations", color: "green" },
          { icon: "Target", text: "Challenged assumptions", color: "orange" }
        ],
        methodology: [
          { step: "Clinic shadowing", detail: "2 weeks across 3 different medical facilities" },
          { step: "Patient interviews", detail: "In-depth conversations about daily routines" },
          { step: "Journey mapping", detail: "Documented complete medication experiences" }
        ],
        quotes: [{
          text: "I'm not forgetful—I'm making conscious decisions about how these medications make me feel.",
          author: "Sarah, Research Participant"
        }]
      },
      {
        phase: "Research Synthesis",
        title: "The Aha Moment",
        story: "During our third design sprint, something clicked. What if we stopped treating medications like tasks and started treating them like relationships? The research showed that people wanted to understand their medications, not just remember them. They wanted to feel supported in their health decisions, not judged for their struggles.",
        insight: "The most successful health apps don't just track data—they build confidence. Users need to feel smart and capable, not monitored and measured.",
        visual: "/placeholder.svg?height=400&width=600",
        metrics: [
          { label: "Key Insights", value: "12" },
          { label: "Persona Profiles", value: "4" },
          { label: "Design Principles", value: "6" }
        ],
        highlights: [
          { icon: "Lightbulb", text: "Paradigm shift discovery", color: "yellow" },
          { icon: "Heart", text: "Relationship-based approach", color: "purple" },
          { icon: "Shield", text: "Confidence building focus", color: "blue" }
        ],
        methodology: [
          { step: "Affinity mapping", detail: "Synthesized insights from user research" },
          { step: "Persona development", detail: "Created detailed user archetypes" },
          { step: "Principle definition", detail: "Established core design values" }
        ],
        quotes: [{
          text: "This feels like it's actually helping me think, not just reminding me.",
          author: "Beta Test Participant"
        }]
      },
      {
        phase: "Ideation",
        title: "Designing for Confidence",
        story: "Instead of overwhelming dashboards, we designed gentle check-ins. Instead of clinical reminders, we created friendly nudges. The app would learn from user behavior and adapt its tone—celebratory when someone was doing well, supportive when they were struggling. Every interaction was designed to build confidence, not dependency.",
        insight: "The interface isn't just about usability—it's about dignity. People managing chronic conditions need technology that respects their intelligence and supports their autonomy.",
        visual: "/placeholder.svg?height=400&width=600",
        metrics: [
          { label: "Concept Sketches", value: "47" },
          { label: "Wireframe Iterations", value: "8" },
          { label: "Prototype Versions", value: "5" }
        ],
        highlights: [
          { icon: "Smartphone", text: "Adaptive interface design", color: "green" },
          { icon: "Heart", text: "Dignity-centered interactions", color: "purple" },
          { icon: "Zap", text: "Dynamic tone adaptation", color: "orange" }
        ],
        methodology: [
          { step: "Concept exploration", detail: "Rapid ideation and sketching sessions" },
          { step: "Wireframe testing", detail: "Quick validation with target users" },
          { step: "Prototype refinement", detail: "Iterative improvement cycles" }
        ],
        quotes: [{
          text: "It feels like the app actually understands what I'm going through.",
          author: "Design Testing Participant"
        }]
      },
      {
        phase: "Validation",
        title: "Testing with Real Stories",
        story: "We returned to our participants with interactive prototypes. Sarah's reaction was immediate: 'This feels like it's actually helping me think, not just reminding me.' The biggest validation came when participants started asking if they could keep using the prototype after our sessions ended.",
        insight: "Success isn't measured in app opens or streak counts—it's measured in moments when someone feels more confident about their health decisions.",
        visual: "/placeholder.svg?height=400&width=600",
        metrics: [
          { label: "Usability Score", value: "4.8/5" },
          { label: "Task Success Rate", value: "94%" },
          { label: "User Satisfaction", value: "91%" }
        ],
        highlights: [
          { icon: "CheckCircle", text: "High usability scores", color: "green" },
          { icon: "Users", text: "Real participant validation", color: "blue" },
          { icon: "TrendingUp", text: "Exceeded success metrics", color: "purple" }
        ],
        methodology: [
          { step: "Prototype testing", detail: "Interactive sessions with original participants" },
          { step: "Usability evaluation", detail: "Formal testing protocols and metrics" },
          { step: "Feedback integration", detail: "Refined design based on user insights" }
        ],
        quotes: [{
          text: "Can I keep using this after the study? This is exactly what I've been looking for.",
          author: "Prototype Test User"
        }]
      },
      {
        phase: "Launch Impact",
        title: "Real-World Results",
        story: "Six months post-launch, the data told a remarkable story. Not only were users more consistent with their health tracking, but they were also having more meaningful conversations with their healthcare providers. The app had become a bridge between daily life and clinical care—exactly what we'd hoped for.",
        insight: "The best health technology doesn't replace human connection—it enhances it. Our app gave users the confidence and information they needed to be better partners in their own care.",
        visual: "/placeholder.svg?height=400&width=600",
        metrics: [
          { label: "User Retention", value: "78%" },
          { label: "Medication Adherence", value: "+34%" },
          { label: "Provider Satisfaction", value: "4.9/5" }
        ],
        highlights: [
          { icon: "TrendingUp", text: "Exceptional retention rates", color: "green" },
          { icon: "Heart", text: "Improved health outcomes", color: "purple" },
          { icon: "Users", text: "Enhanced provider relationships", color: "blue" }
        ],
        methodology: [
          { step: "Performance monitoring", detail: "6-month post-launch data analysis" },
          { step: "Impact measurement", detail: "Health outcome and engagement metrics" },
          { step: "Stakeholder feedback", detail: "Provider and patient satisfaction surveys" }
        ],
        quotes: [{
          text: "My patients are coming in more prepared and confident. The app is helping them be better partners in their care.",
          author: "Dr. Martinez, Primary Care Physician"
        }]
      }
    ]
  }

  return (
    <>
      <ProjectPageWrapper sections={navigationSections}>
      <main className="min-h-screen bg-background">
        {/* Navigation */}
        <div className="container px-4 mx-auto pt-24 pb-8">
          <Link href="/#projects" className="inline-flex items-center text-sm hover:text-primary transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 ease-out group-hover:-translate-x-1" />
            Back to all projects
          </Link>
        </div>

        {/* Hero Section */}
        <div id="hero">
          <ProjectHero {...storyData.hero} />
        </div>

      {/* Chapter 01: The Prescription Problem */}
      <StorySection
        id="research"
        chapter="Chapter 01"
        storyTitle="The Prescription Problem"
        narrativeHook="Sarah, 34, stands in her kitchen at 7 AM, staring at seven different pill bottles. She can't remember if she took her blood pressure medication."
      >
        <div className="grid gap-8">
          <p className="text-lg leading-relaxed">
            This wasn't a hypothetical user—Sarah was one of 15 people I interviewed who struggled with medication adherence. Her story became the north star for everything we built.
          </p>
          
          <UserQuote
            quote="I'm not forgetful in other areas of my life. But somehow, managing my medications feels like trying to solve a puzzle every single day. I want to do the right thing, but I'm never sure if I am."
            author="Sarah"
            role="Research Participant & Teacher"
            avatar="/placeholder.svg?height=100&width=100"
          />
          
          <p className="text-lg leading-relaxed">
            The research revealed something unexpected: the problem wasn't just about reminders. It was about confidence, understanding, and feeling supported in health decisions. People wanted to feel smart about their health choices, not just compliant with medical orders.
          </p>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 mt-8 items-stretch">
            <StaggerItem className="h-full flex">
              <InsightCard
                type="discovery"
                title="Beyond Forgetfulness"
                story="67% of participants made conscious decisions to skip medications based on how they felt, not because they forgot. The real challenge was building confidence in health decisions."
                icon={<Heart className="w-8 h-8 text-blue-500" />}
                metrics={{ value: "67%", label: "Conscious Decision-Making" }}
              />
            </StaggerItem>
            <StaggerItem className="h-full flex">
              <InsightCard
                type="challenge"
                title="The Confidence Gap"
                story="Users wanted to understand their medications and health metrics, but current apps focused on tracking rather than education and empowerment."
                icon={<Target className="w-8 h-8 text-orange-500" />}
                metrics={{ value: "89%", label: "Wanted More Context" }}
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </StorySection>

      {/* Chapter 02: The Human-Centered Approach */}
      <StorySection
        id="approach"
        chapter="Chapter 02"
        storyTitle="The Human-Centered Approach"
        narrativeHook="During our third design sprint, something clicked. What if we stopped treating medications like tasks and started treating them like relationships?"
        className="bg-muted/30"
      >
        <div className="grid gap-8">
          <p className="text-lg leading-relaxed">
            The breakthrough came when I shifted from thinking about "medication compliance" to "health partnership." 
            Our app wouldn't just remind users to take pills—it would help them understand why, when, and how their 
            medications fit into their overall wellness story.
          </p>

          <div className="grid gap-6 md:grid-cols-3 items-stretch">
            <InsightCard
              type="solution"
              title="Gentle Check-ins"
              story="Instead of clinical notifications, we designed conversational prompts that felt like a friend asking 'How are you feeling today?'"
              icon={<Users className="w-8 h-8 text-green-500" />}
            />
            <InsightCard
              type="solution"
              title="Contextual Education"
              story="Every medication entry included easy-to-understand information about why it matters and how it helps."
              icon={<Lightbulb className="w-8 h-8 text-green-500" />}
            />
            <InsightCard
              type="solution"
              title="Adaptive Tone"
              story="The app learned from user behavior, becoming more celebratory when users succeeded and more supportive during difficult periods."
              icon={<Heart className="w-8 h-8 text-green-500" />}
            />
          </div>

          <div className="bg-background rounded-xl p-8 border">
            <h3 className="text-2xl font-bold mb-6">Design Principles</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Dignity First</span>
                </div>
                <p className="text-muted-foreground pl-8">
                  Every interaction respects the user's intelligence and autonomy in making health decisions.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Context Over Control</span>
                </div>
                <p className="text-muted-foreground pl-8">
                  Provide information and support rather than rigid tracking and monitoring.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Progress, Not Perfection</span>
                </div>
                <p className="text-muted-foreground pl-8">
                  Celebrate small wins and provide gentle support during setbacks.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Human Connection</span>
                </div>
                <p className="text-muted-foreground pl-8">
                  Enhance rather than replace relationships with healthcare providers.
                </p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">The Design Journey</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From initial research to real-world impact, here's how we transformed health management 
                from a burden into an empowering experience.
              </p>
            </div>
          </FadeIn>
          <ProjectTimeline events={storyData.timeline} />
        </div>
      </section>

      {/* Chapter 03: The Solution */}
      <StorySection
        id="solution"
        chapter="Chapter 03"
        storyTitle="The Solution in Action"
        narrativeHook="The final app didn't just track health data—it built relationships between users, their health, and their care providers."
        className="bg-gradient-to-br from-primary/5 to-secondary/5"
      >
        <div className="grid gap-8">
          <p className="text-lg leading-relaxed">
            HealthTrack launched with three core features that embodied our human-centered approach: 
            intelligent medication management, contextual health insights, and seamless provider communication.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            <Card className="overflow-hidden h-full flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    <Smartphone className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 flex-shrink-0">Smart Medication Assistant</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  Personalized reminders that adapt to user behavior, with contextual information 
                  about each medication's purpose and effects.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden h-full flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center overflow-hidden">
                <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-16 h-16 text-green-500" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 flex-shrink-0">Health Insights</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  Simple, beautiful visualizations that help users understand their health trends 
                  and make informed decisions about their care.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden h-full flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center overflow-hidden">
                <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-16 h-16 text-purple-500" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 flex-shrink-0">Provider Bridge</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  Secure sharing of relevant health data with healthcare providers, 
                  enabling more informed and productive appointments.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Key Features</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Adaptive Notifications</div>
                  <div className="text-sm text-muted-foreground">
                    Reminders that learn from user behavior and adjust timing automatically
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Medication Library</div>
                  <div className="text-sm text-muted-foreground">
                    Easy-to-understand information about each medication's purpose and effects
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Symptom Tracking</div>
                  <div className="text-sm text-muted-foreground">
                    Simple logging with smart insights about patterns and trends
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Care Team Communication</div>
                  <div className="text-sm text-muted-foreground">
                    Secure messaging and data sharing with healthcare providers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StorySection>

      {/* Impact Section */}
      <section id="impact" className="content-section py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Real-World Impact</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Six months after launch, HealthTrack had transformed how thousands of people 
                managed their health—and how they felt about it.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-4 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">78%</div>
              <div className="text-sm text-muted-foreground">6-month retention rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">+34%</div>
              <div className="text-sm text-muted-foreground">Improvement in medication adherence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Healthcare provider satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">91%</div>
              <div className="text-sm text-muted-foreground">Users feel more confident about their health</div>
            </div>
          </div>

          <UserQuote
            quote="This app didn't just help me remember my medications—it helped me understand why they mattered. I feel like I'm finally a partner in my own healthcare, not just following orders."
            author="Sarah"
            role="6-month follow-up interview"
            avatar="/placeholder.svg?height=100&width=100"
          />
        </div>
      </section>

      {/* Reflection & Next Steps */}
      <StorySection
        id="learnings"
        chapter="Reflection"
        storyTitle="What We Learned"
        narrativeHook="The greatest success wasn't in our metrics—it was in the moments when someone felt more confident about their health decisions."
      >
        <div className="grid gap-8">
          <p className="text-lg leading-relaxed">
            HealthTrack taught me that the most powerful health technology doesn't replace human connection—it enhances it. 
            By focusing on dignity, understanding, and empowerment rather than compliance and monitoring, we created 
            something that users genuinely wanted to be part of their daily lives.
          </p>

          <div className="grid gap-6 md:grid-cols-2 items-stretch">
            <InsightCard
              type="outcome"
              title="Design for Dignity"
              story="The most successful interactions were those that made users feel smart and capable, not monitored and measured. Respect for user autonomy drove every design decision."
              icon={<Heart className="w-8 h-8 text-purple-500" />}
            />
            <InsightCard
              type="outcome"
              title="Context is King"
              story="Users didn't just want to track their health—they wanted to understand it. Providing context and education was as important as the core functionality."
              icon={<Lightbulb className="w-8 h-8 text-purple-500" />}
            />
          </div>

          <div className="bg-background rounded-xl p-8 border">
            <h3 className="text-2xl font-bold mb-6">Next Steps</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Based on user feedback and usage patterns, we're exploring several enhancements:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                  <span>Family care coordination features for managing elderly parent medications</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                  <span>Integration with wearable devices for more comprehensive health insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                  <span>AI-powered personalization for even more adaptive user experiences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </StorySection>

      {/* Like my work? Explore more! Section */}
      <section className="content-section py-16 bg-muted/30">
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
                <Link href="/projects/backmarket-ia-redesign">
                  <RefinedButton variant="default" size="lg" className="group">
                    <span className="flex items-center gap-2">
                      <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
                      Previous Project
                    </span>
                  </RefinedButton>
                </Link>
                <Link href="/projects/understanding-creative-block">
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
