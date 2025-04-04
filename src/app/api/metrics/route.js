import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import dbConnect from "@/utils/db";
import Metadata from "@/models/metadataModel";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();

    const allMetadata = await Metadata.find({ userId });

    const totalEntries = allMetadata.length;
    const totalUrls = new Set(allMetadata.map((entry) => entry.url)).size;
    const creditsUsed = totalEntries * 5; // arbitrary multiplier
    const errors = allMetadata.filter((entry) => entry.metadata?.error).length;

    return NextResponse.json({
      totalUrls,
      totalEntries,
      creditsUsed,
      errors,
    });
  } catch (error) {
    console.error("Dashboard API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}