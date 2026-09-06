import { Container } from "@/components/ui/Container";
import { LocalTime } from "@/components/ui/LocalTime";
import { Reveal, RevealLine } from "@/components/ui/Reveal";
import { profile } from "@/data/profile";
import { navItems } from "@/data/site";

/**
 * Footer: the name set very large as a closing signature, then a short
 * colophon row with local time, the section index and a back-to-top link.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-28 overflow-hidden sm:mt-36 lg:mt-44">
      <Container>
        <Reveal variant="lines" threshold={0.2}>
          <p
            aria-hidden="true"
            className="display-xl select-none uppercase leading-[0.85] text-ink-faint/50"
          >
            <RevealLine delay={0}>{profile.firstName}</RevealLine>
            <RevealLine delay={120} className="lg:ml-[0.9em]">
              {profile.lastName}
            </RevealLine>
          </p>
        </Reveal>

        <div className="mt-10 h-px w-full bg-line-strong sm:mt-14" aria-hidden="true" />

        <div className="grid grid-cols-2 gap-x-8 gap-y-8 py-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <span className="label text-ink-faint">Name</span>
            <span className="label-lg text-ink">{profile.fullName}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="label text-ink-faint">Local time</span>
            <span className="label-lg text-ink">
              <LocalTime timeZone="Asia/Manila" /> {profile.timezone}
            </span>
          </div>
          <nav aria-label="Footer sections" className="col-span-2 flex flex-col gap-2 md:col-span-2">
            <span className="label text-ink-faint">Sections</span>
            <ul className="label-lg flex flex-wrap gap-x-5 gap-y-2 text-ink">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="link-draw transition-colors hover:text-accent">
                    <span className="mr-1.5 text-ink-faint">{item.number}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center justify-between border-t border-line py-5">
          <p className="label text-ink-faint">
            © {year} {profile.fullName}
          </p>
          <a
            href="#index"
            className="label group inline-flex items-center gap-3 text-ink-muted transition-colors hover:text-ink"
          >
            Back to top
            <span
              aria-hidden="true"
              className="block h-4 w-px bg-ink-faint transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-1 group-hover:bg-accent"
            />
          </a>
        </div>
      </Container>
    </footer>
  );
}
