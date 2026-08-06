import { ArrowRight, Download, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { portfolio } from "@/content/portfolio";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function HeroSection() {
  return (
    <section
      id="home"
      className="section-anchor relative overflow-hidden pb-20 pt-12 sm:pb-24 sm:pt-16"
    >
      <div className="container mx-auto grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <span className="eyebrow" data-reveal>
            {portfolio.hero.eyebrow}
          </span>
          <h1
            className="heading-display mt-6 max-w-5xl text-5xl leading-[1.02] text-text sm:text-6xl xl:text-7xl"
            data-reveal
            style={{ ["--delay" as string]: "80ms" }}
          >
            {portfolio.basics.name}
          </h1>
          <p
            className="mt-4 max-w-3xl text-xl leading-8 text-text/88 sm:text-2xl sm:leading-9"
            data-reveal
            style={{ ["--delay" as string]: "140ms" }}
          >
            {portfolio.hero.headline}
          </p>
          <p
            className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg"
            data-reveal
            style={{ ["--delay" as string]: "200ms" }}
          >
            {portfolio.hero.summary}
          </p>

          <div
            className="mt-8 flex flex-wrap gap-4"
            data-reveal
            style={{ ["--delay" as string]: "260ms" }}
          >
            <ButtonLink href="#contact">
              Contact Me
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href={portfolio.basics.linkedin} variant="secondary">
              LinkedIn
            </ButtonLink>
            <ButtonLink href={portfolio.basics.github} variant="secondary">
              Github
            </ButtonLink>
            <a
              href={portfolio.basics.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              // download="Eshan_Jayawardana_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-white text-white rounded-md transition-all duration-300 hover:bg-white hover:text-black"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <div
            className="mt-10 flex flex-wrap items-center gap-5 text-sm text-muted"
            data-reveal
            style={{ ["--delay" as string]: "320ms" }}
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              {portfolio.basics.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              {portfolio.basics.phone}
            </span>
          </div>

          <div
            className="mt-10 flex flex-wrap gap-3"
            data-reveal
            style={{ ["--delay" as string]: "380ms" }}
          >
            {portfolio.hero.highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          className="surface-strong relative overflow-hidden rounded-[2rem] p-5 sm:p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <div className="absolute inset-0 bg-hero-mesh opacity-90" />
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-accent/12 blur-3xl" />
          <div className="relative grid gap-5">
            <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-base/65 p-3 backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-accent/15 via-white/5 to-warm/10">
                <img
                  src="/profile-placeholder1.png"
                  alt="Portrait placeholder for Eshan Jayawardana"
                  className="h-[460px] w-full rounded-[1.4rem] object-cover object-center sm:h-[540px]"
                  loading="eager"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-base/85 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  {/* <p className="text-xs uppercase tracking-[0.24em] text-slate-300">Eshan Jayawardana</p> */}
                  {/* <p className="mt-2 text-lg font-semibold text-white">{portfolio.basics.location}</p> */}
                </div>
              </div>
            </div>

            {/* <div className="grid gap-4 sm:grid-cols-2">
              {portfolio.hero.quickFacts.map((fact) => (
                <div key={fact.label} className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                  <p className="text-3xl font-semibold text-text">{fact.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{fact.label}</p>
                </div>
              ))}
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
