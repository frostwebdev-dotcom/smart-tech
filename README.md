# SmartTech Agency Website

Production-ready Next.js website for a web/app/SaaS/AI development agency. Built with the App Router, TypeScript, Tailwind CSS, Framer Motion, and Supabase for lead capture.

## Stack

- **Next.js** (App Router), **TypeScript**, **Tailwind CSS v4**
- **Framer Motion** – animations
- **Lucide React** – icons
- **Supabase** – contact form submissions (leads)
- **Stripe** – scaffold only (ready for future payments)

## Setup

1. **Clone and install**

   ```bash
   cd smarttech-agency
   npm install
   ```

2. **Environment variables**

   Copy `.env.example` to `.env.local` and fill in:

   - `NEXT_PUBLIC_SITE_URL` – your production URL (e.g. `https://smarttech.example.com`)
   - Supabase: create a project at [supabase.com](https://supabase.com), then set:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `SUPABASE_SERVICE_ROLE_KEY` (for server-side insert; keep secret)

3. **Supabase table**

   Run the SQL in `supabase/migrations/001_leads_table.sql` in the Supabase SQL Editor (or via CLI) to create the `leads` table.

4. **Run locally**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  page.tsx              # Home
  layout.tsx            # Root layout, metadata, Navbar, Footer
  services/
  projects/
  about/
  contact/
  blog/                 # Blog scaffold
  privacy/
  terms/
  api/stripe-webhook/   # Stripe webhook scaffold
components/
  layout/               # Navbar, Footer, JSON-LD
  sections/             # Hero, Trust, Services, Projects, Process, Testimonials, CTA
  ui/                   # Button, Card, Input, Label, Select, Textarea
  contact/              # ContactForm
actions/
  contact.ts            # Server action for form submit
lib/
  utils.ts
  constants.ts          # Copy, services, projects, testimonials
  supabase/             # Client and server Supabase
  validations/contact.ts
  stripe/config.ts      # Stripe scaffold
types/
  index.ts
supabase/
  migrations/           # SQL for leads table
```

## Customization

- **Branding**: Replace "SmartTech" in `lib/constants.ts`, layout, and footer. Update logo text in `components/layout/navbar.tsx`.
- **Copy**: Edit `lib/constants.ts` and page content in `app/*/page.tsx`.
- **Contact email**: Replace `hello@smarttech.example.com` in Contact page and legal pages.
- **Images**: Add hero/project images to `public/` and use `next/image` where needed.
- **Supabase**: Ensure RLS and policies match your needs; add email notifications (e.g. Edge Function or Zapier on insert) if desired.

## Deployment (Vercel)

1. Push to GitHub and import the repo in Vercel.
2. Add the same env vars in Vercel (Settings → Environment Variables).
3. Deploy. Set `NEXT_PUBLIC_SITE_URL` to your Vercel URL or custom domain.

## SEO

- Metadata and Open Graph are set in `app/layout.tsx` and per-page in `app/*/page.tsx`.
- `app/sitemap.ts` and `app/robots.ts` generate sitemap and robots.txt.
- JSON-LD Organization schema is in the root layout.

## Stripe (future)

The codebase includes a Stripe scaffold (`lib/stripe/config.ts`, `app/api/stripe-webhook/route.ts`). When you add paid flows:

1. Install `stripe` and set env vars (see `.env.example`).
2. Implement webhook signature verification and event handling.
3. Add checkout or invoice logic as needed.

## License

Private. All rights reserved.
