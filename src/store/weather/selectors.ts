import { StoreState } from '../'
import { Coordinate } from 'diver-models'
import { IWeatherForecast } from '../../models/IWeatherForecast'

export const weatherForCoordinate = (state: StoreState, coordinate: Coordinate): IWeatherForecast | null => {
    const key = `${coordinate.latitude}${coordinate.longitude}`
    return key in state.weatherForecasts.byCoordinate ? state.weatherForecasts.byCoordinate[key] : null
}
