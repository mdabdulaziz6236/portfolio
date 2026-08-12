export const roles = [
  "Full-Stack Web Developer",
  "Next.js & React Specialist",
  "TypeScript Enthusiast",
  "UI Engineer",
];

export const stats = [
  { value: "3+", label: "Years of experience" },
  { value: "40+", label: "Projects shipped" },
  { value: "25+", label: "Happy clients" },
  { value: "99", label: "Lighthouse average" },
];

export const marqueeItems = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Redux Toolkit",
  "Firebase",
  "Docker",
  "GraphQL",
  "Framer Motion",
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  stack: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "GearUp",
    tagline: "Sports & outdoor gear rental platform",
    description:
      "A multi-role rental marketplace where customers book gear by date range and pay securely, providers manage inventory and fulfil orders, and admins oversee the whole platform from a single dashboard.",
    year: "2026",
    role: "Full-stack",
    stack: ["Next.js", "TypeScript", "Redux Toolkit", "Stripe", "MongoDB"],
    repo: "https://github.com/mdabdulaziz6236/gearup-frontend",
    featured: true,
    accent: "from-sky-400/70 to-indigo-500/70",
  },
  {
    title: "StyleDecor",
    tagline: "Appointment management for decorators",
    description:
      "Booking system that connects customers planning home and ceremony decorations with professional decorators — availability calendars, quotes, and status tracking end to end.",
    year: "2025",
    role: "Full-stack",
    stack: ["React", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    repo: "https://github.com/mdabdulaziz6236/style-decor",
    featured: true,
    accent: "from-fuchsia-400/70 to-rose-500/70",
  },
  {
    title: "FinEase",
    tagline: "Personal finance API & dashboard",
    description:
      "Secure financial management backend handling transactions, balance overview and reporting, with Firebase authentication and a fully typed REST surface.",
    year: "2025",
    role: "Backend",
    stack: ["Node.js", "Express", "Firebase Auth", "MongoDB"],
    repo: "https://github.com/mdabdulaziz6236/FinEase-Server",
    accent: "from-emerald-400/70 to-teal-500/70",
  },
  {
    title: "DevPulse",
    tagline: "Internal issue & feature tracker",
    description:
      "Tracker API built on raw PostgreSQL with a clean layered architecture — issue lifecycles, feature voting and audit trails without an ORM in sight.",
    year: "2026",
    role: "Backend",
    stack: ["TypeScript", "Node.js", "PostgreSQL", "Zod"],
    repo: "https://github.com/mdabdulaziz6236/level-2-A2",
    accent: "from-amber-400/70 to-orange-500/70",
  },
  {
    title: "Hero Kidz",
    tagline: "Single-vendor kids e-commerce",
    description:
      "Storefront for children's products with cart, checkout, order history and an admin panel for catalogue and inventory management.",
    year: "2026",
    role: "Full-stack",
    stack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    repo: "https://github.com/mdabdulaziz6236/Hero_Kidz",
    accent: "from-violet-400/70 to-purple-500/70",
  },
];

export type SkillGroup = {
  id: string;
  label: string;
  blurb: string;
  skills: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    blurb:
      "Interfaces that stay fast and accessible as they grow — design systems, animation and rendering strategy included.",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 94 },
      { name: "Redux Toolkit / TanStack Query", level: 85 },
      { name: "Accessibility (WCAG)", level: 80 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    blurb:
      "APIs designed around real data models, with auth, validation and observability baked in from day one.",
    skills: [
      { name: "Node.js & Express", level: 90 },
      { name: "REST & GraphQL API design", level: 85 },
      { name: "MongoDB / Mongoose", level: 88 },
      { name: "PostgreSQL / Prisma", level: 82 },
      { name: "Auth (JWT, OAuth, Firebase)", level: 86 },
      { name: "Testing (Jest, Vitest)", level: 78 },
    ],
  },
  {
    id: "tooling",
    label: "Tooling & Craft",
    blurb:
      "The unglamorous parts that keep a codebase shippable months after launch.",
    skills: [
      { name: "Git & code review", level: 92 },
      { name: "CI/CD (GitHub Actions)", level: 82 },
      { name: "Docker", level: 75 },
      { name: "Performance & Core Web Vitals", level: 88 },
      { name: "Figma to production", level: 90 },
      { name: "SEO fundamentals", level: 84 },
    ],
  },
];

export const services = [
  {
    title: "Web app development",
    description:
      "Production-grade React and Next.js applications — dashboards, marketplaces and internal tools built to scale.",
  },
  {
    title: "API & backend engineering",
    description:
      "Typed, documented Node.js APIs with sane data models, authentication and role-based access control.",
  },
  {
    title: "Performance & SEO",
    description:
      "Auditing and fixing slow pages: rendering strategy, bundle diet, images and Core Web Vitals.",
  },
  {
    title: "Design to code",
    description:
      "Pixel-faithful, responsive and accessible implementations of your Figma designs, as a reusable component system.",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2024 — Present",
    summary:
      "Partnering directly with founders and small teams to take products from idea to launch.",
    highlights: [
      "Shipped 15+ client projects across e-commerce, booking and SaaS domains.",
      "Cut average page load times by ~45% by moving to the Next.js App Router with streaming and edge caching.",
      "Set up CI pipelines and preview deployments so clients could review work continuously.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Product agency",
    period: "2023 — 2024",
    summary:
      "Built and maintained customer-facing interfaces on a shared React design system.",
    highlights: [
      "Owned a component library used across four client products.",
      "Raised accessibility scores to 95+ by reworking focus management and semantics.",
      "Mentored two junior developers through code review and pairing.",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Software studio",
    period: "2022 — 2023",
    summary:
      "Started on marketing sites and grew into full-stack feature delivery.",
    highlights: [
      "Delivered responsive landing pages with a 100 Lighthouse SEO score.",
      "Integrated REST APIs and payment gateways into existing storefronts.",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Aziz took a vague brief and came back with a working prototype in days. He asks the right questions before writing code.",
    name: "Sarah Rahman",
    title: "Founder, Bloomly",
  },
  {
    quote:
      "Our checkout conversion went up noticeably after his performance work. Clean handover, clear documentation.",
    name: "Tanvir Hasan",
    title: "CTO, ShopNest",
  },
  {
    quote:
      "One of the few developers who genuinely cares about accessibility and responsive detail. A joy to review PRs from.",
    name: "Maya Chen",
    title: "Design Lead, Northlight",
  },
];

export const faqs = [
  {
    question: "What does a typical project look like?",
    answer:
      "A short discovery call, a written scope with milestones, then weekly demos. You get a preview URL from week one and code in your own repository throughout.",
  },
  {
    question: "Do you work with existing codebases?",
    answer:
      "Often. I start with an audit — architecture, dependencies, performance and test coverage — and give you a prioritised plan before touching anything.",
  },
  {
    question: "Which stack do you recommend?",
    answer:
      "Next.js with TypeScript and Tailwind on the frontend, Node.js with PostgreSQL or MongoDB on the backend. That said, the right stack is the one your team can maintain.",
  },
  {
    question: "How do we get started?",
    answer:
      "Send a message with a rough idea of scope and timeline. I'll reply within a day with questions, an estimate and my earliest availability.",
  },
];
