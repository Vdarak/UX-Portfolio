import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Tag, Play, Github, Users } from "lucide-react"
import { notFound } from "next/navigation"

import { Badge } from "@/components/ui/badge"
import { RefinedButton } from "@/components/refined-button"
import { RefinedMagneticEffect } from "@/components/refined-magnetic-effect"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/scroll-animations"

interface Game {
  id: string
  title: string
  description: string
  fullDescription: string
  category: string
  technologies: string[]
  developmentDate: string
  playTime: string
  difficulty: "Easy" | "Medium" | "Hard"
  image: string
  screenshots: string[]
  demoUrl?: string
  githubUrl?: string
  status: "Live" | "In Development" | "Coming Soon"
  features: string[]
  challenges: string[]
  learnings: string[]
  playerCount?: string
}

const games: Game[] = [
  {
    id: "blackjack",
    title: "Blackjack 21",
    description: "A professional casino-style Blackjack game with advanced card counting system and basic strategy integration.",
    fullDescription:
      "This Blackjack game brings the authentic casino experience to the web with a focus on educational gameplay and realistic mechanics. The game features a sophisticated Hi-Lo card counting system, integrated basic strategy recommendations, and authentic casino rules. Designed for both casual players and serious students of the game, it includes comprehensive statistics tracking and detailed game analysis to help players improve their skills.",
    category: "Card Games",
    technologies: ["React", "TypeScript", "Framer Motion", "Context API", "Local Storage", "Canvas API"],
    developmentDate: "2025-05-15",
    playTime: "5-30 min",
    difficulty: "Medium",
    image: "/placeholder.svg?height=400&width=600",
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    demoUrl: "https://v0-blackjack-game-alpha.vercel.app/", // External demo for now
    githubUrl: "https://github.com/Vdarak/Blackjack-Game",
    status: "Live",
    playerCount: "1 Player",
    features: [
      "Hi-Lo card counting system with running and true count display",
      "Integrated basic strategy recommendations with color-coded suggestions",
      "Multi-deck shoe management (2, 4, 6, 8 deck configurations)",
      "Realistic card dealing animations with physics-based movement",
      "Comprehensive betting system with configurable limits",
      "Statistical analysis and detailed game history tracking",
      "Professional casino rules implementation with edge case handling",
      "Educational overlay explaining counting methodology and strategy",
      "Responsive design optimized for both desktop and mobile play",
      "Audio feedback and visual effects for enhanced immersion"
    ],
    challenges: [
      "Problems in implementing mathematically accurate card counting algorithms",
      "Creating smooth 60fps card animations without performance degradation",
      "Designing an intuitive interface that doesn't overwhelm casual players",
      "Balancing educational content with engaging gameplay mechanics",
      "Ensuring authentic casino rules while maintaining accessibility",
      "Optimizing complex state management for real-time game updates"
    ],
    learnings: [
      "Advanced React state management patterns for complex game logic",
      "Canvas API and animation optimization for smooth visual effects",
      "Game theory and probability calculations for authentic gameplay",
      "User experience design for educational gaming applications",
      "Performance optimization techniques for real-time applications",
      "Accessibility considerations for complex interactive interfaces"
    ],
  },
  {
    id: "memory-match",
    title: "Memory Match",
    description: "A brain-training memory game where players flip cards to find matching pairs.",
    fullDescription:
      "Memory Match is a cognitive training game designed to improve memory and concentration. With multiple difficulty levels and engaging animations, it provides both entertainment and mental exercise for players of all ages.",
    category: "Puzzle Games",
    technologies: ["React", "Framer Motion", "Local Storage", "CSS Grid", "TypeScript"],
    developmentDate: "2024-02-20",
    playTime: "3-10 min",
    difficulty: "Medium",
    image: "/placeholder.svg?height=400&width=600",
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    demoUrl: "https://memory-match-demo.vercel.app",
    githubUrl: "https://github.com/username/memory-match",
    status: "Live",
    playerCount: "1 Player",
    features: [
      "Multiple difficulty levels (4x4, 6x6, 8x8 grids)",
      "Timer and move counter",
      "High score tracking",
      "Smooth card flip animations",
      "Colorful and engaging card designs",
      "Progressive difficulty system",
    ],
    challenges: [
      "Optimizing animation performance for large grids",
      "Creating balanced difficulty progression",
      "Implementing efficient card matching logic",
      "Designing accessible color schemes",
    ],
    learnings: [
      "Framer Motion for complex animations",
      "Performance optimization for React components",
      "Accessibility considerations for color-based games",
      "Local storage for persistent game data",
    ],
  },
  // Add more games here...
]

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function GamePage({ params }: PageProps) {
  // Await params for dynamic slug
  const { slug } = await params

  const game = games.find((g) => g.id === slug)

  if (!game) {
    notFound()
  }

  const currentIndex = games.findIndex((g) => g.id === slug)
  const previousGame = currentIndex > 0 ? games[currentIndex - 1] : null
  const nextGame = currentIndex < games.length - 1 ? games[currentIndex + 1] : null

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "In Development":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Coming Soon":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Hard":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <main className="min-h-screen bg-background pt-16">
      <article className="py-16">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Navigation */}
            <FadeIn>
              <RefinedMagneticEffect intensity={0.15} range={60}>
                <Link
                  href="/games"
                  className="interactive inline-flex items-center mb-8 text-sm hover:text-foreground/80 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to games
                </Link>
              </RefinedMagneticEffect>
            </FadeIn>

            {/* Game Header */}
            <FadeIn delay={0.2}>
              <header className="mb-12 space-y-6">
                <div className="flex flex-wrap items-center gap-4">
                  <Badge variant="secondary" className="text-sm">
                    <Tag className="w-4 h-4 mr-2" />
                    {game.category}
                  </Badge>
                  <Badge className={`text-sm ${getStatusColor(game.status)}`}>{game.status}</Badge>
                  <Badge className={`text-sm ${getDifficultyColor(game.difficulty)}`}>{game.difficulty}</Badge>
                  {game.playerCount && (
                    <Badge variant="outline" className="text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      {game.playerCount}
                    </Badge>
                  )}
                </div>

                <h1 className="text-4xl font-medium tracking-tight md:text-5xl">{game.title}</h1>

                <p className="text-xl text-muted-foreground">{game.description}</p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {game.status === "Live" && game.demoUrl && (
                    <RefinedButton size="lg" intensity={0.2}>
                      {game.demoUrl.startsWith('http') ? (
                        <a href={game.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <Play className="w-4 h-4 mr-2" />
                          Play Game
                        </a>
                      ) : (
                        <Link href={game.demoUrl} className="flex items-center">
                          <Play className="w-4 h-4 mr-2" />
                          Play Game
                        </Link>
                      )}
                    </RefinedButton>
                  )}
                  {game.githubUrl && (
                    <RefinedButton variant="outline" size="lg" intensity={0.2}>
                      <a href={game.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </RefinedButton>
                  )}
                </div>

                {/* Game Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-secondary rounded-lg">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Developed</p>
                    <p className="font-medium">
                      {new Date(game.developmentDate).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Play Time</p>
                    <p className="font-medium">{game.playTime}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Difficulty</p>
                    <p className="font-medium">{game.difficulty}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Status</p>
                    <p className="font-medium">{game.status}</p>
                  </div>
                </div>
              </header>
            </FadeIn>

            {/* Main Game Image */}
            <FadeIn delay={0.4}>
              <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-12">
                <Image
                  src={game.image || "/placeholder.svg"}
                  alt={`${game.title} game screenshot`}
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>

            {/* Game Description */}
            <FadeIn delay={0.6}>
              <section className="mb-12">
                <h2 className="text-2xl font-medium mb-4">About the Game</h2>
                <p className="text-muted-foreground leading-relaxed">{game.fullDescription}</p>
              </section>
            </FadeIn>

            {/* Screenshots */}
            {game.screenshots && game.screenshots.length > 0 && (
              <FadeIn delay={0.8}>
                <section className="mb-12">
                  <h2 className="text-2xl font-medium mb-6">Screenshots</h2>
                  <div className="grid gap-4 md:grid-cols-3">
                    {game.screenshots.map((screenshot, index) => (
                      <RefinedMagneticEffect key={index} intensity={0.08} range={100}>
                        <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                          <Image
                            src={screenshot || "/placeholder.svg"}
                            alt={`${game.title} screenshot ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      </RefinedMagneticEffect>
                    ))}
                  </div>
                </section>
              </FadeIn>
            )}

            {/* Features, Challenges, Learnings */}
            <StaggerContainer className="grid gap-8 md:grid-cols-3 mb-12" staggerDelay={0.1}>
              <StaggerItem>
                <section>
                  <h3 className="text-xl font-medium mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {game.features.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>
              </StaggerItem>

              <StaggerItem>
                <section>
                  <h3 className="text-xl font-medium mb-4">Challenges</h3>
                  <ul className="space-y-2">
                    {game.challenges.map((challenge, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </section>
              </StaggerItem>

              <StaggerItem>
                <section>
                  <h3 className="text-xl font-medium mb-4">Key Learnings</h3>
                  <ul className="space-y-2">
                    {game.learnings.map((learning, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        {learning}
                      </li>
                    ))}
                  </ul>
                </section>
              </StaggerItem>
            </StaggerContainer>

            {/* Technologies */}
            <FadeIn delay={1.2}>
              <section className="mb-12">
                <h3 className="text-xl font-medium mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {game.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </section>
            </FadeIn>

            {/* Navigation */}
            <FadeIn delay={1.4}>
              <div className="flex flex-col gap-8 pt-12 border-t">
                {/* Previous/Next Navigation */}
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
                  {previousGame ? (
                    <RefinedMagneticEffect intensity={0.15} range={80}>
                      <Link
                        href={`/games/${previousGame.id}`}
                        className="interactive group flex items-center gap-3 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                      >
                        <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">Previous</p>
                          <p className="font-medium">{previousGame.title}</p>
                        </div>
                      </Link>
                    </RefinedMagneticEffect>
                  ) : (
                    <div></div>
                  )}

                  {nextGame && (
                    <RefinedMagneticEffect intensity={0.15} range={80}>
                      <Link
                        href={`/games/${nextGame.id}`}
                        className="interactive group flex items-center gap-3 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors text-right sm:flex-row-reverse"
                      >
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">Next</p>
                          <p className="font-medium">{nextGame.title}</p>
                        </div>
                      </Link>
                    </RefinedMagneticEffect>
                  )}
                </div>

                {/* Call to Action */}
                <div className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    Enjoyed this game? Check out my other projects and creative work.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <RefinedButton intensity={0.2}>
                      <Link href="/games">More games</Link>
                    </RefinedButton>
                    <RefinedButton variant="outline" intensity={0.2}>
                      <Link href="/#projects">UX projects</Link>
                    </RefinedButton>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </article>
    </main>
  )
}

// This function generates the static paths at build time
export async function generateStaticParams() {
  // Hardcoding the game slugs that exist in your portfolio
  return [
    { slug: 'blackjack' },
    { slug: 'memory-match' }
  ];
}
