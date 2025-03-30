import dbConnect from "@/utils/db";
import Metadata from "@/models/metadataModel";
import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    await dbConnect();
    const { id, metadata } = await req.json();

    if (!id || !metadata) {
      return NextResponse.json({ success: false, error: "Missing required fields" });
    }

    const updatedMetadata = await Metadata.findByIdAndUpdate(
      id,
      { metadata },
      { new: true }
    );

    if (!updatedMetadata) {
      return NextResponse.json({ success: false, error: "Metadata not found" });
    }

    return NextResponse.json({
      success: true,
      data: updatedMetadata,
    });
  } catch (error) {
    console.error("Error updating metadata:", error.message);
    return NextResponse.json({ success: false, error: "Internal server error" });
  }
}
