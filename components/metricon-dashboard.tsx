"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  RefreshCw,
  Download,
  Bell,
  Calendar,
  Settings,
  Users,
  BarChart3,
  FileText,
  Map,
  User,
  TrendingUp,
  TrendingDown
} from "lucide-react";
import { motion } from "framer-motion";

interface MetriconDashboardProps {
  className?: string;
}

export function MetriconDashboard({ className }: MetriconDashboardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("w-full min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 p-6", className)}
    >
      {/* Main Container */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-full min-h-[800px]">
        {/* Top Navigation */}
        <div className="bg-white border-b border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">M</span>
                </div>
                <span className="font-semibold text-gray-900">Metricon</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">Developer</span>
              <span className="text-sm text-gray-500">Dark Mode</span>
              <span className="text-sm text-gray-500">Docs</span>
            </div>
          </div>
        </div>

        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-64 bg-gray-50 border-r border-gray-100 p-4">
            {/* User Profile */}
            <div className="mb-8">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">MAIN</div>
              <div className="bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-medium mb-4">
                Dashboard
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-6">
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">APP</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-gray-600 hover:text-gray-900 py-2 text-sm">
                    <div className="w-4 h-4 bg-gray-400 rounded"></div>
                    <span>Inbox</span>
                    <span className="ml-auto text-xs bg-gray-200 px-2 py-0.5 rounded">14</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 hover:text-gray-900 py-2 text-sm">
                    <div className="w-4 h-4 bg-gray-400 rounded"></div>
                    <span>Chat</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 hover:text-gray-900 py-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>Calendar</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 hover:text-gray-900 py-2 text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Task</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Users</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-gray-600 hover:text-gray-900 py-2 text-sm">
                    <FileText className="w-4 h-4" />
                    <span>File Management</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 hover:text-gray-900 py-2 text-sm">
                    <div className="w-4 h-4 bg-gray-400 rounded"></div>
                    <span>Blog</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Extra</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-gray-600 hover:text-gray-900 py-2 text-sm">
                    <div className="w-4 h-4 bg-gray-400 rounded"></div>
                    <span>Authentication</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 hover:text-gray-900 py-2 text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Pages</span>
                    <span className="ml-auto text-xs">+</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 hover:text-gray-900 py-2 text-sm">
                    <Map className="w-4 h-4" />
                    <span>Maps</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">ACCOUNT</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-gray-600 hover:text-gray-900 py-2 text-sm">
                    <User className="w-4 h-4" />
                    <span>Account</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-gray-600 hover:text-gray-900 py-2 text-sm">
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </div>
              </div>
            </div>

            {/* Bottom Profile */}
            <div className="mt-8 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 p-2 bg-white rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">SA</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-900">Shaikh Ali</div>
                  <div className="text-xs text-gray-500">Front-end</div>
                </div>
                <MoreHorizontal className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 bg-gray-50">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>Dashboards</span>
                  <span>/</span>
                  <span className="text-gray-900 font-medium">Default</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search or type a command" 
                    className="pl-10 pr-12 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-1 rounded">
                    ⌘ K
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <div className="w-4 h-4 bg-gray-400 rounded"></div>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Bell className="w-4 h-4 text-gray-400" />
                </button>
                <button className="bg-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                  Export
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Dashboard Title */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="heading-md text-2xl font-bold text-gray-900">Dashboard</h1>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                  <Filter className="w-4 h-4" />
                  Filters
                </button>
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                  <Calendar className="w-4 h-4" />
                  Last 30 days
                  <span className="text-xs">▼</span>
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Earnings */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">Earnings 💰</div>
                  <div className="text-xs text-gray-400">vs last month</div>
                </div>
                <div className="metric-number text-3xl font-bold text-gray-900 mb-2">$22,500</div>
                <div className="text-sm text-gray-500 mb-4">Total sales</div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-green-500 text-sm font-medium">↗ 19%</span>
                  <span className="text-xs text-gray-500">vs last month</span>
                </div>
                {/* Mini chart */}
                <div className="h-16 flex items-end gap-1">
                  <div className="w-2 bg-blue-200 rounded-t" style={{ height: '20%' }}></div>
                  <div className="w-2 bg-blue-200 rounded-t" style={{ height: '40%' }}></div>
                  <div className="w-2 bg-blue-300 rounded-t" style={{ height: '60%' }}></div>
                  <div className="w-2 bg-blue-400 rounded-t" style={{ height: '80%' }}></div>
                  <div className="w-2 bg-blue-500 rounded-t" style={{ height: '100%' }}></div>
                  <div className="w-2 bg-blue-300 rounded-t" style={{ height: '70%' }}></div>
                  <div className="w-2 bg-blue-200 rounded-t" style={{ height: '50%' }}></div>
                </div>
              </div>

              {/* Sales */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">Sales 🛍</div>
                  <div className="text-xs text-gray-400">vs last month</div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">$500</div>
                <div className="text-sm text-gray-500 mb-4">Total sales</div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-green-500 text-sm font-medium">↗ 16%</span>
                  <span className="text-xs text-gray-500">vs last month</span>
                </div>
                {/* Bar chart */}
                <div className="h-16 flex items-end justify-center gap-1">
                  {[30, 60, 20, 80, 40, 90, 50, 70, 30].map((height, i) => (
                    <div key={i} className="w-2 bg-red-400 rounded-t" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
              </div>

              {/* Orders */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">Orders 📋</div>
                  <div className="text-xs text-gray-400">vs last month</div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">215</div>
                <div className="text-sm text-gray-500 mb-4">Total sales</div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-red-500 text-sm font-medium">↘ 17%</span>
                  <span className="text-xs text-gray-500">vs last month</span>
                </div>
                {/* Bar chart */}
                <div className="h-16 flex items-end justify-center gap-1">
                  {[40, 20, 60, 30, 80, 50, 90, 70, 60].map((height, i) => (
                    <div key={i} className="w-3 bg-green-400 rounded-t" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Sales Overview */}
              <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Sales Overview 📊</h3>
                  <div className="flex items-center gap-4">
                    <button className="p-1">
                      <RefreshCw className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="flex items-center gap-2 text-sm text-gray-600">
                      <Filter className="w-4 h-4" />
                      Filter
                    </button>
                    <button className="text-sm text-gray-600">This Year ▼</button>
                  </div>
                </div>

                {/* Chart Stats */}
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">$22,500</div>
                    <div className="text-sm text-gray-500">+35%</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">$42,00</div>
                    <div className="text-sm text-gray-500">+14%</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">$3,489</div>
                    <div className="text-sm text-gray-500">+18%</div>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Sales</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Revenue</span>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="h-64 relative">
                  <svg viewBox="0 0 600 200" className="w-full h-full">
                    {/* Grid lines */}
                    {[0, 40, 80, 120, 160, 200].map((y) => (
                      <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="#f3f4f6" strokeWidth="1" />
                    ))}
                    
                    {/* Chart lines */}
                    <path
                      d="M 0 160 L 50 140 L 100 120 L 150 100 L 200 110 L 250 90 L 300 85 L 350 75 L 400 80 L 450 70 L 500 60 L 550 65 L 600 55"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M 0 180 L 50 170 L 100 165 L 150 160 L 200 155 L 250 150 L 300 145 L 350 140 L 400 145 L 450 140 L 500 135 L 550 140 L 600 135"
                      stroke="#ef4444"
                      strokeWidth="2"
                      fill="none"
                    />
                    
                    {/* Data points */}
                    <circle cx="350" cy="75" r="4" fill="#3b82f6" />
                    <circle cx="350" cy="140" r="4" fill="#ef4444" />
                  </svg>
                  
                  {/* Tooltip */}
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-lg p-3 shadow-lg">
                    <div className="text-sm font-medium text-gray-900">AUG</div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">$2500</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">$800</span>
                    </div>
                  </div>
                </div>

                {/* X-axis labels */}
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>JAN</span>
                  <span>FEB</span>
                  <span>MAR</span>
                  <span>APR</span>
                  <span>MAY</span>
                  <span>JUN</span>
                  <span>JUL</span>
                  <span>AUG</span>
                  <span>SEP</span>
                  <span>OCT</span>
                  <span>NOV</span>
                  <span>DEC</span>
                </div>
              </div>

              {/* Site Traffic */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Site Traffic 📈</h3>
                </div>

                {/* Traffic Stats */}
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">11,5500</div>
                  <div className="text-sm text-gray-500">Total User</div>
                  <div className="text-green-500 text-sm font-medium mt-1">+44%</div>
                </div>

                {/* Donut Chart */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg viewBox="0 0 120 120" className="w-full h-full transform -rotate-90">
                    <circle
                      cx="60"
                      cy="60"
                      r="45"
                      fill="none"
                      stroke="#f3f4f6"
                      strokeWidth="10"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="45"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="10"
                      strokeDasharray="220 282"
                      strokeDashoffset="0"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="45"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="10"
                      strokeDasharray="140 282"
                      strokeDashoffset="-220"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">77</div>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">Positive Sentiment</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">77%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">Return Visitors</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">50%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Connection Stats */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-gray-900">Connection</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-2">
                      <svg viewBox="0 0 120 120" className="w-full h-full transform -rotate-90">
                        <circle cx="60" cy="60" r="45" fill="none" stroke="#f3f4f6" strokeWidth="10" />
                        <circle cx="60" cy="60" r="45" fill="none" stroke="#ef4444" strokeWidth="10" 
                                strokeDasharray="95 282" strokeDashoffset="0" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-900">34%</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">+24%</div>
                    <div className="text-sm font-medium text-gray-900">Lead</div>
                    <div className="text-xs text-gray-500">vs last week</div>
                  </div>

                  <div className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-2">
                      <svg viewBox="0 0 120 120" className="w-full h-full transform -rotate-90">
                        <circle cx="60" cy="60" r="45" fill="none" stroke="#f3f4f6" strokeWidth="10" />
                        <circle cx="60" cy="60" r="45" fill="none" stroke="#8b5cf6" strokeWidth="10" 
                                strokeDasharray="230 282" strokeDashoffset="0" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-900">82%</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">+54%</div>
                    <div className="text-sm font-medium text-gray-900">Sales</div>
                    <div className="text-xs text-gray-500">vs last week</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">MR</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Mahmude Ruma</div>
                      <div className="text-xs text-gray-500">DevOps</div>
                    </div>
                    <div className="text-xs text-gray-500">2568</div>
                    <div className="text-xs text-gray-900 font-medium">8547</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">JJ</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Juviel Jerman</div>
                      <div className="text-xs text-gray-500">Founder & CEO</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">E</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Elham</div>
                      <div className="text-xs text-gray-500">Designer</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analysis */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Analysis 📊</h3>
                  <button className="text-sm text-gray-600">This Month ▼</button>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">New Visit</span>
                    <span className="text-sm font-medium text-gray-900">8547</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Unique Visitors</span>
                    <span className="text-sm font-medium text-gray-900">2707</span>
                  </div>
                </div>

                {/* Chart */}
                <div className="h-24 flex items-end justify-center gap-1 mb-4">
                  {[40, 60, 80, 50, 90, 70, 85, 95, 60].map((height, i) => (
                    <div key={i} className="w-4 bg-red-400 rounded-t" style={{ height: `${height}%` }}></div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>🔸346</span>
                  <span>Apr</span>
                </div>
              </div>

              {/* Empty space for layout */}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
