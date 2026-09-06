import { BackToTop } from "@/components/layout/BackToTop";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SiteNav } from "@/components/layout/SiteNav";
import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { Contact } from "@/components/sections/Contact";
import { Intro } from "@/components/sections/Intro";
import { Production } from "@/components/sections/Production";
import { Spectrum } from "@/components/sections/Spectrum";
import { TechIndex } from "@/components/sections/TechIndex";
import { Work } from "@/components/sections/Work";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/site";

/** Structured data so search engines understand who the page is about. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  jobTitle: profile.role,
  description: siteConfig.description,
  url: siteConfig.url,
  email: `mailto:${profile.contact.email}`,
  address: { "@type": "PostalAddress", addressCountry: "PH" },
  sameAs: profile.contact.socials.map((s) => s.href),
  knowsAbout: [...siteConfig.keywords],
};

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SiteNav />
      <main id="main" className="flex-1">
        <Intro />
        <Capabilities />
        <Work />
        <Spectrum />
        <TechIndex />
        <Production />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <script
        type="application/ld+json"
        // Static, trusted content from data/profile.ts and data/site.ts.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}
