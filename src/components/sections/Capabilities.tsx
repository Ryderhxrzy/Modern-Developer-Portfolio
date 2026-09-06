import { Container } from "@/components/ui/Container";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { capabilities } from "@/data/capabilities";
import { sections } from "@/data/site";

const section = sections[1];

/**
 * 02 — What I Build. Capabilities as an index of responsibilities:
 * each row pairs a large title with what gets delivered and the tools
 * used, separated by hairlines rather than boxed into cards.
 */
export function Capabilities() {
  return (
    <Container
      as="section"
      id={section.id}
      aria-labelledby="capabilities-heading"
      className="pt-16 sm:pt-20 lg:pt-24"
    >
      <SectionHeader
        section={section}
        meta={`${String(capabilities.length).padStart(2, "0")} areas`}
      />

      <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-12">
        <Reveal variant="lines" className="lg:col-span-8" threshold={0.2}>
          <h2 id="capabilities-heading" className="display-lg text-ink">
            <RevealWords text="What I build," accent="and take care of." delay={100} />
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-4 lg:col-start-9 lg:self-end" delay={250}>
          <p className="max-w-[40ch] text-base leading-relaxed text-ink-muted">
            Grouped by the parts of a project I handle, not by logos. Each one lists what I
            deliver and the tools I use for it.
          </p>
        </Reveal>
      </div>

      <ol className="mt-16 border-t border-line lg:mt-24">
        {capabilities.map((capability, index) => (
          <li key={capability.id} className="border-b border-line">
            <Reveal
              as="article"
              className="group relative grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-6 py-8 sm:grid-cols-[3.5rem_1fr] sm:py-10 lg:grid-cols-12 lg:gap-x-8 lg:py-12"
              delay={index * 40}
              threshold={0.1}
            >
              {/* Hover wash that bleeds past the container edges on desktop */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -inset-x-4 -z-10 bg-bg-raised opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:-inset-x-8"
              />

              <span className="label pt-2 text-accent lg:col-span-1">{capability.number}</span>

              <div className="lg:col-span-3">
                <h3 className="display-sm text-ink transition-transform duration-700 ease-[var(--ease-out-expo)] lg:group-hover:translate-x-2">
                  {capability.title}
                </h3>
                <p className="label mt-4 leading-relaxed text-ink-muted">
                  {capability.tools.join(" / ")}
                </p>
              </div>

              <p className="col-start-2 max-w-[38ch] text-base leading-relaxed text-ink-muted lg:col-span-4 lg:col-start-5">
                {capability.summary}
              </p>

              <ul className="col-start-2 flex flex-col lg:col-span-4 lg:col-start-9">
                {capability.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3 border-t border-line py-2.5 text-[0.9375rem] text-ink first:border-t-0 first:pt-0"
                  >
                    <span
                      className="block h-px w-3 shrink-0 translate-y-[-0.2em] bg-ink-faint transition-[width,background-color] duration-500 ease-[var(--ease-out-expo)] group-hover:w-5 group-hover:bg-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Container>
  );
}
