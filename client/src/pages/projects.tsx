import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { type Project } from "@shared/schema";
import { ProjectCard } from "@/components/project-card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type FilterType = "all" | "completed" | "in-progress" | "coming-soon";

export default function Projects() {
  const [filter, setFilter] = useState<FilterType>("all");

  const { data: projects = [], isLoading, error } = useQuery<Project[]>({
  queryKey: ["projects"],
  queryFn: async () => {
    const response = await fetch("http://localhost:5000/api/projects");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched projects:", data);
    return data;
  },
});

  console.log("Projects:", projects, "Error:", error); // Debug log for state

  const filteredProjects = projects
    .filter((project) => {
      if (filter === "all") return true;
      if (filter === "completed") return project.progress === 100;
      if (filter === "in-progress") return project.progress >= 20 && project.progress < 100;
      if (filter === "coming-soon") return project.progress < 20;
      return true;
    })
    .sort((a, b) => b.progress - a.progress);

  const stats = {
    total: projects.length,
    completed: projects.filter((p) => p.progress === 100).length,
    inProgress: projects.filter((p) => p.progress >= 20 && p.progress < 100).length,
    comingSoon: projects.filter((p) => p.progress < 20).length,
  };

  return (
    <div className="min-h-screen pt-24 px-4 pb-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4" data-testid="text-page-title">
            All Projects
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Explore my portfolio of completed works, ongoing developments, and upcoming ideas
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-lg border bg-card">
              <p className="text-sm text-muted-foreground mb-1">Total Projects</p>
              <p className="text-2xl font-bold" data-testid="text-stat-total">{stats.total}</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <p className="text-sm text-muted-foreground mb-1">Completed</p>
              <p className="text-2xl font-bold text-chart-2" data-testid="text-stat-completed">{stats.completed}</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <p className="text-sm text-muted-foreground mb-1">In Progress</p>
              <p className="text-2xl font-bold text-chart-3" data-testid="text-stat-in-progress">{stats.inProgress}</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <p className="text-sm text-muted-foreground mb-1">Coming Soon</p>
              <p className="text-2xl font-bold text-muted-foreground" data-testid="text-stat-coming-soon">{stats.comingSoon}</p>
            </div>
          </div>

          <Tabs value={filter} onValueChange={(v) => setFilter(v as FilterType)}>
            <TabsList className="w-full md:w-auto grid grid-cols-4 md:inline-grid">
              <TabsTrigger value="all" data-testid="tab-all">
                All
              </TabsTrigger>
              <TabsTrigger value="completed" data-testid="tab-completed">
                Completed
              </TabsTrigger>
              <TabsTrigger value="in-progress" data-testid="tab-in-progress">
                In Progress
              </TabsTrigger>
              <TabsTrigger value="coming-soon" data-testid="tab-coming-soon">
                Coming Soon
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-96 rounded-lg bg-card border animate-pulse" />
            ))}
          </div>
        ) : filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-lg text-muted-foreground" data-testid="text-no-projects">
              No projects found in this category
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
