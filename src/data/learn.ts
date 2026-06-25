import { Position } from "./types";

export const positions: {
  abbr: Position;
  name: string;
  role: string;
  skills: string[];
  examples: string[];
}[] = [
  {
    abbr: "PG",
    name: "Point Guard",
    role: "The floor general — runs the offense, brings the ball up, and sets up teammates.",
    skills: ["Passing", "Ball handling", "Court vision", "Pick-and-roll"],
    examples: ["shai-gilgeous-alexander", "jalen-brunson", "luka-doncic"],
  },
  {
    abbr: "SG",
    name: "Shooting Guard",
    role: "Usually the primary scorer off the wing — great shooters who can create their own shot.",
    skills: ["Shooting", "Scoring", "Off-ball movement", "Perimeter defense"],
    examples: ["anthony-edwards", "devin-booker", "donovan-mitchell"],
  },
  {
    abbr: "SF",
    name: "Small Forward",
    role: "The most versatile position — score, defend, rebound, and do a bit of everything.",
    skills: ["Versatility", "Two-way play", "Size + speed", "Switching on defense"],
    examples: ["jayson-tatum", "lebron-james", "kawhi-leonard"],
  },
  {
    abbr: "PF",
    name: "Power Forward",
    role: "Big but mobile — score inside, stretch the floor, and hold down the paint.",
    skills: ["Rebounding", "Post scoring", "Stretch shooting", "Interior defense"],
    examples: ["giannis-antetokounmpo", "evan-mobley", "pascal-siakam"],
  },
  {
    abbr: "C",
    name: "Center",
    role: "The anchor — protect the rim, rebound, and often operate as a hub on offense.",
    skills: ["Rim protection", "Rebounding", "Screen setting", "Paint scoring"],
    examples: ["nikola-jokic", "victor-wembanyama", "joel-embiid"],
  },
];

export const seasonBasics = [
  {
    title: "82-Game Regular Season",
    description:
      "Each team plays 82 games from October to April — 41 at home, 41 on the road. The goal is to finish with the best record in your conference.",
  },
  {
    title: "Playoffs",
    description:
      "The top 8 teams in each conference make the playoffs. All series are best-of-7 — first to 4 wins advances. Seeds 7-10 compete in a play-in tournament first.",
  },
  {
    title: "East vs West",
    description:
      "The NBA is split into two conferences of 15 teams each. East teams mostly play other East teams; same for West. The two conference champions meet in the Finals.",
  },
  {
    title: "All-Star Break",
    description:
      "Mid-February pause featuring the All-Star Game — a showcase of the league's best players voted in by fans, media, and coaches.",
  },
  {
    title: "Trade Deadline",
    description:
      "In February, teams can trade players and picks until the deadline. After that, rosters are locked for the playoff push.",
  },
  {
    title: "NBA Draft",
    description:
      "Every June, teams select the best young players coming out of college and overseas. Worse teams pick earlier — it's how rebuilds get their stars.",
  },
];

export const awards = [
  {
    name: "MVP",
    full: "Most Valuable Player",
    description: "Best overall player in the regular season.",
  },
  {
    name: "DPOY",
    full: "Defensive Player of the Year",
    description: "Best defender in the league.",
  },
  {
    name: "FMVP",
    full: "Finals MVP",
    description: "Best player in the NBA Finals — the championship series.",
  },
  {
    name: "All-NBA",
    full: "All-NBA Teams",
    description: "Three teams of the 15 best players each season (1st, 2nd, 3rd team).",
  },
  {
    name: "ROY",
    full: "Rookie of the Year",
    description: "Best first-year player.",
  },
  {
    name: "6MOY",
    full: "Sixth Man of the Year",
    description: "Best player who comes off the bench.",
  },
];
