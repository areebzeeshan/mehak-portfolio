import { PROJECTS } from "@/components/constants/constants";
import { Navigation } from "@/components/navigation";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="my-20 mx-8 md:mx-14 lg:mx-20">
      <h1 className="text-4xl font-bold mb-6">My Projects</h1>
      <p className="text-lg text-muted-foreground mb-8">
        My recent engineering projects featuring AI-assisted BCI development,
        electronics design, embedded systems, communication systems and signal &
        systems applications
      </p>
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
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
