import { defineConfig } from 'vite'
import path from 'path';
export default defineConfig({
    build: {
        target: 'es2015',
        lib: {
            entry: path.resolve(__dirname, './src/main.js'),
            name: "VuePluginDebugger",
            filename: 'vue-plugin-debugger',
            formats: ['es', 'umd', 'cjs', 'iife']
        }
    }
})