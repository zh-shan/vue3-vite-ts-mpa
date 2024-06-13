import { defineAsyncComponent } from 'vue'
import { camelCase, upperFirst } from 'lodash-es'
import type { App } from 'vue'

export default {
  install(app: App): void {
    // 获取当前路径下所有 .vue 文件
    const components = import.meta.glob('./*/index.vue')

    for (const [key, component] of Object.entries(components)) {
      const fileName = key.replace('./', '').split('/')[0]
      const componentName = upperFirst(camelCase(fileName))
      // 通过 defineAsyncComponent 异步导入指定路径下的组件
      app.component(componentName, defineAsyncComponent(component as any))
    }
  }
}
