import { Reducer, AnyAction } from 'redux'
import {
	LOAD_WEATHER_FORECAST
} from './types'
import { FiveDayForecast } from 'diver-models';

export type WeatherForecastsState = {
    byCoordinate: { [key: string]: FiveDayForecast }
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
