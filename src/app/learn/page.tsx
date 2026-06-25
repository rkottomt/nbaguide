import { Player } from "@/components/Player";
import { positions, seasonBasics, awards } from "@/data/learn";

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-black text-white">Learn the Basics</h1>
        <p className="mt-3 text-white/60 leading-relaxed">
          New to basketball? Start here. We cover the five positions, how the
          league is structured, and what happens during a season.
        </p>
      </div>

      <section className="mb-14">
        <h2 className="text-2xl font-black text-white mb-2">The 5 Positions</h2>
        <p className="text-white/50 text-sm mb-6">
          Every player has a position — hover their name to see their photo.
        </p>
        <div className="grid gap-4">
          {positions.map((pos) => (
            <div
              key={pos.abbr}
              className="glass p-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="liquid liquid-sm flex h-10 w-10 items-center justify-center text-orange-300 font-black text-sm">
                  {pos.abbr}
                </span>
                <h3 className="text-lg font-bold text-white">{pos.name}</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{pos.role}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {pos.skills.map((skill) => (
                  <span
                    key={skill}
                    className="liquid liquid-sm text-xs text-white/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm text-white/50">
                Examples:{" "}
                {pos.examples.map((slug, i) => (
                  <span key={slug}>
                    {i > 0 && ", "}
                    <Player slug={slug} />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-black text-white mb-2">
          East vs West Conferences
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="glass glass-tint-east p-5">
            <h3 className="font-bold text-blue-300 text-lg">Eastern Conference</h3>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              15 teams mostly from the eastern US and Canada (Toronto). The top
              8 seeds make the playoffs. As of 2025-26, Detroit is the #1 seed
              at 60-22.
            </p>
          </div>
          <div className="glass glass-tint-west p-5">
            <h3 className="font-bold text-orange-300 text-lg">Western Conference</h3>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              15 teams from the western US. OKC leads at 64-18. The West has
              historically been deeper, but both conferences are loaded in 2026.
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-white/50 leading-relaxed">
          Teams play most of their games within their conference. The East
          champion and West champion meet in the NBA Finals — a best-of-7 series
          to decide the champion.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-black text-white mb-6">Season Structure</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {seasonBasics.map((item) => (
            <div
              key={item.title}
              className="glass p-5"
            >
              <h3 className="font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-black text-white mb-6">Major Awards</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {awards.map((award) => (
            <div
              key={award.name}
              className="glass p-4"
            >
              <span className="liquid liquid-sm inline-block text-xs font-bold text-yellow-300">
                {award.name}
              </span>
              <h3 className="mt-2 font-semibold text-white text-sm">
                {award.full}
              </h3>
              <p className="mt-1 text-xs text-white/50">{award.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
