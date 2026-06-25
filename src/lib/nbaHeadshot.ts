export function getNbaHeadshotUrl(nbaPlayerId?: number): string | null {
  if (!nbaPlayerId) return null;
  return `https://cdn.nba.com/headshots/nba/latest/260x190/${nbaPlayerId}.png`;
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
