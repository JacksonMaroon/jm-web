import LongformPage from "@/components/LongformPage";
import Seo from "@/components/Seo";

const Nexo = () => {
  return (
    <>
      <Seo
        title="Building Nexo | Jackson Maroon"
        description="A deep dive on building Nexo, a professional matchmaking platform, covering research, MVP decisions, and go-to-market."
        canonical="https://jacksonmaroon.com/thoughts/nexo"
        ogType="article"
      />
      <LongformPage
        title="Building Nexo: a deep dive"
        summary="A closer look at how I scoped, researched, and shipped Nexo, a professional matchmaking platform designed to make career networking more intentional."
        eyebrow="Thoughts"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Thoughts" },
          { label: "Building Nexo" },
        ]}
        relatedLinks={[
          {
            eyebrow: "About",
            title: "Detailed bio",
            description: "The background that shaped how I approach product and strategy work.",
            href: "/about",
          },
          {
            eyebrow: "Thoughts",
            title: "AI in consulting",
            description: "How I think about bringing AI into client work responsibly.",
            href: "/thoughts/ai",
          },
          {
            eyebrow: "Home",
            title: "Portfolio overview",
            description: "Back to the main page for projects and experience highlights.",
            href: "/",
          },
        ]}
      >
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">The problem we saw</h2>
          <p>
            Nexo started with a simple frustration: career networking is often random, high friction,
            and biased toward people who already have access. Students and early career professionals
            are told to network, but the process is usually a cold outreach lottery. On the other side,
            professionals want to help, yet they are overwhelmed with vague requests and not enough
            context on how to be useful. We believed there was room for a product that made both sides
            feel respected and prepared.
          </p>
          <p>
            We framed the challenge as a matchmaking problem. If we could learn what someone was
            trying to become, what they already knew, and what kind of support they needed, we could
            design introductions that were more meaningful than a standard LinkedIn connection. The
            goal was not to replace relationships, but to remove the awkward first step.
          </p>
        </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Research and insight</h2>
        <p>
          Before building, we ran more than 50 user interviews across students, alumni, and early
          career professionals. We focused on stories about recent networking experiences rather than
          abstract preferences. That helped us separate what people said they wanted from what they
          actually did when they reached out to someone.
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Most outreach fails because the request is vague and the asker cannot articulate what
            they need.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Professionals want to help but do not want to do the work of defining the conversation.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            People are more willing to meet when the match is tied to a shared background or a clear
            purpose.
          </li>
        </ul>
        <p>
          Those insights pushed us to focus on two things: stronger context on both sides of the
          match, and a clear prompt for what the first conversation should cover.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Product thesis</h2>
        <p>
          Our thesis was that better structure would unlock better relationships. We designed Nexo so
          that a user could express their goals, constraints, and interests in a compact profile. On
          the professional side, we emphasized the topics they were most willing to discuss and the
          type of help they could offer. The matching system then prioritized alignment on goals,
          timing, and shared context, not just job titles.
        </p>
        <p>
          We also added a conversation guide to every match. That guide contained a short, tailored
          agenda and a few questions to reduce the awkwardness of the first call. It was a small
          feature with outsized impact because it set expectations and helped people show up prepared.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">MVP build</h2>
        <p>
          We shipped the MVP in four weeks with two engineers and a tight scope. The core flow was
          profile creation, matching, and a simple scheduling layer. Everything else was treated as
          optional. We cut about 40 percent of the original feature list after the first round of user
          tests because the extra features did not change user behavior. That decision kept the build
          light and helped us focus on the quality of the matches.
        </p>
        <p>
          I led product development and worked closely with engineering on prioritization, user
          feedback loops, and launch planning. We tested weekly with a small cohort, captured
          conversion drop offs, and kept a rolling backlog of friction points. This cadence let us
          ship quickly while still making decisions grounded in evidence.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Go to market and outcomes</h2>
        <p>
          We started with a focused launch at Washington and Lee to keep feedback tight. The go to
          market strategy centered on student organizations, alumni groups, and a waitlist that
          allowed us to pace onboarding. We also experimented with positioning, shifting from a
          generic networking pitch to a clearer promise: better first conversations and more
          confidence in how to ask for help.
        </p>
        <p>
          The project earned first place at a campus venture competition and attracted early interest
          from students who felt unsure about outreach. The clearest signal of success was not just
          sign ups but follow up behavior. People who completed their first call were much more
          likely to request another match, which reinforced the idea that structured context and
          purpose make networking less intimidating.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">What I learned</h2>
        <p>
          The biggest lesson was focus. It is tempting to add features to solve every edge case, but
          the wins came from making the first match feel obvious and low effort. Another lesson was
          that trust is earned in small moments. If the onboarding copy feels generic or the match
          context feels thin, the entire experience breaks down. We learned to obsess over those
          details because they were the product.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">What I would build next</h2>
        <p>
          If I were to continue, I would focus on deeper feedback loops and stronger outcomes
          tracking. For example, I would test lightweight follow ups that capture what each person
          gained from the conversation and use that data to refine matching criteria. I would also
          explore partnerships with career centers or professional groups to broaden the match pool
          without losing the feeling of trust that made the early community work.
        </p>
        <p>
          Nexo reminded me that good product work is equal parts empathy and discipline. It is
          listening closely, making tough cuts, and shipping with intent. That is the approach I carry
          into every new build.
        </p>
      </section>
    </LongformPage>
    </>
  );
};

export default Nexo;
