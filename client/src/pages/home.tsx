import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { type Project } from "@shared/schema";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
  const [, setLocation] = useLocation();

  const { data: projects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const featuredProjects = projects
    .sort((a, b) => b.progress - a.progress)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto text-center space-y-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block"
          >
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-chart-2 rounded-full blur-xl opacity-50 animate-pulse-glow" />
              <div className="relative w-full h-full rounded-full border-4 border-primary/20 bg-gradient-to-br from-primary/10 to-chart-2/10 flex items-center justify-center overflow-hidden">
                <Sparkles className="w-20 h-20 text-primary" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            data-testid="text-hero-title"
          >
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Building the Future
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            data-testid="text-hero-subtitle"
          >
            A passionate developer creating innovative solutions with cutting-edge technologies.
            Track my journey as I build, learn, and ship amazing projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => setLocation("/projects")}
              className="group text-lg px-8 py-6 animate-pulse-glow"
              data-testid="button-view-projects"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setLocation("/contact")}
              className="text-lg px-8 py-6 backdrop-blur-sm"
              data-testid="button-contact"
            >
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {isLoading ? (
        <section className="py-16 md:py-24 lg:py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="h-12 w-64 bg-muted rounded-lg animate-pulse mb-4" />
              <div className="h-6 w-96 bg-muted rounded-lg animate-pulse" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-96 rounded-lg bg-card border animate-pulse" />
              ))}
            </div>
          </div>
        </section>
      ) : featuredProjects.length > 0 && (
        <section className="py-16 md:py-24 lg:py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-featured-title">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground">
                A showcase of my latest work and ongoing developments
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 text-center"
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => setLocation("/projects")}
                data-testid="button-all-projects"
              >
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
