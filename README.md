<div align="center">

# ✦ Modern Developer Portfolio

### An editorial, high-performance portfolio template for developers and designers.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

<br/>

[![Next.js 16](https://img.shields.io/badge/Next.js-16.3.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.8-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

[![GitHub Stars](https://img.shields.io/github/stars/Ryderhxrzy/Modern-Developer-Portfolio?style=for-the-badge&logo=github&color=f59e0b)](https://github.com/Ryderhxrzy/Modern-Developer-Portfolio/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/Ryderhxrzy/Modern-Developer-Portfolio?style=for-the-badge&logo=github&color=3b82f6)](https://github.com/Ryderhxrzy/Modern-Developer-Portfolio/network/members)
[![GitHub Issues](https://img.shields.io/github/issues/Ryderhxrzy/Modern-Developer-Portfolio?style=for-the-badge&color=ef4444)](https://github.com/Ryderhxrzy/Modern-Developer-Portfolio/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](CONTRIBUTING.md)

<br/>

### 🚀 Deploy in One Click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FRyderhxrzy%2FModern-Developer-Portfolio)
&nbsp;&nbsp;&nbsp;&nbsp;
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Ryderhxrzy/Modern-Developer-Portfolio)

</div>

---

## 📖 Overview

**Modern Developer Portfolio** is an open-source, art-directed portfolio website designed for software engineers, full-stack builders, and digital product designers.

Unlike generic developer portfolios, this template is inspired by **editorial typography and print design**. It features warm paper textures, oversized type, meticulous micro-interactions, dark/light theme switching with zero layout shift or hydration flicker, and a **100% content-driven architecture** where you can personalize the entire site without writing or modifying complex UI code.

---

## ✨ Features

- ⚡ **Cutting-Edge Tech Stack:** Built with Next.js 16 (App Router), React 19, TypeScript 5, and the new Tailwind CSS v4 engine.
- 🎨 **Editorial Aesthetic:** Harmonious typography pairing *Instrument Sans*, *Instrument Serif* (italic accents), and *JetBrains Mono* (indices and telemetry).
- 🌓 **Instant Theme Switching (No Hydration Flash):** Seamless switch between warm off-white paper and deep charcoal ink. Themes persist via `localStorage` and respect OS preferences using an inline `<head>` micro-script.
- 🎭 **Refined Micro-Interactions & Motion:**
  - Entrance curtain that slides upward on first arrival (persisted per session via `sessionStorage`).
  - Interactive smooth cursor ring that expands over clickable targets.
  - Line-by-line masked text reveals and staggered scroll animations.
  - Interactive **Development Spectrum** stage scrubber.
  - Infinitely scrolling tech domain ticker strip.
  - Full adherence to accessibility and `prefers-reduced-motion`.
- 🧩 **100% Content-Driven Architecture:** All copy, project showcases, skills, credentials, and links live in modular TypeScript configuration files under `src/data/`. Customize your site in minutes.
- 📱 **Adaptive Navigation:** Fixed desktop navigation rail with active section tracking, coupled with a smooth drawer menu on mobile devices.
- 🖼️ **Dynamic Open Graph & SEO:**
  - Automated social share image generated at build time using Next.js `ImageResponse` (`@vercel/og`).
  - Search-engine-ready JSON-LD `Person` schema markup.
  - Canonical link headers, Twitter card tags, and metadata automation.
- 🆓 **Zero Backend & Database Free:** Completely static and client-side safe. Deploy for free anywhere.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Quick Start](#-quick-start)
- [How to Fork and Customize](#-how-to-fork-and-customize)
  - [1. Fork & Clone](#1-fork--clone)
  - [2. Personal Info & Bio (`profile.ts`)](#2-personal-info--bio-srcdataprofilets)
  - [3. Site Settings & SEO (`site.ts`)](#3-site-settings--seo-srcdatasitets)
  - [4. Projects & Showcase Layouts (`projects.ts`)](#4-projects--showcase-layouts-srcdataprojectsts)
  - [5. Adding Screenshots & Project Images](#5-adding-screenshots--project-images)
  - [6. Capabilities & Development Spectrum (`capabilities.ts`)](#6-capabilities--development-spectrum-srcdatacapabilitiests)
  - [7. Skills & Tech Stack (`skills.ts`)](#7-skills--tech-stack-srcdataskillsts)
  - [8. Customizing Colors & Theme Tokens (`globals.css`)](#8-customizing-colors--theme-tokens-srcappglobalscss)
  - [9. Open Graph & Social Cards (`opengraph-image.tsx`)](#9-open-graph--social-cards-srcappopengraph-imagetsx)
- [Project Structure](#-project-structure)
- [NPM Scripts](#-npm-scripts)
- [Deployment Guide](#-deployment-guide)
- [Contributing](#-contributing)
- [License](#-license)

---

## ⚡ Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.18.0 or newer recommended)
- `npm`, `pnpm`, or `yarn`

### 1. Clone the repository

```bash
git clone https://github.com/Ryderhxrzy/Modern-Developer-Portfolio.git
cd Modern-Developer-Portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start local development server

```bash
npm run dev
```

Visit [`http://localhost:3000`](http://localhost:3000) in your browser to view your portfolio live.

---

## 🛠️ How to Fork and Customize

This repository is designed so you can make it your own in under 15 minutes without digging into React components. All editable data is cleanly separated in `src/data/`.

```
src/data/
├── profile.ts        # Name, bio, email, socials, availability, and career history
├── site.ts           # Domain URL, SEO title, meta keywords, and section navigation
├── projects.ts       # Portfolio case studies, scope deliverables, links, layouts
├── capabilities.ts   # "What I Build", Development Spectrum stages, Production section
└── skills.ts         # Technology index categorized into primary and secondary tools
```

### 1. Fork & Clone

1. Click the **Fork** button at the top of this GitHub repository to create your copy.
2. Clone your forked repository:
   ```bash
   git clone https://github.com/<YOUR_USERNAME>/Modern-Developer-Portfolio.git
   cd Modern-Developer-Portfolio
   npm install
   ```

---

### 2. Personal Info & Bio (`src/data/profile.ts`)

Open [`src/data/profile.ts`](file:///c:/dev/Modern-Developer-Portfolio/src/data/profile.ts) to update your personal details:

```typescript
export const profile = {
  firstName: "Alex",
  lastName: "Morgan",
  fullName: "Alex Morgan",
  role: "Full-Stack Software Engineer",
  statement: "I build software from interface to infrastructure.",
  summary: "Brief intro paragraph displayed in the hero section.",
  domains: ["Web", "Mobile", "Cloud", "Distributed Systems"],
  location: "San Francisco, CA",
  timezone: "PST (GMT-8)",
  availability: {
    open: true, // Toggle to false to display unavailable/busy state
    label: "Open to new opportunities",
  },
  about: {
    heading: "Your personal philosophy or summary headline.",
    paragraphs: [
      "First paragraph about your journey and background...",
      "Second paragraph detailing what drives your work...",
    ],
    experience: [
      {
        role: "Senior Software Engineer",
        org: "Acme Corp",
        period: "2024 – Present",
        note: "Leading frontend infrastructure and design systems.",
      },
      // Add or remove roles as needed
    ],
    facts: [
      { label: "Based in", value: "San Francisco, CA" },
      { label: "Focus", value: "Web, Cloud, Scalable Systems" },
      { label: "Status", value: "Available for select contracts" },
    ],
  },
  contact: {
    email: "alex@example.com",
    heading: "Have a project in mind?",
    subheading: "Let's turn your vision into shipped software.",
    socials: [
      { label: "GitHub", href: "https://github.com/yourusername", handle: "@yourusername" },
      { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", handle: "/in/yourusername" },
      { label: "X / Twitter", href: "https://x.com/yourusername", handle: "@yourusername" },
    ],
  },
} as const;
```

---

### 3. Site Settings & SEO (`src/data/site.ts`)

Open [`src/data/site.ts`](file:///c:/dev/Modern-Developer-Portfolio/src/data/site.ts) to configure your live domain and search metadata:

```typescript
export const siteConfig = {
  // Set this to your production domain before deploying (used for OG images and canonical URLs)
  url: "https://yourdomain.com",
  title: `${profile.fullName} — ${profile.role}`,
  titleTemplate: `%s — ${profile.fullName}`,
  description: `${profile.fullName} is a ${profile.role.toLowerCase()} specializing in...`,
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Software Architecture",
  ],
  locale: "en_US",
} as const;
```

You can also adjust the section order or navigation titles in `sections` inside `site.ts`.

---

### 4. Projects & Showcase Layouts (`src/data/projects.ts`)

Every project entry in [`src/data/projects.ts`](file:///c:/dev/Modern-Developer-Portfolio/src/data/projects.ts) supports custom scope tags, technology badges, live external links, and three distinct editorial layouts:

| Layout | Description | Best Used For |
| :--- | :--- | :--- |
| `"wide"` | Full-width landscape banner with description and scope list underneath. | Desktop web apps, SaaS dashboards, complex multi-screen platforms. |
| `"tall"` | Portrait card with media on the right and project copy on the left. | Mobile applications, phone mockups, vertical tablet captures. |
| `"split"` | Offset split layout with oversized typographic number and side-by-side media. | Design systems, APIs, developer tooling, CLI utilities. |

Example project entry:

```typescript
{
  id: "my-project",
  number: "01",
  title: "CloudPulse",
  category: "DevOps & Observability Platform",
  description: "Real-time infrastructure monitoring dashboard featuring live telemetry feeds.",
  scope: [
    "Next.js 16 App Router interface",
    "Websocket streaming & metrics pipeline",
    "Tailwind CSS v4 custom theme",
  ],
  tags: ["Next.js", "TypeScript", "Tailwind", "Docker"],
  year: "2026",
  layout: "wide", // "wide" | "tall" | "split"
  image: {
    src: "/projects/cloudpulse.png",
    alt: "CloudPulse Interface Preview",
    width: 1920,
    height: 1080,
  },
  links: {
    live: "https://cloudpulse.example.com",
    repo: "https://github.com/yourusername/cloudpulse",
    appStore: "https://apps.apple.com/...", // optional
    playStore: "https://play.google.com/...", // optional
  },
}
```

---

### 5. Adding Screenshots & Project Images

1. **Local Images:** Place your project screenshots or wireframes inside `public/projects/` (e.g., `public/projects/my-screenshot.png`).
2. Reference them in `src/data/projects.ts` as `src: "/projects/my-screenshot.png"`.
3. Provide the actual `width` and `height` so Next.js Image optimization prevents cumulative layout shift (CLS).
4. **Remote Images (CDN / Cloudinary / Unsplash):** If your screenshots are hosted remotely, add their hostnames to `images.remotePatterns` in [`next.config.ts`](file:///c:/dev/Modern-Developer-Portfolio/next.config.ts):

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
};
```

---

### 6. Capabilities & Development Spectrum (`src/data/capabilities.ts`)

In [`src/data/capabilities.ts`](file:///c:/dev/Modern-Developer-Portfolio/src/data/capabilities.ts), you can customize:
- **Capabilities ("What I Build"):** Highlight your core offerings (e.g., Interfaces, Systems, Mobile, DevOps) along with deliverables and tools.
- **Development Spectrum:** The interactive 5-stage slider (e.g., `01 Conception` → `02 Architecture` → `03 Implementation` → `04 Hardening` → `05 Production`).
- **Production Responsibilities:** Concrete standards you uphold when deploying live software (e.g., Automated Backups, Zero-Downtime Deployments, Observability).

---

### 7. Skills & Tech Stack (`src/data/skills.ts`)

In [`src/data/skills.ts`](file:///c:/dev/Modern-Developer-Portfolio/src/data/skills.ts), configure your technology index. Each category has:
- **`primary`:** Displayed prominently in bold monospace font.
- **`secondary`:** Displayed as supporting technologies or competencies.

```typescript
export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend",
    primary: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    secondary: ["CSS Modules", "HTML5", "Responsive Web Design", "WAI-ARIA"],
  },
  // Add other stacks: Backend, Mobile, Cloud, Infrastructure, etc.
];
```

---

### 8. Customizing Colors & Theme Tokens (`src/app/globals.css`)

The color system is driven by CSS variables in [`src/app/globals.css`](file:///c:/dev/Modern-Developer-Portfolio/src/app/globals.css). To adjust the look and feel or switch the accent color:

```css
:root {
  /* Light theme: warm paper */
  --bg: #f3f0ea;
  --bg-raised: #ebe7df;
  --bg-sunken: #e4dfd5;
  --ink: #17150f;
  --ink-muted: #56514a;

  /* Change your primary accent color (default is warm ember #c4451c) */
  --accent: #c4451c;
  --accent-soft: rgba(196, 69, 28, 0.12);
}

[data-theme="dark"] {
  /* Dark theme: deep ink */
  --bg: #111110;
  --bg-raised: #171716;
  --bg-sunken: #0c0c0b;
  --ink: #ebe7df;
  --ink-muted: #a29b90;

  /* Dark mode accent token */
  --accent: #e0673f;
  --accent-soft: rgba(224, 103, 63, 0.16);
}
```

---

### 9. Open Graph & Social Cards (`src/app/opengraph-image.tsx`)

When you share your website link on Discord, X/Twitter, or LinkedIn, Next.js dynamically renders a high-resolution 1200x630 PNG card using [`src/app/opengraph-image.tsx`](file:///c:/dev/Modern-Developer-Portfolio/src/app/opengraph-image.tsx).

It automatically pulls your `firstName`, `lastName`, `role`, and `domains` from `src/data/profile.ts`. You can tweak font sizes, border styling, or colors directly inside the component if desired.

---

## 📁 Project Structure

```
Modern-Developer-Portfolio/
├── public/
│   ├── projects/                  # Project screenshots & wireframes
│   └── favicon.ico                # Site favicon
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css            # Tailwind CSS v4 setup, variables, animations
│   │   ├── layout.tsx             # Root layout, Google Fonts, theme bootstrap
│   │   ├── opengraph-image.tsx    # Dynamic Open Graph image generation
│   │   └── page.tsx               # Main page assembly & Person JSON-LD schema
│   ├── components/
│   │   ├── layout/
│   │   │   ├── BackToTop.tsx      # Smooth scroll-to-top floating control
│   │   │   ├── CursorRing.tsx     # Magnetic pointer tracking ring
│   │   │   ├── Footer.tsx         # Editorial footer with local time & copyright
│   │   │   ├── IntroCurtain.tsx   # First-visit opening curtain animation
│   │   │   ├── ScrollProgress.tsx # Top reading progress indicator
│   │   │   ├── SiteNav.tsx        # Responsive navigation rail & mobile menu
│   │   │   └── ThemeToggle.tsx    # Zero-flicker light/dark switch
│   │   ├── sections/
│   │   │   ├── Intro.tsx          # 01 Hero statement & live availability badge
│   │   │   ├── Capabilities.tsx   # 02 What I Build area cards
│   │   │   ├── Work.tsx           # 03 Editorial multi-layout project showcase
│   │   │   ├── Spectrum.tsx       # 04 Interactive development phase scrubber
│   │   │   ├── TechIndex.tsx      # 05 Skills and technology matrix
│   │   │   ├── Production.tsx     # 06 Reliability & deployment protocols
│   │   │   ├── About.tsx          # 07 Biography and career timeline
│   │   │   └── Contact.tsx        # 08 Direct contact links and socials
│   │   └── ui/
│   │       ├── Container.tsx      # Standard layout container wrapper
│   │       ├── LocalTime.tsx      # Live localized clock component
│   │       ├── ProjectFigure.tsx  # Image frame with aspect ratio constraints
│   │       ├── Reveal.tsx         # Intersection-observer scroll reveal
│   │       ├── SectionHeader.tsx  # Numbered section header typography
│   │       └── Ticker.tsx         # Infinite domain marquee strip
│   ├── data/
│   │   ├── capabilities.ts        # Capabilities, spectrum stages, production
│   │   ├── profile.ts             # Profile, bio, experience, contact links
│   │   ├── projects.ts            # Project list, layouts, tags, and links
│   │   ├── site.ts                # Navigation registry, metadata, site URL
│   │   └── skills.ts              # Skill groups and technologies
│   └── lib/
│       └── cn.ts                  # Classname merging utility
├── CONTRIBUTING.md                # Guide for open source contributors
├── LICENSE                        # MIT License
├── next.config.ts                 # Next.js image domains and configuration
├── package.json                   # Dependencies, scripts, and metadata
└── tsconfig.json                  # TypeScript compiler settings
```

---

## 📜 NPM Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local Next.js development server at `http://localhost:3000`. |
| `npm run build` | Compiles the production build, generates static pages, and bundles assets. |
| `npm run start` | Boots a production server to preview the built application locally. |
| `npm run lint` | Runs ESLint to check code quality and catch syntax issues. |

---

## 🚢 Deployment Guide

This project requires zero database connections and no server-side secrets. It can be deployed to any modern web host in minutes.

### Deploying to Vercel (Recommended)

1. Push your customized fork to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your `Modern-Developer-Portfolio` repository.
4. Framework Preset will automatically detect **Next.js**.
5. Click **Deploy**. Vercel will build and assign you a secure HTTPS URL.
6. Remember to update `siteConfig.url` in `src/data/site.ts` to your custom domain so canonical and Open Graph meta tags reflect your live URL!

### Deploying to Netlify

1. Connect your GitHub account at [Netlify](https://www.netlify.com/).
2. Select your portfolio repository.
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Click **Deploy Site**.

### Deploying to Cloudflare Pages

1. In Cloudflare Dashboard, go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Select your repository.
3. Build preset: **Next.js**.
4. Build command: `npx @cloudflare/next-on-pages` (or standard `npm run build`).

### Self-Hosted / Docker / VPS

You can run this portfolio on any Linux VPS (Ubuntu, Debian) with Node.js and PM2:

```bash
git clone https://github.com/<your-username>/Modern-Developer-Portfolio.git
cd Modern-Developer-Portfolio
npm install
npm run build
pm2 start npm --name "portfolio" -- start -- -p 3000
```
Then configure Nginx as a reverse proxy with SSL via Let's Encrypt Certbot.

---

## 🤝 Contributing

Contributions, bug reports, and suggestions are warmly welcomed!

- For bug reports or feature ideas, please open an [Issue](https://github.com/Ryderhxrzy/Modern-Developer-Portfolio/issues).
- Before creating a pull request, please review our [Contributing Guide](CONTRIBUTING.md).

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.

You are free to use this template for your personal portfolio, modify it, and share it. Giving credit or starring the repository is appreciated!

---

<div align="center">
  <sub>Designed & built with care by <a href="https://github.com/Ryderhxrzy">Jhay-R Cervantes</a>. If you find this template helpful, please consider leaving a ⭐️!</sub>
</div>
