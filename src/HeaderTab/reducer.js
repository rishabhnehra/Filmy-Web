import {
    POPULAR_TAB,
    NOW_PLAYING_TAB,
    UPCOMING_TAB
} from './actions'

const initialState = 0

export const tabReducer = (state = initialState, { type, activeIndex }) => {
    switch (type) {
        case POPULAR_TAB:
            return {
                activeIndex
            }
        case NOW_PLAYING_TAB:
            return {
                activeIndex
            }
        case UPCOMING_TAB:
            return {
                activeIndex
            }
        default:
            return state
    }
}