import { FiveDayForecast } from 'diver-models'

export const LOAD_WEATHER_FORECAST = 'LOAD_WEATHER_FORECAST'

export interface LoadWeatherForecast {
	type: typeof LOAD_WEATHER_FORECAST;
	weatherForecast: FiveDayForecast;
}

export type WeatherForecastActions = LoadWeatherForecast