import Link from "next/link"
import { ArrowLeft, BookOpen } from "lucide-react"

import { RefinedButton } from "@/components/refined-button"
import { RefinedMagneticEffect } from "@/components/refined-magnetic-effect"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center space-y-6">
          <BookOpen className="w-16 h-16 text-muted-foreground" />
          <h1 className="text-4xl font-medium">Poem Not Found</h1>
          <p className="text-xl text-muted-foreground max-w-md">
            The poem you're looking for doesn't exist or may have been moved.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <RefinedButton intensity={0.2}>
              <Link href="/poetry">Browse all poems</Link>
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
