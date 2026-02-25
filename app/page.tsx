import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection, HowItWorksSection, CTASection } from "@/components/sections"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HowItWorksSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </main>
  )
}
