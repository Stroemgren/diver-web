import { Center } from 'diver-models'

export const LOAD_CENTERS = 'LOAD_CENTERS'

export interface LoadCenters {
	type: typeof LOAD_CENTERS
	centers: Center[]
}

export type CenterActions = LoadCenters