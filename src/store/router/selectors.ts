import { StoreState } from '../'

export const urlSegments = (state: StoreState) => {
    return state.router.location.pathname.split('/').filter(p => p !== '')
}
