import LongformPage from "@/components/LongformPage";
import Seo from "@/components/Seo";

const NycHousingSystem = () => {
  return (
    <>
      <Seo
        title="NYC Housing Search System | Jackson Maroon"
        description="A case study on building, operating, and intentionally decommissioning a cloud-based NYC housing discovery and alerting system."
        canonical="https://jacksonmaroon.com/thoughts/nyc-housing-system"
        ogType="article"
      />
      <LongformPage
        title="Building an NYC housing search system"
        summary="How I turned a noisy, repetitive apartment search into a stateful production system, then shut it down cleanly when the job was done."
        eyebrow="Production case study"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case studies" },
          { label: "NYC housing search" },
        ]}
        relatedLinks={[
          {
            eyebrow: "About",
            title: "Detailed bio",
            description: "The background that shaped how I approach operations, analytics, and product work.",
            href: "/about",
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
            description: "Current projects, experience, and education.",
            href: "/",
          },
        ]}
      >
        <section className="rounded-lg border border-primary/20 bg-muted/30 p-5">
          <h2 className="text-lg font-semibold text-foreground">Current status</h2>
          <p className="mt-2">
            This system is intentionally offline. After it had served its purpose, I disabled every
            scheduled runner, preserved a restorable cloud snapshot, and removed the active server.
            The case study describes a historical production system, not a currently running service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">The problem</h2>
          <p>
            Finding an apartment in New York meant checking several sources repeatedly, applying
            different criteria to different household scenarios, and reacting quickly when a
            promising listing appeared. A basic scraper would collect links, but it would not answer
            the harder questions: Is this actually new? Which search lane does it belong to? Is it
            worth interrupting someone for? Did the collector fail, or did nothing qualify?
          </p>
          <p>
            I built the system around those operating questions. The goal was not to collect the most
            listings. It was to surface a small number of relevant, timely leads while making the
            system understandable when something went wrong.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">System design</h2>
          <p>
            Scheduled collectors gathered listings from multiple sources into a shared evaluation
            flow. Separate lanes handled individual and shared-apartment searches, each with its own
            location, price, and fit rules. A checker scored candidates, compared them with persistent
            seen-state, and sent the strongest new leads through Telegram.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              Independent search lanes kept different household needs from collapsing into one set of
              compromises.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              Persistent state prevented duplicate notifications across scheduled runs.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              Checkpoints preserved useful partial progress when a long collection run timed out.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              Heartbeats and source-specific health signals distinguished an active collector from a
              stale data pipeline.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Operating lessons</h2>
          <p>
            The most important failures were rarely obvious crashes. At one point, the individual
            search looked dead even though collection was working. The real issue was downstream:
            near-miss candidates were marked as seen without generating a notification. Adjusting the
            decision threshold and carefully repairing seen-state restored the signal without
            flooding the alert channel.
          </p>
          <p>
            Another issue came from treating the final data file as the only health signal. A
            long-running collector could still be making progress when a timeout prevented its final
            write. Adding intermediate checkpoints and a separate activity heartbeat made monitoring
            more accurate and made recovery less destructive.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Responsible shutdown</h2>
          <p>
            Decommissioning the system was part of the engineering work. I audited scheduled jobs,
            local fallback runners, matching processes, and cloud infrastructure rather than stopping
            one visible task and assuming the system was off. The server was shut down, snapshotted,
            verified, and then deleted, leaving a recoverable artifact without continuing to incur
            compute costs.
          </p>
          <p>
            That lifecycle changed how I think about production automation. A useful system needs
            clear state, observable behavior, bounded failure modes, and an exit plan. Shipping the
            first version is only one part of operating it responsibly.
          </p>
        </section>
      </LongformPage>
    </>
  );
};

export default NycHousingSystem;
