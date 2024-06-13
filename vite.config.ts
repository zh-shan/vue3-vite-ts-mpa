import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import stylelint from 'vite-plugin-stylelint'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { createMpaPlugin } from 'vite-plugin-virtual-mpa'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'vue$': 'vue/dist/vue.runtime.esm-bundler.js'
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8003,
    proxy: {
      '/bootstrap': {
        target: 'http://192.168.10.126',
        changeOrigin: true
      }
    }
  },
  build: {
    emptyOutDir: true,
    outDir: 'dist-web',
    rollupOptions: {
      output: {
        // 配置资源文件的路径
        assetFileNames(assetInfo: any) {
          const name = assetInfo.name

          if (/\.(png|jpe?g|gif|tiff|bmp|ico)(\?.*)?$/.test(name)) {
            return 'static/images/[name]-[hash][extname]'
          }

          if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/.test(name)) {
            return 'static/fonts/[name]-[hash][extname]'
          }

          if (/\.(svg)(\?.*)?$/.test(name)) {
            return 'static/icons/[name]-[hash][extname]'
          }

          if (/\.(sa|sc|c)ss$/.test(name)) {
            return 'static/css/[name]-[hash][extname]'
          }

          return 'static/[name]-[hash][extname]'
        },
        // 配置chunk文件的路径
        chunkFileNames: 'static/js/[name]-[hash].js',
        // 配置入口文件的路径
        entryFileNames: 'static/js/[name]-[hash].js',
        // 分包策略
        manualChunks(id: string) {
          // 拆分 node_module 依赖包，每个依赖都单独拆成一个chunk文件
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    }
  },
  plugins: [
    vue(),
    eslint(),
    stylelint(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(__dirname, './src/icons')],
      symbolId: 'svg-[name]'
    }),
    createMpaPlugin({
      scanOptions: {
        scanDirs: 'src/pages',
        entryFile: 'main.ts',
        template: 'index.html'
      }
    })
  ]
})
