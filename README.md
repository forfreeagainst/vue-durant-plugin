# pnpm+workspace的项目架构


vite build --config ./packages/core/vite.config.ts  # 也支持 .ts 文件

## 多个子包共享一个依赖

pnpm add vite -w -D # -w 表示安装到根目录

子包
  "devDependencies": {
    "vite": "workspace:*"  // 共享根目录的 vite
  },

  ## 在根目录安装子包依赖

子包的workspace是否生效
pnpm list --filter vue-plugin-debugger

在根目录安装子包依赖
  pnpm add @vitejs/plugin-vue -D --filter vue-plugin-debugger

