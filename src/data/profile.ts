/**
 * Personal profile and contact configuration.
 * Everything shown in the intro, about, and contact sections lives here.
 */

export type SocialLink = {
  /** Short label shown in the UI, e.g. "GitHub". */
  label: string;
  /** Full URL. Replace the placeholders with real profiles. */
  href: string;
  /** Text shown next to the label, e.g. a handle. */
  handle: string;
};

export type Experience = {
  role: string;
  /** Company or client type. Leave empty to hide. */
  org: string;
  period: string;
  note: string;
};

export const profile = {
  firstName: "Jhay-R",
  lastName: "Cervantes",
  fullName: "Jhay-R Cervantes",
  role: "Full-Stack Software Developer",
  /** One-line thesis used in the intro and metadata. */
  statement: "I build software from interface to infrastructure.",
  /** Short intro paragraph. Plain and direct. */
  summary:
    "I build web apps, backend APIs and mobile apps. I also set up the servers they run on and publish them to the App Store and Google Play. One developer, from the first line of code to the live product.",
  /** Domains shown in the intro status strip and the ticker. */
  domains: ["Web", "Mobile", "Backend", "Infrastructure", "App Publishing"],
  location: "Philippines",
  timezone: "GMT+8",
  availability: {
    /** Toggle to false to hide the "available" state. */
    open: true,
    label: "Open to freelance projects",
  },
  about: {
    heading: "I like to know how the whole thing works.",
    paragraphs: [
      "Not just the screen you see, but also the API behind it, the database, the server it runs on, and the app store it ships to.",
      "I work as a freelance developer and, since July 2026, as a full-stack developer on a team. In both, the goal is the same: understand the whole system, build each part well, and stay until it is live and working.",
    ],
    /** Current roles, newest first. */
    experience: [
      {
        role: "Full-Stack Software Developer",
        org: "",
        period: "Jul 2026 – Present",
        note: "Web, backend and mobile features, from build to release.",
      },
      {
        role: "Freelance Developer",
        org: "",
        period: "Ongoing",
        note: "Web and mobile apps, deployment and app publishing for clients.",
      },
    ] satisfies Experience[],
    /** Short facts shown beside the about text. */
    facts: [
      { label: "Based in", value: "Philippines (GMT+8)" },
      { label: "Focus", value: "Web, backend, mobile, servers, app stores" },
      { label: "Status", value: "Open to freelance projects" },
    ],
  },
  contact: {
    email: "hello@jhayrcervantes.dev",
    heading: "Have something to build?",
    subheading: "Let's turn it into something that ships.",
    socials: [
      {
        label: "GitHub",
        href: "https://github.com/jhayrcervantes",
        handle: "@jhayrcervantes",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jhayrcervantes",
        handle: "/in/jhayrcervantes",
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/jhayrcervantes",
        handle: "/jhayrcervantes",
      },
    ] satisfies SocialLink[],
  },
} as const;

export type Profile = typeof profile;
