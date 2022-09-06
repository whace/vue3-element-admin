import type { AxiosRequestConfig } from "axios";
import { HttpClient } from "./http-client";

const onRequestFulfilled = (requestConfig: AxiosRequestConfig) => {
  const headers = requestConfig.headers || {};
  const accessToken = "";
  if (accessToken && !headers["Authorization"]) {
    headers["Authorization"] = "Bearer " + accessToken;
  }

  if (requestConfig.headers) {
    requestConfig = headers;
  }

  return requestConfig;
};

const httpClient = new HttpClient({
  defaultRequestConfig: {
    baseURL: import.meta.env.VITE_API_URL, // api base_url
    timeout: import.meta.env.VITE_API_TIME_OUT,
  },
  interceptorOptions: {
    onRequestFulfilled: onRequestFulfilled,
  },
});

export default httpClient;
