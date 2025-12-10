import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const SimpleEducation = () => {
  const skills = [
    "Product Management", "User Research", "A/B Testing", "Generative AI",
    "Python", "SQL", "Figma", "Data Analysis", "Go-to-Market Strategy",
    "Agile/Scrum", "PowerPoint", "Excel VBA", "Qualtrics"
  ];

  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="py-20 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h2 id="education-title" className="text-3xl font-bold mb-12 text-center">
          Education & Skills
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Washington and Lee University</h3>
                <p className="text-muted-foreground mb-2">Bachelor of Science in Business Administration</p>
                <p className="text-muted-foreground mb-3">Minor in Data Science</p>
                <div className="flex flex-wrap gap-2 text-sm">
                  <Badge variant="outline">GPA: 3.8</Badge>
                  <Badge variant="outline">SAT: 1580</Badge>
                  <Badge variant="outline">May 2026</Badge>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-3">Honors & Recognition</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• National Merit Scholar</li>
                  <li>• President's List 2023-24</li>
                  <li>• O∆K Honors Society</li>
                  <li>• CACI STEM Scholarship</li>
                  <li>• Gaines Scholarship</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Leadership</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium">Head AI Fellow</div>
                  <div className="text-muted-foreground">AI Lab at Washington and Lee • Jan 2025 - Present</div>
                </div>
                <div>
                  <div className="font-medium">President</div>
                  <div className="text-muted-foreground">Out in STEM (oSTEM) • Sep 2023 - Present</div>
                </div>
                <div>
                  <div className="font-medium">Team Lead</div>
                  <div className="text-muted-foreground">Student Consulting • Nov 2023 - Present</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleEducation;