import { Container } from "@/components/ui/Container";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { productionExperience } from "@/data/capabilities";
import { sections } from "@/data/site";

const section = sections[5];

/**
 * 06 — Production. The work that happens after the code: four columns
 * of post-development responsibilities, each with a drawn top rule.
 */
export function Production() {
  const { heading, intro, areas } = productionExperience;
  const words = heading.split(" ");
  const lead = words.slice(0, -1).join(" ");
  const last = words[words.length - 1];

  return (
    <Container
      as="section"
      id={section.id}
      aria-labelledby="production-heading"
      className="pt-16 sm:pt-20 lg:pt-24"
    >
      <SectionHeader section={section} meta="After the code" />

      <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-12">
        <Reveal variant="lines" className="lg:col-span-9" threshold={0.2}>
          <h2 id="production-heading" className="display-lg text-ink">
            <RevealWords text={lead} accent={last} delay={100} />
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-4 lg:col-start-9" delay={250}>
          <p className="max-w-[40ch] text-base leading-relaxed text-ink-muted">{intro}</p>
        </Reveal>
      </div>

      {/* Four responsibility columns */}
      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
        {areas.map((area, index) => (
          <div key={area.title}>
            <Reveal variant="rule" className="h-px w-full bg-line-strong" delay={index * 120} />
            <Reveal className="pt-4" delay={index * 120 + 100}>
              <div className="flex items-baseline justify-between">
                <h3 className="display-sm text-ink">{area.title}</h3>
                <span className="label text-accent">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <ul className="mt-6 flex flex-col">
                {area.items.map((item) => (
                  <li
                    key={item}
                    className="border-t border-line py-2.5 text-[0.9375rem] text-ink-muted first:border-t-0 first:pt-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>
    </Container>
  );
}
