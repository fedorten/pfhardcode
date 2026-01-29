import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
    output: 'server', // нужен для server endpoints
    adapter: vercel(),
});
