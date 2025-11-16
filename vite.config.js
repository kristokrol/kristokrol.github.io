import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/', // For username.github.io repositories, use '/'
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})

