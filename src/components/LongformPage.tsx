import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import FloatingMenuBar from "@/components/FloatingMenuBar";
import { Card } from "@/components/ui/card";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type RelatedLink = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
};

type LongformPageProps = {
  title: string;
  summary: string;
  eyebrow: string;
  breadcrumbs: BreadcrumbItem[];
  relatedLinks: RelatedLink[];
  children: ReactNode;
};

const LongformPage = ({
  title,
  summary,
  eyebrow,
  breadcrumbs,
  relatedLinks,
  children,
}: LongformPageProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-background focus:px-4 focus:py-2 focus:text-foreground"
      >
        Skip to main content
      </a>

      <header className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 h-72 w-72 -translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/4 translate-y-1/4 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-16 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((crumb, index) => (
                <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                  {crumb.href ? (
                    <a href={crumb.href} className="transition hover:text-foreground">
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-foreground">{crumb.label}</span>
                  )}
                  {index < breadcrumbs.length - 1 ? (
                    <span aria-hidden="true" className="text-muted-foreground">
                      /
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {eyebrow}
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl">{title}</h1>
            <p className="max-w-2xl text-lg text-muted-foreground">{summary}</p>
          </div>
        </div>
      </header>

      <main id="main-content" className="px-6 pb-16 pt-12">
        <article className="mx-auto max-w-3xl space-y-8 text-base leading-7 text-muted-foreground">
          {children}
        </article>
      </main>

      <aside className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
            <h2 className="text-2xl font-semibold text-foreground">More to explore</h2>
            <p className="text-sm text-muted-foreground">
              A few short reads to keep the context connected.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {relatedLinks.map((link) => (
              <Card
                key={link.href}
                className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/50"
              >
                <a
                  href={link.href}
                  className="group flex h-full flex-col gap-3"
                  aria-label={link.title}
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {link.eyebrow}
                  </span>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-foreground">{link.title}</h3>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">{link.description}</p>
                  <span className="mt-auto text-sm font-medium text-foreground">Read more</span>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </aside>

      <footer className="border-t px-6 py-8 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm text-muted-foreground">© 2026 Jackson Maroon</p>
        </div>
      </footer>

      <FloatingMenuBar />
    </div>
  );
};

export default LongformPage;
