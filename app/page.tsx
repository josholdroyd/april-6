import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div className="py-12">
      <section className="mx-auto w-full max-w-6xl px-6">
        <p className="text-[11px] uppercase tracking-[0.2em] text-ink-faint">
          An interactive timeline
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
          One date, returned to again and again
        </h1>
        <p className="mt-5 max-w-[65ch] font-serif text-[17px] leading-[1.7] text-ink-soft">
          The sixth of April recurs across the history of The Church of Jesus
          Christ of Latter-day Saints with a odd persistence that is hard to classify as
          anything other than divine. There are twelve entries below, from a disputed
          reading of D&amp;C 20:1 to a temple dedicated on the Church&rsquo;s
          170th anniversary.
        </p>
      </section>

      <section className="mt-12">
        <Timeline />
      </section>
    </div>
  );
}
