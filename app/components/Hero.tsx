export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background Blur */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
          Website SEO & Performance Analyzer
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Analyze Any Website
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            In Seconds
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300">
          SiteScope helps developers, marketers and businesses instantly inspect
          website performance, SEO health and accessibility with a single URL.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105">
            Start Analysis
          </button>

          <button className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
            View Features
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
            <h2 className="text-3xl font-bold text-cyan-400">200+</h2>
            <p className="mt-2 text-sm text-gray-400">HTTP Status Check</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
            <h2 className="text-3xl font-bold text-cyan-400">SEO</h2>
            <p className="mt-2 text-sm text-gray-400">Meta & H1 Analysis</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
            <h2 className="text-3xl font-bold text-cyan-400">Fast</h2>
            <p className="mt-2 text-sm text-gray-400">Response Time</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
            <h2 className="text-3xl font-bold text-cyan-400">AI Ready</h2>
            <p className="mt-2 text-sm text-gray-400">Developer Friendly</p>
          </div>
        </div>
      </div>
    </section>
  );
}