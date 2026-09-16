import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

const SimpleProjects = () => {
  const featuredProjects: {
    title: string;
    description: string;
    details: string;
    achievements: string[];
    links: { github?: string; website?: string; caseStudy?: string };
    period: string;
  }[] = [
    {
      title: "Think-cell for Codex",
      description: "Turn New Data into Editable Presentation Charts",
      details: "Built a Codex plugin that brings AI into the chart workflows analysts already use: create slides from existing think-cell designs, update supported chart data, and keep the result editable in PowerPoint.",
      achievements: [
        "Reuse existing chart designs and formatting",
        "Update supported charts from supplied data",
        "Check data accuracy and preserve surrounding content",
        "Reopen in PowerPoint and render previews for review",
      ],
      links: { caseStudy: "/thoughts/thinkcell-codex" },
      period: "Sep. 2026 · Experimental",
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
                  {project.links.caseStudy && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.caseStudy}>
                        Read case study
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
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

      </div>
    </section>
  );
};

export default SimpleProjects;
