import { Reveal } from "@/components/ui/Reveal";
import type { Section } from "@/data/site";
import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  section: Section;
  /** Optional right-aligned annotation, e.g. a count. */
  meta?: string;
  className?: string;
};

/**
 * Index-style section marker: a drawn rule with the section number,
 * label and an optional annotation. Shared by every section so the
 * whole page reads as one document.
 */
export function SectionHeader({ section, meta, className }: SectionHeaderProps) {
  return (
    <div className={cn("relative", className)}>
      <Reveal variant="rule" className="h-px w-full bg-line-strong" />
      <Reveal className="flex items-baseline gap-4 pt-3 sm:gap-6" delay={120}>
        <span className="label text-accent">{section.number}</span>
        <span className="label text-ink">{section.label}</span>
        {meta ? <span className="label ml-auto text-ink-faint">{meta}</span> : null}
      </Reveal>
    </div>
  );
}
