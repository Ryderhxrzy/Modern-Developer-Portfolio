import { Container } from "@/components/ui/Container";
import { ProjectFigure } from "@/components/ui/ProjectFigure";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects, type Project } from "@/data/projects";
import { sections } from "@/data/site";
import { cn } from "@/lib/cn";

const section = sections[2];

/**
 * 03 — Selected Work. Each project uses one of three editorial
 * compositions (wide, tall, split) chosen in the data file, so the list
 * never reads as a repeated card grid.
 */
export function Work() {
  return (
    <Container
      as="section"
      id={section.id}
      aria-labelledby="work-heading"
      className="pt-16 sm:pt-20 lg:pt-24"
    >
      <SectionHeader
        section={section}
        meta={`${String(projects.length).padStart(2, "0")} projects`}
      />

      <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-12">
        <Reveal variant="lines" className="lg:col-span-8" threshold={0.2}>
          <h2 id="work-heading" className="display-lg text-ink">
            <RevealWords text="Selected" accent="projects." delay={100} />
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-4 lg:col-start-9 lg:self-end" delay={250}>
          <p className="max-w-[40ch] text-base leading-relaxed text-ink-muted">
            Real products, built and shipped from start to finish: the app, the backend, the
            server and the store listing.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 flex flex-col gap-20 sm:mt-20 sm:gap-24 lg:mt-24 lg:gap-32">
        {projects.map((project, index) => (
          <ProjectEntry key={project.id} project={project} isFirst={index === 0} />
        ))}
      </div>
    </Container>
  );
}

function ProjectEntry({ project, isFirst }: { project: Project; isFirst: boolean }) {
  switch (project.layout) {
    case "tall":
      return <TallProject project={project} />;
    case "split":
      return <SplitProject project={project} />;
    default:
      return <WideProject project={project} preload={isFirst} />;
  }
}

/* ------------------------------------------------------------------ */

function ProjectNumber({ number, className }: { number: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "block select-none font-medium leading-[0.8] tracking-[-0.06em] text-ink-faint/40",
        className,
      )}
    >
      {number}
    </span>
  );
}

function ProjectTitle({ project, id }: { project: Project; id: string }) {
  return (
    <div>
      <p className="label text-ink-muted">{project.category}</p>
      <h3 id={id} className="display-md mt-4 max-w-[14ch] text-ink">
        {project.title}
      </h3>
    </div>
  );
}

function ProjectMeta({ project }: { project: Project }) {
  return (
    <dl>
      <div className="flex items-baseline gap-4 border-t border-line pt-3">
        <dt className="label w-14 shrink-0 text-ink-faint">Stack</dt>
        <dd className="label leading-relaxed text-ink">{project.tags.join(" / ")}</dd>
      </div>
    </dl>
  );
}

