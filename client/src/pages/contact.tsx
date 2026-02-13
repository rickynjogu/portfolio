import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const socialLinks = [
  {
    name: "GitHub",
    icon: SiGithub,
    url: "https://github.com/rickynjogu",
    color: "hover:text-[#181717] dark:hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    url: "https://ke.linkedin.com/in/eric-munyua-48a365289",
    color: "hover:text-[#0A66C2]",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:rickynjogu01@gmail.com",
    color: "hover:text-primary",
  },
];

export default function Contact() {
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
            Let's Connect
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Reach out through any of these platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Feel free to reach out!
              </p>
            </div>

            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-semibold mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5" />
                  <a
                    href="mailto:rickynjogu01@gmail.com"
                    className="hover:text-primary transition-colors"
                    data-testid="link-email"
                  >
                    rickynjogu01@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Follow Me</h3>
              <p className="text-sm text-muted-foreground">
                Stay updated with my latest projects and thoughts on software development
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Connect on Social</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full justify-start gap-3 h-auto p-6 hover-elevate group transition-all duration-300 hover:scale-105"
                      data-testid={`button-social-${link.name.toLowerCase()}`}
                    >
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <Icon className={`w-6 h-6 transition-colors ${link.color}`} />
                        <div className="flex-1 text-left">
                          <p className="font-semibold">{link.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {link.name === "GitHub" ? "@rickynjogu" : link.name === "Email" ? "rickynjogu01@gmail.com" : "Connect"}
                          </p>
                        </div>
                      </a>
                    </Button>
                  </motion.div>
                );
              })}
            </div>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-chart-2/5 border-primary/20">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Availability</h3>
                </div>
                <p className="text-muted-foreground">
                  Currently available for freelance projects and collaboration opportunities.
                  Response time is typically within 24-48 hours.
                </p>
                <Button
                  size="lg"
                  className="w-full"
                  asChild
                  data-testid="button-send-message"
                >
                  <a href="mailto:rickynjogu01@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Send a Message
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Looking forward to hearing from you and bringing your ideas to life!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
