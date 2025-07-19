import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'
const entry = path.resolve(__dirname, './src/main.js')
export default defineConfig({
    plugins: [
        vue()
    ],
    build: {
        target: 'es2015',
        lib: {
            entry: entry,
            name: "VuePluginDebugger",
            filename: 'vue-plugin-debugger',
            formats: ['es', 'umd', 'cjs', 'iife']
        },
        rollupOptions: {
            external: ['vue'], // 告诉 Rollup 不要打包 vue 依赖，而是将其视为外部依赖
            output: {
                globals: {
                    vue: 'Vue'
                }
            },
        }
    }
})