// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 1. Set the port to 8000
    port: 8000,
    // 2. Expose the server to your local network
    // This allows you to access it from other devices using your IP address
    host: true,
  },
});