"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const BLOG_POSTS = [
  {
    id: 1,
    title: "Advancements in VLSI Design: From Moore's Law to Modern Challenges",
    excerpt:
      "Exploring the latest trends in VLSI design, including 3D integration, chiplet architectures, and power optimization techniques.",
    date: "March 15, 2024",
    author: "Alex Chen",
    category: "VLSI Design",
    content: `VLSI (Very Large Scale Integration) has been the cornerstone of modern electronics for decades. As we approach the physical limits of transistor scaling, the industry is evolving to new architectures and approaches.

The traditional path of Moore's Law—doubling transistors every two years—is becoming increasingly challenging. Instead, we're seeing a shift towards:

1. **3D Integration**: Stacking multiple layers of silicon to increase density without relying solely on lithography improvements.

2. **Chiplet Architecture**: Instead of designing monolithic chips, companies like AMD and Intel are moving to modular designs with multiple smaller chips connected together.

3. **Heterogeneous Integration**: Combining different technologies (logic, memory, analog) on a single substrate.

4. **Power Efficiency Focus**: With mobile and IoT devices becoming ubiquitous, low-power design has become paramount.

These advancements are enabling a new generation of powerful, efficient processors that will drive innovation in AI, edge computing, and beyond.`,
  },
  {
    id: 2,
    title: "Building Custom Electronics Projects: From Concept to Prototype",
    excerpt:
      "A comprehensive guide to developing electronics projects, covering PCB design, prototyping, testing, and iteration strategies.",
    date: "February 28, 2024",
    author: "Alex Chen",
    category: "Hardware Design",
    content: `Building custom electronics projects is both an art and a science. Whether you're developing a simple Arduino-based prototype or a complex FPGA system, the fundamentals remain the same.

**Phase 1: Planning and Design**
- Define clear specifications
- Create schematic diagrams
- Perform preliminary simulations
- Plan for manufacturability

**Phase 2: PCB Design**
- Create high-quality layouts
- Ensure proper signal integrity
- Plan for thermal management
- Consider DFT (Design for Test)

**Phase 3: Prototyping**
- Manufacture prototype PCBs
- Hand-assemble or use assembly services
- Perform initial testing
- Debug and iterate

**Phase 4: Verification**
- Comprehensive testing
- Environmental testing
- Performance validation
- Regulatory compliance

The key to successful projects is iteration. Don't expect perfection on the first try. Use each iteration to learn and improve.`,
  },
  {
    id: 3,
    title: "IoT Architecture: Building Scalable Connected Systems",
    excerpt:
      "Best practices for designing scalable IoT systems, covering device connectivity, cloud integration, and data management.",
    date: "February 10, 2024",
    author: "Alex Chen",
    category: "IoT & Embedded",
    content: `The Internet of Things has grown from a buzzword to a fundamental part of modern technology. But building scalable, reliable IoT systems requires careful planning and execution.

**Key Components of IoT Architecture:**

1. **Edge Devices**: Smart sensors and controllers with onboard processing
2. **Connectivity Layer**: WiFi, Bluetooth, LoRaWAN, cellular, or custom protocols
3. **Gateway/Hub**: Central coordinator for local network management
4. **Cloud Platform**: Data storage, processing, and analytics
5. **Application Layer**: User interfaces and business logic

**Design Considerations:**
- Power efficiency for battery-powered devices
- Robust communication protocols
- Data security and encryption
- Scalability to millions of devices
- Edge processing for real-time decision making

Successful IoT systems require balancing flexibility with reliability, cost with quality, and features with power consumption.`,
  },
]

export function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<(typeof BLOG_POSTS)[0] | null>(null)

  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Latest Articles</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            <p className="text-foreground/70 text-lg max-w-2xl">
              Insights and articles on electronics, embedded systems, and hardware innovation.
            </p>
          </div>

          {/* Blog Posts */}
          <div className="space-y-6">
            {BLOG_POSTS.map((post, index) => (
              <div
                key={post.id}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card
                  className="border border-border hover:border-primary/50 transition-all cursor-pointer group"
                  onClick={() => setSelectedPost(post)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-semibold text-primary bg-primary/20 px-2.5 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-xs text-foreground/60 flex items-center gap-1">
                            <Calendar size={14} />
                            {post.date}
                          </span>
                        </div>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-base">{post.excerpt}</CardDescription>
                      </div>
                      <div className="flex-shrink-0 group-hover:translate-x-1 transition-transform">
                        <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/60 pt-2">
                      <User size={14} />
                      {post.author}
                    </div>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center animate-in fade-in duration-500 delay-300">
            <Button variant="outline" size="lg" className="gap-2 bg-transparent">
              View All Articles
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>

      {/* Blog Post Modal */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedPost && (
            <>
              <DialogHeader>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-semibold text-primary bg-primary/20 px-2.5 py-1 rounded-full">
                      {selectedPost.category}
                    </span>
                    <span className="text-xs text-foreground/60 flex items-center gap-1">
                      <Calendar size={14} />
                      {selectedPost.date}
                    </span>
                  </div>
                  <DialogTitle className="text-2xl">{selectedPost.title}</DialogTitle>
                  <p className="text-sm text-foreground/60 flex items-center gap-1">
                    <User size={14} />
                    {selectedPost.author}
                  </p>
                </div>
              </DialogHeader>
              <DialogDescription asChild>
                <div className="prose prose-invert max-w-none">
                  {selectedPost.content.split("\n\n").map((paragraph, idx) => (
                    <p key={idx} className="text-foreground/80 leading-relaxed whitespace-pre-wrap">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
