import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Do not import this client in server code that needs elevated privileges.
// Never expose a Supabase service-role key to the browser.
export function getSupabaseBrowserClient() {
  if (!url || !anonKey) {
    throw new Error("Missing Supabase environment variables. Copy .env.example to .env.local.");
  }
  return createClient(url, anonKey);
}
