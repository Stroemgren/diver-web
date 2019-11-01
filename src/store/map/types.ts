import { Coordinate } from "diver-models"

export const SET_CENTER = 'SET_CENTER'
export const SET_ZOOM = 'SET_ZOOM'

export interface SetCenter {
	type: typeof SET_CENTER
	coordinate: Coordinate
}

export interface SetZoom {
	type: typeof SET_ZOOM,
	zoom: number
}

export type MapActions = SetCenter | SetZoom