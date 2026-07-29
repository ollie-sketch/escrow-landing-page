import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Predictable, cache-friendly output for production hosting
    assetsDir: 'assets',
    sourcemap: false,
  },
});
