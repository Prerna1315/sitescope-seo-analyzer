import {
  FaCheckCircle,
  FaClock,
  FaSearch,
  FaHeading,
  FaImage,
  FaFileAlt,
  FaCopy,
} from "react-icons/fa";

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

type Props = {
  result: AnalysisResult | null;
};

export default function ResultCard({ result }: Props) {
  if (!result) return null;

  const copyReport = async () => {
    const text = `
Website Analysis Report

HTTP Status : ${result.status}
Response Time : ${result.responseTime} ms
SEO Score : ${result.seoScore}/100
H1 Count : ${result.h1Count}
Missing ALT : ${result.missingAlt}
Word Count : ${result.wordCount}

Title :
${result.title}

Meta Description :
${result.metaDescription}
`;

    await navigator.clipboard.writeText(text);

    alert("Report copied successfully.");
  };

  const cards = [
    {
      icon: <FaCheckCircle />,
      title: "HTTP Status",
      value: result.status,
      color:
        result.status === 200
          ? "text-green-400"
          : "text-red-400",
    },
    {
      icon: <FaClock />,
      title: "Response Time",
      value: `${result.responseTime} ms`,
      color:
        result.responseTime < 800
          ? "text-green-400"
          : "text-yellow-400",
    },
        {
      icon: <FaSearch />,
      title: "SEO Score",
      value: `${result.seoScore}/100`,
      color:
        result.seoScore >= 80
          ? "text-green-400"
          : result.seoScore >= 60
          ? "text-yellow-400"
          : "text-red-400",
    },
    {
      icon: <FaHeading />,
      title: "H1 Count",
      value: result.h1Count,
      color: "text-cyan-400",
    },
    {
      icon: <FaImage />,
      title: "Missing ALT",
      value: result.missingAlt,
      color:
        result.missingAlt === 0
          ? "text-green-400"
          : "text-red-400",
    },
    {
      icon: <FaFileAlt />,
      title: "Word Count",
      value: result.wordCount,
      color: "text-cyan-400",
    },
  ];

  return (
    <section className="mx-auto mt-20 max-w-7xl px-6 pb-20">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-5xl font-bold text-white">
          Analysis Report
        </h2>

        <button
          onClick={copyReport}
          className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:bg-cyan-600"
        >
          <FaCopy />
          Copy Report
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
          >
            <div className={`mb-4 text-3xl ${card.color}`}>
              {card.icon}
            </div>

            <p className="text-sm uppercase tracking-widest text-gray-400">
              {card.title}
            </p>

            <h3 className={`mt-3 text-4xl font-bold ${card.color}`}>
              {card.value}
            </h3>
          </div>
        ))}
      </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h3 className="mb-4 text-2xl font-bold text-white">
            Page Title
          </h3>

          <p className="break-words text-lg leading-8 text-gray-300">
            {result.title || "No title found"}
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h3 className="mb-4 text-2xl font-bold text-white">
            Meta Description
          </h3>

          <p className="leading-8 text-gray-300">
            {result.metaDescription}
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6 text-center">
        <h3 className="text-2xl font-bold text-cyan-300">
          Overall SEO Health
        </h3>

        <div className="mt-4 text-6xl font-extrabold text-white">
          {result.seoScore}
          <span className="text-3xl text-cyan-300">/100</span>
        </div>

        <p className="mt-4 text-gray-400">
          This score is calculated using the page title, meta description,
          heading structure, image accessibility, and other basic SEO factors.
        </p>
      </div>
    </section>
  );
}