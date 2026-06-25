import Link from "next/link";
import { StandingRow } from "@/data/types";
import { teams } from "@/data/teams";
import { winPct, gamesBack } from "@/data/standings";

interface StandingsTableProps {
  conference: "east" | "west";
  rows: StandingRow[];
}

export function StandingsTable({ conference, rows }: StandingsTableProps) {
  const leader = rows[0];
  const isEast = conference === "east";

  return (
    <div className={`glass overflow-hidden ${isEast ? "glass-tint-east" : "glass-tint-west"}`}>
      <div className="px-5 py-4 border-b border-white/10">
        <h2 className="text-xl font-black text-white">
          {isEast ? "Eastern Conference" : "Western Conference"}
        </h2>
        <p className="text-sm text-white/50 mt-0.5">2025-26 Regular Season</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 text-white/50 text-left">
              <th className="px-4 py-3 font-semibold w-12">Seed</th>
              <th className="px-4 py-3 font-semibold">Team</th>
              <th className="px-4 py-3 font-semibold text-center w-12">W</th>
              <th className="px-4 py-3 font-semibold text-center w-12">L</th>
              <th className="px-4 py-3 font-semibold text-center w-16">Win%</th>
              <th className="px-4 py-3 font-semibold text-center w-12">GB</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const team = teams[row.teamSlug];
              const isPlayoff = row.seed <= 8;
              const isPlayIn = row.seed >= 9 && row.seed <= 10;

              return (
                <tr
                  key={row.teamSlug}
                  className={`border-b border-white/5 transition-colors hover:bg-white/5 ${
                    row.seed === 8 ? "border-b-2 border-b-orange-500/40" : ""
                  }`}
                >
                  <td className="px-4 py-3">
                    <span
                      className={`liquid liquid-sm inline-flex h-7 w-7 items-center justify-center text-xs font-bold ${
                        isPlayoff
                          ? "text-green-300"
                          : isPlayIn
                            ? "text-yellow-300"
                            : "text-white/50"
                      }`}
                      style={{ borderRadius: "9999px", padding: 0 }}
                    >
                      {row.seed}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/teams/${row.teamSlug}`}
                      className="flex items-center gap-2 font-semibold text-white hover:text-orange-400 transition-colors"
                    >
                      <span
                        className="h-3 w-3 rounded-full shrink-0 ring-1 ring-white/20"
                        style={{ backgroundColor: team?.primaryColor }}
                      />
                      {team?.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-center text-white font-medium">
                    {row.wins}
                  </td>
                  <td className="px-4 py-3 text-center text-white/60">
                    {row.losses}
                  </td>
                  <td className="px-4 py-3 text-center text-white/60">
                    {winPct(row.wins, row.losses)}
                  </td>
                  <td className="px-4 py-3 text-center text-white/40">
                    {gamesBack(leader.wins, leader.losses, row.wins, row.losses)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="px-5 py-3 border-t border-white/10 flex flex-wrap gap-4 text-xs text-white/40">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" /> Playoff seed (1-8)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" /> Play-in (9-10)
        </span>
      </div>
    </div>
  );
}
