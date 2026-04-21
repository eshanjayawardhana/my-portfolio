import type { ReactNode } from "react";
import { Code2, Languages, Sparkles, Users } from "lucide-react";
import { portfolio } from "@/content/portfolio";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function AboutSection() {
  return (
    <section id="about" className="section-anchor pb-16 pt-8 sm:pb-24">
      <div className="container mx-auto space-y-12">
        <SectionIntro
          eyebrow="About"
          title={portfolio.about.title}
          description="This section combines profile, technical strengths, project experience, certifications, and communication-oriented details in one recruiter-friendly flow."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="surface-strong rounded-[2rem] p-6 sm:p-8 flex flex-col justify-center" data-reveal>
            <div className="space-y-6 text-base leading-relaxed text-text sm:text-lg lg:text-xl">
              {portfolio.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-white">
                  {paragraph}
                </p>
              ))}
            </div>
            {/* <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {portfolio.about.highlights.map((item) => (
                <div key={item.title} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-text">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                </div>
              ))}
            </div> */}
          </article>

          <article className="surface rounded-[2rem] p-6 sm:p-8" data-reveal>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                <Code2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-muted">Technical skills</p>
                <h3 className="mt-1 text-2xl font-semibold text-text">Current stack and foundations</h3>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {portfolio.skills.map((group) => (
                <div key={group.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-text">{group.title}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <InfoBlock icon={<Users className="h-5 w-5" />} title="Soft skills" items={portfolio.additional.softSkills} />
          <InfoBlock icon={<Languages className="h-5 w-5" />} title="Languages" items={portfolio.additional.languages} />
          <InfoBlock icon={<Sparkles className="h-5 w-5" />} title="Certifications" items={portfolio.additional.certifications} />
        </div>
      </div>
    </section>
  );
}

type InfoBlockProps = {
  icon: ReactNode;
  title: string;
  items: string[];
};

function InfoBlock({ icon, title, items }: InfoBlockProps) {
  return (
    <article className="surface rounded-[1.8rem] p-6" data-reveal>
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
        {icon}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-text">{title}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-muted">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
