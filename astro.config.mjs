import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://knightowls.ca",
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  integrations: [
    robotsTxt({
      sitemap: "https://knightowls.ca/sitemap-0.xml",
    }),
    sitemap(),
    icon({
      include: {
        bi: ["github", "instagram", "envelope"],
        ri: ["youtube-fill"],
      },
    }),
  ],
  output: "hybrid",
  adapter: vercel(),
});
