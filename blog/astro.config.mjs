import { defineConfig } from 'astro/config';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://nn-opencyber.github.io',
  base: '/',
  output: 'static',
});
