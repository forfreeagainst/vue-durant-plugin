import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
    base: './', // 这行是关键
    // 基础配置
    root: resolve(__dirname, './'), // 项目根目录
    publicDir: resolve(__dirname, 'public'), // 静态资源目录
    plugins: [vue()], // Vue 插件

    // 构建配置
    build: {
        outDir: 'dist', // 输出目录
        emptyOutDir: true, // 清空输出目录
        rollupOptions: {
            // 乖乖把index.html放在根目录的同级目录下，无法向webpack将其放在public/index.html下。
            input: resolve(__dirname, './index.html')
        //   input: {
        //     // 主入口配置（支持多页面应用）
        //     main: resolve(__dirname, './index.html'),
        //     // 其他页面示例：
        //     // admin: resolve(__dirname, 'admin.html')
        //   }
        }
    },

    // 开发服务器配置
    server: {
        port: 5173, // 默认端口
        open: true // 自动打开浏览器
    }
})