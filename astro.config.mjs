import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { astroImageTools } from 'astro-imagetools';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  experimental: {
    integrations: true,
  },
  site: 'https://nssrobodevs.gq',
  integrations: [astroImageTools, react(), robotsTxt()],
});
