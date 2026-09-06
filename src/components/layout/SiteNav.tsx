"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { profile } from "@/data/profile";
import { navItems, sections, type SectionId } from "@/data/site";
import { cn } from "@/lib/cn";

/**
 * Sticky navigation in two parts:
 * - A slim top strip with the wordmark, a live section readout and the
 *   theme switch.
 * - On desktop, a vertical rail on the right edge listing every section
 *   by number, with the current one highlighted. On smaller screens the
 *   rail is replaced by a full-screen menu opened from the strip.
 */
export function SiteNav() {
  const [activeSection, setActiveSection] = useState<SectionId>("index");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

  // Track which section is in view: the section whose top edge was most
  // recently crossed by a line 40% down the viewport.
  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const marker = window.innerHeight * 0.4;
      let current: SectionId = sections[0].id;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= marker) current = el.id as SectionId;
      }
      // At the very bottom, the last section always wins.
      const doc = document.documentElement;
      if (window.scrollY + window.innerHeight >= doc.scrollHeight - 2) {
        current = sections[sections.length - 1].id;
      }
      setActiveSection((previous) => (previous === current ? previous : current));
      setScrolled(window.scrollY > 24);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Menu overlay: lock scroll, move focus in, close on escape.
  useEffect(() => {
    if (!open) return;
    const trigger = menuButton.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLink.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  const current = sections.find((s) => s.id === activeSection) ?? sections[0];
  const total = String(sections.length).padStart(2, "0");

  return (
    <>
      <a
        href="#index"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-ink focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>

      {/* Top strip */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-500",
          scrolled ? "border-b border-line bg-bg/85 backdrop-blur-sm" : "border-b border-transparent",
        )}
      >
        <div className="mx-auto flex h-14 w-full max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <a
            href="#index"
            className="label-lg text-ink transition-colors hover:text-accent"
            aria-label={`${profile.fullName}, back to top`}
          >
            <span className="hidden sm:inline">{profile.fullName}</span>
            <span className="sm:hidden">
              {profile.firstName[0]}
              {profile.lastName[0]}
            </span>
          </a>

          <div className="flex items-center gap-6 sm:gap-8">
            <p className="label hidden items-baseline gap-3 text-ink-muted md:flex" aria-live="polite">
              <span className="text-accent">{current.number}</span>
              <span>{current.label}</span>
              <span className="text-ink-faint">/ {total}</span>
            </p>
            <ThemeToggle className="hidden lg:inline-flex" />
            <button
              ref={menuButton}
              type="button"
              className="label inline-flex items-center gap-3 text-ink lg:hidden"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="text-ink-faint md:hidden">
                {current.number}/{total}
              </span>
              <span>{open ? "Close" : "Menu"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Desktop rail: every section, current one highlighted */}
      <nav
        aria-label="Sections"
        className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block xl:right-6"
      >
        <ol className="flex flex-col items-end gap-3">
          {navItems.map((item) => {
            const isActive = item.id === activeSection;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className="group flex items-center gap-3 py-1"
                >
                  <span
                    className={cn(
                      "label whitespace-nowrap transition-[opacity,transform,color] duration-500 ease-[var(--ease-out-expo)]",
                      isActive
                        ? "translate-x-0 text-ink opacity-100"
                        : "translate-x-2 text-ink-muted opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 xl:translate-x-0 xl:opacity-100",
                    )}
                  >
                    {item.label}
                  </span>
                  <span
                    className={cn(
                      "label w-5 text-right tabular-nums transition-colors duration-300",
                      isActive ? "text-accent" : "text-ink-faint group-hover:text-ink",
                    )}
                  >
                    {item.number}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "block h-px transition-[width,background-color] duration-500 ease-[var(--ease-out-expo)]",
                      isActive ? "w-8 bg-accent" : "w-3 bg-ink-faint group-hover:w-5 group-hover:bg-ink",
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Mobile / tablet menu */}
      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
        className={cn(
          "fixed inset-0 z-30 flex-col overflow-y-auto bg-bg px-5 pb-8 pt-20 sm:px-8 lg:hidden",
          open ? "flex" : "hidden",
        )}
      >
        <nav aria-label="Sections" className="flex-1">
          <ol className="flex flex-col border-t border-line">
            {navItems.map((item, index) => {
              const isActive = item.id === activeSection;
              return (
                <li key={item.id} className="border-b border-line">
                  <a
                    ref={index === 0 ? firstLink : undefined}
                    href={`#${item.id}`}
                    onClick={close}
                    aria-current={isActive ? "location" : undefined}
                    className="flex items-center gap-5 py-4"
                  >
                    <span className={cn("label w-6", isActive ? "text-accent" : "text-ink-faint")}>
                      {item.number}
                    </span>
                    <span className={cn("text-2xl font-medium tracking-tight sm:text-3xl", isActive ? "text-ink" : "text-ink-muted")}>
                      {item.label}
                    </span>
                    {isActive ? (
                      <span aria-hidden="true" className="ml-auto block h-px w-8 bg-accent" />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="mt-8 flex items-end justify-between gap-6">
          <div className="flex min-w-0 flex-col gap-2">
            <span className="label text-ink-faint">Email</span>
            <a
              href={`mailto:${profile.contact.email}`}
              className="link-draw truncate text-base text-ink"
              onClick={close}
            >
              {profile.contact.email}
            </a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
