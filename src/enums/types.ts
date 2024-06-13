/** 通用对象 */
export type LooseObject = {
  [key: string]: any
}

/** 列表数据 */
export type List<T> = T[]

/** 点位 */
export type Point = {
  readonly x: number
  readonly y: number
}

/** 大小 */
export type Size = {
  readonly width: number
  readonly height: number
}
