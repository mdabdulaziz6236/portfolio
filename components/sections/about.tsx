import { Card } from "@heroui/react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Spotlight } from "@/components/spotlight";
import { services } from "@/config/content";
import { siteConfig } from "@/config/site";
import { SparkIcon } from "@/components/icons";

export function About() {
  return (
    <section className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24" id="about">
      <SectionHeading
        description="Three years in, and the part I still enjoy most is turning a rough idea into something people can click."
        eyebrow="About me"
        title="A developer who sweats the details"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="flex flex-col gap-5 text-base leading-relaxed text-muted sm:text-lg">
          <p>
            I&apos;m <span className="text-foreground">MD. Abdul Aziz</span>, a
            full-stack developer based in {siteConfig.location}. I started with
            static HTML pages, got hooked on making them interactive, and spent
            the last three years shipping React and Next.js applications for
            startups, agencies and my own clients.
          </p>
          <p>
            My work sits between design and engineering. I&apos;ll happily argue
            about spacing scales and easing curves, then go tune database
            indexes in the same afternoon. What ties it together is a bias
            toward simple solutions: fewer dependencies, clearer data flow, and
            interfaces that explain themselves.
          </p>
          <p>
            When I&apos;m not building, I&apos;m usually reviewing code, writing
            about what I learned, or rebuilding something I already built — just
            better.
          </p>

          <ul className="mt-2 grid gap-3 sm:grid-cols-2">
            {[
              "Remote-friendly, overlapping hours with EU & US",
              "Comfortable owning a feature end to end",
              "Writes tests where they earn their keep",
              "Communicates in plain language, not jargon",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm">
                <SparkIcon className="mt-0.5 shrink-0 text-accent" size={16} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 90}>
              <Spotlight className="h-full rounded-3xl">
                <Card
                  className="h-full rounded-3xl border border-foreground/10 transition-transform duration-300 hover:-translate-y-1"
                  variant="secondary"
                >
                  <Card.Header>
                    <Card.Title className="font-display text-base">
                      {service.title}
                    </Card.Title>
                    <Card.Description className="text-sm">
                      {service.description}
                    </Card.Description>
                  </Card.Header>
                </Card>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
