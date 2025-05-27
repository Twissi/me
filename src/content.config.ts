import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

const newsCollections = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/news" }),
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
