import { IWeatherForecast } from '../../models/IWeatherForecast';

export const LOAD_WEATHER_FORECAST = 'LOAD_WEATHER_FORECAST';

export interface LoadWeatherForecast {
	type: typeof LOAD_WEATHER_FORECAST;
	weatherForecast: IWeatherForecast;
}

export type WeatherForecastActions = LoadWeatherForecast