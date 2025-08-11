"use client"

import type React from "react"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex items-center gap-2 interactive">
      <Sun className="h-[1rem] w-[1rem] text-muted-foreground" />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle dark mode"
        className="data-[state=checked]:bg-primary transition-all duration-200 ease-out"
        style={
          {
            "--switch-thumb-transform": theme === "dark" ? "translateX(100%)" : "translateX(0%)",
            backgroundColor: theme === "dark" ? undefined : "hsl(0 0% 80%)", // Custom light gray for light mode
          } as React.CSSProperties
        }
      />
      <style jsx>{`
        [data-state="checked"] [data-part="thumb"] {
          transform: translateX(100%);
          transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        }
        [data-state="unchecked"] [data-part="thumb"] {
          transform: translateX(0%);
          transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
      <Moon className="h-[1rem] w-[1rem] text-muted-foreground" />
      <span className="sr-only">Toggle theme</span>
    </div>
  )
}
