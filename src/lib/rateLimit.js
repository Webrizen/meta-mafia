import dbConnect from "@/utils/db";
import userModel from "@/models/userModel";

const RATE_LIMITS = {
  basic: 100, // Basic Plan: 100 requests/month
  pro: 1000,  // Pro Plan: 1000 requests/month
};

export async function checkRateLimit(userId) {
  await dbConnect();

  const user = await userModel.findById(userId);
  if (!user) {
    throw new Error("User not found.");
  }

  const limit = RATE_LIMITS[user.plan] || RATE_LIMITS.basic;

  if (user.requestCount >= limit) {
    throw new Error("API limit exceeded for your plan.");
  }

  // Increment request count
  user.requestCount += 1;
  await user.save();
}
