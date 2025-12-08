"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const PROJECTS = [
  {
    id: 1,
    title: "IoT Smart Home Hub",
    description:
      "A central control system for IoT devices using ESP32 and custom PCB design. Manages lighting, temperature, and security systems.",
    technologies: ["ESP32", "Arduino", "PCB Design", "MQTT", "Python"],
    image: "/smart-home-iot-hub-circuit-board.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Robotic Arm Controller",
    description:
      "FPGA-based motion controller for a 6-DOF robotic arm with real-time servo control and inverse kinematics.",
    technologies: ["FPGA", "Verilog", "ARM Cortex", "Real-time OS", "CAD"],
    image: "/robotic-arm-fpga-controller.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Signal Processing Platform",
    description:
      "High-speed signal acquisition and processing system using ADC, DSP algorithms, and ARM microcontroller for audio analysis.",
    technologies: ["ARM Cortex-M4", "ADC", "DSP", "C/C++", "MATLAB"],
    image: "/signal-processing-oscilloscope-display.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Wireless Power Monitoring",
    description:
      "IoT-enabled power meter using LoRaWAN for remote monitoring. Features custom power analysis circuitry and cloud integration.",
    technologies: ["LoRaWAN", "Arduino", "Cloud API", "PCB Design", "Power Electronics"],
    image: "/power-meter-wireless-sensor-network.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    title: "FPGA Neural Network Accelerator",
    description:
      "Optimized FPGA implementation of neural networks for edge AI inference with custom HLS design for low latency.",
    technologies: ["FPGA", "HLS", "Machine Learning", "Vivado", "Python"],
    image: "/fpga-neural-network-ai-accelerator-board.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    title: "Battery Management System",
    description:
      "Comprehensive BMS design with cell balancing, temperature monitoring, and safety protection circuits for lithium batteries.",
    technologies: ["BMS IC", "Balancing Circuits", "Thermistor", "CAN Bus", "Altium"],
    image: "/battery-management-system-pcb-design.jpg",
    github: "#",
    demo: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            <p className="text-foreground/70 text-lg max-w-2xl">
              A collection of my recent work in electronics design, embedded systems, and hardware development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <Card
                key={project.id}
                className="border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group h-full flex flex-col"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-card">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Card Content */}
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-foreground/70 line-clamp-2">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-primary/20 text-primary hover:bg-primary/30 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent" asChild>
                      <a href={project.github}>
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 gap-2 bg-primary hover:bg-primary/90" asChild>
                      <a href={project.demo}>
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
