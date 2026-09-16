import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { companyLogos, type CompanyLogoKey } from "@/data/companyLogos";
import { MapPin } from "lucide-react";

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
        company: "University of Pennsylvania",
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
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-border/70 bg-background/80 p-2">
                    <img
                      src={companyLogos[exp.logoKey].src}
                      alt={companyLogos[exp.logoKey].alt}
                      className="h-full w-full object-contain"
                      width={40}
                      height={40}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold sm:text-2xl">
                      <a href={exp.companyUrl} className="transition-colors hover:text-primary" target="_blank" rel="noreferrer">
                        {exp.company}
                      </a>
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      {exp.location}
                    </p>
                  </div>
                </div>

                <div className="ml-7 mt-6">
                  {(exp.previousRole
                    ? [{ title: exp.role, period: exp.period }, exp.previousRole]
                    : [{ title: exp.role, period: exp.period }]
                  ).map((role, roleIndex, roles) => (
                    <div key={role.title} className="relative pl-11">
                      {roles.length > 1 && (
                        <>
                          {roleIndex < roles.length - 1 && (
                            <span aria-hidden="true" className="absolute bottom-0 left-0 top-2 w-px bg-border" />
                          )}
                          <span aria-hidden="true" className="absolute -left-[3px] top-2 h-[7px] w-[7px] rounded-full bg-muted-foreground" />
                        </>
                      )}
                      <div className={roleIndex < roles.length - 1 ? "pb-7" : ""}>
                        <h4 className="text-lg font-semibold">{role.title}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{role.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleExperience;
