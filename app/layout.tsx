import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import CustomCursor from "@/components/custom-cursor"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { PortfolioChat } from "@/components/portfolio-chat"
import { Analytics } from '@vercel/analytics/react'

// Fonts are now loaded via CSS in globals.css for the Industrial Fintech design system
// Typography Stack: Inter (UI), Manrope (Display/Headings), JetBrains Mono (Data/Technical), Instrument Serif (Design accents)

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"), // Add this line
  title: "Vedant's Portfolio",
  description: "Check out my portfolio showcasing my work in UX design, creative coding, and more.",
  generator: "v0",
  icons: {
    icon: [
      {
        url: "/favicon-light.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-dark.svg", 
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-inter antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {/* Background Effects Layer */}
          <div className="fixed inset-0 pointer-events-none z-0">
            {/* Grid Pattern */}
            <div className="cyber-grid" />
            {/* CRT Scanlines */}
            <div className="scanlines" />
            {/* Film Grain Noise */}
            <div className="film-grain" />
          </div>
          
          <div className="relative min-h-screen bg-background z-10">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <PortfolioChat />
          </div>
          <CustomCursor />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
