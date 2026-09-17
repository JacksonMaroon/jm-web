import { useState } from "react";
import Seo from "@/components/Seo";
import "./condensed.css";

type Theme = "system" | "light" | "dark";
const Index = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      return saved === "light" || saved === "dark" ? saved : "system";
    } catch { return "system"; }
  });
  const changeTheme = (value: Theme) => {
    setTheme(value);
    try { localStorage.setItem("portfolio-theme", value); } catch { /* Preference still applies this visit. */ }
  };
  return (
  <div className="compact-site" data-theme={theme}>
    <Seo title="Jackson Maroon" description="Business analyst. I build practical AI tools." canonical="https://jacksonmaroon.com/" />
    <a className="compact-skip" href="#content">Skip to content</a>
    <main id="content" className="compact-page">
      <header className="compact-header">
        <div>
          <p className="compact-location">New York, NY</p>
          <h1>Jackson Maroon<span>.</span></h1>
          <p className="compact-intro">Business analyst. I build practical AI tools.</p>
          <nav aria-label="Contact">
            <a href="mailto:jackson.maroon4@gmail.com">Email ↗</a>
            <a href="https://www.linkedin.com/in/jacksonmaroon" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/JacksonMaroon" target="_blank" rel="noreferrer">GitHub ↗</a>
          </nav>
        </div>
        <span className="compact-portrait">
          <img className="portrait-light" src="/professional-headshot.jpg" alt="Professional headshot of Jackson Maroon" width="80" height="80" />
          <img className="portrait-dark" src="/professional-studio.jpg" alt="Professional headshot of Jackson Maroon" width="80" height="80" />
        </span>
      </header>

      <section className="compact-section" aria-labelledby="experience-heading">
        <h2 id="experience-heading">Experience</h2>
        <div className="compact-entries">
          <article>
            <h3><a href="https://www.kearney.com" target="_blank" rel="noreferrer">Kearney</a></h3>
            <div className="compact-timeline">
              <div className="compact-role"><p>Business Analyst</p><time>Current</time></div>
              <div className="compact-role"><p>Summer Business Analyst</p><time>Jun – Aug 2025</time></div>
            </div>
          </article>
          <article>
            <h3>University of Pennsylvania</h3>
            <div className="compact-role"><p>NIH Summer Intern</p><time>May – Jul 2024</time></div>
          </article>
          <article>
            <h3>W&amp;L Office of Health Promotion</h3>
            <div className="compact-role"><p>Assistant to Director</p><time>Sep 2023 – May 2026</time></div>
          </article>
        </div>
      </section>

      <section className="compact-section" aria-labelledby="building-heading">
        <h2 id="building-heading">Building</h2>
        <article className="compact-project">
          <div className="compact-role"><h3>Think-cell for Codex</h3><time>2026</time></div>
          <p>Turn new data into editable PowerPoint charts. A Codex plugin that reuses existing think-cell designs, updates chart data, and checks the result.</p>
          <a className="compact-case" href="/thoughts/thinkcell-codex">Read the case study <span aria-hidden="true">↗</span></a>
        </article>
      </section>

      <section className="compact-section" aria-labelledby="education-heading">
        <h2 id="education-heading">Education</h2>
        <div>
          <div className="compact-role"><h3>Washington and Lee University</h3><time>2026</time></div>
          <p className="compact-secondary">B.S. Business Administration · Minor in Data Science</p>
          <p className="compact-note">Head AI Fellow · Student Consulting Team Lead</p>
          <p className="compact-note">National Merit Scholar · OΔK · CACI STEM &amp; Gaines Scholarships</p>
        </div>
      </section>

      <section className="compact-section compact-learning" aria-labelledby="learning-heading">
        <h2 id="learning-heading">Learning</h2>
        <div>
          <p>Claude Certified Architect – Foundations <span>Anthropic · 2026</span></p>
          <p>AI Strategy <span>BlueDot Impact · 2026</span></p>
        </div>
      </section>
      <footer>
        <span>© 2026 Jackson Maroon</span>
        <label className="compact-theme">Appearance
          <select aria-label="Appearance" value={theme} onChange={(event) => changeTheme(event.target.value as Theme)}>
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </footer>
    </main>
  </div>
  );
};

export default Index;
