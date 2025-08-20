"use client"

import { useEffect, useRef, useState } from 'react'

interface UseVideoViewportOptions {
  threshold?: number
  rootMargin?: string
  playOnce?: boolean
}

export const useVideoViewport = (options: UseVideoViewportOptions = {}) => {
  const { threshold = 0.5, rootMargin = '0px', playOnce = true } = options
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            if (!hasPlayed || !playOnce) {
              video.play().catch((error) => {
                console.log('Video play failed:', error)
              })
              if (playOnce) {
                setHasPlayed(true)
              }
            }
          } else {
            setIsInView(false)
            video.pause()
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(video)

    return () => {
      observer.unobserve(video)
    }
  }, [threshold, rootMargin, playOnce, hasPlayed])

  return { videoRef, isInView }
}
