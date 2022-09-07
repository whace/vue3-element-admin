import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";
import type { HttpClientConfig } from "./types";

export class HttpClient {
  private axiosInstance: AxiosInstance;

  constructor(config: HttpClientConfig) {
    this.axiosInstance = axios.create(config.defaultRequestConfig);

    const interceptorOptions = config.interceptorOptions;

    if (interceptorOptions) {
      this.axiosInstance.interceptors.request.use(
        interceptorOptions.onRequestFulfilled,
        interceptorOptions.onRequestRejected,
        interceptorOptions.requestOptions
      );
      this.axiosInstance.interceptors.response.use(
        interceptorOptions.onResponseFulfilled,
        interceptorOptions.onResponseRejected,
        interceptorOptions.responseOptions
      );
    }
  }

  request<T = unknown, D = unknown>(config: AxiosRequestConfig) {
    return this.axiosInstance.request<void, T, D>(config);
  }

  get<T = unknown, D = unknown>(url: string, config?: AxiosRequestConfig) {
    return this.request<T, D>({ ...config, url, method: "GET" });
  }

  post<T = unknown, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ) {
    return this.request<T, D>({ ...config, url, data, method: "POST" });
  }
}
