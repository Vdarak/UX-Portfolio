import Link from "next/link"
import { ArrowLeft, Gamepad2 } from "lucide-react"

import { RefinedButton } from "@/components/refined-button"
import { RefinedMagneticEffect } from "@/components/refined-magnetic-effect"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center space-y-6">
          <Gamepad2 className="w-16 h-16 text-muted-foreground" />
          <h1 className="text-4xl font-medium">Game Not Found</h1>
          <p className="text-xl text-muted-foreground max-w-md">
            The game you're looking for doesn't exist or may have been moved.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <RefinedButton intensity={0.2}>
              <Link href="/games">Browse all games</Link>
            </RefinedButton>
            <RefinedButton variant="outline" intensity={0.2}>
              <RefinedMagneticEffect intensity={0.15} range={60}>
                <Link href="/" className="flex items-center">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to home
                </Link>
              </RefinedMagneticEffect>
            </RefinedButton>
          </div>
        </div>
      </div>
    </main>
  )
}
