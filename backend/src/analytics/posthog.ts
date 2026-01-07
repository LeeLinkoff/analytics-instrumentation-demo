import { PostHog } from "posthog-node";

/*
 * Optional analytics client.
 *  - If POSTHOG_API_KEY is missing, analytics are disabled (no-op).
 *  - App must never fail or block on analytics.
 */

const apiKey = process.env.POSTHOG_API_KEY;

let client: PostHog | null = null;

if (apiKey) {
  client = new PostHog(apiKey, {
    host: process.env.POSTHOG_HOST || "https://app.posthog.com"
  });
} else if (process.env.NODE_ENV !== "production") {
  // Development only visibility so we know analytics are intentionally disabled
  console.log("[analytics] PostHog disabled (no API key)");
}

export const posthog = client;