import LongformPage from "@/components/LongformPage";
import Seo from "@/components/Seo";

const Ai = () => {
  return (
    <>
      <Seo
        title="AI in Consulting | Jackson Maroon"
        description="A practical take on AI in consulting: where it helps, where it misleads, and the guardrails that keep client work trustworthy."
        canonical="https://jacksonmaroon.com/thoughts/ai"
        ogType="article"
      />
      <LongformPage
        title="AI in consulting: my take"
        summary="A practical view on where AI helps, where it can mislead, and how consultants can use it to serve clients better."
        eyebrow="Thoughts"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Thoughts" },
          { label: "AI in consulting" },
        ]}
        relatedLinks={[
          {
            eyebrow: "About",
            title: "Detailed bio",
            description: "The background behind my focus on strategy, analytics, and AI.",
            href: "/about",
          },
          {
            eyebrow: "Thoughts",
            title: "Building Nexo",
            description: "A deep dive into the product and research decisions behind Nexo.",
            href: "/thoughts/nexo",
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
          <h2 className="text-xl font-semibold text-foreground">Why AI matters in consulting</h2>
          <p>
            Consulting has always been a blend of analysis, judgment, and communication. AI changes the
            speed of the analysis layer and raises the bar on how quickly teams can explore options.
            That does not mean AI replaces the consultant. It means the baseline expectation shifts from
            assembling information to interpreting it. The consultant who can frame the right question,
            validate the answer, and explain the tradeoffs still wins.
          </p>
          <p>
            I see AI as a force multiplier for the work that usually happens between meetings. It can
            help with synthesis, pattern detection, and first drafts, which frees time for the parts of
            the job that clients actually pay for: clarity, prioritization, and confidence in what to do
            next.
          </p>
        </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Where AI helps today</h2>
        <p>
          The strongest near term use cases are the ones that reduce friction without sacrificing
          accountability. The consultant should still own the output, but AI can do the heavy lifting
          on steps that are necessary but not differentiated.
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Rapid synthesis of interview notes and research summaries with clear source tracking.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Scenario scaffolding that explores multiple assumptions before a model is finalized.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            First pass slide structure, storylines, and appendix organization to save formatting time.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Lightweight automation for recurring workflows like competitive scans or KPI snapshots.
          </li>
        </ul>
        <p>
          These are not glamorous, but they compound. A team that removes two hours of low value work
          each day suddenly has space for deeper client conversations or faster iteration on the core
          recommendation.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Risks and guardrails</h2>
        <p>
          AI can also create new risks if the workflow is sloppy. Hallucinated facts, unclear data
          provenance, and confidentiality concerns are real. The fix is not to avoid the tools, but to
          build guardrails. In practice, that means verifying sources, labeling AI generated content,
          and keeping sensitive data out of generic models unless a secure, approved environment is
          in place.
        </p>
        <p>
          I also think about bias. Models are trained on historical data and can reinforce existing
          patterns. Consultants have a responsibility to challenge default outputs and to include
          human context. AI can accelerate a bad assumption just as easily as a good one, so the
          review loop matters more than ever.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">The human layer</h2>
        <p>
          The most valuable consulting work still requires empathy and accountability. AI can help a
          team get to an answer faster, but it cannot replace the trust that comes from understanding
          the clients incentives, the politics of change, or the nuance behind a failed initiative.
          That is why I see AI as part of the toolkit, not the toolkit itself.
        </p>
        <p>
          A great consultant knows when to slow down. If a model suggests an aggressive cost cut, the
          consultant needs to interpret the human impact, test the idea with stakeholders, and build
          a narrative that can be executed. That work is still deeply human and will remain a
          differentiator.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">What I am watching</h2>
        <p>
          I am interested in tools that connect directly to a teams data and workflows without
          compromising security. I am also watching how firms build internal playbooks for AI usage.
          The winners will not just be the teams with the best models, but the teams with the best
          habits: strong prompts, clear validation steps, and an operating model that keeps humans in
          the loop.
        </p>
        <p>
          My goal is to help make AI feel practical and trustworthy inside client work. That means
          building systems that are transparent, explainable, and tied to real decisions. When AI is
          used that way, it can make consulting more effective and more human at the same time.
        </p>
      </section>
    </LongformPage>
    </>
  );
};

export default Ai;
