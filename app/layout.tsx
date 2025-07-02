import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import CustomCursor from "@/components/custom-cursor"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
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
