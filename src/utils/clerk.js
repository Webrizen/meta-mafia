import { clerkClient } from "@clerk/nextjs/server";

export async function incrementRequestCount(userId) {
  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  const currentCount = user.privateMetadata?.requestCount || 0;

  await client.users.updateUserMetadata(userId, {
    privateMetadata: {
      requestCount: currentCount + 1,
    },
  });

  return currentCount + 1;
}