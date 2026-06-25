import { StandingRow } from "./types";

export const eastStandings: StandingRow[] = [
  { seed: 1, teamSlug: "detroit-pistons", wins: 60, losses: 22 },
  { seed: 2, teamSlug: "boston-celtics", wins: 56, losses: 26 },
  { seed: 3, teamSlug: "new-york-knicks", wins: 53, losses: 29 },
  { seed: 4, teamSlug: "cleveland-cavaliers", wins: 52, losses: 30 },
  { seed: 5, teamSlug: "toronto-raptors", wins: 46, losses: 36 },
  { seed: 6, teamSlug: "atlanta-hawks", wins: 46, losses: 36 },
  { seed: 7, teamSlug: "philadelphia-76ers", wins: 45, losses: 37 },
  { seed: 8, teamSlug: "orlando-magic", wins: 45, losses: 37 },
  { seed: 9, teamSlug: "charlotte-hornets", wins: 44, losses: 38 },
  { seed: 10, teamSlug: "miami-heat", wins: 43, losses: 39 },
  { seed: 11, teamSlug: "milwaukee-bucks", wins: 32, losses: 50 },
  { seed: 12, teamSlug: "chicago-bulls", wins: 31, losses: 51 },
  { seed: 13, teamSlug: "brooklyn-nets", wins: 20, losses: 62 },
  { seed: 14, teamSlug: "indiana-pacers", wins: 19, losses: 63 },
  { seed: 15, teamSlug: "washington-wizards", wins: 17, losses: 65 },
];

export const westStandings: StandingRow[] = [
  { seed: 1, teamSlug: "oklahoma-city-thunder", wins: 64, losses: 18 },
  { seed: 2, teamSlug: "san-antonio-spurs", wins: 62, losses: 20 },
  { seed: 3, teamSlug: "denver-nuggets", wins: 54, losses: 28 },
  { seed: 4, teamSlug: "los-angeles-lakers", wins: 53, losses: 29 },
  { seed: 5, teamSlug: "houston-rockets", wins: 52, losses: 30 },
  { seed: 6, teamSlug: "minnesota-timberwolves", wins: 49, losses: 33 },
  { seed: 7, teamSlug: "phoenix-suns", wins: 45, losses: 37 },
  { seed: 8, teamSlug: "portland-trail-blazers", wins: 42, losses: 40 },
  { seed: 9, teamSlug: "la-clippers", wins: 42, losses: 40 },
  { seed: 10, teamSlug: "golden-state-warriors", wins: 37, losses: 45 },
  { seed: 11, teamSlug: "new-orleans-pelicans", wins: 26, losses: 56 },
  { seed: 12, teamSlug: "dallas-mavericks", wins: 26, losses: 56 },
  { seed: 13, teamSlug: "memphis-grizzlies", wins: 25, losses: 57 },
  { seed: 14, teamSlug: "sacramento-kings", wins: 22, losses: 60 },
  { seed: 15, teamSlug: "utah-jazz", wins: 22, losses: 60 },
];

export function winPct(wins: number, losses: number): string {
  const total = wins + losses;
  return total === 0 ? ".000" : (wins / total).toFixed(3).slice(1);
}

export function gamesBack(
  leaderWins: number,
  leaderLosses: number,
  wins: number,
  losses: number
): string {
  if (leaderWins === wins && leaderLosses === losses) return "—";
  const gb = (leaderWins - wins + losses - leaderLosses) / 2;
  return gb.toFixed(1);
}
