/**
 * 获取最顶层的同源window
 * @param {Window} win 当前window
 * @returns {Window}
 */
export function getTopWindow(win: Window): Window {
  if (win === win.top) {
    return win
  }

  try {
    // 跨域检测
    win.parent.location && win.parent.location.origin
  } catch (e) {
    return win
  }

  // 往上递归同源window
  if (win.location.origin === win.parent.location.origin) {
    return getTopWindow(win.parent)
  }

  return win
}

/**
 * 拷贝文本到粘贴板
 * @param {String} text 文本内容
 */
export async function copyText(text: string): Promise<void> {
  // 不兼容IE
  await window.navigator.clipboard.writeText(text)
}
