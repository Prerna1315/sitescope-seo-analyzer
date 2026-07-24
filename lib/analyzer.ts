import axios from "axios";
import * as cheerio from "cheerio";

export async function analyzeWebsite(url: string) {
  let finalUrl = url.trim();

  if (
    !finalUrl.startsWith("http://") &&
    !finalUrl.startsWith("https://")
  ) {
    finalUrl = "https://" + finalUrl;
  }

  try {
    new URL(finalUrl);
  } catch {
    throw new Error("Please enter a valid website URL.");
  }

  const startTime = Date.now();

  const response = await axios.get(finalUrl, {
    timeout: 10000,
    maxRedirects: 5,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      Accept: "text/html",
    },
  });

  const responseTime = Date.now() - startTime;

  const contentType = String(response.headers["content-type"] || "");

  if (!contentType.includes("text/html")) {
    throw new Error("The provided URL is not an HTML webpage.");
  }

  const $ = cheerio.load(response.data);

  const title = $("title")
    .text()
    .replace(/\s+/g, " ")
    .replace("Close", "")
    .trim();

  const metaDescription =
    $('meta[name="description"]').attr("content")?.trim() ||
    "No meta description found.";

  const h1Count = $("h1").length;

  const missingAlt = $("img")
    .toArray()
    .filter((img) => !$(img).attr("alt"))
    .length;

  const wordCount = $("body")
    .text()
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean).length;

  let seoScore = 100;

  if (!title) seoScore -= 20;

  if (metaDescription === "No meta description found.") seoScore -= 20;

  if (h1Count === 0) seoScore -= 20;

  if (missingAlt > 0) seoScore -= Math.min(20, missingAlt * 2);

  seoScore = Math.max(0, seoScore);

  return {
    status: response.status,
    responseTime,
    title,
    metaDescription,
    h1Count,
    missingAlt,
    wordCount,
    seoScore,
  };
}