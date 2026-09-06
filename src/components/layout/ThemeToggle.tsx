"use client";

import { useCallback } from "react";

import { cn } from "@/lib/cn";

type Theme = "light" | "dark";

function readTheme(): Theme {
  const current = document.documentElement.getAttribute("data-theme");
  return current === "dark" ? "dark" : "light";
}

/**
 * Light/dark switch. The visible label is driven purely by CSS from the
 * `data-theme` attribute, so the server render never disagrees with the
 * client and there is no hydration mismatch.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const toggle = useCallback(() => {
    const next: Theme = readTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage may be unavailable; the attribute still applies */
    }
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "label group inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-ink",
        className,
      )}
      aria-label="Toggle colour theme"
    >
      <span
        aria-hidden="true"
        className="relative block size-2.5 border border-current before:absolute before:inset-0 before:origin-left before:scale-x-50 before:bg-current before:transition-transform before:duration-500 before:ease-[var(--ease-out-expo)] group-hover:before:scale-x-100 dark:before:origin-right"
      />
      <span className="dark:hidden">Dark</span>
      <span className="hidden dark:inline">Light</span>
    </button>
  );
}
