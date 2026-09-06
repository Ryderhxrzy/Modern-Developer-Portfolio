# Jhay-R Cervantes — Portfolio

Personal portfolio built with Next.js 16, React 19, TypeScript and Tailwind CSS v4. Fully static, no backend.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Update content

All copy and links live in `src/data`. The components only render what is there.

| File | What it controls |
| --- | --- |
| `src/data/profile.ts` | Name, role, intro text, availability, about text, current roles, email and social links |
| `src/data/projects.ts` | Selected work: titles, descriptions, tags, layout (`wide`, `tall`, `split`) and images |
| `src/data/capabilities.ts` | "What I Build" areas, the Development Spectrum stages, and the Production section |
| `src/data/skills.ts` | Technology index groups |
| `src/data/site.ts` | Section list, navigation labels, site URL and SEO metadata |

### Replacing project images

Put screenshots in `public/projects/` and update `src`, `width` and `height` for that project in `src/data/projects.ts`. The current files there are generated wireframe placeholders. For images hosted elsewhere, add the host to `images.remotePatterns` in `next.config.ts`.

### Deploying

Set `siteConfig.url` in `src/data/site.ts` to the live domain before deploying. It is used for canonical and Open Graph URLs. The Open Graph image is generated at build time from `src/app/opengraph-image.tsx`.

## Structure

```
src/
  app/            layout, page, global styles, Open Graph image
  components/
    layout/       navigation rail and menu, scroll progress, theme toggle, curtain, cursor ring, back to top, footer
    sections/     one file per numbered section (01 Intro … 08 Contact)
    ui/           reusable pieces: Container, Reveal animations, SectionHeader, ProjectFigure, Ticker, LocalTime
  data/           all portfolio content
  lib/            small helpers
public/projects/  project images
```

## Design notes

- Light theme: warm off-white paper with near-black ink. Dark theme: near-black with soft white. One accent colour, used sparingly.
- Fonts: Instrument Sans (text and display), Instrument Serif italic (accents), JetBrains Mono (labels and numbers).
- All motion respects `prefers-reduced-motion`. The opening curtain plays once per browser session.
