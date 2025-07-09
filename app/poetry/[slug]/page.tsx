import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, Tag, Clock } from "lucide-react"
import { notFound } from "next/navigation"

import { Badge } from "@/components/ui/badge"
import { RefinedButton } from "@/components/refined-button"
import { RefinedMagneticEffect } from "@/components/refined-magnetic-effect"
import { FadeIn } from "@/components/scroll-animations"
import { FlowingText } from "@/components/flowing-text"

interface Poem {
  id: string
  title: string
  excerpt: string
  content: string
  theme: string
  publishedDate: string
  readTime: string
  inspiration?: string
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
    inspiration:
      "Written a couple months back when my grandfather passed away. I was here in America and he died in India, so far away. He was struggling with Parkinson's and had an extraordinary life - a man of resilience, humor, and quiet strength who faced life's cruelties with calm and smiles.",
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
    inspiration:
      "This poem took 2 years to complete and represents the pain I felt and processed after my breakup before coming to America. It's a raw exploration of heartbreak, the persistence of emotional wounds, and the long journey toward healing.",
  },
  {
    id: "path-of-oblivion",
    title: "Path of Oblivion",
    excerpt: "One of my first written poems, while I was reflecting on one of the moments of joy of serenity in nature.",
    content: `Under the moonlit meadows
We go into the starry night
Just to get away from our troubles
On the nature's bench
For the silence, the peace, 
Without listening, we heard too much
Hiding in the moonlight,
Treading on different paths,
Leading only to oblivion,
Up in smoke we are.`,
    theme: "Serenity",
    publishedDate: "2024-02-20",
    readTime: "2 min",
    inspiration: "One of my first written poems, while I was reflecting on one of the moments of joy of serenity in nature.",
  },
]

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return [
    { slug: 'the-weight-of-distance' },
    { slug: 'a-thousand-needles' },
    { slug: 'path-of-oblivion' },
  ]
}

export default function PoemPage({ params }: PageProps) {
  // Generate random animation delay for theme tag (0-8 seconds)
  const getRandomDelay = () => Math.random() * 8
  
  const poem = poems.find((p) => p.id === params.slug)

  if (!poem) {
    notFound()
  }

  const currentIndex = poems.findIndex((p) => p.id === params.slug)
  const previousPoem = currentIndex > 0 ? poems[currentIndex - 1] : null
  const nextPoem = currentIndex < poems.length - 1 ? poems[currentIndex + 1] : null

  return (
    <main className="min-h-screen bg-background pt-16">
      <article className="py-16">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Back Navigation */}
            <FadeIn>
              <RefinedMagneticEffect intensity={0.15} range={60}>
                <Link
                  href="/poetry"
                  className="interactive inline-flex items-center mb-8 text-sm hover:text-foreground/80 transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 ease-out group-hover:-translate-x-1" />
                  Back to poetry
                </Link>
              </RefinedMagneticEffect>
            </FadeIn>

            {/* Poem Header */}
            <FadeIn delay={0.2}>
              <header className="mb-12 space-y-6">
                <div className="flex flex-wrap items-center gap-4">
                  <Badge variant="secondary" className="text-sm">
                    <Tag className="w-4 h-4 mr-2" />
                    <FlowingText text={poem.theme} delay={getRandomDelay()} />
                  </Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(poem.publishedDate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {poem.readTime} read
                  </span>
                </div>

                <h1 className="text-4xl font-medium tracking-tight md:text-5xl">{poem.title}</h1>

                {poem.inspiration && (
                  <div className="p-6 bg-secondary rounded-lg">
                    <p className="text-sm text-muted-foreground italic">
                      <strong>Inspiration:</strong> {poem.inspiration}
                    </p>
                  </div>
                )}
              </header>
            </FadeIn>

            {/* Poem Content */}
            <FadeIn delay={0.4}>
              <div className="mb-16">
                <div className="prose prose-xl max-w-none">
                  <pre className="whitespace-pre-line font-serif text-xl leading-relaxed text-foreground/90 font-normal">
                    {poem.content}
                  </pre>
                </div>
              </div>
            </FadeIn>

            {/* Navigation */}
            <FadeIn delay={0.6}>
              <div className="flex flex-col gap-8 pt-12 border-t">
                {/* Previous/Next Navigation */}
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
                  {previousPoem ? (
                    <RefinedMagneticEffect intensity={0.15} range={80}>
                      <Link
                        href={`/poetry/${previousPoem.id}`}
                        className="interactive group flex items-center gap-3 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                      >
                        <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-all duration-300 ease-out group-hover:-translate-x-1" />
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">Previous</p>
                          <p className="font-medium">{previousPoem.title}</p>
                        </div>
                      </Link>
                    </RefinedMagneticEffect>
                  ) : (
                    <div></div>
                  )}

                  {nextPoem && (
                    <RefinedMagneticEffect intensity={0.15} range={80}>
                      <Link
                        href={`/poetry/${nextPoem.id}`}
                        className="interactive group flex items-center gap-3 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors flex-row-reverse"
                      >
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-all duration-300 ease-out group-hover:translate-x-1" />
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">Next</p>
                          <p className="font-medium">{nextPoem.title}</p>
                        </div>
                      </Link>
                    </RefinedMagneticEffect>
                  )}
                </div>

                {/* Call to Action */}
                <div className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    Enjoyed this poem? Explore more of my creative and design work.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <RefinedButton intensity={0.2}>
                      <Link href="/poetry">More poetry</Link>
                    </RefinedButton>
                    <RefinedButton variant="outline" intensity={0.2}>
                      <Link href="/#projects">Design projects</Link>
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
