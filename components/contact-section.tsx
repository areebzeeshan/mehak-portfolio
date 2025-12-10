"use client";

import type React from "react";
import { Mail, Linkedin, Twitter, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "mehak.sattar.work@gmail.com",
    href: "mailto:mehak.sattar.work@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 3172144920",
    href: "tel:+923172144920",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Karachi, Pakistan",
    href: "#",
  },
];

export function ContactSection() {
  const { toast } = useToast();

  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Section Header */}
          <div className="space-y-4 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
            <p className="text-foreground/70 text-lg">
              Have a project in mind or want to discuss opportunities? I'd love
              to hear from you.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Contact Information</h3>

              {/* Contact Details */}
              <div className="space-y-4">
                {CONTACT_INFO.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Link
                      key={index}
                      href={info.href}
                      target={
                        info.label === "Email" || info.label === "Phone"
                          ? "_self"
                          : "_blank"
                      }
                      rel={
                        info.label === "Email" || info.label === "Phone"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-card transition-all group"
                    >
                      <div className="p-2 rounded-lg bg-primary/20 mt-1">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground/70">
                          {info.label}
                        </p>
                        <p className="text-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
