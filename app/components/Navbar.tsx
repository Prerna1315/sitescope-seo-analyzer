export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-lg font-bold text-white shadow-lg">
            S
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              SiteScope
            </h1>

            <p className="text-xs text-gray-400">
              Website SEO & Performance Analyzer
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-gray-300 transition hover:text-cyan-400"
          >
            Features
          </a>

          <a
            href="#analyzer"
            className="text-sm text-gray-300 transition hover:text-cyan-400"
          >
            Analyzer
          </a>

          <a
            href="#about"
            className="text-sm text-gray-300 transition hover:text-cyan-400"
          >
            About
          </a>

          <button className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:scale-105">
            Analyze Now
          </button>
        </div>
      </div>
    </header>
  );
}