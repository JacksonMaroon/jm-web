import { useEffect, useState, type ComponentType, type SVGProps } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Mail, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const LinkedInLogo = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 448 512"
    className={className}
    {...props}
  >
    <path
      fill="currentColor"
      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
    />
  </svg>
);

const GitHubLogo = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.073 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
    />
  </svg>
);

type Theme = "light" | "dark";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type SocialLink = {
  href: string;
  label: string;
  icon: IconComponent;
  iconClassName?: string;
};

const socialLinks: SocialLink[] = [
  {
    href: "mailto:jackson.maroon4@gmail.com",
    label: "Email Jackson",
    icon: Mail,
  },
  {
    href: "https://linkedin.com/in/jacksonmaroon",
    label: "LinkedIn",
    icon: LinkedInLogo,
  },
  {
    href: "https://github.com/JacksonMaroon",
    label: "GitHub",
    icon: GitHubLogo,
  },
];

const FloatingMenuBar = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") {
      return "light";
    }

    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const htmlElement = document.documentElement;
    const storedTheme = window.localStorage.getItem("theme");
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const initialTheme: Theme = storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : mediaQuery.matches
        ? "dark"
        : "light";

    htmlElement.classList.toggle("dark", initialTheme === "dark");
    setTheme(initialTheme);

    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      if (window.localStorage.getItem("theme")) {
        return;
      }

      const nextTheme: Theme = event.matches ? "dark" : "light";
      htmlElement.classList.toggle("dark", nextTheme === "dark");
      setTheme(nextTheme);
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleSystemThemeChange);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(handleSystemThemeChange);
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", handleSystemThemeChange);
      } else if (typeof mediaQuery.removeListener === "function") {
        mediaQuery.removeListener(handleSystemThemeChange);
      }
    };
  }, []);

  const handleToggleTheme = () => {
    if (typeof window === "undefined") {
      return;
    }

    setTheme((prevTheme) => {
      const nextTheme: Theme = prevTheme === "dark" ? "light" : "dark";
      const htmlElement = document.documentElement;

      htmlElement.classList.toggle("dark", nextTheme === "dark");
      window.localStorage.setItem("theme", nextTheme);

      return nextTheme;
    });
  };

  return (
    <nav
      aria-label="Quick access navigation"
      className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2"
    >
      <div className="flex items-center gap-1 rounded-full border border-border/60 bg-card/90 px-2 py-2 shadow-2xl backdrop-blur">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleToggleTheme}
              className="relative overflow-hidden"
              aria-label={theme === "dark" ? "Activate light mode" : "Activate dark mode"}
            >
              <Sun
                className={cn(
                  "absolute inset-0 m-auto h-4 w-4 transition-all",
                  theme === "dark" ? "scale-0 opacity-0" : "scale-100 opacity-100",
                )}
              />
              <Moon
                className={cn(
                  "absolute inset-0 m-auto h-4 w-4 transition-all",
                  theme === "dark" ? "scale-100 opacity-100" : "scale-0 opacity-0",
                )}
              />
              <span className="sr-only">Toggle color theme</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">Toggle theme</TooltipContent>
        </Tooltip>

        <span aria-hidden="true" className="mx-1 h-6 w-px bg-border/60" />

        {socialLinks.map(({ href, label, icon: Icon, iconClassName }) => (
          <Tooltip key={label}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="group text-foreground/80 hover:text-foreground"
              >
                <a
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex h-10 w-10 items-center justify-center"
                >
                  <Icon
                    className={cn(
                      "h-5 w-5 text-foreground transition-transform group-hover:scale-110",
                      iconClassName,
                    )}
                  />
                  <span className="sr-only">{label}</span>
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">{label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </nav>
  );
};

export default FloatingMenuBar;
