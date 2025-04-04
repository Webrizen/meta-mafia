import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  stripeCustomerId: String,
  stripeSubscriptionId: String,
  plan: {
    type: String,
    default: "basic", // Default plan
  },
  status: {
    type: String,
    enum: ["active", "canceled", "past_due"],
    default: "canceled", // Default status
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

export default mongoose.models.Subscription ||
  mongoose.model("Subscription", subscriptionSchema);