"use client"

import { useEffect, useRef } from "react"

export function AnimatedFavicon() {
  const angleRef = useRef(0)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    // Create offscreen canvas
    const canvas = document.createElement("canvas")
    canvas.width = 32
    canvas.height = 32
    canvasRef.current = canvas

    // Load the favicon image
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = "/logo-favicon.svg"
    imageRef.current = img

    img.onload = () => {
      // Start animation once image is loaded
      const updateFavicon = () => {
        const ctx = canvas.getContext("2d")
        if (!ctx || !imageRef.current) return

        // Clear canvas
        ctx.clearRect(0, 0, 32, 32)

        // Save state, rotate around center, draw, restore
        ctx.save()
        ctx.translate(16, 16)
        ctx.rotate((angleRef.current * Math.PI) / 180)
        ctx.drawImage(imageRef.current, -16, -16, 32, 32)
        ctx.restore()

        // Update favicon
        const link = document.querySelector("link[rel='icon']") as HTMLLinkElement
        if (link) {
          link.href = canvas.toDataURL("image/png")
        }

        // At 50ms intervals, that's 72 * 0.05 = 3.6 degrees per frame
        angleRef.current = (angleRef.current + 3.6) % 360
      }

      // Update every 50ms for smooth animation
      const interval = setInterval(updateFavicon, 50)

      return () => clearInterval(interval)
    }
  }, [])

  return null
}
