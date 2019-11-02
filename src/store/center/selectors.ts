import { StoreState } from '../'
import { Center } from 'diver-models'

export const selectedCenter = (state: StoreState): Center | null => {
    const parts = state.router.location.pathname.split('/').filter(p => p !== '')
    const id = parts[0] === 'center' ? parts[1] : null
    return id && id in state.centers.byId ? state.centers.byId[id] : null
}

export const allCenters = (state: StoreState) => {
    return Object.values(state.centers.byId)
}
