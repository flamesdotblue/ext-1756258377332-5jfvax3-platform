const currencies = [
  { code: 'USD', label: 'US Dollar', symbol: '$', tone: 'from-sky-500 to-cyan-400' },
  { code: 'EUR', label: 'Euro', symbol: '€', tone: 'from-indigo-500 to-violet-400' },
  { code: 'BTC', label: 'Bitcoin', symbol: '₿', tone: 'from-amber-500 to-orange-400' },
  { code: 'ETH', label: 'Ethereum', symbol: 'Ξ', tone: 'from-teal-500 to-emerald-400' },
  { code: 'ADA', label: 'Cardano', symbol: 'A', tone: 'from-blue-400 to-indigo-400' },
]

function formatPrice(code, amount) {
  if (code === 'USD') return `$${amount.toFixed(2)}`
  if (code === 'EUR') return `€${amount.toFixed(2)}`
  if (code === 'BTC') return `${amount.toFixed(6)} BTC`
  if (code === 'ETH') return `${amount.toFixed(5)} ETH`
  if (code === 'ADA') return `${amount.toFixed(2)} ADA`
  return amount.toString()
}

function PriceMatrix({ prices, selected, onSelect }) {
  return (
    <div className="rounded-xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 p-5">
      <div className="flex items-baseline justify-between mb-3">
        <h3 className="text-lg font-semibold">Pricing</h3>
        <p className="text-xs text-zinc-400">All prices shown. Choose your currency.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {currencies.map((c) => {
          const active = selected === c.code
          return (
            <button
              key={c.code}
              onClick={() => onSelect(c.code)}
              className={[
                'group text-left rounded-lg border p-3 transition focus:outline-none focus:ring-2 focus:ring-cyan-400/40',
                active
                  ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 to-cyan-400/5 shadow-[0_0_0_1px_rgba(34,211,238,0.2)_inset]'
                  : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.06]'
              ].join(' ')}
            >
              <div className="flex items-center gap-2">
                <div className={`h-7 w-7 rounded-md bg-gradient-to-br ${c.tone} flex items-center justify-center text-xs font-bold text-white/90`}>{c.symbol}</div>
                <div className="text-sm font-medium tracking-tight">{c.code}</div>
                {active && <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/20">Selected</span>}
              </div>
              <div className="mt-1 text-zinc-300 text-sm">{c.label}</div>
              <div className="mt-1.5 text-base font-semibold tracking-tight">
                {formatPrice(c.code, prices[c.code])}
              </div>
            </button>
          )
        })}
      </div>

      <div className="mt-3 text-[11px] text-zinc-500">
        Exchange rates are indicative for checkout. Final crypto totals may vary with network fees.
      </div>
    </div>
  )
}

export default PriceMatrix
