import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/config/content";

export function Experience() {
  return (
    <section
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
      id="experience"
    >
      <SectionHeading
        description="Agency work, product teams and freelance clients — the throughline is shipping and then maintaining what I shipped."
        eyebrow="Experience"
        title="Three years, a lot of commits"
      />

      <ol className="relative mt-12 border-l border-foreground/12 pl-6 sm:pl-10">
        {experiences.map((item, index) => (
          <li key={`${item.company}-${item.period}`}>
            <Reveal className="pb-12 last:pb-0" delay={index * 100}>
              <span
                aria-hidden
                className="absolute -left-[7px] mt-2 size-3.5 rounded-full border-2 border-background bg-accent"
              />
              <p className="font-mono text-xs tracking-widest text-muted uppercase">
                {item.period}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold sm:text-2xl">
                {item.role}
                <span className="text-accent"> · {item.company}</span>
              </h3>
              <p className="mt-2 text-sm text-muted sm:text-base">
                {item.summary}
              </p>
              <ul className="mt-4 space-y-2">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2.5 text-sm text-muted"
                  >
                    <span
                      aria-hidden
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/60"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
