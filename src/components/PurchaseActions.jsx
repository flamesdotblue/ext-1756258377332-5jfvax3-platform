function formatPrimary(code, amount) {
  if (code === 'USD') return `$${amount.toFixed(2)}`
  if (code === 'EUR') return `€${amount.toFixed(2)}`
  if (code === 'BTC') return `${amount.toFixed(6)} BTC`
  if (code === 'ETH') return `${amount.toFixed(5)} ETH`
  if (code === 'ADA') return `${amount.toFixed(2)} ADA`
  return String(amount)
}

function PurchaseActions({ currency, amount }) {
  return (
    <div className="rounded-xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-zinc-400">Selected currency</p>
          <p className="text-sm font-medium tracking-tight">{currency}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-zinc-400">Price</p>
          <p className="text-lg font-semibold">{formatPrimary(currency, amount)}</p>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button className="flex-1 h-11 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-500 text-black font-semibold hover:opacity-95 active:opacity-90 transition shadow-[0_0_0_1px_rgba(0,0,0,0.2)_inset]">
          Buy Now
        </button>
        <button className="h-11 px-4 rounded-lg bg-white/5 border border-white/10 text-zinc-200 hover:bg-white/10 transition">
          Add to Cart
        </button>
      </div>

      <button className="mt-2 w-full h-10 rounded-lg bg-white/0 border border-white/10 text-zinc-300 hover:bg-white/5 transition">
        Gift this game
      </button>

      <div className="mt-3 text-[11px] text-zinc-500">
        Requires an online account for purchase and delivery. Refunds available per policy.
      </div>
    </div>
  )
}

export default PurchaseActions
