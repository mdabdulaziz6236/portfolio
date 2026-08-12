import { marqueeItems } from "@/config/content";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section
      aria-label="Technologies I work with"
      className="border-y border-foreground/10 bg-surface/40 py-5"
    >
      <div className="marquee-mask overflow-hidden">
        <ul className="animate-marquee flex w-max items-center gap-10 pr-10">
          {items.map((item, index) => (
            <li
              key={`${item}-${index}`}
              aria-hidden={index >= marqueeItems.length}
              className="flex items-center gap-10 font-display text-lg font-medium tracking-tight text-muted transition-colors hover:text-foreground sm:text-xl"
            >
              {item}
              <span className="size-1.5 rounded-full bg-accent/50" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
