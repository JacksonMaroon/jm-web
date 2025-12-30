import { Link } from "react-router-dom";
import SimpleHero from "@/components/SimpleHero";
import SimpleExperience from "@/components/SimpleExperience";
import SimpleProjects from "@/components/SimpleProjects";
import SimpleEducation from "@/components/SimpleEducation";
import FloatingMenuBar from "@/components/FloatingMenuBar";
import DynamicScrollButton from "@/components/DynamicScrollButton";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-background focus:px-4 focus:py-2 focus:text-foreground"
      >
        Skip to main content
      </a>
      <nav aria-label="Breadcrumb" className="sr-only">
        <ol>
          <li>
            <a href="/">Home</a>
          </li>
        </ol>
      </nav>
      <main id="main-content">
        <SimpleHero />

        {/* Quick Links Section */}
        <section className="py-12 px-6 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/about"
                className="group relative overflow-hidden rounded-lg border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50"
              >
                <h3 className="text-lg font-semibold mb-2 flex items-center justify-between">
                  About Me
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </h3>
                <p className="text-sm text-muted-foreground">
                  My background, education, and what drives me to build AI tools for knowledge work
                </p>
              </Link>

              <Link
                to="/thoughts/nexo"
                className="group relative overflow-hidden rounded-lg border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50"
              >
                <h3 className="text-lg font-semibold mb-2 flex items-center justify-between">
                  Building Nexo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </h3>
                <p className="text-sm text-muted-foreground">
                  Deep dive on user research, product decisions, and winning a venture competition
                </p>
              </Link>

              <Link
                to="/thoughts/ai"
                className="group relative overflow-hidden rounded-lg border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50"
              >
                <h3 className="text-lg font-semibold mb-2 flex items-center justify-between">
                  AI in Consulting
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </h3>
                <p className="text-sm text-muted-foreground">
                  How AI is transforming strategy work and what consultants should focus on
                </p>
              </Link>
            </div>
          </div>
        </section>

        <SimpleExperience />
        <SimpleProjects />
        <SimpleEducation />
      </main>
      <footer className="py-8 px-6 text-center border-t">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-muted-foreground">
            © 2025 Jackson Maroon
          </p>
        </div>
      </footer>
      <FloatingMenuBar />
      <DynamicScrollButton />
    </div>
  );
};

export default Index;
