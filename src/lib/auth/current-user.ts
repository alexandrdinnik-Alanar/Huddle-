import "server-only";

import { getSupabaseServerClient } from "./server";
import type { SupabaseAuthenticatedIdentity } from "./types";
import { AuthError, UnauthenticatedError } from "./types";

function toSupabaseAuthenticatedIdentity(user: {
  id: string;
  email?: string;
}): SupabaseAuthenticatedIdentity {
  return {
    id: user.id,
    email: user.email ?? null,
  };
}

export async function getCurrentUser(): Promise<SupabaseAuthenticatedIdentity | null> {
  const supabase = await getSupabaseServerClient();
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw new AuthError("AUTH_USER_LOOKUP_FAILED", "Unable to resolve authenticated Supabase user.");
  }

  if (!data.user) {
    return null;
  }

  return toSupabaseAuthenticatedIdentity(data.user);
}

export async function requireUser(): Promise<SupabaseAuthenticatedIdentity> {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    throw new UnauthenticatedError();
  }

  return currentUser;
}
