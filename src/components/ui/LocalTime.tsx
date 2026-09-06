"use client";

import { useEffect, useState } from "react";

type LocalTimeProps = {
  /** IANA time zone, e.g. "Asia/Manila". */
  timeZone: string;
  className?: string;
};

/**
 * Renders the current time in the given zone, updating each minute.
 * Renders nothing on the server so the markup never mismatches.
 */
export function LocalTime({ timeZone, className }: LocalTimeProps) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone,
    });

    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return (
    <span className={className} suppressHydrationWarning>
      {time ?? "--:--"}
    </span>
  );
}
