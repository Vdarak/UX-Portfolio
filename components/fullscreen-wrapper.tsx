"use client";

import React, { useState, useEffect, useRef } from "react";
import { Maximize2, Minimize2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FullscreenWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function FullscreenWrapper({ children, className }: FullscreenWrapperProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    if (isFullscreen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isFullscreen]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      {/* Normal view with fullscreen button */}
      <div ref={containerRef} className={cn("relative", className)}>
        {/* Fullscreen Button */}
        <motion.button
          onClick={toggleFullscreen}
          className="absolute -top-2 -right-2 z-20 bg-white border border-gray-200 shadow-lg rounded-lg p-2 hover:bg-gray-50 hover:shadow-xl transition-all duration-200 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Maximize2 className="w-4 h-4 text-gray-600 group-hover:text-gray-900" />
        </motion.button>
        
        {children}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/10 backdrop-blur-sm"
          >
            {/* Fullscreen Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full h-full p-4 md:p-6 lg:p-8"
            >
              {/* Control Bar */}
              <div className="absolute top-4 right-4 z-60 flex items-center gap-2">
                <motion.button
                  onClick={toggleFullscreen}
                  className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg rounded-lg p-2 hover:bg-white hover:shadow-xl transition-all duration-200 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Minimize2 className="w-4 h-4 text-gray-600 group-hover:text-gray-900" />
                </motion.button>
                <motion.button
                  onClick={() => setIsFullscreen(false)}
                  className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg rounded-lg p-2 hover:bg-white hover:shadow-xl transition-all duration-200 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-4 h-4 text-gray-600 group-hover:text-gray-900" />
                </motion.button>
              </div>

              {/* Fullscreen Content */}
              <div className="w-full h-full overflow-auto">
                <div className="w-full h-full shadow-2xl">
                  {children}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
