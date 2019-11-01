import { Coordinate } from 'diver-models'
import {
	MapActions,
	SET_CENTER,
	SET_ZOOM
} from './types';

export const setCenter = (coordinate: Coordinate): MapActions => {
    return { type: SET_CENTER, coordinate }
}

export const setZoom = (zoom: number): MapActions => {
	return { type: SET_ZOOM, zoom }
}
