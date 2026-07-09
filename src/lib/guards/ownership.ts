import { OwnershipDeniedError } from "./errors";

export function requireOwner(trustedActorOwnerId: string, trustedResourceOwnerId: string): void {
  if (
    trustedActorOwnerId.length === 0 ||
    trustedResourceOwnerId.length === 0 ||
    trustedActorOwnerId !== trustedResourceOwnerId
  ) {
    throw new OwnershipDeniedError();
  }
}
