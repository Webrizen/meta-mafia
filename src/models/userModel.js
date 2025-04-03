import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    clerkId: { type: String, unique: true, required: true },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true },
    imageUrl: { type: String },
    requestCount: { type: Number, default: 0 }, // Track API requests
    plan: { type: String, enum: ["basic", "pro"], default: "basic" }, // Plan info
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
