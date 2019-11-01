import { StoreState } from '../'

export const allCenters = (state: StoreState) => {
    return Object.values(state.centers.byId)
}
