// Vercel serverless function to capture email signups.
// Primary (and only) storage: a Google Sheet via an Apps Script webhook
// (GOOGLE_SHEETS_WEBHOOK_URL). This endpoint FAILS LOUDLY when storage is
// missing or broken — a non-200 + error log — so signups can never silently
// vanish again. Clients treat capture as best-effort and never gate the
// user's deliverable on this response.

export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "https://gopureprana.com");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, product, source } = req.body || {};

    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Valid email is required" });
    }

    const entry = {
      email,
      product: product || "unknown",
      source: source || "unknown",
      timestamp: new Date().toISOString(), // server-stamped
    };

    // Always visible in Vercel function logs — the audit trail.
    console.log("EMAIL_SIGNUP:", JSON.stringify(entry));

    const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!sheetsWebhook) {
      console.error(
        "EMAIL_SIGNUP_STORAGE_MISSING: GOOGLE_SHEETS_WEBHOOK_URL is not set — signup logged above but NOT persisted:",
        entry.email
      );
      return res.status(500).json({ error: "Storage not configured" });
    }

    const webhookResp = await fetch(sheetsWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    });

    if (!webhookResp.ok) {
      const text = await webhookResp.text().catch(() => "");
      console.error(
        `EMAIL_SIGNUP_STORAGE_FAILED: Sheets webhook returned ${webhookResp.status}: ${text} — entry:`,
        JSON.stringify(entry)
      );
      return res.status(502).json({ error: "Storage write failed" });
    }

    return res.status(200).json({ success: true, message: "Subscribed!" });
  } catch (err) {
    console.error("EMAIL_SIGNUP_ERROR:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
