# Pure Prana Email Welcome Sequence

Configure these 3 emails in your email service (Buttondown, ConvertKit, or Mailchimp).
Each email triggers after signup, spaced 2 days apart.

---

## Email 1: Welcome + Guide Delivery (Immediate)

**Subject:** Your Free Ayurvedic Wellness Guide is Here
**Preview:** Plus a special 10% discount on your first order

Hi {first_name|there},

Welcome to the Pure Prana family!

Your **Ayurvedic Wellness Guide** is attached to this email. Here's what you'll find inside:

- **Morning & evening Ayurvedic routines** for natural balance
- **10 essential herb profiles** (Ashwagandha, Triphala, Brahmi & more)
- **5 traditional recipes** including Golden Milk and Tulsi Tea
- **Your Dosha guide** — discover your unique body type

**[Download Your Free Guide](link-to-pdf)**

As a thank-you for joining, here's **10% off** your first Pure Prana order on Amazon. Just use code **WELCOME10** at checkout.

**[Shop Pure Prana on Amazon](https://www.amazon.com/dp/B0DZ23LJGJ?utm_source=gopureprana&utm_medium=email&utm_campaign=welcome_1)**

To your wellness,
The Pure Prana Team

---

## Email 2: Hero Product Spotlight (Day 2)

**Subject:** The #1 herb for stress (backed by 300+ studies)
**Preview:** Why Ashwagandha is the most important herb in your wellness toolkit

Hi {first_name|there},

Did you know that **Ashwagandha** — known as the "King of Herbs" in Ayurveda — has been studied in over 300 clinical trials?

Here's what the research shows:

- **Reduces cortisol** by up to 30% in 60 days
- **Improves sleep quality** in 72% of participants
- **Boosts energy** without the crash of caffeine
- **Supports immunity** and overall vitality

That's why Ashwagandha is the cornerstone of our two best-selling formulas:

**[Power Blend — Energy & Vitality](https://www.amazon.com/dp/B0CWS4NCCF?utm_source=gopureprana&utm_medium=email&utm_campaign=welcome_2)** (4.7★, 129 reviews)
For sustained energy, stamina, and adaptogenic stress resilience.

**[Bacopa & Ashwagandha — Brain Health](https://www.amazon.com/dp/B0G3P9BXHK?utm_source=gopureprana&utm_medium=email&utm_campaign=welcome_2)** (4.6★, 87 reviews)
For memory, focus, and mental clarity.

Both are GMP-certified, third-party tested, and made in the USA.

**[Read our full Ashwagandha guide on the blog →](https://gopureprana.com/blog/ashwagandha-benefits-and-uses/?utm_source=gopureprana&utm_medium=email&utm_campaign=welcome_2)**

To your wellness,
The Pure Prana Team

---

## Email 3: Social Proof + Full Product Line (Day 4)

**Subject:** Why 50,000+ customers trust Pure Prana
**Preview:** Real results from real people — and our complete product line

Hi {first_name|there},

Over **50,000 customers** have chosen Pure Prana for their Ayurvedic wellness journey. Here's why:

**★★★★★** "I've tried many Ashwagandha supplements and this one is by far the best. I notice the difference within a week."
— Verified Amazon Customer

**★★★★★** "The hormone balance formula has been life-changing for me. No more mood swings before my period."
— Verified Amazon Customer

**★★★★★** "Finally a supplement brand that actually uses quality ingredients. You can taste the difference."
— Verified Amazon Customer

### Our Complete Product Line

| Product | Best For | Rating |
|---------|----------|--------|
| [Hormone Balance](https://www.amazon.com/dp/B0DZ23LJGJ?utm_source=gopureprana&utm_medium=email&utm_campaign=welcome_3) | Women's hormonal wellness | 4.8★ (489 reviews) |
| [Power Blend](https://www.amazon.com/dp/B0CWS4NCCF?utm_source=gopureprana&utm_medium=email&utm_campaign=welcome_3) | Energy & vitality | 4.7★ (129 reviews) |
| [Bacopa & Ashwagandha](https://www.amazon.com/dp/B0G3P9BXHK?utm_source=gopureprana&utm_medium=email&utm_campaign=welcome_3) | Memory & focus | 4.6★ (87 reviews) |
| [Arjuna & Hawthorn](https://www.amazon.com/dp/B0G3KFMQ42?utm_source=gopureprana&utm_medium=email&utm_campaign=welcome_3) | Heart health | 4.7★ (64 reviews) |
| [Elderberry & Giloy](https://www.amazon.com/dp/B0G3KPT191?utm_source=gopureprana&utm_medium=email&utm_campaign=welcome_3) | Immune defense | 4.7★ (52 reviews) |
| [Glutathione & Collagen](https://www.amazon.com/dp/B0G3KDYKY4?utm_source=gopureprana&utm_medium=email&utm_campaign=welcome_3) | Skin, hair & nails | 4.8★ (73 reviews) |
| [Green Tea & Garcinia](https://www.amazon.com/dp/B0G3KKQ53V?utm_source=gopureprana&utm_medium=email&utm_campaign=welcome_3) | Weight management | 4.6★ (41 reviews) |

All products ship **FREE with Amazon Prime**. Plus, every purchase is backed by our **60-day money-back guarantee**.

**[Shop All Products on Amazon →](https://www.amazon.com/s?k=pure+prana+ayurvedic&utm_source=gopureprana&utm_medium=email&utm_campaign=welcome_3)**

To your wellness,
The Pure Prana Team

---

## Setup Notes

1. **Email Service:** Recommended: Buttondown (free up to 100 subscribers, simple API) or ConvertKit (free up to 1,000)
2. **Netlify Forms Integration:** Connect Netlify form submissions to your email service via:
   - Netlify email notifications (Settings → Forms → Notifications)
   - Zapier/Make.com automation (Netlify Forms → Email Service)
   - Netlify Functions webhook (for direct API integration)
3. **Lead Magnet PDF:** Create the Ayurvedic Wellness Guide as a PDF and host on the site at `/wellness-guide.pdf`
4. **UTM Tracking:** All Amazon links include UTM parameters for attribution tracking
5. **Unsubscribe:** Handled automatically by the email service (CAN-SPAM compliant)
