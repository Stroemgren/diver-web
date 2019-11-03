import { AxiosResponse, AxiosError } from 'axios'
import { StoreState } from '../../store'
import { http, Thunk } from '../../http'
import { Coordinate } from 'diver-models'

import {
	loadWeatherForecast
} from './actions';

export function fetchWeatherForecast(coordinate: Coordinate): Thunk {
	return (dispatch: any, getState: () => StoreState) => {
		http({
			method: 'get',
			url: `http://157.245.3.84:3000/weather/five-day-forecast?latitude=${coordinate.latitude}&longitude=${coordinate.longitude}`
		})
		.then((response: AxiosResponse) => {
			dispatch(loadWeatherForecast(response.data));
		})
		.catch((error: AxiosError) => {
			// TODO
		});
	}
}