# Pure Prana Analytics & Tracking Plan

## Overview

This document describes how we track external traffic from gopureprana.com to Amazon product listings, enabling us to correlate website visits with Amazon sales.

## 1. Google Analytics 4 (GA4)

### Setup
1. Create a GA4 property at [Google Analytics](https://analytics.google.com) → Admin → Create Property
2. Add a Web data stream for `gopureprana.com`
3. Copy the Measurement ID (format: `G-XXXXXXXXXX`)
4. Set the environment variable: `PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX`

### What GA4 Tracks Automatically
- Page views (all pages)
- Session data (source, medium, device, geo)
- Scroll depth, engagement time

### Custom Events We Fire

| Event Name | Trigger | Parameters |
|---|---|---|
| `amazon_click` | User clicks any "Buy on Amazon" link | `product_asin`, `link_url`, `page_path`, `event_label` |
| `click` (outbound) | Same as above (standard outbound click) | `link_url`, `outbound: true` |

### GA4 Reports to Monitor
- **Engagement → Events**: Filter by `amazon_click` to see total outbound clicks
- **Engagement → Pages**: See which product pages drive the most traffic
- **Acquisition → Traffic acquisition**: See how users find gopureprana.com
- **Custom explorations**: Build a funnel from page_view → amazon_click

## 2. UTM Parameter Tracking

All outbound Amazon links are automatically decorated with UTM parameters by our client-side tracking script (`src/scripts/tracking.js`).

### UTM Parameters Applied

| Parameter | Value | Purpose |
|---|---|---|
| `utm_source` | `gopureprana` | Identifies our website as the traffic source |
| `utm_medium` | `website` | Traffic medium |
| `utm_campaign` | `product_page` or `homepage` | Which page type the click came from |
| `utm_content` | `{slug}_{link_text}` | Specific product and CTA variant |

**Note:** Amazon strips UTM parameters on arrival, but they are captured by GA4 on our site before the redirect. This lets us track which pages and CTAs drive the most clicks.

## 3. Amazon Attribution

Amazon Attribution lets you measure how non-Amazon marketing (like our website) drives Amazon sales.

### Setup Steps
1. Go to [Amazon Attribution](https://advertising.amazon.com/attribution)
2. Create a new campaign for "gopureprana.com"
3. Create attribution tags for each product or a single tag for the whole site
4. Copy the attribution tag value
5. Set the environment variable: `PUBLIC_AMAZON_ATTRIBUTION_TAG=<your-tag>`

### How It Works
- The tag is appended as `?maas=<tag>` to all outbound Amazon links
- Amazon uses this to attribute sales back to our website traffic
- View attribution reports in Amazon Advertising console

### What Amazon Attribution Reports
- Click-throughs from our site
- Detail page views on Amazon
- Add-to-carts
- Purchases (sales!)
- Revenue attributed to our traffic

## 4. Click Tracking Implementation

### Architecture
```
User visits gopureprana.com
    → GA4 records page_view
    → User clicks "Buy on Amazon"
        → tracking.js fires amazon_click event to GA4
        → tracking.js decorates URL with UTM + Attribution params
        → User redirected to Amazon product page
        → Amazon Attribution tracks downstream conversion
```

### Files
- `src/layouts/Base.astro` — GA4 script tag + tracking script loader
- `src/scripts/tracking.js` — Client-side click tracking and URL decoration
- `src/scripts/analytics.ts` — Server-side tracking utilities (for future SSR use)
- `.env.example` — Environment variable template

## 5. Correlating Website Visits with Amazon Sales

To connect the dots between website traffic and Amazon sales:

1. **GA4 amazon_click events**: Shows how many clicks we send to Amazon, broken down by product (ASIN), page, and CTA
2. **Amazon Attribution reports**: Shows how many of those clicks convert to detail page views, add-to-carts, and purchases
3. **Cross-reference**: Compare GA4 click volume with Attribution conversion data to calculate conversion rates

### Key Metrics to Track
- **Click-through rate (CTR)**: amazon_clicks / page_views per product page
- **Amazon conversion rate**: Purchases / amazon_clicks (from Attribution)
- **Revenue per click**: Attribution revenue / amazon_clicks
- **Top-performing pages**: Which product pages drive the most sales

## 6. Environment Variables

| Variable | Required | Description |
|---|---|---|
| `PUBLIC_GA4_MEASUREMENT_ID` | Yes | GA4 Measurement ID (e.g., `G-ABC123DEF4`) |
| `PUBLIC_AMAZON_ATTRIBUTION_TAG` | No | Amazon Attribution tag for sales tracking |
