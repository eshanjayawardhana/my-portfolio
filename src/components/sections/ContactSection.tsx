import type { ReactNode } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { portfolio } from "@/content/portfolio";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function ContactSection() {
  return (
    <section id="contact" className="section-anchor pb-20 sm:pb-24">
      <div className="container mx-auto space-y-10">
        <SectionIntro
          eyebrow="Contact us"
          title="Let’s connect about internships, software engineering roles, or web application projects."
          description={portfolio.contact.statement}
        />

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <aside className="space-y-6">
            <ContactCard icon={<Mail className="h-5 w-5" />} title="Email" value={portfolio.basics.email} href={`mailto:${portfolio.basics.email}`} />
            <ContactCard icon={<Phone className="h-5 w-5" />} title="Phone" value={portfolio.basics.phone} href={`tel:${portfolio.basics.phone.replace(/\s+/g, "")}`} />
            <ContactCard icon={<MapPin className="h-5 w-5" />} title="Location" value={portfolio.basics.location} />
            <article className="surface rounded-[1.8rem] p-6" data-reveal>
              <p className="text-xs uppercase tracking-[0.24em] text-muted">LinkedIn</p>
              <a
                href={portfolio.basics.linkedin}
                target="_blank"
                rel="noreferrer"
                className="focus-ring rich-link mt-5 rounded-sm"
              >
                linkedin.com/in/eshan-jayawardhana
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
            <article className="surface rounded-[1.8rem] p-6" data-reveal>
              <p className="text-xs uppercase tracking-[0.24em] text-muted">Github</p>
              <a
                href={portfolio.basics.github}
                target="_blank"
                rel="noreferrer"
                className="focus-ring rich-link mt-5 rounded-sm"
              >
                github.com/eshanjayawardhana
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          </aside>

          <div className="surface-strong rounded-[2rem] p-6 sm:p-8" data-reveal>
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.24em] text-muted">Send a message</p>
              <h3 className="mt-4 text-3xl font-semibold text-text sm:text-4xl">
                Share the opportunity, role, or project details and I’ll respond with the next step.
              </h3>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

type ContactCardProps = {
  icon: ReactNode;
  title: string;
  value: string;
  href?: string;
};

function ContactCard({ icon, title, value, href }: ContactCardProps) {
  const content = (
    <article className="surface rounded-[1.8rem] p-6" data-reveal>
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
        {icon}
      </div>
      <p className="mt-5 text-xs uppercase tracking-[0.24em] text-muted">{title}</p>
      <p className="mt-3 text-lg font-semibold text-text">{value}</p>
    </article>
  );

  if (!href) return content;

  return <a href={href} className="block">{content}</a>;
}
