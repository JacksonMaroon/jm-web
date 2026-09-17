import { useState } from "react";
import Seo from "@/components/Seo";
import "./condensed.css";

const LinkArrow = () => (
  <svg className="compact-link-arrow" width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
    <path d="M4 12 12 4M4 4h8v8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

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
    <Seo title="Jackson Maroon" description="AI-native generalist based in New York" canonical="https://jacksonmaroon.com/" />
    <a className="compact-skip" href="#content">Skip to content</a>
    <main id="content" className="compact-page">
      <header className="compact-header">
        <div>
          <h1>Jackson Maroon</h1>
          <p className="compact-location">New York, NY</p>
          <nav aria-label="Contact">
            <a href="mailto:jackson.maroon4+website@gmail.com">Email <LinkArrow /></a>
            <a href="https://www.linkedin.com/in/jacksonmaroon" target="_blank" rel="noreferrer">LinkedIn <LinkArrow /></a>
            <a href="https://github.com/JacksonMaroon" target="_blank" rel="noreferrer">GitHub <LinkArrow /></a>
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
            <h3>Kearney</h3>
            <div className="compact-timeline">
              <div className="compact-role"><p>Business Analyst</p><time>Present</time></div>
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
          <div className="compact-role"><h3><a href="https://github.com/JacksonMaroon/thinkcell-codex" target="_blank" rel="noreferrer">Thinkcell Autopilot <LinkArrow /></a></h3></div>
          <p>Let your AI agent handle the charts.</p>
        </article>
      </section>

      <section className="compact-section" aria-labelledby="education-heading">
        <h2 id="education-heading">Education</h2>
        <div>
          <div className="compact-role"><h3>Washington and Lee University</h3><time>2026</time></div>
          <p className="compact-secondary">B.S. Business Administration · Minor in Data Science</p>
          <p className="compact-note">Head AI Fellow · Student Consulting Lead</p>
          <p className="compact-note">National Merit Scholar</p>
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
