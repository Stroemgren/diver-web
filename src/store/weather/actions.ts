import { IWeatherForecast } from '../../models/IWeatherForecast';
import {
	WeatherForecastActions,
	LOAD_WEATHER_FORECAST
} from './types';

export const loadWeatherForecast = (weatherForecast: IWeatherForecast): WeatherForecastActions => {
    return { type: LOAD_WEATHER_FORECAST, weatherForecast }
}
