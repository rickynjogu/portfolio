import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Code2, Palette, Rocket, Database, Sparkles, Terminal } from "lucide-react";

const skills = [
  {
    category: "Backend",
    icon: Database,
    items: ["Python", "Django"],
  },
  {
    category: "AI & ML",
    icon: Sparkles,
    items: ["Python", "RAG", "Jupyter", "Machine Learning"],
  },
  {
    category: "Frontend",
    icon: Palette,
    items: ["React", "TypeScript", "HTML", "Tailwind CSS"],
  },
  {
    category: "Tools",
    icon: Terminal,
    items: ["Git", "VS Code"],
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4" data-testid="text-page-title">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Passionate developer, lifelong learner, problem solver
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-chart-2 rounded-3xl blur-2xl opacity-30 animate-pulse-glow" />
              <div className="relative aspect-square rounded-3xl border-4 border-primary/20 bg-gradient-to-br from-primary/10 to-chart-2/10 flex items-center justify-center overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="space-y-4" data-testid="text-bio">
              <h2 className="text-2xl md:text-3xl font-bold">Hi, I'm a Full-Stack Developer</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                With a passion for creating elegant solutions to complex problems, I specialize in building modern web applications that are fast, accessible, and user-friendly — including AI-powered tools using RAG, semantic search, and large language models.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                My journey in software development started with a curiosity about how things work, and has evolved into a career focused on building impactful digital experiences — from full-stack web apps to AI and machine learning projects. I believe in writing clean, maintainable code and continuously learning new technologies.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new frameworks, experimenting with LLMs, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-sm px-3 py-1">
                <Rocket className="w-3 h-3 mr-1.5" />
                Fast Learner
              </Badge>
              <Badge variant="outline" className="text-sm px-3 py-1">
                <Code2 className="w-3 h-3 mr-1.5" />
                Clean Code
              </Badge>
              <Badge variant="outline" className="text-sm px-3 py-1">
                <Sparkles className="w-3 h-3 mr-1.5" />
                AI-Focused
              </Badge>
              <Badge variant="outline" className="text-sm px-3 py-1">
                <Palette className="w-3 h-3 mr-1.5" />
                Design Focused
              </Badge>
            </div>

            <Button size="lg" variant="outline" className="mt-4" asChild data-testid="button-download-cv">
              <a href="/cv.pdf" download target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8" data-testid="text-skills-title">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover-elevate transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold" data-testid={`text-skill-category-${skillGroup.category.toLowerCase()}`}>
                        {skillGroup.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs"
                          data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
