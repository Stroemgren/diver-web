import { combineReducers } from 'redux'
import { History } from 'history'
import { RouterState, connectRouter } from 'connected-react-router'
import { centersReducer, CentersState } from '../store/center/reducer'
import { locationsReducer, LocationsState } from '../store/spots/reducer'
import { weatherForecastsReducer, WeatherForecastsState } from './weather/reducer'
import { mapReducer, MapState } from '../store/map/reducer'

export interface StoreState {
    centers: CentersState
    map: MapState
	router: RouterState
    spots: LocationsState
    weatherForecasts: WeatherForecastsState
}

const rootReducer = (history: History) => combineReducers({
    centers: centersReducer,
    map: mapReducer,
	router: connectRouter(history),
    spots: locationsReducer,
    weatherForecasts: weatherForecastsReducer
});

export default rootReducer