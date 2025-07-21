import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [
    vue()
  ],
  server: {
    port: 5656
  },
  build: {
    target: 'es2015',
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'DurantDraggablePlus',
      fileName: 'durant-draggable-plus',
      formats: ['es', 'umd', 'cjs', 'iife']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
