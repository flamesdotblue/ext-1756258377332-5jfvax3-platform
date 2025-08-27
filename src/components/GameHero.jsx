function GameHero({ title, subtitle, tags = [], rating }) {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/60 via-slate-900/60 to-slate-950/60">
              <div className="absolute inset-0 opacity-60" aria-hidden>
                <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-500/30 to-cyan-500/20 blur-2xl" />
                <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 blur-2xl" />
              </div>
              <div className="aspect-[16/9] flex items-center justify-center">
                <svg viewBox="0 0 400 220" className="w-full h-full">
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                    <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#a78bfa" />
                      <stop offset="100%" stopColor="#f472b6" />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="400" height="220" fill="#0b0e13" />
                  <g opacity="0.2">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <circle key={i} cx={(i * 47) % 420} cy={(i * 33) % 230} r={(i % 5) + 1} fill="#94a3b8" />
                    ))}
                  </g>
                  <g>
                    <path d="M120,120 L170,80 L230,140 L280,100" stroke="url(#g1)" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <circle cx="120" cy="120" r="10" fill="url(#g1)" />
                    <circle cx="170" cy="80" r="10" fill="url(#g2)" />
                    <circle cx="230" cy="140" r="10" fill="url(#g1)" />
                    <circle cx="280" cy="100" r="10" fill="url(#g2)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-4">
            <h1 className="text-2xl sm:text-3xl font-semibold leading-tight tracking-tight">{title}</h1>
            <p className="text-zinc-300">{subtitle}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">{t}</span>
              ))}
            </div>
            <div className="mt-2 text-sm text-emerald-400">{rating}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GameHero
