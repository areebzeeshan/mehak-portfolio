"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Zap, Wrench, Code, Brain, Users, Lightbulb, Target } from "lucide-react"

const SKILL_CATEGORIES = [
  {
    icon: Zap,
    title: "Hardware Design",
    skills: [
      { name: "PCB Layout", level: 95 },
      { name: "Circuit Design", level: 90 },
      { name: "Signal Integrity", level: 85 },
      { name: "Power Electronics", level: 80 },
    ],
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    skills: [
      { name: "ARM Cortex", level: 92 },
      { name: "FPGA", level: 88 },
      { name: "Arduino/PIC", level: 95 },
      { name: "Real-time OS", level: 85 },
    ],
  },
  {
    icon: Code,
    title: "Programming",
    skills: [
      { name: "C/C++", level: 85 },
      { name: "Python", level: 90 },
      { name: "Assembly", level: 82 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Software",
    skills: [
      { name: "Visual Studio Code", level: 92 },
      { name: "MATLAB/Simulink", level: 88 },
      { name: "AutoCad", level: 85 },
      { name: "Proteus", level: 83 },
    ],
  },
  {
    icon: Brain,
    title: "Technical Skills",
    skills: [
      { name: "IoT Architecture", level: 89 },
      { name: "Test & Verification", level: 91 },
      { name: "Signal Processing", level: 87 },
      { name: "System Design", level: 90 },
    ],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", level: 95 },
      { name: "Team Leadership", level: 88 },
      { name: "Communication", level: 90 },
      { name: "Project Management", level: 85 },
    ],
  },
]

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-foreground/90">{name}</span>
        <span className="text-primary font-semibold">{level}%</span>
      </div>
      <div className="w-full h-2 bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="border border-border hover:border-primary/50 transition-colors h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/20">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {category.skills.map((skill, idx) => (
                        <SkillBar key={idx} name={skill.name} level={skill.level} />
                      ))}
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>

          {/* Key Attributes */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {[
              { icon: Target, label: "Detail-Oriented", value: "High precision design" },
              { icon: Lightbulb, label: "Innovative", value: "Creative problem-solving" },
              { icon: Zap, label: "Efficient", value: "Optimized solutions" },
              { icon: Users, label: "Collaborative", value: "Team-focused approach" },
            ].map((attr, idx) => {
              const Icon = attr.icon
              return (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-border bg-background/50 hover:bg-card transition-colors animate-in fade-in zoom-in-95 duration-500"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <Icon className="w-6 h-6 text-primary mb-2" />
                  <p className="font-semibold text-foreground">{attr.label}</p>
                  <p className="text-sm text-foreground/70">{attr.value}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
