"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { getPlayer } from "@/data/players";
import { getTeam } from "@/data/teams";
import { getNbaHeadshotUrl, getInitials } from "@/lib/nbaHeadshot";

interface PlayerProps {
  slug: string;
}

export function Player({ slug }: PlayerProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const player = getPlayer(slug);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  if (!player) {
    return <span className="text-orange-400">{slug}</span>;
  }

  const team = getTeam(player.teamSlug);
  const headshotUrl = getNbaHeadshotUrl(player.nbaPlayerId);
  const accentColor = team?.primaryColor ?? "#F58426";

  return (
    <span ref={ref} className="relative inline-block">
      <button
        type="button"
        className="cursor-pointer font-semibold underline decoration-dotted underline-offset-2 transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded-sm"
        style={{ color: accentColor }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={`${player.name}, ${player.position}`}
      >
        {player.name} ({player.position})
      </button>

      {open && (
        <span
          role="tooltip"
          className="absolute bottom-full left-1/2 z-50 mb-2 w-56 -translate-x-1/2 glass p-3 shadow-2xl shadow-black/50 animate-in"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <span className="flex items-center gap-3">
            <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-[#0d1220]">
              {headshotUrl ? (
                <Image
                  src={headshotUrl}
                  alt={player.name}
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              ) : (
                <span
                  className="flex h-full w-full items-center justify-center text-lg font-bold text-white/60"
                  style={{ backgroundColor: accentColor + "33" }}
                >
                  {getInitials(player.name)}
                </span>
              )}
            </span>
            <span className="min-w-0 text-left">
              <span className="block text-sm font-bold text-white leading-tight">
                {player.name}
              </span>
              <span
                className="block text-xs font-semibold mt-0.5"
                style={{ color: accentColor }}
              >
                {player.position} · {team?.shortName ?? "NBA"}
              </span>
              <span className="block text-xs text-white/60 mt-1 leading-snug">
                {player.tagline}
              </span>
            </span>
          </span>
          <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-white/12 bg-[rgba(14,18,32,0.85)]" />
        </span>
      )}
    </span>
  );
}
