"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MetricHubHeroProps {
  className?: string;
}

export function MetricHubHero({ className }: MetricHubHeroProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("w-full min-h-screen relative overflow-hidden", className)}
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Central vertical light beam */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-400/60 to-transparent opacity-80"></div>
        
        {/* Additional vertical light effects */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-white/40 to-transparent blur-sm"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-transparent via-blue-300/20 to-transparent blur-md"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-full bg-gradient-to-b from-transparent via-blue-200/10 to-transparent blur-xl"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-full bg-gradient-to-b from-transparent via-blue-100/5 to-transparent blur-2xl"></div>
        
        {/* Radial glow effect around the center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 border-b border-slate-700/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="text-white font-semibold text-lg">
                MetricHub
              </div>
              <nav className="hidden md:flex items-center gap-8 text-sm">
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Product</a>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Templates</a>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Use Cases</a>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Docs</a>
              </nav>
            </div>
            <button className="bg-slate-700/50 border border-slate-600/50 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-600/50 transition-colors backdrop-blur-sm">
              Start 14 day trial
            </button>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-tight">
                  Track your key{" "}
                  <br className="hidden md:block" />
                  metrics in real time
                </h1>
                
                {/* Decorative underlines */}
                <div className="flex gap-4 mt-8">
                  <div className="w-16 h-1 bg-slate-600 rounded-full"></div>
                  <div className="w-24 h-1 bg-slate-500 rounded-full"></div>
                  <div className="w-12 h-1 bg-slate-700 rounded-full"></div>
                </div>
              </motion.div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6 text-right"
              >
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-md">
                  MetricHub shows you live data for your business, all in one place, always up to date.
                </p>
                
                <button className="bg-slate-700/50 border border-slate-600/50 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-600/50 transition-colors backdrop-blur-sm">
                  Start 14 day trial
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px'
        }}></div>
      </div>
    </motion.div>
  );
}
