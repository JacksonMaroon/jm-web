import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const exploreLinks = [
  {
    eyebrow: "About",
    title: "Detailed bio",
    description: "A longer story of how I got into strategy, analytics, and product work.",
    href: "/about",
  },
  {
    eyebrow: "Thoughts",
    title: "Building Nexo",
    description: "The research, experiments, and product decisions behind my matchmaking platform.",
    href: "/thoughts/nexo",
  },
  {
    eyebrow: "Thoughts",
    title: "AI in consulting",
    description: "How I think about using AI tools without losing judgment or client trust.",
    href: "/thoughts/ai",
  },
];

const SimpleExplore = () => {
  return (
    <section id="explore" aria-labelledby="explore-title" className="bg-muted/30 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 id="explore-title" className="text-3xl font-bold">
            Explore more
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Short reads on my background, the Nexo build, and how I use AI in consulting.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {exploreLinks.map((link) => (
            <Card
              key={link.href}
              className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/50"
            >
              <a href={link.href} className="group flex h-full flex-col gap-3">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {link.eyebrow}
                </span>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{link.title}</h3>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">{link.description}</p>
                <span className="mt-auto text-sm font-medium text-foreground">
                  Read the page
                </span>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleExplore;
