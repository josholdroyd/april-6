export type EventCategory =
  | "Church Founding"
  | "Missouri Persecution"
  | "Nauvoo Temple"
  | "Salt Lake Temple"
  | "St. George Temple"
  | "Priesthood & Callings"
  | "Modern Temples"
  | "Outside the Church"
  | "Interpretive";

export interface TimelineEvent {
  id: string;
  year: number; // negative for BC, e.g. -1 for 1 BC
  displayDate: string; // e.g. "April 6, 1830"
  title: string;
  description: string;
  category: EventCategory;
  isInterpretive?: boolean; // true for the disputed/interpreted birth-of-Christ entry
  sources: { label: string; url: string }[];
}

const WIKIPEDIA = {
  label: "April 6 (LDS Church) — Wikipedia",
  url: "https://en.wikipedia.org/wiki/April_6_(LDS_Church)",
};
const EOM = {
  label: "April 6 — Encyclopedia of Mormonism",
  url: "https://eom.byu.edu/index.php/April_6",
};
const UNIVERSE = {
  label: "April 6, an important date in LDS Church history — BYU Daily Universe",
  url: "https://universe.byu.edu/2002/04/04/april-6-an-important-date-in-lds-church-history/",
};
const EXPLAINED = {
  label: "April 6 (LDS Church) — Everything Explained",
  url: "https://everything.explained.today/April_6_(LDS_Church)/",
};
const CONFERENCE = {
  label: "The Sixth Day of April, 1830 — General Conference, April 1991",
  url: "https://www.churchofjesuschrist.org/study/general-conference/1991/04/the-sixth-day-of-april-1830?lang=eng",
};

export const events: TimelineEvent[] = [
  {
    id: "birth-of-christ",
    year: -1,
    displayDate: "April 6, 1 BC (interpreted)",
    title: "Interpreted birth date of Jesus Christ",
    description:
      'Doctrine and Covenants 20:1 describes the Church’s 1830 organization as occurring "one thousand eight hundred and thirty years since the coming of our Lord and Savior Jesus Christ in the flesh... on the sixth day of the month which is called April." Some have read this as Joseph Smith identifying April 6, 1 BC as Christ’s literal birthdate, a reading that is disputed, not settled doctrine.',
    category: "Interpretive",
    isInterpretive: true,
    sources: [EOM, CONFERENCE, WIKIPEDIA],
  },
  {
    id: "church-organized-1830",
    year: 1830,
    displayDate: "April 6, 1830",
    title: "Church of Christ organized",
    description:
      "The Church of Christ (later renamed The Church of Jesus Christ of Latter-day Saints) was legally organized in New York state, fulfilling the founding revelation recorded in D&C 20.",
    category: "Church Founding",
    sources: [CONFERENCE, EOM, WIKIPEDIA],
  },
  {
    id: "liberty-jail-1839",
    year: 1839,
    displayDate: "April 6, 1839",
    title: "Smiths transferred from Liberty Jail",
    description:
      "Joseph and Hyrum Smith were moved from Liberty Jail to Daviess County Jail in Gallatin, Missouri for a grand jury hearing. Nine days later, during a further transfer, guards allowed them to escape custody.",
    category: "Missouri Persecution",
    sources: [WIKIPEDIA, EXPLAINED],
  },
  {
    id: "nauvoo-cornerstones-1841",
    year: 1841,
    displayDate: "April 6, 1841",
    title: "Nauvoo Temple cornerstones laid",
    description:
      "Members gathered at the Nauvoo temple site as all four cornerstones were laid, each carried into place by a quorum presidency. Joseph Smith dedicated the cornerstones; Sidney Rigdon spoke.",
    category: "Nauvoo Temple",
    sources: [WIKIPEDIA, UNIVERSE],
  },
  {
    id: "slc-cornerstone-1853",
    year: 1853,
    displayDate: "April 6, 1853",
    title: "Salt Lake Temple cornerstone laid",
    description:
      "Brigham Young directed the cornerstone-laying at the Salt Lake Temple site (which he had marked back in July 1847, shortly after the Saints’ arrival in the valley).",
    category: "Salt Lake Temple",
    sources: [UNIVERSE, WIKIPEDIA],
  },
  {
    id: "st-george-1877",
    year: 1877,
    displayDate: "April 6, 1877",
    title: "St. George Temple dedicated",
    description:
      "The St. George Temple was completed and dedicated, the only temple finished during Brigham Young’s 30 years as Church President.",
    category: "St. George Temple",
    sources: [WIKIPEDIA, EOM],
  },
  {
    id: "slc-capstone-1892",
    year: 1892,
    displayDate: "April 6, 1892",
    title: "Salt Lake Temple capstone set",
    description:
      "Wilford Woodruff operated the switch setting the granite capstone atop the Salt Lake Temple’s main spire; the angel Moroni statue was installed the same day, completing the exterior. A time capsule sealed in the capstone wasn’t opened again for 128 years.",
    category: "Salt Lake Temple",
    sources: [WIKIPEDIA, UNIVERSE],
  },
  {
    id: "slc-dedicated-1893",
    year: 1893,
    displayDate: "April 6, 1893",
    title: "Salt Lake Temple dedicated",
    description:
      "Exactly 40 years after its cornerstone was laid, the Salt Lake Temple was dedicated by Wilford Woodruff, followed by 31 more dedicatory sessions over the next three weeks.",
    category: "Salt Lake Temple",
    sources: [UNIVERSE, WIKIPEDIA, EOM],
  },
  {
    id: "olympics-1896",
    year: 1896,
    displayDate: "April 6, 1896",
    title: "First modern Olympic Games open (Athens)",
    description:
      "Included for scale/context: a major world event that also happens to fall on April 6.",
    category: "Outside the Church",
    sources: [EXPLAINED],
  },
  {
    id: "north-pole-1909",
    year: 1909,
    displayDate: "April 6, 1909",
    title: "Peary expedition reaches the North Pole",
    description:
      "Included for scale/context, same rationale as above.",
    category: "Outside the Church",
    sources: [EXPLAINED],
  },
  {
    id: "assistants-to-twelve-1941",
    year: 1941,
    displayDate: "April 6, 1941",
    title: '"Assistant to the Twelve" calling established',
    description:
      "Five men were called to a new position, Assistant to the Quorum of the Twelve Apostles, tasked with reorganizing stakes, presiding at conferences, and touring missions worldwide. The calling was discontinued in 1976.",
    category: "Priesthood & Callings",
    sources: [WIKIPEDIA, EXPLAINED],
  },
  {
    id: "palmyra-2000",
    year: 2000,
    displayDate: "April 6, 2000",
    title: "Palmyra New York Temple dedicated",
    description:
      "Gordon B. Hinckley dedicated the Palmyra Temple on the Church’s 170th anniversary. It sits on the former Smith farm, near the Sacred Grove. Roughly 1.5 million members watched via broadcast.",
    category: "Modern Temples",
    sources: [WIKIPEDIA, EXPLAINED],
  },
];

