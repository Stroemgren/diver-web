import { Reducer, AnyAction } from 'redux';
import {
	LOAD_CENTERS
} from './types'
import { Center } from 'diver-models';

export type CentersState = {
    byId: { [key: string]: Center }
}

export const centersReducer: Reducer<CentersState> = (state: CentersState = { byId: {} }, action: AnyAction): CentersState => {
	switch (action.type) {
        case LOAD_CENTERS:
			return { 
                ...state,
                byId: {
                    ...state.byId,
                    ...action.centers.reduce((acc: { [key: string]: Center }, cur: Center) => ({ ...acc, [cur.id]: cur }), {})
                }
            }
	}

	return state;
}
