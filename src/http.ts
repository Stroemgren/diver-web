import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance, AxiosPromise } from 'axios'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { StoreState } from './store'

export const http = (config: AxiosRequestConfig): AxiosPromise<AxiosInstance> => {
	const Http = axios.create({
		responseType: 'json',
	});

	Http.interceptors.request.use((config: AxiosRequestConfig) => {
		return config;
	}, (error: AxiosError) => {
		return Promise.reject(error);
	});

	Http.interceptors.response.use((response: AxiosResponse) => {
		return response;
	}, (error: AxiosError) => {
	    return Promise.reject(error);
	});

	return Http(config);
}

export type Thunk = ThunkAction<void, StoreState, void, Action>;