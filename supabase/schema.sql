-- Initial schema scaffold. Review and enable RLS policies before production.
create extension if not exists pgcrypto;

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  client_name text not null,
  contact_method text not null,
  service_type text not null default 'individual',
  preferred_time text,
  scheduled_at timestamptz,
  status text not null default 'new'
    check (status in ('new', 'pending_confirmation', 'confirmed', 'completed', 'cancelled')),
  payment_status text not null default 'unpaid'
    check (payment_status in ('unpaid', 'pending_verification', 'paid', 'refunded')),
  source text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists bookings_created_at_idx on public.bookings (created_at desc);
create index if not exists bookings_status_idx on public.bookings (status);
create index if not exists bookings_scheduled_at_idx on public.bookings (scheduled_at);

-- SECURITY NOTE:
-- Do not enable public SELECT/UPDATE access to bookings.
-- Implement server-side booking creation, rate limiting, validation, and RLS policies.
-- Admin reads/updates must require authenticated, authorized users.
-- Keep sensitive consultation details out of this table.
