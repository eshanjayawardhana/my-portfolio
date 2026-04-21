import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
};

export function SectionIntro({ eyebrow, title, description, centered = false }: Props) {
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center")} data-reveal>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="heading-display mt-5 text-4xl leading-tight text-text sm:text-5xl">{title}</h2>
      <p
        className="mt-4 max-w-2xl text-pretty text-sm leading-7 !text-slate-300 sm:text-base"
        style={{ color: "#cbd5e1" }}
      >
        {/* {description} */}
      </p>
    </div>
  );
}
