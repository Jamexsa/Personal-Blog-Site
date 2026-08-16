import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Content collections for the three content-driven sections.
 * Schemas are minimal for now — extend (tags, cover images, etc.) as
 * the blog / games / art pages are built.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const games = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/games' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    releaseDate: z.coerce.date().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // External store page (itch.io, Steam...). Empty = link to a future
    // internal detail page instead.
    url: z.string().url().optional(),
    status: z.enum(['released', 'in-development', 'prototype']).default('released'),
  }),
});

const art = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/art' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    image: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, games, art };
