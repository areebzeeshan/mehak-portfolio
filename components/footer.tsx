"use client";

import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";
import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mehak-sattar",
    label: "LinkedIn",
    isExternal: true,
  },
  {
    icon: Twitter,
    href: "https://x.com/mehak_sattar_?s=11",
    label: "Twitter",
    isExternal: true,
  },
  {
    icon: Mail,
    href: "mailto:mehak.sattar.work@gmail.com",
    label: "Email",
    isExternal: false,
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              Mehak Sattar
            </h3>
            <p className="text-foreground/70 text-sm">
              Electronics Engineer specializing in embedded systems and Control
              systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            {/* Social Links */}
            <div className="">
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={index}
                      href={link.href}
                      aria-label={link.label}
                      target={link.isExternal ? "_blank" : "_self"}
                      rel={link.isExternal ? "noopener noreferrer" : undefined}
                      className="p-3 rounded-lg border border-border hover:bg-primary hover:border-primary hover:text-background transition-all"
                    >
                      <Icon size={20} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border py-8">
          {/* Scroll to Top - Right Aligned */}
          <div className="flex justify-end">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-border hover:bg-card hover:border-primary transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
