import { RoleKey } from "@prisma/client";

export { RoleKey };

export const ALL_ROLE_KEYS = [
  RoleKey.PARENT,
  RoleKey.SELLER,
  RoleKey.ORGANIZER,
  RoleKey.EXPERT,
  RoleKey.PARTNER,
  RoleKey.MUNICIPALITY_USER,
  RoleKey.MODERATOR,
  RoleKey.ADMIN,
  RoleKey.SUPER_ADMIN,
  RoleKey.SYSTEM,
] as const satisfies readonly RoleKey[];

export type PermissionSubject = {
  roles: readonly RoleKey[];
};
