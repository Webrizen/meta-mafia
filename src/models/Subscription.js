import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  stripeCustomerId: String,
  stripeSubscriptionId: String,
  plan: String,
  status: {
    type: String,
    enum: ["active", "canceled", "past_due"],
    default: "canceled",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Subscription ||
  mongoose.model("Subscription", subscriptionSchema);