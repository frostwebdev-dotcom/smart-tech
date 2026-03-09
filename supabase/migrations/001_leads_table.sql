-- Leads / contact form submissions
-- Run this in Supabase SQL Editor or via Supabase CLI

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  company text,
  project_type text not null,
  budget_range text not null,
  timeline text not null,
  message text not null,
  source text default 'contact_page',
  created_at timestamptz not null default now()
);

-- Optional: enable RLS and allow service role to insert (service role bypasses RLS by default)
alter table public.leads enable row level security;

-- Policy: no direct public access; use service role from your app
create policy "Service role can do all"
  on public.leads
  for all
  to service_role
  using (true)
  with check (true);

-- Optional: index for listing by date
create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- Optional: for future email notifications, you can add a trigger or use Supabase Edge Functions
-- to send an email when a row is inserted. Leave a comment for your team:
-- "To send email on new lead: create Edge Function on insert or use Zapier/Make webhook."
