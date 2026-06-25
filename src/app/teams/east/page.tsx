import { TeamCard } from "@/components/TeamCard";
import { getTeamsByConference } from "@/data/teams";

export default function EastTeamsPage() {
  const teams = getTeamsByConference("east");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10">
        <span className="inline-block rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold text-blue-400 mb-3">
          Eastern Conference
        </span>
        <h1 className="text-4xl font-black text-white">East Teams</h1>
        <p className="mt-3 text-white/60">
          Ranked by 2025-26 regular season seed — best to worst.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {teams.map((team) => (
          <TeamCard key={team.slug} team={team} />
        ))}
      </div>
    </div>
  );
}
