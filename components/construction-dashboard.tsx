"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { 
  Bell, 
  BarChart2, 
  Expand, 
  Users, 
  TrendingUp, 
  ChevronUp,
  ChevronDown,
  ArrowUpRight,
  LineChart
} from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface ConstructionDashboardProps {
  className?: string;
}

export function ConstructionDashboard({ className }: ConstructionDashboardProps) {
  const isMobile = useIsMobile();
  
  // Data for charts and metrics
  const equipmentUtilizationData = [40, 60, 45, 65, 75, 60, 70];
  
  // Animation variants
  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  const progressAnimation = (percentage: number) => ({
    hidden: { strokeDashoffset: 283 },
    visible: { 
      strokeDashoffset: 283 - (283 * percentage / 100),
      transition: { 
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "w-full min-h-[600px] md:min-h-[700px] bg-[#e7e9e7] rounded-lg shadow-xl overflow-hidden",
        className
      )}
    >
      <div className="w-full h-full flex flex-col text-zinc-800">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6">
          <div className="flex items-center gap-2">
            <div className="text-amber-500 font-bold text-xl">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#D4AF37" fillOpacity="0.2" stroke="#D4AF37" strokeWidth="2"/>
                <path d="M15 8L8 15" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 8L15 15" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-1 md:gap-2">
            <div className="flex items-center gap-1 md:gap-3 bg-white/80 rounded-full px-3 py-1 text-sm font-medium">
              <span className="text-zinc-800 px-2 py-1 rounded-full bg-white/80">Dashboard</span>
              <span className="text-zinc-500">Progress</span>
              <span className="text-zinc-500">Timeline</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">
              <Bell size={16} />
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
              <img src="/placeholder-user.jpg" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-3 md:p-6 grid grid-cols-12 gap-3 md:gap-6">
          {/* Sidebar Navigation */}
          <div className="hidden md:flex col-span-1 flex-col items-center gap-6 bg-white/40 rounded-lg py-6">
            <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="7" height="7" rx="1" stroke="#374151" strokeWidth="2"/>
                <rect x="3" y="14" width="7" height="7" rx="1" stroke="#374151" strokeWidth="2"/>
                <rect x="14" y="3" width="7" height="7" rx="1" stroke="#374151" strokeWidth="2"/>
                <rect x="14" y="14" width="7" height="7" rx="1" stroke="#374151" strokeWidth="2"/>
              </svg>
            </button>
            <button className="w-8 h-8 rounded-full flex items-center justify-center">
              <BarChart2 size={18} />
            </button>
            <button className="w-8 h-8 rounded-full flex items-center justify-center">
              <Users size={18} />
            </button>
            <button className="w-8 h-8 rounded-full flex items-center justify-center">
              <LineChart size={18} />
            </button>
            <button className="w-8 h-8 rounded-full flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6V12L16 14" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="10" stroke="#374151" strokeWidth="2"/>
              </svg>
            </button>
          </div>

          {/* Main Dashboard Content */}
          <div className="col-span-12 md:col-span-11 flex flex-col gap-4 md:gap-6">
            {/* Project Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-zinc-700">Project</h1>
                <h2 className="text-3xl md:text-4xl font-light text-zinc-500">Overview</h2>
                <p className="text-xs md:text-sm text-zinc-600 max-w-lg mt-2">
                  Welcome to your project's home base—where the big picture meet real-time metrics so you can see, plan, and stay on schedule all in one place.
                </p>
              </div>

              <div className="bg-white/70 rounded-lg p-4 md:w-64">
                <div className="flex items-end gap-2">
                  <h3 className="text-3xl font-bold">72<span className="text-lg">%</span></h3>
                  <span className="text-xs text-green-600 flex items-center">
                    <ChevronUp size={12} />
                    1.5% MoM
                  </span>
                </div>
                <p className="text-xs text-zinc-500 mt-1">Overall Completion Trend</p>
                <div className="mt-2 h-12">
                  <svg viewBox="0 0 100 20" width="100%" height="100%">
                    <path 
                      d="M0,10 Q10,5 20,8 T40,6 T60,12 T80,8 T100,4" 
                      fill="none" 
                      stroke="#fff" 
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className="flex items-center gap-1">
              <span className="text-xs font-medium bg-white/70 rounded-full px-2 py-0.5 flex items-center gap-1">
                +23
              </span>
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white">
                    {i === 1 && (
                      <img src="/placeholder-user.jpg" alt="Team member" className="w-full h-full rounded-full object-cover" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
              {/* Structural Completion */}
              <motion.div 
                className="bg-white/70 rounded-lg p-4 relative"
                custom={0}
                initial="hidden"
                animate="visible"
                variants={itemFadeIn}
              >
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-sm font-medium">Structural Completion</h3>
                  <button className="text-zinc-400">
                    <Expand size={16} />
                  </button>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#e6e6e6"
                        strokeWidth="10"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#8a9b8a"
                        strokeWidth="10"
                        strokeDasharray="283"
                        strokeDashoffset="283"
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                        variants={progressAnimation(91)}
                        initial="hidden"
                        animate="visible"
                      />
                      <text
                        x="50"
                        y="50"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-2xl font-bold"
                        fill="#374151"
                      >
                        91%
                      </text>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs text-green-600 flex items-center">
                    <ChevronUp size={12} />
                    1.7% MoM
                  </span>
                </div>
              </motion.div>

              {/* Safety Compliance */}
              <motion.div 
                className="bg-white/70 rounded-lg p-4 relative"
                custom={1}
                initial="hidden"
                animate="visible"
                variants={itemFadeIn}
              >
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-sm font-medium">Safety Compliance</h3>
                  <button className="text-zinc-400">
                    <Expand size={16} />
                  </button>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#e6e6e6"
                        strokeWidth="10"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#f0b429"
                        strokeWidth="10"
                        strokeDasharray="283"
                        strokeDashoffset="283"
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                        variants={progressAnimation(54)}
                        initial="hidden"
                        animate="visible"
                      />
                      <text
                        x="50"
                        y="50"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-2xl font-bold"
                        fill="#374151"
                      >
                        54%
                      </text>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs text-red-600 flex items-center">
                    <ChevronDown size={12} />
                    0.6% MoM
                  </span>
                </div>
              </motion.div>

              {/* Material Utilization */}
              <motion.div 
                className="bg-white/70 rounded-lg p-4 relative"
                custom={2}
                initial="hidden"
                animate="visible"
                variants={itemFadeIn}
              >
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-sm font-medium">Material Utilization</h3>
                  <button className="text-zinc-400">
                    <Expand size={16} />
                  </button>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#e6e6e6"
                        strokeWidth="10"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#689a8b"
                        strokeWidth="10"
                        strokeDasharray="283"
                        strokeDashoffset="283"
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                        variants={progressAnimation(25)}
                        initial="hidden"
                        animate="visible"
                      />
                      <text
                        x="50"
                        y="50"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-2xl font-bold"
                        fill="#374151"
                      >
                        25%
                      </text>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs text-red-600 flex items-center">
                    <ChevronDown size={12} />
                    2% MoM
                  </span>
                </div>
              </motion.div>

              {/* Monthly CapEx Spend */}
              <motion.div 
                className="bg-white/70 rounded-lg p-4"
                custom={3}
                initial="hidden"
                animate="visible"
                variants={itemFadeIn}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-sm font-medium">Monthly CapEx Spend</h3>
                  <button className="text-zinc-400">
                    <Expand size={16} />
                  </button>
                </div>
                <div className="flex flex-col h-32 justify-between">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-zinc-500">Est.</span>
                    <span className="text-lg font-bold">$60k</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-zinc-500">Jan</span>
                    <div className="h-20 w-16 bg-amber-300/50 relative">
                      <div className="absolute bottom-0 left-0 right-0 bg-amber-300 h-1/3"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-zinc-500">Mar</span>
                    <span className="text-lg font-bold">$45k</span>
                  </div>
                </div>
              </motion.div>

              {/* Excavation Depth */}
              <motion.div 
                className="bg-white/70 rounded-lg p-4"
                custom={4}
                initial="hidden"
                animate="visible"
                variants={itemFadeIn}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-medium">Excavation Depth (ft)</h3>
                </div>
                <div className="mt-4 h-32 flex items-end">
                  <div className="w-full">
                    <div className="border-b border-zinc-300 relative">
                      <div className="absolute left-0 right-0 -top-1 flex justify-between">
                        {['20', '25', '30', '35', '40', '45', '50', '55', '60'].map((tick, i) => (
                          <div key={i} className="text-[8px] text-zinc-400">{tick}</div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="w-full h-3 mt-3 bg-blue-100 rounded-full relative">
                      <div className="absolute top-1/2 -translate-y-1/2 left-[30%] w-2 h-2 rounded-full bg-blue-500"></div>
                      <div className="absolute top-1/2 -translate-y-1/2 left-[60%] w-2 h-2 rounded-full bg-orange-500"></div>
                    </div>
                    
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span className="text-[10px]">35.5 ft</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        <span className="text-[10px]">48.2 ft</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Equipment Utilization */}
              <motion.div 
                className="bg-white/70 rounded-lg p-4 relative"
                custom={5}
                initial="hidden"
                animate="visible"
                variants={itemFadeIn}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-sm font-medium">Equipment Utilization</h3>
                  <button className="text-zinc-400">
                    <Expand size={16} />
                  </button>
                </div>
                
                <div className="flex items-end mt-2">
                  <div className="text-2xl font-bold">57<span className="text-lg">%</span></div>
                  <span className="text-xs text-green-600 flex items-center ml-2">
                    <ChevronUp size={12} />
                    3.9% MoM
                  </span>
                </div>

                <div className="mt-4 h-16 flex items-end gap-1">
                  {equipmentUtilizationData.map((value, i) => (
                    <motion.div 
                      key={i}
                      className="flex-1"
                      initial={{ height: 0 }}
                      animate={{ height: `${value}%` }}
                      transition={{ duration: 0.5, delay: 0.7 + (i * 0.1) }}
                    >
                      <div 
                        className={`w-full h-full rounded-sm ${i % 2 === 0 ? 'bg-gray-500/80' : 'bg-amber-500/70'}`}
                      ></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 3D Construction Site Visualization (static in this implementation) */}
        <div className="absolute top-1/3 right-10 bottom-10 left-1/2 -z-10 opacity-50 md:opacity-70 pointer-events-none hidden md:block">
          <div className="w-full h-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url(/placeholder.jpg)" }}></div>
        </div>
      </div>
    </motion.div>
  );
}
