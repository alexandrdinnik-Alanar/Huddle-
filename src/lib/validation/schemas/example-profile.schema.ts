import { z } from "zod";

export const exampleProfileUpdateSchema = z
  .object({
    name: z.string().trim().min(1).max(100).optional(),
    preferredLanguage: z.string().trim().min(2).max(35).optional(),
  })
  .strict();

export type ExampleProfileUpdate = z.infer<typeof exampleProfileUpdateSchema>;
