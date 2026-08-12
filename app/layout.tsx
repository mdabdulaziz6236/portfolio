import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontDisplay, fontMono, fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "web developer",
    "full-stack developer",
    "Next.js developer",
    "React developer",
    "TypeScript",
    "MD. Abdul Aziz",
  ],
  authors: [{ name: "MD. Abdul Aziz", url: siteConfig.links.github }],
  creator: "MD. Abdul Aziz",
  openGraph: {
    type: "website",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          fontSans.variable,
          fontMono.variable,
          fontDisplay.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <ScrollProgress />
          <a
            className="sr-only rounded-full bg-accent px-4 py-2 text-accent-foreground focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50"
            href="#work"
          >
            Skip to content
          </a>
          <Navbar />
          <main className="relative flex flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
