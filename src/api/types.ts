/**
 * 服务端统一返回信息
 */
export interface ApiResult<T = unknown> {
  // 状态码
  code: number
  // 数据
  data: T
  // 信息
  message: string
}
