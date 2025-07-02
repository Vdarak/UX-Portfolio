"use client"

import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"
import CountUp from "./count-up"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [showPercentage, setShowPercentage] = useState(false)
  const [countComplete, setCountComplete] = useState(false)
  const [showCircularProgress, setShowCircularProgress] = useState(false)
  const [showCheckmark, setShowCheckmark] = useState(false)
  const [showCompletionText, setShowCompletionText] = useState(false)
  const [showClickPrompt, setShowClickPrompt] = useState(false)

  // Spring animation for circular progress to match CountUp
  const progressMotionValue = useMotionValue(552.92) // Start with full offset (empty circle)
  const duration = 2.0
  const damping = 20 + 40 * (1 / duration)
  const stiffness = 100 * (1 / duration)
  
  const progressSpring = useSpring(progressMotionValue, {
    damping,
    stiffness,
  })

  useEffect(() => {
    // Show percentage after a brief delay
    const percentageTimer = setTimeout(() => {
      setShowPercentage(true)
      // Start the circular progress animation with the same timing as CountUp
      progressMotionValue.set(0) // Fill the circle
    }, 300)
    
    return () => {
      clearTimeout(percentageTimer)
    }
  }, [progressMotionValue])

  // Handle completion after count reaches 100%
  const handleCountEnd = () => {
    setCountComplete(true)
    
    // Start the circular progress animation
    setTimeout(() => {
      setShowCircularProgress(true)
    }, 200)
    
    // Show checkmark after circular animation
    setTimeout(() => {
      setShowCheckmark(true)
    }, 1000)
    
    // Show completion text
    setTimeout(() => {
      setShowCompletionText(true)
    }, 1500)
    
    // Show click prompt
    setTimeout(() => {
      setShowClickPrompt(true)
    }, 2000)
  }

  const handleClick = () => {
    if (showClickPrompt) {
      onLoadingComplete()
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background cursor-pointer"
        onClick={handleClick}
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          scale: 1.1,
          filter: "blur(10px)"
        }}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.46, 0.45, 0.94] 
        }}
      >
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/5 opacity-40" />
        
        {/* Main loading content - Centered container */}
        <div className="relative flex flex-col items-center justify-center min-h-screen w-full">
          {/* Percentage counter with circular progress - Fixed positioning */}
          <div className="relative flex items-center justify-center">
            <motion.div
              className="relative flex items-center justify-center w-48 h-48 md:w-56 md:h-56"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showPercentage ? 1 : 0, y: showPercentage ? 0 : 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Initial circular progress indicator (before 100%) */}
              <motion.svg
                className="absolute inset-0 w-full h-full -rotate-90"
                initial={{ opacity: 1 }}
                animate={{ 
                  opacity: showCircularProgress ? 0 : (showPercentage ? 1 : 0)
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Background circle */}
                <circle
                  cx="50%"
                  cy="50%"
                  r="88"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary/20"
                />
                
                {/* Progress circle that fills as numbers count */}
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="88"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-primary/60"
                  style={{
                    strokeDasharray: "552.92", // 2 * π * 88
                    strokeDashoffset: progressSpring, // Use spring value for perfect sync
                  }}
                />
              </motion.svg>

              {/* Completion circular progress ring */}
              <motion.svg
                className="absolute inset-0 w-full h-full -rotate-90"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ 
                  opacity: showCircularProgress ? 1 : 0,
                  scale: showCircularProgress ? 1 : 1
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <circle
                  cx="50%"
                  cy="50%"
                  r="88"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary/20"
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="88"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-primary"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: showCircularProgress ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{
                    strokeDasharray: "552.92", // 2 * π * 88
                  }}
                />
              </motion.svg>

              {/* Counter/Checkmark container - Centered */}
              <div className="relative z-10 flex items-center justify-center w-full h-full">
                {/* Percentage counter */}
                <motion.div
                  className="text-6xl md:text-7xl font-light tracking-tight text-foreground/90 tabular-nums text-center flex items-center justify-center"
                  animate={{ 
                    opacity: showCheckmark ? 0 : 1,
                    scale: showCheckmark ? 0.8 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {showPercentage && (
                    <CountUp
                      from={0}
                      to={100}
                      duration={2.0}
                      delay={0}
                      className="inline-block"
                      onEnd={handleCountEnd}
                      startWhen={showPercentage}
                    />
                  )}
                </motion.div>

                {/* Checkmark */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: showCheckmark ? 1 : 0,
                    scale: showCheckmark ? 1 : 0
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <motion.svg
                    className="w-16 h-16 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: showCheckmark ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </motion.svg>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Completion Text */}
          <div className="relative w-full flex justify-center mt-16">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showCompletionText ? 1 : 0, y: showCompletionText ? 0 : 20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.p 
                className="text-xs font-mono tracking-widest text-muted-foreground/60 uppercase mb-4"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                LOADING COMPLETE
              </motion.p>
              
              <motion.p
                className="text-lg md:text-xl text-foreground/80 font-light tracking-wide"
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: showClickPrompt ? 1 : 0, 
                  y: showClickPrompt ? 0 : 10 
                }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Click to start the experience!
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Vedant signature at actual bottom of screen */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: showPercentage ? 0.6 : 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-sm text-muted-foreground/60 font-light tracking-wide">
            VEDANT DARAK
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
