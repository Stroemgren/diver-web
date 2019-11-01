import { Location } from 'diver-models'
import {
	LocationActions,
	LOAD_LOCATIONS
} from './types';

export const loadLocations = (locations: Location[]): LocationActions => {
    return { type: LOAD_LOCATIONS, locations }
}
