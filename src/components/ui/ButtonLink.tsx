import type { PropsWithChildren } from "react";
import { cn, isExternalLink } from "@/lib/utils";

type Props = PropsWithChildren<{
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}>;

const variants = {
  primary: "border border-accent/30 bg-accent text-base shadow-glow hover:bg-accent/90",
  secondary: "border border-white/10 bg-white/5 text-text hover:border-warm/40 hover:bg-white/10 hover:text-warm",
  ghost: "border border-transparent bg-transparent text-text hover:border-white/10 hover:bg-white/5 hover:text-accent",
};

export function ButtonLink({ href, variant = "primary", className, children }: Props) {
  return (
    <a
      href={href}
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200",
        variants[variant],
        className,
      )}
      target={isExternalLink(href) && href.startsWith("http") ? "_blank" : undefined}
      rel={isExternalLink(href) ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
