/**
 * Technology index. Each group is shown as a row in the index table.
 */

export type SkillGroup = {
  id: string;
  number: string;
  title: string;
  /** Primary technologies, shown large. */
  primary: string[];
  /** Supporting technologies and practices, shown small. */
  secondary: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend",
    primary: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    secondary: ["JavaScript", "HTML", "CSS", "Responsive design", "API integration"],
  },
  {
    id: "backend",
    number: "02",
    title: "Backend",
    primary: ["Laravel", "PHP", "REST API", "MySQL", "Redis"],
    secondary: ["Authentication", "Authorization", "Realtime", "Third-party APIs", "Queues"],
  },
  {
    id: "mobile",
    number: "03",
    title: "Mobile",
    primary: ["React Native", "Expo", "Kotlin", "Android Studio"],
    secondary: ["Push notifications", "Deep linking", "OTA updates", "Native modules", "Predictive back", "Mobile APIs"],
  },
  {
    id: "desktop",
    number: "04",
    title: "Desktop",
    primary: ["TypeScript", "React"],
    secondary: ["Windows and macOS apps", "Installers", "OS integration"],
  },
  {
    id: "infrastructure",
    number: "05",
    title: "Infrastructure",
    primary: ["Linux", "Ubuntu", "VPS", "Nginx", "Docker"],
    secondary: ["Domains", "SSL", "Database deployment", "Environment config", "Server troubleshooting"],
  },
  {
    id: "distribution",
    number: "06",
    title: "Distribution",
    primary: ["App Store Connect", "Google Play Console"],
    secondary: ["Store listings", "Screenshots and assets", "Testing tracks", "App review", "Release management"],
  },
];
