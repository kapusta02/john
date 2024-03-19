import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
    baseURL: 'http://localhost:8000/auth',
    withCredentials: true
};

export const instance: AxiosInstance = axios.create(config);
