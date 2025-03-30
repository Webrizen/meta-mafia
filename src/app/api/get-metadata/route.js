import dbConnect from "@/utils/db";
import Metadata from "@/models/metadataModel";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnect();
    const url = new URL(req.url);
    const documentId = url.searchParams.get("id");

    if (!documentId) {
      return NextResponse.json({ success: false, error: "Missing documentId" });
    }

    const metadata = await Metadata.findById(documentId);

    if (!metadata) {
      return NextResponse.json({ success: false, error: "Metadata not found" });
    }

    return NextResponse.json({
      success: true,
      data: metadata,
    });
  } catch (error) {
    console.error("Error fetching metadata:", error.message);
    return NextResponse.json({ success: false, error: "Internal server error" });
  }
}
