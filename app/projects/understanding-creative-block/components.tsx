"use client"

import { Card } from "@/components/ui/card"
import { UserCheck } from "lucide-react"

// ===== OBSERVATION AFFINITY DIAGRAM =====

interface ObservationStickyNoteProps {
  text: string
  className?: string
}

const ObservationStickyNote = ({ text, className = "" }: ObservationStickyNoteProps) => (
  <div 
    className={`
      p-3 rounded-lg shadow-sm border-l-4 text-sm leading-relaxed
      bg-purple-100 dark:bg-purple-900/20 border-l-purple-400 dark:border-l-purple-500
      transform rotate-1 hover:rotate-0 transition-transform duration-200
      ${className}
    `}
  >
    {text}
  </div>
)

interface ObservationCategoryProps {
  title: string
  notes: string[]
  titleColor?: string
}

const ObservationCategory = ({ title, notes, titleColor = "bg-green-200 dark:bg-green-800" }: ObservationCategoryProps) => (
  <div className="space-y-3">
    <div className={`${titleColor} text-green-900 dark:text-green-100 px-3 py-2 rounded-lg font-medium text-sm text-center`}>
      {title}
    </div>
    <div className="space-y-2">
      {notes.map((note, index) => (
        <ObservationStickyNote 
          key={index} 
          text={note}
          className={index % 2 === 0 ? "-rotate-1" : "rotate-1"}
        />
      ))}
    </div>
  </div>
)

export function ObservationAffinityDiagram() {
  const categories = [
    {
      title: "Physical Break",
      notes: [
        "Getting out of the physical environment",
        "Creative block is happening"
      ]
    },
    {
      title: "Digital Inspiration",
      notes: [
        "Go outside or doing physical activity",
        "Using AI to find design inspirations",
        "Seeks online creative"
      ]
    },
    {
      title: "Creative Assistance",
      notes: [
        "Repetitive tasks: prefer mouse or something in the background",
        "Work heavy tasks - non-typical music to focus",
        "Doodling / drawing / sketching"
      ]
    },
    {
      title: "Inspiration Tools",
      notes: [
        "Creating mood board",
        "Finding visual inspirations online",
        "Take breaks on social media apps"
      ]
    },
    {
      title: "Cleansing",
      notes: [
        "Meeting basic physical needs first (shower, eating)",
        "Address emotional response first",
        "No talking creative block into existing territory",
        "Express preference for yourself",
        "Take time to relax"
      ]
    },
    {
      title: "Mental",
      notes: [
        "Strategy specified different"
      ]
    },
    {
      title: "Reflection",
      notes: [
        "Reflective practices for inspiration for people",
        "Connecting with feelings with things experienced before during process"
      ]
    },
    {
      title: "Acceptance",
      notes: [
        "Creative block is natural",
        "Creative energy is not always consistent"
      ]
    },
    {
      title: "Contentedness",
      notes: [
        "Online forum",
        "Google Search",
        "Dribbble",
        "Behance",
        "YouTube"
      ]
    }
  ]

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-bold text-left mb-2">Affinity Diagram</h3>
        <p className="text-sm text-left text-muted-foreground">Observation Study - Key Patterns & Behaviors</p>
      </div>
      
      <Card className="p-6 bg-gradient-to-br from-green-50 to-purple-50 dark:from-green-950/20 dark:to-purple-950/20 border-green-200 dark:border-green-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <ObservationCategory
              key={index}
              title={category.title}
              notes={category.notes}
              titleColor={
                index % 3 === 0 
                  ? "bg-green-200 dark:bg-green-800" 
                  : index % 3 === 1 
                  ? "bg-blue-200 dark:bg-blue-800" 
                  : "bg-purple-200 dark:bg-purple-800"
              }
            />
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-green-200 dark:border-green-700">
          <p className="text-xs text-center text-muted-foreground">
            Grouped insights from 8 scenario-based observational studies
          </p>
        </div>
      </Card>
    </div>
  )
}

// ===== INTERVIEW AFFINITY DIAGRAM =====

