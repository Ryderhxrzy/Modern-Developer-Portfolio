"use client";

import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { spectrum } from "@/data/capabilities";
import { sections } from "@/data/site";
import { cn } from "@/lib/cn";

const section = sections[3];
const stageCount = spectrum.length;

const clamp = (value: number) => Math.min(1, Math.max(0, value));

/**
 * 04 — Development Spectrum. A scroll-driven pipeline:
 * on desktop the section pins for a few viewports while a hairline fills
 * from IDEA to PRODUCTION and the current stage is set in oversized type;
 * on smaller screens the same stages run vertically alongside a line
 * that fills as you read.
 */
export function Spectrum() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const horizontalFill = useRef<HTMLSpanElement>(null);
  const verticalFill = useRef<HTMLSpanElement>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const desktop = window.matchMedia("(min-width: 1024px)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      let progress = 0;

      if (desktop.matches) {
        const rect = el.getBoundingClientRect();
        const travel = el.offsetHeight - viewport;
        progress = travel > 0 ? clamp(-rect.top / travel) : 1;
      } else if (listRef.current) {
        const rect = listRef.current.getBoundingClientRect();
        progress = clamp((viewport * 0.6 - rect.top) / rect.height);
      }

      const index = Math.round(progress * (stageCount - 1));

      if (horizontalFill.current) {
        // Ticks sit at the left edge of each of the 8 columns, so the last
        // tick is at 7/8 of the track width.
        const fraction = (progress * (stageCount - 1)) / stageCount;
        horizontalFill.current.style.transform = `scaleX(${fraction})`;
      }

      if (verticalFill.current) {
        const item = itemRefs.current[index];
        if (item) verticalFill.current.style.height = `${item.offsetTop + 10}px`;
      }

      setActive((previous) => (previous === index ? previous : index));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const stage = spectrum[active];

  return (
    <section
      ref={sectionRef}
      id={section.id}
      aria-labelledby="spectrum-heading"
      className="relative mt-16 sm:mt-20 lg:mt-24 lg:h-[220vh]"
    >
      <div className="lg:sticky lg:top-0 lg:flex lg:h-svh lg:flex-col">
        <Container className="flex flex-1 flex-col pt-0 lg:pt-20">
          <SectionHeader
            section={section}
            meta={`Stage ${String(active + 1).padStart(2, "0")} / ${String(stageCount).padStart(2, "0")}`}
          />

          <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-14 lg:grid-cols-12">
            <h2 id="spectrum-heading" className="display-md text-ink lg:col-span-6">
              From idea{" "}
              <span className="serif-italic text-ink-muted">to live product.</span>
            </h2>
            <p className="max-w-[40ch] text-base leading-relaxed text-ink-muted lg:col-span-4 lg:col-start-9 lg:self-end">
              I can handle every step below, so nothing waits on another team. Keep scrolling
              to move through the pipeline.
            </p>
          </div>

          {/* Desktop: oversized readout + horizontal track */}
          <div className="mt-auto hidden pb-16 lg:block">
            <div className="flex items-end justify-between gap-8">
              <div className="min-h-[1.1em]">
                <p aria-hidden="true" className="label text-ink-faint">
                  Current stage
                </p>
                <p aria-hidden="true" className="display-xl mt-3 uppercase text-ink">
                  <span key={stage.id} className="stage-in block">
                    {stage.label}
                  </span>
                </p>
              </div>
              <p aria-hidden="true" className="label max-w-[28ch] pb-3 text-right text-ink-muted">
                <span key={`${stage.id}-note`} className="stage-in block">
                  {stage.note}
                </span>
              </p>
            </div>

            <div className="relative mt-12">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-line" />
              <span
                ref={horizontalFill}
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent"
              />
              <ol className="grid grid-cols-8" aria-label="Delivery pipeline">
                {spectrum.map((item, index) => {
                  const state = index < active ? "past" : index === active ? "active" : "future";
                  return (
                    <li
                      key={item.id}
                      aria-current={state === "active" ? "step" : undefined}
                      className="relative pt-5"
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute left-0 top-0 block h-3 w-px transition-colors duration-500",
                          state === "future" ? "bg-line" : "bg-accent",
                        )}
                      />
                      <span
                        className={cn(
                          "label block transition-colors duration-500",
                          state === "active" && "text-ink",
                          state === "past" && "text-ink-muted",
                          state === "future" && "text-ink-faint",
                        )}
                      >
                        <span className="mr-2 text-ink-faint">{String(index + 1).padStart(2, "0")}</span>
                        {item.label}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          {/* Mobile and tablet: vertical track */}
          <div className="relative mt-14 lg:hidden">
            <span aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-px bg-line" />
            <span
              ref={verticalFill}
              aria-hidden="true"
              className="absolute left-0 top-0 h-0 w-px bg-accent transition-[height] duration-500 ease-[var(--ease-out-expo)]"
            />
            <ol ref={listRef} className="flex flex-col" aria-label="Delivery pipeline">
              {spectrum.map((item, index) => {
                const state = index < active ? "past" : index === active ? "active" : "future";
                return (
                  <li
                    key={item.id}
                    ref={(node) => {
                      itemRefs.current[index] = node;
                    }}
                    aria-current={state === "active" ? "step" : undefined}
                    className="relative flex flex-col gap-1 py-4 pl-8 sm:flex-row sm:items-baseline sm:gap-8 sm:py-5"
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute left-0 top-[1.55rem] block h-px w-4 transition-colors duration-500 sm:top-[1.8rem]",
                        state === "future" ? "bg-line" : "bg-accent",
                      )}
                    />
                    <span
                      className={cn(
                        "display-sm w-full uppercase transition-colors duration-500 sm:w-1/2",
                        state === "active" && "text-ink",
                        state === "past" && "text-ink-muted",
                        state === "future" && "text-ink-faint",
                      )}
                    >
                      <span className="label mr-3 align-middle text-ink-faint">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </span>
                    <span
                      className={cn(
                        "label transition-colors duration-500",
                        state === "active" ? "text-ink-muted" : "text-ink-faint",
                      )}
                    >
                      {item.note}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </Container>
      </div>
    </section>
  );
}
