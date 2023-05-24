import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { astroImageTools } from 'astro-imagetools';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  site: 'https://knightowls.ca',
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
    image(),
    astroImageTools,
  ],
});
