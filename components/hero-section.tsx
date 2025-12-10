"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-2">
              <p className="text-primary font-semibold">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Mehak
                </span>
              </h1>
              <p className="text-2xl text-muted-foreground">
                Industrial Electronics Engineer
              </p>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
              Results-driven Industrial Electronics Engineer with technical
              experience in control systems, automation, and embedded
              technologies, dedicated to building reliable, efficient, and
              industry-focused solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() => scrollToSection("projects")}
              >
                View My Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            {/* <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="p-2 rounded-lg border border-border hover:bg-card transition-colors"
              >
                <Github size={20} />
              </a>
              <Link
                href="https://www.linkedin.com/in/mehak-sattar"
                target="_blank"
                className="p-2 rounded-lg border border-border hover:bg-card transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div> */}
          </div>

          {/* Right Side - Profile Image */}
          <div className="hidden md:block animate-in fade-in zoom-in-95 duration-700 delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-3xl opacity-20"></div>
              <img
                src="/mehak.jpeg"
                alt="Electronics Engineer"
                className="relative rounded-2xl border border-border w-full"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="p-2 rounded-full border border-border hover:bg-card transition-colors"
          >
            <ArrowDown size={24} className="text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}
