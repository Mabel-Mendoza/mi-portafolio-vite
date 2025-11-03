import { defineConfig } from 'vite'
import purgecss from 'vite-plugin-purgecss'

export default defineConfig({
  plugins: [purgecss()],
  css: {
    preprocessorOptions: {
      less: {}
    }
  },
  build: {
    minify: 'esbuild',
    cssMinify: true,
  }
})
