import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Works } from "@/components/works"
import { TechMarquee } from "@/components/tech-marquee"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { SectionBlend } from "@/components/section-blend"
import { GlobalSphere } from "@/components/global-sphere"

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <GlobalSphere />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Works />
        <TechMarquee />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
