import { z } from "zod";

export const exampleListingSchema = z
  .object({
    title: z.string().trim().min(1).max(160),
    description: z.string().trim().min(1).max(5_000),
    priceAmount: z.number().finite().nonnegative().optional(),
    categoryId: z.string().trim().min(1).max(128),
    approximateArea: z.string().trim().min(1).max(160).optional(),
    city: z.string().trim().min(1).max(160).optional(),
    country: z.string().trim().min(2).max(100).optional(),
  })
  .strict();

export type ExampleListing = z.infer<typeof exampleListingSchema>;
