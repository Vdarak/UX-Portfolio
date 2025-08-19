"use client"

import { /*useState*/ } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Tag, ArrowRight, Gamepad2, Play } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { RefinedMagneticEffect } from "@/components/refined-magnetic-effect"
import { RefinedButton } from "@/components/refined-button"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/scroll-animations"
import { FlowingText } from "@/components/flowing-text"
import Footer from "@/components/footer"

interface Game {
  id: string
  title: string
  description: string
  shortDescription: string
  category: string
  technologies: string[]
  developmentDate: string
  playTime: string
  difficulty: "Easy" | "Medium" | "Hard"
  image: string
  demoUrl?: string
  status: "Live" | "In Development" | "Coming Soon"
}

const games: Game[] = [
  {
    id: "blackjack",
    title: "Blackjack 21",
    description:
      "A professional casino-style Blackjack game with advanced card counting system and basic strategy integration.",
    shortDescription: "Professional card game with counting system and strategy",
    category: "Card Games",
    technologies: ["React", "TypeScript", "Framer Motion"],
    developmentDate: "2024-03-15",
    playTime: "5-30 min",
    difficulty: "Medium",
    image: "/images/blackjack.png",
    demoUrl: "https://v0-blackjack-game-alpha.vercel.app/",
    status: "Live",
  },
  {
    id: "wordle-replica",
    title: "Wordle Replica",
    description:
      "A word guessing game inspired by Wordle, where players have six attempts to guess a five-letter word.",
    shortDescription: "Wordle-inspired word guessing game",
    category: "Word Games",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    developmentDate: "2024-02-20",
    playTime: "3-10 min",
    difficulty: "Medium",
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "https://memory-match-demo.vercel.app",
    status: "Live",
  },
  {
    id: "word-puzzle",
    title: "Word Puzzle",
    description:
      "A challenging word game where players create words from a grid of letters. Includes timer, scoring system, and word validation.",
    shortDescription: "Create words from a grid of letters with scoring system",
    category: "Word Games",
    technologies: ["React", "TypeScript", "Dictionary API"],
    developmentDate: "2024-01-10",
    playTime: "10-20 min",
    difficulty: "Hard",
    image: "/placeholder.svg?height=400&width=600",
    status: "Coming Soon",
  },
  {
    id: "snake-game",
    title: "Snake Classic",
    description:
      "A modern take on the classic Snake game with smooth controls and progressive difficulty. Features high score tracking and responsive design.",
    shortDescription: "Modern take on the classic Snake game",
    category: "Arcade Games",
    technologies: ["Canvas API", "JavaScript", "CSS Grid"],
    developmentDate: "2024-04-05",
    playTime: "5-30 min",
    difficulty: "Medium",
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "https://snake-classic-demo.vercel.app",
    status: "Coming Soon",
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe AI",
    description:
      "Classic Tic Tac Toe with an unbeatable AI opponent. Features different difficulty levels and game statistics tracking.",
    shortDescription: "Classic game with unbeatable AI opponent",
    category: "Strategy Games",
    technologies: ["React", "Minimax Algorithm", "TypeScript"],
    developmentDate: "2024-01-25",
    playTime: "2-5 min",
    difficulty: "Easy",
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "https://tictactoe-ai-demo.vercel.app",
    status: "Coming Soon",
  },
  {
    id: "puzzle-slider",
    title: "Sliding Puzzle",
    description:
      "A digital version of the classic sliding puzzle game. Upload your own images or choose from presets to create custom puzzles.",
    shortDescription: "Classic sliding puzzle with custom image support",
    category: "Puzzle Games",
    technologies: ["React", "File Upload API", "CSS Transforms"],
    developmentDate: "2024-05-01",
    playTime: "5-20 min",
    difficulty: "Medium",
    image: "/placeholder.svg?height=400&width=600",
    status: "Coming Soon",
  },
]

