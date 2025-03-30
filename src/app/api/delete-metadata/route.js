import clientPromise from "@/utils/db";
import Metadata from "@/models/metadataModel";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    await clientPromise();
    const url = new URL(req.url);
    const documentId = url.searchParams.get("id");

    if (!documentId) {
      return NextResponse.json({ success: false, error: "Missing documentId" });
    }

    const deletedMetadata = await Metadata.findByIdAndDelete(documentId);

    if (!deletedMetadata) {
      return NextResponse.json({ success: false, error: "Metadata not found" });
    }

    return NextResponse.json({
      success: true,
      message: "Metadata deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting metadata:", error.message);
    return NextResponse.json({ success: false, error: "Internal server error" });
  }
}
