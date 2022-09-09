import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import react from '@astrojs/react';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  experimental: {
    integrations: true
  },
  site: 'https://nssrobodevs.gq',
  integrations: [react(), robotsTxt()],
  output: "server",
  adapter: vercel()
});