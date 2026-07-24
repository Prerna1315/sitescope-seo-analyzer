"use client";

import { useState } from "react";

type SearchBoxProps = {
  onAnalyze: (url: string) => void;
  loading: boolean;
};

export default function SearchBox({
  onAnalyze,
  loading,
}: SearchBoxProps) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!url.trim()) {
      alert("Please enter a website URL.");
      return;
    }

    onAnalyze(url.trim());
  };

  return (
    <section
      id="analyzer"
      className="mx-auto -mt-20 w-full max-w-4xl px-6 relative z-20"
    >
      <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
        <h2 className="mb-6 text-center text-2xl font-bold text-white">
          Analyze Your Website
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 md:flex-row"
        >
          <input
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 rounded-xl border border-white/20 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-gray-400 focus:border-cyan-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-400">
          Supports any public website URL.
        </p>
      </div>
    </section>
  );
}