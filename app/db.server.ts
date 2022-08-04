import { createClient } from "@supabase/supabase-js";

const baseUrl = process.env.SUPABASE_BASE_URL || "";
const publicKey = process.env.SUPABASE_PUBLIC_KEY || "";

export const supabase = createClient(baseUrl, publicKey);
