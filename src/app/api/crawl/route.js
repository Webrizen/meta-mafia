import { auth } from "@clerk/nextjs/server";
import * as cheerio from "cheerio";
import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function getGeminiSummary(content) {
  const response = await ai.models.generateContentStream({
    model: "gemini-1.5-flash",
    contents: `Summarize the following website content briefly:\n\n${content}`,
  });

  let summary = "";
  for await (const chunk of response) {
    summary += chunk.candidates[0]?.content?.parts[0]?.text || "";
  }

  return summary.trim() || "No summary available.";
}

export async function POST(req) {
  const { userId } = await auth();
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { url } = await req.json();
  if (!url) {
    return Response.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return Response.json(
        { error: "Failed to fetch the URL" },
        { status: 500 }
      );
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // Extract page content (text only)
    const content = $("body").text().replace(/\s+/g, " ").trim().slice(0, 5000);

    // Send content to Gemini for summarization
    const summary = await getGeminiSummary(content);

    return Response.json({ success: true, summary });
  } catch (error) {
    console.error("Crawling error:", error);
    return Response.json({ error: "Failed to process content" }, { status: 500 });
  }
}