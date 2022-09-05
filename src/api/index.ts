import axios, {AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios'

const config = {
  
}

class RequestHttp {
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig){
    // 实例化 axios
    this.service = axios.create(config)

    this.service.interceptors.request.use((config:AxiosRequestConfig)=>{
      const globalStore = GlobalStore()
    })
  }
}