import { useState, useMemo } from 'react'
import Header from './components/Header'
import GameHero from './components/GameHero'
import PriceMatrix from './components/PriceMatrix'
import PurchaseActions from './components/PurchaseActions'

function App() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD')

  // Base price and conversion rates (example static rates)
  const baseUSD = 59.99
  const rates = {
    USD: 1,
    EUR: 0.92, // 1 USD = 0.92 EUR
    BTC: 1 / 65000, // 1 USD in BTC
    ETH: 1 / 3200, // 1 USD in ETH
    ADA: 1 / 0.4, // 1 USD in ADA (ADA at $0.40)
  }

  const prices = useMemo(() => {
    return {
      USD: baseUSD,
      EUR: baseUSD * rates.EUR,
      BTC: baseUSD * rates.BTC,
      ETH: baseUSD * rates.ETH,
      ADA: baseUSD * rates.ADA,
    }
  }, [baseUSD])

  const primaryPrice = prices[selectedCurrency]

  return (
    <div className="min-h-screen bg-[#0f1216] text-zinc-100 font-sans">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-600/20 to-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gradient-to-br from-violet-600/10 to-fuchsia-500/10 blur-3xl" />
      </div>

      <Header />

      <main className="relative z-10">
        <GameHero title="NEBULA: ECLIPSE" subtitle="An atmospheric sci‑fi adventure" tags={["Action", "Story Rich", "Single‑player"]} rating={"Very Positive"} />

        <section className="px-6 lg:px-10 max-w-6xl mx-auto grid lg:grid-cols-3 gap-6 lg:gap-10 mt-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 p-5">
              <h2 className="text-lg font-semibold tracking-tight">About this game</h2>
              <p className="mt-2 text-zinc-300 leading-relaxed">
                Drift between abandoned stations, decode alien signals, and decide the fate of a fractured galaxy. Nebula: Eclipse blends immersive exploration, cinematic set‑pieces, and precise zero‑G combat into a seamless, modern sci‑fi experience.
              </p>
              <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                <li className="rounded-md bg-white/5 border border-white/10 px-3 py-2">Playtime: 20–35h</li>
                <li className="rounded-md bg-white/5 border border-white/10 px-3 py-2">Controller Support</li>
                <li className="rounded-md bg-white/5 border border-white/10 px-3 py-2">Cloud Saves</li>
              </ul>
            </div>

            <div className="rounded-xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 p-5">
              <h3 className="text-lg font-semibold mb-3">System requirements</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-md bg-white/5 border border-white/10 p-4">
                  <p className="text-zinc-400 font-medium mb-2">Minimum</p>
                  <ul className="space-y-1 text-zinc-300">
                    <li>OS: Windows 10 64-bit</li>
                    <li>CPU: Quad-core</li>
                    <li>RAM: 8 GB</li>
                    <li>GPU: GTX 1060 / RX 580</li>
                    <li>Storage: 40 GB</li>
                  </ul>
                </div>
                <div className="rounded-md bg-white/5 border border-white/10 p-4">
                  <p className="text-zinc-400 font-medium mb-2">Recommended</p>
                  <ul className="space-y-1 text-zinc-300">
                    <li>OS: Windows 11 64-bit</li>
                    <li>CPU: 6-core</li>
                    <li>RAM: 16 GB</li>
                    <li>GPU: RTX 3070 / RX 6800</li>
                    <li>Storage: 40 GB SSD</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-4">
            <PriceMatrix prices={prices} selected={selectedCurrency} onSelect={setSelectedCurrency} />
            <PurchaseActions currency={selectedCurrency} amount={primaryPrice} />
          </div>
        </section>
      </main>

      <footer className="relative z-10 mt-16 py-10 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Nebula Store. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
