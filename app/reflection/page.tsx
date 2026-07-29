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
        <p>
          I have always viewed April 6th as a most interesting date in Church
          history, obviously attributable to the birth of Christ as given by
          D&amp;C 20:1, but also due to the organization of the Church of
          Christ. We are taught of the symbolism surrounding spiritual rebirth
          via baptism, but this correlation makes me think of the Church&rsquo;s
          nature in a similar manner. The reorganization represents an effort to
          refocus our lives and our intents on Jesus Christ through an organized
          body that aids us in that endeavor. As did Christ&rsquo;s birth pave
          the way for a new light upon the Earth, the events of April 6th, 1830
          usher into the world a new hope into the dispensation of the fullness
          of times. The date helps to strengthen my testimony in Jesus Christ
          and in His centrality in our faith.
        </p>

        <p>
          In like manner, the date reinforces my testimony in Joseph Smith as a
          true prophet of God. Of course, God trusted Joseph Smith enough to
          lead the Church into this last dispensation, but I feel like this
          overlap has really helped to solidify my conviction in D&amp;C 135:3,
          which states: &ldquo;Joseph Smith, the Prophet and Seer of the Lord,
          has done more, save Jesus only, for the salvation of men in this
          world, than any other man that ever lived in it.&rdquo; This milestone
          event in Joseph&rsquo;s prophetic journey seems to truly encapsulate
          his role in bringing to pass God&rsquo;s plan as it references direct
          relation to our Savior&rsquo;s birth.
        </p>

        <p>
          The fact that there have been so many other prominent events in Church
          history that have occurred on April 6th has served as a wonderful
          reminder to me of God constantly being present in the details of our
          lives. We are blessed to have many general conferences and even
          Easters occur on this date, which help to keep Jesus Christ and the
          Church&rsquo;s reorganization at the forefront of our minds. I am
          immensely appreciative to be a part of a Church that so frequently
          brings my thoughts back to the Savior, aiding me in being increasingly
          introspective and doing my best to exude the characteristics of Christ
          in all that I do.
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
