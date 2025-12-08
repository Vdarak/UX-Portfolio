"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { ArrowUpRight, Move } from "lucide-react"

interface Polaroid {
  id: string
  title: string
  image: string
  link: string
  x: number
  y: number
  rotation: number
  zIndex: number
}

const initialPolaroids: Polaroid[] = [
  {
    id: "1",
    title: "BlackJack 21",
    image: "/fun/bj.png",
    link: "https://bjgame.vercel.app",
    x: 800,
    y: 400,
    rotation: -5,
    zIndex: 1,
  },
  {
    id: "2",
    title: "Tribe App Redesign",
    image: "/fun/tribe.png",
    link: "https://tribe-redesign.vercel.app",
    x: 450,
    y: 100,
    rotation: 3,
    zIndex: 2,
  },
  {
    id: "3",
    title: "Fresh Look Refinishing",
    image: "/fun/fresh-look.png",
    link: "https://freshlookrefinishing.vercel.app",
    x: 1000,
    y: 500,
    rotation: -2,
    zIndex: 3,
  },
  {
    id: "4",
    title: "Colorado Carpet Care",
    image: "/fun/colorado-carpet-care.png",
    link: "https://coloradocarpetcareco.vercel.app",
    x: 680,
    y: 600,
    rotation: 6,
    zIndex: 4,
  },
  {
    id: "5",
    title: "Paper Shaders",
    image: "/fun/shader.png",
    link: "https://shader-pg.vercel.app",
    x: 1200,
    y: 150,
    rotation: -4,
    zIndex: 5,
  }
]

export default function FunPage() {
  const [polaroids, setPolaroids] = useState<Polaroid[]>(initialPolaroids)
  const [highestZ, setHighestZ] = useState(initialPolaroids.length)
  const [canvasOffset, setCanvasOffset] = useState({ x: 0, y: 0 })
  const [isDraggingCanvas, setIsDraggingCanvas] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const bringToFront = (id: string) => {
    const newZ = highestZ + 1
    setHighestZ(newZ)
    setPolaroids((prev) => prev.map((p) => (p.id === id ? { ...p, zIndex: newZ } : p)))
  }

  const handlePolaroidDragEnd = (id: string, x: number, y: number) => {
    setPolaroids((prev) => prev.map((p) => (p.id === id ? { ...p, x, y } : p)))
  }

  const handleCanvasMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".polaroid")) return
    setIsDraggingCanvas(true)
    setDragStart({ x: e.clientX - canvasOffset.x, y: e.clientY - canvasOffset.y })
  }

  const handleCanvasMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      // Move opposite direction with subtle intensity
      const parallaxX = (centerX - mouseX) * 0.02
      const parallaxY = (centerY - mouseY) * 0.02
      setParallaxOffset({ x: parallaxX, y: parallaxY })
    }

    if (!isDraggingCanvas) return
    setCanvasOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    })
  }

  const handleCanvasMouseUp = () => {
    setIsDraggingCanvas(false)
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? -0.1 : 0.1
    setZoom((prev) => Math.min(Math.max(prev + delta, 0.8), 1.4))
  }

  useEffect(() => {
    const handleMouseUp = () => setIsDraggingCanvas(false)
    window.addEventListener("mouseup", handleMouseUp)
    return () => window.removeEventListener("mouseup", handleMouseUp)
  }, [])

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Header */}
      <div className="fixed top-24 left-6 md:left-12 z-30 mix-blend-difference">
        <h1 className="font-sans text-4xl md:text-5xl text-white mb-2">Fun Projects</h1>
        <p className="font-mono text-xs text-white/70 max-w-xs">
          Drag polaroids around. Scroll to zoom. Pan by dragging empty space.
        </p>
      </div>

      {/* Pan hint */}
      <div className="fixed bottom-6 left-6 md:left-12 z-30 flex items-center gap-2 text-white mix-blend-difference">
        <Move className="w-4 h-4" />
        <span className="font-mono text-xs">Drag to pan</span>
      </div>

      {/* Infinite Canvas */}
      <div
        ref={containerRef}
        className="w-full h-screen cursor-grab active:cursor-grabbing"
        onMouseDown={handleCanvasMouseDown}
        onMouseMove={handleCanvasMouseMove}
        onMouseUp={handleCanvasMouseUp}
        onWheel={handleWheel}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: `${40 * zoom}px ${40 * zoom}px`,
          backgroundPosition: `${canvasOffset.x + parallaxOffset.x}px ${canvasOffset.y + parallaxOffset.y}px`,
        }}
      >
        {/* Canvas transform layer with zoom and parallax */}
        <div
          className="relative w-full h-full transition-transform duration-100 ease-out"
          style={{
            transform: `translate(${canvasOffset.x + parallaxOffset.x}px, ${canvasOffset.y + parallaxOffset.y}px) scale(${zoom})`,
            transformOrigin: "center center",
          }}
        >
          {polaroids.map((polaroid) => (
            <motion.div
              key={polaroid.id}
              className="polaroid absolute cursor-grab active:cursor-grabbing select-none"
              initial={{ x: polaroid.x, y: polaroid.y }}
              style={{
                zIndex: polaroid.zIndex,
                rotate: `${polaroid.rotation}deg`,
              }}
              drag
              dragMomentum={false}
              dragElastic={0}
              onDragStart={() => bringToFront(polaroid.id)}
              onDrag={(_, info) => {}}
              onDragEnd={(_, info) => {
                const newX = polaroid.x + info.offset.x / zoom
                const newY = polaroid.y + info.offset.y / zoom
                handlePolaroidDragEnd(polaroid.id, newX, newY)
              }}
              whileDrag={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.4)" }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "tween", duration: 0 }}
            >
              <div className="bg-white p-1.5 pb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="bg-black relative overflow-hidden">
                  <img
                    src={polaroid.image || "/placeholder.svg"}
                    alt={polaroid.title}
                    className="w-auto h-auto max-w-[160px] max-h-[180px] object-cover pointer-events-none select-none"
                    draggable={false}
                  />
                </div>

                {/* Title & Link */}
                <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-neutral-700 truncate max-w-[120px]">
                    {polaroid.title}
                  </span>
                  <a
                    href={polaroid.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-0.5 hover:bg-neutral-100 rounded transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
