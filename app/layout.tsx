import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Electronics Engineer | Portfolio",
  description:
    "Professional portfolio of an electronics engineer specializing in embedded systems, PCB design, and hardware prototyping.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  keywords:
    "electronics engineer, embedded systems, PCB design, hardware prototyping, Arduino, FPGA",
  openGraph: {
    title: "Electronics Engineer | Portfolio",
    description: "Innovating circuits and systems for the future",
    type: "website",
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navigation />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
