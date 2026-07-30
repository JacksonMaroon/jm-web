import LongformPage from "@/components/LongformPage";
import Seo from "@/components/Seo";

const Nexo = () => {
  return (
    <>
      <Seo
        title="Nexo Product Case Study | Jackson Maroon"
        description="Jackson Maroon's product research, prioritization, testing, and launch work on the team-built Nexo matchmaking platform."
        canonical="https://jacksonmaroon.com/thoughts/nexo"
        ogType="article"
      />
      <LongformPage
        title="Nexo: from research to MVP"
        summary="The product research, scope decisions, and launch work I owned on a team-built professional matchmaking platform."
        eyebrow="Co-built project"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case studies" },
          { label: "Nexo" },
        ]}
        relatedLinks={[
          {
            eyebrow: "About",
            title: "Detailed bio",
            description: "My background in consulting, analytics, and independent building.",
            href: "/about",
          },
          {
            eyebrow: "Case study",
            title: "NYC housing search",
            description: "How I built and operated a cloud-based discovery system.",
            href: "/thoughts/nyc-housing-system",
          },
          {
            eyebrow: "Home",
            title: "Portfolio overview",
            description: "Current projects, experience, and education.",
            href: "/",
          },
        ]}
      >
        <section className="rounded-lg border border-border bg-muted/30 p-5">
          <h2 className="text-lg font-semibold text-foreground">My role</h2>
          <p className="mt-2">
            Nexo was a collaborative venture. I led product development, including research,
            prioritization, user testing, and launch planning. Two engineering teammates implemented
            the application. This case study covers the work I directly owned and the decisions we
            made together.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">The problem and the research</h2>
          <p>
            We started with a narrow question: why do students struggle to turn career advice into a
            useful first conversation? Before building, we ran more than 50 interviews with students,
            alumni, and early-career professionals. We asked about recent outreach rather than
            hypothetical preferences.
          </p>
          <p>
            The recurring problem was not access alone. Requests were often vague, and potential
            mentors lacked enough context to know how to help. That pushed us toward structured
            profiles, goal-based matching, and a short conversation guide for each introduction.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Scoping and shipping</h2>
          <p>
            We shipped the MVP in four weeks. The core flow covered profile creation, matching, and
            scheduling. After early tests, we removed roughly 40 percent of the original feature list
            because those additions did not improve the main flow.
          </p>
          <p>
            I maintained the product backlog, organized weekly tests, translated feedback into scope
            decisions, and worked with the engineering team on launch sequencing. Keeping the build
            small let us spend more time improving the quality and context of each match.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Outcome</h2>
          <p>
            We launched with a focused Washington and Lee cohort and won first place in a campus
            venture competition. The most useful lesson was practical: interviews only create value
            when they change what gets built. In this case, the research helped us remove features,
            clarify the promise, and ship a smaller product faster.
          </p>
        </section>
      </LongformPage>
    </>
  );
};

export default Nexo;
