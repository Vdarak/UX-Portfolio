# Project Case Study: Trevi

## Overview
- **Product Title**: TREVI (trevi.fyi)
- **Role**: Lead Designer & Frontend Engineer
- **Timeline**: 2 weeks MVP sprint
- **Team**: 3-person team (Designer/Frontend, AI Engineer, Stakeholder)
- **Tech Stack**: Next.js, React, TypeScript, React Flow, Framer Motion, Tailwind CSS, Geist, FastAPI, Python Agentic RAG

## The Problem
A neurosurgeon approached us with a core frustration. He was using AI tools to research complex medical concepts (comparing treatments, tracing relationships, building mental models). However, traditional AI chat interfaces are linear, flat, and scroll-heavy, making it impossible to see the spatial relationship between ideas. 

Two things were fundamentally broken:
1. **Spatial Navigation**: No visual layout to see where you've been, where you can go, or how concepts relate.
2. **Trust & Credibility**: No transparency regarding which source text produced the AI's claims. For medical and scientific research, trust is non-negotiable.

## The Solution
We designed and built Trevi—an explorable spatial canvas replacing the linear chat model, and incorporating source-level citation transparency.

### 1. Spatial Topic Tree
Instead of a single scrolling thread, conversations branch out onto an infinite, draggable, and zoomable canvas powered by **React Flow**. Nodes represent concepts, and connections represent branching query paths.

### 2. Progressive Disclosure
To minimize cognitive load on dense topics, the UI uses three progressive information tiers:
- **Glance (Default)**: A short description displayed on the node itself.
- **Hover (Gist)**: An expanded tooltip showing research-worthy summary context.
- **Click (Detail)**: A modal displaying the full detail, including raw text blocks, and connected search paths.

### 3. Citation Transparency
On hover of any response, citation bubbles display the exact text snippet from the source document used by the RAG model to formulate the response. Clicking on the citation immediately navigates to the source PDF/document.

### 4. Direct Feedback Loop
Since the MVP was launched to a small alpha group of domain experts, we built feedback prompts directly into the interface:
- Quick rating buttons (thumbs up/down) on every node.
- Direct feedback input on responses.
- An automatic, subtle feedback nudge prompting users to annotate quality.

### 5. Architectural Trade-offs
- **Polling vs. Streaming**: Instead of Server-Sent Events (SSE) or WebSockets, we chose short API polling (every 4 seconds) to fetch the graph layout status. This simplified the backend timeline, cut down on hospital firewall restrictions, and made session debugging straightforward.
- **Node Forms**: Replaced circular node concepts with dense hexagonal layouts in the visual roadmap to enable organic spatial clustering.
