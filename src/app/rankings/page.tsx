import { PlayerCard } from "@/components/PlayerCard";
import { positionRankings, positionLabels } from "@/data/rankings";
import { Position } from "@/data/types";

const positions: Position[] = ["PG", "SG", "SF", "PF", "C"];

export default function RankingsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-black text-white">Top 5 by Position</h1>
        <p className="mt-3 text-white/60 leading-relaxed">
          The best player at each position for the 2025-26 season. Hover over
          names throughout the site to see headshots — here they&apos;re always
          visible.
        </p>
      </div>

      <div className="space-y-12">
        {positions.map((pos) => (
          <section key={pos}>
            <div className="flex items-center gap-3 mb-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400 font-black">
                {pos}
              </span>
              <div>
                <h2 className="text-2xl font-black text-white">
                  {positionLabels[pos]}
                </h2>
              </div>
            </div>
            <div className="grid gap-3">
              {positionRankings[pos].map((entry) => (
                <PlayerCard
                  key={`${entry.playerSlug}-${entry.rank}`}
                  slug={entry.playerSlug}
                  rank={entry.rank}
                  note={entry.note}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
