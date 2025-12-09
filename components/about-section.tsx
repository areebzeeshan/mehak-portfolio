"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const MILESTONES = [
  {
    year: "10 Dec 2022 – 5 Nov 2024 ",
    title: "Founder & Secretary General, IIEE Student Council",
    description:
      "During my tenure as the Founder & Secretary General of the IIEE Student Council, I actively contributed to the council's establishment and helped shape its initial framework, vision, and activities.",
  },
  {
    year: "5 Jun 2023 – 10 Jun 2025",
    title: "Founder and Chairperson, WIE IEEE IIEE Student Branch",
    description:
      "As the Founder and Chairperson of the WIE IEEE IIEE Student Branch, I revitalized the IEEE presence on campus by identifying the necessity for a Women in Engineering (WIE) affinity group—mirroring those in other universities—proposing its formation, and launching introductory events to foster awareness and momentum. In my role, I directed over 20 successful events in partnership with established WIE branches across Pakistan, featuring key initiatives such as 'The LinkedIn Marathon,' 'Mental Health Day,' 'Pink Pride,' a LinkedIn Optimization seminar, and community service projects, thereby cultivating a supportive, empowering, and growth-oriented community for women engineers at IIEE.",
  },
  {
    year: "10 Jan 2025 – 20 Oct 2025",
    title: "Marketing Head, Office of Innovation and Entrepreneurship (OIE), IIEE",
    description:
      "As Marketing Head at OIE, I represented the organization at various workshops, business conferences, and entrepreneurship events, including SIMERGE 2025 at KSBL, while addressing the prior lack of entrepreneurial engagement on campus by proposing and organizing programs focused on innovation, startup culture, and leadership development. This strategic effort helped build a robust entrepreneurial ecosystem at IIEE through effective planning, execution, and student involvement. Additionally, I spearheaded the flagship event 'Vision to Venture,' featuring interactive activities like case study challenges, business chart-making, simulations, and a pitch competition, fostering hands-on skills in problem-solving, decision-making, and creative business ideation to promote innovation, teamwork, and practical learning among participants.",
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
              I'm a passionate electronics engineer with 4+ years of experience
              designing and implementing complex hardware systems. My expertise
              spans from PCB design and embedded systems to FPGA development and
              IoT solutions.
            </p>
            <p>
              Results-driven Industrial Electronics Engineer with experience in
              smart systems, automation, and embedded solutions.
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
              <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
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
