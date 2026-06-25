interface ConferenceBadgeProps {
  conference: "east" | "west";
}

export function ConferenceBadge({ conference }: ConferenceBadgeProps) {
  const isEast = conference === "east";
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white"
      style={{
        background: isEast
          ? "linear-gradient(135deg, #1e4d8c, #2d7dd2)"
          : "linear-gradient(135deg, #c44d1a, #e8722a)",
      }}
    >
      {isEast ? "Eastern Conference" : "Western Conference"}
    </span>
  );
}
