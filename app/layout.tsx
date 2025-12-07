import type React from "react"
import type { Metadata, Viewport } from "next"
import { Instrument_Serif, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AnimatedFavicon } from "@/components/animated-favicon"
import { AIChat } from "@/components/ai-chat"
import { AIChatProvider } from "@/components/ai-chat-provider"
import { AppLayout } from "@/components/app-layout"
import "./globals.css"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Vedant's Portfolio",
  description: "Designing intelligent interfaces that bridge human intuition and machine intelligence",
  icons: {
    icon: [{ url: "/logo-favicon.svg", type: "image/svg+xml" }],
    apple: "/logo-favicon.svg",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#050505",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <AIChatProvider>
          <div className="noise-overlay" />
          <AnimatedFavicon />
          <AppLayout>
            {children}
          </AppLayout>
          <AIChat />
          <Analytics />
        </AIChatProvider>
      </body>
    </html>
  )
}
