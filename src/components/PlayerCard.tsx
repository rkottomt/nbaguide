import Image from "next/image";
import { getPlayer } from "@/data/players";
import { getTeam } from "@/data/teams";
import { getNbaHeadshotUrl, getInitials } from "@/lib/nbaHeadshot";

interface PlayerCardProps {
  slug: string;
  rank: number;
  note?: string;
}

export function PlayerCard({ slug, rank, note }: PlayerCardProps) {
  const player = getPlayer(slug);
  if (!player) return null;

  const team = getTeam(player.teamSlug);
  const headshotUrl = getNbaHeadshotUrl(player.nbaPlayerId);
  const accentColor = team?.primaryColor ?? "#F58426";

  return (
    <div
      className="group relative flex items-center gap-4 rounded-2xl glass-card p-4 transition-all hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-black/30"
      style={{ borderLeftColor: accentColor, borderLeftWidth: 4 }}
    >
      <span
        className="absolute -top-2 -left-2 flex h-8 w-8 items-center justify-center rounded-full text-sm font-black text-white shadow-lg"
        style={{ backgroundColor: accentColor }}
      >
        #{rank}
      </span>
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-[#0d1220]">
        {headshotUrl ? (
          <Image
            src={headshotUrl}
            alt={player.name}
            fill
            className="object-cover object-top transition-transform group-hover:scale-105"
            unoptimized
          />
        ) : (
          <span
            className="flex h-full w-full items-center justify-center text-xl font-bold text-white/60"
            style={{ backgroundColor: accentColor + "33" }}
          >
            {getInitials(player.name)}
          </span>
        )}
      </div>
      <div className="min-w-0">
        <h3 className="font-bold text-white text-lg leading-tight">
          {player.name}{" "}
          <span className="text-sm font-semibold" style={{ color: accentColor }}>
            ({player.position})
          </span>
        </h3>
        <p className="text-sm text-white/50 mt-0.5">{team?.name}</p>
        <p className="text-sm text-white/70 mt-1">{player.tagline}</p>
        {note && (
          <p className="text-xs text-orange-400/80 mt-1 italic">{note}</p>
        )}
      </div>
    </div>
  );
}
