# Project Case Study: AX Design System

## Overview
- **Product Title**: AX Design System (Agent Experience Design System)
- **Role**: Lead Product Designer
- **Timeline**: Ongoing
- **Tags**: Design System, AI Agents, React, Schemas & Protocols

## The Problem
Standard design systems (like Material Design or TailwindUI) are built exclusively for human interaction. However, as applications incorporate autonomous AI agents that read, write, and interact with the UI, standard component wrappers lack structured semantic data. This creates a gap where AI agents fail to correctly interpret UI state, options, and actions.

## The Solution
AX Design System is a case study on designing a component library that treats standard user interfaces as a dual-facing surface. The system ensures that human interactive elements are visually polished, while agent-facing contracts (schemas, accessibility policies, context bindings, and audit trails) are equally structured and optimized.

### Key Features
1. **Agent-Facing Contracts**: Every React component exposes standard JSON-schema definitions outlining its interactive props, actions, and current state parameters.
2. **Dual Modes of Interaction**: Components dynamically render styled UI for human eyes and semantic, machine-readable payloads for AI web-crawlers and agent inputs.
3. **Audit Trails**: Integrated transaction and state-change history wrappers inside components, allowing agents to understand UI context lineage.
4. **31+ Core Components**: Includes customized inputs, cards, lists, and canvas tools built using React and TypeScript.
