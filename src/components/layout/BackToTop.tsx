"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";

/**
 * Square "go up" button in the bottom-right corner. It appears when the
 * reader scrolls upward after passing the first screen, and hides again
 * while scrolling down so it never covers content they are reading.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const goingUp = y < lastY.current - 2;
      const pastFirstScreen = y > window.innerHeight * 0.8;
      setVisible(goingUp && pastFirstScreen);
      lastY.current = y;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <a
      href="#index"
      aria-label="Back to top"
      className={cn(
        "to-top group fixed bottom-5 right-5 z-40 flex size-12 items-center justify-center border border-line bg-bg/90 text-ink backdrop-blur-sm hover:border-ink hover:bg-ink hover:text-bg sm:bottom-8 sm:right-8 lg:right-20 xl:right-24",
        visible && "is-visible",
      )}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-0.5"
      >
        <path d="M8 14V2M8 2L3 7M8 2l5 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" />
      </svg>
    </a>
  );
}
