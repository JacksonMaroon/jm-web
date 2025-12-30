import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Users, Target, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FloatingMenuBar from "@/components/FloatingMenuBar";
import DynamicScrollButton from "@/components/DynamicScrollButton";

const ThoughtsNexo = () => {
  useEffect(() => {
    document.title = "Building Nexo: Professional Networking Reimagined | Jackson Maroon";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "A deep dive into building Nexo, a professional matchmaking platform. Learn about user research, product decisions, go-to-market strategy, and lessons from winning the W&L venture competition."
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
              <Badge variant="outline">Product Management</Badge>
              <Badge variant="outline">User Research</Badge>
              <Badge variant="outline">Go-to-Market Strategy</Badge>
            </div>
            <h1 className="text-4xl font-bold sm:text-5xl">
              Building Nexo: Lessons from Creating a Professional Matchmaking Platform
            </h1>
            <p className="text-xl text-muted-foreground">
              How 50+ user interviews, ruthless prioritization, and a competition-winning GTM plan shaped a product that
              connects professionals based on career goals.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.nexo.rocks" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/JacksonMaroon/Nexo" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </Button>
            </div>
          </header>

          <section className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <div>
              <h2 className="flex items-center gap-3">
                <Target className="h-7 w-7 text-primary" />
                The Problem
              </h2>
              <p>
                Professional networking is broken. LinkedIn is cluttered with thought leadership spam. Coffee chats are
                hit-or-miss. Most networking apps optimize for quantity over quality, leaving users overwhelmed with
                shallow connections that never translate into meaningful career opportunities.
              </p>
              <p>
                I experienced this firsthand as a college student trying to break into consulting. I spent hours scrolling
                through alumni directories, cold-emailing people I barely knew, and attending networking events where
                conversations felt transactional. There had to be a better way.
              </p>
            </div>

            <div>
              <h2 className="flex items-center gap-3">
                <Users className="h-7 w-7 text-primary" />
                The Research Phase: 50+ Conversations
              </h2>
              <p>
                Before writing a single line of code, I committed to understanding the problem deeply. Over six weeks,
                I conducted 50+ user interviews with college students, recent graduates, mid-career professionals, and
                recruiters. I asked questions like:
              </p>
              <ul>
                <li>What's your biggest frustration with current networking platforms?</li>
                <li>When was the last time a networking conversation led to a real opportunity?</li>
                <li>How do you decide who to reach out to?</li>
                <li>What would make you trust a networking platform with your career goals?</li>
              </ul>
              <p>
                Three patterns emerged:
              </p>
              <ol>
                <li>
                  <strong>Quality over quantity:</strong> People wanted fewer, better-matched connections rather than
                  hundreds of weak ties.
                </li>
                <li>
                  <strong>Goal-oriented matching:</strong> The best networking happened when both parties had aligned
                  career goals (e.g., "I want to break into venture capital" + "I'm a VC looking to mentor").
                </li>
                <li>
                  <strong>Friction points matter:</strong> Users were willing to spend time on detailed profiles if it
                  meant better matches, but they abandoned platforms with unclear value propositions.
                </li>
              </ol>
              <p>
                These insights became the foundation for Nexo's core value proposition: match professionals based on
                career goals, not just job titles or industries.
              </p>
            </div>

            <div>
              <h2 className="flex items-center gap-3">
                <Zap className="h-7 w-7 text-primary" />
                Product Decisions: What We Built (and Didn't Build)
              </h2>
              <p>
                With a four-week deadline for the W&L venture competition, I had to be ruthless about scope. Working
                with two engineers, I focused on three core features:
              </p>

              <h3>1. Goal-Based Matching Algorithm</h3>
              <p>
                Unlike LinkedIn's keyword-based search or Bumble Bizz's swipe model, Nexo asks users to define their
                career goals upfront. The algorithm then surfaces people whose goals complement yours—mentors if you're
                exploring a field, collaborators if you're building, or mentees if you're looking to give back.
              </p>
              <p>
                We tested three matching approaches: keyword overlap, manual curation, and collaborative filtering.
                Keyword overlap won because it was simple, transparent, and required minimal user data to start working.
              </p>

              <h3>2. Conversation Prompts</h3>
              <p>
                One pain point from interviews: "I never know what to say after connecting." We solved this by suggesting
                context-specific conversation starters based on shared goals. For example, if you're both interested in
                product management, Nexo might suggest: "What's your favorite product you've worked on, and why?"
              </p>
              <p>
                This small feature dramatically increased engagement. Users felt less awkward initiating conversations,
                and discussions went deeper faster.
              </p>

              <h3>3. Privacy-First Design</h3>
              <p>
                Trust was non-negotiable. We built opt-in visibility controls, limited profile data to career-relevant
                information, and gave users full control over who could see their goals. No selling data to recruiters.
                No spammy notifications. Just clean, focused networking.
              </p>

              <h3>What We Cut</h3>
              <p>
                We initially planned features like group networking events, in-app video calls, and AI-generated introductions.
                All got cut. Why? They added complexity without solving the core problem. This 40% scope reduction was
                painful but necessary—it let us ship a polished MVP instead of a feature-bloated mess.
              </p>
            </div>

            <div>
              <h2 className="flex items-center gap-3">
                <TrendingUp className="h-7 w-7 text-primary" />
                Go-to-Market Strategy: Winning the Competition
              </h2>
              <p>
                Building a great product is only half the battle. Our GTM strategy focused on three pillars:
              </p>

              <h3>1. Start Narrow, Then Expand</h3>
              <p>
                Instead of targeting "all professionals," we launched with college juniors and seniors looking to break
                into competitive industries (consulting, finance, tech). This niche had acute pain (recruiting timelines),
                strong network effects (everyone talks to everyone), and willingness to try new tools.
              </p>
              <p>
                Our launch strategy: partner with three university career centers to offer Nexo as a "premium networking
                resource" for students. This gave us credibility, early users, and valuable feedback.
              </p>

              <h3>2. Content-Led Growth</h3>
              <p>
                We created a blog with career advice from professionals in our network—think "How I Broke Into Consulting
                Without an Ivy League Degree" or "5 Questions That Actually Work in Networking Calls." Every post ended
                with a CTA: "Want to connect with people like this? Try Nexo."
              </p>
              <p>
                This positioned Nexo as more than a tool—it became a career resource, building trust before asking for sign-ups.
              </p>

              <h3>3. Metrics That Mattered</h3>
              <p>
                For the competition pitch, we focused on three metrics: match satisfaction (did users feel their matches
                were relevant?), conversation rate (% of matches that led to messages), and repeat usage (did people come back?).
              </p>
              <p>
                Early data showed 78% match satisfaction, 62% conversation rate, and 45% weekly return rate—strong enough
                to prove product-market fit and convince judges we'd built something people wanted.
              </p>
            </div>

            <div>
              <h2>Lessons Learned</h2>

              <h3>User Research Is Non-Negotiable</h3>
              <p>
                The 50+ interviews weren't a nice-to-have—they were the difference between building what I thought users
                needed and what they actually needed. Every major product decision traced back to something I heard in
                those conversations.
              </p>

              <h3>Scope Ruthlessly</h3>
              <p>
                Cutting 40% of planned features hurt, but it let us ship quality over quantity. A polished MVP beats a
                buggy feature-heavy product every time. Focus on solving one problem exceptionally well.
              </p>

              <h3>GTM Is Product Work</h3>
              <p>
                Too many builders treat go-to-market as an afterthought. Our GTM strategy—starting narrow, content-led growth,
                and clear metrics—was as important as the product itself. Marketing and product are two sides of the same coin.
              </p>

              <h3>Speed Matters, But Not at the Expense of Fundamentals</h3>
              <p>
                We shipped fast (four weeks), but we didn't skip research or testing. Speed is about ruthless prioritization,
                not cutting corners. The competition deadline forced clarity—if a feature didn't directly solve our core
                problem, it didn't ship.
              </p>
            </div>

            <div>
              <h2>What's Next for Nexo</h2>
              <p>
                Winning the competition validated the concept, but there's more work to do. We're exploring partnerships
                with more universities, testing AI-powered match refinements, and considering how to scale beyond students
                without losing the quality-first ethos.
              </p>
              <p>
                The broader lesson? Professional networking doesn't have to suck. With the right focus on user needs,
                thoughtful product design, and a clear GTM strategy, we can build tools that make career growth more accessible
                and less exhausting.
              </p>
            </div>

            <div className="border-t pt-8 not-prose">
              <h2 className="text-2xl font-bold mb-4">Want to Learn More?</h2>
              <p className="text-muted-foreground mb-6">
                Check out <Link to="/about" className="text-primary hover:underline">my background</Link> or read about{" "}
                <Link to="/thoughts/ai" className="text-primary hover:underline">how AI is transforming consulting</Link>.
                You can also <a href="mailto:jmaroon@mail.wlu.edu" className="text-primary hover:underline">reach out directly</a> if
                you want to chat about product, networking, or anything Nexo-related.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href="https://www.nexo.rocks" target="_blank" rel="noopener noreferrer">
                    Try Nexo
                  </a>
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

export default ThoughtsNexo;
