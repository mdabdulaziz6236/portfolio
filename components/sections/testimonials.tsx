import { Avatar, Card } from "@heroui/react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/config/content";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        align="center"
        description="What the people who hired me said afterwards."
        eyebrow="Kind words"
        title="Clients & collaborators"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal key={item.name} delay={index * 90}>
            <Card
              className="h-full rounded-3xl border border-foreground/10"
              variant="transparent"
            >
              <Card.Content className="flex h-full flex-col gap-6">
                <span
                  aria-hidden
                  className="font-display text-5xl leading-none text-accent/40"
                >
                  &ldquo;
                </span>
                <p className="flex-1 text-sm leading-relaxed text-muted sm:text-base">
                  {item.quote}
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <Avatar.Fallback>
                      {item.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </Avatar.Fallback>
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-medium text-foreground">{item.name}</p>
                    <p className="text-xs text-muted">{item.title}</p>
                  </div>
                </div>
              </Card.Content>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
