"use client"

import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react"

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
]

const SOCIAL_LINKS = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:alex@example.com", label: "Email" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              Alex Chen
            </h3>
            <p className="text-foreground/70 text-sm">
              Electronics Engineer specializing in embedded systems and hardware design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {FOOTER_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-foreground/70 hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="p-2 rounded-lg border border-border hover:bg-primary hover:border-primary hover:text-background transition-all"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-foreground/60 flex items-center gap-1">
            Made with <Heart size={16} className="text-primary" /> by Alex Chen © {currentYear}
          </p>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg border border-border hover:bg-card hover:border-primary transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}
