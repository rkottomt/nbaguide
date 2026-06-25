export type Position = "PG" | "SG" | "SF" | "PF" | "C";

export type Conference = "east" | "west";

export interface PlayerData {
  slug: string;
  name: string;
  position: Position;
  teamSlug: string;
  nbaPlayerId?: number;
  tagline: string;
}

export interface TeamData {
  slug: string;
  name: string;
  shortName: string;
  conference: Conference;
  seed: number;
  wins: number;
  losses: number;
  primaryColor: string;
  secondaryColor: string;
  badge?: "your-team" | "rohits-favorite" | "elliot-favorite" | "champion";
  overview: string[];
  keyPlayers: string[];
  rivals?: string[];
  funFacts?: string[];
}

export interface StandingRow {
  seed: number;
  teamSlug: string;
  wins: number;
  losses: number;
}

export interface SeasonHistory {
  season: string;
  mvp: string;
  mvpSlug: string;
  dpoy: string;
  dpoySlug: string;
  finalsWinner: string;
  finalsWinnerSlug: string;
  finalsLoser: string;
  finalsLoserSlug: string;
  score: string;
  fmvp: string;
  fmvpSlug: string;
}
