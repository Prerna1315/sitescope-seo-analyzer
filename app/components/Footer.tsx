export default function Footer() {
  return (
    <footer
      id="about"
      className="mt-24 border-t border-white/10 bg-black/20 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div>
          <h2 className="text-2xl font-bold text-white">
            SiteScope
          </h2>

          <p className="mt-2 text-gray-400">
            Website SEO & Performance Analyzer
          </p>
        </div>

        <div className="text-center text-sm text-gray-400 md:text-right">
          <p>Built for Digital Heroes Training Task</p>

          <p className="mt-2">
            © {new Date().getFullYear()} SiteScope. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}