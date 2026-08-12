"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";

import { Aurora } from "@/components/aurora";
import { roles, stats } from "@/config/content";
import { siteConfig } from "@/config/site";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/icons";

function useTypedRole() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length];
    const isComplete = text === current;
    const isCleared = text === "";

    let delay = isDeleting ? 40 : 75;

    if (isComplete && !isDeleting) delay = 1800;
    if (isCleared && isDeleting) delay = 250;

    const timer = setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true);
      } else if (isCleared && isDeleting) {
        setIsDeleting(false);
        setIndex((value) => (value + 1) % roles.length);
      } else {
        setText(
          isDeleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1),
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return text;
}

export function Hero() {
  const typedRole = useTypedRole();

  return (
    <section
      className="noise-overlay relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
      id="home"
    >
      <Aurora />
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="flex flex-col gap-7">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {siteConfig.availability}
          </span>

          <div className="space-y-3">
            <p className="font-mono text-sm text-muted">
              Hi, my name is{" "}
              <span className="text-foreground">MD. Abdul Aziz</span>
            </p>
            <h1 className="font-display text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              I build web products
              <br />
              that feel <span className="text-gradient">effortless</span>.
            </h1>
            <p
              aria-label={`Role: ${siteConfig.role}`}
              className="font-mono text-base text-accent sm:text-lg"
            >
              <span aria-hidden>{typedRole}</span>
              <span
                aria-hidden
                className="animate-caret ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[3px] bg-accent"
              />
            </p>
          </div>

          <p className="max-w-xl text-base text-muted sm:text-lg">
            {siteConfig.description} I care about the details most people only
            notice when they are missing — speed, motion, keyboard support and
            code that is still pleasant to read a year later.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              className="rounded-full"
              size="lg"
              onPress={() =>
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View my work
              <ArrowDownIcon size={18} />
            </Button>
            <Button
              className="rounded-full"
              size="lg"
              variant="outline"
              onPress={() =>
                window.open(`mailto:${siteConfig.links.email}`, "_self")
              }
            >
              <MailIcon size={18} />
              Hire me
            </Button>
            <div className="ml-1 flex items-center gap-1">
              {[
                {
                  href: siteConfig.links.github,
                  label: "GitHub",
                  Icon: GithubIcon,
                },
                {
                  href: siteConfig.links.linkedin,
                  label: "LinkedIn",
                  Icon: LinkedinIcon,
                },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  aria-label={label}
                  className="rounded-full border border-foreground/10 p-2.5 text-muted transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <dl className="grid max-w-lg grid-cols-2 gap-x-6 gap-y-4 border-t border-foreground/10 pt-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="text-xs text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="animate-float glass-panel relative overflow-hidden rounded-3xl p-1 shadow-2xl shadow-black/10">
            <div className="flex items-center gap-2 px-4 py-3">
              <span className="size-3 rounded-full bg-red-400/80" />
              <span className="size-3 rounded-full bg-amber-400/80" />
              <span className="size-3 rounded-full bg-emerald-400/80" />
              <span className="ml-2 font-mono text-xs text-muted">
                developer.ts
              </span>
            </div>
            <pre className="overflow-x-auto rounded-2xl bg-surface/80 p-5 font-mono text-[13px] leading-relaxed">
              <code>
                <span className="text-fuchsia-500">const</span>{" "}
                <span className="text-accent">developer</span> = {"{"}
                {"\n"} name:{" "}
                <span className="text-emerald-500">
                  &apos;MD. Abdul Aziz&apos;
                </span>
                ,{"\n"} experience: <span className="text-amber-500">3</span>
                <span className="text-muted">{" /* years */"}</span>,{"\n"}{" "}
                stack: [
                <span className="text-emerald-500">&apos;next&apos;</span>,{" "}
                <span className="text-emerald-500">&apos;ts&apos;</span>,{" "}
                <span className="text-emerald-500">&apos;node&apos;</span>],
                {"\n"} focus:{" "}
                <span className="text-emerald-500">&apos;dx + ux&apos;</span>,
                {"\n"} ship: <span className="text-fuchsia-500">async</span> ()
                =&gt; <span className="text-emerald-500">&apos;🚀&apos;</span>,
                {"\n"}
                {"}"};
              </code>
            </pre>
          </div>
          <div className="glass-panel absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl sm:-left-10">
            <span className="font-display text-2xl font-bold text-accent">
              A+
            </span>
            <div className="text-xs leading-tight">
              <p className="font-medium text-foreground">Core Web Vitals</p>
              <p className="text-muted">on every project I ship</p>
            </div>
          </div>
        </div>
      </div>

      <a
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-foreground md:flex"
        href="#about"
      >
        <span className="font-mono text-[11px] tracking-widest uppercase">
          Scroll
        </span>
        <ArrowUpRightIcon className="rotate-135" size={16} />
      </a>
    </section>
  );
}
