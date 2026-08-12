"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import {
  CloseIcon,
  GithubIcon,
  LinkedinIcon,
  Logo,
  MenuIcon,
} from "@/components/icons";

const sectionIds = siteConfig.navItems.map((item) => item.href.slice(1));

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={clsx(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        isScrolled ? "py-2" : "py-4",
      )}
    >
      <header
        className={clsx(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-4 py-2 transition-all duration-300 sm:px-6",
          isScrolled
            ? "glass-panel shadow-lg shadow-black/5"
            : "border border-transparent",
        )}
      >
        <a className="flex items-center gap-2 text-accent" href="#home">
          <Logo size={30} />
          <span className="font-display text-sm font-semibold tracking-tight text-foreground sm:text-base">
            {siteConfig.shortName}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {siteConfig.navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);

            return (
              <li key={item.href}>
                <a
                  className={clsx(
                    "relative rounded-full px-3 py-1.5 text-sm transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted hover:text-foreground",
                  )}
                  href={item.href}
                >
                  {isActive && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-accent/12" />
                  )}
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1">
          <a
            aria-label="GitHub"
            className="hidden rounded-full p-2 text-muted transition-colors hover:text-foreground sm:block"
            href={siteConfig.links.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon size={19} />
          </a>
          <a
            aria-label="LinkedIn"
            className="hidden rounded-full p-2 text-muted transition-colors hover:text-foreground sm:block"
            href={siteConfig.links.linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedinIcon size={19} />
          </a>
          <ThemeSwitch />
          <Button
            className="ml-1 hidden rounded-full sm:inline-flex"
            size="sm"
            onPress={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Let&apos;s talk
          </Button>
          <button
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            className="rounded-full p-2 text-foreground md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="glass-panel mx-4 mt-2 rounded-3xl p-4 md:hidden">
          <ul className="flex flex-col">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <a
                  className="block rounded-2xl px-3 py-2.5 text-base text-foreground transition-colors hover:bg-accent/10"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
