import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(process.cwd(), 'src')
    }
  },

  base: '',

  root: resolve(process.cwd(), 'src'),

  build: {
    outDir: resolve(process.cwd(), 'dist')
  }
})
