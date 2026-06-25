"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const TICKER = [
  "KNICKS", "LAKERS", "CELTICS", "THUNDER", "SPURS", "WOLVES", "PISTONS",
  "NUGGETS", "HEAT", "BUCKS", "WARRIORS", "SUNS", "ROCKETS", "HAWKS",
];

function BinaryColumn({
  className,
  seed,
  style,
}: {
  className?: string;
  seed: number;
  style?: React.CSSProperties;
}) {
  const bits = Array.from({ length: 48 }, (_, i) => ((seed * 7 + i * 13) % 3 > 0 ? 1 : 0));
  return (
    <div className={`hero-binary ${className ?? ""}`} style={style} aria-hidden="true">
      {bits.map((b, i) => (
        <span key={i} style={{ opacity: 0.15 + (i % 5) * 0.08 }}>
          {b}
        </span>
      ))}
    </div>
  );
}

export function HeroScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onMq = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onMq);

    const el = containerRef.current;
    if (!el || mq.matches) return () => mq.removeEventListener("change", onMq);

    const update = () => {
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const raw = Math.min(1, Math.max(0, -rect.top / scrollable));
      setProgress(Math.min(1, raw * 1.25));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      mq.removeEventListener("change", onMq);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const p = reducedMotion ? 0 : progress;
  const ease = (t: number) => t * t * (3 - 2 * t);
  const ep = ease(p);

  const titleY = ep * -120;
  const titleScale = 1 - ep * 0.18;
  const titleOpacity = 1 - ep * 0.95;
  const line1X = ep * -80;
  const line2X = ep * 60;
  const line3X = ep * -40;
  const orb1Y = ep * 180;
  const orb2Y = ep * -140;
  const descOpacity = Math.max(0, 1 - ep * 2.8);
  const ctaOpacity = Math.max(0, 1 - ep * 3.2);
  const scrollCueOpacity = Math.max(0, 1 - ep * 5);

  const sceneRotateX = ep * 6;
  const gridZ = -120 - ep * 160;
  const gridRotateX = 14 + ep * 8;
  const orb1Z = -60 - ep * 40;
  const orb2Z = -90 - ep * 50;
  const binaryLeftZ = -40 - ep * 80;
  const binaryRightZ = -50 - ep * 80;
  const titleBlockZ = ep * -60;
  const titleBlockRotateX = ep * -4;

  return (
    <div
      ref={containerRef}
      className="hero-scroll-container relative"
      style={{ height: reducedMotion ? "auto" : "min(185vh, 1600px)" }}
    >
      <div className={`hero-sticky ${reducedMotion ? "relative min-h-[90vh]" : "sticky top-0 h-screen"}`}>
        <div
          className="hero-scene"
          style={{
            transform: `rotateX(${sceneRotateX}deg)`,
          }}
        >
          {/* Parallax orbs */}
          <div
            className="hero-orb hero-orb--orange hero-layer"
            style={{
              transform: `translate3d(0, ${orb1Y}px, ${orb1Z}px) scale(${1 + ep * 0.3})`,
            }}
            aria-hidden="true"
          />
          <div
            className="hero-orb hero-orb--blue hero-layer"
            style={{
              transform: `translate3d(0, ${orb2Y}px, ${orb2Z}px) scale(${1.2 - ep * 0.2})`,
            }}
            aria-hidden="true"
          />

          {/* Court grid */}
          <div
            className="hero-grid hero-layer"
            style={{
              opacity: 0.35 - ep * 0.3,
              transform: `translate3d(0, 0, ${gridZ}px) rotateX(${gridRotateX}deg)`,
            }}
            aria-hidden="true"
          />

          {/* Binary columns */}
          <BinaryColumn
            className="hero-binary--left hero-layer"
            seed={3}
            style={{
              transform: `translate3d(${ep * -20}px, -50%, ${binaryLeftZ}px)`,
            }}
          />
          <BinaryColumn
            className="hero-binary--right hero-layer"
            seed={11}
            style={{
              transform: `translate3d(${ep * 20}px, -50%, ${binaryRightZ}px)`,
            }}
          />

          {/* Main content */}
          <div
            className="hero-content hero-layer relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
            style={{
              opacity: titleOpacity,
              transform: `translate3d(0, ${titleY}px, ${titleBlockZ}px) rotateX(${titleBlockRotateX}deg) scale(${titleScale})`,
            }}
          >
            <span
              className="liquid liquid-sm mb-8 text-sm font-bold tracking-[0.2em] text-orange-300 uppercase"
              style={{
                opacity: descOpacity,
                transform: `translate3d(0, 0, 10px)`,
              }}
            >
              2025-26 Season
            </span>

            <h1 className="hero-title section-title w-full max-w-6xl" style={{ transformStyle: "preserve-3d" }}>
              <span
                className="hero-title-line hero-title-line--outline block"
                style={{
                  transform: `translate3d(${line1X}px, 0, -30px)`,
                }}
              >
                Your
              </span>
              <span
                className="hero-title-line block text-gradient"
                style={{
                  transform: `translate3d(${line2X}px, 0, 20px)`,
                }}
              >
                NBA
              </span>
              <span
                className="hero-title-line block text-white"
                style={{
                  transform: `translate3d(${line3X}px, 0, -10px)`,
                }}
              >
                Beginner Guide
              </span>
            </h1>

            <p
              className="mt-8 max-w-2xl text-lg text-white/70 leading-relaxed"
              style={{
                opacity: descOpacity,
                transform: `translate3d(0, ${ep * 24}px, 10px)`,
              }}
            >
              Everything you need to get into basketball — positions, all 30 teams,
              current standings, player rankings, and a decade of history.
            </p>

            <div
              className="mt-10 flex flex-wrap justify-center gap-3"
              style={{
                opacity: ctaOpacity,
                transform: `translate3d(0, ${ep * 40}px, 10px)`,
              }}
            >
              <Link href="/learn" className="liquid-accent relative px-8 py-3.5 font-bold text-white">
                Start Learning →
              </Link>
              <Link
                href="/teams/east"
                className="glass glass-button border border-white/15 px-8 py-3.5 font-bold text-white"
              >
                Browse Teams
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue — outside scene so it stays readable */}
        {!reducedMotion && (
          <div
            className="hero-scroll-cue absolute bottom-10 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-3"
            style={{ opacity: scrollCueOpacity }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              Scroll
            </span>
            <span className="hero-scroll-line" />
          </div>
        )}

        {/* Team ticker */}
        <div
          className="hero-ticker absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-white/8 py-3"
          style={{ opacity: 1 - ep * 0.8 }}
        >
          <div className="hero-ticker-track">
            {[...TICKER, ...TICKER].map((name, i) => (
              <span key={`${name}-${i}`} className="hero-ticker-item">
                {name}
                <span className="text-orange-500/60 mx-6">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
