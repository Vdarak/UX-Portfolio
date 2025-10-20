import { useState, useCallback } from "react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export function useChat({ api }: { api: string }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value)
    },
    []
  )

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (!input.trim() || isLoading) return

      // Add user message
      const userMessage: Message = {
        id: Math.random().toString(36).substring(7),
        role: "user",
        content: input,
      }

      setMessages((prev) => [...prev, userMessage])
      setInput("")
      setIsLoading(true)

      try {
        const response = await fetch(api, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [
              ...messages,
              { role: "user", content: input },
            ].map((m) => ({
              role: m.role,
              content: m.content,
            })),
          }),
        })

        if (!response.ok) throw new Error("Failed to fetch response")

        const reader = response.body?.getReader()
        if (!reader) throw new Error("No reader available")

        let fullContent = ""
        const assistantMessageId = Math.random().toString(36).substring(7)

        // Add empty assistant message
        setMessages((prev) => [
          ...prev,
          {
            id: assistantMessageId,
            role: "assistant",
            content: "",
          },
        ])

        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = new TextDecoder().decode(value)
          fullContent += chunk

          // Update the last assistant message with streamed content
          setMessages((prev) => {
            const updated = [...prev]
            const lastIndex = updated.length - 1
            if (updated[lastIndex].role === "assistant") {
              updated[lastIndex] = {
                ...updated[lastIndex],
                content: fullContent,
              }
            }
            return updated
          })
        }
      } catch (error) {
        console.error("Chat error:", error)
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(36).substring(7),
            role: "assistant",
            content:
              "Sorry, I encountered an error. Please try again.",
          },
        ])
      } finally {
        setIsLoading(false)
      }
    },
    [input, messages, isLoading, api]
  )

  return {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
  }
}
