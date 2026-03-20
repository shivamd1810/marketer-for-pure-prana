import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    author: z.string().default('Pure Prana Team'),
    keywords: z.array(z.string()),
    relatedProducts: z.array(z.string()),
  }),
});

export const collections = { blog };
