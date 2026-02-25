"use client"

import { useEffect, useRef } from "react"
import { Building2 } from "lucide-react"

const partners = [
  "Transformation Health",
  "Optimal Health Systems",
  "Impact Health Sharing",
  "WellSpan for Life",
  "Optimal Health Coaching",
  "Functional Lab Partners",
  "Integrative Diagnostics",
  "Holistic Care Network",
]

export function PartnersSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-up")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="partners" ref={sectionRef} className="relative bg-primary/5 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="fade-up mb-3 text-sm font-bold uppercase tracking-widest text-primary">
            Trusted Partners
          </p>
          <h2 className="fade-up font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-foreground delay-100 md:text-4xl text-balance">
            Our Network of <span className="text-primary">Partners</span>
          </h2>
          <p className="fade-up mt-4 text-base leading-relaxed text-muted-foreground delay-200">
            We work with leading labs and health organizations to deliver
            comprehensive diagnostic solutions.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="fade-up relative mt-16 overflow-hidden delay-300">
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-primary/5 to-transparent" />

        <div className="flex animate-marquee gap-6">
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={`${partner}-${i}`}
              className="flex shrink-0 items-center gap-3 rounded-xl border-2 border-primary/15 bg-card px-6 py-4 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <span className="whitespace-nowrap text-sm font-semibold text-foreground">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
