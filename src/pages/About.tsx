import LongformPage from "@/components/LongformPage";
import Seo from "@/components/Seo";

const About = () => {
  return (
    <>
      <Seo
        title="About Jackson Maroon | Strategy & AI Builder"
        description="A detailed bio of Jackson Maroon, a strategy consultant in training focused on analytics, product, and AI."
        canonical="https://jacksonmaroon.com/about"
      />
      <LongformPage
        title="About Jackson Maroon"
        summary="A detailed look at the experiences, values, and projects that shape how I work as a strategy and product minded builder."
        eyebrow="About"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        relatedLinks={[
          {
            eyebrow: "Thoughts",
            title: "Building Nexo",
            description: "How I researched, scoped, and shipped a professional matchmaking platform.",
            href: "/thoughts/nexo",
          },
          {
            eyebrow: "Thoughts",
            title: "AI in consulting",
            description: "My perspective on using AI tools responsibly in client work.",
            href: "/thoughts/ai",
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
            I am a strategy consultant in training who cares about the space between rigorous analysis and
            good human judgment. I am a senior at Washington and Lee University, studying business
            administration with a minor in data science, and I am joining Kearney in New York City as a
            Business Analyst after graduation. The through line across my work is simple: find the
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
          I spend a lot of time building, not just planning. I led the product development of Nexo, a
          professional matchmaking platform built to make career networking less random and more
          intentional. The project pushed me to run deep user research, define a tight MVP, and ship
          quickly with a small engineering team. We won a campus venture competition and learned the
          value of focus, especially when early feedback shows what users actually care about.
        </p>
        <p>
          Another highlight is FlexContent Calendar, an AI powered content automation tool for
          financial consultants. That project sharpened my interest in practical AI. We experimented
          with multiple models, used feedback loops to raise output quality, and built workflows that
          saved time for teams with limited bandwidth. It reinforced my belief that AI is most useful
          when it is grounded in a human workflow instead of trying to replace it.
        </p>
        <p>
          On campus, I am the Head AI Fellow for the AI Lab at Washington and Lee and the president
          of Out in STEM. Those roles taught me how to build inclusive teams, set a vision, and keep
          momentum in groups with different incentives and backgrounds. I care about creating space
          where people feel they belong and where high standards are paired with genuine support.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Looking ahead</h2>
        <p>
          I am excited to start at Kearney and work on problems that sit at the intersection of growth,
          operations, and technology. Long term, I want to build AI tools that make knowledge work
          clearer, faster, and more humane. That means systems that respect privacy, explain their
          reasoning, and support the people closest to the decision, not just the people with the
          loudest voice.
        </p>
        <p>
          If you are building something in strategy, analytics, or AI product development, I would
          love to connect. I am especially interested in projects where customer insight can reshape
          how a team works, not just what it ships. In the meantime, I will keep learning in public
          through these essays and case studies, and I will keep shipping the things I wish I had as a
          student and a future consultant.
        </p>
      </section>
    </LongformPage>
    </>
  );
};

export default About;
