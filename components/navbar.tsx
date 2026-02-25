"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#partners", label: "Partners" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg shadow-primary/5 border-b-2 border-primary/15"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 group">
          <Image
            src="/images/logo.png"
            alt="Virtual Clinic logo"
            width={200}
            height={50}
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-4 py-2 text-sm font-semibold text-foreground/70 transition-colors duration-300 hover:text-primary"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 group-hover:w-3/4" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://app.access2.md/#/login"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border-2 border-primary/30 px-5 py-2.5 text-sm font-bold text-primary transition-all duration-300 hover:border-primary hover:bg-primary/5"
          >
            Login
          </a>
          <a
            href="https://app.access2.md/#/register"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/35 hover:brightness-110"
          >
            Register Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-primary/20 text-primary transition-colors lg:hidden hover:bg-primary/5"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 lg:hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="border-t-2 border-primary/15 bg-card/95 backdrop-blur-md px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-sm font-semibold text-foreground/70 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://app.access2.md/#/login"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-3 block rounded-xl border-2 border-primary/30 px-6 py-2.5 text-center text-sm font-bold text-primary transition-all duration-300 hover:border-primary hover:bg-primary/5"
          >
            Login
          </a>
          <a
            href="https://app.access2.md/#/register"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 block rounded-xl bg-primary px-6 py-2.5 text-center text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:brightness-110"
          >
            Register Now
          </a>
        </div>
      </div>
    </header>
  )
}
