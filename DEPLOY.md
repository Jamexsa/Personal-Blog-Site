# Deploying to Cloudflare Pages

This site is a fully static Astro build — no server-side rendering, so no
Cloudflare adapter is needed. Cloudflare Pages just serves the generated
files from `dist/`.

## One-time setup

1. **Push the repo to GitHub.**

2. In the Cloudflare dashboard, go to **Workers & Pages → Create →
   Pages → Connect to Git** and select the repository.

3. Configure the build:

   | Setting            | Value             |
   | ------------------ | ----------------- |
   | Framework preset   | Astro             |
   | Build command      | `npm run build`   |
   | Build output dir   | `dist`            |
   | Environment variable | `NODE_VERSION` = `22.12.0` (matches `engines` in package.json) |

4. Deploy. Cloudflare will assign a `<project-name>.pages.dev` URL.

## After the first deploy (important)

Update `site` in `astro.config.mjs` to the assigned production URL:

```js
export default defineConfig({
  site: 'https://<project-name>.pages.dev',
  // ...
});
```

Also update the `Sitemap:` line in `public/robots.txt` to match.
`site` drives the canonical URLs, Open Graph tags, and the generated
sitemap (`/sitemap-index.xml`), so commit this change and let Cloudflare
redeploy.

## Custom domain (optional)

1. Pages project → **Custom domains → Set up a custom domain**.
2. Add your domain and follow the DNS instructions (a `CNAME` record
   pointing at `<project-name>.pages.dev`, or delegation to Cloudflare
   DNS for automatic setup).
3. Update `site` in `astro.config.mjs` and `robots.txt` to the custom
   domain, then redeploy.

## Local verification before deploying

```sh
npm run build      # outputs static site to ./dist
npm run preview    # serves the built site locally
```
