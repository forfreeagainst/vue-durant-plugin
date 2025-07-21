# pnpm+workspace的项目架构

```md
"dev:debugger": "pnpm -r --filter=./packages/* run dev", 开发环境调试 
"build:debugger": "cd ./packages/vue-plugin-debugger && vite build", 生产环境调试
"build": "pnpm -r --filter=./packages/* run build"  工具库级别的打包
```

## 通过指定vite.config.js目录进行打包Success

虽指定vite.config.js, 但没有指定入口文件
"build:debugger": "vite build --config ./packages/vue-plugin-debugger/vite.config.js"

正确做法：
"build:debugger": "cd ./packages/vue-plugin-debugger && vite build",

### 多个子包共享一个依赖

pnpm add vite -w -D # -w 表示安装到根目录

子包
"devDependencies": {
  "vite": "workspace:*"  // 共享根目录的 vite
},

workspace:* 失效，只能指定了。（在子包找不到根目录安装的依赖）

"@vitejs/plugin-vue": "^5.0.4",
"vite": "^5.2.12",
"vue": "^3.5.17"

### 在根目录安装子包依赖Fail

子包的workspace是否生效
pnpm list --filter vue-plugin-debugger

在根目录安装子包依赖
  pnpm add vue -D --filter vue-plugin-debugger

## 安装两个最新的依赖，存在兼容性问题，解决如下

```md
"@vitejs/plugin-vue": "^5.0.4",
"vite": "^5.2.12",
```

## 把dist目录提交到git,后面再通过.gitignore忽略dist要提交

清除缓存
`git rm -r --cached packages/vue-plugin-debugger/dist/`

