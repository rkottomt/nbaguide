import Link from "next/link";
import { TeamData } from "@/data/types";

interface TeamNavProps {
  prev: TeamData | null;
  next: TeamData | null;
  conference: "east" | "west";
}

export function TeamNav({ prev, next, conference }: TeamNavProps) {
  const confLabel = conference === "east" ? "East" : "West";

  return (
    <nav className="mt-12 flex flex-col sm:flex-row items-stretch gap-3 border-t border-white/10 pt-8">
      {prev ? (
        <Link
          href={`/teams/${prev.slug}`}
          className="group flex-1 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/8 hover:shadow-lg"
          style={{ borderLeftColor: prev.primaryColor, borderLeftWidth: 4 }}
        >
          <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">
            ← Previous · #{prev.seed} {confLabel}
          </span>
          <span className="mt-1 block text-lg font-black text-white group-hover:text-orange-300 transition-colors">
            {prev.name}
          </span>
          <span className="text-sm text-white/50">
            {prev.wins}-{prev.losses}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link
          href={`/teams/${next.slug}`}
          className="group flex-1 rounded-2xl border border-white/10 bg-white/5 p-4 text-right transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/8 hover:shadow-lg sm:ml-auto"
          style={{ borderRightColor: next.primaryColor, borderRightWidth: 4 }}
        >
          <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">
            Next Team · #{next.seed} {confLabel} →
          </span>
          <span className="mt-1 block text-lg font-black text-white group-hover:text-orange-300 transition-colors">
            {next.name}
          </span>
          <span className="text-sm text-white/50">
            {next.wins}-{next.losses}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
