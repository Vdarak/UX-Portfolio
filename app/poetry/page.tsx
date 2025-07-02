"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Tag, ArrowRight, BookOpen } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { RefinedMagneticEffect } from "@/components/refined-magnetic-effect"
import { RefinedButton } from "@/components/refined-button"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/scroll-animations"
import { FlowingText } from "@/components/flowing-text"
import Footer from "@/components/footer"

interface Poem {
  id: string
  title: string
  excerpt: string
  content: string
  theme: string
  publishedDate: string
  readTime: string
  readingExcerpt?: string
}

const poems: Poem[] = [
  {
    id: "the-weight-of-distance",
    title: "The Weight of Distance",
    excerpt: "Suddenly, smiling feels criminal, A guilt that tightens the throat, As my heart rots and beats erratically...",
    content: `Suddenly, smiling feels criminal,
A guilt that tightens the throat,
As my heart rots and beats erratically.
I marinate in sadness, my chest constricted,
Thinking of you, Dadaji, now gone.

I should have called more often,
Spoken more words across the distance.
Maybe my voice could have been
A spark in your tired body,
A whisper of energy from your youth.

Time slipped between my fingers
While I stared blankly, wondering
How to care for family an ocean away.
Their tears overflowing through video calls:
"Take a last look-he's gone forever."

How do you react when your father breaks?
When the man who taught strength
Crumbles before your eyes?
How do you support the pillar
When its foundation has crumbled?

There's some peace in knowing your suffering ended-Bed-ridden, 
Parkinson's claiming your mobility,
Yet even then, your charm shone through,
Those moments of one liners making everyone laugh,
Now silenced forever.

I picture you alone in that room,
While the house emptied each day,
Women to housework, men to offices,
Children to schools and tutors,
And you, waiting, always waiting.

I remember your hallucinations,
Assassins descending from ceilings,
Religious processions you yearned to join
While the street remained silent as your voice is today.

His backstory more painful than a suffering protagonist,
The false imprisonment, Grandmother fleeing with sons,
Her strength during daylight, her tears in letters at night.
Your rigid mind seeking absolution
In patterns only you could see.

You faced life's cruelties with calm and smiles.
I wish I'd listened more to your stories,
Learned the lessons written in your wrinkles,
Treasured the wisdom in your weathered hands.

Tears hover perpetually at the edge of my vision.
I worry for Grandmother, your wife of seventy-five years,
Battling her demons while mourning yours.
Life is so cruel, my paralysed and forgetful grandma now suffers the loss of her hero everyday.
What compass guides her now that you're gone?

For me, this is the hard reset-
A testament to connections neglected.
Grief comes in waves across seven seas,
Random bursts of tears with no shoulders nearby.

This is my journey to become strongest
When I must one day stand at my father's funeral.
I stand alone now, but clearer than ever:
Family will always be my North Star.

No matter what oceans separate us,
No matter what time steals away,
In my mind, body, and spirit-
I am coming home.`,
    theme: "Grief",
    publishedDate: "2024-01-15",
    readTime: "4 min",
    readingExcerpt: `Suddenly, smiling feels criminal,
A guilt that tightens the throat,
As my heart rots and beats erratically.
I marinate in sadness, my chest constricted,
Thinking of you, Dadaji, now gone.

I should have called more often,
Spoken more words across the distance.
Maybe my voice could have been
A spark in your tired body,
A whisper of energy from your youth.`,
  },
  {
    id: "a-thousand-needles",
    title: "A Thousand Needles",
    excerpt: "Pain is inevitable, they say, but this suffering—this torment—feels eternal. My heart is a battlefield...",
    content: `Pain is inevitable, they say,
but this suffering—this torment—feels eternal.
My heart is a battlefield,
Pierced by serrated needles that twist and grind,
moving back and forth, carving deeper wounds,
their paths widening,
a cone of agony shaped by memories of you.

It is not just one needle;
my heart is a forest of them.
Each thorn whispers your name,
each one a reminder of the love I can never hold again.
The room breathes your absence.
The air tastes of regret,
and the shadows carry the echoes of your voice.

You haunt me,
even after all these years.
I try to avoid you in every place,
but you exist in the spaces I cannot escape—
the hollow of my chest,
the tears that never fall but always threaten.

And yet, I blame myself.
Bastard, fool, failure—
I gave you my everything,
and still, I failed.
You forgot my birthday,
forgot my love,
and still, I forgot how to let you go.

Revenge creeps into my thoughts,
but it feels shallow,
just another way to mask the pain.
I wonder if you think of me,
even for a moment,
or if I am nothing more
than a memory you burned,
a sweater discarded,
a rose turned to ash.

But this is my curse, not yours.
You've moved on; I'm still here,
a prisoner of my own mind,
crafting stories where you notice my absence,
where you understand my pain.

The truth?
I loved you in ways words cannot hold,
and losing you has left me empty,
my heart beating only to feel the needles twist.
But perhaps one day,
when the last thorn breaks away,
I will find myself whole again,
a phoenix rising from the ashes

Until then,
I am here—
a man who once loved,
and now lives in the shadow of what could have been.`,
    theme: "Heartbreak",
    publishedDate: "2024-02-03",
    readTime: "3 min",
    readingExcerpt: `Pain is inevitable, they say,
but this suffering—this torment—feels eternal.
My heart is a battlefield,
Pierced by serrated needles that twist and grind,
moving back and forth, carving deeper wounds,
their paths widening,
a cone of agony shaped by memories of you.

It is not just one needle;
my heart is a forest of them.
Each thorn whispers your name,
each one a reminder of the love I can never hold again.
The room breathes your absence.
The air tastes of regret,
and the shadows carry the echoes of your voice.`,
  },
  {
    id: "user-stories",
    title: "User Stories",
    excerpt: "Behind each click lives a human tale, of hopes and dreams that never fail...",
    content: `Behind each click lives a human tale,
of hopes and dreams that never fail.
Each user journey tells a story,
of struggle, triumph, pain, and glory.

We listen to their whispered needs,
and plant solutions like small seeds.
For in each interface we design,
lives a story, yours and mine.`,
    theme: "UX Research",
    publishedDate: "2024-02-20",
    readTime: "2 min",
  },
  {
    id: "morning-ritual",
    title: "Morning Ritual",
    excerpt: "Coffee steam rises like morning prayers, carrying dreams up spiral stairs...",
    content: `Coffee steam rises like morning prayers,
carrying dreams up spiral stairs.
The first light touches my design board,
where yesterday's ideas are stored.

In this quiet hour before the world wakes,
I sketch the future that my heart makes.
Each line a possibility, each curve a hope,
helping humanity learn to cope.`,
    theme: "Reflection",
    publishedDate: "2024-03-10",
    readTime: "2 min",
  },
  {
    id: "accessibility",
    title: "For Everyone",
    excerpt: "Design is not for the chosen few, but for every soul, both me and you...",
    content: `Design is not for the chosen few,
but for every soul, both me and you.
Each button placed with careful thought,
ensuring no one is left out.

Colors that speak to every eye,
text that helps the spirit fly.
Inclusive design, a sacred art,
that opens every human heart.`,
    theme: "Accessibility",
    publishedDate: "2024-03-25",
    readTime: "2 min",
  },
  {
    id: "iteration",
    title: "Iteration",
    excerpt: "Version one is just the start, each revision a work of art...",
    content: `Version one is just the start,
each revision a work of art.
We test and learn, we fail and grow,
through cycles that help us know.

The user's voice guides every change,
their feedback helps us rearrange.
For perfection is not a destination,
but a journey of iteration.`,
    theme: "Process",
    publishedDate: "2024-04-12",
    readTime: "2 min",
  },
]

