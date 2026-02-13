import { motion } from "framer-motion";
import { type Project } from "@shared/schema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, ExternalLink, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";

const techIcons: Record<string, React.ElementType> = {
  react: SiReact,
  typescript: SiTypescript,
  nodejs: SiNodedotjs,
  python: SiPython,
  tailwind: SiTailwindcss,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  docker: SiDocker,
  kubernetes: SiKubernetes,
};

function getStatusColor(progress: number) {
  if (progress === 100) return "bg-chart-2";
  if (progress >= 20) return "bg-chart-3";
  return "bg-muted-foreground";
}

function getStatusLabel(progress: number) {
  if (progress === 100) return "Completed";
  if (progress >= 20) return "In Progress";
  return "Coming Soon";
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const statusColor = getStatusColor(project.progress);
  const statusLabel = getStatusLabel(project.progress);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-testid={`card-project-${project.id}`}
    >
      <Card className="overflow-hidden hover-elevate transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
        <div className="relative">
          <Progress
            value={project.progress}
            className="h-1 rounded-none"
            indicatorClassName={statusColor}
          />
          {project.imageUrl && (
            <div className="aspect-video relative overflow-hidden bg-muted group">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          )}
          <div className="absolute top-2 right-2">
            <Badge
              variant="secondary"
              className="backdrop-blur-sm bg-background/80"
              data-testid={`badge-status-${project.id}`}
            >
              {statusLabel}
            </Badge>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1 gap-4">
          <div className="space-y-2 flex-1">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight" data-testid={`text-title-${project.id}`}>
              {project.title}
            </h3>
            <p className="text-muted-foreground" data-testid={`text-description-${project.id}`}>
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => {
              const Icon = techIcons[tech.toLowerCase()];
              return (
                <Badge
                  key={tech}
                  variant="outline"
                  className="gap-1.5"
                  data-testid={`badge-tech-${tech.toLowerCase()}`}
                >
                  {Icon && <Icon className="w-3 h-3" />}
                  <span className="font-mono text-xs">{tech}</span>
                </Badge>
              );
            })}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-semibold" data-testid={`text-progress-${project.id}`}>
                {project.progress}%
              </span>
            </div>
            <Progress value={project.progress} indicatorClassName={statusColor} />
          </div>

          {project.eta && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span data-testid={`text-eta-${project.id}`}>ETA: {project.eta}</span>
            </div>
          )}

          <div className="flex gap-2 pt-2">
            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="flex-1"
                data-testid={`button-github-${project.id}`}
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button
                variant="default"
                size="sm"
                asChild
                className="flex-1"
                data-testid={`button-live-${project.id}`}
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
