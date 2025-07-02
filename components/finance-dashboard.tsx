"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Calendar, 
  BarChart2, 
  Dot, 
  User, 
  TrendingUp, 
  Users,
  ExternalLink,
  ChevronDown,
  X,
  Twitter,
  Facebook,
  Instagram
} from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface FinanceDashboardProps {
  className?: string;
}

export function FinanceDashboard({ className }: FinanceDashboardProps) {
  const isMobile = useIsMobile();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("w-full h-full min-h-[600px] md:min-h-[700px] bg-black rounded-lg shadow-2xl overflow-hidden", className)}
    >
      <div className="w-full h-full flex flex-col text-white text-sm">
        {/* Top Navigation */}
        <div className="flex items-center p-3 md:p-4 border-b border-zinc-800">
          <div className="flex items-center">
            <div className="text-2xl mr-2 md:mr-6">*</div>
            <div className="flex items-center gap-2 md:gap-4 ml-1 md:ml-4">
              <button className="rounded-full bg-zinc-800 p-1 md:p-2">
                <ChevronLeft size={isMobile ? 12 : 16} />
              </button>
              <div className="flex items-center gap-3 bg-zinc-800/40 rounded-full overflow-hidden">
                <span className="bg-zinc-800 px-3 py-1 text-xs md:text-sm font-medium">Dashboard</span>
                <span className="text-xs text-zinc-400 pr-2">Analytics</span>
                {!isMobile && (
                  <>
                    <span className="text-xs text-zinc-400 hidden md:inline">Products</span>
                    <span className="text-xs text-zinc-400 hidden md:inline">Finances</span>
                    <span className="text-xs text-zinc-400 hidden md:inline pr-3">Calendar</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-1 md:gap-3">
            <button className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-zinc-800 flex items-center justify-center">
              <Search size={isMobile ? 12 : 14} />
            </button>
            <button className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-zinc-800 flex items-center justify-center hidden md:flex">
              <Calendar size={14} />
            </button>
            <button className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-zinc-800 flex items-center justify-center">
              <Bell size={isMobile ? 12 : 14} />
            </button>
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-zinc-600 flex items-center justify-center overflow-hidden">
              <span className="text-[10px] md:text-xs">VR</span>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-2 md:p-4 grid grid-cols-12 gap-2 md:gap-4">
          {/* Sidebar - hidden on mobile */}
          <div className="hidden md:flex col-span-1 flex-col items-center gap-4 md:gap-6 pt-4 md:pt-8">
            <button className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-zinc-800">
              <Home size={16} />
            </button>
            <button className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-zinc-800">
              <BarChart2 size={16} />
            </button>
            <button className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-zinc-800">
              <Users size={16} />
            </button>
            <button className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-zinc-800">
              <Folder size={16} />
            </button>
            <button className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-zinc-800">
              <Settings size={16} />
            </button>
          </div>
          
          {/* Main Content */}
          <div className="col-span-12 md:col-span-11 flex flex-col gap-3 md:gap-6">
            {/* Dashboard Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
              <div>
                <h2 className="text-xl md:text-3xl font-bold">ROI Dashboard</h2>
              </div>
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                <div className="flex items-center text-xs gap-1 bg-zinc-900 px-2 md:px-3 py-1 rounded">
                  <span className="text-[10px] md:text-xs whitespace-nowrap">Nov-Dec</span>
                  <ChevronDown size={12} />
                </div>
                <div className="flex items-center text-xs gap-1 bg-zinc-900 px-2 md:px-3 py-1 rounded">
                  <span className="text-[10px] md:text-xs whitespace-nowrap">Last 1 Year</span>
                  <ChevronDown size={12} />
                </div>
                <button className="bg-zinc-900 p-1 rounded">
                  <Search size={12} />
                </button>
              </div>
            </div>
            
            {/* Financial Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center justify-between bg-zinc-900 rounded-lg p-3 md:p-5"
              >
                <div>
                  <div className="text-zinc-400 text-xs md:text-sm">Net</div>
                  <div className="text-base md:text-3xl font-bold mt-0 md:mt-1">$673,876</div>
                </div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
                  className="w-3 h-3 md:w-4 md:h-4 bg-green-400 rounded-full" 
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center justify-between bg-zinc-900 rounded-lg p-3 md:p-5"
              >
                <div>
                  <div className="text-zinc-400 text-xs md:text-sm">Expenses</div>
                  <div className="text-base md:text-3xl font-bold mt-0 md:mt-1">$23,876</div>
                </div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 }}
                  className="w-3 h-3 md:w-4 md:h-4 bg-red-400 rounded-full" 
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-center justify-between bg-zinc-900 rounded-lg p-3 md:p-5"
              >
                <div>
                  <div className="text-zinc-400 text-xs md:text-sm">Income</div>
                  <div className="text-base md:text-3xl font-bold mt-0 md:mt-1">$25,876</div>
                </div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                  className="w-3 h-3 md:w-4 md:h-4 bg-zinc-400 rounded-full" 
                />
              </motion.div>
            </div>
            
            {/* Dashboard Grid */}
            <div className="grid grid-cols-12 gap-2 md:gap-4">
              {/* MRR Section */}
              <div className="col-span-12 md:col-span-4 bg-zinc-900 rounded-lg p-3 md:p-4">
                <div className="flex items-center justify-between mb-2 md:mb-4">
                  <div className="text-xs md:text-sm font-medium">MRR by Subscription</div>
                  <div className="bg-orange-500 rounded-full p-1 md:p-2">
                    <TrendingUp size={12} />
                  </div>
                </div>
                <div className="flex items-center gap-1 md:gap-2 mb-3 md:mb-6">
                  <div className="flex -space-x-1 md:-space-x-2">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center text-[10px] text-white">
                      <span>1</span>
                    </div>
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-zinc-700 border-2 border-zinc-900 flex items-center justify-center text-[10px] text-white">
                      <span>2</span>
                    </div>
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-zinc-600 border-2 border-zinc-900 flex items-center justify-center text-[10px] text-white">
                      <span>3</span>
                    </div>
                  </div>
                  <div className="text-[10px] md:text-xs text-zinc-400">+18 more</div>
                </div>
                <div className="grid grid-cols-4 gap-1 md:gap-3 mt-2 md:mt-4">
                  {[
                    { color: 'bg-yellow-400', value: '$178.7k', label: 'Avg' },
                    { color: 'bg-orange-400', value: '$45.2k', label: 'Sept' },
                    { color: 'bg-orange-400 bg-opacity-50', value: '$207.2k', label: 'Oct' },
                    { color: 'bg-orange-500', value: '$118k', label: 'Nov' },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className={`h-16 md:h-28 ${i === 0 ? 'bg-yellow-400/10' : i === 3 ? 'bg-orange-500/10' : 'bg-orange-400/10'} rounded-lg mb-1 md:mb-2 relative overflow-hidden`}>
                        <div className={`absolute bottom-0 w-full h-${i === 0 ? '1/3' : i === 1 ? '1/4' : i === 2 ? '3/5' : '2/5'} ${item.color}`}></div>
                      </div>
                      <div className="text-[10px] md:text-xs font-bold">{item.value}</div>
                      <div className="text-[10px] md:text-xs text-zinc-400">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Traffic Sources */}
              <div className="col-span-12 md:col-span-5 bg-zinc-900 rounded-lg p-3 md:p-4">
                <div className="flex items-center justify-between mb-2 md:mb-4">
                  <div className="text-xs md:text-sm font-medium">Traffic Sources</div>
                  <div className="bg-orange-500 rounded-full p-1 md:p-2">
                    <ExternalLink size={12} />
                  </div>
                </div>
                <div className="h-24 md:h-36 flex items-end">
                  <div className="relative w-full h-16 md:h-24">
                    {/* Custom orange dotted line curve */}
                    <div className="absolute inset-0">
                      <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                        <motion.path 
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                          d="M0,80 C30,70 90,30 150,50 C210,70 250,60 300,30" 
                          stroke="#f97316" 
                          strokeWidth="2" 
                          fill="none" 
                          strokeDasharray="3,3"
                        />
                      </svg>
                    </div>
                    {/* Orange dot on the curve */}
                    <motion.div
                      initial={{ scale: 0, x: 50 }}
                      animate={{ scale: 1, x: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 1.3 }}
                      className="absolute top-1/2 right-1/4 w-3 h-3 md:w-4 md:h-4 bg-orange-500 rounded-full"
                    ></motion.div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3 md:mt-6">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="text-[8px] md:text-xs">Jan</div>
                    <div className="text-[8px] md:text-xs">Feb</div>
                    <div className="text-[8px] md:text-xs">Mar</div>
                    <div className="text-[8px] md:text-xs">Apr</div>
                    <div className="text-[8px] md:text-xs">May</div>
                    <div className="text-[8px] md:text-xs">Jun</div>
                  </div>
                  <div className="flex gap-1 md:gap-2">
                    <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                  </div>
                </div>
                <div className="mt-2 md:mt-4 text-[10px] md:text-xs flex items-center">
                  <div className="flex items-center gap-1">
                    <span>+3.8% Increase</span>
                    <span className="text-orange-500">this year</span>
                  </div>
                </div>
              </div>
              
              {/* Summary Card */}
              <div className="col-span-12 md:col-span-3 bg-zinc-900 rounded-lg p-3 md:p-4 flex flex-col gap-2 md:gap-4">
                <div className="flex-1 bg-zinc-800 rounded-lg p-3 md:p-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex justify-center space-x-1.5">
                      <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full"></div>
                      <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full"></div>
                      <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full"></div>
                      <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full"></div>
                    </div>
                    <div className="text-[10px] md:text-xs mt-2 md:mt-3">Write a Message</div>
                  </div>
                </div>
                
                <div className="flex-1 bg-zinc-800 rounded-lg p-3 md:p-4">
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <div className="text-xs md:text-sm font-medium">Summary</div>
                    <div className="bg-orange-500 rounded-full p-1">
                      <ChevronRight size={12} />
                    </div>
                  </div>
                  <div className="text-[10px] md:text-xs text-zinc-400">
                    <p>What's our marketing ROI looking like this month?</p>
                    <p className="mt-1 md:mt-2">This month, we generated 7.5 million impressions across Meta, YouTube, and Google Search campaigns.</p>
                    <p className="mt-1 md:mt-2 text-white font-medium">From that:</p>
                    <ul className="mt-1 space-y-1">
                      <li className="flex items-center gap-1">
                        <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
                        <span>22.4M views were recorded</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
                        <span>3.7M conversions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Bottom row - adjust for mobile */}
              <div className="col-span-12 grid grid-cols-12 gap-2 md:gap-4">
                {/* User Acquisition */}
                <div className="col-span-12 md:col-span-4 bg-zinc-900 rounded-lg p-3 md:p-4">
                  <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-zinc-800 rounded-full flex items-center justify-center">
                      <Users size={12} />
                    </div>
                    <div className="text-xs md:text-sm font-medium">User Acquisition Funnel</div>
                  </div>
                  
                  {/* Social media icons */}
                  <div className="flex justify-between mt-2">
                    <div className="flex items-center text-zinc-400 text-xs">
                      <Facebook size={14} className="mr-1" />
                      <span>56%</span>
                    </div>
                    <div className="flex items-center text-zinc-400 text-xs">
                      <Twitter size={14} className="mr-1" />
                      <span>23%</span>
                    </div>
                    <div className="flex items-center text-zinc-400 text-xs">
                      <Instagram size={14} className="mr-1" />
                      <span>21%</span>
                    </div>
                  </div>
                </div>
                
                {/* Visitors */}
                <div className="col-span-12 md:col-span-4 bg-zinc-900 rounded-lg p-3 md:p-4">
                  <div className="flex items-center justify-between mb-2 md:mb-4">
                    <div className="text-xs md:text-sm">
                      <span className="text-zinc-400">Visitors: </span>
                      <span>316</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full"></div>
                      <div className="text-[10px] md:text-xs text-zinc-400">+16%</div>
                    </div>
                  </div>
                  <div className="h-12 md:h-24">
                    <div className="h-full bg-gradient-to-t from-orange-500 to-orange-500/10 rounded-md"></div>
                  </div>
                </div>
                
                {/* Track Sources */}
                <div className="col-span-12 md:col-span-4 bg-zinc-900 rounded-lg p-3 md:p-4">
                  <div className="flex items-center justify-between mb-2 md:mb-4">
                    <div className="text-xs md:text-sm">
                      <span className="text-zinc-400">Track Sources: </span>
                      <span>316.7</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full"></div>
                      <div className="text-[10px] md:text-xs text-zinc-400">+7%</div>
                    </div>
                  </div>
                  {/* Add bar chart visualization */}
                  <div className="h-12 md:h-24 flex items-end gap-1">
                    {[40, 60, 75, 65, 80, 50, 30, 45].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-orange-500/30 rounded-sm" 
                          style={{ height: `${height}%` }}
                        >
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Missing Lucide icons that weren't imported
const Bell = (props: any) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
};

const Home = (props: any) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
};

const Folder = (props: any) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
    </svg>
  );
};

const Settings = (props: any) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
};
