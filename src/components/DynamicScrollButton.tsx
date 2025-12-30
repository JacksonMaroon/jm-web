import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

type Section = "intro" | "experience" | "projects" | "education" | "explore";

const sections: Section[] = ["intro", "experience", "projects", "education", "explore"];

const DynamicScrollButton = () => {
    const [currentSection, setCurrentSection] = useState<Section>("intro");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(true);

            const sectionElements = sections.map((id) => document.getElementById(id));

            let maxVisibility = 0;
            let activeSection: Section = "intro";

            sectionElements.forEach((el) => {
                if (!el) return;

                const rect = el.getBoundingClientRect();
                const viewHeight = window.innerHeight;

                const invisibleTop = Math.max(0, -rect.top);
                const invisibleBottom = Math.max(0, rect.bottom - viewHeight);
                const visibleHeight = Math.max(0, rect.height - invisibleTop - invisibleBottom);

                if (visibleHeight > maxVisibility) {
                    maxVisibility = visibleHeight;
                    activeSection = el.id as Section;
                }
            });

            setCurrentSection(activeSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getButtonConfig = () => {
        switch (currentSection) {
            case "intro":
                return { text: "Go to Experience", target: "experience", icon: ArrowDown };
            case "experience":
                return { text: "Go to Projects", target: "projects", icon: ArrowDown };
            case "projects":
                return { text: "Go to Education", target: "education", icon: ArrowDown };
            case "education":
                return { text: "Go to Explore", target: "explore", icon: ArrowDown };
            case "explore":
                return { text: "Back to Top", target: "intro", icon: ArrowUp };
            default:
                return { text: "Next Section", target: "experience", icon: ArrowDown };
        }
    };

    const { text, target, icon: Icon } = getButtonConfig();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={cn(
            "fixed top-1/2 right-6 z-40 -translate-y-1/2 transition-all duration-500",
            isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
        )}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        asChild
                        size="icon"
                        className="rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground h-8 w-8 transition-all hover:scale-110 hover:shadow-xl border border-background/20 backdrop-blur-sm"
                    >
                        <a href={`#${target}`} onClick={handleClick} aria-label={text}>
                            <Icon className="w-4 h-4" />
                        </a>
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="left" className="mr-2">
                    <p>{text}</p>
                </TooltipContent>
            </Tooltip>
        </div>
    );
};

export default DynamicScrollButton;
