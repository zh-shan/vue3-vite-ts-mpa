/**
 * 保存文件
 * @param {String|Stream} data 文件内容
 * @param {String} filename 文件名
 */
export function saveFile(data: any, filename: string): void {
  const blob = new Blob([data])
  // @ts-ignore
  if (window.navigator.msSaveOrOpenBlob) {
    // 兼容IE 10
    // @ts-ignore
    navigator.msSaveOrOpenBlob(blob, filename)
  } else {
    const link = document.createElement('a')
    link.download = filename
    link.href = URL.createObjectURL(blob)
    link.click()
    URL.revokeObjectURL(link.href)
  }
}

