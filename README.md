# The Sixth of April

An interactive timeline exploring why April 6 recurs so often in the history of
The Church of Jesus Christ of Latter-day Saints, paired with a personal essay page.

Built with Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.
All data is static — no database, no API keys, no environment variables.

## Routes

| Route         | What it is                                                        |
| ------------- | ----------------------------------------------------------------- |
| `/`           | Interactive timeline of all 12 events, with category filters       |
| `/reflection` | Personal essay page (placeholder awaiting your paragraphs)         |

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build
npm start       # serve the production build
```

## Where things live

- `lib/events.ts` — the entire dataset: the 12 events, category list, category
  accent colors, and the 9 footer sources. Edit event copy here.
- `components/Timeline.tsx` — layout math and the two views (horizontal thread
  on desktop, vertical rail on mobile).
- `components/EventCard.tsx` — a single event card and its expand behavior.
- `app/reflection/page.tsx` — **the essay placeholder.** Look for
  `TODO(Josh)` and replace the italic placeholder paragraph with your own.
- `tailwind.config.ts` — the parchment/ink palette.

## The timeline's scale problem

The dataset spans 1 BC to 2000 AD, but 11 of 12 events fall between 1830 and 2000.
Two things keep it readable:

1. **A broken axis.** The 1 BC entry sits on the far side of an explicit
   `⋯ about 1,830 years ⋯` gap marker, so the compression is visible rather than
   silently misleading.
2. **A scale toggle** (desktop, top right). *By year* spaces the modern events
   proportionally, except that years too close together to read (1892/1893) are
   nudged to a minimum gap. *Even* gives every event identical spacing.

The 1 BC entry is also styled apart — dashed border, brass "Disputed" badge —
because it is an interpretation of D&C 20:1, not settled doctrine.

## Deploy to Vercel

Zero config required.

**Via CLI:**

```bash
npm i -g vercel
vercel        # preview deployment
vercel --prod # production
```

**Via GitHub:** push this repo to GitHub, then import it at
[vercel.com/new](https://vercel.com/new). Vercel detects Next.js automatically;
accept the defaults and deploy. No environment variables to set.