export const categories: EventCategory[] = [
  "Interpretive",
  "Church Founding",
  "Missouri Persecution",
  "Nauvoo Temple",
  "Salt Lake Temple",
  "St. George Temple",
  "Priesthood & Callings",
  "Modern Temples",
  "Outside the Church",
];

/** Accent color per category, used for node dots, chips, and card rules. */
export const categoryColor: Record<EventCategory, string> = {
  "Church Founding": "#7a2e2a",
  "Missouri Persecution": "#5c4433",
  "Nauvoo Temple": "#8a6a2f",
  "Salt Lake Temple": "#2f3f56",
  "St. George Temple": "#4a6b58",
  "Priesthood & Callings": "#6b4a6b",
  "Modern Temples": "#33627a",
  "Outside the Church": "#8a8175",
  Interpretive: "#a67c34",
};

export const sources = [
  { label: "April 6 (LDS Church) — Wikipedia", url: "https://en.wikipedia.org/wiki/April_6_(LDS_Church)" },
  { label: "April 6 — Encyclopedia of Mormonism", url: "https://eom.byu.edu/index.php/April_6" },
  { label: "April 6, an important date in LDS Church history — BYU Daily Universe", url: "https://universe.byu.edu/2002/04/04/april-6-an-important-date-in-lds-church-history/" },
  { label: "April 6 (LDS Church) — Everything Explained", url: "https://everything.explained.today/April_6_(LDS_Church)/" },
  { label: "The Sixth Day of April, 1830 — General Conference, April 1991", url: "https://www.churchofjesuschrist.org/study/general-conference/1991/04/the-sixth-day-of-april-1830?lang=eng" },
];
