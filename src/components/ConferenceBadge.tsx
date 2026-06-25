interface ConferenceBadgeProps {
  conference: "east" | "west";
}

export function ConferenceBadge({ conference }: ConferenceBadgeProps) {
  const isEast = conference === "east";
  return (
    <span
      className={`liquid liquid-sm inline-flex items-center text-xs font-bold uppercase tracking-wider text-white ${
        isEast ? "glass-tint-east" : "glass-tint-west"
      }`}
      style={{
        background: isEast
          ? "linear-gradient(135deg, rgba(30,77,140,0.7), rgba(45,125,210,0.5))"
          : "linear-gradient(135deg, rgba(196,77,26,0.7), rgba(232,114,42,0.5))",
      }}
    >
      {isEast ? "Eastern Conference" : "Western Conference"}
    </span>
  );
}
