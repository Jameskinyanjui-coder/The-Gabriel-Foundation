import { createClient } from '@supabase/supabase-js';

// We use placeholders if the env vars are missing so the app doesn't crash on load.
// (It will still fail if you try to submit the form without real keys)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
