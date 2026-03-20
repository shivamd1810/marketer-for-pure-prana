// Vercel serverless function to capture email signups
// Emails are stored in Vercel KV if configured, otherwise logged and returned
// To persist emails, set up Vercel KV or connect to an email service provider

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
    const { email, source } = req.body;

    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Valid email is required" });
    }

    const timestamp = new Date().toISOString();
    const entry = { email, source: source || "unknown", timestamp };

    // Log the signup (always visible in Vercel function logs)
    console.log("EMAIL_SIGNUP:", JSON.stringify(entry));

    // If Google Sheets webhook URL is configured, forward there
    const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (sheetsWebhook) {
      try {
        await fetch(sheetsWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(entry),
        });
      } catch (err) {
        console.error("Google Sheets webhook failed:", err.message);
      }
    }

    // If Mailchimp is configured, add subscriber
    const mcApiKey = process.env.MAILCHIMP_API_KEY;
    const mcListId = process.env.MAILCHIMP_LIST_ID;
    if (mcApiKey && mcListId) {
      const dc = mcApiKey.split("-").pop();
      try {
        await fetch(
          `https://${dc}.api.mailchimp.com/3.0/lists/${mcListId}/members`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${mcApiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email_address: email,
              status: "subscribed",
              tags: [source || "website"],
            }),
          }
        );
      } catch (err) {
        console.error("Mailchimp subscription failed:", err.message);
      }
    }

    return res.status(200).json({ success: true, message: "Subscribed!" });
  } catch (err) {
    console.error("Subscribe error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
