"use client";

import { AnimatePresence, motion } from "framer-motion";
import { categoryColor, type TimelineEvent } from "@/lib/events";

interface Props {
  event: TimelineEvent;
  expanded: boolean;
  dimmed: boolean;
  onToggle: () => void;
  /** Horizontal cards are height-capped so they can't overrun the thread lane. */
  orientation: "horizontal" | "vertical";
}

export default function EventCard({
  event,
  expanded,
  dimmed,
  onToggle,
  orientation,
}: Props) {
  const accent = categoryColor[event.category];
  const interpretive = Boolean(event.isInterpretive);
  const panelId = `${event.id}-detail`;

  return (
    <article
      className={
        "rounded-sm bg-parchment/95 shadow-card transition-opacity duration-300 " +
        (interpretive
          ? "border border-dashed border-brass/70 "
          : "border border-parchment-edge ") +
        (dimmed ? "opacity-25" : "opacity-100")
      }
    >
      <div
        className="h-[3px] w-full rounded-t-sm"
        style={{ backgroundColor: accent }}
        aria-hidden
      />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={panelId}
        disabled={dimmed}
        className="block w-full px-4 pt-3 pb-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-inset"
      >
        <span className="flex items-start justify-between gap-2">
          <span className="text-[11px] uppercase tracking-[0.14em] text-ink-faint tabular-nums">
            {event.displayDate}
          </span>
          <span
            aria-hidden
            className={
              "mt-[1px] shrink-0 leading-none text-ink-faint transition-transform duration-200 " +
              (expanded ? "rotate-45" : "")
            }
          >
            +
          </span>
        </span>

        <span className="mt-1.5 block font-serif text-[17px] leading-snug text-ink">
          {event.title}
        </span>

        <span className="mt-2.5 flex flex-wrap items-center gap-1.5">
          <span
            className="inline-block rounded-full px-2 py-[3px] text-[10px] uppercase tracking-[0.1em]"
            style={{
              color: accent,
              backgroundColor: `${accent}14`,
              border: `1px solid ${accent}33`,
            }}
          >
            {event.category}
          </span>
          {interpretive && (
            <span className="inline-block rounded-full border border-dashed border-brass px-2 py-[3px] text-[10px] uppercase tracking-[0.1em] text-brass">
              Disputed
            </span>
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="detail"
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div
              className={
                "mx-4 mb-4 border-t border-parchment-edge pt-3 " +
                (orientation === "horizontal"
                  ? "max-h-[290px] overflow-y-auto pr-1"
                  : "")
              }
            >
              <p className="font-serif text-[13.5px] leading-[1.65] text-ink-soft">
                {event.description}
              </p>

              <p className="mt-3 text-[10px] uppercase tracking-[0.14em] text-ink-faint">
                Sources
              </p>
              <ul className="mt-1.5 space-y-1">
                {event.sources.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12px] leading-snug text-indigo_ink underline decoration-parchment-edge underline-offset-2 hover:decoration-indigo_ink"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
