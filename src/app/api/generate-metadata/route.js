import { auth } from "@clerk/nextjs/server";
import { GoogleGenAI } from "@google/genai";
import Metadata from "@/models/metadataModel";
import User from "@/models/userModel";
import clientPromise from "@/utils/db";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

/**
 * POST API to generate metadata, manifest.json, and robots.txt.
 */
export async function POST(req) {
  // Check if the user is authenticated
  const { userId } = await auth();
  if (!userId) {
    return new Response(
      JSON.stringify({ error: "Unauthorized access. Please log in." }),
      { status: 401 }
    );
  }

  try {
    const { content } = await req.json();

    // AI Prompt to generate metadata, manifest.json, and robots.txt
    const prompt = `
        Analyze the following website content and generate:
        1. Full metadata with advanced and basic fields for Next.js 15 websites.
        2. manifest.json with appropriate PWA settings.
        3. robots.txt to allow all crawlers but disallow /admin/.
  
        Content:
        ${content}
  
        Return the result as a JSON object in the format:
        {
          "metadata": {
             title: {
    default: "...",
    template: "%s | ...",
  },
  description: {
    default:
      "...",
    template: "%s | ...",
  },
            "keywords": ["...", "..."],
            "openGraph": {
              "type": "website",
              "url": "...",
              "title": "...",
              "description": "...",
              "images": [
                {
                  "url": "...",
                  "width": 1200,
                  "height": 630,
                  "alt": "..."
                }
              ],
              "site_name": "..."
            },
            "twitter": {
              "card": "summary_large_image",
              "site": "@your_twitter",
              "title": "...",
              "description": "...",
              "images": ["..."]
            },
            "robots": {
              "index": true,
              "follow": true
            },
            "canonical": "https://example.com"
          },
          "manifest": {
            "name": "Example Site",
            "short_name": "Example",
            "start_url": "/",
            "display": "standalone",
            "background_color": "#ffffff",
            "theme_color": "#000000",
            "icons": [
              {
                "src": "/icons/icon-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
              },
              {
                "src": "/icons/icon-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
              }
            ]
          },
          "robotsTxt": "User-agent: *\\nDisallow: /admin/\\nAllow: /"
        }
      `;

    const result = await ai.models.generateContentStream({
      model: "gemini-1.5-flash",
      contents: prompt,
    });

    let aiResponse = "";
    for await (const chunk of result) {
      aiResponse += chunk.text;
    }

    const cleanResponse = aiResponse.replace(/```json|```/g, "").trim();
    const generatedData = JSON.parse(cleanResponse);

    // Save metadata to DB
    const metadata = await Metadata.create({
      userId: userId,
      metadata: generatedData,
      url,
    });

    // Associate metadata with user
    await User.findByIdAndUpdate(userId, {
      $push: { metadata: metadata._id },
    });

    return new Response(
      JSON.stringify({
        metadata: generatedData.metadata,
        manifest: generatedData.manifest,
        robotsTxt: generatedData.robotsTxt,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error generating metadata:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate metadata" }),
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    await clientPromise();
    const url = new URL(req.url);
    const documentId = url.searchParams.get("id");

    if (!documentId) {
      return NextResponse.json({ success: false, error: "Missing documentId" }, { status: 400 });
    }

    // Fetch metadata by documentId
    const metadata = await Metadata.findById(documentId);

    if (!metadata) {
      return NextResponse.json({ success: false, error: "Metadata not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: metadata,
    });
  } catch (error) {
    console.error("Error fetching metadata:", error.message);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}