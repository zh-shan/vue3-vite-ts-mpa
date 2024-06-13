import { getTopWindow } from './window'

/**
 * 打开页面
 * @param {string} url 模块地址
 * @param {string} title 模块名称
 * @param {string} moduleId 模块ID
 */
export const openUrl = (url: string, title: string, moduleId = ''): void => {
  const topWindow = getTopWindow(window)
  if (topWindow.addTab) {
    topWindow.addTab({
      pageUrl: url,
      name: title,
      moduleId: moduleId || window.uuid()
    })
  } else {
    window.open(url)
  }
}
