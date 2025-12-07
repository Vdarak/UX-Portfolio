"use client"

import { useScroll, useTransform, useSpring } from "framer-motion"
import { useState, useEffect } from "react"
import {
  SentientSphere,
  defaultWaypoints,
  defaultSphereSettings,
  type CameraWaypoint,
  type SphereSettings,
} from "./sentient-sphere"

export function GlobalSphere() {
  const { scrollYProgress } = useScroll()
  const [scrollValue, setScrollValue] = useState(0)
  const [waypoints, setWaypoints] = useState<CameraWaypoint[]>(defaultWaypoints)
  const [sphereSettings, setSphereSettings] = useState<SphereSettings>(defaultSphereSettings)

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  })

  const progress = useTransform(smoothProgress, (v) => v)

  useEffect(() => {
    const unsubscribe = progress.on("change", (v) => {
      setScrollValue(v)
    })
    return unsubscribe
  }, [progress])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <SentientSphere scrollProgress={scrollValue} waypoints={waypoints} showDebug={false} settings={sphereSettings} />
    </div>
  )
}
