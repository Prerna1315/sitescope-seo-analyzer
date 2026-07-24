export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <div className="relative h-20 w-20">
        <div className="absolute h-20 w-20 animate-ping rounded-full bg-cyan-500 opacity-30"></div>

        <div className="absolute h-20 w-20 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent"></div>
      </div>

      <h2 className="mt-8 text-2xl font-bold text-white">
        Analyzing Website...
      </h2>

      <p className="mt-3 text-gray-400">
        Fetching SEO metrics and performance details.
      </p>
    </div>
  );
}