type TickerProps = {
  items: readonly string[];
  className?: string;
};

/**
 * A slow, hairline-bounded strip of words. The list is duplicated so
 * the CSS animation can loop seamlessly at -50%.
 */
export function Ticker({ items, className }: TickerProps) {
  const sequence = [...items, ...items];

  return (
    <div
      className={`ticker overflow-hidden border-y border-line py-4 ${className ?? ""}`}
      aria-label={items.join(", ")}
    >
      <div className="ticker-track flex w-max items-center" aria-hidden="true">
        {sequence.map((item, index) => (
          <span key={`${item}-${index}`} className="label-lg flex items-center text-ink">
            <span className="px-6 sm:px-8">{item}</span>
            <span className="block size-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
