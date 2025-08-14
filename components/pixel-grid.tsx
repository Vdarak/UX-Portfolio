"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface PixelGridExhibitProps {
  className?: string
  width?: number
  height?: number
}

/**
 * PixelGridExhibit: UX Typography Theater
 * 
 * A curated dance of UX-relevant terms and symbols across a pixel grid—
 * featuring "HI", "UX", "UI", hearts, magnifying glasses, and other meaningful
 * icons that tell the story of user experience design. Each symbol pauses
 * dramatically to let its meaning resonate, creating a digital conversation
 * in pure typographic minimalism.
 */
export function PixelGridExhibit({ 
  className = "",
  width = 400,
  height = 400
}: PixelGridExhibitProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const p5InstanceRef = useRef<any>(null)

  useEffect(() => {
    // Dynamically import p5 to avoid SSR issues
    import('p5').then((p5Module) => {
      const p5 = p5Module.default

      const sketch = (p: any) => {
  // Pixel grid configuration - optimized for 8x8 letters and 8x8 symbols
        const aspectRatio = width / height
  // Use a grid that's comfortable for 8x8 glyphs with spacing and 2-letter words
  const minCols = 17 // Minimum width to fit two 8x8 letters (8+1+8) comfortably
  const maxCols = 32 // Maximum to keep pixels readable
  const cols = Math.max(minCols, Math.min(maxCols, Math.floor(width / 25))) // ~25px per pixel for better symbol detail
  const rows = Math.max(8, Math.floor(cols / aspectRatio)) // Maintain aspect ratio, min 8 rows for 8x8 glyphs
        const pixelSize = Math.min(width / cols, height / rows)
        const pixelRadius = Math.max(2, Math.floor(pixelSize * 0.35)) // Slightly smaller radius for finer detail
        
        // Dynamic letter animation system
        let frameCount = 0
        const fastSpeed = 6 // frames for random letters (slightly slower for readability)
        const slowSpeed = 60 // frames for meaningful words (longer pause to appreciate)
        const symbolSpeed = 75 // even longer for symbols (they're special!)
        
        // 8x8 pixel patterns for letters and symbols (from JSON)
        const letterPatterns: { [key: string]: number[][] } = {
          // Uppercase letters only (8x8)
          'A': [
            [0, 0, 1, 1, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 0, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1]
          ],
          'B': [
            [1, 1, 1, 1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [0, 1, 1, 1, 1, 1, 1, 0]
          ],
          'C': [
            [0, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 0, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 0]
          ],
          'D': [
            [1, 1, 1, 1, 1, 1, 0, 0],
            [1, 0, 0, 0, 0, 0, 1, 0],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0],
            [1, 1, 1, 1, 1, 1, 0, 0]
          ],
          'E': [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1]
          ],
          'F': [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0]
          ],
          'G': [
            [0, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 0, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 0, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 0]
          ],
          'H': [
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1]
          ],
          'I': [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1]
          ],
          'J': [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 0, 0, 0]
          ],
          'K': [
            [1, 0, 0, 0, 0, 0, 1, 0],
            [1, 0, 0, 0, 0, 1, 0, 0],
            [1, 0, 0, 0, 1, 0, 0, 0],
            [1, 0, 0, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0, 0, 0],
            [1, 0, 0, 1, 0, 0, 0, 0],
            [1, 0, 0, 0, 1, 0, 0, 0],
            [1, 0, 0, 0, 0, 1, 0, 0]
          ],
          'L': [
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 0, 0]
          ],
          'M': [
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 0, 0, 0, 0, 1, 1],
            [1, 1, 1, 0, 0, 1, 1, 1],
            [1, 0, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0]
          ],
          'N': [
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 1, 1]
          ],
          'O': [
            [0, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 0, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 0, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 0]
          ],
          'P': [
            [1, 1, 1, 1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0]
          ],
          'Q': [
            [0, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 0, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 1, 0, 1],
            [0, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 1]
          ],
          'R': [
            [1, 1, 1, 1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 0],
            [1, 0, 0, 0, 1, 0, 0, 0],
            [1, 0, 0, 0, 0, 1, 0, 0],
            [1, 0, 0, 0, 0, 0, 1, 0],
            [1, 0, 0, 0, 0, 0, 0, 1]
          ],
          'S': [
            [0, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 0, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 0, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 0]
          ],
          'T': [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0]
          ],
          'U': [
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 0, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 0]
          ],
          'V': [
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 0, 0, 0, 0, 1, 1],
            [0, 1, 0, 0, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0]
          ],
          'W': [
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 0, 1],
            [1, 1, 1, 0, 0, 1, 1, 1],
            [1, 1, 0, 0, 0, 0, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1]
          ],
          'X': [
            [1, 0, 0, 0, 0, 0, 0, 1],
            [0, 1, 0, 0, 0, 0, 1, 0],
            [0, 0, 1, 0, 0, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 1, 0, 0],
            [0, 1, 0, 0, 0, 0, 1, 0],
            [1, 0, 0, 0, 0, 0, 0, 1]
          ],
          'Y': [
            [1, 0, 0, 0, 0, 0, 0, 1],
            [0, 1, 0, 0, 0, 0, 1, 0],
            [0, 0, 1, 0, 0, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0]
          ],
          'Z': [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1]
          ],
          // Symbols for UX and cute elements (8x8 grid)
          '♥': [ // Heart
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
          ],
          '🔍': [ // Magnifying glass
            [0, 1, 1, 1, 1, 1, 0, 0],
            [1, 0, 0, 0, 0, 0, 1, 0],
            [1, 0, 0, 0, 0, 0, 1, 0],
            [1, 0, 0, 0, 0, 0, 1, 0],
            [0, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0]
          ],
          '★': [ // Star
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 1, 1, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
          ],
          '◯': [ // Circle/User persona
            [0, 0, 1, 1, 1, 1, 0, 0],
            [0, 1, 0, 0, 0, 0, 1, 0],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [0, 1, 0, 0, 0, 0, 1, 0],
            [0, 0, 1, 1, 1, 1, 0, 0]
          ],
          '□': [ // Square/Wireframe
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1]
          ],
          '⟳': [ // Double Diamond
            [0, 0, 1, 0, 0, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 0, 1, 0, 0]
          ],
          '☺': [ // Smiley face
            [0, 1, 1, 1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [0, 1, 1, 1, 1, 1, 1, 0]
          ],
          '▲': [ // Arrow up/Growth
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0]
          ],
          '?': [ // Question mark
            [0, 1, 1, 1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0]
          ],
          '!': [ // Exclamation mark
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0]
          ],
          '⚡': [ // Lightning bolt
            [0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
          ],
          '💡': [ // Light bulb (for ideas/inspiration)
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 1, 0, 0],
            [0, 1, 0, 0, 0, 0, 1, 0],
            [0, 1, 0, 0, 0, 0, 1, 0],
            [0, 0, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0]
          ]
        }
        
        // Curated sequence of UX-relevant terms and cute symbols
        const meaningfulSequence = [
          'HI',   // Greeting
          'UX',   // User Experience
          '?',    // Questions (research mindset)
          'UI',   // User Interface
          '♥',    // Love for design
          'IA',   // Information Architecture
          '🔍',   // Research
          'RS',   // Research
          '!',    // Eureka moments
          'IT',   // Information Technology
          '💡',   // Light bulb/Ideas
          '⚡',   // Lightning/Inspiration
          '★',    // Excellence
          'XO',   // Hugs and kisses (cute)
          'CX',   // Customer Experience
          '☺',    // Happy users
          'PX',   // Product Experience
          '◯',    // User persona
          'UX',   // Return to UX
          '!',    // Excitement about design
          '▲',    // Growth/improvement
          '□',    // Wireframes
          '⟳',    // Iteration
          '⚡',   // Another lightning moment
          '?',    // Always questioning
          'VD',   // Visual Design
          'HI'    // Circle back to greeting
        ]
        
        // All letters for occasional random display (uppercase only)
        const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        const allSymbols = ['♥', '🔍', '★', '◯', '□', '⟳', '☺', '▲', '?', '!', '⚡', '💡']
        
        // Animation state
        let currentDisplay = 'HI' // Start with HI
        let framesSinceChange = 0
        let isShowingMeaningfulWord = true
        let sequenceIndex = 0 // Track position in meaningful sequence
        
        // Generate next display content
        const getNextDisplay = () => {
          // 70% chance to show next item in curated sequence, 30% random
          const shouldShowSequence = Math.random() < 0.7
          
          if (shouldShowSequence) {
            sequenceIndex = (sequenceIndex + 1) % meaningfulSequence.length
            const nextItem = meaningfulSequence[sequenceIndex]
            return { text: nextItem, isMeaningful: true }
          } else {
            // Show random letter or symbol
            const shouldShowSymbol = Math.random() < 0.3
            if (shouldShowSymbol) {
              const randomSymbol = allSymbols[Math.floor(Math.random() * allSymbols.length)]
              return { text: randomSymbol, isMeaningful: false }
            } else {
              const randomLetter = allLetters[Math.floor(Math.random() * allLetters.length)]
              return { text: randomLetter, isMeaningful: false }
            }
          }
        }
        
        // Update animation state
        const updateLetterAnimation = () => {
          framesSinceChange++
          
          // Determine required frames based on content type
          let requiredFrames = fastSpeed
          if (isShowingMeaningfulWord) {
            // Check if current display is a symbol for extra long pause
            const isSymbol = allSymbols.includes(currentDisplay)
            requiredFrames = isSymbol ? symbolSpeed : slowSpeed
          }
          
          if (framesSinceChange >= requiredFrames) {
            const next = getNextDisplay()
            currentDisplay = next.text
            isShowingMeaningfulWord = next.isMeaningful
            framesSinceChange = 0
          }
        }
        
        // Convert current letters to pixel coordinates
        const getLetterPixels = (): number[][] => {
          const pixels: number[][] = []
          const letters = currentDisplay.split('')
          
          // Determine if we're dealing with symbols or letters
          const isSymbol = allSymbols.includes(currentDisplay)
          
          if (isSymbol) {
            // Handle single 8x8 symbol
            const pattern = letterPatterns[currentDisplay]
            if (!pattern) return pixels
            
            const symbolWidth = 8
            const symbolHeight = 8
            
            // Center the symbol in the grid
            const startX = Math.floor((cols - symbolWidth) / 2)
            const startY = Math.floor((rows - symbolHeight) / 2)
            
            for (let y = 0; y < pattern.length; y++) {
              for (let x = 0; x < pattern[y].length; x++) {
                if (pattern[y][x] === 1) {
                  const finalX = startX + x
                  const finalY = startY + y
                  
                  // Only add if within grid bounds
                  if (finalX >= 0 && finalX < cols && finalY >= 0 && finalY < rows) {
                    // Symbols get enhanced intensity variation for more dramatic effect
                    const baseIntensity = 0.95
                    const variation = Math.sin(frameCount * 0.12 + x + y) * 0.15
                    const intensity = Math.max(0.75, Math.min(1, baseIntensity + variation))
                    
                    pixels.push([finalX, finalY, intensity])
                  }
                }
              }
            }
          } else {
            // Handle 8x8 letters
            const letterWidth = 8
            const letterHeight = 8
            const spacing = 1
            const totalWidth = letters.length * letterWidth + (letters.length - 1) * spacing
            
            // Center the text in the grid
            const startX = Math.floor((cols - totalWidth) / 2)
            const startY = Math.floor((rows - letterHeight) / 2)
            
            letters.forEach((letter, letterIndex) => {
              const pattern = letterPatterns[letter]
              if (!pattern) return
              
              const letterX = startX + letterIndex * (letterWidth + spacing)
              
              for (let y = 0; y < pattern.length; y++) {
                for (let x = 0; x < pattern[y].length; x++) {
                  if (pattern[y][x] === 1) {
                    const finalX = letterX + x
                    const finalY = startY + y
                    
                    // Only add if within grid bounds
                    if (finalX >= 0 && finalX < cols && finalY >= 0 && finalY < rows) {
                      // Letters get subtle intensity variation
                      const baseIntensity = isShowingMeaningfulWord ? 0.95 : 0.85
                      const variation = Math.sin(frameCount * 0.08 + x + y) * 0.1
                      const intensity = Math.max(0.7, Math.min(1, baseIntensity + variation))
                      
                      pixels.push([finalX, finalY, intensity])
                    }
                  }
                }
              }
            })
          }
          
          return pixels
        }

        // Color scheme detection (improved heuristic)
        const isDarkTheme = () => {
          // Check multiple indicators for dark mode
          const body = document.body
          const html = document.documentElement
          
          // Check for dark class on html or body
          if (html.classList.contains('dark') || body.classList.contains('dark')) {
            return true
          }
          
          // Check computed background color
          const bgColor = window.getComputedStyle(body).backgroundColor
          if (bgColor.includes('rgb(')) {
            const rgb = bgColor.match(/\d+/g)
            if (rgb && rgb.length >= 3) {
              const [r, g, b] = rgb.map(Number)
              // If average RGB is low, it's likely dark mode
              return (r + g + b) / 3 < 128
            }
          }
          
          // Check for common dark mode indicators
          return bgColor.includes('0') || bgColor.includes('rgb(0') || 
                 window.matchMedia('(prefers-color-scheme: dark)').matches
        }

        p.setup = () => {
          p.createCanvas(width, height)
          p.noStroke()
          // No background - let the negative space show through
        }

        p.draw = () => {
          const isDark = isDarkTheme()
          // Clear canvas to show negative space (component background)
          p.clear()
          
          frameCount++
          
          // Update letter animation (instant transitions, no frame-based delays)
          updateLetterAnimation()
          
          const currentLetterPixels = getLetterPixels()
          
          // Draw pixel grid
          for (let x = 0; x < cols; x++) {
            for (let y = 0; y < rows; y++) {
              // Check if this pixel should be part of the letter display
              const letterPixel = currentLetterPixels.find((pixel: any) => pixel[0] === x && pixel[1] === y)
              const isLetterPixel = !!letterPixel
              const intensity = letterPixel ? letterPixel[2] : 0
              
              // Calculate pixel position
              const pixelX = x * pixelSize + (pixelSize - pixelRadius * 2) / 2
              const pixelY = y * pixelSize + (pixelSize - pixelRadius * 2) / 2
              
              if (isLetterPixel) {
                // Draw letter pixel with intensity-based alpha
                const letterColor = isDark ? 240 : 15 // Soft white in dark mode, soft black in light
                const alpha = Math.floor(255 * intensity)
                p.fill(letterColor, letterColor, letterColor, alpha)
                p.rect(pixelX, pixelY, pixelRadius * 2, pixelRadius * 2, 4) // Slightly rounded corners
              }
              // Base grid pixels removed - only show active letter pixels
            }
          }
        }
      }

      // Create the p5 instance
      if (containerRef.current) {
        p5InstanceRef.current = new p5(sketch, containerRef.current)
      }
    })

    // Cleanup function
    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove()
      }
    }
  }, [width, height])

  return (
    <motion.div 
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div 
        ref={containerRef}
        className="w-full h-full"
        style={{ width, height }}
      />
    </motion.div>
  )
}
