import { BookOpenText, GraduationCap, ShieldCheck } from "lucide-react";
import { portfolio } from "@/content/portfolio";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function EducationSection() {
  return (
    <section id="education" className="section-anchor pb-16 sm:pb-24">
      <div className="container mx-auto space-y-10">
        <SectionIntro
          eyebrow="Education"
          title="Academic background with a practical focus on software engineering and web development."
          description="The education section is kept clear and concise so recruiters can immediately see the degree, institution, GPA, and supporting strengths."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="surface-strong rounded-[2rem] p-6 sm:p-8" data-reveal>
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mt-2 text-3xl font-semibold text-text">{portfolio.education.degree}</h3>
                  <p className="mt-3 text-base text-muted">{portfolio.education.school}</p>
                </div>
              </div>
              <span className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-muted">
                {portfolio.education.duration}
              </span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-muted">current GPA</p>
                <p className="mt-3 text-4xl font-semibold text-text">{portfolio.education.gpa}</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-muted">Status</p>
                <p className="mt-3 text-lg font-semibold text-text">Undergraduate</p>
                <p className="mt-2 text-sm text-muted">Building practical experience alongside academic learning.</p>
              </div>
            </div>

            <ul className="mt-8 space-y-4 text-sm leading-7 text-muted">
              {portfolio.education.supportingNotes.map((note) => (
                <li key={note} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </article>

          <div className="grid gap-6">
            <article className="surface rounded-[1.8rem] p-6" data-reveal>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                <BookOpenText className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-text">Engineering mindset</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Interested in software engineering principles, maintainable architecture, responsive UI, and reliable problem-solving rather than only surface-level implementation.
              </p>
            </article>

            <article className="surface rounded-[1.8rem] p-6" data-reveal>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-text">Professional readiness</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Comfortable with version control, API testing tools, databases, and collaborative development habits that support internship and junior engineering environments.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
