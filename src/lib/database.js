import dbConnect from "@/utils/db";// Your DB connection

export async function updateUserSubscription(userId, subscriptionData) {
  return dbConnect.user.update({
    where: { id: userId },
    data: {
      stripeCustomerId: subscriptionData.stripeCustomerId,
      stripeSubscriptionId: subscriptionData.stripeSubscriptionId,
      subscriptionStatus: subscriptionData.status,
    },
  });
}
