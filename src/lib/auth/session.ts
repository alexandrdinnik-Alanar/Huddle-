import "server-only";

import { getSupabaseServerClient } from "./server";
import type { AuthSession } from "./types";
import { AuthError } from "./types";

export async function getSession(): Promise<AuthSession | null> {
  const supabase = await getSupabaseServerClient();
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    throw new AuthError("SESSION_LOOKUP_FAILED", "Unable to resolve Supabase session.");
  }

  return data.session;
}
