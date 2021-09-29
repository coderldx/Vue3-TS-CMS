import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 定义拦截器
export interface DXRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  // responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

// 扩展请求配置的类型
export interface DXRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: DXRequestInterceptors<T>
  showLoading?: boolean
}