export default function PoetryPage() {
  const [viewMode, setViewMode] = useState<"grid" | "continuous">("grid")
  
  // Generate random animation delays for theme tags (0-8 seconds)
  const getRandomDelay = () => Math.random() * 8

  return (
    <>
      <main className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-secondary">
        <div className="container px-4 mx-auto md:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto space-y-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <BookOpen className="w-6 h-6 text-muted-foreground" />
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Poetry</span>
              </div>
              <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
                Words Between <FlowingText text="Pixels" className="inline" />
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A collection of poems exploring the intersection of design, technology, and human experience.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Filters and View Toggle */}
      <section className="py-8 border-b">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex justify-center">
            {/* View Mode Toggle */}
            <FadeIn>
              <div className="flex gap-1 p-1 bg-secondary rounded-lg">
                <RefinedMagneticEffect intensity={0.15} range={60}>
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`interactive px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      viewMode === "grid"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Grid View
                  </button>
                </RefinedMagneticEffect>
                <RefinedMagneticEffect intensity={0.15} range={60}>
                  <button
                    onClick={() => setViewMode("continuous")}
                    className={`interactive px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      viewMode === "continuous"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Reading View
                  </button>
                </RefinedMagneticEffect>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Poems Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto md:px-6">
          {viewMode === "grid" ? (
            <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
              {poems.map((poem) => (
                <StaggerItem key={poem.id}>
                  <RefinedMagneticEffect intensity={0.1} range={100}>
                    <Card className="h-full transition-all duration-500 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5">
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary" className="text-xs">
                            <Tag className="w-3 h-3 mr-1" />
                            <FlowingText text={poem.theme} delay={getRandomDelay()} />
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(poem.publishedDate).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>

                        <h3 className="text-xl font-medium mb-3 group-hover:text-foreground/80 transition-colors">
                          {poem.title}
                        </h3>

                        <p className="text-muted-foreground mb-4 flex-grow italic leading-relaxed">{poem.excerpt}</p>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{poem.readTime} read</span>
                          <RefinedMagneticEffect intensity={0.2} range={60}>
                            <Link
                              href={`/poetry/${poem.id}`}
                              className="interactive inline-flex items-center text-sm font-medium hover:text-foreground/80 transition-colors group"
                            >
                              Read poem
                              <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                            </Link>
                          </RefinedMagneticEffect>
                        </div>
                      </CardContent>
                    </Card>
                  </RefinedMagneticEffect>
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <div className="max-w-2xl mx-auto space-y-16">
              {poems.map((poem, index) => (
                <FadeIn key={poem.id} delay={index * 0.1}>
                  <article className="space-y-6">
                    <header className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          <FlowingText text={poem.theme} delay={getRandomDelay()} />
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(poem.publishedDate).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="text-xs text-muted-foreground">{poem.readTime} read</span>
                      </div>
                      <h2 className="text-2xl font-medium">{poem.title}</h2>
                    </header>

                    <div className="prose prose-lg max-w-none dark:prose-invert">
                      <pre className="whitespace-pre-line font-serif text-lg leading-relaxed text-foreground/90">
                        {poem.readingExcerpt || poem.content}
                      </pre>
                    </div>

                    <div className="pt-4 border-t">
                      <RefinedMagneticEffect intensity={0.15} range={60}>
                        <Link
                          href={`/poetry/${poem.id}`}
                          className="interactive inline-flex items-center text-sm font-medium hover:text-foreground/80 transition-colors group"
                        >
                          View individual page
                          <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                        </Link>
                      </RefinedMagneticEffect>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary">
        <div className="container px-4 mx-auto md:px-6">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-2xl font-medium">Enjoyed the poems?</h2>
              <p className="text-muted-foreground">
                These pieces reflect my journey as a designer and my observations about the digital world we inhabit.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <RefinedButton intensity={0.2}>
                  <Link href="/#projects">View my design work</Link>
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
