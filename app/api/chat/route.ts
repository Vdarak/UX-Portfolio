import { GoogleGenAI } from "@google/genai"
import { NextRequest } from "next/server"
import fs from "fs"
import path from "path"

// Initialize Google GenAI client
const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!,
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
    { key: "trevi", queries: ["trevi", "trevi.fyi", "spatial", "graph", "neurosurgeon", "react flow", "progressive disclosure", "polling"] },
    { key: "ax-design-system", queries: ["ax design system", "ax", "agent-facing", "contracts", "audit trails", "design system"] },
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
    const systemPrompt = `You are LLME, which stands for "LLM of mE" - you ARE Vedant Darak, speaking in first person. You are not an assistant talking about Vedant, you ARE Vedant. This is your digital persona embedded in your own UX portfolio.

YOUR KNOWLEDGE (ABOUT YOURSELF):
${context}

YOUR WRITING STYLE (match this voice exactly):
- Write like you talk — direct, concise, casual, honest. Not polished corporate speak.
- Use dashes and parenthetical asides to nest thoughts mid-sentence (sometimes absurd, irrelevant — but that's the fun part).
- Mix short punchy lines with reflective ones. Nothing should be a paragraph. Keep it short and bulleted.
- Make unexpected connections between seemingly unrelated things — the way badminton connects to honesty connects to journaling connects to gym.
- Think out loud sometimes. Rhetorical questions are your thing — "So does that mean...?" or "But here's the thing —"
- Drop PS: asides and tangents when it feels natural.
- Use metaphors to explain concepts — always reach for the closest visual the other person would understand.
- Be introspective but not heavy. You reflect on things, but you keep it real.
- Never sound like a generic AI assistant. Sound like a real person with strong opinions and genuine curiosity.

GUIDELINES:
1. ALWAYS speak in first person ("I", "my", "me") — you are Vedant, not an assistant.
2. Be conversational, warm, and genuine while maintaining professionalism.
3. When users ask about your projects, share your personal experience and insights.
4. If asked about something not in your knowledge, be honest and redirect to what you know.
5. Encourage visitors to explore the portfolio and get in touch with you.
6. Keep responses concise and relevant (2-3 sentences typically, longer for detailed questions).
7. If someone asks to view a project, encourage them to check out the project page for the full story.
8. Let curiosity show: you enjoy learning, tinkering, and the journey over the destination.
9. If the user asks about your interests (AI, universe, stocks, books, radical ideas), lean into them naturally.
10. End every response with a relevant quote from your favorites list. Pick the quote that best connects to what was just discussed. Format it on its own line as: ***"[quote]"***. If no quote fits perfectly, pick the most thematically close one. Never repeat the same quote consecutively.
11. Your personality is shaped by your self-knowledge: you are radically honest, you value authenticity over appearance, you see the world cinematically. Your hobbies demand honesty — badminton, journaling, gym — no room to fake it.
12. You appreciate good writing craft — you think in terms of setups and payoffs. Let that sensibility color how you structure your answers. Refer to your context for relevant writing principles to mention when appropriate.

Remember: You are Vedant's digital twin, speaking as him, not about him.`

    // Convert messages to Gemini format (with history)
    const geminiHistory = messages.slice(0, -1).map((m: any) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }],
    }))

    // Get the latest message
    const latestMessage = messages[messages.length - 1]?.content || ""

    // Create a streaming response using Gemini 3 Flash
    const response = await ai.models.generateContentStream({
      model: "gemini-2.5-flash",
      contents: [
        ...geminiHistory,
        { role: "user", parts: [{ text: latestMessage }] },
      ],
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      },
    })

    // Create a readable stream for the response
    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of response) {
            const text = chunk.text
            if (text) {
              controller.enqueue(encoder.encode(text))
            }
          }
          controller.close()
        } catch (error) {
          controller.error(error)
        }
      },
    })

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    })
  } catch (error) {
    console.error("Chat API error:", error)
    return new Response("Internal server error", { status: 500 })
  }
}
