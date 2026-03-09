/**
 * Stripe integration scaffold.
 * Use this when you add paid consultation, digital invoices, or subscription flows.
 *
 * Required env vars (when you enable Stripe):
 * - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
 * - STRIPE_SECRET_KEY
 * - STRIPE_WEBHOOK_SECRET (for webhooks)
 *
 * Do not expose secret key or webhook secret on the client.
 */

export const STRIPE_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "";

export const isStripeConfigured = Boolean(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY &&
    process.env.STRIPE_SECRET_KEY
);
