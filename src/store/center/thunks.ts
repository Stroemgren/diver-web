import { AxiosResponse, AxiosError } from 'axios'
import { StoreState } from '../../store'
import { http, Thunk } from '../../http'

import {
	loadCenters
} from './actions';

export function fetchCenters(): Thunk {
	return (dispatch: any, getState: () => StoreState) => {
		http({
			method: 'get',
			url: 'http://0.0.0.0:3000/center'
		})
		.then((response: AxiosResponse) => {
			dispatch(loadCenters(response.data));
		})
		.catch((error: AxiosError) => {
			// TODO
		});
	}
}