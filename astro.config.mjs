import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: 'https://knightowls.ca',
  // Important!
  // Only official '@astrojs/*' integrations are currently supported by Astro.
  // Add 'experimental.integrations: true' to make 'astro-robots-txt' working
  // with 'astro build' command.
  experimental: {
    integrations: true,
  },
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
  integrations: [
    react(),
    robotsTxt({
      sitemap: 'https://knightowls.ca/sitemap-0.xml',
    }),
    sitemap(),
  ],
  output: 'server',
  adapter: vercel(),
});
