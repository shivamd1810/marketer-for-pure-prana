/**
 * Analytics and tracking utilities for Pure Prana.
 *
 * - GA4 event tracking for outbound Amazon clicks
 * - UTM parameter decoration on Amazon links
 * - Amazon Attribution tag support
 */

// GA4 Measurement ID — replace with actual ID once GA4 property is created
export const GA4_MEASUREMENT_ID = "G-XXXXXXXXXX";

// Amazon Attribution tag — generate from Amazon Attribution console and replace
// https://advertising.amazon.com/attribution
export const AMAZON_ATTRIBUTION_TAG = "";

/**
 * Build a UTM-decorated Amazon URL.
 * Preserves the original Amazon path and appends campaign tracking params.
 */
export function buildTrackedAmazonUrl(
  baseUrl: string,
  opts: {
    source?: string;
    medium?: string;
    campaign?: string;
    content?: string;
  } = {}
): string {
  const url = new URL(baseUrl);

  // UTM params (these are stripped by Amazon but useful for our own GA4 tracking
  // when the click is measured on our site before redirect)
  const source = opts.source ?? "gopureprana";
  const medium = opts.medium ?? "website";
  const campaign = opts.campaign ?? "product_page";
  const content = opts.content ?? "";

  url.searchParams.set("utm_source", source);
  url.searchParams.set("utm_medium", medium);
  url.searchParams.set("utm_campaign", campaign);
  if (content) {
    url.searchParams.set("utm_content", content);
  }

  // Amazon Attribution tag (if configured)
  if (AMAZON_ATTRIBUTION_TAG) {
    url.searchParams.set("maas", AMAZON_ATTRIBUTION_TAG);
  }

  return url.toString();
}
