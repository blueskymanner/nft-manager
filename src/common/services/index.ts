import { set, isUndefined } from 'lodash';
import Axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios';
// import { store } from './store';
// const { dispatch } = store;

const axiosConfigs = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Credentials': true,
    withCredentials: true
  }
};

class ServiceSingleton {
  private static instance: AxiosInstance;
  // public static dispatch = dispatch;

  /**
   * Singleton's constuctor must be private
   */
  private constructor() {}

  // getInstance ==============================================================
  public static getInstance(): AxiosInstance {
    if (!ServiceSingleton.instance) {
      ServiceSingleton.instance = Axios.create(axiosConfigs);
      ServiceSingleton.setupAxiosInterceptors();
    }
    return ServiceSingleton.instance;
  }

  // Request ==================================================================
  public request = <T>(
    config: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return ServiceSingleton.instance.request(config);
  };

  // Get ======================================================================
  public get = <T>({
    url,
    ...config
  }: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    if (isUndefined(url)) throw new Error("URL'S REQUIRED !!!");
    return ServiceSingleton.instance.get(url, config);
  };

  // Post =====================================================================
  public post = <T>({
    url,
    data,
    ...config
  }: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    console.log(url, data);

    if (isUndefined(url)) throw new Error("URL'S REQUIRED !!!");
    return ServiceSingleton.instance.post(url, data, config);
  };

  // Put ======================================================================
  public put = <T>({
    url,
    data,
    ...config
  }: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    if (isUndefined(url)) throw new Error("URL'S REQUIRED !!!");
    return ServiceSingleton.instance.put(url, data, config);
  };

  // Patch ====================================================================
  public patch = <T>({
    url,
    data,
    ...config
  }: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    if (isUndefined(url)) throw new Error("URL'S REQUIRED !!!");
    return ServiceSingleton.instance.patch(url, data, config);
  };

  // Remove ====================================================================
  public remove = <T>({
    url,
    ...config
  }: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    if (isUndefined(url)) throw new Error("URL'S REQUIRED !!!");
    return ServiceSingleton.instance.delete(url, config);
  };

  // setupAxiosInterceptors ====================================================
  private static setupAxiosInterceptors() {
    // interceptors request
    ServiceSingleton.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const { data: bodyData } = config;
        const { data = {} } = bodyData;
        // const formatBodyData = {
        //   header,
        //   meta: { ...meta },
        //   data
        // };
        set(config, 'data', data);
        return config;
      },
      (error: AxiosError): Promise<Error> => {
        return Promise.reject(error);
      }
    );

    // interceptors response
    ServiceSingleton.instance.interceptors.response.use(
      (response: AxiosResponse): AxiosResponse => {
        return response;
      },
      (error: AxiosError): Promise<Error> => {
        return Promise.reject(error);
      }
    );
  }
}

const appService = ServiceSingleton.getInstance();

export { appService };
