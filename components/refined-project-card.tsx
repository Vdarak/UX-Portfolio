"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion, Variants } from "framer-motion"

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
  tags: string[]
  href: string
  className?: string
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
  tags,
  href,
  className,
}: RefinedProjectCardProps) {
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
          <Card className="overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:shadow-black/5 dark:group-hover:shadow-white/5">
            {/* Enhanced project image container */}
            <div className="relative overflow-hidden aspect-[4/3] bg-black flex items-center justify-center" data-project-image="true" style={{ cursor: "none" }}>
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105"
                style={{ cursor: "none" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
              
              {/* Dark overlay for better pill visibility */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{ cursor: "none" }}
              />

              {/* Pills overlay - positioned in top area of image */}
              <motion.div
                className="absolute top-4 left-4 right-4 z-20"
                variants={tagsContainerVariants}
              >
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
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
                <h3 className="text-xl font-medium group-hover:text-foreground/90 transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis">
                  {title}
                </h3>
              </div>
              
              <p className="mb-4 text-muted-foreground line-clamp-2">{description}</p>

              {/* View Project button positioned at bottom right */}
              <div className="flex justify-end">
                <RefinedButton 
                  size="sm" 
                  intensity={0.15}
                  className="text-xs whitespace-nowrap pointer-events-none"
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
