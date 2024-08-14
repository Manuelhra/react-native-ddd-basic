import axios, {AxiosInstance} from 'axios';

import {HttpAdapter} from './HttpAdapter';

interface Options {
  baseurl: string;
  params?: Record<string, unknown>;
}

export class AxiosHttpAdapter implements HttpAdapter {
  readonly #axiosInstance: AxiosInstance;

  constructor(dependencies: {options: Options}) {
    this.#axiosInstance = axios.create({
      baseURL: dependencies.options.baseurl,
      params: dependencies.options.params,
    });
  }
  async get<Response>(
    url: string,
    options?: Record<string, unknown>,
  ): Promise<Response> {
    try {
      console.log('url', url);
      const {data} = await this.#axiosInstance.get<Response>(url, options);

      return data;
    } catch (error) {
      console.log(error);
      throw new Error(`Ha ocurrido un error al obtener los datos en: ${url}`);
    }
  }
}
