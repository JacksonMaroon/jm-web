import LongformPage from "@/components/LongformPage";
import Seo from "@/components/Seo";

const ThinkcellCodex = () => (
  <>
    <Seo
      title="Think-cell for Codex | Jackson Maroon"
      description="Bringing AI into the analyst's chart workflow: create slides from existing think-cell designs, update supported data, and keep charts editable in PowerPoint."
      canonical="https://jacksonmaroon.com/thoughts/thinkcell-codex"
      ogType="article"
    />
    <LongformPage
      title="New data. Editable charts. Your existing design."
      summary="Think-cell for Codex brings AI into the analyst's chart workflow, connecting supplied data with native PowerPoint charts and the checks needed to review the result."
      eyebrow="Think-cell for Codex · Independent project · September 2026"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Case studies" },
        { label: "Think-cell for Codex" },
      ]}
      relatedLinks={[
        { eyebrow: "About", title: "My background", description: "How consulting, analytics, and product building connect in my work.", href: "/about" },
        { eyebrow: "Projects", title: "More of my work", description: "Return to my experience, featured project, and education.", href: "/#projects" },
      ]}
    >
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Bring AI to the deck people actually use</h2>
        <p>
          A presentation is rarely finished when the first chart is made. Numbers change, analyses
          evolve, and the next version still needs to fit the same deck. The useful output is an
          editable chart that a colleague can open, inspect, and revise in PowerPoint.
        </p>
        <p>
          I built Think-cell for Codex to connect AI assistance with that workflow. It starts with
          an existing think-cell chart design, creates a slide copy or updates supported chart data,
          and checks the output before handing it back for review.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Keep the design. Change the data.</h2>
        <p>
          Existing slides carry decisions about formatting, chart structure, and visual hierarchy.
          Reusing those designs gives the workflow a practical starting point. Supported updates
          use think-cell's official JSON automation, and the resulting charts remain native to
          PowerPoint and think-cell.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Create chart slides from user-supplied think-cell examples.</li>
          <li>Update supported bar, column, line, area, pie, scatter, bubble, and combination charts.</li>
          <li>Handle bounded waterfall and Mekko updates with additional review.</li>
          <li>Place supported charts into an available region of an existing slide copy.</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Build verification into the workflow</h2>
        <p>
          The engineering challenge is making the requested change while preserving the parts of
          the presentation that already work. The plugin checks intended values against embedded
          chart data, checks surrounding content, saves and reopens the output in PowerPoint, and
          renders a preview for visual review. It works on separate outputs so the original remains
          available.
        </p>
        <p>
          The September 15 validation record documents 19 changed-data examples and 17 one-chart
          placement and composition cases. These are bounded checks of specific examples, not a
          claim that every chart or layout is supported. Waterfall and Mekko charts require
          specialized visual review alongside data checks.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Part of a broader presentation workflow</h2>
        <p>
          I also built a companion PowerPoint for Codex plugin for slide review, creation from
          existing templates, and scoped text and table edits. Together, the projects explore how
          AI can help with recurring presentation work while retaining the editable files and
          familiar tools people depend on.
        </p>
      </section>
      <section className="rounded-lg border border-primary/20 bg-muted/30 p-5 space-y-3">
        <h2 className="text-lg font-semibold text-foreground">Current status</h2>
        <p>
          This is a private, experimental desktop project, built by me with Codex assistance.
          It requires Windows, desktop PowerPoint, and licensed think-cell. Support depends on the
          source chart and requested change; it does not generate arbitrary charts from scratch.
          Outputs still need visual and semantic review.
        </p>
        <p>
          Think-cell, Microsoft PowerPoint, and OpenAI Codex are third-party products.
          This independent project is not affiliated with or endorsed by their makers.
        </p>
      </section>
    </LongformPage>
  </>
);

export default ThinkcellCodex;
