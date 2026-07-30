import LongformPage from "@/components/LongformPage";
import Seo from "@/components/Seo";

const About = () => {
  return (
    <>
      <Seo
        title="About Jackson Maroon | Business Analyst and Builder"
        description="Jackson Maroon is a Kearney Business Analyst in New York who builds practical tools across operations, analytics, and AI."
        canonical="https://jacksonmaroon.com/about"
      />
      <LongformPage
        title="About Jackson Maroon"
        summary="Business analyst in New York, Washington and Lee graduate, and independent builder of practical software."
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
            description: "The research, scope decisions, and launch work I owned on a team-built platform.",
            href: "/thoughts/nexo",
          },
          {
            eyebrow: "Home",
            title: "Portfolio overview",
            description: "Current projects, experience, and education.",
            href: "/",
          },
        ]}
      >
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Background</h2>
          <p>
            I am a Business Analyst at Kearney in New York. I graduated from Washington and Lee
            University with a B.S. in Business Administration and a minor in Data Science. My work
            has centered on operations, procurement, analytics, and turning repetitive processes into
            usable tools.
          </p>
          <p>
            Before joining Kearney full time, I worked on a direct-material supply chain
            transformation there and built procurement analytics that replaced a slow recurring
            workflow. At the University of Pennsylvania, I analyzed more than 40,000 patient journeys
            for addiction-policy research.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">What I build</h2>
          <p>
            Table Scout searches restaurant availability across Resy and OpenTable while leaving the
            actual booking with the provider. Canary MLX ports NVIDIA&apos;s Canary-1B-v2 speech model
            to Apple Silicon for local transcription and translation. I also built and operated an
            NYC housing discovery system with scheduled collection, ranking, duplicate suppression,
            alerts, recovery checkpoints, and a deliberate shutdown plan.
          </p>
          <p>
            Nexo was a collaborative student venture. I led product research, prioritization, user
            testing, and launch planning while two engineering teammates implemented the application.
            We shipped the MVP in four weeks and won first place in a campus venture competition.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">How I work</h2>
          <p>
            I start by identifying the decision or recurring task that matters, then build the
            smallest useful version and test it against real behavior. I prefer a working prototype,
            explicit constraints, and measurable checks over a long feature list.
          </p>
          <p>
            At Washington and Lee, I served as Head AI Fellow and president of Out in STEM. Those
            roles gave me practice teaching technical ideas, coordinating teams, and making projects
            accessible to people with different backgrounds.
          </p>
        </section>
      </LongformPage>
    </>
  );
};

export default About;
