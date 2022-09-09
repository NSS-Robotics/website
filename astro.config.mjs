import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import robotsTxt from 'astro-robots-txt';
import { astroImageTools } from 'astro-imagetools';

// https://astro.build/config
export default defineConfig({
  experimental: {
    integrations: true,
  },
  site: 'https://nssrobodevs.gq',
  integrations: [react(), robotsTxt(), astroImageTools],
});