interface InterviewStickyNoteProps {
  text: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const InterviewStickyNote = ({ text, className = "", size = 'md' }: InterviewStickyNoteProps) => {
  const sizeClasses = {
    sm: 'p-2 text-xs',
    md: 'p-3 text-sm',
    lg: 'p-4 text-sm'
  }
  
  return (
    <div 
      className={`
        ${sizeClasses[size]} rounded-lg shadow-sm border-l-4 leading-relaxed
        bg-purple-100 dark:bg-purple-900/20 border-l-purple-400 dark:border-l-purple-500
        transform rotate-1 hover:rotate-0 transition-transform duration-200
        ${className}
      `}
    >
      {text}
    </div>
  )
}

interface InterviewCategoryProps {
  title: string
  notes: string[]
  titleColor?: string
  noteColor?: string
  columns?: number
  subtleTilt?: boolean
}

const InterviewCategory = ({ 
  title, 
  notes, 
  titleColor = "bg-green-200 dark:bg-green-800",
  noteColor = "bg-purple-100 dark:bg-purple-900/20 border-l-purple-400 dark:border-l-purple-500",
  columns = 1,
  subtleTilt = false
}: InterviewCategoryProps) => (
  <div className="space-y-3">
    <div className={`${titleColor} text-green-900 dark:text-green-100 px-3 py-2 rounded-lg font-medium text-sm text-center`}>
      {title}
    </div>
    <div className={`grid gap-2 ${columns > 1 ? `grid-cols-${Math.min(columns, 3)}` : ''}`}>
      {notes.map((note, index) => (
        <div
          key={index}
          className={`
            p-2 rounded-lg shadow-sm border-l-4 text-xs leading-relaxed
            ${noteColor}
            transform ${
              subtleTilt 
                ? (index % 2 === 0 ? 'rotate-0.5' : '-rotate-0.5') 
                : (index % 2 === 0 ? '-rotate-1' : 'rotate-1')
            } hover:rotate-0 transition-transform duration-200
          `}
        >
          {note}
        </div>
      ))}
    </div>
  </div>
)

interface InterviewSectionProps {
  title: string
  categories: Array<{
    title: string
    notes: string[]
    color?: string
    noteColor?: string
    subtleTilt?: boolean
  }>
  bgColor?: string
  columns?: number
}

const InterviewSection = ({ title, categories, bgColor = "bg-blue-100 dark:bg-blue-900/20", columns = 2 }: InterviewSectionProps) => (
  <div className={`${bgColor} rounded-xl p-4 space-y-4`}>
    <h3 className="font-bold text-lg text-center text-blue-900 dark:text-blue-100 mb-4">{title}</h3>
    <div className={`grid gap-4 ${columns > 1 ? `md:grid-cols-${Math.min(columns, 4)}` : ''}`}>
      {categories.map((category, index) => (
        <InterviewCategory
          key={index}
          title={category.title}
          notes={category.notes}
          titleColor={category.color}
          noteColor={category.noteColor}
          subtleTilt={category.subtleTilt}
        />
      ))}
    </div>
  </div>
)

export function InterviewAffinityDiagram() {
  // Top Section: Using Tools, Planning/Taking a Break, Think about Creative Block, Creative Activities
  const topSections = [
    {
      title: "Using Tools",
      categories: [
        {
          title: "Software Tools",
          notes: [
            "Google",
            "YouTube",
            "Using AI for inspiration",
            "Pinterest"
          ],
          color: "bg-blue-200 dark:bg-blue-800",
          noteColor: "bg-blue-100 dark:bg-blue-900/20 border-l-blue-400 dark:border-l-blue-500"
        },
        {
          title: "Online Resources",
          notes: [
            "Looking at things for inspiration",
            "Searching for visual references",
            "Browsing creative platforms"
          ],
          color: "bg-blue-200 dark:bg-blue-800",
          noteColor: "bg-blue-100 dark:bg-blue-900/20 border-l-blue-400 dark:border-l-blue-500"
        }
      ]
    },
    {
      title: "Planning/Taking a Break during Creative Block",
      categories: [
        {
          title: "Taking Breaks",
          notes: [
            "Sleep",
            "Walk",
            "Change environment",
            "Take a shower"
          ],
          color: "bg-green-200 dark:bg-green-800",
          noteColor: "bg-green-100 dark:bg-green-900/20 border-l-green-400 dark:border-l-green-500"
        },
        {
          title: "Physical Activities",
          notes: [
            "Exercise",
            "Go outside",
            "Change of scenery",
            "Physical movement"
          ],
          color: "bg-green-200 dark:bg-green-800",
          noteColor: "bg-green-100 dark:bg-green-900/20 border-l-green-400 dark:border-l-green-500"
        }
      ]
    },
    {
      title: "Think about Creative Block",
      categories: [
        {
          title: "Mental Approach",
          notes: [
            "Acceptance",
            "Understanding it's normal",
            "Being patient with yourself",
            "Mindset shift"
          ],
          color: "bg-purple-200 dark:bg-purple-800",
          noteColor: "bg-purple-100 dark:bg-purple-900/20 border-l-purple-400 dark:border-l-purple-500"
        },
        {
          title: "Reflection",
          notes: [
            "Think about why",
            "Analyze the block",
            "Self-awareness",
            "Understanding triggers"
          ],
          color: "bg-purple-200 dark:bg-purple-800",
          noteColor: "bg-purple-100 dark:bg-purple-900/20 border-l-purple-400 dark:border-l-purple-500"
        }
      ]
    },
    {
      title: "Creative Activities as a Hobby",
      categories: [
        {
          title: "Hobby Activities",
          notes: [
            "Writing",
            "Art creation",
            "Music",
            "Photography",
            "Crafts"
          ],
          color: "bg-yellow-200 dark:bg-yellow-800",
          noteColor: "bg-yellow-100 dark:bg-yellow-900/20 border-l-yellow-400 dark:border-l-yellow-500"
        }
      ]
    }
  ]

  // Middle Section: Features to Overcome Creative Block, Creative Block Defined, Preparation, etc.
  const middleSections = [
    {
      title: "Features to Overcome Creative Block",
      categories: [
        {
          title: "Tool Features",
          notes: [
            "Mood tracking",
            "Inspiration gallery",
            "Progress tracking",
            "Reminder system",
            "Community support",
            "Guided exercises",
            "Resource library"
          ],
          color: "bg-orange-200 dark:bg-orange-800",
          noteColor: "bg-orange-100 dark:bg-orange-900/20 border-l-orange-400 dark:border-l-orange-500"
        }
      ]
    },
    {
      title: "Creative Block Defined",
      categories: [
        {
          title: "Definition",
          notes: [
            "Lack of ideas",
            "Feeling stuck",
            "Mental barrier",
            "Loss of motivation"
          ],
          color: "bg-red-200 dark:bg-red-800",
          noteColor: "bg-red-100 dark:bg-red-900/20 border-l-red-400 dark:border-l-red-500"
        }
      ]
    },
    {
      title: "Preparation",
      categories: [
        {
          title: "Getting Ready",
          notes: [
            "Mental preparation",
            "Setting up workspace",
            "Gathering materials",
            "Planning approach"
          ],
          color: "bg-teal-200 dark:bg-teal-800",
          noteColor: "bg-teal-100 dark:bg-teal-900/20 border-l-teal-400 dark:border-l-teal-500"
        }
      ]
    },
    {
      title: "Frequency of Creative Block",
      categories: [
        {
          title: "How Often",
          notes: [
            "Weekly",
            "Monthly",
            "Seasonally",
            "Project-dependent"
          ],
          color: "bg-pink-200 dark:bg-pink-800",
          noteColor: "bg-pink-100 dark:bg-pink-900/20 border-l-pink-400 dark:border-l-pink-500"
        }
      ]
    },
    {
      title: "Creative Activities for Work",
      categories: [
        {
          title: "Work Activities",
          notes: [
            "Design projects",
            "Writing tasks",
            "Problem solving",
            "Brainstorming"
          ],
          color: "bg-violet-200 dark:bg-violet-800",
          noteColor: "bg-violet-100 dark:bg-violet-900/20 border-l-violet-400 dark:border-l-violet-500"
        }
      ]
    }
  ]

  // Bottom Sections: Process in Creative Block, Sources of Inspiration, Digital Tools, Equipment, Physical Tools
  const bottomSections = [
    {
      title: "Process in Creative Block",
      categories: [
        {
          title: "Process Steps",
          notes: [
            "Recognize the block",
            "Take a step back",
            "Try different approach",
            "Seek inspiration",
            "Come back refreshed"
          ],
          color: "bg-amber-200 dark:bg-amber-800",
          noteColor: "bg-amber-100 dark:bg-amber-900/20 border-l-amber-400 dark:border-l-amber-500"
        }
      ]
    },
    {
      title: "Sources of Inspiration",
      categories: [
        {
          title: "Digital Sources",
          notes: [
            "Dribbble",
            "Behance",
            "Instagram",
            "Pinterest",
            "YouTube",
            "Google Images",
            "Online galleries"
          ],
          color: "bg-sky-200 dark:bg-sky-800",
          noteColor: "bg-sky-100 dark:bg-sky-900/20 border-l-sky-400 dark:border-l-sky-500"
        },
        {
          title: "Physical Sources",
          notes: [
            "Nature",
            "Books",
            "Magazines",
            "Museums",
            "Architecture",
            "People watching"
          ],
          color: "bg-sky-200 dark:bg-sky-800",
          noteColor: "bg-sky-100 dark:bg-sky-900/20 border-l-sky-400 dark:border-l-sky-500"
        }
      ]
    },
    {
      title: "Digital Tools",
      categories: [
        {
          title: "Software",
          notes: [
            "Figma",
            "Adobe Creative Suite",
            "Canva",
            "Sketch"
          ],
          color: "bg-cyan-200 dark:bg-cyan-800",
          noteColor: "bg-cyan-100 dark:bg-cyan-900/20 border-l-cyan-400 dark:border-l-cyan-500"
        }
      ]
    },
    {
      title: "Equipment",
      categories: [
        {
          title: "Hardware",
          notes: [
            "Computer",
            "Graphics tablet",
            "Camera",
            "Drawing tablet"
          ],
          color: "bg-rose-200 dark:bg-rose-800",
          noteColor: "bg-rose-100 dark:bg-rose-900/20 border-l-rose-400 dark:border-l-rose-500"
        }
      ]
    },
    {
      title: "Physical Tools",
      categories: [
        {
          title: "Analog Tools",
          notes: [
            "Pencil",
            "Paper",
            "Sketchbook",
            "Pens",
            "Markers",
            "Paint"
          ],
          color: "bg-emerald-200 dark:bg-emerald-800",
          noteColor: "bg-emerald-100 dark:bg-emerald-900/20 border-l-emerald-400 dark:border-l-emerald-500"
        }
      ]
    }
  ]

  // Special section: Family/Industry Experience Effect on Creative Block
  const specialSection = {
    title: "Family/Industry Experience Effect on Creative Block",
    categories: [
      {
        title: "External Influences",
        notes: [
          "Family expectations",
          "Industry pressure",
          "Peer comparison",
          "Professional standards",
          "Cultural factors"
        ],
        color: "bg-indigo-200 dark:bg-indigo-800",
        noteColor: "bg-indigo-100 dark:bg-indigo-900/20 border-l-indigo-400 dark:border-l-indigo-500",
        subtleTilt: true
      }
    ]
  }

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-bold text-left mb-2">Interview Affinity Diagram</h3>
        <p className="text-sm text-left text-muted-foreground">Comprehensive analysis of 8 in-depth interviews</p>
      </div>
      
      <Card className="p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-green-950/20 border-blue-200 dark:border-blue-800">
        <div className="space-y-6">
          {/* Top Row - 4 sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {topSections.map((section, index) => (
              <InterviewSection
                key={index}
                title={section.title}
                categories={section.categories}
                bgColor="bg-slate-50 dark:bg-slate-900/20"
                columns={1}
              />
            ))}
          </div>

          {/* Middle Row - 5 sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {middleSections.map((section, index) => (
              <InterviewSection
                key={index}
                title={section.title}
                categories={section.categories}
                bgColor="bg-gray-50 dark:bg-gray-900/20"
                columns={1}
              />
            ))}
          </div>

          {/* Special Section - Full width */}
          <div className="w-full">
            <InterviewSection
              title={specialSection.title}
              categories={specialSection.categories}
              bgColor="bg-indigo-50 dark:bg-indigo-900/20"
              columns={1}
            />
          </div>

          {/* Bottom Row - 5 sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {bottomSections.map((section, index) => (
              <InterviewSection
                key={index}
                title={section.title}
                categories={section.categories}
                bgColor="bg-neutral-50 dark:bg-neutral-900/20"
                columns={1}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-blue-200 dark:border-blue-700">
          <p className="text-xs text-center text-muted-foreground">
            Thematic analysis revealing patterns in creative processes, tools, and blocking factors from interview data
          </p>
        </div>
      </Card>
    </div>
  )
}

// ===== PERSONA SPECTRUM =====

interface SpectrumDotProps {
  color: string
  position: number // 0-100 percentage
  participantId: string
}

const SpectrumDot = ({ color, position, participantId }: SpectrumDotProps) => (
  <div 
    className="absolute w-4 h-4 rounded-full shadow-sm transform -translate-y-1/2 -translate-x-1/2 hover:scale-110 transition-transform duration-200 cursor-pointer"
    style={{ 
      backgroundColor: color,
      left: `${position}%`,
      top: '50%'
    }}
    title={`Participant ${participantId}`}
  />
)

interface SpectrumLineProps {
  title: string
  leftLabel: string
  rightLabel: string
  participants: Array<{
    id: string
    color: string
    position: number
  }>
}

const SpectrumLine = ({ title, leftLabel, rightLabel, participants }: SpectrumLineProps) => (
  <div className="space-y-3">
    <h4 className="text-sm font-semibold text-center text-gray-700 dark:text-gray-300">
      {title}
    </h4>
    <div className="relative">
      {/* Spectrum line */}
      <div className="h-1 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 rounded-full"></div>
      
      {/* Left label */}
      <div className="absolute left-0 top-4 text-xs text-gray-500 dark:text-gray-400 font-medium">
        {leftLabel}
      </div>
      
      {/* Right label */}
      <div className="absolute right-0 top-4 text-xs text-gray-500 dark:text-gray-400 font-medium">
        {rightLabel}
      </div>
      
      {/* Participant dots */}
      {participants.map((participant) => (
        <SpectrumDot
          key={participant.id}
          color={participant.color}
          position={participant.position}
          participantId={participant.id}
        />
      ))}
    </div>
  </div>
)

export function PersonaSpectrum() {
  // Participant colors - consistent across all spectrums
  const participantColors = {
    P1: '#FF6B9D', // Pink
    P2: '#4ECDC4', // Teal
    P3: '#45B7D1', // Blue
    P4: '#96CEB4', // Green
    P5: '#FFEAA7', // Yellow
    P6: '#DDA0DD', // Plum
    P7: '#98D8C8', // Mint
    P8: '#FFB74D'  // Orange
  }

  const spectrumData = [
    {
      title: "Age",
      leftLabel: "18",
      rightLabel: "57",
      participants: [
        { id: "P1", color: participantColors.P1, position: 15 },
        { id: "P2", color: participantColors.P2, position: 25 },
        { id: "P3", color: participantColors.P3, position: 35 },
        { id: "P4", color: participantColors.P4, position: 45 },
        { id: "P5", color: participantColors.P5, position: 65 },
        { id: "P6", color: participantColors.P6, position: 75 },
        { id: "P7", color: participantColors.P7, position: 85 },
        { id: "P8", color: participantColors.P8, position: 95 }
      ]
    },
    {
      title: "Preferred Tools",
      leftLabel: "Digital",
      rightLabel: "Physical",
      participants: [
        { id: "P1", color: participantColors.P1, position: 10 },
        { id: "P2", color: participantColors.P2, position: 20 },
        { id: "P3", color: participantColors.P3, position: 30 },
        { id: "P4", color: participantColors.P4, position: 40 },
        { id: "P5", color: participantColors.P5, position: 60 },
        { id: "P6", color: participantColors.P6, position: 80 },
        { id: "P7", color: participantColors.P7, position: 90 },
        { id: "P8", color: participantColors.P8, position: 95 }
      ]
    },
    {
      title: "Creative Experience in Years",
      leftLabel: "5",
      rightLabel: "20+",
      participants: [
        { id: "P1", color: participantColors.P1, position: 15 },
        { id: "P2", color: participantColors.P2, position: 25 },
        { id: "P3", color: participantColors.P3, position: 40 },
        { id: "P4", color: participantColors.P4, position: 55 },
        { id: "P5", color: participantColors.P5, position: 70 },
        { id: "P6", color: participantColors.P6, position: 80 },
        { id: "P7", color: participantColors.P7, position: 90 },
        { id: "P8", color: participantColors.P8, position: 95 }
      ]
    },
    {
      title: "Struggling Stage of the Creative Process",
      leftLabel: "Ideation",
      rightLabel: "Execution",
      participants: [
        { id: "P1", color: participantColors.P1, position: 15 },
        { id: "P2", color: participantColors.P2, position: 25 },
        { id: "P3", color: participantColors.P3, position: 35 },
        { id: "P4", color: participantColors.P4, position: 50 },
        { id: "P5", color: participantColors.P5, position: 65 },
        { id: "P6", color: participantColors.P6, position: 75 },
        { id: "P7", color: participantColors.P7, position: 85 },
        { id: "P8", color: participantColors.P8, position: 90 }
      ]
    },
    {
      title: "Deciding to Take a Break",
      leftLabel: "Sporadic",
      rightLabel: "Scheduled",
      participants: [
        { id: "P1", color: participantColors.P1, position: 20 },
        { id: "P2", color: participantColors.P2, position: 35 },
        { id: "P3", color: participantColors.P3, position: 45 },
        { id: "P4", color: participantColors.P4, position: 60 },
        { id: "P5", color: participantColors.P5, position: 75 },
        { id: "P6", color: participantColors.P6, position: 85 }
      ]
    },
    {
      title: "Confidence Level During Block",
      leftLabel: "Low",
      rightLabel: "High",
      participants: [
        { id: "P1", color: participantColors.P1, position: 15 },
        { id: "P2", color: participantColors.P2, position: 30 },
        { id: "P3", color: participantColors.P3, position: 45 },
        { id: "P4", color: participantColors.P4, position: 60 },
        { id: "P5", color: participantColors.P5, position: 70 },
        { id: "P6", color: participantColors.P6, position: 85 }
      ]
    },
    {
      title: "Frequency of Creative Block",
      leftLabel: "Daily",
      rightLabel: "Yearly",
      participants: [
        { id: "P1", color: participantColors.P1, position: 20 },
        { id: "P2", color: participantColors.P2, position: 35 },
        { id: "P3", color: participantColors.P3, position: 50 },
        { id: "P4", color: participantColors.P4, position: 65 },
        { id: "P5", color: participantColors.P5, position: 80 },
        { id: "P8", color: participantColors.P8, position: 95 }
      ]
    }
  ]

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-bold text-left mb-2">Persona Spectrum</h3>
        <p className="text-sm text-left text-muted-foreground">
          Distribution of participant characteristics across key dimensions
        </p>
      </div>
      
      <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800">
        <div className="space-y-8">
          {spectrumData.map((spectrum, index) => (
            <SpectrumLine
              key={index}
              title={spectrum.title}
              leftLabel={spectrum.leftLabel}
              rightLabel={spectrum.rightLabel}
              participants={spectrum.participants}
            />
          ))}
        </div>
        
        {/* Legend */}
        <div className="mt-8 pt-6 border-t border-blue-200 dark:border-blue-700">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(participantColors).map(([id, color]) => (
              <div key={id} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span className="text-xs text-muted-foreground">{id}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-center text-muted-foreground mt-3">
            Each colored dot represents one of our 8 interview participants
          </p>
        </div>
      </Card>
    </div>
  )
}

// ===== SCENARIOS =====

interface ScenarioStepProps {
  number: string
  title: string
  description: string
  highlight?: boolean
}

const ScenarioStep = ({ number, title, description, highlight = false }: ScenarioStepProps) => (
  <div className={`flex gap-3 p-3 rounded-lg ${highlight ? 'bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800' : 'bg-gray-50 dark:bg-gray-900/50'}`}>
    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 self-center ${
      highlight ? 'bg-blue-500 text-white' : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
    }`}>
      {number}
    </div>
    <div className="space-y-1">
      <h4 className="font-semibold text-sm">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
)

interface PersonaScenarioProps {
  name: string
  image: string
  quote: string
  demographics: string[]
  problem: string
  solution: string
  steps: Array<{
    number: string
    title: string
    description: string
    highlight?: boolean
  }>
  outcome: string
}

const PersonaScenario = ({ name, image, quote, demographics, problem, solution, steps, outcome }: PersonaScenarioProps) => (
  <Card className="p-6 space-y-6">
    {/* Header */}
    <div className="flex gap-4">
      <div className="w-16 h-16 rounded-lg bg-gray-200 dark:bg-gray-700 flex-shrink-0 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm italic text-muted-foreground bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 rounded">
          "{quote}"
        </p>
        <div className="flex flex-wrap gap-1 text-xs text-muted-foreground">
          {demographics.map((item, index) => (
            <span key={index} className="after:content-['•'] after:mx-1 last:after:content-none">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Problem & Solution Overview */}
    <div className="grid md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <h4 className="font-semibold text-red-600 dark:text-red-400">Problem</h4>
        <p className="text-sm text-muted-foreground">{problem}</p>
      </div>
      <div className="space-y-2">
        <h4 className="font-semibold text-green-600 dark:text-green-400">Solution</h4>
        <p className="text-sm text-muted-foreground">{solution}</p>
      </div>
    </div>

    {/* Scenario Steps */}
    <div className="space-y-3">
      <h4 className="font-semibold">User Journey</h4>
      <div className="space-y-2">
        {steps.map((step, index) => (
          <ScenarioStep key={index} {...step} />
        ))}
      </div>
    </div>

    {/* Outcome */}
    <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4">
      <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Outcome</h4>
      <p className="text-sm text-green-600 dark:text-green-400">{outcome}</p>
    </div>
  </Card>
)

export function PersonaScenarios() {
  const scenarios = [
    {
      name: "Sara",
      image: "/placeholder-user.jpg",
      quote: "It's the worst feeling when a creative block is near a deadline.",
      demographics: ["24 years old", "UX Designer/HCI Graduate Student", "Chicago, IL", "Female (she/her)", "15 years of creative experience"],
      problem: "Experiences creative blocks during ideation, especially under deadline pressure. Struggles with imposter syndrome and confidence in her ideas.",
      solution: "Uses a creative assistant app to overcome blocks through structured guidance and inspiration discovery.",
      steps: [
        {
          number: "1",
          title: "Recognizes Creative Block",
          description: "Feels stuck during UX project ideation phase, pressure from upcoming deadlines causing anxiety.",
          highlight: false
        },
        {
          number: "2",
          title: "Discovers Creative Assistant",
          description: "Downloads app that promises to help with creative blocks through guided exercises.",
          highlight: true
        },
        {
          number: "3",
          title: "Selects Medium & Goals",
          description: "Chooses UX design medium, describes project with keywords and phrases for context.",
          highlight: false
        },
        {
          number: "4",
          title: "Explores Minimalism Style",
          description: "Gets matched with 'Minimalism' approach, learns about style, history, and relevant designers.",
          highlight: true
        },
        {
          number: "5",
          title: "Gains Confidence",
          description: "Links inspiration to her project context, feels more confident about design direction.",
          highlight: false
        }
      ],
      outcome: "Sara feels empowered with clear direction and inspiration. The structured approach helps her overcome blocks faster and builds confidence in her creative decisions."
    },
    {
      name: "Taylor",
      image: "/placeholder-user.jpg",
      quote: "Creative block is a natural yet degrading part of my process.",
      demographics: ["28 years old", "UX Designer (transitioned from writing)", "Chicago, IL", "Male (he/him)", "28 years of creative experience"],
      problem: "Experiences frequent creative blocks that disrupt workflow. Seeks structured creative routines and activities to maintain momentum.",
      solution: "Uses creative routine features to establish sustainable creative practices and manage blocks proactively.",
      steps: [
        {
          number: "1",
          title: "Feeling Stuck & Tired",
          description: "Recognizes creative block symptoms, feels drained and unable to generate fresh ideas.",
          highlight: false
        },
        {
          number: "2",
          title: "Tries Creative Routine",
          description: "Explores app's 'My Creative Routine' feature for structured creative activities.",
          highlight: true
        },
        {
          number: "3",
          title: "Lists Interests & Goals",
          description: "Inputs creative mediums, pop culture interests, and time commitment preferences.",
          highlight: false
        },
        {
          number: "4",
          title: "Gets Creative Activity",
          description: "Receives personalized suggestion: 'Write a Godfather scene set in space' with time estimate.",
          highlight: true
        },
        {
          number: "5",
          title: "Starts 10-Minute Session",
          description: "Begins creative exercise with built-in timer and break reminders for sustainable practice.",
          highlight: false
        }
      ],
      outcome: "Taylor develops a sustainable creative routine that prevents severe blocks. The structured approach helps maintain creative momentum and reduces the degrading feeling of being stuck."
    }
  ]

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-left mb-2">User Scenarios</h3>
        <p className="text-left text-muted-foreground">
          Real-world usage scenarios showing how our personas would interact with creative block solutions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {scenarios.map((scenario, index) => (
          <PersonaScenario key={index} {...scenario} />
        ))}
      </div>
    </div>
  )
}

// ===== DETAILED PERSONAS =====

interface TagProps {
  text: string
  color: 'red' | 'orange' | 'green' | 'blue' | 'purple' | 'yellow'
}

const Tag = ({ text, color }: TagProps) => {
  const colorClasses = {
    red: 'bg-red-200 dark:bg-red-900/30 text-red-800 dark:text-red-200',
    orange: 'bg-orange-200 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200',
    green: 'bg-green-200 dark:bg-green-900/30 text-green-800 dark:text-green-200',
    blue: 'bg-blue-200 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200',
    purple: 'bg-purple-200 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200',
    yellow: 'bg-yellow-200 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200'
  }
  
  return (
    <div className={`px-3 py-2 rounded-lg text-sm font-medium ${colorClasses[color]}`}>
      {text}
    </div>
  )
}

interface PersonaCardProps {
  name: string
  image: string
  quote: string
  age: number
  role: string
  location: string
  gender: string
  experience: string
  bio: string
  preferredTools: string[]
  interests: Array<{ text: string; color: 'red' | 'orange' | 'green' | 'blue' | 'purple' | 'yellow' }>
  needsAndExpectations: Array<{ text: string; color: 'red' | 'orange' | 'green' | 'blue' | 'purple' | 'yellow' }>
  influences: Array<{ text: string; color: 'red' | 'orange' | 'green' | 'blue' | 'purple' | 'yellow' }>
  motivations: Array<{ text: string; color: 'red' | 'orange' | 'green' | 'blue' | 'purple' | 'yellow' }>
  goals: Array<{ text: string; color: 'red' | 'orange' | 'green' | 'blue' | 'purple' | 'yellow' }>
  painPoints: Array<{ text: string; color: 'red' | 'orange' | 'green' | 'blue' | 'purple' | 'yellow' }>
}

const PersonaCard = ({ 
  name, 
  image, 
  quote, 
  age, 
  role, 
  location, 
  gender, 
  experience, 
  bio, 
  preferredTools,
  interests,
  needsAndExpectations,
  influences,
  motivations,
  goals,
  painPoints 
}: PersonaCardProps) => (
  <Card className="w-full bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-200 dark:border-yellow-800">
    <div className="p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column - Basic Info */}
        <div className="lg:col-span-4 space-y-6">
          {/* Profile Image */}
          <div className="w-48 h-48 mx-auto lg:mx-0 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
              <UserCheck className="w-16 h-16" />
            </div>
          </div>
          
          {/* Name and Quote */}
          <div>
            <h3 className="text-3xl font-bold mb-3">{name}</h3>
            <div className="bg-yellow-200 dark:bg-yellow-800/30 px-4 py-3 rounded-lg mb-4">
              <p className="text-sm italic font-medium">"{quote}"</p>
            </div>
          </div>
          
          {/* Demographics */}
          <div className="space-y-2">
            <p className="text-sm"><strong>{age} years old</strong></p>
            <p className="text-sm">{role}</p>
            <p className="text-sm">{location}</p>
            <p className="text-sm">{gender}</p>
            <p className="text-sm">{experience}</p>
          </div>
          
          {/* Bio */}
          <div>
            <h4 className="text-lg font-bold mb-3">Bio</h4>
            <p className="text-sm leading-relaxed">{bio}</p>
          </div>
          
          {/* Preferred Tools */}
          <div>
            <h4 className="text-lg font-bold mb-3">Preferred Tools</h4>
            <div className="flex flex-wrap gap-2">
              {preferredTools.map((tool, index) => (
                <div key={index} className="bg-yellow-300 dark:bg-yellow-700 text-yellow-900 dark:text-yellow-100 px-3 py-2 rounded-full text-sm font-medium">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Column - Detailed Sections */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Interests */}
          <div>
            <h4 className="text-lg font-bold mb-4">Interests</h4>
            <div className="space-y-2">
              {interests.map((interest, index) => (
                <Tag key={index} text={interest.text} color={interest.color} />
              ))}
            </div>
          </div>
          
          {/* Needs and Expectations */}
          <div>
            <h4 className="text-lg font-bold mb-4">Needs and expectations</h4>
            <div className="space-y-2">
              {needsAndExpectations.map((need, index) => (
                <Tag key={index} text={need.text} color={need.color} />
              ))}
            </div>
          </div>
          
          {/* Influences */}
          <div>
            <h4 className="text-lg font-bold mb-4">Influences</h4>
            <div className="space-y-2">
              {influences.map((influence, index) => (
                <Tag key={index} text={influence.text} color={influence.color} />
              ))}
            </div>
          </div>
          
          {/* Motivations */}
          <div>
            <h4 className="text-lg font-bold mb-4">Motivations</h4>
            <div className="space-y-2">
              {motivations.map((motivation, index) => (
                <Tag key={index} text={motivation.text} color={motivation.color} />
              ))}
            </div>
          </div>
          
          {/* Goals */}
          <div>
            <h4 className="text-lg font-bold mb-4">Goals</h4>
            <div className="space-y-2">
              {goals.map((goal, index) => (
                <Tag key={index} text={goal.text} color={goal.color} />
              ))}
            </div>
          </div>
          
          {/* Pain Points */}
          <div>
            <h4 className="text-lg font-bold mb-4">Pain points</h4>
            <div className="space-y-2">
              {painPoints.map((pain, index) => (
                <Tag key={index} text={pain.text} color={pain.color} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
)

export function DetailedPersonas() {
  const personas: PersonaCardProps[] = [
    {
      name: "Taylor",
      image: "/placeholder-user.jpg",
      quote: "Creative block is a natural yet degrading part of my process.",
      age: 28,
      role: "UX Designer (transitioned from writing career)",
      location: "Chicago, IL",
      gender: "Male (he/him)",
      experience: "28 years of creative experience (whole life)",
      bio: "Taylor is a 28-year-old designer who recently transitioned from a writing career. His former career as a writer gives him a more emotional lens on the world around him. So, when he faces a creative block, Taylor wallows and feels less confident in his work. However, once he is out of a block, he regains his confidence. Taylor needs to be reminded of previous inspirations, like his favorite movie, to move past his emotional creative block and feel more inspired to complete his work. He is also a perfectionist, which makes him experience creative blocks more frequently than his coworkers.",
      preferredTools: ["Pen and paper", "Sticky notes", "Figma"],
      interests: [
        { text: "Writing", color: "red" as const },
        { text: "Design", color: "red" as const },
        { text: "Movies", color: "red" as const }
      ],
      needsAndExpectations: [
        { text: "Create organic ways to ideate during a block", color: "orange" as const },
        { text: "Accept that a project is complete enough, feel good enough", color: "orange" as const },
        { text: "Feel inspired by his past work and previous inspirations (ex. favorite movies)", color: "orange" as const }
      ],
      influences: [
        { text: "Observing creative people-watching (being outside)", color: "green" as const },
        { text: "Emotional connection with himself (derived from his writing career)", color: "green" as const },
        { text: "His connection with family and friends", color: "green" as const }
      ],
      motivations: [
        { text: "Helping people with better experiences", color: "purple" as const },
        { text: "Feeling complete and accomplished", color: "purple" as const },
        { text: "Grow his UX career", color: "purple" as const }
      ],
      goals: [
        { text: "Design experiences that tell a story", color: "blue" as const },
        { text: "Make people feel positive emotions from his UX work", color: "blue" as const },
        { text: "Complete a project to feel a sense of accomplishment", color: "blue" as const }
      ],
      painPoints: [
        { text: "Wallowing in creative block", color: "yellow" as const },
        { text: "Perfectionism", color: "yellow" as const },
        { text: "Frequent creative blocks & lacks confidence in the moment", color: "yellow" as const }
      ]
    },
    {
      name: "Sara",
      image: "/placeholder-user.jpg",
      quote: "It's the worst feeling when a creative block is near a deadline.",
      age: 24,
      role: "UX Designer/HCI Graduate Student",
      location: "Chicago, IL",
      gender: "Female (she/her)",
      experience: "15 years of creative experience",
      bio: "Sara is a 24-year-old UX designer with about 15 years of creative experience. Her first career experience is in UX design, so she is fairly new to the field. She struggles with imposter syndrome, and has a hard time with feeling confident in her ideas when she experiences creative block. Sara prioritizes accessible design, so she relies on her friends and colleagues in the industry to help her with ideation. She wants to feel more confident in her ideas and balance her emotions and physical needs during a creative block, while efficiently creating designs in order to perform well at her job.",
      preferredTools: ["Figma", "Notes App on iOS", "ChatGPT / Gemini"],
      interests: [
        { text: "Accessible design", color: "red" as const },
        { text: "Gaming", color: "red" as const },
        { text: "Playing sports", color: "red" as const }
      ],
      needsAndExpectations: [
        { text: "Help with ideation and the first step of a project during a block", color: "orange" as const },
        { text: "Navigating emotions of anxiety and lack of confidence during a block", color: "orange" as const },
        { text: "Learn to better understand her needs (when to take a break) during a block", color: "orange" as const }
      ],
      influences: [
        { text: "Social media (TikTok, Instagram) AI (Gemini and ChatGPT)", color: "green" as const },
        { text: "Friends and colleagues in the industry", color: "green" as const },
        { text: "Design examples on Behance, Dribbble, and Pinterest", color: "green" as const }
      ],
      motivations: [
        { text: "Complete her design work on time", color: "purple" as const },
        { text: "Being creative and finding solutions to tough design problems", color: "purple" as const },
        { text: "Supporting her colleagues in their design", color: "purple" as const }
      ],
      goals: [
        { text: "Efficiently design intuitive and aesthetically-pleasing experiences", color: "blue" as const },
        { text: "Stay up-to-date on the latest design trends and patterns", color: "blue" as const },
        { text: "Cultivate as many design ideas as possible without feeling very stressed out", color: "blue" as const }
      ],
      painPoints: [
        { text: "Imposter Syndrome", color: "yellow" as const },
        { text: "Not feeling confident in her ideas", color: "yellow" as const },
        { text: "Procrastinating on a project", color: "yellow" as const }
      ]
    }
  ]

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-left mb-2">User Personas</h3>
        <p className="text-left text-muted-foreground">
          While every creative professional's experience is unique, our analysis revealed two primary patterns 
          in how people approach creative work and manage blocks. These personas guided our design recommendations.
        </p>
      </div>
      
      <div className="space-y-8">
        {personas.map((persona, index) => (
          <PersonaCard key={index} {...persona} />
        ))}
      </div>
    </div>
  )
}
