import Link from "next/link";
import { Player } from "@/components/Player";
import { seasonHistory } from "@/data/history";

export default function HistoryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-black text-white">Season History</h1>
        <p className="mt-3 text-white/60 leading-relaxed">
          MVPs, Defensive Players of the Year, and Finals results from 2016-17
          through 2025-26.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-white/50 text-left">
                <th className="px-4 py-3 font-semibold">Season</th>
                <th className="px-4 py-3 font-semibold">MVP</th>
                <th className="px-4 py-3 font-semibold">DPOY</th>
                <th className="px-4 py-3 font-semibold">Finals</th>
                <th className="px-4 py-3 font-semibold text-center">Score</th>
                <th className="px-4 py-3 font-semibold">FMVP</th>
              </tr>
            </thead>
            <tbody>
              {seasonHistory.map((season) => (
                <tr
                  key={season.season}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="px-4 py-3 font-bold text-white whitespace-nowrap">
                    {season.season}
                  </td>
                  <td className="px-4 py-3">
                    <Player slug={season.mvpSlug} />
                  </td>
                  <td className="px-4 py-3">
                    <Player slug={season.dpoySlug} />
                  </td>
                  <td className="px-4 py-3 text-white/70">
                    <Link
                      href={`/teams/${season.finalsWinnerSlug}`}
                      className="font-semibold text-white hover:text-orange-400 transition-colors"
                    >
                      {season.finalsWinner.split(" ").slice(-1)[0]}
                    </Link>
                    {" def. "}
                    <Link
                      href={`/teams/${season.finalsLoserSlug}`}
                      className="text-white/50 hover:text-orange-400 transition-colors"
                    >
                      {season.finalsLoser.split(" ").slice(-1)[0]}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-center font-bold text-orange-400">
                    {season.score}
                  </td>
                  <td className="px-4 py-3">
                    <Player slug={season.fmvpSlug} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
