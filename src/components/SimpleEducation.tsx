import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Users } from "lucide-react";

const SimpleEducation = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 id="education-title" className="text-3xl font-bold mb-12 text-center">
          Education
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* University Card */}
          <Card className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/50">
            <div className="flex flex-col h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Washington and Lee University</h3>
              <p className="text-muted-foreground mb-2">Bachelor of Science in Business Administration</p>
              <p className="text-muted-foreground mb-4">Minor in Data Science</p>
              <div className="flex flex-wrap gap-2 text-sm mt-auto">
                <Badge variant="outline">GPA: 3.8</Badge>
                <Badge variant="outline">SAT: 1580</Badge>
                <Badge variant="outline">May 2026</Badge>
              </div>
            </div>
          </Card>

          {/* Honors Card */}
          <Card className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/50">
            <div className="flex flex-col h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Honors & Recognition</h3>
              <ul className="space-y-3 text-sm text-muted-foreground flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span> National Merit Scholar
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span> President's List 2023-24
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span> O∆K Honors Society
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span> CACI STEM Scholarship
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span> Gaines Scholarship
                </li>
              </ul>
            </div>
          </Card>

          {/* Leadership Card */}
          <Card className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/50">
            <div className="flex flex-col h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Leadership</h3>
              <div className="space-y-6 text-sm flex-1">
                <div>
                  <div className="font-medium text-base mb-1">Head AI Fellow</div>
                  <div className="text-muted-foreground">AI Lab at Washington and Lee</div>
                  <div className="text-xs text-muted-foreground mt-1">Jan 2025 - Present</div>
                </div>
                <div>
                  <div className="font-medium text-base mb-1">President</div>
                  <div className="text-muted-foreground">Out in STEM (oSTEM)</div>
                  <div className="text-xs text-muted-foreground mt-1">Sep 2023 - Present</div>
                </div>
                <div>
                  <div className="font-medium text-base mb-1">Team Lead</div>
                  <div className="text-muted-foreground">Student Consulting</div>
                  <div className="text-xs text-muted-foreground mt-1">Nov 2023 - Present</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SimpleEducation;