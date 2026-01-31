import SimpleHero from "@/components/SimpleHero";
import SimpleExperience from "@/components/SimpleExperience";
import SimpleProjects from "@/components/SimpleProjects";
import SimpleEducation from "@/components/SimpleEducation";
import SimpleExplore from "@/components/SimpleExplore";
import FloatingMenuBar from "@/components/FloatingMenuBar";
import DynamicScrollButton from "@/components/DynamicScrollButton";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title="Jackson Maroon"
        description="Strategy Consultant. Building with AI."
        canonical="https://jacksonmaroon.com/"
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-background focus:px-4 focus:py-2 focus:text-foreground"
      >
        Skip to main content
      </a>
      <nav aria-label="Breadcrumb" className="sr-only">
        <ol>
          <li>
            <a href="/">Home</a>
          </li>
        </ol>
      </nav>
      <main id="main-content">
        <SimpleHero />
        <SimpleExperience />
        <SimpleProjects />
        <SimpleEducation />
        <SimpleExplore />
      </main>
      <footer className="py-8 px-6 text-center border-t">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-muted-foreground">
            © 2026 Jackson Maroon
          </p>
        </div>
      </footer>
      <FloatingMenuBar />
      <DynamicScrollButton />
    </div>
  );
};

export default Index;
