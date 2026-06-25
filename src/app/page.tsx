import Link from "next/link";

const sections = [
  {
    href: "/learn",
    title: "Learn the Basics",
    description: "Positions, conferences, season structure, and awards explained.",
    emoji: "📚",
    gradient: "from-blue-600/30 to-blue-900/20",
    border: "border-blue-500/30",
  },
  {
    href: "/standings",
    title: "2025-26 Standings",
    description: "Full regular season records for all 30 teams, East and West.",
    emoji: "📊",
    gradient: "from-green-600/30 to-green-900/20",
    border: "border-green-500/30",
  },
  {
    href: "/teams/east",
    title: "Eastern Conference",
    description: "All 15 East teams ranked by seed — best to worst.",
    emoji: "🌊",
    gradient: "from-cyan-600/30 to-cyan-900/20",
    border: "border-cyan-500/30",
  },
  {
    href: "/teams/west",
    title: "Western Conference",
    description: "All 15 West teams ranked by seed — best to worst.",
    emoji: "🔥",
    gradient: "from-orange-600/30 to-orange-900/20",
    border: "border-orange-500/30",
  },
  {
    href: "/rankings",
    title: "Top 5 by Position",
    description: "The best PG, SG, SF, PF, and C in the league right now.",
    emoji: "🏆",
    gradient: "from-yellow-600/30 to-yellow-900/20",
    border: "border-yellow-500/30",
  },
  {
    href: "/history",
    title: "Season History",
    description: "MVPs, DPOYs, and Finals results from 2016-17 to 2025-26.",
    emoji: "📜",
    gradient: "from-purple-600/30 to-purple-900/20",
    border: "border-purple-500/30",
  },
];

export default function HomePage() {
  return (
    <div className="court-pattern">
      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <span className="inline-block rounded-full bg-orange-500/20 px-4 py-1.5 text-sm font-bold text-orange-400 mb-6">
          2025-26 Season
        </span>
        <h1 className="text-5xl sm:text-7xl font-black text-white leading-tight section-title">
          Your NBA
          <span className="block text-gradient">
            Beginner Guide
          </span>
        </h1>
        <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
          Everything you need to get into basketball — positions, all 30 teams,
          current standings, player rankings, and a decade of history. Hover
          over any player name to see their face.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/learn"
            className="rounded-xl bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-400 transition-colors shadow-lg shadow-orange-500/25"
          >
            Start Learning →
          </Link>
          <Link
            href="/teams/east"
            className="rounded-xl border border-white/20 px-6 py-3 font-bold text-white hover:bg-white/10 transition-colors"
          >
            Browse Teams
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className={`group glass-card rounded-2xl border ${section.border} bg-gradient-to-br ${section.gradient} p-6 transition-all hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40 hover:border-white/20`}
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

        <div className="mt-12 rounded-2xl border border-orange-500/30 bg-orange-500/10 p-6 text-center">
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
