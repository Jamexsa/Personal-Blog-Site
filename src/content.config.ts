import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Content collections for the content-driven sections of the kingdom.
 * blog/games/art are the founding three; journal/shrines/guestbook are
 * the milestone-6 wings.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
    // Language rune shown next to the date ([EN]/[IT]).
    lang: z.enum(['EN', 'IT']).optional(),
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

/** The Squire's Diary — personal, non-devlog entries. */
const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    mood: z.string().optional(),
    weather: z.string().optional(),
    location: z.string().optional(),
    photo: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/** The Reliquary — fan shrines for games/media the realm holds dear. */
const shrines = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/shrines' }),
  schema: z.object({
    title: z.string(),
    medium: z.string(),
    blurb: z.string(),
    cover: z.string().optional(),
    status: z.enum(['complete', 'sealed']).default('complete'),
    order: z.number().default(99),
    url: z.string().url().optional(),
  }),
});

/** The Inn's Ledger — guestbook entries. The body is the message. */
const guestbook = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guestbook' }),
  schema: z.object({
    name: z.string(),
    website: z.string().optional(),
    favoriteSong: z.string().optional(),
    recommendation: z.string().optional(),
    date: z.coerce.date(),
  }),
});

export const collections = { blog, games, art, journal, shrines, guestbook };
