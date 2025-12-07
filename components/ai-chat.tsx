"use client"

import { useState, useRef, useEffect, type FormEvent, type KeyboardEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Loader2 } from "lucide-react"
import { useAIChat } from "./ai-chat-provider"
import Image from "next/image"
import ReactMarkdown from "react-markdown"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export function AIChat() {
  const { isOpen, setIsOpen } = useAIChat()
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const presetQuestions = [
    "What's your design process?",
    "What are your hobbies?",
    "How can I contact you?",
  ]

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen])

  const handleSubmit = async (e?: FormEvent, directMessage?: string) => {
    e?.preventDefault()

    const messageContent = directMessage || input.trim()
    if (!messageContent || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageContent,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch response")
      }

      // Handle streaming response
      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "",
      }

      setMessages((prev) => [...prev, assistantMessage])

      if (reader) {
        let done = false
        while (!done) {
          const { value, done: readerDone } = await reader.read()
          done = readerDone
          if (value) {
            const chunk = decoder.decode(value, { stream: true })
            assistantMessage.content += chunk
            setMessages((prev) =>
              prev.map((m) => (m.id === assistantMessage.id ? { ...m, content: assistantMessage.content } : m))
            )
          }
        }
      }
    } catch (error) {
      console.error("Chat error:", error)
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Sorry, I'm having trouble connecting right now. Please try again later.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const handlePresetClick = (question: string) => {
    // Submit the preset question directly without populating input
    handleSubmit(undefined, question)
  }

  return (
    <>
      {/* Mobile overlay backdrop - only on mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/40 backdrop-blur-lg z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Chat Panel - fixed position that content adjusts around */}
      <motion.aside
        initial={false}
        animate={{
          x: isOpen ? 0 : "100%",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className={`fixed top-0 right-0 bottom-0 z-50 w-full lg:w-[440px] bg-background/40 backdrop-blur-xl border-l border-white/10 flex flex-col ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Header - matches navbar styling */}
        <div className="flex items-center justify-between px-6 py-4 md:px-8 md:py-5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Image src="/logo-favicon.svg" alt="LLME" width={32} height={32} className="w-8 h-8" />
            <span className="font-mono text-xs tracking-wider text-foreground">LLME</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close chat"
          >
            <X className="w-4 h-4 text-white/60" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {/* Welcome and preset questions - show only when no messages */}
          {messages.length === 0 && (
            <div className="space-y-4">
              {/* Welcome message */}
              <div className="px-4 py-3 rounded-2xl rounded-bl-md border border-white/20 font-mono text-sm leading-relaxed text-white/90">
                Hey! I'm LLME, Vedant's AI assistant. Ask me about his projects, experience, or design philosophy. How can I help you today?
              </div>
              
              {/* Preset questions */}
              <p className="font-mono text-xs text-white/40 mt-4">Try asking:</p>
              <div className="space-y-2">
                {presetQuestions.map((question, index) => (
                  <motion.button
                    key={question}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handlePresetClick(question)}
                    className="w-full text-left px-4 py-3 rounded-xl border border-white/20 font-mono text-sm text-white/80 hover:border-accent/50 hover:text-white transition-colors"
                  >
                    {question}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] px-4 py-3 rounded-2xl font-mono text-sm leading-relaxed border ${
                  message.role === "user"
                    ? "border-accent/50 text-white rounded-br-md"
                    : "border-white/20 text-white/90 rounded-bl-md"
                }`}
              >
                {message.role === "assistant" ? (
                  <ReactMarkdown
                    components={{
                      strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
                      em: ({ children }) => <em className="italic text-white/90">{children}</em>,
                      p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                      ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
                      ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
                      li: ({ children }) => <li className="text-white/90">{children}</li>,
                      code: ({ children }) => <code className="bg-white/10 px-1.5 py-0.5 rounded text-accent font-mono text-xs">{children}</code>,
                      pre: ({ children }) => <pre className="bg-white/5 p-3 rounded-lg overflow-x-auto mb-2">{children}</pre>,
                      a: ({ href, children }) => <a href={href} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>,
                      h1: ({ children }) => <h1 className="text-lg font-bold mb-2 text-white">{children}</h1>,
                      h2: ({ children }) => <h2 className="text-base font-bold mb-2 text-white">{children}</h2>,
                      h3: ({ children }) => <h3 className="text-sm font-bold mb-1 text-white">{children}</h3>,
                      blockquote: ({ children }) => <blockquote className="border-l-2 border-accent/50 pl-3 italic text-white/70">{children}</blockquote>,
                    }}
                  >
                    {message.content}
                  </ReactMarkdown>
                ) : (
                  message.content
                )}
              </div>
            </motion.div>
          ))}
          {isLoading && messages[messages.length - 1]?.role === "user" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
              <div className="border border-white/20 px-4 py-3 rounded-2xl rounded-bl-md flex items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2,
                    ease: [0.68, -0.55, 0.27, 1.55],
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <Image src="/logo-favicon.svg" alt="Typing" width={16} height={16} className="w-4 h-4" />
                </motion.div>
                <span className="font-mono text-xs text-white/60">Thinking...</span>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="flex items-end gap-4">
            <div className="flex-1 relative group">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about projects, experience..."
                rows={1}
                className="w-full bg-transparent border-none px-0 py-2 font-mono text-sm text-white placeholder:text-white/40 focus:outline-none resize-none max-h-32 scrollbar-thin scrollbar-thumb-white/10"
                style={{ minHeight: "40px" }}
              />
              {/* Underline - similar to navbar hover effect */}
              <span className="absolute bottom-0 left-0 w-full h-px bg-white/20" />
              <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-focus-within:w-full transition-all duration-300" />
            </div>
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-2 text-white/60 hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-300"
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </motion.aside>
    </>
  )
}

// Trigger button for navbar
export function AIChatTrigger() {
  const { toggle, isOpen } = useAIChat()

  return (
    <button
      onClick={toggle}
      className={`group relative font-mono text-xs tracking-wider transition-colors duration-300 ${
        isOpen ? "text-accent" : "text-foreground hover:text-accent"
      }`}
      aria-label="Toggle AI chat"
    >
      <span>ASK LLME</span>
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
    </button>
  )
}

// Mobile trigger button for mobile menu
export function MobileAIChatTrigger({ onClose }: { onClose: () => void }) {
  const { toggle } = useAIChat()

  const handleClick = () => {
    onClose()
    setTimeout(() => toggle(), 100)
  }

  return (
    <button
      onClick={handleClick}
      className="group text-4xl font-sans tracking-tight text-accent"
      aria-label="Open AI chat"
    >
      <span>Ask LLME</span>
    </button>
  )
}
