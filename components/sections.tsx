"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import {
  UserPlus,
  FlaskConical,
  ClipboardList,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    step: "Step 1",
    title: "Register Now",
    description:
      "Create your free practitioner account and get immediate access to our comprehensive lab ordering portal.",
    highlights: ["Quick sign-up", "Free registration", "Instant access"],
  },
  {
    icon: FlaskConical,
    step: "Step 2",
    title: "Order Tests",
    description:
      "Order traditional blood chemistry as well as a variety of functional tests - all in one place!",
    highlights: ["Blood chemistry", "Functional tests", "All-in-one portal"],
  },
  {
    icon: ClipboardList,
    step: "Step 3",
    title: "Get Results",
    description:
      "Receive all tests and patient/client results in one easy, HIPAA compliant location - the Virtual Clinic Portal.",
    highlights: ["HIPAA compliant", "Centralized results", "Easy to manage"],
  },
]

export function HowItWorksSection() {
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
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative bg-primary/5 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="fade-up mb-3 text-sm font-bold uppercase tracking-widest text-primary">
            How It Works
          </p>
          <h2 className="fade-up font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-foreground delay-100 md:text-4xl text-balance">
            Many Labs... <span className="text-primary">One Portal!</span>
          </h2>
          <p className="fade-up mt-4 text-base leading-relaxed text-muted-foreground delay-200">
            All types of Health Practitioners are welcomed! Get started in three
            simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((item, i) => (
            <div
              key={item.step}
              className="fade-up group relative rounded-2xl border-2 border-primary/10 bg-card p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/40 hover:-translate-y-1"
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              {/* Step number badge */}
              <div className="absolute -top-4 left-8">
                <span className="inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground shadow-lg shadow-primary/25">
                  {item.step}
                </span>
              </div>

              <div className="mb-6 mt-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                <item.icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
              </div>

              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-primary">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              <ul className="mt-5 flex flex-col gap-2">
                {item.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Connector line for desktop */}
        <div className="mt-12 hidden items-center justify-center md:flex">
          <div className="h-0.5 w-1/3 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}

export function ServicesSection() {
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

  const services = [
    {
      icon: FlaskConical,
      title: "Lab Ordering",
      description: "Order traditional blood chemistry as well as functional tests through our unified portal.",
    },
    {
      icon: ClipboardList,
      title: "Results Management",
      description: "Receive all patient results in one HIPAA compliant, easy-to-manage location.",
    },
    {
      icon: UserPlus,
      title: "Practice Growth",
      description: "Expand your reach, grow your practice, and serve more people with our diagnostic tools.",
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="fade-up mb-3 text-sm font-bold uppercase tracking-widest text-primary">
            Our Services
          </p>
          <h2 className="fade-up font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-foreground delay-100 md:text-4xl text-balance">
            Everything You Need <span className="text-primary">in One Place</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="fade-up group flex flex-col items-center rounded-2xl border-2 border-primary/10 bg-card p-10 text-center shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/40 hover:-translate-y-1"
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                <service.icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-primary">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTASection() {
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
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-primary py-24 lg:py-32"
    >
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary-foreground/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary-foreground/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="fade-up font-[family-name:var(--font-heading)] text-3xl font-extrabold text-primary-foreground md:text-5xl text-balance">
          Grow Your Practice.
          <br />
          Expand Your Reach.
          <br />
          Serve More People!
        </h2>
        <p className="fade-up mx-auto mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/85 delay-100">
          Join thousands of health practitioners who trust Virtual Clinic for
          their diagnostic needs. Register today and start making a difference.
        </p>
        <div className="fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row delay-200">
          <a
            href="https://app.access2.md/#/register"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-xl bg-primary-foreground px-8 py-3.5 text-sm font-bold text-primary shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Register Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://app.access2.md/#/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border-2 border-primary-foreground/40 px-8 py-3.5 text-sm font-bold text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/15 hover:border-primary-foreground/60"
          >
            Login to Portal
          </a>
        </div>
      </div>
    </section>
  )
}
