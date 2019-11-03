import {
	WeatherForecastActions,
	LOAD_WEATHER_FORECAST
} from './types';
import { FiveDayForecast } from 'diver-models';

export const loadWeatherForecast = (weatherForecast: FiveDayForecast): WeatherForecastActions => {
    return { type: LOAD_WEATHER_FORECAST, weatherForecast }
}
