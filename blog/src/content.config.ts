import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    preview: z.string(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
  }),
});

export const collections = { posts };
