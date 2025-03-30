import dbConnect from "@/utils/db";
import Metadata from "@/models/metadataModel";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnect();
    const url = new URL(req.url);
    const clerkId = url.searchParams.get("clerkId");

    if (!clerkId) {
      return NextResponse.json({ success: false, error: "Missing clerkId" });
    }

    const metadataList = await Metadata.find({ userId: clerkId });

    return NextResponse.json({
      success: true,
      data: metadataList,
    });
  } catch (error) {
    console.error("Error fetching metadata list:", error.message);
    return NextResponse.json({ success: false, error: "Internal server error" });
  }
}
