/**
 * Selected work. Replace the placeholder images and copy with real
 * project details. Images can be remote URLs (add the host to
 * next.config.ts) or files under /public.
 */

export type ProjectImage = {
  src: string;
  alt: string;
  /** Intrinsic dimensions, used by next/image for layout stability. */
  width: number;
  height: number;
};

/**
 * Controls the editorial composition used for a project:
 * - "wide":  full-width landscape image, text below in an offset column
 * - "tall":  portrait image on the right, text on the left
 * - "split": image on the left, oversized number overlapping, text right
 */
export type ProjectLayout = "wide" | "tall" | "split";

export type Project = {
  id: string;
  /** Large display number shown beside the project. */
  number: string;
  title: string;
  category: string;
  /** One-paragraph description of the product and its scope. */
  description: string;
  /** What was delivered, shown as a short specification list. */
  scope: string[];
  tags: string[];
  /** Year or range, shown as a small label. */
  year: string;
  layout: ProjectLayout;
  image: ProjectImage;
  /** Optional links. Leave undefined to hide. */
  links?: {
    live?: string;
    appStore?: string;
    playStore?: string;
    repo?: string;
  };
};

export const projects: Project[] = [
  {
    id: "af-home",
    number: "01",
    title: "AF Home",
    category: "E-Commerce / Affiliate Platform",
    description:
      "A mobile and web platform where people discover products and earn through affiliate links. I built the mobile apps, the web app, the backend and APIs behind them, and deployed everything to production.",
    scope: [
      "iOS and Android apps",
      "Product discovery, affiliate links and commissions",
      "Laravel backend, REST APIs and login",
      "Server deployment and app store publishing",
    ],
    tags: ["React Native", "Expo", "TypeScript", "Laravel", "API", "Mobile"],
    year: "2024 – 2025",
    layout: "wide",
    image: {
      src: "https://picsum.photos/seed/afhome-portfolio/1800/1125",
      alt: "AF Home mobile and web interface placeholder",
      width: 1800,
      height: 1125,
    },
  },
  {
    id: "crime-analytics",
    number: "02",
    title: "Crime Analytics & Predictive Mapping Platform",
    category: "Data Analytics / Mapping / Government System",
    description:
      "A system for managing crime records with analytics, interactive maps, hotspot views, forecasting and reports. Built so analysts can see clearly where and when incidents happen.",
    scope: [
      "Crime record management with user roles",
      "Interactive maps with hotspot views",
      "Forecasting and trend analytics",
      "Reports and dashboards",
    ],
    tags: ["Laravel", "MySQL", "Mapping", "Analytics", "API"],
    year: "2024",
    layout: "tall",
    image: {
      src: "https://picsum.photos/seed/crimemap-portfolio/1200/1500",
      alt: "Crime analytics mapping dashboard placeholder",
      width: 1200,
      height: 1500,
    },
  },
  {
    id: "merchant-app",
    number: "03",
    title: "Merchant Management Application",
    category: "Commerce / Operations",
    description:
      "A mobile app that lets merchants run their business from one place: products, orders, inventory, ads and daily operations.",
    scope: [
      "Products, inventory and orders",
      "Ads and promotions",
      "Push notifications for new orders",
      "Connected to the commerce backend API",
    ],
    tags: ["React Native", "TypeScript", "API", "Mobile"],
    year: "2025",
    layout: "split",
    image: {
      src: "https://picsum.photos/seed/merchant-portfolio/1600/1200",
      alt: "Merchant management mobile application placeholder",
      width: 1600,
      height: 1200,
    },
  },
];
