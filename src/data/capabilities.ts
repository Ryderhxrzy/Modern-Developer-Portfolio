/**
 * "What I Build" — capabilities grouped by what I handle on a project,
 * not by technology. Also holds the development spectrum stages and the
 * production/shipping responsibilities.
 */

export type Capability = {
  id: string;
  number: string;
  title: string;
  /** One plain sentence about this part of the job. */
  summary: string;
  /** Concrete things delivered under this responsibility. */
  deliverables: string[];
  /** Technologies most associated with this responsibility. */
  tools: string[];
};

export const capabilities: Capability[] = [
  {
    id: "interfaces",
    number: "01",
    title: "Interfaces",
    summary: "Websites, web apps and dashboards that work well on any screen size.",
    deliverables: [
      "Web apps and marketing websites",
      "Admin dashboards and internal tools",
      "Responsive, mobile-first layouts",
      "Reusable component systems",
      "Connecting the frontend to APIs",
    ],
    tools: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    id: "systems",
    number: "02",
    title: "Systems",
    summary: "The backend behind the app: APIs, logins, databases and integrations.",
    deliverables: [
      "REST API design and development",
      "Login, roles and permissions",
      "Database design and migrations",
      "Caching, queues and realtime features",
      "Payments, messaging and other third-party APIs",
    ],
    tools: ["Laravel", "PHP", "MySQL", "Redis"],
  },
  {
    id: "mobile",
    number: "03",
    title: "Mobile",
    summary: "iOS and Android apps with React Native and Expo, plus native Android in Kotlin when needed.",
    deliverables: [
      "Cross-platform apps with React Native and Expo",
      "Native Android modules in Kotlin",
      "Push notifications and deep linking",
      "Over-the-air (OTA) updates without a store release",
      "Predictive back and other native behaviour",
    ],
    tools: ["React Native", "Expo", "Kotlin", "Android Studio"],
  },
  {
    id: "desktop",
    number: "04",
    title: "Desktop",
    summary: "Desktop apps for teams that need software outside the browser.",
    deliverables: [
      "Windows and macOS desktop apps",
      "File system and OS integrations",
      "Installers and packaging",
      "Shared code with the web app",
    ],
    tools: ["TypeScript", "React"],
  },
  {
    id: "infrastructure",
    number: "05",
    title: "Infrastructure",
    summary: "The server side of shipping: Linux servers, Docker, Nginx, domains and SSL.",
    deliverables: [
      "VPS setup and hardening on Ubuntu",
      "Nginx, domains and SSL certificates",
      "Docker deployments",
      "Database setup, backups and environment config",
      "Fixing production and server problems",
    ],
    tools: ["Linux", "Ubuntu", "Nginx", "Docker"],
  },
  {
    id: "release",
    number: "06",
    title: "Release",
    summary: "Getting the app into the App Store and Google Play, and keeping it there.",
    deliverables: [
      "Release builds, signing and versioning",
      "Store listings, screenshots and metadata",
      "Testing tracks and TestFlight",
      "Fixing app review rejections",
      "Release management and rollouts",
    ],
    tools: ["App Store Connect", "Google Play Console", "EAS", "Gradle"],
  },
];

export type SpectrumStage = {
  id: string;
  label: string;
  /** What actually happens at this stage. */
  note: string;
};

/** The end-to-end delivery pipeline shown in the Development Spectrum section. */
export const spectrum: SpectrumStage[] = [
  { id: "idea", label: "Idea", note: "Scope, requirements, data model" },
  { id: "interface", label: "Interface", note: "React, Next.js, responsive UI" },
  { id: "api", label: "API", note: "Laravel, REST, auth, integrations" },
  { id: "database", label: "Database", note: "MySQL schema, Redis, migrations" },
  { id: "mobile", label: "Mobile", note: "React Native, Expo, Kotlin" },
  { id: "server", label: "Server", note: "Ubuntu VPS, Nginx, Docker, SSL" },
  { id: "store", label: "Store", note: "App Store Connect, Play Console" },
  { id: "production", label: "Production", note: "Monitoring, fixes, releases" },
];

export type ProductionArea = {
  title: string;
  items: string[];
};

/** Responsibilities that continue after the code is written. */
export const productionExperience = {
  heading: "Shipping is part of the job.",
  intro:
    "Many developers stop when the code is done. I keep going: I set up the server, build the release, publish to the stores, and fix what breaks after launch.",
  areas: [
    {
      title: "Deploy",
      items: [
        "Server configuration",
        "Production deployment",
        "Environment and secrets",
        "Deployment debugging",
      ],
    },
    {
      title: "Build",
      items: [
        "Release builds",
        "App signing",
        "Versioning and changelogs",
        "Build and submission fixes",
      ],
    },
    {
      title: "Publish",
      items: [
        "Store listing preparation",
        "App Store Connect",
        "Google Play Console",
        "App review troubleshooting",
      ],
    },
    {
      title: "Operate",
      items: [
        "Production issue fixes",
        "Log and error checks",
        "Rollbacks and hotfixes",
        "Monitoring after release",
      ],
    },
  ] as ProductionArea[],
};
