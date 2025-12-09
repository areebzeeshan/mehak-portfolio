"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PROJECTS = [
  {
    id: 1,
    title: "AI-Assisted Brain Computer Interface for EEG-to-Text Communication",
    description:
      "A real-time BCI system using the Neurosity Crown headset to translate multi-channel EEG signals into text commands through artifact removal, filtering, FFT feature extraction, and classification with optimized KNN and Random Forest models. Features a TypeScript React dashboard built with Vite to display outputs like Yes, No, Help, and Water, integrating signal processing, machine learning, and frontend development for non-invasive communication.",
    technologies: [
      "Neurosity Crown",
      "EEG",
      "FFT",
      "KNN",
      "Random Forest",
      "TypeScript",
      "Vite",
      "React",
      "JavaScript",
    ],
    image: "/eeg-bci-interface-dashboard.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Air Quality Monitoring System",
    description:
      "A real-time system utilizing the MQ-135 gas sensor and Arduino Uno to measure environmental pollutants, compute the Air Quality Index (AQI), and deliver visual LED alerts and auditory buzzer warnings when thresholds are exceeded, demonstrating skills in sensor integration, data acquisition, and automated monitoring.",
    technologies: [
      "MQ-135",
      "Arduino Uno",
      "LED Display",
      "Buzzer",
      "AQI Calculation",
    ],
    image: "/air-quality-monitoring-system.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Line Following Robot Using L293D",
    description:
      "Designed and built a line-following robot incorporating the L293D motor driver, BO motors, IR proximity sensors, and a custom Vero board circuit, with precise motor control, 9V power supply, modular pin headers, optimized wiring, stable wheels, and a manual switch for operation, showcasing skills in embedded design, component integration, and sensor-driven robotic control.",
    technologies: [
      "L293D",
      "BO Motors",
      "IR Proximity Sensors",
      "Vero Board",
      "Embedded Circuit Design",
    ],
    image: "/line-following-robot.jpeg",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Real-Time Data Logging System Using ESP32",
    description:
      "Designed and implemented a system with ESP32 to capture analog and digital sensor inputs, logging data to Google Sheets every 10 seconds, incorporating circuit design and API integration for automated acquisition and remote monitoring.",
    technologies: [
      "ESP32",
      "Google Sheets",
      "API",
      "Sensor Inputs",
      "Circuit Design",
    ],
    image: "/real-time-data-logging-system.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    title: "Image Enhancement Using Interpolation Techniques",
    description:
      "A project applying interpolation methods to boost image quality and resolution, enhancing visual fidelity by filling pixel gaps with strategic techniques while preserving original features.",
    technologies: ["Interpolation Techniques", "Image Processing"],
    image: "/image-enhancement-interpolation.png",
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    title: "Smart Home Automation System Using ESP8266 & ESP32",
    description:
      "Designed and implemented a comprehensive smart home system with ESP32 as the central controller and ESP8266 modules for specific devices, enabling Wi-Fi-based automation and remote control of lighting, heating, security, and door locks.",
    technologies: [
      "ESP8266",
      "ESP32",
      "Wi-Fi Communication",
      "Smart Home Automation",
    ],
    image: "/smart-home-automation-system.png",
    github: "#",
    demo: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured Projects
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            <p className="text-foreground/70 text-lg max-w-2xl">
              A collection of my recent work in electronics design, embedded
              systems, and hardware development.
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
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div>
                          <CardDescription className="text-foreground/70 line-clamp-2">
                            {project.description}
                          </CardDescription>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-sm">
                        <p className="text-sm">{project.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
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
                  {/* <div className="flex gap-2 pt-4">
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
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
