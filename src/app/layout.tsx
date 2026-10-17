import type { Metadata, Viewport } from "next";
import type React from "react";
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import Script from "next/script";

import { CursorRing } from "@/components/layout/CursorRing";
import { IntroCurtain } from "@/components/layout/IntroCurtain";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/site";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const sans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: profile.fullName, url: siteConfig.url }],
  creator: profile.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: profile.fullName,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f0ea" },
    { media: "(prefers-color-scheme: dark)", color: "#111110" },
  ],
};

/**
 * Runs before first paint: applies the stored or system theme so there is
 * no flash of the wrong theme, and skips the opening curtain when it has
 * already played in this session. Tiny and dependency-free on purpose.
 */
const themeBootstrap = `(function(){var d=document.documentElement;try{var s=localStorage.getItem("theme");var m=window.matchMedia("(prefers-color-scheme: dark)").matches;d.setAttribute("data-theme",s==="light"||s==="dark"?s:(m?"dark":"light"));}catch(e){}try{if(sessionStorage.getItem("curtain-seen")){d.setAttribute("data-curtain","off");}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${serif.variable} ${mono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-bootstrap" strategy="beforeInteractive">
          {themeBootstrap}
        </Script>
        <IntroCurtain />
        {children}
        <CursorRing />
        <div className="grain" aria-hidden="true" />
        <Analytics />
      </body>
    </html>
  );
}
