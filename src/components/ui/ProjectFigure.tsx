"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";

import type { ProjectImage } from "@/data/projects";
import { cn } from "@/lib/cn";

type ProjectFigureProps = {
  image: ProjectImage;
  /** Sizes hint for next/image, matching the layout the figure sits in. */
  sizes: string;
  /** Tailwind aspect-ratio class, e.g. "aspect-[16/10]". */
  aspectClassName: string;
  /** Text shown in the cursor-following tag on hover. */
  cursorLabel?: string;
  /** Preload the image when it is above the fold. */
  preload?: boolean;
  className?: string;
};

/**
 * Project imagery with three quiet effects: a slight parallax drift as
 * the figure passes through the viewport, a slow zoom on hover, and a
 * small label that follows a fine pointer. Touch devices get the
 * parallax only.
 */
export function ProjectFigure({
  image,
  sizes,
  aspectClassName,
  cursorLabel = "View",
  preload = false,
  className,
}: ProjectFigureProps) {
  const frame = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const tag = useRef<HTMLSpanElement>(null);
  const [hovering, setHovering] = useState(false);

  // Parallax: move the (slightly enlarged) image between -6% and 6% of
  // its height depending on where the figure is in the viewport.
  useEffect(() => {
    const el = frame.current;
    const img = inner.current;
    if (!el || !img) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let visible = false;

    const update = () => {
      raf = 0;
      if (!visible) return;
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      // -1 when the figure is just below the viewport, +1 when just above.
      const t = (rect.top + rect.height / 2 - viewport / 2) / (viewport / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, t));
      img.style.transform = `translate3d(0, ${(-clamped * 6).toFixed(2)}%, 0)`;
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        schedule();
      },
      { rootMargin: "10% 0px" },
    );

    observer.observe(el);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const onMove = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || !tag.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    tag.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  }, []);

  return (
    <div
      ref={frame}
      className={cn("relative overflow-hidden bg-bg-sunken", aspectClassName, className)}
      onPointerMove={onMove}
      onPointerEnter={(e) => e.pointerType === "mouse" && setHovering(true)}
      onPointerLeave={() => setHovering(false)}
    >
      <div ref={inner} className="absolute -inset-y-[8%] inset-x-0 will-change-transform">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          preload={preload}
          className={cn(
            "size-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-out-expo)]",
            hovering ? "scale-[1.04]" : "scale-100",
          )}
        />
      </div>
      {/* Subtle tint keeps placeholder photography from overpowering the type. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[var(--image-tint)] mix-blend-multiply"
      />
      <span
        ref={tag}
        aria-hidden="true"
        className={cn(
          "label pointer-events-none absolute left-0 top-0 hidden whitespace-nowrap bg-ink px-3 py-2 text-bg transition-opacity duration-300 lg:block",
          hovering ? "opacity-100" : "opacity-0",
        )}
      >
        {cursorLabel}
      </span>
    </div>
  );
}
