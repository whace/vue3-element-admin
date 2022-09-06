import type {
  AxiosInterceptorOptions,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
/**
 *请求拦截器钩子
 */
export interface HttpInterceptorOptions {
  /**
   * 发起请求前处理
   */
  onRequestFulfilled?: (
    value: AxiosRequestConfig
  ) => AxiosRequestConfig | Promise<AxiosRequestConfig>;

  /**
   * 请求失败后处理
   */
  onRequestRejected?: (error: unknown) => unknown;

  /**
   * 请求的一些设置
   */
  requestOptions?: AxiosInterceptorOptions;

  /**
   * 响应成功，返回数据前处理
   */
  onResponseFulfilled?: (
    value: AxiosResponse
  ) => AxiosResponse | Promise<AxiosResponse>;

  /**
   * 相应失败时处理
   */
  onResponseRejected?: (error: unknown) => unknown;

  /**
   * 相应的一些设置
   */
  responseOptions?: AxiosInterceptorOptions;
}

export interface HttpClientConfig {
  defaultRequestConfig?: AxiosRequestConfig;
  interceptorOptions?: HttpInterceptorOptions;
}
