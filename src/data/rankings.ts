import { Position } from "./types";

export interface RankingEntry {
  rank: number;
  playerSlug: string;
  note?: string;
}

export const positionRankings: Record<Position, RankingEntry[]> = {
  PG: [
    { rank: 1, playerSlug: "shai-gilgeous-alexander" },
    { rank: 2, playerSlug: "luka-doncic" },
    { rank: 3, playerSlug: "jalen-brunson" },
    { rank: 4, playerSlug: "cade-cunningham" },
    { rank: 5, playerSlug: "tyrese-haliburton", note: "Tied with Steph Curry" },
    { rank: 5, playerSlug: "stephen-curry", note: "Tied with Tyrese Haliburton" },
  ],
  SG: [
    { rank: 1, playerSlug: "anthony-edwards" },
    { rank: 2, playerSlug: "jaylen-brown" },
    { rank: 3, playerSlug: "donovan-mitchell" },
    { rank: 4, playerSlug: "devin-booker" },
    { rank: 5, playerSlug: "jalen-williams" },
  ],
  SF: [
    { rank: 1, playerSlug: "jayson-tatum" },
    { rank: 2, playerSlug: "lebron-james" },
    { rank: 3, playerSlug: "kawhi-leonard" },
    { rank: 4, playerSlug: "kevin-durant" },
    { rank: 5, playerSlug: "scottie-barnes" },
  ],
  PF: [
    { rank: 1, playerSlug: "giannis-antetokounmpo" },
    { rank: 2, playerSlug: "evan-mobley" },
    { rank: 3, playerSlug: "pascal-siakam" },
    { rank: 4, playerSlug: "jalen-johnson" },
    { rank: 5, playerSlug: "anthony-davis" },
  ],
  C: [
    { rank: 1, playerSlug: "nikola-jokic" },
    { rank: 2, playerSlug: "victor-wembanyama" },
    { rank: 3, playerSlug: "karl-anthony-towns" },
    { rank: 4, playerSlug: "joel-embiid" },
    { rank: 5, playerSlug: "bam-adebayo" },
  ],
};

export const positionLabels: Record<Position, string> = {
  PG: "Point Guard",
  SG: "Shooting Guard",
  SF: "Small Forward",
  PF: "Power Forward",
  C: "Center",
};
