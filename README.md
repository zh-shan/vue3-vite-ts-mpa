# 项目名称

## 一. 简介

<!--项目定位、简介-->

## 二. 功能介绍

<!--基本功能介绍-->

<!--使用说明-->

<!--更详细点可以说明软件的基本原理-->

## 三. 环境依赖

### 浏览器兼容

最新版本的 Vue (3.x) 只支持[原生支持 ES2015 的浏览器](https://caniuse.com/es6)。这并不包括 IE11。Vue 3.x 使用的 ES2015 功能无法在旧版本的浏览器中进行兼容。

| ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Edge ≥ 79                                                              | Firefox ≥ 54                                                                      | Chrome ≥ 51                                                                    | Safari ≥ 10                                                                    |

### Node版本

Node ≥ 16.14.0

### 常用依赖

| 名称                                                                  | Stars                                                                             | 描述                         |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------- |
| [vue3](https://cn.vuejs.org/guide/introduction.html)                | ![github stars](https://img.shields.io/github/stars/vuejs/core.svg)               |                            |
| [pinia](https://pinia.web3doc.top/introduction.html)                | ![github stars](https://img.shields.io/github/stars/vuejs/pinia.svg)              | 状态管理                       |
| [vite](https://cn.vitejs.dev/guide/)                                | ![github stars](https://img.shields.io/github/stars/vitejs/vite.svg)              | 开发构建工具                     |
| [typescript](https://github.com/Microsoft/TypeScript)               | ![github stars](https://img.shields.io/github/stars/Microsoft/TypeScript.svg)     |                            |
| [vueuse](https://vueuse.org/guide/)                                 | ![github stars](https://img.shields.io/github/stars/vueuse/vueuse.svg)            | 基于 Composition API 的实用函数集合 |
| [axios](https://www.axios-http.cn/docs/intro)                       | ![github stars](https://img.shields.io/github/stars/axios/axios.svg)              | 基于 Promise 的网络请求库          |
| [lodash](https://www.lodashjs.com/)                                 | ![github stars](https://img.shields.io/github/stars/lodash/lodash.svg)            | 实用函数库                      |
| [screenfull](https://github.com/sindresorhus/screenfull)            | ![github stars](https://img.shields.io/github/stars/sindresorhus/screenfull.svg)  | 跨浏览器的全屏工具                  |
| [dayjs](https://day.js.org/docs/zh-CN/installation/installation)    | ![github stars](https://img.shields.io/github/stars/iamkun/dayjs.svg)             | 时间和日期处理工具                  |
| [decimal.js](https://lixingwu.gitee.io/decimal.js_cn/cn/index.html) | ![github stars](https://img.shields.io/github/stars/MikeMcl/decimal.js.svg)       | 数值精度处理工具                   |
| [sass](https://www.sasscss.com/documentation)                       | ![github stars](https://img.shields.io/github/stars/sass/dart-sass.svg)           | 预编译语言                      |
| [tailwindcss](https://tailwindcss.com/docs/installation)            | ![github stars](https://img.shields.io/github/stars/tailwindlabs/tailwindcss.svg) |                            |
| [vue-i18n](https://vue-i18n.intlify.dev/guide/)                     | ![github stars](https://img.shields.io/github/stars/kazupon/vue-i18n.svg)         | 国际化插件                      |

## 四. 目录结构

```
project
├── public
├── resources
│   └── docs ------------------------------------- 设计文档
├── src ------------------------------------------ 组件源码
│   ├── api -------------------------------------- api接口
│   ├── assets ----------------------------------- 静态资源，images、iconfont、files等
│   ├── components ------------------------------- 公共组件
│   ├── enums ------------------------------------ 常量数据
│   ├── hooks ------------------------------------ 常量数据
│   ├── i18n ------------------------------------- 多语言 
│   ├── icons ------------------------------------ svg图标
│   ├── pages ------------------------------------ 视图页面
│   ├── store ------------------------------------ 状态存储
│   ├── styles ----------------------------------- 样式
│   └── utils ------------------------------------ 工具类
├── types ---------------------------------------- 类型声明
├── .npmrc
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 五. 开发&发布

### 开发

```bash
# 进入项目目录
cd xxx

# 安装依赖
npm install

# 准备环境
npm run prepare

# 启动服务
npm run start
```

<!--列出所有页面的入口链接-->

浏览器访问 [访问地址](http://localhost:8003/)

### 发布

```bash
npm run build
```

### 其它

```bash
# 单元测试
npm run test

# 代码格式检查
npm run lint
```
