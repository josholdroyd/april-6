"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  categories,
  categoryColor,
  events,
  type EventCategory,
  type TimelineEvent,
} from "@/lib/events";
import EventCard from "./EventCard";

/* ------------------------------------------------------------------ *
 * Layout constants for the horizontal (desktop) thread.
 * ------------------------------------------------------------------ */
const PX_PER_YEAR = 17; // proportional scale for the 1830–2000 span
const MIN_GAP = 176; // nudge apart years too close to read (1892/1893)
const EVEN_GAP = 232; // gap used by the "even spacing" view
const CARD_W = 320;
const LEAD = CARD_W / 2 + 24; // room for the first card's left half
const BREAK_W = 232; // width of the compressed-axis gap marker
const LANE_H = 960; // total track height; axis runs down the middle
const STEM = 34; // gap between the axis and a card edge

/** Events before the modern era sit on the far side of the axis break. */
const isAncient = (e: TimelineEvent) => e.year < 1800;

type ScaleMode = "proportional" | "even";

interface Placed {
  event: TimelineEvent;
  x: number;
  /** Cards alternate sides so neighbours never collide. */
  side: "above" | "below";
}

function layout(mode: ScaleMode): { placed: Placed[]; breakAt: number; width: number } {
  const ordered = [...events].sort((a, b) => a.year - b.year);
  const ancient = ordered.filter(isAncient);
  const modern = ordered.filter((e) => !isAncient(e));

  let cursor = LEAD;
  const placed: Placed[] = [];

  ancient.forEach((event, i) => {
    placed.push({ event, x: cursor, side: i % 2 === 0 ? "above" : "below" });
    cursor += CARD_W / 2;
  });

  const breakAt = cursor + BREAK_W / 2;
  cursor += BREAK_W + CARD_W / 2;

  const base = modern[0]?.year ?? 0;
  let prevX = -Infinity;

  modern.forEach((event, i) => {
    const x =
      mode === "even"
        ? cursor + i * EVEN_GAP
        : Math.max(
            prevX + MIN_GAP,
            cursor + (event.year - base) * PX_PER_YEAR,
          );
    prevX = x;
    placed.push({
      event,
      x,
      // Continue the alternation across the break so the pattern reads as one thread.
      side: (ancient.length + i) % 2 === 0 ? "above" : "below",
    });
  });

  const width = (placed[placed.length - 1]?.x ?? 0) + CARD_W / 2 + 48;
  return { placed, breakAt, width };
}

