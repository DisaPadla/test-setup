import axios, { AxiosInstance } from 'axios';

export const controller = new AbortController();

class Api {
  public api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.github.com',
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

  setAuthToken(token: string) {
    this.api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  setHeaders(headers: Record<string, string>) {
    this.api.defaults.headers.common = { ...this.api.defaults.headers.common, ...headers };
  }
}

export const api = new Api();