export default function GamesPage() {
  // Random animation delay for game category tags
  const getRandomDelay = () => Math.random() * 8

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "In Development":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
      case "Coming Soon":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
      case "Hard":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
    }
  }

  return (
    <>
      <main className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-secondary">
        <div className="container px-4 mx-auto md:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto space-y-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Gamepad2 className="w-6 h-6 text-muted-foreground" />
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Playground</span>
              </div>
              <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
                Personal <FlowingText text="Playground" className="inline" />
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A collection of personal projects, games, and creative experiments showcasing interactive app development using AI tools.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-12">
        <div className="container px-4 mx-auto md:px-6">
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
            {games.map((game) => (
              <StaggerItem key={game.id}>
                <RefinedMagneticEffect intensity={0.1} range={100}>
                  <Card className="h-full transition-all duration-500 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 overflow-hidden">
                    {/* Game Image */}
                    <div className="relative overflow-hidden aspect-[3/2]">
                      <Image
                        src={game.image || "/placeholder.svg"}
                        alt={`${game.title} game screenshot`}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />

                      {/* Status Badge */}
                      <div className="absolute top-3 left-3">
                        <Badge className={`text-xs ${getStatusColor(game.status)}`}>{game.status}</Badge>
                      </div>

                      {/* Play Button Overlay */}
                      {game.status === "Live" && game.demoUrl && (
                        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <RefinedMagneticEffect intensity={0.3} range={60}>
                            {game.demoUrl.startsWith('http') ? (
                              <a
                                href={game.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="interactive inline-flex items-center px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors group"
                              >
                                <Play className="w-4 h-4 mr-2 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                                Play Now
                              </a>
                            ) : (
                              <Link
                                href={game.demoUrl}
                                className="interactive inline-flex items-center px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors group"
                              >
                                <Play className="w-4 h-4 mr-2 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                                Play Now
                              </Link>
                            )}
                          </RefinedMagneticEffect>
                        </div>
                      )}
                    </div>

                    <CardContent className="p-6 h-full flex flex-col">
                      {/* Game Info */}
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          <FlowingText text={game.category} delay={getRandomDelay()} />
                        </Badge>
                        <Badge className={`text-xs ${getDifficultyColor(game.difficulty)}`}>{game.difficulty}</Badge>
                      </div>

                      <h3 className="text-xl font-medium mb-2 group-hover:text-foreground/80 transition-colors">
                        {game.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 flex-grow text-sm leading-relaxed">
                        {game.shortDescription}
                      </p>

                      {/* Game Details */}
                      <div className="space-y-2 mb-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          {new Date(game.developmentDate).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                          })}
                        </div>
                        <div>Play time: {game.playTime}</div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {game.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {game.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{game.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Action Button */}
                      <div className="mt-auto">
                        {game.status !== "Coming Soon" ? (
                          <Link href={`/games/${game.id}`} className="block">
                            <RefinedButton 
                              size="sm" 
                              intensity={0.15}
                              className="w-full text-xs group"
                            >
                              <span className="flex items-center justify-center">
                                View Details
                                <ArrowRight className="w-3 h-3 ml-2 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                              </span>
                            </RefinedButton>
                          </Link>
                        ) : (
                          <RefinedButton
                            size="sm"
                            intensity={0.15}
                            className="w-full text-xs opacity-50 cursor-not-allowed"
                            disabled
                          >
                            Coming Soon
                          </RefinedButton>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </RefinedMagneticEffect>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {games.length === 0 && (
            <FadeIn>
              <div className="text-center py-16">
                <Gamepad2 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2">No games found</h3>
                <p className="text-muted-foreground">Try adjusting your filters to see more games.</p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary">
        <div className="container px-4 mx-auto md:px-6">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-2xl font-medium">Enjoyed the games?</h2>
              <p className="text-muted-foreground">
                These games showcase my skills in interactive development, user experience design, and creative
                problem-solving.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <RefinedButton intensity={0.2}>
                  <Link href="/#projects">View UX projects</Link>
                </RefinedButton>
                <RefinedButton variant="outline" intensity={0.2}>
                  <Link href="/#contact">Get in touch</Link>
                </RefinedButton>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
