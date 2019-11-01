import { Reducer, AnyAction } from 'redux'
import { Coordinate } from 'diver-models'
import {
	SET_CENTER, SET_ZOOM
} from './types'

const defaultState = {
	center: { latitude: 56, longitude: 12 } as Coordinate,
	zoom: 8
}

export type MapState = typeof defaultState

export const mapReducer: Reducer<MapState> = (state: MapState = defaultState, action: AnyAction): MapState => {
	switch (action.type) {
		case SET_CENTER: 
			return { 
                ...state,
                center: action.coordinate
			}
		case SET_ZOOM:
			return {
				...state,
				zoom: action.zoom
			}
	}

	return state;
}
