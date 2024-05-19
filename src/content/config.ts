import { z, defineCollection } from "astro:content";
const newsCollections = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    location: z.string().optional(),
    date: z.date().optional(),
    target: z.string().optional(),
  }),
});
// This key should match your collection directory name in "src/content"
export const collections = {
  news: newsCollections,
};
