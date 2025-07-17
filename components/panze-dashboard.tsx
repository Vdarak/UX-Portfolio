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
  TrendingDown,
  Eye,
  ChevronRight,
  Grid,
  Bookmark,
  CreditCard,
  Folder,
  Archive,
  PieChart,
  Wand2,
  UserCheck
} from "lucide-react";
import { motion } from "framer-motion";

interface PanzeDashboardProps {
  className?: string;
}

export function PanzeDashboard({ className }: PanzeDashboardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("w-full min-h-screen bg-gray-100 p-6", className)}
    >
      {/* Main Container */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden h-full min-h-[900px]">
        {/* Top Navigation */}
        <div className="bg-white border-b border-gray-100 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">panze</span>
                </div>
                <span className="font-semibold text-gray-900 text-lg">panze</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Grid className="w-4 h-4" />
                <span>Dashboard</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-50 rounded-lg">
                <Search className="w-4 h-4 text-gray-400" />
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-lg">
                <Bell className="w-4 h-4 text-gray-400" />
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-lg">
                <Settings className="w-4 h-4 text-gray-400" />
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-lg">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">J</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-64 bg-white border-r border-gray-100 p-4">
            {/* Dashboard Active */}
            <div className="mb-6">
              <div className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                <Grid className="w-4 h-4" />
                Dashboard
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-1">
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-gray-50 text-sm">
                <Users className="w-4 h-4" />
                <span>Members</span>
                <ChevronRight className="w-3 h-3 ml-auto" />
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-gray-50 text-sm">
                <Archive className="w-4 h-4" />
                <span>Items</span>
                <ChevronRight className="w-3 h-3 ml-auto" />
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-gray-50 text-sm">
                <FileText className="w-4 h-4" />
                <span>Records</span>
                <ChevronRight className="w-3 h-3 ml-auto" />
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-gray-50 text-sm">
                <CreditCard className="w-4 h-4" />
                <span>Withdrawals</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-gray-50 text-sm">
                <BarChart3 className="w-4 h-4" />
                <span>Transactions</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-gray-50 text-sm">
                <UserCheck className="w-4 h-4" />
                <span>KYC Verification</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-gray-50 text-sm">
                <Bookmark className="w-4 h-4" />
                <span>Advertisement</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-gray-50 text-sm">
                <Folder className="w-4 h-4" />
                <span>Categories</span>
                <ChevronRight className="w-3 h-3 ml-auto" />
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-gray-50 text-sm">
                <Archive className="w-4 h-4" />
                <span>Tickets</span>
                <ChevronRight className="w-3 h-3 ml-auto" />
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-gray-50 text-sm">
                <Map className="w-4 h-4" />
                <span>Navigations</span>
                <ChevronRight className="w-3 h-3 ml-auto" />
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-gray-50 text-sm">
                <FileText className="w-4 h-4" />
                <span>Blogs</span>
                <div className="ml-auto bg-purple-100 text-purple-600 text-xs px-2 py-0.5 rounded-full">2+</div>
                <ChevronRight className="w-3 h-3" />
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-gray-50 text-sm">
                <Eye className="w-4 h-4" />
                <span>Appearance</span>
                <ChevronRight className="w-3 h-3 ml-auto" />
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-gray-50 text-sm">
                <Wand2 className="w-4 h-4" />
                <span>AI Magic</span>
                <div className="ml-auto bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">NEW</div>
                <ChevronRight className="w-3 h-3" />
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-gray-50 text-sm">
                <Settings className="w-4 h-4" />
                <span>Settings</span>
                <ChevronRight className="w-3 h-3 ml-auto" />
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-gray-50 text-sm">
                <Archive className="w-4 h-4" />
                <span>Sections</span>
                <ChevronRight className="w-3 h-3 ml-auto" />
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-gray-50 text-sm">
                <PieChart className="w-4 h-4" />
                <span>System</span>
                <ChevronRight className="w-3 h-3 ml-auto" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 bg-gray-50">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {/* Authors Sales */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Authors Sales</div>
                    <div className="text-2xl font-bold text-gray-900">$25,000</div>
                  </div>
                </div>
              </div>

              {/* Author Earnings */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Author Earnings</div>
                    <div className="text-2xl font-bold text-gray-900">$12,500</div>
                  </div>
                </div>
              </div>

              {/* Author Fees */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Author Fees</div>
                    <div className="text-2xl font-bold text-gray-900">$1,250</div>
                  </div>
                </div>
              </div>

              {/* Total Authors */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Total Authors</div>
                    <div className="text-2xl font-bold text-gray-900">18</div>
                  </div>
                </div>
              </div>

              {/* Referral Earnings */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Referral Earnings</div>
                    <div className="text-2xl font-bold text-gray-900">$12,345.60</div>
                  </div>
                </div>
              </div>

              {/* Total Withdrawals */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Total Withdrawals</div>
                    <div className="text-2xl font-bold text-gray-900">$12,500</div>
                  </div>
                </div>
              </div>

              {/* Total Sales */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Total Sales</div>
                    <div className="text-2xl font-bold text-gray-900">$25,000</div>
                  </div>
                </div>
              </div>

              {/* Total Users */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Total Users</div>
                    <div className="text-2xl font-bold text-gray-900">456</div>
                  </div>
                </div>
              </div>

              {/* Total Items */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Archive className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Total Items</div>
                    <div className="text-2xl font-bold text-gray-900">500</div>
                  </div>
                </div>
              </div>

              {/* Total Refunds */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Total Refunds</div>
                    <div className="text-2xl font-bold text-gray-900">$500</div>
                  </div>
                </div>
              </div>

              {/* Buyer Fees */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Buyer Fees</div>
                    <div className="text-2xl font-bold text-gray-900">18</div>
                  </div>
                </div>
              </div>

              {/* Withdrawal Amount */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Withdrawal Amount</div>
                    <div className="text-2xl font-bold text-gray-900">$12,500</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* User Statistics Chart */}
              <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">User Statistics</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <button className="hover:text-gray-900">Today</button>
                    <button className="hover:text-gray-900">15 Days</button>
                    <button className="hover:text-gray-900">6 Months</button>
                    <button className="text-gray-900 font-medium">This Year</button>
                  </div>
                </div>

                <div className="text-2xl font-bold text-gray-900 mb-2">4,000</div>
                <div className="text-sm text-gray-500 mb-6">Total</div>

                {/* Chart Area */}
                <div className="h-64 relative mb-4">
                  <svg viewBox="0 0 600 200" className="w-full h-full">
                    {/* Grid lines */}
                    {[0, 40, 80, 120, 160, 200].map((y) => (
                      <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="#f3f4f6" strokeWidth="1" />
                    ))}
                    
                    {/* Area fill */}
                    <path
                      d="M 0 180 L 50 160 L 100 140 L 150 120 L 200 100 L 250 90 L 300 80 L 350 70 L 400 75 L 450 65 L 500 60 L 550 55 L 600 50 L 600 200 L 0 200 Z"
                      fill="url(#gradient)"
                      opacity="0.3"
                    />
                    
                    {/* Chart line */}
                    <path
                      d="M 0 180 L 50 160 L 100 140 L 150 120 L 200 100 L 250 90 L 300 80 L 350 70 L 400 75 L 450 65 L 500 60 L 550 55 L 600 50"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      fill="none"
                    />
                    
                    {/* Data point with label */}
                    <circle cx="500" cy="60" r="4" fill="#8b5cf6" />
                    <text x="500" y="45" textAnchor="middle" className="text-xs fill-gray-600">Users: 395k</text>
                    
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* X-axis labels */}
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                </div>
              </div>

              {/* Recently Registered */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Recently Registered</h3>
                  <button className="text-sm text-blue-600 hover:text-blue-700">View All</button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">JM</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Jacob Martinez</div>
                      <div className="text-xs text-gray-500">2 week ago</div>
                    </div>
                    <button className="p-1">
                      <Eye className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">LC</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Lucy Coleman</div>
                      <div className="text-xs text-gray-500">3 months ago</div>
                    </div>
                    <button className="p-1">
                      <Eye className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">EH</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Ethan Hernandez</div>
                      <div className="text-xs text-gray-500">2 week ago</div>
                    </div>
                    <button className="p-1">
                      <Eye className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">EW</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Eli Washington</div>
                      <div className="text-xs text-gray-500">16 minutes ago</div>
                    </div>
                    <button className="p-1">
                      <Eye className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">EA</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Elizabeth Adams</div>
                      <div className="text-xs text-gray-500">1 month ago</div>
                    </div>
                    <button className="p-1">
                      <Eye className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Top Selling Items */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Top Selling Items</h3>
                  <button className="text-sm text-blue-600 hover:text-blue-700">View All</button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Multipurpose Admin And Intuitive User Interface Design</div>
                      <div className="text-xs text-gray-500">39 Sales • 12 Reviews</div>
                    </div>
                    <button className="p-1">
                      <Eye className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Grid className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Comprehensive Dashboard UI Design</div>
                      <div className="text-xs text-gray-500">32 Sales • 12 Reviews</div>
                    </div>
                    <button className="p-1">
                      <Eye className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Website Template Design - Professional And Responsive</div>
                      <div className="text-xs text-gray-500">21 Sales • 18 Reviews</div>
                    </div>
                    <button className="p-1">
                      <Eye className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Sales Statistics */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Sales Statistics</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <button className="hover:text-gray-900">Today</button>
                    <button className="hover:text-gray-900">15 Days</button>
                    <button className="hover:text-gray-900">6 Months</button>
                    <button className="text-gray-900 font-medium">This Year</button>
                  </div>
                </div>

                {/* Chart */}
                <div className="h-48 mb-4">
                  <div className="text-sm text-blue-600 mb-2">Sales: 810$</div>
                  <div className="h-40 flex items-end justify-center gap-2">
                    {[40, 60, 30, 80, 50, 90, 70, 85, 95, 60, 75, 85].map((height, i) => (
                      <div key={i} className="flex-1 bg-purple-400 rounded-t" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
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
