import { StoreState } from '../'
import { Coordinate, FiveDayForecast } from 'diver-models'

export const weatherForCoordinate = (state: StoreState, coordinate: Coordinate): FiveDayForecast | null => {
    const key = `${coordinate.latitude}${coordinate.longitude}`
    return key in state.weatherForecasts.byCoordinate ? state.weatherForecasts.byCoordinate[key] : null
}
