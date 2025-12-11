"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { 
    label: "My Work", 
    submenu: [
      { label: "Projects", href: "/projects" },
      { label: "Lab works", href: "/lab-works" },
      { label: "Presentations", href: "/presentations" },
      { label: "References", href: "/references" },
      { label: "Management", href: "/management" },
      { label: "Certification & Awards", href: "/certifications" },
    ]
  },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Mehak Sattar 
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              link.submenu ? (
                <div key={link.label} className="relative group">
                  <button className="flex items-center px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    {link.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-background border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {link.submenu.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`fixed top-16 left-0 right-0 bottom-0 bg-background/70 backdrop-blur-lg z-50 transform transition-all duration-300 ease-in-out overflow-y-auto border-r border-border/20 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden`}
        >

          <div className="p-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.href || link.label}>
                {link.submenu ? (
                  <div className="space-y-1">
                    <button
                      onClick={() => setOpenSubmenu(openSubmenu === link.label ? null : link.label)}
                      className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                    >
                      <span>{link.label}</span>
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-200 ${
                          openSubmenu === link.label ? 'transform rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {openSubmenu === link.label && (
                      <div className="pl-6 space-y-1 mt-1">
                        {link.submenu.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
