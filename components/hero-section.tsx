"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, FlaskConical, Users } from "lucide-react"
import { CountUp } from "@/components/count-up"

const stats = [
  { icon: Shield, label: "HIPAA Compliant", end: 100, suffix: "%", duration: 2000 },
  { icon: FlaskConical, label: "Lab Partners", end: 50, suffix: "+", duration: 2200 },
  { icon: Users, label: "Practitioners", end: 1000, suffix: "+", duration: 2500 },
]

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

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

    const elements = heroRef.current?.querySelectorAll(".fade-up")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/3"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/2 -left-20 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 pt-28 pb-16 lg:flex-row lg:gap-16 lg:px-8 lg:pt-32 lg:pb-24">
        {/* Left content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <div
            className="fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary"
          >
            <FlaskConical className="h-4 w-4" />
            Diagnostic Solutions for Practitioners
          </div>

          <h1
            className="fade-up font-[family-name:var(--font-heading)] text-4xl font-extrabold leading-tight tracking-tight text-foreground delay-100 md:text-5xl lg:text-6xl text-balance"
          >
            Diagnostic{" "}
            <span className="text-primary">Solutions</span>
            <br />
            for the <span className="text-primary">Non-Traditional</span>{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Practitioner</span>
              <span className="absolute bottom-1 left-0 z-0 h-3 w-full rounded bg-primary/15" />
            </span>
          </h1>

          <p
            className="fade-up mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground delay-200 text-pretty"
          >
            {"\"My vision is to lock arms with local health practitioners to make them the STAR in their zip code!\""}
          </p>
          <p className="fade-up mt-2 text-sm font-bold text-primary delay-300">
            ~ Kayur Patel, MD, MRO, FACP &mdash; Founder, Virtual Clinic
          </p>

          <div
            className="fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row delay-[400ms]"
          >
            <a
              href="https://app.access2.md/#/register"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/35 hover:brightness-110"
            >
              Register Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              href="#about"
              className="flex items-center gap-2 rounded-xl border-2 border-primary/30 bg-card px-8 py-3.5 text-sm font-bold text-primary shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:shadow-md"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div
            className="fade-up mt-14 grid grid-cols-3 gap-6 delay-500"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1.5 lg:items-start">
                <div className="flex items-center gap-2">
                  <stat.icon className="h-5 w-5 text-primary" />
                  <CountUp
                    end={stat.end}
                    suffix={stat.suffix}
                    duration={stat.duration}
                    className="font-[family-name:var(--font-heading)] text-2xl font-extrabold text-primary"
                  />
                </div>
                <span className="text-xs font-medium text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div
          className="fade-up relative flex-1 delay-300"
        >
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-3xl shadow-2xl ring-4 ring-primary/15">
            <Image
              src="/images/hero-doctor.jpg"
              alt="Doctor using telemedicine technology"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-foreground/5" />
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-4 -left-4 rounded-2xl border-2 border-primary/20 bg-card p-4 shadow-xl md:-bottom-6 md:-left-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-primary">HIPAA Compliant</p>
                <p className="text-xs text-muted-foreground">Secure & Private</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
