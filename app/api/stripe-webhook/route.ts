import { NextResponse } from "next/server";

/**
 * Stripe webhook endpoint (scaffold).
 * When you enable Stripe:
 * 1. Install: npm install stripe
 * 2. Verify signature using STRIPE_WEBHOOK_SECRET
 * 3. Handle events: checkout.session.completed, invoice.paid, etc.
 * 4. Never expose STRIPE_WEBHOOK_SECRET to the client
 */

export async function POST(request: Request) {
  // Placeholder: return 501 until Stripe is configured
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Webhook not configured" },
      { status: 501 }
    );
  }

  // TODO: get raw body, verify stripe signature, handle events
  return NextResponse.json({ received: true }, { status: 200 });
}
