import { Reducer, AnyAction } from 'redux';
import { IWeatherForecast } from '../../models/IWeatherForecast';
import {
	LOAD_WEATHER_FORECAST
} from './types'

export type WeatherForecastsState = {
    byCoordinate: { [key: string]: IWeatherForecast }
}

export const weatherForecastsReducer: Reducer<WeatherForecastsState> = (state: WeatherForecastsState = { byCoordinate: {} }, action: AnyAction): WeatherForecastsState => {
	switch (action.type) {
        case LOAD_WEATHER_FORECAST: 
            const key = `${action.weatherForecast.coordinate.latitude}${action.weatherForecast.coordinate.longitude}`
			return { 
                ...state,
                byCoordinate: {
                    ...state.byCoordinate,
                    [key]: action.weatherForecast
                }
            }
	}

	return state;
}
