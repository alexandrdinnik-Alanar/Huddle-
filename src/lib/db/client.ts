import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as typeof globalThis & {
  __huddlePrisma?: PrismaClient;
};

export function getPrismaClient(): PrismaClient {
  if (process.env.NODE_ENV === "production") {
    return new PrismaClient();
  }

  if (!globalForPrisma.__huddlePrisma) {
    globalForPrisma.__huddlePrisma = new PrismaClient();
  }

  return globalForPrisma.__huddlePrisma;
}

export type HuddlePrismaClient = PrismaClient;
