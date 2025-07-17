"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { 
  Check, 
  Star,
  Users,
  CreditCard,
  Shield,
  Zap,
  ChevronDown,
  Menu
} from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface PricingPageProps {
  className?: string;
}

export function PricingPage({ className }: PricingPageProps) {
  const isMobile = useIsMobile();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("w-full min-h-screen bg-slate-950 text-white overflow-auto", className)}
    >
      {/* Header */}
      <div className="border-b border-slate-800/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">F</span>
                </div>
                <span className="font-semibold text-lg">FinanceApp</span>
              </div>
              <nav className="hidden md:flex items-center gap-6 text-sm">
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Services</a>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">How it works</a>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Testimonials</a>
                <a href="#" className="text-white font-medium">Pricing</a>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
              </nav>
            </div>
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              CTA
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Pricing Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">High Converting Pricing Page</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Choose the perfect plan for your financial management needs
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-400">Bill yearly</span>
            <div className="relative">
              <div className="w-12 h-6 bg-slate-700 rounded-full cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform"></div>
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-xs px-2 py-1 rounded text-green-400">
                Save 30%
              </div>
            </div>
            <span className="text-sm text-white">Monthly</span>
            <span className="text-sm text-slate-400 ml-8">Offer discounts to encourage yearly plans</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-8 relative">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Starter</h3>
              <div className="text-3xl font-bold mb-2">$100<span className="text-lg font-normal text-slate-400">/month</span></div>
            </div>
            
            <button className="w-full bg-slate-700 text-white py-3 rounded-lg font-semibold mb-6 hover:bg-slate-600 transition-colors">
              CTA
            </button>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Feature 1 goes here</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Feature 2 goes here</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Feature 3 goes here</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Feature 4 goes here</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Feature 5 goes here</span>
              </div>
            </div>
          </div>

          {/* Pro Plan - Highlighted */}
          <div className="bg-slate-800/50 border-2 border-blue-500/50 rounded-lg p-8 relative scale-105 shadow-xl shadow-blue-500/10">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Pro</h3>
              <div className="text-3xl font-bold mb-2">$200<span className="text-lg font-normal text-slate-400">/month</span></div>
              <div className="text-sm text-slate-400">Everything in Starter plan</div>
            </div>
            
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mb-6 hover:bg-blue-700 transition-colors">
              CTA
            </button>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Feature 1 goes here</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Feature 2 goes here</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Feature 3 goes here</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Feature 4 goes here</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Feature 5 goes here</span>
              </div>
            </div>
          </div>

          {/* Advanced Plan */}
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-8 relative">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Advanced</h3>
              <div className="text-3xl font-bold mb-2">$300<span className="text-lg font-normal text-slate-400">/month</span></div>
            </div>
            
            <button className="w-full bg-slate-700 text-white py-3 rounded-lg font-semibold mb-6 hover:bg-slate-600 transition-colors">
              CTA
            </button>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Feature 1 goes here</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Feature 2 goes here</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Feature 3 goes here</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Feature 4 goes here</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Feature 5 goes here</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards Explanation */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-1 bg-slate-600"></div>
            <span className="text-slate-400 font-medium">Pricing Cards</span>
            <div className="flex-1 h-px bg-slate-700"></div>
            <div className="text-sm text-slate-400 max-w-md text-right">
              <div className="mb-2">Highlight the 'middle plan'</div>
              <div className="mb-2">A middle plan is often highlighted to look like the 'best value' between a too-basic and too-expensive plan.</div>
              <div>Most users skip. Highlighting this plan makes it easier to focus and decide fast.</div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-1 bg-slate-600"></div>
            <span className="text-slate-400 font-medium">Social Proof</span>
            <div className="flex-1 h-px bg-slate-700"></div>
            <div className="text-sm text-slate-400 max-w-md text-right">
              Showcase logos of customers to build trust
            </div>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-slate-400 mb-6">Trusted by employees at:</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              {[1,2,3,4,5,6,7,8,9].map((i) => (
                <div key={i} className="w-12 h-12 bg-slate-700 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Comparison */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-1 bg-slate-600"></div>
            <span className="text-slate-400 font-medium">Features Comparison</span>
            <div className="flex-1 h-px bg-slate-700"></div>
            <div className="text-sm text-slate-400 max-w-md text-right">
              <div className="mb-2">Highlight benefits of different plans to show which plan benefits them the most</div>
            </div>
          </div>
          
          <div className="bg-slate-900/30 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Compare our plans</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-4 px-4 font-medium text-slate-400">Features</th>
                    <th className="text-center py-4 px-4">
                      <div className="bg-slate-800 text-white px-4 py-2 rounded-lg font-medium">Starter</div>
                    </th>
                    <th className="text-center py-4 px-4">
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">Business</div>
                    </th>
                    <th className="text-center py-4 px-4">
                      <div className="bg-slate-800 text-white px-4 py-2 rounded-lg font-medium">Custom</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    'Analytics',
                    'Integrations', 
                    'Support',
                    'Custom',
                    'Category',
                    'Category',
                    'Category',
                    'Category'
                  ].map((feature, i) => (
                    <tr key={feature} className="border-b border-slate-800/50">
                      <td className="py-4 px-4 text-slate-300">{feature}</td>
                      <td className="py-4 px-4 text-center">
                        <Check className="w-4 h-4 text-green-400 mx-auto" />
                      </td>
                      <td className="py-4 px-4 text-center">
                        <Check className="w-4 h-4 text-green-400 mx-auto" />
                      </td>
                      <td className="py-4 px-4 text-center">
                        <Check className="w-4 h-4 text-green-400 mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-1 bg-slate-600"></div>
            <span className="text-slate-400 font-medium">Testimonials</span>
            <div className="flex-1 h-px bg-slate-700"></div>
            <div className="text-sm text-slate-400 max-w-md text-right">
              Customer testimonial showcasing results
            </div>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-slate-400 mb-8">Loved by people worldwide</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[1,2,3].map((i) => (
                <div key={i} className="bg-slate-900/30 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-slate-700 rounded-full mr-4"></div>
                    <div>
                      <div className="flex items-center mb-1">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-1 bg-slate-600"></div>
            <span className="text-slate-400 font-medium">FAQ</span>
            <div className="flex-1 h-px bg-slate-700"></div>
            <div className="text-sm text-slate-400 max-w-md text-right">
              <div className="mb-2">Address some major objections to help remove barriers</div>
              <div>eg. refund/cancellation policy related questions</div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8 text-center">Frequently Asked Questions</h3>
            
            <div className="space-y-4">
              {[
                'Question 1',
                'Question 2', 
                'Question 3',
                'Question 4'
              ].map((question, i) => (
                <div key={question} className="bg-slate-900/30 rounded-lg p-4">
                  <button className="w-full flex items-center justify-between text-left">
                    <span className="font-medium">{question}</span>
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-1 bg-slate-600"></div>
            <span className="text-slate-400 font-medium">CTA</span>
            <div className="flex-1 h-px bg-slate-700"></div>
          </div>
          
          <div className="bg-slate-800/30 rounded-lg p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">CTA Section</h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Final opportunity to convert visitors with a compelling call-to-action
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-800/50 pt-8">
          <div className="flex justify-center items-center gap-8 text-sm text-slate-400">
            <span className="text-slate-400 font-medium">Footer</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Services</a>
              <a href="#" className="hover:text-white transition-colors">How it works</a>
              <a href="#" className="hover:text-white transition-colors">Testimonials</a>
              <a href="#" className="hover:text-white transition-colors">Pricing</a>
              <a href="#" className="hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
