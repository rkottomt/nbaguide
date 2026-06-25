"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const TICKER = [
  "KNICKS", "LAKERS", "CELTICS", "THUNDER", "SPURS", "WOLVES", "PISTONS",
  "NUGGETS", "HEAT", "BUCKS", "WARRIORS", "SUNS", "ROCKETS", "HAWKS",
];

function BinaryColumn({ className, seed }: { className?: string; seed: number }) {
  const bits = Array.from({ length: 48 }, (_, i) => ((seed * 7 + i * 13) % 3 > 0 ? 1 : 0));
  return (
    <div className={`hero-binary ${className ?? ""}`} aria-hidden="true">
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
      const p = Math.min(1, Math.max(0, -rect.top / scrollable));
      setProgress(p);
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
  const descOpacity = Math.max(0, 1 - ep * 2.2);
  const ctaOpacity = Math.max(0, 1 - ep * 2.8);
  const scrollCueOpacity = Math.max(0, 1 - ep * 4);
  const tickerY = (1 - ep) * 0;

  return (
    <div
      ref={containerRef}
      className="hero-scroll-container relative"
      style={{ height: reducedMotion ? "auto" : "min(280vh, 2400px)" }}
    >
      <div className={`hero-sticky ${reducedMotion ? "relative min-h-[90vh]" : "sticky top-0 h-screen"}`}>
        {/* Parallax orbs */}
        <div
          className="hero-orb hero-orb--orange"
          style={{ transform: `translate3d(0, ${orb1Y}px, 0) scale(${1 + ep * 0.3})` }}
          aria-hidden="true"
        />
        <div
          className="hero-orb hero-orb--blue"
          style={{ transform: `translate3d(0, ${orb2Y}px, 0) scale(${1.2 - ep * 0.2})` }}
          aria-hidden="true"
        />

        {/* Court grid */}
        <div
          className="hero-grid"
          style={{ opacity: 0.35 - ep * 0.3, transform: `perspective(800px) rotateX(${12 + ep * 8}deg)` }}
          aria-hidden="true"
        />

        {/* Binary columns — wodniack-style flanking */}
        <BinaryColumn className="hero-binary--left" seed={3} />
        <BinaryColumn className="hero-binary--right" seed={11} />

        {/* Main content */}
        <div
          className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleY}px) scale(${titleScale})`,
          }}
        >
          <span
            className="liquid liquid-sm mb-8 text-sm font-bold tracking-[0.2em] text-orange-300 uppercase"
            style={{ opacity: descOpacity }}
          >
            2025-26 Season
          </span>

          <h1 className="hero-title section-title w-full max-w-6xl">
            <span
              className="hero-title-line hero-title-line--outline block"
              style={{ transform: `translateX(${line1X}px)` }}
            >
              Your
            </span>
            <span
              className="hero-title-line block text-gradient"
              style={{ transform: `translateX(${line2X}px)` }}
            >
              NBA
            </span>
            <span
              className="hero-title-line block text-white"
              style={{ transform: `translateX(${line3X}px)` }}
            >
              Beginner Guide
            </span>
          </h1>

          <p
            className="mt-8 max-w-2xl text-lg text-white/70 leading-relaxed"
            style={{ opacity: descOpacity, transform: `translateY(${ep * 24}px)` }}
          >
            Everything you need to get into basketball — positions, all 30 teams,
            current standings, player rankings, and a decade of history.
          </p>

          <div
            className="mt-10 flex flex-wrap justify-center gap-3"
            style={{ opacity: ctaOpacity, transform: `translateY(${ep * 40}px)` }}
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

        {/* Scroll cue */}
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
          style={{ transform: `translateY(${tickerY}px)`, opacity: 1 - ep * 0.8 }}
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
