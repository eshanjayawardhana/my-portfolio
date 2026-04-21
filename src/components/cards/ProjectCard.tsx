import { ArrowUpRight, ShieldCheck } from "lucide-react";
import type { ProjectEntry } from "@/content/portfolio";

type Props = {
  project: ProjectEntry;
};

export function ProjectCard({ project }: Props) {
  return (
    <article className="surface group relative h-full overflow-hidden rounded-[1.8rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/20 hover:bg-white/8">
      <div className="absolute inset-x-6 top-6 h-40 rounded-[1.5rem] bg-gradient-to-br from-accent/18 via-white/6 to-warm/10" />
      <div className="absolute right-10 top-14 h-24 w-24 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative flex flex-col h-full">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">
            Project highlight
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-text">
            {project.title}
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-7 text-muted">
            {project.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted"
            >
              {item}
            </span>
          ))}
        </div>

        <p className="mt-5 text-sm leading-7 text-text/85">{project.focus}</p>

        <div className="mt-6 space-y-3">
          {project.features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 text-sm text-muted"
            >
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-8 flex flex-wrap gap-4">
          {project.links?.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rich-link inline-flex items-center gap-2 rounded-sm text-accent transition-all hover:underline hover:opacity-80"
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
