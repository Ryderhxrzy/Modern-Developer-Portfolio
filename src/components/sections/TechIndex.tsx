import { Container } from "@/components/ui/Container";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { sections } from "@/data/site";
import { skillGroups } from "@/data/skills";

const section = sections[4];

/**
 * 05 — Tools. Set like the index at the back of a book: numbered
 * categories, main tools in large type separated by slashes, supporting
 * skills in small monospace beneath.
 */
export function TechIndex() {
  const total = skillGroups.reduce((n, g) => n + g.primary.length + g.secondary.length, 0);

  return (
    <Container
      as="section"
      id={section.id}
      aria-labelledby="stack-heading"
      className="pt-16 sm:pt-20 lg:pt-24"
    >
      <SectionHeader section={section} meta={`${total} entries`} />

      <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-12">
        <Reveal variant="lines" className="lg:col-span-6" threshold={0.2}>
          <h2 id="stack-heading" className="display-lg text-ink">
            <RevealWords text="Tools" accent="I use." delay={100} />
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-4 lg:col-start-9 lg:self-end" delay={250}>
          <p className="max-w-[40ch] text-base leading-relaxed text-ink-muted">
            The main tools are in large text. The smaller ones are the related skills I use
            with them. All of these have been used on real projects.
          </p>
        </Reveal>
      </div>

      <dl className="mt-16 border-t border-line lg:mt-24">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.id}
            className="grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-4 border-b border-line py-7 sm:grid-cols-[3.5rem_1fr] sm:py-8 lg:grid-cols-12 lg:gap-x-8 lg:py-9"
            delay={index * 40}
            threshold={0.1}
          >
            <dt className="contents">
              <span className="label pt-1.5 text-accent lg:col-span-1">{group.number}</span>
              <span className="label pt-1.5 text-ink lg:col-span-2">{group.title}</span>
            </dt>
            <dd className="col-start-2 lg:col-span-9 lg:col-start-4">
              <ul className="flex flex-wrap items-baseline gap-x-3 gap-y-1 sm:gap-x-4">
                {group.primary.map((item, i) => (
                  <li key={item} className="flex items-baseline gap-3 sm:gap-4">
                    {i > 0 ? (
                      <span
                        aria-hidden="true"
                        className="display-sm font-normal text-ink-faint/70"
                      >
                        /
                      </span>
                    ) : null}
                    <span className="display-sm cursor-default text-ink transition-colors duration-300 hover:text-accent">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <ul className="label mt-4 flex flex-wrap gap-x-4 gap-y-2 leading-relaxed text-ink-muted">
                {group.secondary.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </Reveal>
        ))}
      </dl>
    </Container>
  );
}
