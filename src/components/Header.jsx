function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 to-cyan-500" />
          <span className="text-lg tracking-tight font-semibold">Nebula Store</span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-sm">
          <a className="px-3 py-1.5 rounded-md hover:bg-white/5 text-zinc-300" href="#">Store</a>
          <a className="px-3 py-1.5 rounded-md hover:bg-white/5 text-zinc-300" href="#">Library</a>
          <a className="px-3 py-1.5 rounded-md hover:bg-white/5 text-zinc-300" href="#">Community</a>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center bg-white/5 border border-white/10 rounded-lg overflow-hidden">
            <input className="bg-transparent px-3 py-1.5 text-sm outline-none placeholder:text-zinc-500" placeholder="Search the store" />
            <div className="px-3 py-1.5 text-zinc-500 text-sm">⌘K</div>
          </div>
          <button className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm hover:bg-white/10">Sign in</button>
        </div>
      </div>
    </header>
  )
}

export default Header
