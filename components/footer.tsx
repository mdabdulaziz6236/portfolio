import { siteConfig } from "@/config/site";
import {
  GithubIcon,
  LinkedinIcon,
  Logo,
  TwitterIcon,
} from "@/components/icons";

const socials = [
  { href: siteConfig.links.github, label: "GitHub", Icon: GithubIcon },
  { href: siteConfig.links.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: siteConfig.links.twitter, label: "X", Icon: TwitterIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-accent">
          <Logo size={26} />
          <span className="font-display text-sm font-semibold text-foreground">
            {siteConfig.shortName}
          </span>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-4 text-sm">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              className="text-muted transition-colors hover:text-foreground"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              aria-label={label}
              className="rounded-full p-2 text-muted transition-colors hover:text-foreground"
              href={href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      <p className="pb-8 text-center text-xs text-muted">
        © {new Date().getFullYear()} MD. Abdul Aziz · Built with Next.js and
        HeroUI
      </p>
    </footer>
  );
}
