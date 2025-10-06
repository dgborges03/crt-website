// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // This tells Astro where your site will be hosted
  site: 'https://crt.caltech.edu/',
  base: '/', // ensure it builds for the root of the domain
  server: {
    port: 4390,
    host: true,
    strictPort: true,
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      // Give HMR (websocket) a unique port so it never cross-talks
      hmr: {
        port: 44390, // <- different from the other project's HMR port
      },
    },
  },
});
