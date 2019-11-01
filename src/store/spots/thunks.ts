import { AxiosResponse, AxiosError } from 'axios'
import { StoreState } from '../../store'
import { http, Thunk } from '../../http'

import {
	loadLocations
} from './actions';

export function fetchLocations(): Thunk {
	return (dispatch: any, getState: () => StoreState) => {
		http({
			method: 'get',
			url: 'http://0.0.0.0:3000/location'
		})
		.then((response: AxiosResponse) => {
			dispatch(loadLocations(response.data));
		})
		.catch((error: AxiosError) => {
			// TODO
		});
	}
}