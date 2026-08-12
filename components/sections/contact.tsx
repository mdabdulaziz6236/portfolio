"use client";

import type { FormEvent } from "react";

import { useState } from "react";
import {
  Button,
  Description,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";
import {
  CheckIcon,
  CopyIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/icons";

export function Contact() {
  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `Project enquiry from ${data.get("name") ?? "your site"}`,
    );
    const body = encodeURIComponent(
      `${data.get("message") ?? ""}\n\n— ${data.get("name") ?? ""} (${data.get("email") ?? ""})`,
    );

    window.location.href = `mailto:${siteConfig.links.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(siteConfig.links.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section className="scroll-mt-24 px-6 py-24" id="contact">
      <div className="noise-overlay relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-foreground/10 bg-surface/50 p-8 sm:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="animate-drift absolute -top-24 -right-16 size-[26rem] rounded-full bg-accent/20 blur-[110px]" />
          <div className="animate-drift absolute -bottom-32 -left-10 size-[22rem] rounded-full bg-fuchsia-500/15 blur-[110px] [animation-delay:-10s]" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <SectionHeading
              description="Tell me what you're building and where it's stuck. I reply to every serious enquiry within a day."
              eyebrow="Contact"
              title="Let's build something good"
            />

            <div className="flex flex-col gap-3">
              <button
                className="group flex w-fit items-center gap-3 rounded-2xl border border-foreground/10 px-4 py-3 text-left transition-colors hover:border-accent/40"
                type="button"
                onClick={copyEmail}
              >
                <MailIcon className="text-accent" size={18} />
                <span className="font-mono text-sm">
                  {siteConfig.links.email}
                </span>
                {isCopied ? (
                  <CheckIcon className="text-emerald-500" size={16} />
                ) : (
                  <CopyIcon
                    className="text-muted transition-colors group-hover:text-foreground"
                    size={16}
                  />
                )}
              </button>

              <div className="flex gap-2">
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
                    className="inline-flex items-center gap-2 rounded-2xl border border-foreground/10 px-4 py-2.5 text-sm text-muted transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-foreground"
                    href={href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon size={16} />
                    {label}
                  </a>
                ))}
              </div>

              <p className="text-sm text-muted">
                Based in {siteConfig.location} · {siteConfig.availability}
              </p>
            </div>
          </div>

          <Reveal>
            <Form
              className="glass-panel flex flex-col gap-5 rounded-3xl p-6 sm:p-8"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField isRequired name="name">
                  <Label>Name</Label>
                  <Input className="w-full" placeholder="Jane Cooper" />
                </TextField>
                <TextField isRequired name="email" type="email">
                  <Label>Email</Label>
                  <Input className="w-full" placeholder="jane@company.com" />
                </TextField>
              </div>
              <TextField isRequired name="message">
                <Label>Project details</Label>
                <TextArea
                  className="w-full"
                  placeholder="What are you building, and what does success look like?"
                  rows={5}
                />
                <Description>
                  Rough scope and timeline help me answer properly.
                </Description>
              </TextField>
              <Button className="w-full rounded-full" size="lg" type="submit">
                Send message
                <MailIcon size={18} />
              </Button>
            </Form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
