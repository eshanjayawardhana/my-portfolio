import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { portfolio } from "@/content/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection(
    portfolio.navigation.map((item) => item.id),
  );

  const handleMobileNavClick = (id: string) => {
    // Close the menu immediately
    setOpen(false);

    // Update the URL hash
    window.location.hash = `#${id}`;

    // Small timeout to ensure DOM is ready, then scroll
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-base/70 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between gap-6 py-4">
        <a
          href="#home"
          className="focus-ring flex items-center gap-3 rounded-full"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 font-display text-lg text-accent shadow-glow">
            {portfolio.basics.initials}
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold text-text">
              {portfolio.basics.name}
            </span>
            <span className="block text-xs uppercase tracking-[0.22em] text-muted">
              BIT Undergraduate
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {portfolio.navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "focus-ring rounded-full px-4 py-2 text-sm font-medium transition",
                activeSection === item.id
                  ? "bg-white/8 text-text"
                  : "text-muted hover:bg-white/5 hover:text-text",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${portfolio.basics.email}`}
          className="focus-ring hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-text transition hover:border-accent/20 hover:text-accent lg:inline-flex"
        >
          Contact
        </a>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="border-t border-white/8 bg-base/95 px-4 py-4 lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="container mx-auto flex flex-col gap-3">
              {portfolio.navigation.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileNavClick(item.id);
                  }}
                  className={cn(
                    "focus-ring rounded-[1.2rem] border px-4 py-3 text-sm font-medium transition",
                    activeSection === item.id
                      ? "border-accent/20 bg-accent/10 text-text"
                      : "border-white/10 bg-white/5 text-muted hover:border-accent/20 hover:text-text",
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
