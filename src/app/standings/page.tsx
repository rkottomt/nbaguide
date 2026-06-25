import { StandingsTable } from "@/components/StandingsTable";
import { eastStandings, westStandings } from "@/data/standings";

export default function StandingsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-black text-white">2025-26 Standings</h1>
        <p className="mt-3 text-white/60 leading-relaxed max-w-2xl">
          Final regular season records. Top 8 in each conference make the
          playoffs; seeds 9-10 enter the play-in tournament.
        </p>
      </div>

      <div className="mb-8 rounded-2xl border border-orange-500/30 bg-orange-500/10 p-5">
        <p className="font-bold text-orange-300">Regular season ≠ playoffs</p>
        <p className="mt-1 text-sm text-white/70 leading-relaxed">
          The Knicks finished 3rd in the East (53-29) but went on to win the
          2026 championship, beating the 2nd-seeded Spurs 4-1. OKC had the best
          record in the league (64-18) but didn&apos;t repeat — seeding sets up
          matchups, not destiny.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <StandingsTable conference="east" rows={eastStandings} />
        <StandingsTable conference="west" rows={westStandings} />
      </div>
    </div>
  );
}
