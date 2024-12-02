import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import process from 'process'

export default defineConfig({
  define: {
    'process.env': process.env,
  },
  plugins: [vue()],
});
