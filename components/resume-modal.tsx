"use client"

import { useState } from "react"
import { Download, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { RefinedButton } from "@/components/refined-button"
import { RefinedMagneticEffect } from "@/components/refined-magnetic-effect"

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
  resumeUrl?: string
}

/**
 * ResumeModal
 * 
 * A modal component that displays a PDF resume in an iframe with controls.
 * Features smooth animations, backdrop blur, and action buttons for download/external view.
 */
export function ResumeModal({ isOpen, onClose, resumeUrl = "/images/Vedant-Resume.pdf" }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal Container - PDF Only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 flex flex-col bg-background border border-border rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* PDF Viewer - Full Modal */}
            <div className="flex-1 relative">
              <iframe
                src={`${resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                className="w-full h-full border-0 rounded-2xl"
                title="Resume PDF Viewer"
                loading="lazy"
                onError={(e) => {
                  console.error('PDF loading error:', e)
                }}
              />
              
              {/* Fallback message when PDF doesn't exist */}
              <div className="absolute inset-0 flex items-center justify-center bg-muted/10 rounded-2xl pointer-events-none">
                <div className="text-center text-muted-foreground">
                  <p className="text-lg font-medium mb-2">Resume PDF</p>
                  <p className="text-sm">Loading PDF viewer...</p>
                </div>
              </div>
              
              {/* Floating Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2">
                {/* Download Button */}
                <RefinedMagneticEffect intensity={0.15} range={40}>
                  <RefinedButton 
                    variant="outline" 
                    size="sm" 
                    intensity={0.2}
                    onClick={() => {
                      const link = document.createElement('a')
                      link.href = resumeUrl
                      link.download = 'Vedant_Darak_Resume.pdf'
                      link.click()
                    }}
                    className="group"
                  >
                    <Download className="w-4 h-4 mr-2 transition-transform duration-300 ease-out group-hover:scale-110" />
                    Download
                  </RefinedButton>
                </RefinedMagneticEffect>

                {/* Open in New Tab Button */}
                <RefinedMagneticEffect intensity={0.15} range={40}>
                  <RefinedButton 
                    variant="outline" 
                    size="sm" 
                    intensity={0.2}
                    onClick={() => window.open(resumeUrl, '_blank')}
                    className="group"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 transition-transform duration-300 ease-out group-hover:scale-110" />
                    Open
                  </RefinedButton>
                </RefinedMagneticEffect>

                {/* Close Button */}
                <RefinedMagneticEffect intensity={0.15} range={40}>
                  <RefinedButton 
                    variant="outline" 
                    size="sm" 
                    intensity={0.2}
                    onClick={onClose}
                  >
                    Close
                  </RefinedButton>
                </RefinedMagneticEffect>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
