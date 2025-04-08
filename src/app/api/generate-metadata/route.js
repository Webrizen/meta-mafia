import { auth, clerkClient } from "@clerk/nextjs/server";
import { GoogleGenAI } from "@google/genai";
import Metadata from "@/models/metadataModel";
import User from "@/models/userModel";
import dbConnect from "@/utils/db";
import Stripe from "stripe";
import { incrementRequestCount } from "@/utils/clerk";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const PLAN_LIMITS = {
  price_high: 1500,
  price_mid: 500,
  price_low: 200,
};

export async function POST(req) {
  const { userId } = await auth();
  if (!userId) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  const stripeCustomerId = user.privateMetadata.stripeCustomerId;
  const requestCount = user.privateMetadata.requestCount || 0;

  if (!stripeCustomerId) {
    return new Response(
      JSON.stringify({ error: "Stripe customer not linked" }),
      { status: 403 }
    );
  }

  // Fetch Stripe subscriptions
  const subscriptions = await stripe.subscriptions.list({
    customer: stripeCustomerId,
    status: "active",
    expand: ["data.items.data.price"],
  });

  if (!subscriptions.data.length) {
    return new Response(JSON.stringify({ error: "No active subscription" }), {
      status: 403,
    });
  }

  // Pick the highest-priced plan
  const activePlans = subscriptions.data.flatMap((sub) =>
    sub.items.data.map((i) => i.price)
  );
  const sortedPlans = activePlans.sort(
    (a, b) => (b.unit_amount || 0) - (a.unit_amount || 0)
  );
  const topPlan = sortedPlans[0];
  const planId = topPlan.id;
  const usageLimit = PLAN_LIMITS[planId] || 100;

  if (requestCount >= usageLimit) {
    return new Response(
      JSON.stringify({ error: "Usage limit exceeded for your plan." }),
      { status: 429 }
    );
  }

  try {
    const { content, url } = await req.json();
    if (!content || !url) {
      return new Response(JSON.stringify({ error: "Missing content or URL" }), {
        status: 400,
      });
    }

    const prompt = `Analyze the following website content and generate:
    1. Full metadata with advanced and basic fields for Next.js 15 websites.
    2. manifest.json with appropriate PWA settings.
    3. robots.txt to allow all crawlers but disallow /admin/.

    Content:
    ${content}

    Return the result as a JSON object in the format:
        {
          "metadata": {
            "title": {
              "default": "...",
              "template": "%s | ..."
            },
            "description": {
              "default": "...",
              "template": "%s | ..."
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

    const result = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: prompt,
    });

    const aiResponse = result.text;
    if (!aiResponse) throw new Error("Empty AI response");

    const clean = aiResponse.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(clean);

    await dbConnect();
    const newCount = await incrementRequestCount(userId);

    const metadataDoc = await Metadata.create({
      userId,
      metadata: parsed,
      url,
    });

    await User.findOneAndUpdate(
      { clerkId: userId },
      { $push: { metadata: metadataDoc._id } }
    );

    return new Response(
      JSON.stringify({
        metadata: parsed.metadata,
        manifest: parsed.manifest,
        robotsTxt: parsed.robotsTxt,
        metadataDoc: metadataDoc._id
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
