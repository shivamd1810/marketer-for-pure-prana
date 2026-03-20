/**
 * Client-side click tracking for Amazon outbound links.
 * Loaded in Base.astro — runs on every page.
 */
(function () {
  "use strict";

  /**
   * Send a GA4 event via gtag. Falls back silently if gtag is not loaded.
   */
  function trackEvent(eventName, params) {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }
  }

  /**
   * Decorate an Amazon link with UTM parameters for on-site tracking
   * and optional Amazon Attribution tag.
   */
  function decorateAmazonLink(anchor) {
    try {
      var href = anchor.getAttribute("href");
      if (!href || href.indexOf("amazon.com") === -1) return;

      var url = new URL(href);

      // Determine context from page and element
      var pagePath = window.location.pathname;
      var linkText = (anchor.textContent || "").trim();
      var isProductPage = pagePath.startsWith("/products/");
      var slug = isProductPage
        ? pagePath.split("/products/")[1].replace(/\//g, "")
        : "homepage";

      // Set UTM params
      if (!url.searchParams.has("utm_source")) {
        url.searchParams.set("utm_source", "gopureprana");
        url.searchParams.set("utm_medium", "website");
        url.searchParams.set(
          "utm_campaign",
          isProductPage ? "product_page" : "homepage"
        );
        url.searchParams.set("utm_content", slug + "_" + slugify(linkText));
      }

      // Amazon Attribution tag (set via data attribute on body or hardcoded)
      var attrTag = document.body.getAttribute("data-amazon-attribution") || "";
      if (attrTag && !url.searchParams.has("maas")) {
        url.searchParams.set("maas", attrTag);
      }

      anchor.setAttribute("href", url.toString());
    } catch (e) {
      // Don't break the page if URL parsing fails
    }
  }

  function slugify(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_|_$/g, "");
  }

  /**
   * Track click on an Amazon link as a GA4 event.
   */
  function handleAmazonClick(event) {
    var anchor = event.currentTarget;
    var href = anchor.getAttribute("href") || "";
    var linkText = (anchor.textContent || "").trim();
    var pagePath = window.location.pathname;

    // Extract ASIN from Amazon URL (e.g., /dp/B0DZ23LJGJ)
    var asinMatch = href.match(/\/dp\/([A-Z0-9]+)/);
    var asin = asinMatch ? asinMatch[1] : "unknown";

    trackEvent("amazon_click", {
      event_category: "outbound",
      event_label: linkText,
      link_url: href,
      product_asin: asin,
      page_path: pagePath,
      transport_type: "beacon",
    });

    // Also fire the standard GA4 outbound click
    trackEvent("click", {
      event_category: "outbound",
      link_url: href,
      outbound: true,
    });
  }

  /**
   * Initialize: find all Amazon links, decorate them, and attach click handlers.
   */
  function init() {
    var links = document.querySelectorAll('a[href*="amazon.com"]');
    for (var i = 0; i < links.length; i++) {
      decorateAmazonLink(links[i]);
      links[i].addEventListener("click", handleAmazonClick);
    }
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
