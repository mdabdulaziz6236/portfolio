"use client";

import { useState } from "react";
import clsx from "clsx";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/config/content";

export function Skills() {
  const [activeId, setActiveId] = useState(skillGroups[0].id);
  const active = skillGroups.find((group) => group.id === activeId)!;

  return (
    <section className="scroll-mt-24 py-24" id="skills">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          description="Tools are means to an end — these are the ones I reach for most, and roughly how deep I go with each."
          eyebrow="Capabilities"
          title="What I work with"
        />

        <div className="mt-10 flex flex-wrap gap-2" role="tablist">
          {skillGroups.map((group) => (
            <button
              key={group.id}
              aria-selected={group.id === activeId}
              className={clsx(
                "rounded-full border px-4 py-2 text-sm transition-all",
                group.id === activeId
                  ? "border-accent/40 bg-accent/12 text-foreground"
                  : "border-foreground/10 text-muted hover:border-foreground/25 hover:text-foreground",
              )}
              role="tab"
              type="button"
              onClick={() => setActiveId(group.id)}
            >
              {group.label}
            </button>
          ))}
        </div>

        <p className="mt-6 max-w-2xl text-sm text-muted sm:text-base">
          {active.blurb}
        </p>

        <div className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {active.skills.map((skill, index) => (
            <Reveal key={`${active.id}-${skill.name}`} delay={index * 60}>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{skill.name}</span>
                <span className="font-mono text-xs text-muted">
                  {skill.level}%
                </span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-foreground/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-fuchsia-500 transition-[width] duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
