"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion, Variants } from "framer-motion"
import { useState } from "react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { RefinedMagneticEffect } from "@/components/refined-magnetic-effect"
import { RefinedButton } from "@/components/refined-button"
import { FlowingText } from "@/components/flowing-text"

interface RefinedProjectCardProps {
  title: string
  description: string
  image: string
  hoverImage?: string // The new image to display on hover
  tags: string[]
  href: string
  className?: string
  
// ————————————————————————————————————————————————————————————————————————————————
// RefinedProjectCard: A compositional, accessibility-first card for UX projects
//
// This card is designed for the portfolio grid. It harmonizes visual storytelling,
// interactivity, and responsive design. Each prop, class, and aria-attribute is
// chosen for clarity, accessibility, and intent.
// ————————————————————————————————————————————————————————————————————————————————
//
// Props:
//   title:        Project name (semantic heading, SEO, and clarity)
//   description:  Short, evocative summary (supports visual rhythm)
//   image:        Main visual (object-cover, full-bleed, high-res)
//   hoverImage:   Alternate image for micro-delight on hover
//   tags:         Array of skills/domains (badges, aria-labels)
//   href:         URL to project detail (entire card is a link)
//
// Structure:
//   - Outermost <a> is the interactive container (focusable, accessible)
//   - Responsive width/aspect via Tailwind (w-full, aspect-[4/3], etc.)
//   - Images are layered for crossfade on hover
//   - Overlay ensures text readability
//   - Tags reinforce project domain
//   - Focus ring and aria-label for accessibility
//
// Animations:
//   - Subtle scale/shadow on hover/focus
//   - Image crossfade for hoverImage
//   - Tags may animate in with staggered fade
//
// Why:
//   - Each card is a narrative entry point—inviting, clear, and delightful
//   - The card’s structure is intentionally decoupled from grid logic
// ————————————————————————————————————————————————————————————————————————————————
}

const tagsContainerVariants: Variants = {
  initial: { 
    opacity: 0,
    y: -20
  },
  hovered: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.23, 1, 0.32, 1],
      staggerChildren: 0.05,
      delayChildren: 0.1
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.25,
      ease: [0.76, 0, 0.24, 1],
      staggerChildren: 0.03,
      staggerDirection: -1
    }
  }
}

const tagItemVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: -12,
    scale: 0.9
  },
  hovered: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1],
      type: "spring",
      damping: 20,
      stiffness: 300
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.9,
    transition: {
      duration: 0.25,
      ease: [0.76, 0, 0.24, 1]
    }
  }
}

export default function RefinedProjectCard({
  title,
  description,
  image,
  hoverImage, // Destructure the new prop
  tags,
  href,
  className,
}: RefinedProjectCardProps) {
  // State management for dual hover behavior
  const [isImageHovered, setIsImageHovered] = useState(false)
  const [isCardHovered, setIsCardHovered] = useState(false)
  
  // ————————————————————————————————————————————————————————————————
  // The entire card is a link for accessibility and ease of navigation.
  // This ensures keyboard users can tab to the card and screen readers
  // announce the project context.
  return (
    <RefinedMagneticEffect
      intensity={0.12}
      range={120}
      className={cn("group", className)}
    >
      <motion.div
        initial="initial"
        whileHover="hovered"
        animate="initial"
        className="relative"
      >
        <Link href={href} className="block">
          <Card 
            className="overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:shadow-black/5 dark:group-hover:shadow-white/5"
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
          >
            {/* Enhanced project image container */}
            <div 
              className="relative overflow-hidden aspect-[18/9] bg-black flex items-center justify-center" 
              data-project-image="true" 
              style={{ cursor: "none" }}
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              {/* Base Image */}
              <motion.div 
                className="absolute inset-0"
                animate={{ 
                  opacity: isImageHovered ? 0 : 1 // Disappears completely on image hover
                }}
                transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={title}
                  fill
                  className={`
                    object-contain transition-transform duration-700
                    ${isImageHovered 
                      ? 'scale-110' // Scale when image is hovered
                      : isCardHovered 
                        ? 'scale-105' // Slight scale when card body is hovered
                        : 'scale-100'
                    }
                  `}
                  style={{ cursor: "none" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />
              </motion.div>
              {/* Hover Image (conditionally rendered) */}
              {hoverImage && (
                <motion.div 
                  className="absolute inset-0"
                  animate={{ 
                    opacity: isImageHovered ? 1 : 0 // Only appears on image hover
                  }}
                  transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                  <Image
                    src={hoverImage}
                    alt={`${title} - hover state`}
                    fill
                    className="object-contain transition-transform duration-700"
                    style={{ cursor: "none" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={false}
                  />
                </motion.div>
              )}
              {/* Dark overlay for better pill visibility */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 pointer-events-none"
                animate={{ 
                  opacity: (isImageHovered || isCardHovered) ? 0.7 : 0.4 
                }}
                transition={{ duration: 0.4 }}
                style={{ cursor: "none" }}
              />
              {/* Pills overlay - positioned in top area of image */}
              <motion.div
                className="absolute top-4 left-4 right-4 z-20"
                variants={tagsContainerVariants}
              >
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <motion.div
                      key={tag}
                      variants={tagItemVariants}
                      className="flex-shrink-0"
                    >
                      <Badge
                        variant="secondary"
                        className="text-xs pointer-events-none whitespace-nowrap project-card-pill"
                      >
                        <FlowingText text={tag} className="text-xs font-medium flowing-text" />
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              {/* Invisible overlay to ensure hover detection */}
              <div className="absolute inset-0 z-10" data-project-image="true" style={{ cursor: "none" }} />
            </div>
            <CardContent className="p-6 relative">
              {/* Single-line title with proper truncation */}
              <div className="mb-3">
                <h3 className="title-primary text-xl font-medium group-hover:text-foreground/90 transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis">
                  {title}
                </h3>
              </div>

              {/* Description and button on the same row, aligned bottom, with button at far right */}
              <div className="flex items-end justify-between mb-0 min-h-[2.5rem] gap-4">
                <p className="text-muted-foreground line-clamp-2 mb-0 flex-1 flex items-center">
                  {description}
                </p>
                <RefinedButton 
                  size="sm" 
                  intensity={0.15}
                  className="text-xs whitespace-nowrap pointer-events-none self-end"
                >
                  <span className="flex items-center gap-1">
                    View Project
                    <ArrowRight className="w-3 h-3 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                  </span>
                </RefinedButton>
              </div>
            </CardContent>
          </Card>
        </Link>
        </motion.div>
    </RefinedMagneticEffect>
  )
}
