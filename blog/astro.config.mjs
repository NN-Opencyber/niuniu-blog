import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://nn-opencyber.github.io',
  base: '/niuniu-blog',
  output: 'static',
  integrations: [mdx()],
  build: {
    assets: 'assets'
  }
});
