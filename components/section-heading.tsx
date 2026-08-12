import clsx from "clsx";

import { Reveal } from "@/components/reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "start" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={clsx(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
      )}
    >
      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-foreground/10 bg-surface/60 px-3 py-1 font-mono text-xs tracking-widest text-muted uppercase">
        <span className="size-1.5 rounded-full bg-accent" />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "max-w-2xl text-base text-muted sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
