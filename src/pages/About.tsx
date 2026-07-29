import LongformPage from "@/components/LongformPage";
import Seo from "@/components/Seo";

const About = () => {
  return (
    <>
      <Seo
        title="About Jackson Maroon | Business Analyst & AI Builder"
        description="A detailed bio of Jackson Maroon, a Kearney Business Analyst focused on operations, analytics, product, and practical AI."
        canonical="https://jacksonmaroon.com/about"
      />
      <LongformPage
        title="About Jackson Maroon"
        summary="A detailed look at the experiences, values, and projects that shape how I work as a business analyst and independent builder."
        eyebrow="About"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        relatedLinks={[
          {
            eyebrow: "Case study",
            title: "NYC housing search",
            description: "How I built, operated, and intentionally decommissioned a production system.",
            href: "/thoughts/nyc-housing-system",
          },
          {
            eyebrow: "Co-built",
            title: "Building Nexo",
            description: "My product leadership and research work on a team-built platform.",
            href: "/thoughts/nexo",
          },
          {
            eyebrow: "Home",
            title: "Portfolio overview",
            description: "Back to the main page with highlights and quick context.",
            href: "/",
          },
        ]}
      >
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Background and focus</h2>
          <p>
            I am a Business Analyst at Kearney in New York who cares about the space between rigorous analysis and
            good human judgment. I graduated from Washington and Lee University with a B.S. in Business
            Administration and a minor in Data Science. The through line across my work is simple: find the
            decisions that matter, build the smallest set of insights that can move them, and make the
            story easy to act on.
          </p>
          <p>
            I have always been drawn to work that connects real customer behavior to strategic choices.
            In student consulting projects, I found myself translating messy, real world input into clear
            choices. In class, I leaned toward courses where both quantitative and qualitative thinking
            mattered: analytics, organizational behavior, and strategy. That balance has shaped the way
            I approach problems today, whether I am modeling a market or interviewing users about how
            they navigate career decisions.
          </p>
        </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">How I work</h2>
        <p>
          My default approach starts with clarity. I work best when the question is crisp, the audience
          is specific, and the intended action is known. From there I mix fast research with steady
          iteration. I interview stakeholders, map the constraints, and build small prototypes of the
          analysis early so the team can react to something tangible instead of slides about the plan.
          I use Python and SQL for analysis, Figma for quick product sketches, and a lot of lightweight
          writing to make the thinking visible.
        </p>
        <p>
          I also care about the mechanics of execution. Good strategy needs an operating model that
          can actually deliver. That means asking how a recommendation will work inside a busy team,
          what the incentive structure looks like, and how to measure progress without slowing people
          down. I like turning a strategy deck into a clean roadmap with a few leading indicators, a
          clear owner, and a timeline that respects reality.
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Lead with the decision, not the data.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Test assumptions quickly with a real user or operator.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Build tools and workflows that last after the project ends.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Building and leadership</h2>
        <p>
          I spend a lot of time building, not just planning. Table Scout turns a curated restaurant
          list into one read-only availability search across Resy and OpenTable. Canary MLX brings a
          state-of-the-art speech-recognition model to Apple Silicon for fast local inference. Both
          projects reflect the kind of work I enjoy most: taking a messy workflow or technical
          constraint and turning it into a tool someone can actually use.
        </p>
        <p>
          I also built and operated a cloud-based NYC housing discovery system with separate search
          lanes, ranking logic, stateful duplicate suppression, scheduled alerts, and failure
          recovery. When it had served its purpose, I preserved a restorable snapshot and
          intentionally decommissioned the infrastructure. That experience taught me that production
          automation is as much about observability, state, and responsible shutdown as it is about
          the initial build.
        </p>
        <p>
          Nexo was a team-built professional matchmaking platform where I led product development,
          user research, prioritization, and launch planning alongside the engineers who implemented
          the application. We won a campus venture competition and learned the value of focus,
          especially when early feedback shows what users actually care about.
        </p>
        <p>
          At Washington and Lee, I served as Head AI Fellow for the AI Lab and president of Out in
          STEM. Those roles taught me how to build inclusive teams, set a vision, and keep
          momentum in groups with different incentives and backgrounds. I care about creating space
          where people feel they belong and where high standards are paired with genuine support.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Looking ahead</h2>
        <p>
          At Kearney, I work on problems that sit at the intersection of operations, analytics, and
          technology. Long term, I want to build AI tools that make knowledge work
          clearer, faster, and more humane. That means systems that respect privacy, explain their
          reasoning, and support the people closest to the decision, not just the people with the
          loudest voice.
        </p>
        <p>
          If you are building something in strategy, analytics, or AI product development, I would
          love to connect. I am especially interested in projects where customer insight can reshape
          how a team works, not just what it ships. In the meantime, I will keep learning in public
          through these essays and case studies, and I will keep shipping the things I wish I had as a
          student, analyst, and builder.
        </p>
      </section>
    </LongformPage>
    </>
  );
};

export default About;
