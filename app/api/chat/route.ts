import { streamText } from "ai"
import { createGateway } from "@ai-sdk/gateway"
import { NextRequest } from "next/server"
import fs from "fs"
import path from "path"

// Initialize Vercel AI Gateway
const gateway = createGateway({
  apiKey: process.env.AI_GATEWAY_API_KEY,
})

// Knowledge base loader - reads markdown files on startup
interface KnowledgeBase {
  index: string
  projects: Record<string, string>
}

let knowledgeBase: KnowledgeBase | null = null

function loadKnowledgeBase(): KnowledgeBase {
  if (knowledgeBase) return knowledgeBase

  const knowledgePath = path.join(process.cwd(), "app/api/knowledge")
  
  const index = fs.readFileSync(path.join(knowledgePath, "index.md"), "utf-8")
  
  const projects: Record<string, string> = {}
  const files = fs.readdirSync(knowledgePath)
  
  files.forEach((file) => {
    if (file.startsWith("project-") && file.endsWith(".md")) {
      const projectKey = file.replace("project-", "").replace(".md", "")
      projects[projectKey] = fs.readFileSync(
        path.join(knowledgePath, file),
        "utf-8"
      )
    }
  })

  knowledgeBase = { index, projects }
  return knowledgeBase
}

// Retrieve relevant context based on user query
function retrieveContext(query: string): string {
  const kb = loadKnowledgeBase()
  const lowerQuery = query.toLowerCase()
  
  // Project keyword mappings for all current projects
  const projectQueries = [
    { key: "media-bias", queries: ["ana", "news", "media bias", "aggregator", "bias", "spotting", "information bubble"] },
    { key: "canvas-chat", queries: ["canvas chat", "canvas", "brainstorm", "infinite", "gemini", "multiple chat", "branching"] },
    { key: "creative-block", queries: ["creative block", "creative", "research", "hci", "creativity", "artists", "stuck"] },
    { key: "hope", queries: ["hope", "memory care", "elderly", "seniors", "care home", "recreational"] },
    { key: "bookkeeping", queries: ["bookkeeping", "accounting", "accountant", "fintech", "automation", "financial"] },
  ]

  // Check if user is asking about a specific project
  const matchedProject = projectQueries.find((p) =>
    p.queries.some((q) => lowerQuery.includes(q))
  )

  if (matchedProject && kb.projects[matchedProject.key]) {
    return `${kb.index}\n\n---\n\nPROJECT DETAILS:\n${kb.projects[matchedProject.key]}`
  }

  // Default to general knowledge base
  return kb.index
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return new Response("Invalid request format", { status: 400 })
    }

    // Get the latest user message for context retrieval
    const latestUserMessage = messages
      .filter((m: any) => m.role === "user")
      .pop()?.content || ""

    // Retrieve relevant context from knowledge base
    const context = retrieveContext(latestUserMessage)

    // Create system prompt with context
    const systemPrompt = `You are LLME, Vedant Darak's AI assistant embedded in his UX portfolio. You are knowledgeable, friendly, and represent Vedant's professional brand.

CONTEXT ABOUT VEDANT:
${context}

GUIDELINES:
1. Answer questions about Vedant's background, experience, and projects
2. Be conversational and engaging while maintaining professionalism
3. When users ask about specific projects, reference the detailed project information provided
4. If asked about something not in your knowledge base, politely acknowledge the limitation and offer what you know
5. Encourage visitors to explore the portfolio and get in touch
6. Be authentic to Vedant's voice: thoughtful, evidence-driven, and user-focused
7. Keep responses concise and relevant (2-3 sentences typically, longer for detailed questions)
8. If someone asks to view a project, encourage them to visit the project page for full details

You are designed to be a helpful guide through the portfolio while representing Vedant professionally.`

        // Stream the response using AI Gateway
    const result = await streamText({
      model: gateway("openai/gpt-4o-mini"), // Using gpt-4o-mini for efficiency within free tier
      system: systemPrompt,
      messages: messages,
      temperature: 0.7,
    })

    return result.toTextStreamResponse()
  } catch (error) {
    console.error("Chat API error:", error)
    return new Response("Internal server error", { status: 500 })
  }
}
