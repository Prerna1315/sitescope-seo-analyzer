"use client";

import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBox from "./components/SearchBox";
import ResultCard from "./components/ResultCard";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

type AnalysisResult = {
  status: number;
  responseTime: number;
  title: string;
  metaDescription: string;
  h1Count: number;
  missingAlt: number;
  wordCount: number;
  seoScore: number;
};

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = async (url: string) => {
    try {
      setLoading(true);

      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setResult(data);
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Failed to analyze website."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      <Navbar />

      <Hero />

      <SearchBox
        onAnalyze={handleAnalyze}
        loading={loading}
      />

      {loading ? (
        <Loader />
      ) : (
        <ResultCard result={result} />
      )}

      <Footer />
    </main>
  );
}