import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { sources } from "@/lib/events";
import NavLinks from "@/components/NavLinks";

const serif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "The Sixth of April",
  description:
    "An interactive timeline of why April 6 recurs so often in the history of The Church of Jesus Christ of Latter-day Saints.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <header className="border-b rule">
          <div className="mx-auto w-full max-w-6xl px-6 py-5 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
            <Link href="/" className="group">
              <span className="block font-serif text-2xl tracking-tight text-ink">
                The Sixth of April
              </span>
              <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                A recurring date
              </span>
            </Link>
            <NavLinks />
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mt-20 border-t rule bg-parchment-deep/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-10">
            <h2 className="font-serif text-lg text-ink">Sources</h2>
            <ol className="mt-4 space-y-2 text-sm text-ink-soft">
              {sources.map((s, i) => (
                <li key={s.url} className="flex gap-3">
                  <span className="tabular-nums text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-parchment-edge underline-offset-4 hover:decoration-oxblood hover:text-oxblood transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-xs text-ink-faint">
              A student project for RELC 225. Historical entries are drawn from
              the sources above; the 1&nbsp;BC entry is an interpretation, not
              settled doctrine.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
