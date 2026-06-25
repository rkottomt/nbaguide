# NBA Beginner Guide

A colorful, interactive website for getting into basketball — built for the 2025-26 NBA season.

**Live site:** https://rkottomt.github.io/nbaguide/

## Features

- **Learn the basics** — positions, conferences, season structure, and awards
- **2025-26 standings** — full East and West tables with playoff/play-in indicators
- **All 30 teams** — ranked by seed, with write-ups and key players
- **Top 5 by position** — PG through C with headshot cards
- **Season history** — MVPs, DPOYs, and Finals results (2016–2026)
- **Player hover cards** — every player mention shows `(POS)` and reveals a headshot on hover (tap on mobile)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To preview the GitHub Pages build locally (with `/nbaguide` base path):

```bash
GITHUB_PAGES=true npm run build
npx serve out
```

Then open the URL shown (paths will be under `/nbaguide/`).

## GitHub Pages Deployment

This repo deploys automatically via GitHub Actions on every push to `main`.

**One-time setup in your GitHub repo:**

1. Go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not "Deploy from a branch")
3. Push to `main` — the workflow builds and publishes automatically

If the deploy job fails with a permissions/environment error, make sure step 2 is done first, then re-run the workflow from the **Actions** tab.

The site will be live at `https://rkottomt.github.io/nbaguide/`.

## Project Structure

```
src/
├── app/           # Pages (learn, standings, teams, rankings, history)
├── components/    # Player, TeamCard, StandingsTable, Nav, etc.
├── data/          # Players, teams, standings, rankings, history
└── lib/           # Headshot URLs, content parser
```

Player headshots load from the NBA CDN (`cdn.nba.com`). Players without an NBA ID show initials as a fallback.

## Special Callouts

- **Knicks** — "Your Team" (2025-26 Champions)
- **Timberwolves** — "Rohit's Favorite"
- **Hornets** — "Elliot's Favorite"