function ProjectScope({ project }: { project: Project }) {
  return (
    <div>
      <p className="label text-ink-faint">Scope</p>
      <ul className="mt-3 flex flex-col">
        {project.scope.map((item) => (
          <li
            key={item}
            className="flex items-baseline gap-3 border-t border-line py-2.5 text-[0.9375rem] text-ink first:border-t-0 first:pt-0"
          >
            <span className="block h-px w-3 shrink-0 translate-y-[-0.2em] bg-accent" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectDescription({ project }: { project: Project }) {
  return <p className="max-w-[46ch] text-base leading-relaxed text-ink-muted">{project.description}</p>;
}

/* ------------------------------------------------------------------ */

/** Landscape figure across the full measure, text offset beneath. */
function WideProject({ project, preload }: { project: Project; preload: boolean }) {
  const headingId = `project-${project.id}`;
  return (
    <article aria-labelledby={headingId} className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-x-8">
      <Reveal className="flex items-end justify-between gap-6 lg:col-span-12" delay={0}>
        <ProjectNumber number={project.number} className="text-[clamp(4rem,12vw,11rem)]" />
        <p className="label pb-2 text-ink-faint">{project.year}</p>
      </Reveal>

      <Reveal className="lg:col-span-12" delay={100} threshold={0.05}>
        <ProjectFigure
          image={project.image}
          sizes="(min-width: 1600px) 1500px, 100vw"
          aspectClassName="aspect-[4/3] sm:aspect-[16/10]"
          cursorLabel={`View ${project.title}`}
          preload={preload}
        />
      </Reveal>

      <Reveal className="lg:col-span-5 lg:col-start-2" delay={150}>
        <ProjectTitle project={project} id={headingId} />
        <div className="mt-6">
          <ProjectDescription project={project} />
        </div>
      </Reveal>

      <Reveal className="flex flex-col gap-10 lg:col-span-4 lg:col-start-9" delay={250}>
        <ProjectScope project={project} />
        <ProjectMeta project={project} />
      </Reveal>
    </article>
  );
}

/** Portrait figure on the right, text column pinned on the left. */
function TallProject({ project }: { project: Project }) {
  const headingId = `project-${project.id}`;
  return (
    <article aria-labelledby={headingId} className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-8">
      <div className="flex flex-col gap-10 lg:col-span-5 lg:self-start lg:sticky lg:top-24">
        <Reveal className="flex items-end justify-between gap-6" delay={0}>
          <ProjectNumber number={project.number} className="text-[clamp(4rem,10vw,9rem)]" />
          <p className="label pb-2 text-ink-faint">{project.year}</p>
        </Reveal>
        <Reveal delay={100}>
          <ProjectTitle project={project} id={headingId} />
          <div className="mt-6">
            <ProjectDescription project={project} />
          </div>
        </Reveal>
        <Reveal className="flex flex-col gap-10" delay={200}>
          <ProjectScope project={project} />
          <ProjectMeta project={project} />
        </Reveal>
      </div>

      <Reveal className="lg:col-span-6 lg:col-start-7" delay={120} threshold={0.05}>
        <ProjectFigure
          image={project.image}
          sizes="(min-width: 1024px) 50vw, 100vw"
          aspectClassName="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]"
          cursorLabel={`View ${project.title}`}
        />
      </Reveal>
    </article>
  );
}

/** Figure on the left with the number overlapping its edge, text right. */
function SplitProject({ project }: { project: Project }) {
  const headingId = `project-${project.id}`;
  return (
    <article aria-labelledby={headingId} className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-8">
      <div className="relative lg:col-span-7">
        <Reveal delay={0} threshold={0.05}>
          <ProjectFigure
            image={project.image}
            sizes="(min-width: 1024px) 58vw, 100vw"
            aspectClassName="aspect-[4/3]"
            cursorLabel={`View ${project.title}`}
            className="lg:mr-16"
          />
        </Reveal>
        <Reveal
          className="pointer-events-none absolute -bottom-6 right-0 hidden lg:block"
          delay={200}
        >
          <ProjectNumber number={project.number} className="text-[clamp(6rem,14vw,13rem)] text-ink" />
        </Reveal>
      </div>

      <div className="flex flex-col gap-10 lg:col-span-4 lg:col-start-9">
        <Reveal className="flex items-end justify-between gap-6 lg:hidden" delay={0}>
          <ProjectNumber number={project.number} className="text-[clamp(4rem,10vw,9rem)]" />
          <p className="label pb-2 text-ink-faint">{project.year}</p>
        </Reveal>
        <Reveal delay={100}>
          <p className="label hidden pb-6 text-ink-faint lg:block">{project.year}</p>
          <ProjectTitle project={project} id={headingId} />
          <div className="mt-6">
            <ProjectDescription project={project} />
          </div>
        </Reveal>
        <Reveal className="flex flex-col gap-10" delay={200}>
          <ProjectScope project={project} />
          <ProjectMeta project={project} />
        </Reveal>
      </div>
    </article>
  );
}
