import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Brain, TrendingUp, Lightbulb, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FloatingMenuBar from "@/components/FloatingMenuBar";
import DynamicScrollButton from "@/components/DynamicScrollButton";

const ThoughtsAI = () => {
  useEffect(() => {
    document.title = "AI in Consulting: Automation, Augmentation, and the Future of Strategy Work | Jackson Maroon";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "How AI is transforming management consulting. Insights on automation, augmentation, and what strategy consultants should focus on in an AI-first world."
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
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Artificial Intelligence</Badge>
              <Badge variant="outline">Strategy Consulting</Badge>
              <Badge variant="outline">Automation</Badge>
            </div>
            <h1 className="text-4xl font-bold sm:text-5xl">
              AI in Consulting: Automation vs. Augmentation
            </h1>
            <p className="text-xl text-muted-foreground">
              How AI is reshaping strategy work, what consultants should automate, what they should augment, and why
              the future belongs to those who can do both.
            </p>
          </header>

          <section className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <div>
              <h2 className="flex items-center gap-3">
                <Brain className="h-7 w-7 text-primary" />
                The State of AI in Consulting
              </h2>
              <p>
                Management consulting is undergoing its biggest transformation since the rise of data analytics in the
                2000s. AI—particularly large language models—is no longer a futuristic curiosity. It's a practical tool
                that's already changing how consultants research industries, analyze data, and deliver insights.
              </p>
              <p>
                During my summer at Kearney in 2025, I built internal analytics tooling that reduced workflow time by 80%.
                That wasn't magic—it was using AI to automate repetitive tasks like data cleaning, report formatting, and
                initial trend identification. The result? Our team spent less time wrestling with Excel and more time
                solving strategic problems for clients.
              </p>
              <p>
                But here's the critical distinction: AI didn't replace our work. It augmented it. And that's the tension
                defining consulting's AI future—knowing what to automate and what to augment.
              </p>
            </div>

            <div>
              <h2 className="flex items-center gap-3">
                <AlertCircle className="h-7 w-7 text-primary" />
                What to Automate: The Low-Hanging Fruit
              </h2>
              <p>
                Consultants spend shocking amounts of time on tasks that don't require strategic thinking. AI should
                ruthlessly automate these:
              </p>

              <h3>1. Data Cleaning and Preparation</h3>
              <p>
                Every consulting project starts with messy data—inconsistent formats, missing values, duplicate records.
                I've seen analysts spend 20+ hours manually standardizing spreadsheets that AI can clean in minutes.
                Tools like GPT-4 with Code Interpreter or Claude can write Python scripts to handle most data prep tasks.
              </p>
              <p>
                At Kearney, automating data pipelines freed up junior analysts to focus on interpreting results instead
                of babysitting ETL processes. That's a win.
              </p>

              <h3>2. Initial Research and Synthesis</h3>
              <p>
                Need to understand a new industry in 48 hours? AI can aggregate competitor analyses, regulatory reports,
                and market trends faster than any human. I use LLMs to generate first-draft industry overviews, then
                refine them with domain expertise.
              </p>
              <p>
                The key: treat AI output as a starting point, not gospel. It's great at breadth, less reliable on depth
                or nuance. Always verify critical facts.
              </p>

              <h3>3. Slide Formatting and Report Generation</h3>
              <p>
                PowerPoint hell is real. Consultants lose hours tweaking font sizes, aligning text boxes, and reformatting
                charts. AI tools can now generate slide decks from bullet points or convert data tables into polished visuals.
              </p>
              <p>
                This isn't about laziness—it's about freeing up cognitive bandwidth for work that actually matters.
              </p>

              <h3>4. Meeting Summaries and Action Items</h3>
              <p>
                Every client call generates pages of notes. AI transcription tools (like Otter.ai or Fireflies) can
                automatically summarize discussions, extract action items, and flag unresolved questions. This ensures
                nothing falls through the cracks and lets you focus on the conversation, not scribbling notes.
              </p>
            </div>

            <div>
              <h2 className="flex items-center gap-3">
                <CheckCircle2 className="h-7 w-7 text-primary" />
                What to Augment: Where Humans Still Win
              </h2>
              <p>
                Automation handles repetitive tasks. Augmentation is different—it's using AI to amplify human judgment,
                not replace it. Here's where consultants should lean into AI as a collaborator:
              </p>

              <h3>1. Hypothesis Generation</h3>
              <p>
                The best consultants ask questions nobody else is asking. AI can help here by surfacing patterns in data
                that humans might miss or suggesting alternative frameworks to analyze a problem.
              </p>
              <p>
                For example, when analyzing customer churn at Kearney, I used AI to cluster user behaviors in unexpected
                ways. The algorithm flagged a segment we hadn't considered—high-value users who churned not because of
                pricing, but because of poor onboarding. That insight came from AI, but interpreting its strategic
                implications was all human.
              </p>

              <h3>2. Scenario Modeling</h3>
              <p>
                Clients love "what-if" analyses: What if we enter this market? What if our competitor launches X?
                What if regulations change? Building these models manually is tedious. AI can rapidly simulate scenarios,
                letting consultants explore more possibilities and stress-test assumptions.
              </p>
              <p>
                But—and this is crucial—AI can't tell you which scenarios matter. That's strategic judgment, and it's
                still a human skill.
              </p>

              <h3>3. Communication and Storytelling</h3>
              <p>
                Consulting isn't just about finding insights—it's about convincing clients to act on them. AI can draft
                narratives, suggest analogies, or reframe arguments, but it can't read a room or adapt messaging to a
                skeptical CFO mid-presentation.
              </p>
              <p>
                I use AI to polish my writing and test different ways to explain complex ideas, but the final judgment—what
                resonates with this audience, right now—remains human.
              </p>

              <h3>4. Client Relationship Management</h3>
              <p>
                Trust is consulting's currency. AI can help you stay organized (reminder: follow up with Sarah about the
                procurement analysis), but it can't replace the empathy, intuition, and rapport-building that make clients
                want to work with you again.
              </p>
            </div>

            <div>
              <h2 className="flex items-center gap-3">
                <TrendingUp className="h-7 w-7 text-primary" />
                The Skills That Matter in an AI-First World
              </h2>
              <p>
                If AI handles the grunt work, what should consultants focus on? Three skills stand out:
              </p>

              <h3>1. Problem Framing</h3>
              <p>
                AI is great at solving well-defined problems. It struggles with ambiguous, open-ended challenges—which
                is exactly what consulting clients bring. The ability to take a fuzzy business problem and frame it as
                a solvable question is uniquely human (for now).
              </p>
              <p>
                Example: A client says, "We're losing market share." That's not a problem—it's a symptom. A good consultant
                asks: Is it pricing? Product-market fit? Go-to-market execution? Competitive positioning? AI can help
                analyze each hypothesis, but framing the right questions is on you.
              </p>

              <h3>2. Domain Expertise</h3>
              <p>
                AI knows a lot about everything and not much about anything specific. Consultants who build deep domain
                expertise—whether in healthcare operations, retail supply chains, or fintech regulation—will have a massive
                edge. They can spot nuances AI misses and challenge its assumptions.
              </p>

              <h3>3. Technical Fluency</h3>
              <p>
                You don't need to be a machine learning engineer, but you do need to understand how AI works, where it
                fails, and how to use it effectively. Consultants who can prompt LLMs well, interpret model outputs
                critically, and integrate AI into workflows will outpace those who treat it as a black box.
              </p>
              <p>
                At <Link to="/about" className="text-primary hover:underline">Washington & Lee's AI Lab</Link>, I've
                spent hundreds of hours testing models, tweaking prompts, and debugging workflows. That hands-on experience
                is invaluable—not because I want to be an AI researcher, but because it makes me a better strategist.
              </p>
            </div>

            <div>
              <h2 className="flex items-center gap-3">
                <Lightbulb className="h-7 w-7 text-primary" />
                What This Means for Consulting Firms
              </h2>
              <p>
                Firms that embrace AI will pull ahead. Those that don't will struggle. Here's what I think the winners
                will do:
              </p>

              <h3>1. Invest in Internal AI Tools</h3>
              <p>
                McKinsey has Lilli. BCG has its own suite. Kearney is building proprietary analytics platforms. These
                aren't vanity projects—they're strategic bets that AI-augmented consultants can deliver better, faster
                insights at lower cost.
              </p>
              <p>
                Firms that treat AI as "IT's problem" will fall behind. This needs to be a firm-wide initiative, driven
                by leadership and embedded in every project.
              </p>

              <h3>2. Rethink Talent Development</h3>
              <p>
                Junior analysts historically spent years mastering Excel, PowerPoint, and data manipulation. If AI handles
                those tasks, what should new consultants learn instead? My bet: problem framing, client communication,
                and technical fluency with AI tools.
              </p>
              <p>
                Training programs need to evolve. Firms should teach consultants how to use AI, not just strategy frameworks.
              </p>

              <h3>3. Double Down on High-Touch, High-Value Work</h3>
              <p>
                As commodity analysis gets automated, clients will pay a premium for consultants who can do what AI can't:
                navigate organizational politics, build coalitions for change, and make judgment calls in high-stakes situations.
              </p>
              <p>
                Consulting's future isn't "AI replaces consultants." It's "AI handles the routine stuff, freeing consultants
                to focus on the messy, human problems that drive real value."
              </p>
            </div>

            <div>
              <h2>My Take: Optimistic, But Realistic</h2>
              <p>
                I'm bullish on AI in consulting because I've seen it work. The 80% time savings at Kearney wasn't
                hypothetical—it happened. The pattern-finding that uncovered hidden churn segments wasn't luck—it was
                AI doing what it does best.
              </p>
              <p>
                But I'm also realistic. AI won't replace strategic thinking, client relationships, or the judgment that
                comes from years of experience. It will, however, make those who refuse to adapt irrelevant.
              </p>
              <p>
                The consultants who thrive in the next decade will be those who automate relentlessly, augment strategically,
                and never lose sight of the human skills that matter most: curiosity, empathy, and the ability to solve
                problems nobody's seen before.
              </p>
            </div>

            <div className="border-t pt-8 not-prose">
              <h2 className="text-2xl font-bold mb-4">Want to Discuss AI in Consulting?</h2>
              <p className="text-muted-foreground mb-6">
                I'm always happy to chat about AI, strategy, or how firms can navigate this transition. Check out{" "}
                <Link to="/about" className="text-primary hover:underline">my background</Link>, read about{" "}
                <Link to="/thoughts/nexo" className="text-primary hover:underline">building Nexo</Link>, or{" "}
                <a href="mailto:jmaroon@mail.wlu.edu" className="text-primary hover:underline">reach out directly</a>.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href="mailto:jmaroon@mail.wlu.edu">Email Me</a>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/">Back to Home</Link>
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

export default ThoughtsAI;
