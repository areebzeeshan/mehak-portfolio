"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const MILESTONES = [
  {
    year: "14 Oct 2024 – 8 Nov 2024",
    title: "Electronics Intern at Pakistan Airport Security",
    description:
      "Monitored critical aviation systems including radar, communication networks and navigational aids Assisted in maintenance activities across ECR, ACC, and Radar TR departments. Conducted research on FDPS, ATMS, VCCS, ADS-B and radar surveillance systems.",
  },
  {
    year: "1 Oct 2024 – 26 Oct 2024",
    title: "Electronics Intern at Fami Engineering",
    description:
      "Explored and compared competitive industrial solutions across multiple platforms. Evaluated products and services from various companies to understand market positioning, marketing strategies, and industry trends. Developed technical content and documentation related to electronic systems.",
  },
  {
    year: "23 Sep 2023 – 20 Oct 2023",
    title: "Instrumentation Intern at Automation Play",
    description:
      "Gained in-depth understanding of PLC and HMI architectures, programming concepts and their integration in automation systems. Developed foundational skills in SCADA development, including system structure and supervisory control functions.",
  },
];

const SKILLS_SUMMARY = [
  "MATLAB & Simulink",
  "LabVIEW",
  "WinCC",
  "Siemens Simatic Manager",
  "AVR Programming",
  "FPGA Design",
  "Code::Blocks / Code Studio",
  "Visual Studio Code",
  "Proteus",
  "AutoCAD",
  "Test & Verification",
];

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
              I’m an Industrial Electronics Engineer passionate about
              automation, smart systems and creating practical engineering
              solutions for real-world applications. My expertise includes
              embedded technologies, IoT, PLC programming, SCADA, HMI, control
              systems and signal processing.
            </p>
            <p>
              I focus on designing reliable, efficient and user-centered systems
              that enhance performance and deliver meaningful value. Turning
              ideas into functional, impactful solutions is what drives my work.
            </p>
            <p>
              Committed to delivering efficient, innovative, and user-focused
              engineering solutions that enhance system performance, support
              organizational growth, and drive impactful technological
              advancements.
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
                    {index !== MILESTONES.length - 1 && (
                      <div className="w-0.5 h-16 bg-border mt-2"></div>
                    )}
                  </div>
                  <div className="pb-4">
                    <p className="text-sm font-semibold text-primary">
                      {milestone.year}
                    </p>
                    <h4 className="text-lg font-semibold text-foreground">
                      {milestone.title}
                    </h4>
                    <p className="text-foreground/70">
                      {milestone.description}
                    </p>
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
            <a href="/Mehak Europaas Cv.pdf" download="Mehak Europaas Cv.pdf">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 gap-2"
              >
                <Download size={20} />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
