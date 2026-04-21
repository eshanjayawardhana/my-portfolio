import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/content/portfolio";

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-base/70">
      <div className="container mx-auto grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <span className="eyebrow">{portfolio.basics.name}</span>
          <h2 className="heading-display max-w-xl text-3xl text-text sm:text-4xl">
            {portfolio.basics.role}
          </h2>
          <p
            className="max-w-xl text-sm leading-7 !text-slate-300 sm:text-base"
            style={{ color: "#cbd5e1" }}
          >
            Bachelor of Information Technology undergraduate at the University of Colombo School of Computing (UCSC), based in {portfolio.basics.location}.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Navigate</h3>
            <ul className="mt-4 space-y-3">
              {portfolio.navigation.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="focus-ring rich-link rounded-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Direct links</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`mailto:${portfolio.basics.email}`} className="focus-ring rich-link rounded-sm">
                  {portfolio.basics.email}
                </a>
              </li>
              <li>
                <a href={`tel:${portfolio.basics.phone.replace(/\s+/g, "")}`} className="focus-ring rich-link rounded-sm">
                  {portfolio.basics.phone}
                </a>
              </li>
              <li>
                <a href={portfolio.basics.linkedin} target="_blank" rel="noreferrer" className="focus-ring rich-link rounded-sm">
                  LinkedIn
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a href={portfolio.basics.github} target="_blank" rel="noreferrer" className="focus-ring rich-link rounded-sm">
                  Github
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 py-5">
        <div className="container mx-auto flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {portfolio.basics.name}</p>
          {/* <p>{portfolio.basics.location}</p> */}
        </div>
      </div>
    </footer>
  );
}
