import { PrismaClient, RoleKey } from "@prisma/client";

type SeedRole = {
  key: RoleKey;
  name: string;
  description: string;
};

const initialRoles: readonly SeedRole[] = [
  {
    key: RoleKey.PARENT,
    name: "Parent",
    description: "Family account for parents and guardians using Huddle.",
  },
  {
    key: RoleKey.SELLER,
    name: "Seller",
    description: "Account for selling approved marketplace offerings on Huddle.",
  },
  {
    key: RoleKey.ORGANIZER,
    name: "Organizer",
    description: "Account for publishing and managing events or activities.",
  },
  {
    key: RoleKey.EXPERT,
    name: "Expert",
    description: "Professional account for providing guidance or services.",
  },
  {
    key: RoleKey.PARTNER,
    name: "Partner",
    description: "Partner organization account for approved Huddle collaboration.",
  },
  {
    key: RoleKey.MUNICIPALITY_USER,
    name: "Municipality user",
    description: "Municipal staff account for approved Huddle access.",
  },
  {
    key: RoleKey.MODERATOR,
    name: "Moderator",
    description: "Internal moderation role for review and safety workflows.",
  },
  {
    key: RoleKey.ADMIN,
    name: "Admin",
    description: "Internal administrator role for platform operations.",
  },
  {
    key: RoleKey.SUPER_ADMIN,
    name: "Super admin",
    description: "Highest internal administrator role for platform oversight.",
  },
  {
    key: RoleKey.SYSTEM,
    name: "System",
    description: "Non-human system role for automated platform processes.",
  },
] as const;

async function seedRoles(prisma: PrismaClient): Promise<void> {
  for (const role of initialRoles) {
    await prisma.role.upsert({
      where: { key: role.key },
      create: {
        key: role.key,
        name: role.name,
        description: role.description,
      },
      update: {
        name: role.name,
        description: role.description,
      },
    });
  }
}

async function main(): Promise<void> {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set.");
  }

  const prisma = new PrismaClient();

  try {
    await seedRoles(prisma);
    console.log(`Seeded ${initialRoles.length} initial Huddle roles.`);
  } finally {
    await prisma.$disconnect();
  }
}

void main().catch((error: unknown) => {
  console.error("Failed to seed initial Huddle roles.", error);
  process.exitCode = 1;
});
