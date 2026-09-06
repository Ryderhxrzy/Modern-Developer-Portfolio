import { Container } from "@/components/ui/Container";
import { Reveal, RevealLine } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/data/profile";
import { sections } from "@/data/site";

const section = sections[7];

/**
 * 08 — Contact. A single question set very large, the answer in serif,
 * then the email as the one big link and the socials as a short list.
 */
export function Contact() {
  const { heading, subheading, email, socials } = profile.contact;
  const [lineOne, lineTwo, lastWord] = splitHeading(heading);

  return (
    <Container
      as="section"
      id={section.id}
      aria-labelledby="contact-heading"
      className="pt-16 sm:pt-20 lg:pt-24"
    >
      <SectionHeader
        section={section}
        meta={profile.availability.open ? profile.availability.label : undefined}
      />

      <div className="mt-12 lg:mt-20">
        <Reveal variant="lines" threshold={0.1}>
          <h2 id="contact-heading" className="display-xl text-ink">
            <RevealLine delay={100}>{lineOne}</RevealLine>
            <RevealLine delay={220} className="lg:ml-[0.6em]">
              {lineTwo ? <>{lineTwo} </> : null}
              <span className="serif-italic text-ink-muted">{lastWord}</span>
            </RevealLine>
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <Reveal delay={300}>
            <p className="display-sm serif-italic text-ink">{subheading}</p>
          </Reveal>
          <Reveal delay={400}>
            <p className="label mt-8 text-ink-faint">Email me</p>
            <a
              href={`mailto:${email}`}
              className="link-draw mt-3 inline-block break-all text-xl text-ink transition-colors hover:text-accent sm:text-2xl lg:text-3xl"
            >
              {email}
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal delay={420}>
            <p className="label mb-3 text-ink-faint">Or find me on</p>
          </Reveal>
          <Reveal as="ul" className="border-t border-line" delay={450}>
            {socials.map((social, index) => (
              <li key={social.label} className="border-b border-line">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-baseline gap-5 py-4 transition-colors hover:text-accent"
                >
                  <span className="label w-6 text-ink-faint">{String(index + 1).padStart(2, "0")}</span>
                  <span className="label-lg text-ink transition-colors group-hover:text-accent">
                    {social.label}
                  </span>
                  <span className="label ml-auto hidden text-ink-faint transition-colors group-hover:text-ink sm:inline">
                    {social.handle}
                  </span>
                  <span
                    aria-hidden="true"
                    className="label text-ink-faint transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  >
                    ↗
                  </span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </Container>
  );
}

/**
 * Splits "Have something to build?" into two display lines:
 * "Have something" and "to build?", with the final word set in serif.
 */
function splitHeading(text: string): [string, string, string] {
  const words = text.trim().split(" ");
  if (words.length < 3) return [words.slice(0, -1).join(" "), "", words[words.length - 1] ?? ""];
  return [words.slice(0, -2).join(" "), words[words.length - 2], words[words.length - 1]];
}
