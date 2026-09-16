import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { companyLogos, type CompanyLogoKey } from "@/data/companyLogos";
import { Calendar, MapPin } from "lucide-react";

const SimpleExperience = () => {
  const experiences: Array<{
    company: string;
    role: string;
    period: string;
    location: string;
    companyUrl: string;
    logoKey: CompanyLogoKey;
    previousRole?: { title: string; period: string };
  }> = [
      {
        company: "Kearney",
        role: "Business Analyst",
        period: "Current",
        previousRole: { title: "Summer Business Analyst", period: "Jun. 2025 – Aug. 2025" },
        location: "New York, NY",
        companyUrl: "https://www.kearney.com",
        logoKey: "kearney",
      },
      {
        company: "University of Pennsylvania, Center for Addiction Policy",
        role: "NIH Summer Intern",
        period: "May 2024 – Jul. 2024",
        location: "Philadelphia, PA",
        companyUrl: "https://www.med.upenn.edu/",
        logoKey: "perelman",
      },
      {
        company: "W&L Office of Health Promotion",
        role: "Assistant to Director",
        period: "Sep. 2023 - May 2026",
        location: "Lexington, VA",
        companyUrl: "https://my.wlu.edu/office-of-health-promotion",
        logoKey: "wlu",
      }
    ];

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="py-20 px-6 bg-gradient-to-b from-background via-background to-muted"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <Badge variant="secondary" className="mx-auto w-fit px-4 py-1 text-sm uppercase tracking-wide">
            MY WORK
          </Badge>
          <h2 id="experience-title" className="text-3xl font-bold sm:text-4xl">
            Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-border/60 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/50"
            >
              <div className="flex flex-col gap-6 p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-border/70 bg-background/80 p-3 shadow-inner">
                      <img
                        src={companyLogos[exp.logoKey].src}
                        alt={companyLogos[exp.logoKey].alt}
                        className="h-full w-full object-contain"
                        width={56}
                        height={56}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold sm:text-2xl">{exp.role}</h3>
                      <a
                        href={exp.companyUrl}
                        className="text-lg font-medium text-primary transition-colors hover:text-primary/80"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {exp.company}
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 text-sm">
                    <Badge variant="secondary" className="flex items-center gap-2 bg-primary/10 text-primary">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </Badge>
                  </div>
                </div>

                {exp.previousRole && (
                  <div className="ml-10 border-l-2 border-primary/30 pl-6 sm:ml-10 sm:pl-[4.5rem]">
                    <h4 className="text-lg font-medium">{exp.previousRole.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{exp.previousRole.period}</p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleExperience;
