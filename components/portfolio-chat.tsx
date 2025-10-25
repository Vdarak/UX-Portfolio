"use client"

import { useState, useRef, useEffect } from "react"
import { useTheme } from "next-themes"
import { useChat } from "@/hooks/use-chat"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, X, MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

// Function to parse markdown-style formatting
const parseMessageContent = (content: string) => {
  const parts = content.split(/(\*\*.*?\*\*)/g)
  
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      // Remove the asterisks and render as bold
      const boldText = part.slice(2, -2)
      return <strong key={index} className="font-semibold">{boldText}</strong>
    }
    return part
  })
}

export function PortfolioChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  })

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.trim()) {
      handleSubmit(e)
    }
  }

  return (
    <>
      {/* Chat Button - Fixed Position */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all" />
              <Button
                size="lg"
                className="relative rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="ml-2 text-sm">Ask LLME</span>
              </Button>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className={cn(
              "fixed z-50 bg-background border border-border rounded-2xl shadow-2xl",
              isMinimized
                ? "bottom-6 right-6 w-80"
                : "bottom-6 right-6 w-96 h-[600px] flex flex-col"
            )}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-2xl border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <div>
                  <h3 className="font-semibold text-sm">LLME - Vedant's AI</h3>
                  <p className="text-xs text-muted-foreground">Ask me anything</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-secondary rounded-lg transition-colors"
                  title="Minimize"
                >
                  <div className="w-4 h-0.5 bg-current" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-secondary rounded-lg transition-colors"
                  title="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages - Only show if not minimized */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-center justify-center h-full text-center"
                    >
                      <MessageCircle className="w-12 h-12 text-primary/30 mb-3" />
                      <p className="font-semibold text-sm mb-1">Hi! I'm LLME</p>
                      <p className="text-xs text-muted-foreground max-w-xs mb-4">
                        Ask me about Vedant's work, projects, experience, or anything
                        about his portfolio. I'm here to help! 🎨
                      </p>
                      
                      {/* Suggestion chips */}
                      <div className="flex flex-col gap-2 w-full max-w-sm">
                        {[
                          "Tell me about your UX design process",
                          "What's your most challenging project?",
                          "Show me your recent work",
                          "Do you really write Poetry?"
                        ].map((suggestion, index) => (
                          <motion.button
                            key={suggestion}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            onClick={() => {
                              handleInputChange({ target: { value: suggestion } } as any)
                              // Auto submit the suggestion
                              setTimeout(() => {
                                const form = document.querySelector('form') as HTMLFormElement
                                if (form) {
                                  const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
                                  form.dispatchEvent(submitEvent)
                                }
                              }, 100)
                            }}
                            className="px-3 py-2 text-xs bg-secondary/50 hover:bg-secondary border border-border/50 rounded-full transition-all hover:scale-105 text-left"
                          >
                            {suggestion}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    messages.map((message: any, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={cn(
                          "flex gap-3",
                          message.role === "user" ? "justify-end" : "justify-start"
                        )}
                      >
                        <div
                          className={cn(
                            "max-w-xs px-4 py-2 rounded-2xl text-sm",
                            message.role === "user"
                              ? "bg-primary text-primary-foreground rounded-br-none"
                              : "bg-secondary text-foreground rounded-bl-none"
                          )}
                        >
                          <p className="whitespace-pre-wrap break-words">
                            {parseMessageContent(message.content)}
                          </p>
                        </div>
                      </motion.div>
                    ))
                  )}

                  {/* Loading indicator */}
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-2"
                    >
                      <div className="bg-secondary rounded-2xl px-4 py-2 flex items-center justify-center">
                        <motion.div
                          animate={{
                            rotate: 360,
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <img
                            src={theme === "dark" ? "/compass.svg" : "/compass-dark.svg"}
                            alt="Loading..."
                            className="w-6 h-6"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="border-t rounded-b-2xl border-border p-4 bg-secondary/30">
                  <form onSubmit={onSubmit} className="flex gap-2">
                    <Input
                      value={input}
                      onChange={handleInputChange}
                      placeholder="Ask about my work..."
                      disabled={isLoading}
                      className="flex-1 rounded-full"
                    />
                    <Button
                      type="submit"
                      disabled={isLoading || !input.trim()}
                      size="sm"
                      className="rounded-full"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
