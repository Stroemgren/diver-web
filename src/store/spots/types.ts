import { Location } from 'diver-models'

export const LOAD_LOCATIONS = 'LOAD_LOCATIONS'

export interface LoadLocations {
	type: typeof LOAD_LOCATIONS
	locations: Location[]
}

export type LocationActions = LoadLocations