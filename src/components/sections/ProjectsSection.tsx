import { FolderKanban } from "lucide-react";
import { portfolio } from "@/content/portfolio";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-anchor pb-16 sm:pb-24">
      <div className="container mx-auto space-y-10">
        <SectionIntro
          eyebrow="Projects"
          title={portfolio.projectSection.title}
          description={portfolio.projectSection.description}
        />

        <div className="flex items-center gap-3" data-reveal>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
            <FolderKanban className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Featured work</p>
            <h3 className="text-2xl font-semibold text-text">Selected academic and development projects</h3>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {portfolio.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
