import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingMenuBar from "@/components/FloatingMenuBar";
import DynamicScrollButton from "@/components/DynamicScrollButton";

const About = () => {
  useEffect(() => {
    document.title = "About Jackson Maroon | Strategy Consultant & AI Builder";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn more about Jackson Maroon, a strategy consultant building with AI. Background in product management, data analysis, and go-to-market strategy at Kearney and Washington & Lee University."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-background focus:px-4 focus:py-2 focus:text-foreground"
      >
        Skip to main content
      </a>

      <nav aria-label="Breadcrumb" className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </nav>

      <main id="main-content" className="py-12 px-6">
        <article className="max-w-4xl mx-auto space-y-12">
          <header className="space-y-6">
            <h1 className="text-4xl font-bold sm:text-5xl">About Jackson Maroon</h1>
            <p className="text-xl text-muted-foreground">
              Strategy consultant building AI tools to transform knowledge work
            </p>
          </header>

          <section className="space-y-6">
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1.5 backdrop-blur">
                <MapPin className="h-4 w-4" />
                Lexington, VA → NYC
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1.5 backdrop-blur">
                <Calendar className="h-4 w-4" />
                Graduating May 2026
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1.5 backdrop-blur">
                <GraduationCap className="h-4 w-4" />
                Washington & Lee University
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1.5 backdrop-blur">
                <Briefcase className="h-4 w-4" />
                Incoming at Kearney
              </span>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Who I Am</h2>
              <p>
                I'm Jackson (Jack) Maroon, a senior at Washington & Lee University studying Business Administration
                with a minor in Data Science. I'll be joining Kearney's New York office as a Business Analyst in
                Summer 2026, where I'll work on operations and analytics challenges for Fortune 500 clients.
              </p>

              <p>
                My journey into strategy consulting and AI started with a simple observation: knowledge workers spend
                too much time on repetitive tasks that could be automated. During my internship at Kearney in Summer 2025,
                I built internal analytics tooling that reduced workflow time by 80% and drove 90% user adoption. That
                experience crystallized my belief that the future of consulting lies in augmenting human expertise with
                intelligent automation.
              </p>

              <h2>What Drives Me</h2>
              <p>
                I'm fascinated by the intersection of strategy, product, and AI. My approach combines rigorous user
                research with rapid experimentation—whether that's conducting 50+ interviews for <Link to="/thoughts/nexo" className="text-primary hover:underline">Nexo</Link>,
                my professional networking platform, or testing 10+ AI models to optimize content generation for
                FlexContent Calendar.
              </p>

              <p>
                At the AI Lab at Washington and Lee, where I serve as Head AI Fellow, I've learned that the best
                AI applications aren't about replacing humans—they're about removing friction from complex workflows.
                This philosophy guides everything I build, from B2B automation tools to analytics dashboards.
              </p>

              <h2>Academic Background</h2>
              <p>
                I maintain a 3.8 GPA at Washington & Lee while pursuing a rigorous business and data science curriculum.
                I'm honored to be a National Merit Scholar and have been recognized on the President's List for 2023-24.
                I'm also a member of Omicron Delta Kappa (OΔK) Honors Society and received the CACI STEM Scholarship
                and Gaines Scholarship.
              </p>

              <p>
                Beyond the classroom, I scored 1580 on the SAT and have focused my coursework on product management,
                operations strategy, statistical analysis, and machine learning. This combination of business acumen
                and technical skills allows me to bridge the gap between strategy and execution.
              </p>

              <h2>Professional Experience</h2>
              <p>
                My summer at Kearney taught me how to solve ambiguous problems under pressure. I built analytics tools
                that generated $18M in visibility for procurement decisions and led enablement sessions that drove rapid
                adoption across teams. The experience reinforced my love for translating complex data into actionable insights.
              </p>

              <p>
                Before Kearney, I spent Summer 2024 as an NIH intern at the University of Pennsylvania's Center for
                Addiction Policy, where I conducted behavioral analysis across 40,000+ patient journeys. That work
                revealed intervention points that boosted outcomes by 25% and highlighted a critical 11x efficacy gap
                for a specific patient segment—a reminder that data analysis can have real-world impact.
              </p>

              <p>
                Since September 2023, I've served as Assistant to the Director at Washington & Lee's Office of Health
                Promotion, coordinating campus-wide mental health initiatives that generated 3,000+ student engagements
                and improved satisfaction by 10%.
              </p>

              <h2>Projects & Building</h2>
              <p>
                I learn best by building. <Link to="/thoughts/nexo" className="text-primary hover:underline">Nexo</Link>, my professional matchmaking platform,
                won the W&L venture competition and taught me the value of ruthless prioritization—I cut scope by 40%
                based on what users actually needed, shipping an MVP in just four weeks with two engineers.
              </p>

              <p>
                FlexContent Calendar, my AI-powered content automation tool, served six B2B clients with 100% retention,
                cutting production time by 75% and operational costs by 60%. These projects aren't just portfolio pieces—they're
                experiments in how AI can transform everyday work.
              </p>

              <h2>Leadership & Community</h2>
              <p>
                I'm passionate about creating spaces where people can learn and grow together. As President of Out in
                STEM (oSTEM), I've worked to build an inclusive community for LGBTQ+ students in technical fields.
                I've also led student consulting teams, mentoring peers through real client engagements.
              </p>

              <h2>What's Next</h2>
              <p>
                Long-term, I want to build AI tools that make knowledge work more fulfilling. I believe the future of
                consulting—and professional services broadly—will be defined by those who can combine strategic thinking
                with technical execution. That's why I'm excited to join Kearney and learn from some of the best problem
                solvers in the industry.
              </p>

              <p>
                I'm always eager to connect with people building in the AI, product, and consulting spaces. You can read more
                about my <Link to="/thoughts/ai" className="text-primary hover:underline">thoughts on AI in consulting</Link> or
                reach out via <a href="mailto:jmaroon@mail.wlu.edu" className="text-primary hover:underline">email</a>.
              </p>
            </div>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I'm always happy to chat about strategy, product, AI, or anything in between.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <a href="mailto:jmaroon@mail.wlu.edu">Email Me</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://cal.com/jackson-maroon" target="_blank" rel="noopener noreferrer">
                    Schedule a Call
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://linkedin.com/in/jacksonmaroon" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </article>
      </main>

      <footer className="py-8 px-6 text-center border-t mt-12">
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

export default About;
