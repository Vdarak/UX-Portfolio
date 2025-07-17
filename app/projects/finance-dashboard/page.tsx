import Link from "next/link"
import { ArrowLeft, ArrowRight, Construction, Calendar, Clock, Hammer, CreditCard, TrendingUp } from "lucide-react"
import { FadeIn } from "@/components/scroll-animations"
import { RefinedButton } from "@/components/refined-button"
import { FlowingText } from "@/components/flowing-text"
import Footer from "@/components/footer"
import { FinanceDashboard as FinanceDashboardUI } from "@/components/finance-dashboard"
import { ConstructionDashboard } from "@/components/construction-dashboard"
import { AmpilloDashboard } from "@/components/ampillo-dashboard"
import { PricingPage } from "@/components/pricing-page"
import { MetricHubHero } from "@/components/metrichub-hero"
import { MetriconDashboard } from "@/components/metricon-dashboard"
import { PanzeDashboard } from "@/components/panze-dashboard"
import { FullscreenWrapper } from "@/components/fullscreen-wrapper"

export default function FinanceDashboard() {
  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-24 pb-16">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="w-24 h-24 bg-orange-100 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center mx-auto">
                <Construction className="w-12 h-12 text-orange-600" />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold">
                  Finance Dashboard
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                  A comprehensive financial management platform designed to simplify personal and business finance tracking.
                </p>
              </div>
              
              {/* Finance Dashboard UI Component */}
              <div className="mt-12 mb-12">
                <FullscreenWrapper>
                  <FinanceDashboardUI className="max-w-4xl mx-auto shadow-xl" />
                </FullscreenWrapper>
              </div>
              
              {/* Section Divider */}
              <div className="flex items-center gap-4 my-16">
                <div className="h-px bg-muted-foreground/20 flex-grow"></div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Construction className="w-5 h-5" />
                  <span className="text-xl font-medium">Ampillo Dashboard</span>
                </div>
                <div className="h-px bg-muted-foreground/20 flex-grow"></div>
              </div>
              
              {/* Ampillo Dashboard UI Component */}
              <div className="mt-8 mb-16">
                <FullscreenWrapper>
                  <AmpilloDashboard className="max-w-6xl mx-auto shadow-xl" />
                </FullscreenWrapper>
              </div>
              
              {/* Section Divider */}
              <div className="flex items-center gap-4 my-16">
                <div className="h-px bg-muted-foreground/20 flex-grow"></div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CreditCard className="w-5 h-5" />
                  <span className="text-xl font-medium">Pricing Page Design</span>
                </div>
                <div className="h-px bg-muted-foreground/20 flex-grow"></div>
              </div>
              
              {/* Pricing Page Component */}
              <div className="mt-8 mb-16">
                <FullscreenWrapper>
                  <PricingPage className="max-w-7xl mx-auto shadow-xl rounded-lg overflow-hidden" />
                </FullscreenWrapper>
              </div>
              
              {/* Section Divider */}
              <div className="flex items-center gap-4 my-16">
                <div className="h-px bg-muted-foreground/20 flex-grow"></div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-xl font-medium">MetricHub Hero Section</span>
                </div>
                <div className="h-px bg-muted-foreground/20 flex-grow"></div>
              </div>
              
              {/* MetricHub Hero Component */}
              <div className="mt-8 mb-16">
                <FullscreenWrapper>
                  <MetricHubHero className="max-w-7xl mx-auto shadow-xl rounded-lg overflow-hidden" />
                </FullscreenWrapper>
              </div>
              
              {/* Section Divider */}
              <div className="flex items-center gap-4 my-16">
                <div className="h-px bg-muted-foreground/20 flex-grow"></div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-xl font-medium">Metricon Analytics Dashboard</span>
                </div>
                <div className="h-px bg-muted-foreground/20 flex-grow"></div>
              </div>
              
              {/* Metricon Dashboard Component */}
              <div className="mt-8 mb-16">
                <FullscreenWrapper>
                  <MetriconDashboard className="max-w-7xl mx-auto shadow-xl rounded-lg overflow-hidden" />
                </FullscreenWrapper>
              </div>
              
              {/* Section Divider */}
              <div className="flex items-center gap-4 my-16">
                <div className="h-px bg-muted-foreground/20 flex-grow"></div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CreditCard className="w-5 h-5" />
                  <span className="text-xl font-medium">Panze Admin Dashboard</span>
                </div>
                <div className="h-px bg-muted-foreground/20 flex-grow"></div>
              </div>
              
              {/* Panze Dashboard Component */}
              <div className="mt-8 mb-16">
                <FullscreenWrapper>
                  <PanzeDashboard className="max-w-7xl mx-auto shadow-xl rounded-lg overflow-hidden" />
                </FullscreenWrapper>
              </div>
              
              {/* Section Divider */}
              <div className="flex items-center gap-4 my-16">
                <div className="h-px bg-muted-foreground/20 flex-grow"></div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Hammer className="w-5 h-5" />
                  <span className="text-xl font-medium">Construction Project Dashboard</span>
                </div>
                <div className="h-px bg-muted-foreground/20 flex-grow"></div>
              </div>
              
              {/* Construction Dashboard UI Component */}
              <div className="mt-8 mb-16">
                <FullscreenWrapper>
                  <ConstructionDashboard className="max-w-4xl mx-auto shadow-xl" />
                </FullscreenWrapper>
              </div>

              <div className="bg-muted/30 rounded-xl p-8 space-y-4">
                <div className="flex items-center justify-center gap-3 text-orange-600">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">Under Construction</span>
                </div>
                <p className="text-muted-foreground">
                  This case study is currently being crafted with the same attention to detail as my other projects. 
                  Check back soon to see the complete design process, user research insights, and final solutions.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Expected completion: August 2025</span>
                </div>
              </div>

              <div className="space-y-6">
                <Link href="/knowledge-graph" className="group">
                  <h2 className="text-2xl font-bold inline-flex items-center gap-2">
                    What to expect:
                    <span className="text-primary text-sm font-normal opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      View knowledge graph
                    </span>
                  </h2>
                </Link>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-background rounded-lg p-6 border">
                    <h3 className="font-semibold mb-2">User Research</h3>
                    <p className="text-sm text-muted-foreground">
                      Deep dive into financial management pain points and user behaviors
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-6 border">
                    <h3 className="font-semibold mb-2">Design Process</h3>
                    <p className="text-sm text-muted-foreground">
                      Iterative design approach with extensive user testing and validation
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-6 border">
                    <h3 className="font-semibold mb-2">Final Solution</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive dashboard with intuitive financial insights and tools
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Explore More Section */}
        <section className="content-section py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <FadeIn>
              <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Like my work? <FlowingText text={"Explore"} className="inline" /> more!
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
      <Footer />
    </>
  );
}
