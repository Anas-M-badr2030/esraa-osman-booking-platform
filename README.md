# Esraa Osman | Booking Platform

Starter scaffold for a mobile-first consultation booking platform.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- Supabase (database/auth, to be configured)
- Vercel deployment

## Quick start
1. Install Node.js LTS.
2. Run `npm install`
3. Copy `.env.example` to `.env.local` and add Supabase credentials.
4. Run `npm run dev`
5. Open http://localhost:3000

## Current scaffold
- `/` landing page
- `/book` booking request form (UI scaffold only; not yet connected to database)
- `/admin` dashboard placeholder
- `supabase/schema.sql` initial database schema
- `lib/supabase.ts` Supabase client helper

## Before going live
- Implement server-side validation and booking creation.
- Add authentication and admin-only authorization.
- Configure RLS policies and test them.
- Add actual availability/conflict checks.
- Confirm consent, privacy policy, retention, and cancellation policy.
- Do not store sensitive relationship/counselling notes in the booking form.
- Connect payment and notification providers only after credentials and requirements are confirmed.
