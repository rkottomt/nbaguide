import Link from "next/link";
import { notFound } from "next/navigation";
import { ConferenceBadge } from "@/components/ConferenceBadge";
import { PlayerCard } from "@/components/PlayerCard";
import { TeamNav } from "@/components/TeamNav";
import { getAdjacentTeams, getAllTeamSlugs, getTeam } from "@/data/teams";
import { parseContent } from "@/lib/parseContent";

const badgeLabels: Record<string, string> = {
  "your-team": "Your Team · 2026 Champions",
  "rohits-favorite": "Rohit's Favorite",
  "elliot-favorite": "Elliot's Favorite",
  champion: "2026 Champions",
};

interface TeamPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllTeamSlugs().map((slug) => ({ slug }));
}

export default async function TeamPage({ params }: TeamPageProps) {
  const { slug } = await params;
  const team = getTeam(slug);
  if (!team) notFound();

  const { prev, next } = getAdjacentTeams(slug);
  const winPct = ((team.wins / (team.wins + team.losses)) * 100).toFixed(1);

  return (
    <div>
      <div
        className="relative overflow-hidden border-b border-white/10"
        style={{
          background: `linear-gradient(160deg, ${team.primaryColor}35 0%, ${team.secondaryColor}15 40%, #070b14 85%)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 80% 20%, ${team.primaryColor}, transparent 60%)`,
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 py-12">
          <Link
            href={`/teams/${team.conference}`}
            className="text-sm text-white/50 hover:text-white transition-colors"
          >
            ← Back to {team.conference === "east" ? "East" : "West"} teams
          </Link>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <ConferenceBadge conference={team.conference} />
            <span className="liquid liquid-sm px-3 py-1 text-xs font-bold text-white">
              #{team.seed} Seed · {team.wins}-{team.losses} ({winPct}%)
            </span>
            {team.badge && (
              <span className="liquid-accent liquid-sm px-3 py-1 text-xs font-bold text-white">
                {badgeLabels[team.badge]}
              </span>
            )}
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div
              className="h-16 w-2 rounded-full"
              style={{
                background: `linear-gradient(to bottom, ${team.primaryColor}, ${team.secondaryColor})`,
              }}
            />
            <h1 className="text-4xl sm:text-5xl font-black text-white section-title">
              {team.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-10">
        <section className="mb-10">
          <h2 className="text-xl font-black text-white mb-4 section-title">Overview</h2>
          <div className="glass p-6 space-y-4 prose-team">
            {team.overview.map((paragraph, i) => (
              <p key={i} className="text-white/80 leading-relaxed">
                {parseContent(paragraph)}
              </p>
            ))}
          </div>
        </section>

        {team.rivals && team.rivals.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-black text-white mb-4">Rivals</h2>
            <div className="flex flex-wrap gap-2">
              {team.rivals.map((rivalSlug) => {
                const rival = getTeam(rivalSlug);
                return rival ? (
                  <Link
                    key={rivalSlug}
                    href={`/teams/${rivalSlug}`}
                    className="liquid liquid-sm px-4 py-2 text-sm font-semibold text-red-300 hover:text-red-200 transition-colors"
                    style={{ background: "linear-gradient(135deg, rgba(220,50,50,0.25), rgba(220,50,50,0.08))" }}
                  >
                    vs {rival.name}
                  </Link>
                ) : null;
              })}
            </div>
          </section>
        )}

        <section className="mb-10">
          <h2 className="text-xl font-black text-white mb-4">Key Players</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {team.keyPlayers.map((slug, i) => (
              <PlayerCard key={slug} slug={slug} rank={i + 1} />
            ))}
          </div>
        </section>

        {team.funFacts && team.funFacts.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-black text-white mb-4 section-title">Fun Facts</h2>
            <ul className="glass p-5 space-y-2">
              {team.funFacts.map((fact) => (
                <li
                  key={fact}
                  className="flex items-start gap-2 text-sm text-white/70"
                >
                  <span className="text-orange-400 mt-0.5">🏀</span>
                  {fact}
                </li>
              ))}
            </ul>
          </section>
        )}

        <TeamNav prev={prev} next={next} conference={team.conference} />
      </div>
    </div>
  );
}
