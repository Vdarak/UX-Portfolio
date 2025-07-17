"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { 
  Bell, 
  Search, 
  Home, 
  BarChart2, 
  Calendar, 
  Users, 
  Settings, 
  HelpCircle, 
  TrendingUp, 
  Download, 
  MoreHorizontal,
  Eye,
  EyeOff,
  RefreshCw,
  X,
  ChevronDown,
  Menu,
  Mail,
  Grid3X3,
  CreditCard,
  UserPlus,
  Shield
} from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface AmpilloDashboardProps {
  className?: string;
}

export function AmpilloDashboard({ className }: AmpilloDashboardProps) {
  const isMobile = useIsMobile();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("w-full h-full min-h-[800px] bg-slate-950 rounded-lg shadow-2xl overflow-hidden", className)}
    >
      <div className="w-full h-full flex text-white text-sm">
        {/* Sidebar */}
        <div className="w-64 bg-slate-900/50 border-r border-slate-700/50 flex flex-col">
          {/* Logo */}
          <div className="p-4 border-b border-slate-700/50">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">A</span>
              </div>
              <span className="font-semibold text-base">Ampillo</span>
            </div>
          </div>
          
          {/* Search */}
          <div className="p-4 border-b border-slate-700/50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={14} />
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-md pl-9 pr-12 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-xs bg-slate-700/50 px-1 py-0.5 rounded border border-slate-600">
                ⌘ K
              </div>
            </div>
          </div>
          
          {/* Menu Items */}
          <div className="flex-1 px-4 py-2">
            <div className="text-slate-400 text-xs font-medium mb-3 mt-2">Main Menu</div>
            <nav className="space-y-1">
              <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-slate-800/50 text-white">
                <Home size={16} />
                <span className="text-sm">Dashboard</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-400 hover:bg-slate-800/30 hover:text-white transition-colors">
                <BarChart2 size={16} />
                <span className="text-sm">Projects</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-400 hover:bg-slate-800/30 hover:text-white transition-colors">
                <Calendar size={16} />
                <span className="text-sm">Calendar</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-400 hover:bg-slate-800/30 hover:text-white transition-colors">
                <Users size={16} />
                <span className="text-sm">Leave Management</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-400 hover:bg-slate-800/30 hover:text-white transition-colors">
                <Settings size={16} />
                <span className="text-sm">Settings</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-400 hover:bg-slate-800/30 hover:text-white transition-colors">
                <Bell size={16} />
                <span className="text-sm">Notifications</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-400 hover:bg-slate-800/30 hover:text-white transition-colors">
                <HelpCircle size={16} />
                <span className="text-sm">Help Center</span>
              </div>
            </nav>
            
            {/* Team Management */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <div className="text-slate-400 text-xs font-medium">Team Management</div>
                <button className="text-slate-400 hover:text-white">
                  <span className="text-sm">+</span>
                </button>
              </div>
              <nav className="space-y-1">
                <div className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-400 hover:bg-slate-800/30 hover:text-white transition-colors">
                  <BarChart2 size={16} />
                  <span className="text-sm">Performance</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-400 hover:bg-slate-800/30 hover:text-white transition-colors">
                  <Users size={16} />
                  <span className="text-sm">Payrolls</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-400 hover:bg-slate-800/30 hover:text-white transition-colors">
                  <CreditCard size={16} />
                  <span className="text-sm">Invoices</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-400 hover:bg-slate-800/30 hover:text-white transition-colors">
                  <Users size={16} />
                  <span className="text-sm">Employees</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-400 hover:bg-slate-800/30 hover:text-white transition-colors">
                  <UserPlus size={16} />
                  <span className="text-sm">Recruitment & Hiring</span>
                </div>
              </nav>
            </div>
          </div>
          
          {/* Security Notice */}
          <div className="p-4 border-t border-slate-700/50">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3 relative">
              <button className="absolute top-2 right-2 text-slate-400 hover:text-white">
                <X size={12} />
              </button>
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mt-0.5">
                  <Shield size={14} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-white mb-1">Increase your security</div>
                  <div className="text-xs text-slate-400 leading-tight">Add a secondary method of verification used during login</div>
                </div>
              </div>
              <button className="w-full bg-slate-700 hover:bg-slate-600 text-white rounded-md py-2 px-3 text-xs font-medium transition-colors">
                Enable 2-step verification
              </button>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-slate-900">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
            <div className="flex items-center gap-6">
              <div className="grid grid-cols-3 gap-0.5">
                <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-sm text-white">Overview</span>
                <span className="text-sm text-slate-400">Order</span>
                <span className="text-sm text-slate-400">Sales</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-slate-800/50 rounded-md transition-colors">
                <Mail size={16} />
              </button>
              <button className="p-2 hover:bg-slate-800/50 rounded-md transition-colors">
                <Bell size={16} />
              </button>
              <button className="p-2 hover:bg-slate-800/50 rounded-md transition-colors">
                <RefreshCw size={16} />
              </button>
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <div className="text-sm font-medium text-white">Monthly</div>
                  <ChevronDown size={12} className="inline text-slate-400" />
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors">
                  <Download size={14} />
                  Download
                </button>
              </div>
              <button className="text-slate-400 hover:text-white text-sm transition-colors">
                Invite
              </button>
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">R</span>
              </div>
            </div>
          </div>
          
          {/* Dashboard Content */}
          <div className="flex-1 p-6 bg-slate-900">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Dashboard</h1>
            </div>
            
            {/* Top Stats */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">Payrolls Cost</span>
                  <span className="text-green-400 text-sm font-medium">+29%</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">$16,500</div>
                <div className="text-slate-400 text-xs">Last Month</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">Total Expense</span>
                  <span className="text-green-400 text-sm font-medium">+01%</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">$3,512</div>
                <div className="text-slate-400 text-xs">Last Month</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">Pending Payments</span>
                  <span className="text-red-400 text-sm font-medium">-20%</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">$3,762</div>
                <div className="text-slate-400 text-xs">Employees</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">Total Payrolls</span>
                  <span className="text-green-400 text-sm font-medium">+10%</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">120</div>
                <div className="text-slate-400 text-xs">New Employees</div>
              </div>
            </div>
            
            {/* Charts Section */}
            <div className="grid grid-cols-12 gap-6 mb-8">
              {/* Sales Performance Chart */}
              <div className="col-span-8 bg-slate-800/50 border border-slate-700/50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Sales Performance</h3>
                    <div className="text-sm text-slate-400">2 Weeks</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-slate-400">Click Through Rate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                      <span className="text-sm text-slate-400">Open Rate</span>
                    </div>
                  </div>
                </div>
                
                {/* Chart Metrics */}
                <div className="grid grid-cols-3 gap-8 mb-8">
                  <div>
                    <div className="text-2xl font-bold text-green-400">$1843</div>
                    <div className="text-sm text-slate-400">Weekly Revenue</div>
                    <div className="text-xs text-green-400 mt-1">+29%</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">$1843</div>
                    <div className="text-sm text-slate-400">Weekly Revenue</div>
                    <div className="text-xs text-green-400 mt-1">+29%</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">$1843</div>
                    <div className="text-sm text-slate-400">Weekly Revenue</div>
                    <div className="text-xs text-green-400 mt-1">+29%</div>
                  </div>
                </div>
                
                {/* Bar Chart */}
                <div className="h-48 flex items-end justify-between gap-1">
                  {[
                    { height: 20, month: '01' },
                    { height: 45, month: '02' },
                    { height: 30, month: '03' },
                    { height: 60, month: '04' },
                    { height: 40, month: '05' },
                    { height: 75, month: '06' },
                    { height: 50, month: '07' },
                    { height: 85, month: '08' },
                    { height: 35, month: '09' },
                    { height: 70, month: '10' },
                    { height: 45, month: '11' },
                    { height: 80, month: '12' }
                  ].map((bar, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 flex-1">
                      <div 
                        className="w-full max-w-8 bg-blue-500 rounded-t-sm"
                        style={{ height: `${bar.height}%` }}
                      ></div>
                      <div className="text-xs text-slate-400">{bar.month}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Email Data Chart */}
              <div className="col-span-4 bg-slate-800/50 border border-slate-700/50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Email Data Chart</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-xs text-slate-400">Click Through Rate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                      <span className="text-xs text-slate-400">Open Rate</span>
                    </div>
                  </div>
                </div>
                
                {/* Chart Area */}
                <div className="h-48 relative mb-4">
                  <svg viewBox="0 0 280 160" className="w-full h-full">
                    {/* Grid lines */}
                    {[0, 40, 80, 120, 160].map((y) => (
                      <line
                        key={y}
                        x1="0"
                        y1={y}
                        x2="280"
                        y2={y}
                        stroke="#475569"
                        strokeWidth="0.5"
                        opacity="0.5"
                      />
                    ))}
                    
                    {/* Chart area fill */}
                    <path
                      d="M 0 120 Q 70 80 140 100 Q 210 60 280 80 L 280 160 L 0 160 Z"
                      fill="url(#gradient)"
                      opacity="0.3"
                    />
                    
                    {/* Chart line */}
                    <path
                      d="M 0 120 Q 70 80 140 100 Q 210 60 280 80"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      fill="none"
                    />
                    
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1e40af" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                {/* Chart Labels */}
                <div className="flex justify-between text-xs text-slate-400">
                  <div>2016</div>
                  <div>2017</div>
                  <div>2018</div>
                  <div>2019</div>
                  <div>2020</div>
                </div>
              </div>
            </div>
            
            {/* Employees Table */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">All Employees</h3>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-white">
                    <span>All Status</span>
                    <ChevronDown size={14} />
                  </button>
                  <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-white">
                    <span>All Role</span>
                    <ChevronDown size={14} />
                  </button>
                  <button className="text-slate-400 hover:text-white">
                    <MoreHorizontal size={16} />
                  </button>
                  <button className="text-slate-400 hover:text-white text-sm">
                    Export
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-slate-400 border-b border-slate-700/50">
                      <th className="pb-3 font-medium">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="w-4 h-4 rounded border-slate-600 bg-slate-800" />
                          <span>Employee ID</span>
                        </div>
                      </th>
                      <th className="pb-3 font-medium">Employee name</th>
                      <th className="pb-3 font-medium">Email</th>
                      <th className="pb-3 font-medium">Role</th>
                      <th className="pb-3 font-medium">Departments</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: 'MRL88129', name: 'John Smith', email: 'johnsmith@gmail.com', role: 'Sr UI UX Designer', dept: 'Team Projects', status: 'Full Time' },
                      { id: 'MRL88129', name: 'John Smith', email: 'johnsmith@gmail.com', role: 'Sr UI UX Designer', dept: 'Team Projects', status: 'Freelance' },
                      { id: 'MRL88129', name: 'John Smith', email: 'johnsmith@gmail.com', role: 'Sr UI UX Designer', dept: 'Team Projects', status: 'Full Time' },
                      { id: 'MRL88129', name: 'John Smith', email: 'johnsmith@gmail.com', role: 'Sr UI UX Designer', dept: 'Team Projects', status: 'Full Time' },
                    ].map((employee, i) => (
                      <tr key={i} className="border-b border-slate-700/50 last:border-b-0">
                        <td className="py-4">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 rounded border-slate-600 bg-slate-800" />
                            <span className="text-sm text-white">{employee.id}</span>
                          </div>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm font-medium">JS</span>
                            </div>
                            <span className="text-sm text-white">{employee.name}</span>
                          </div>
                        </td>
                        <td className="py-4 text-sm text-slate-400">{employee.email}</td>
                        <td className="py-4 text-sm text-white">{employee.role}</td>
                        <td className="py-4 text-sm text-white">{employee.dept}</td>
                        <td className="py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            employee.status === 'Full Time' 
                              ? 'bg-green-900/50 text-green-300 border border-green-700/50' 
                              : 'bg-orange-900/50 text-orange-300 border border-orange-700/50'
                          }`}>
                            {employee.status}
                          </span>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center gap-2">
                            <button className="text-slate-400 hover:text-white p-1">
                              <Eye size={14} />
                            </button>
                            <button className="text-slate-400 hover:text-white p-1">
                              <MoreHorizontal size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
