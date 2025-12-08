"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const MILESTONES = [
  {
    year: "2020",
    title: "Bachelor of Science - Electronics Engineering",
    description: "Graduated from Tech University with honors. Focused on embedded systems and signal processing.",
  },
  {
    year: "2021",
    title: "Junior Electronics Engineer",
    description: "Joined TechCorp as an embedded systems engineer. Designed and tested IoT device prototypes.",
  },
  {
    year: "2022",
    title: "Senior Electronics Engineer",
    description: "Promoted to lead role. Led cross-functional team in developing custom hardware solutions.",
  },
  {
    year: "2023",
    title: "Principal Hardware Architect",
    description: "Architected next-generation FPGA-based systems and established PCB design standards.",
  },
]

const SKILLS_SUMMARY = [
  "Embedded Systems Design",
  "PCB Layout & Design",
  "Hardware Prototyping",
  "FPGA Development",
  "Signal Processing",
  "IoT Solutions",
  "Circuit Analysis",
  "Test & Verification",
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>

          {/* Bio */}
          <div className="text-lg text-foreground/80 leading-relaxed space-y-4 max-w-3xl">
            <p>
              I'm a passionate electronics engineer with 4+ years of experience designing and implementing complex
              hardware systems. My expertise spans from PCB design and embedded systems to FPGA development and IoT
              solutions.
            </p>
            <p>
              My journey in electronics began in university where I discovered my love for circuit design and hardware
              prototyping. Since then, I've worked on diverse projects ranging from IoT smart home devices to advanced
              signal processing systems.
            </p>
            <p>
              I'm committed to staying at the forefront of technology, continuously learning about emerging platforms
              like edge computing, advanced microcontrollers, and cutting-edge FPGA architectures.
            </p>
          </div>

          {/* Career Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Career Milestones</h3>
            <div className="space-y-4">
              {MILESTONES.map((milestone, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary mt-1.5"></div>
                    {index !== MILESTONES.length - 1 && <div className="w-0.5 h-16 bg-border mt-2"></div>}
                  </div>
                  <div className="pb-4">
                    <p className="text-sm font-semibold text-primary">{milestone.year}</p>
                    <h4 className="text-lg font-semibold text-foreground">{milestone.title}</h4>
                    <p className="text-foreground/70">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Key Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {SKILLS_SUMMARY.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-3 bg-background border border-border rounded-lg text-sm font-medium hover:border-primary transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Resume Download */}
          <div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
              <Download size={20} />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