export default function Timeline() {
  const [active, setActive] = useState<Set<EventCategory>>(new Set());
  const [mode, setMode] = useState<ScaleMode>("proportional");
  const [expanded, setExpanded] = useState<string | null>(null);

  const { placed, breakAt, width } = useMemo(() => layout(mode), [mode]);
  const ordered = useMemo(
    () => [...events].sort((a, b) => a.year - b.year),
    [],
  );

  const isDimmed = (e: TimelineEvent) =>
    active.size > 0 && !active.has(e.category);

  const toggleCategory = (c: EventCategory) =>
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });

  const toggleEvent = (id: string) =>
    setExpanded((prev) => (prev === id ? null : id));

  const matchCount = active.size
    ? events.filter((e) => active.has(e.category)).length
    : events.length;

  return (
    <div>
      {/* ---------------- Controls ---------------- */}
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b rule pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setActive(new Set())}
              aria-pressed={active.size === 0}
              className={
                "rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.1em] transition-colors " +
                (active.size === 0
                  ? "border-ink bg-ink text-parchment"
                  : "border-parchment-edge text-ink-faint hover:border-ink-faint hover:text-ink")
              }
            >
              All
            </button>
            {categories.map((c) => {
              const on = active.has(c);
              const accent = categoryColor[c];
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => toggleCategory(c)}
                  aria-pressed={on}
                  className="rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.1em] transition-colors"
                  style={
                    on
                      ? { backgroundColor: accent, borderColor: accent, color: "#f4efe4" }
                      : { borderColor: `${accent}55`, color: accent }
                  }
                >
                  {c}
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.1em] text-ink-faint">
              Scale
            </span>
            <div className="flex rounded-full border border-parchment-edge p-[2px]">
              {(["proportional", "even"] as ScaleMode[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  aria-pressed={mode === m}
                  className={
                    "rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.1em] transition-colors " +
                    (mode === m
                      ? "bg-ink text-parchment"
                      : "text-ink-faint hover:text-ink")
                  }
                >
                  {m === "proportional" ? "By year" : "Even"}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-3 text-xs text-ink-faint">
          {active.size > 0 ? (
            <>
              Showing {matchCount} of {events.length} entries.{" "}
              <button
                type="button"
                onClick={() => setActive(new Set())}
                className="underline underline-offset-2 hover:text-ink"
              >
                Clear filters
              </button>
            </>
          ) : (
            <>
              Select a card to read the full entry and its sources.
              <span className="hidden lg:inline">
                {" "}
                The axis is broken between 1&nbsp;BC and 1830; in “by year” view
                spacing is proportional except where crowded years are nudged
                apart to stay legible.
              </span>
            </>
          )}
        </p>
      </div>

      {/* ---------------- Horizontal thread (desktop) ---------------- */}
      <div className="mt-8 hidden lg:block">
        <div className="thread-scroll overflow-x-auto overflow-y-hidden pb-4">
          <div className="relative" style={{ width, height: LANE_H }}>
            {/* The thread itself */}
            <div
              className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-parchment-edge"
              aria-hidden
            />

            {/* Broken-axis marker */}
            <div
              className="absolute top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
              style={{ left: breakAt }}
              aria-hidden
            >
              <div className="h-16 w-px border-l border-dashed border-parchment-edge" />
              <div className="my-2 whitespace-nowrap rounded-full border border-dashed border-parchment-edge bg-parchment px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-ink-faint">
                ⋯ about 1,830 years ⋯
              </div>
              <div className="h-16 w-px border-l border-dashed border-parchment-edge" />
            </div>

            {placed.map(({ event, x, side }, i) => {
              const dimmed = isDimmed(event);
              const accent = categoryColor[event.category];
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: side === "above" ? 12 : -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.6) }}
                  className="absolute top-0"
                  style={{ left: x, height: LANE_H, width: 0 }}
                >
                  {/* Stem from the thread out to the card */}
                  <div
                    className="absolute left-0 w-px -translate-x-1/2 bg-parchment-edge"
                    style={{
                      height: STEM,
                      top: side === "above" ? LANE_H / 2 - STEM : LANE_H / 2,
                    }}
                    aria-hidden
                  />
                  {/* Node on the thread */}
                  <div
                    className={
                      "absolute left-0 h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-300 " +
                      (dimmed ? "opacity-25" : "opacity-100") +
                      (event.isInterpretive ? " ring-2 ring-brass/40" : "")
                    }
                    style={{ backgroundColor: accent, top: LANE_H / 2 }}
                    aria-hidden
                  />
                  {/* Card */}
                  <div
                    className="absolute left-0 -translate-x-1/2"
                    style={{
                      width: CARD_W,
                      ...(side === "above"
                        ? { bottom: LANE_H / 2 + STEM }
                        : { top: LANE_H / 2 + STEM }),
                    }}
                  >
                    <EventCard
                      event={event}
                      expanded={expanded === event.id}
                      dimmed={dimmed}
                      onToggle={() => toggleEvent(event.id)}
                      orientation="horizontal"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <p className="mx-auto mt-2 w-full max-w-6xl px-6 text-[11px] uppercase tracking-[0.12em] text-ink-faint">
          Scroll horizontally →
        </p>
      </div>

      {/* ---------------- Vertical stack (mobile / tablet) ---------------- */}
      <div className="mt-8 lg:hidden">
        <div className="mx-auto w-full max-w-2xl px-6">
          <ol className="relative space-y-6 border-l border-parchment-edge pl-7">
            {ordered.map((event, i) => {
              const dimmed = isDimmed(event);
              const accent = categoryColor[event.category];
              const prev = ordered[i - 1];
              const crossesBreak = prev && isAncient(prev) && !isAncient(event);

              return (
                <li key={event.id} className="relative">
                  {crossesBreak && (
                    <div className="relative -ml-7 mb-6 pl-7" aria-hidden>
                      <div className="inline-block rounded-full border border-dashed border-parchment-edge bg-parchment px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-ink-faint">
                        ⋯ about 1,830 years ⋯
                      </div>
                    </div>
                  )}
                  <span
                    className={
                      "absolute -left-[33px] top-5 h-[9px] w-[9px] rounded-full transition-opacity duration-300 " +
                      (dimmed ? "opacity-25" : "opacity-100") +
                      (event.isInterpretive ? " ring-2 ring-brass/40" : "")
                    }
                    style={{ backgroundColor: accent }}
                    aria-hidden
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.35 }}
                  >
                    <EventCard
                      event={event}
                      expanded={expanded === event.id}
                      dimmed={dimmed}
                      onToggle={() => toggleEvent(event.id)}
                      orientation="vertical"
                    />
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
