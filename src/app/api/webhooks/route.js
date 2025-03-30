import { Webhook } from "svix";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import User from "@/models/userModel";
import dbConnect from "@/utils/db";

const SIGNING_SECRET = process.env.SIGNING_SECRET;

export async function POST(req) {
  if (!SIGNING_SECRET) {
    console.error("Error: Missing SIGNING_SECRET in .env file.");
    return NextResponse.json({ success: false, error: "Missing signing secret" });
  }

  const wh = new Webhook(SIGNING_SECRET);

  // Get headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return NextResponse.json({ success: false, error: "Missing Svix headers" });
  }

  // Get request body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt;
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return NextResponse.json({ success: false, error: "Verification failed" });
  }

  const eventType = evt.type;
  const userInfo = evt.data;

  await dbConnect(); // ✅ Correct DB connection

  // Handle event types
  if (eventType === "user.created") {
    const { id, first_name, last_name, email_addresses, image_url } = userInfo;

    const createdUser = await User.create({
      clerkId: id,
      firstName: first_name,
      lastName: last_name,
      email: email_addresses[0].email_address,
      imageUrl: image_url,
    });

    return NextResponse.json({ success: true, user: createdUser });
  }

  if (eventType === "user.updated") {
    const updatedUser = {
      name: `${userInfo.first_name || ""} ${userInfo.last_name || ""}`.trim(),
      email: userInfo.email_addresses[0]?.email_address || "",
    };

    const updated = await User.findOneAndUpdate(
      { clerkId: userInfo.id },
      updatedUser,
      { new: true }
    );
    return NextResponse.json({ success: true, user: updated });
  }

  if (eventType === "user.deleted") {
    await User.findOneAndDelete({ clerkId: userInfo.id });
    return NextResponse.json({ success: true, message: "User deleted successfully" });
  }

  return NextResponse.json({ success: true, message: "Event received" });
}