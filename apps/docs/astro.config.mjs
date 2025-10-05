import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bootstrap-ai.dev',
  integrations: [
    react(),
    mdx(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
  build: {
    assets: 'assets',
  },
  vite: {
    optimizeDeps: {
      include: ['@bootstrap-ai/components', '@bootstrap-ai/core', '@bootstrap-ai/themes'],
    },
  },
});
