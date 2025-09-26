// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Make sure this project always uses its own port
  server: {
    port: 4390,     // <- use a port not used by your other project
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
