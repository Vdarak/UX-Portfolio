"use client"

import { useState, useEffect } from "react"

interface DebugCursorInfoProps {
  x: number | null
  y: number | null
}

export default function DebugCursorInfo({ x, y }: DebugCursorInfoProps) {
  const [showInfo, setShowInfo] = useState(false)

  useEffect(() => {
    if (x !== null && y !== null) {
      setShowInfo(true)
    } else {
      setShowInfo(false)
    }
  }, [x, y])

  if (!showInfo) {
    return null
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        color: "white",
        padding: "5px",
        zIndex: 1000,
      }}
    >
      Cursor Position: X={x}, Y={y}
    </div>
  )
}
