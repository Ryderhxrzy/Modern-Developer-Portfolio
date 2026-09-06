"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

import { cn } from "@/lib/cn";

type RevealProps = {
  children?: ReactNode;
  /** Element rendered. Defaults to a div. */
  as?: ElementType;
  className?: string;
  /** Delay in milliseconds, useful for staggering siblings. */
  delay?: number;
  /**
   * Variant of the reveal:
   * - "fade": fade and rise (default)
   * - "rule": horizontal line drawing in from the left
   * - "lines": container for masked `.line-reveal` children
   */
  variant?: "fade" | "rule" | "lines";
  /** Fraction of the element that must be visible before it reveals. */
  threshold?: number;
  id?: string;
  style?: CSSProperties;
  /**
   * Name of a CSS custom property whose duration is added to `delay`.
   * The intro uses this to wait for the opening curtain on first visit.
   */
  delayVar?: string;
};

function delayValue(delay: number, delayVar?: string): string {
  return delayVar ? `calc(var(${delayVar}, 0ms) + ${delay}ms)` : `${delay}ms`;
}

/**
 * Reveals its content when scrolled into view. Uses a single
 * IntersectionObserver per element and reveals once. Reduced-motion
 * users see the content immediately via CSS.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  variant = "fade",
  threshold = 0.15,
  id,
  style,
  delayVar,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const variantClass =
    variant === "rule" ? "rule-draw" : variant === "lines" ? "reveal-lines" : "reveal";

  return (
    <Tag
      ref={ref}
      id={id}
      className={cn(variantClass, className)}
      style={{ ...style, "--reveal-delay": delayValue(delay, delayVar) } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/** A single masked line for use inside `<Reveal variant="lines">`. */
export function RevealLine({
  children,
  delay = 0,
  className,
  delayVar,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  delayVar?: string;
}) {
  return (
    <span className={cn("line-reveal", className)}>
      <span style={{ "--reveal-delay": delayValue(delay, delayVar) } as CSSProperties}>
        {children}
      </span>
    </span>
  );
}

type RevealWordsProps = {
  /** Plain text; each word animates in on its own. */
  text: string;
  /** Optional trailing phrase set in italic serif and muted ink. */
  accent?: string;
  /** Delay before the first word, in milliseconds. */
  delay?: number;
  /** Gap between words, in milliseconds. */
  stagger?: number;
};

/**
 * Word-by-word masked reveal for headings. Place inside
 * `<Reveal variant="lines">` so the words animate when that wrapper
 * becomes visible.
 */
export function RevealWords({ text, accent, delay = 0, stagger = 45 }: RevealWordsProps) {
  const words = text.trim().split(/\s+/);
  const accentWords = accent ? accent.trim().split(/\s+/) : [];

  return (
    <>
      {words.map((word, index) => (
        <span key={`w-${index}`}>
          <span className="word-reveal">
            <span style={{ "--reveal-delay": `${delay + index * stagger}ms` } as CSSProperties}>
              {word}
            </span>
          </span>{" "}
        </span>
      ))}
      {accentWords.map((word, index) => (
        <span key={`a-${index}`}>
          <span className="word-reveal">
            <span
              className="serif-italic text-ink-muted"
              style={{ "--reveal-delay": `${delay + (words.length + index) * stagger}ms` } as CSSProperties}
            >
              {word}
            </span>
          </span>{" "}
        </span>
      ))}
    </>
  );
}
