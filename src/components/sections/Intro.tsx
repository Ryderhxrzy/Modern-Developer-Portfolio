import { Container } from "@/components/ui/Container";
import { LocalTime } from "@/components/ui/LocalTime";
import { Reveal, RevealLine } from "@/components/ui/Reveal";
import { Ticker } from "@/components/ui/Ticker";
import { profile } from "@/data/profile";
import { sections } from "@/data/site";

const section = sections[0];

/**
 * 01 — Intro. An editorial opening rather than a hero: the name set as
 * two offset lines of oversized type, the thesis and summary in a
 * narrow column to the right, a status strip along the bottom rule,
 * and a slow ticker of the areas I work in.
 */
export function Intro() {
  const year = new Date().getFullYear();

  return (
    <section id={section.id} aria-labelledby="intro-heading" className="relative">
      <Container className="flex min-h-svh flex-col pt-24 sm:pt-28 lg:pt-32">
        {/* Top annotations */}
        <Reveal className="flex items-baseline justify-between gap-6" delay={100} delayVar="--intro-offset">
          <p className="label text-ink-muted">
            <span className="text-accent">{section.number}</span>
            <span className="ml-3">Portfolio / {year}</span>
          </p>
          <p className="label hidden text-ink-muted sm:block">
            {profile.location} <span className="text-ink-faint">/</span>{" "}
            <LocalTime timeZone="Asia/Manila" /> {profile.timezone}
          </p>
        </Reveal>

        {/* Name */}
        <div className="mt-14 sm:mt-20 lg:mt-24">
          <Reveal variant="lines" threshold={0.05}>
            <h1 id="intro-heading" className="display-xl uppercase text-ink">
              <RevealLine delay={150} delayVar="--intro-offset">{profile.firstName}</RevealLine>
              <RevealLine delay={260} delayVar="--intro-offset" className="lg:ml-[0.9em]">
                {profile.lastName}
              </RevealLine>
            </h1>
          </Reveal>
        </div>

        {/* Body: asymmetric two-column composition */}
        <div className="mt-12 grid grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <Reveal className="flex items-start gap-4 lg:col-span-4 lg:self-end" delay={450} delayVar="--intro-offset">
            <span className="mt-[0.35rem] block h-px w-8 bg-accent" aria-hidden="true" />
            <div className="flex flex-col gap-3">
              <p className="label-lg text-ink">{profile.role}</p>
              <p className="label text-ink-faint">Freelance and in-house</p>
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={520} delayVar="--intro-offset">
              <p className="display-md serif-italic text-ink">{profile.statement}</p>
            </Reveal>
            <Reveal delay={620} delayVar="--intro-offset">
              <p className="mt-6 max-w-[44ch] text-base leading-relaxed text-ink-muted sm:text-lg">
                {profile.summary}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Status strip along the bottom rule */}
        <div className="mt-auto pt-16 sm:pt-20">
          <Reveal variant="rule" className="h-px w-full bg-line-strong" delay={700} delayVar="--intro-offset" />
          <Reveal
            className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between"
            delay={820} delayVar="--intro-offset"
          >
            {profile.availability.open ? (
              <p className="label flex items-center gap-2.5 text-ink">
                <span className="status-dot block size-1.5 rounded-full bg-accent" aria-hidden="true" />
                {profile.availability.label}
              </p>
            ) : (
              <span />
            )}
            <a
              href={`#${sections[1].id}`}
              className="label group inline-flex items-center gap-3 text-ink-muted transition-colors hover:text-ink"
            >
              Scroll down
              <span
                aria-hidden="true"
                className="block h-6 w-px bg-ink-faint transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-y-1 group-hover:bg-accent"
              />
            </a>
          </Reveal>
        </div>
      </Container>

      <Ticker items={profile.domains} className="mt-6 sm:mt-10" />
    </section>
  );
}
