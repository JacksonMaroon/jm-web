import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const SimpleProjects = () => {
  const projects = [
    {
      title: "Nexo",
      description: "Professional Matchmaking Platform",
      details: "Led product development for a professional networking app that matches users based on career goals.",
      achievements: [
        "Won W&L venture competition",
        "Ran 50+ user interviews before launch",
        "Shipped MVP in 4 weeks with 2 engineers",
        "Cut scope by 40% based on what users actually needed"
      ],
      links: {
        website: "https://www.nexo.rocks",
        github: "https://github.com/JacksonMaroon/Nexo"
      },
      period: "Apr. 2025 – May 2025"
    },
    {
      title: "FlexContent Calendar",
      description: "AI-Powered Content Automation Tool",
      details: "Built AI platform that generates and schedules LinkedIn content for financial consultants.",
      achievements: [
        "Served 6 B2B clients with 100% retention",
        "Reduced content creation time by 75%",
        "Tested 10+ AI models to optimize output",
        "Cut operational costs by 60%"
      ],
      links: {
        github: "https://github.com/JacksonMaroon/FlexContent-Calendar"
      },
      period: "May 2024 – Jul. 2024"
    },
    {
      title: "GroupMe Claude Bot",
      description: "Serverless GroupMe AI Chatbot",
      details: "Built a serverless GroupMe bot powered by Claude Haiku with configurable triggers and cost controls.",
      achievements: [
        "Uses Claude Haiku 4.5 for fast, low-cost responses",
        "Only responds on mention with configurable trigger words",
        "Built-in hourly budget cap to control API costs",
        "Runs on Vercel with zero infrastructure management"
      ],
      links: {
        github: "https://github.com/JacksonMaroon/groupme-claude-bot"
      },
      period: "Jan. 2026"
    },
    {
      title: "Lamp Control Duo",
      description: "BLE Lamp Control (Menu Bar + Siri Shortcuts)",
      details: "Built a minimalist macOS menu bar controller and Siri Shortcuts app to control a BLE RGB lamp without the vendor app.",
      achievements: [
        "One-click power toggle, color presets, and brightness slider from the menu bar",
        "Siri Shortcuts for on/off, brightness, preset colors, and custom RGB",
        "Direct BLE control with no account, cloud, or ads",
        "Reverse-engineered BLE protocol for reliable local control"
      ],
      links: {
        github: "https://github.com/JacksonMaroon/LampMenuBar",
        githubLabel: "Menu Bar",
        githubSecondary: "https://github.com/JacksonMaroon/LampShortcuts",
        githubSecondaryLabel: "Shortcuts"
      },
      period: "Jan. 2026"
    }
  ];

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="py-20 px-6 bg-muted/30"
    >
      <div className="max-w-4xl mx-auto">
        <h2 id="projects-title" className="text-3xl font-bold mb-12 text-center">
          Side Projects
        </h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <article key={index} className="bg-card rounded-lg border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/50" aria-labelledby={`project-${index}`}>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h3 id={`project-${index}`} className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-3">{project.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">{project.details}</p>
                  <Badge variant="outline" className="text-xs">{project.period}</Badge>
                </div>

                <div className="flex gap-2">
                  {project.links.website && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        {project.links.githubLabel ?? "Code"}
                      </a>
                    </Button>
                  )}
                  {project.links.githubSecondary && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.githubSecondary} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        {project.links.githubSecondaryLabel ?? "Code"}
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Key Achievements</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="text-primary">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleProjects;
