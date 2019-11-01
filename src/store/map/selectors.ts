import { StoreState } from '../'

export const getCenter = (state: StoreState) => {
    return state.map.center
}

export const getZoom = (state: StoreState) => {
    return state.map.zoom
}
 