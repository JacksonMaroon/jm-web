import { MapPin, Calendar } from "lucide-react";

const SimpleHero = () => {
  return (
    <header
      id="intro"
      aria-labelledby="hero-title"
      aria-describedby="hero-summary"
      className="relative overflow-hidden py-24 px-6"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl md:left-0 md:-translate-x-1/3 md:-translate-y-1/3" />
        <div className="absolute bottom-0 right-0 h-60 w-60 translate-x-1/4 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[minmax(0,230px),1fr]">
        <div className="flex flex-col items-center gap-8 md:items-start">
          <div className="relative">
            <div className="absolute inset-0 rounded-[36px] bg-primary/30 blur-2xl" />
            <div className="relative h-40 w-40 overflow-hidden rounded-[32px] border border-border/50 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] sm:h-48 sm:w-48">
              <picture>
                <source
                  srcSet="/portrait-google-384.avif 384w, /portrait-google-768.avif 768w, /portrait-google.avif 1200w"
                  type="image/avif"
                />
                <source
                  srcSet="/portrait-google-384.webp 384w, /portrait-google-768.webp 768w, /portrait-google.webp 1200w"
                  type="image/webp"
                />
                <img
                  src="/portrait-google-384.jpg"
                  srcSet="/portrait-google-384.jpg 384w, /portrait-google-768.jpg 768w, /portrait-google.jpg 1200w"
                  sizes="(min-width: 640px) 192px, 160px"
                  alt="Jackson Maroon smiling in front of a neutral background"
                  className="h-full w-full object-cover"
                  width={192}
                  height={192}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground md:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 backdrop-blur">
              <MapPin className="h-4 w-4" />
              Lexington, VA → NYC
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 backdrop-blur">
              <Calendar className="h-4 w-4" />
              Graduating May 2026
            </span>
          </div>
          <div className="space-y-4">
            <h1 id="hero-title" className="text-4xl font-bold sm:text-5xl">
              Jackson Maroon
            </h1>
            <p id="hero-summary" className="text-lg text-muted-foreground sm:text-xl">
              Strategy Consultant. Building with AI
            </p>
          </div>
          <div className="space-y-3 rounded-2xl border border-border/60 bg-background/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/50">
            <p className="text-base text-muted-foreground">
              I'm a senior at Washington &amp; Lee University and incoming Business Analyst at Kearney in NYC.
              Long-term, I want to build AI tools that make knowledge work better—more on that below.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SimpleHero;
