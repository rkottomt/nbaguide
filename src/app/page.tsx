import Link from "next/link";
import { HeroScroll } from "@/components/HeroScroll";

const sections = [
  {
    href: "/learn",
    title: "Learn the Basics",
    description: "Positions, conferences, season structure, and awards explained.",
    emoji: "📚",
  },
  {
    href: "/standings",
    title: "2025-26 Standings",
    description: "Full regular season records for all 30 teams, East and West.",
    emoji: "📊",
  },
  {
    href: "/teams/east",
    title: "Eastern Conference",
    description: "All 15 East teams ranked by seed — best to worst.",
    emoji: "🌊",
  },
  {
    href: "/teams/west",
    title: "Western Conference",
    description: "All 15 West teams ranked by seed — best to worst.",
    emoji: "🔥",
  },
  {
    href: "/rankings",
    title: "Top 5 by Position",
    description: "The best PG, SG, SF, PF, and C in the league right now.",
    emoji: "🏆",
  },
  {
    href: "/history",
    title: "Season History",
    description: "MVPs, DPOYs, and Finals results from 2016-17 to 2025-26.",
    emoji: "📜",
  },
];

export default function HomePage() {
  return (
    <div>
      <HeroScroll />

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-8">
        <div className="mb-10 text-center">
          <p className="liquid liquid-sm inline-block text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-3">
            Explore
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white section-title">
            Pick your path
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group glass glass-hover p-6 block"
            >
              <span className="text-4xl">{section.emoji}</span>
              <h2 className="mt-4 text-xl font-black text-white group-hover:text-orange-300 transition-colors">
                {section.title}
              </h2>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                {section.description}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-orange-400 group-hover:underline">
                Explore →
              </span>
            </Link>
          ))}
        </div>

        <div className="glass glass-tint-accent mt-12 p-6 text-center">
          <p className="text-orange-300 font-bold text-lg">🏀 Pro tip</p>
          <p className="mt-2 text-white/70 text-sm max-w-xl mx-auto">
            The Knicks finished 3rd in the East but won the 2026 championship
            anyway. Regular season records don&apos;t always predict playoff
            success — that&apos;s what makes the NBA fun.
          </p>
        </div>
      </section>
    </div>
  );
}
