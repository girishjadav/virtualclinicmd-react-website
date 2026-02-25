"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Heart, Eye, Handshake } from "lucide-react"

const values = [
  {
    icon: Eye,
    title: "The Vision",
    description:
      "A health care model where access is not limited by licensure and where all health practitioners work together for the optimal health of the patient.",
  },
  {
    icon: Heart,
    title: "The Mission",
    description:
      "Providing access at very affordable prices to support functional health practitioners as they help their patients achieve optimal health.",
  },
  {
    icon: Handshake,
    title: "The Partnership",
    description:
      "We continue to grow this vision every day as we partner with health practitioners around the country.",
  },
]

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top section with quote and image */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Image */}
          <div className="fade-up relative flex-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-4 ring-primary/15">
              <Image
                src="/images/about-vision.jpg"
                alt="Healthcare team collaborating together"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-foreground/5" />
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-1 flex-col">
            <p
              className="fade-up mb-3 text-sm font-bold uppercase tracking-widest text-primary"
            >
              About Us
            </p>
            <h2
              className="fade-up font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-primary delay-100 md:text-4xl text-balance"
            >
              {"\"The medical system is not broken, it is dysfunctional.\""}
            </h2>
            <p className="fade-up mt-2 text-sm font-bold text-foreground delay-150">
              &mdash; Kayur Patel, MD, MRO, FACP
            </p>
            <p
              className="fade-up mt-6 text-base leading-relaxed text-muted-foreground delay-200 text-pretty"
            >
              Dr. Patel had a vision decades ago for a health care model where
              access was not limited by licensure and where all health
              practitioners worked together for the optimal health of the
              patient. That vision is now a reality with Virtual Clinic and we
              continue to grow this vision every day as we partner with health
              practitioners around the country.
            </p>
          </div>
        </div>

        {/* Values cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {values.map((value, i) => (
            <div
              key={value.title}
              className="fade-up group relative overflow-hidden rounded-2xl border-2 border-primary/10 bg-card p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/40 hover:-translate-y-1"
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                <value.icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-primary">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
