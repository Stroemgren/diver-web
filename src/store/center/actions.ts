import { Center } from 'diver-models'
import {
	CenterActions,
	LOAD_CENTERS
} from './types';

export const loadCenters = (centers: Center[]): CenterActions => {
    return { type: LOAD_CENTERS, centers }
}
