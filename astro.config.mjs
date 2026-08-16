// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// `site` must match the production URL (Cloudflare Pages assigns <name>.pages.dev).
// Update it after the first deploy so canonical/OG/sitemap URLs are correct.
// https://astro.build/config
export default defineConfig({
  site: 'https://your-name.pages.dev',
  integrations: [sitemap()],
});
