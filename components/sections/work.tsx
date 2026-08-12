import { Card, Chip } from "@heroui/react";
import clsx from "clsx";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Spotlight } from "@/components/spotlight";
import { projects } from "@/config/content";
import { ArrowUpRightIcon, GithubIcon } from "@/components/icons";

export function Work() {
  return (
    <section className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24" id="work">
      <SectionHeading
        description="A selection of products I designed, built or rescued. Every one of them is real code with real users behind it."
        eyebrow="Selected work"
        title="Things I have shipped"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            className={clsx(project.featured && "md:col-span-2")}
            delay={index * 80}
          >
            <Spotlight className="h-full rounded-3xl">
              <Card
                className={clsx(
                  "group h-full overflow-hidden rounded-3xl border border-foreground/10 transition-transform duration-300 hover:-translate-y-1",
                  project.featured && "md:flex-row",
                )}
              >
                <div
                  aria-hidden
                  className={clsx(
                    "relative overflow-hidden rounded-2xl bg-gradient-to-br",
                    project.accent,
                    project.featured
                      ? "md:w-2/5 md:min-h-[280px] min-h-[160px]"
                      : "min-h-[140px]",
                  )}
                >
                  <div className="absolute inset-0 grid-backdrop opacity-60" />
                  <span className="absolute bottom-4 left-5 font-display text-4xl font-bold text-white/85 mix-blend-overlay sm:text-5xl">
                    {project.title}
                  </span>
                  <span className="absolute top-4 right-5 font-mono text-xs text-white/70">
                    {project.year}
                  </span>
                </div>

                <div className="flex flex-1 flex-col">
                  <Card.Header>
                    <Card.Title className="font-display text-xl">
                      {project.title}
                      <span className="ml-2 text-sm font-normal text-muted">
                        {project.role}
                      </span>
                    </Card.Title>
                    <Card.Description className="text-sm font-medium text-accent">
                      {project.tagline}
                    </Card.Description>
                  </Card.Header>
                  <Card.Content className="flex flex-1 flex-col gap-4">
                    <p className="text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <ul className="mt-auto flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <li key={tech}>
                          <Chip size="sm" variant="soft">
                            {tech}
                          </Chip>
                        </li>
                      ))}
                    </ul>
                  </Card.Content>
                  <Card.Footer className="flex flex-wrap gap-4">
                    {project.repo && (
                      <a
                        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
                        href={project.repo}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <GithubIcon size={16} />
                        Source
                      </a>
                    )}
                    {project.demo && (
                      <a
                        className="inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:opacity-80"
                        href={project.demo}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Live demo
                        <ArrowUpRightIcon size={16} />
                      </a>
                    )}
                  </Card.Footer>
                </div>
              </Card>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
