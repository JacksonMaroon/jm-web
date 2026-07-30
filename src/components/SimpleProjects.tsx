import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

const SimpleProjects = () => {
  const featuredProjects = [
    {
      title: "Table Scout",
      description: "Cross-Provider Restaurant Availability",
      details: "Built a read-only reservation search that turns a curated restaurant list into one scan across Resy and OpenTable.",
      achievements: [
        "Unified Resy and OpenTable availability",
        "Published an anonymized 364-restaurant dataset",
        "Added flexible list imports and opening notifications",
        "Built provider handoffs and strict cost guardrails",
      ],
      links: {
        github: "https://github.com/JacksonMaroon/table-scout",
      },
      period: "Jul. 2026",
    },
    {
      title: "Canary MLX",
      description: "Speech Recognition on Apple Silicon",
      details: "Ported NVIDIA's Canary-1B-v2 speech-recognition model to MLX for fast, private inference on Mac.",
      achievements: [
        "Runs transcription locally without a cloud GPU",
        "Supports 25 languages and translation",
        "Matched NeMo encoder and decoder outputs within 1e-4",
        "Benchmarked roughly 2x faster with about 3x less memory",
      ],
      links: {
        github: "https://github.com/JacksonMaroon/canary-mlx",
      },
      period: "Jan. 2026",
    },
  ];

  const otherBuilds = [
    {
      title: "Air Inequality Atlas",
      description: "A live county-level atlas combining EPA pollution data, CDC health outcomes, and social vulnerability metrics.",
      links: [
        { href: "https://jacksonmaroon.shinyapps.io/air-inequality-atlas/", label: "Live", kind: "external" },
        { href: "https://github.com/JacksonMaroon/air-inequality-atlas", label: "Code", kind: "github" },
      ],
    },
    {
      title: "Lamp Control Duo",
      description: "Local BLE lamp control through a macOS menu bar app and Siri Shortcuts.",
      links: [
        { href: "https://github.com/JacksonMaroon/LampMenuBar", label: "Menu Bar", kind: "github" },
        { href: "https://github.com/JacksonMaroon/LampShortcuts", label: "Shortcuts", kind: "github" },
      ],
    },
    {
      title: "GLP-1 Disruption Dashboard",
      description: "An interactive analysis of how GLP-1 adoption could reshape demand across food, healthcare, and consumer markets.",
      links: [
        { href: "https://jacksonmaroon.shinyapps.io/glp1-disruption/", label: "Live", kind: "external" },
        { href: "https://github.com/JacksonMaroon/glp1-disruption", label: "Code", kind: "github" },
      ],
    },
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
          {featuredProjects.map((project, index) => (
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
                        Code
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

        <div className="mt-14 rounded-lg border border-primary/20 bg-card p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Badge variant="outline">Production case study</Badge>
                <Badge variant="secondary">Intentionally decommissioned</Badge>
              </div>
              <h3 className="text-2xl font-semibold">NYC Housing Search System</h3>
              <p className="mt-3 text-muted-foreground">
                Built and operated a cloud-based housing discovery system with separate search lanes,
                ranking logic, duplicate suppression, scheduled alerts, failure recovery, and a
                snapshot-based shutdown plan.
              </p>
            </div>
            <Button variant="outline" asChild>
              <a href="/thoughts/nyc-housing-system">
                Read case study
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-14 border-t border-border/60 pt-10">
          <h3 className="mb-6 text-xl font-semibold">Other builds</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {otherBuilds.map((project) => (
              <article key={project.title} className="rounded-lg border bg-card p-5">
                <h4 className="font-semibold">{project.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                {project.links.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <Button key={link.href} variant="outline" size="sm" asChild>
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          {link.kind === "github" ? (
                            <Github className="h-4 w-4" />
                          ) : (
                            <ExternalLink className="h-4 w-4" />
                          )}
                          {link.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleProjects;
