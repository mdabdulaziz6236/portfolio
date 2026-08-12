# MD. Abdul Aziz — Portfolio

Personal portfolio site built with Next.js 16 (App Router), HeroUI v3, Tailwind CSS v4 and TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — lint and autofix

## Editing the content

All copy lives in two files, no component edits needed for routine updates:

- `config/site.ts` — name, role, location, social links, navigation
- `config/content.ts` — stats, projects, skills, services, experience, testimonials, FAQ

## Structure

```
app/          layout, page composition, theme provider
components/   navbar, footer, motion helpers and section components
config/       site metadata, content, fonts
styles/       global CSS, animations, utility classes
```
