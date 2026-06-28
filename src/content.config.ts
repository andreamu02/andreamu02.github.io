import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Writeups live in a SEPARATE repository and are cloned into
// src/content/writeups/ at build time (see scripts/fetch-writeups.mjs and the
// deploy workflow). Only the posts/ subfolder is treated as content, so the
// external repo's README / license / workflows are ignored.
const writeups = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writeups/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    lang: z.enum(['en', 'it']).default('en'),
  }),
});

export const collections = { writeups };
