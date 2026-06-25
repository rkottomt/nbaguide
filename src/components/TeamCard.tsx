import Link from "next/link";
import { TeamData } from "@/data/types";

const badgeLabels: Record<string, { label: string; color: string }> = {
  "your-team": { label: "Your Team", color: "#F58426" },
  "rohits-favorite": { label: "Rohit's Favorite", color: "#236192" },
  "elliot-favorite": { label: "Elliot's Favorite", color: "#00788C" },
  champion: { label: "2026 Champions", color: "#FFD700" },
};

interface TeamCardProps {
  team: TeamData;
}

export function TeamCard({ team }: TeamCardProps) {
  const badge = team.badge ? badgeLabels[team.badge] : null;
  const isEast = team.conference === "east";

  return (
    <Link
      href={`/teams/${team.slug}`}
      className="group glass glass-hover relative block overflow-hidden"
    >
      <div
        className="h-1.5 w-full"
        style={{
          background: `linear-gradient(90deg, ${team.primaryColor}, ${team.secondaryColor})`,
        }}
      />
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span
              className={`liquid liquid-sm inline-flex items-center text-xs font-bold text-white mb-2 ${
                isEast ? "glass-tint-east" : "glass-tint-west"
              }`}
            >
              #{team.seed} · {isEast ? "East" : "West"}
            </span>
            <h3 className="text-xl font-black text-white group-hover:text-orange-300 transition-colors">
              {team.name}
            </h3>
            <p className="text-sm text-white/50 mt-0.5">
              {team.wins}-{team.losses} ·{" "}
              {((team.wins / (team.wins + team.losses)) * 100).toFixed(1)}% win rate
            </p>
          </div>
          {badge && (
            <span
              className="liquid liquid-sm shrink-0 text-xs font-bold text-white"
              style={{
                background: `linear-gradient(135deg, ${badge.color}cc, ${badge.color}88)`,
                borderColor: `${badge.color}66`,
              }}
            >
              {badge.label}
            </span>
          )}
        </div>
        <p className="mt-3 text-sm text-white/60 line-clamp-2 leading-relaxed">
          {team.funFacts?.[0] ??
            `${team.shortName} finished #${team.seed} in the ${isEast ? "East" : "West"} at ${team.wins}-${team.losses}.`}
        </p>
        <span className="mt-3 inline-block text-sm font-semibold text-orange-400 group-hover:underline">
          Read guide →
        </span>
      </div>
    </Link>
  );
}
