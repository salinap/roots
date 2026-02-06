#!/usr/bin/env node
/* eslint-disable no-undef */
import { writeFileSync } from 'fs';
import { resolve } from 'path';

// Configure base URL via env var or CLI arg
const base = process.env.SITE_URL || process.argv[2];
if (!base) {
  console.warn('[sitemap] SITE_URL is not set. Skipping sitemap generation.');
  process.exit(0);
}

// Known app routes (keep in sync with src/shared/routes-path.tsx)
const routes = [
  '/main',
  '/equipment',
  '/about',
  '/reviews',
  '/tariffs',
];

const urls = routes.map((p) => `${base.replace(/\/$/, '')}${p}`);
const now = new Date().toISOString();
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (loc) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`;

const out = resolve(process.cwd(), 'public', 'sitemap.xml');
writeFileSync(out, xml, 'utf8');
console.log(`[sitemap] Generated ${out} with ${routes.length} routes.`);
