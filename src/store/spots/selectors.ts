import { StoreState } from '../'

export const selectedSpot = (state: StoreState) => {
    const parts = state.router.location.pathname.split('/').filter(p => p !== '')
    const id = parts[0] === 'dive-spot' ? parts[1] : null
    return id && id in state.spots.byId ? state.spots.byId[id] : null
}

export const allLocations = (state: StoreState) => {
    return Object.values(state.spots.byId)
}
