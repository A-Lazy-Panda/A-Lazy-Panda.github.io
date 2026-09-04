// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Change `site` to your final URL (custom domain, GitHub Pages, SRCF, etc.).
// Kept at the root ("/") base so the build is host-agnostic: it works on a
// user GitHub Pages site (shivanshpandey.github.io), Netlify, or your own domain
// with zero changes.
export default defineConfig({
  site: 'https://a-lazy-panda.github.io',
  base: '/',
  trailingSlash: 'ignore',
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
  integrations: [mdx(), sitemap()],
});
