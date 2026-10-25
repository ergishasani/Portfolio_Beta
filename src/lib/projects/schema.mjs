import { z } from "zod";

const httpsUrl = z.url().refine((value) => value.startsWith("https://"), {
  message: "Use an HTTPS URL.",
});

// Firestore document IDs are slugs. Images are direct ImgBB URLs.
export const projectSchema = z.object({
  slug: z.string().min(1).max(100).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().trim().min(1).max(160),
  description: z.string().trim().min(1),
  coverImage: httpsUrl,
  images: z.array(httpsUrl).default([]),
  projectTypes: z.array(z.enum(["web", "mobile", "desktop"])).min(1).default(["web"]),
  tags: z.array(z.string().trim().min(1)).default([]),
  liveUrl: z.union([httpsUrl, z.literal("")]).default(""),
  repositoryUrl: z.union([httpsUrl, z.literal("")]).default(""),
  featured: z.boolean().default(false),
  status: z.enum(["draft", "published"]).default("draft"),
  order: z.number().int().nonnegative().default(0),
});
