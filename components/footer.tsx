import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Partners", href: "#partners" },
  ],
  practitioners: [
    { label: "Register", href: "https://app.access2.md/#/register", external: true },
    { label: "Login", href: "https://app.access2.md/#/login", external: true },
    { label: "Lab Portal", href: "https://app.access2.md/#/login", external: true },
    { label: "FAQ", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "HIPAA Compliance", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t-2 border-primary/15 bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#home" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Virtual Clinic logo"
                width={180}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Diagnostic solutions for non-traditional health practitioners.
              Empowering you to grow your practice and serve more people.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a href="mailto:info@virtualclinic.md" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Mail className="h-4 w-4 text-primary" />
                info@virtualclinic.md
              </a>
              <a href="tel:5551234567" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Phone className="h-4 w-4 text-primary" />
                (555) 123-4567
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                United States
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-wider text-primary">
              Company
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-wider text-primary">
              Practitioners
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.practitioners.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-wider text-primary">
              Legal
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t-2 border-primary/10 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-primary">Virtual Clinic</span>. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            We respect your privacy and do not collect cookies.
          </p>
        </div>
      </div>
    </footer>
  )
}
