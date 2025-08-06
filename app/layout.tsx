import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import CustomCursor from "@/components/custom-cursor"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"

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
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen bg-background">
            <SiteHeader />
            <main className="flex-1">{children}</main>
          </div>
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  )
}
