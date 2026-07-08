import type { Session } from "@supabase/supabase-js";

export type AuthSession = Session;

export type SupabaseAuthenticatedIdentity = {
  id: string;
  email: string | null;
};

export class AuthError extends Error {
  readonly code: string;

  constructor(code: string, message: string) {
    super(message);
    this.code = code;
    this.name = new.target.name;
  }
}

export class UnauthenticatedError extends AuthError {
  constructor(message = "Authentication is required.") {
    super("UNAUTHENTICATED", message);
  }
}
