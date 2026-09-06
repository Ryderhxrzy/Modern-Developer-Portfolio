"use client";

import { useEffect, useState } from "react";

import { profile } from "@/data/profile";

/**
 * Opening wipe shown once per browser session. The panel is rendered
 * server-side so it covers the page from the first frame; a bootstrap
 * script in the root layout hides it on repeat visits, and it removes
 * itself from the DOM after the animation finishes.
 */
export function IntroCurtain() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    try {
      sessionStorage.setItem("curtain-seen", "1");
    } catch {
      /* ignore */
    }
    const id = window.setTimeout(() => setDone(true), 2200);
    return () => window.clearTimeout(id);
  }, []);

  if (done) return null;

  return (
    <div className="curtain" aria-hidden="true">
      <span className="label">{profile.fullName}</span>
      <span className="label">Portfolio</span>
    </div>
  );
}
