import { Container } from "@/components/ui/Container";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/data/profile";
import { sections } from "@/data/site";

const section = sections[6];

/**
 * 07 — About. Short, and about approach rather than biography: a
 * statement, two paragraphs, current roles, and a compact fact sheet.
 */
export function About() {
  const { heading, paragraphs, experience, facts } = profile.about;

  return (
    <Container
      as="section"
      id={section.id}
      aria-labelledby="about-heading"
      className="pt-16 sm:pt-20 lg:pt-24"
    >
      <SectionHeader section={section} meta={profile.fullName} />

      <div className="mt-12 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <Reveal variant="lines" threshold={0.2}>
            <h2 id="about-heading" className="display-md text-ink">
              <RevealWords text={heading} delay={100} stagger={40} />
            </h2>
          </Reveal>
          <div className="mt-8 flex max-w-[52ch] flex-col gap-5 lg:ml-[10%]">
            {paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={250 + index * 90}>
                <p className="text-base leading-relaxed text-ink-muted sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-12 lg:col-span-4 lg:col-start-9">
          <Reveal delay={200}>
            <p className="label text-ink-faint">Currently</p>
            <ol className="mt-3 flex flex-col">
              {experience.map((item) => (
                <li key={item.role} className="border-t border-line py-4 last:border-b">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-base font-medium text-ink">{item.role}</p>
                    <p className="label shrink-0 text-accent">{item.period}</p>
                  </div>
                  {item.org ? <p className="mt-1 text-sm text-ink-muted">{item.org}</p> : null}
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.note}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal as="dl" className="flex flex-col" delay={300}>
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-[5.5rem_1fr] gap-4 border-t border-line py-4 last:border-b sm:grid-cols-[6.5rem_1fr]"
              >
                <dt className="label pt-1 text-ink-faint">{fact.label}</dt>
                <dd className="text-[0.9375rem] text-ink">{fact.value}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </Container>
  );
}
