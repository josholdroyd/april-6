import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why April 6? — The Sixth of April",
  description: "A personal reflection on the recurrence of April 6.",
};

export default function ReflectionPage() {
  return (
    <article className="mx-auto w-full max-w-[46rem] px-6 py-16">
      <p className="text-[11px] uppercase tracking-[0.2em] text-ink-faint">
        Reflection
      </p>
      <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-[2.75rem]">
        Why April 6?
      </h1>
      <p className="mt-4 font-serif text-lg italic leading-relaxed text-ink-faint">
        On coincidence, pattern, and the difference between them.
      </p>

      <hr className="my-10 border-parchment-edge" />

      <div className="max-w-[70ch] space-y-6 font-serif text-[18px] leading-[1.8] text-ink-soft [&>p]:max-w-[70ch]">
        {/* TODO(Josh): Replace this with your own paragraphs on the significance of April 6.
            Suggested structure: (1) what initially caught your interest, (2) which
            recurrence surprised you most and why, (3) your take on the disputed
            Christ-birthdate reading, (4) what this pattern means to you personally. */}
        <p className="italic text-ink-faint">
          [Write your reflection here — see TODO comment in source.]
        </p>
      </div>

      <hr className="my-12 border-parchment-edge" />

      <p className="text-sm leading-relaxed text-ink-faint">
        The historical entries referenced here are listed with their citations
        on the{" "}
        <a
          href="/"
          className="underline decoration-parchment-edge underline-offset-4 hover:text-oxblood hover:decoration-oxblood"
        >
          timeline
        </a>
        , and the full source list appears in the footer of every page.
      </p>
    </article>
  );
}
