import { useMemo, useState } from "react";
import { ChevronDown, FolderKanban, SlidersHorizontal, X } from "lucide-react";
import { portfolio } from "@/content/portfolio";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { cn } from "@/lib/utils";

type ProjectFilter = "all" | "full-stack" | "frontend" | "ai";

const quickFilters: { label: string; value: ProjectFilter }[] = [
  { label: "All", value: "all" },
  { label: "Full stack", value: "full-stack" },
  { label: "Frontend", value: "frontend" },
  { label: "AI projects", value: "ai" },
];

function getProjectCategories(project: (typeof portfolio.projects)[number]): Exclude<ProjectFilter, "all">[] {
  const tech = project.tech.join(" ").toLowerCase();
  const projectText = [
    project.title,
    project.subtitle,
    project.focus,
    ...project.features,
    ...project.tech,
  ]
    .join(" ")
    .toLowerCase();
  const categories = new Set<Exclude<ProjectFilter, "all">>();
  const hasFrontendTech =
    tech.includes("react") ||
    tech.includes("angular") ||
    tech.includes("css") ||
    tech.includes("tailwind") ||
    tech.includes("html") ||
    tech.includes("javascript");
  const hasBackendTech =
    tech.includes("node") ||
    tech.includes("express") ||
    tech.includes("spring boot") ||
    tech.includes("postgresql") ||
    tech.includes("supabase") ||
    tech.includes("mysql");
  const hasAiTech = /\b(ai|gemini)\b/.test(projectText);

  if (hasBackendTech) {
    categories.add("full-stack");
  }

  if (hasAiTech) {
    categories.add("ai");
  }

  if (hasFrontendTech && !hasBackendTech && !hasAiTech) {
    categories.add("frontend");
  }

  return Array.from(categories);
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const [selectedTech, setSelectedTech] = useState("all");

  const technologyOptions = useMemo(
    () =>
      Array.from(new Set(portfolio.projects.flatMap((project) => project.tech))).sort((a, b) =>
        a.localeCompare(b),
      ),
    [],
  );

  const filteredProjects = useMemo(
    () =>
      portfolio.projects.filter((project) => {
        const matchesQuickFilter =
          activeFilter === "all" || getProjectCategories(project).includes(activeFilter);
        const matchesTechnology = selectedTech === "all" || project.tech.includes(selectedTech);

        return matchesQuickFilter && matchesTechnology;
      }),
    [activeFilter, selectedTech],
  );

  const hasActiveFilters = activeFilter !== "all" || selectedTech !== "all";

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

        <div className="surface-strong space-y-5 rounded-[1.4rem] p-4 sm:p-5" data-reveal>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                <SlidersHorizontal className="h-4 w-4" />
                Project filters
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">
                Showing {filteredProjects.length} of {portfolio.projects.length} projects
              </p>
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={() => {
                  setActiveFilter("all");
                  setSelectedTech("all");
                }}
                className="focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-muted transition hover:border-accent/30 hover:text-accent"
              >
                <X className="h-4 w-4" />
                Clear filters
              </button>
            )}
          </div>

          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-wrap gap-2" aria-label="Project type filters">
              {quickFilters.map((filter) => {
                const isActive = activeFilter === filter.value;

                return (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => setActiveFilter(filter.value)}
                    className={cn(
                      "focus-ring min-h-10 rounded-full border px-4 py-2 text-sm font-semibold transition",
                      isActive
                        ? "border-accent/40 bg-accent/15 text-accent shadow-glow"
                        : "border-white/10 bg-white/5 text-muted hover:border-accent/30 hover:text-text",
                    )}
                    aria-pressed={isActive}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>

            <label className="flex w-full flex-col gap-2 sm:w-80">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Programming language / tech
              </span>
              <span className="relative">
                <select
                  value={selectedTech}
                  onChange={(event) => setSelectedTech(event.target.value)}
                  className="focus-ring min-h-12 w-full appearance-none rounded-[1rem] border border-white/10 bg-base/80 px-4 py-3 pr-11 text-sm font-semibold text-text transition hover:border-accent/30"
                >
                  <option value="all">All technologies</option>
                  {technologyOptions.map((tech) => (
                    <option key={tech} value={tech}>
                      {tech}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
              </span>
            </label>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 lg:grid-cols-2">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : (
          <div className="surface rounded-[1.4rem] p-8 text-center" data-reveal>
            <p className="text-sm font-semibold text-text">No projects match these filters.</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Try another project type or technology.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
