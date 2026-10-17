/**
 * Site-wide configuration: navigation, metadata, and section registry.
 */

import { profile } from "./profile";

export type SectionId =
  | "index"
  | "capabilities"
  | "work"
  | "spectrum"
  | "stack"
  | "production"
  | "about"
  | "contact";

export type Section = {
  id: SectionId;
  /** Two-digit section number shown in headers and navigation. */
  number: string;
  /** Label used in section headers. */
  label: string;
  /** Shorter label used in the navigation rail and menu. */
  navLabel: string;
};

/** Ordered registry of every section on the page. */
export const sections: Section[] = [
  { id: "index", number: "01", label: "Intro", navLabel: "Intro" },
  { id: "capabilities", number: "02", label: "What I Build", navLabel: "What I Build" },
  { id: "work", number: "03", label: "Selected Work", navLabel: "Work" },
  { id: "spectrum", number: "04", label: "Development Spectrum", navLabel: "Spectrum" },
  { id: "stack", number: "05", label: "Tools", navLabel: "Tools" },
  { id: "production", number: "06", label: "Production", navLabel: "Production" },
  { id: "about", number: "07", label: "About", navLabel: "About" },
  { id: "contact", number: "08", label: "Contact", navLabel: "Contact" },
];

export type NavItem = {
  id: SectionId;
  label: string;
  number: string;
};

/** Every section is reachable from the navigation, in page order. */
export const navItems: NavItem[] = sections.map((section) => ({
  id: section.id,
  label: section.navLabel,
  number: section.number,
}));

export const siteConfig = {
  /** Update this to the deployed domain. Used for canonical + Open Graph URLs. */
  url: "https://jhayr.dev",
  title: `${profile.fullName} — ${profile.role}`,
  titleTemplate: `%s — ${profile.fullName}`,
  description: `${profile.fullName} is a ${profile.role.toLowerCase()} who builds, deploys, publishes and troubleshoots complete software products across web, backend, mobile, infrastructure and production.`,
  keywords: [
    "Jhay-R Cervantes",
    "Full-Stack Developer",
    "React Native Developer",
    "Laravel Developer",
    "Next.js",
    "TypeScript",
    "Mobile App Publishing",
    "App Store Connect",
    "Google Play Console",
    "VPS Deployment",
  ],
  locale: "en_US",
} as const;
