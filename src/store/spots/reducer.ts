import { Reducer, AnyAction } from 'redux';
import {
	LOAD_LOCATIONS
} from './types'
import { Location } from 'diver-models';

export type LocationsState = {
    byId: { [key: string]: Location }
}

export const locationsReducer: Reducer<LocationsState> = (state: LocationsState = { byId: {} }, action: AnyAction): LocationsState => {
	switch (action.type) {
		case LOAD_LOCATIONS: 
			return { 
                ...state,
                byId: {
                    ...state.byId,
                    ...action.locations.reduce((acc: { [key: string]: Location }, cur: Location) => ({ ...acc, [cur.id]: cur }), {})
                }
            }
	}

	return state;
}
