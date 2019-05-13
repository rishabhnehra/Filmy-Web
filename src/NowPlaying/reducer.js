import {
    FETCH_NOW_PLAYING,
    FETCH_NOW_PLAYING_SUCCESS,
    FETCH_NOW_PLAYING_FAILURE
} from './actions'

const initialState = {
    isFetching: false,
    message: null,
    data: []
}

export const nowPlayingReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOW_PLAYING:
            return {
                ...state,
            }
        case FETCH_NOW_PLAYING_SUCCESS:
            return {
                ...state,
                data: action.data,
            }
        case FETCH_NOW_PLAYING_FAILURE:
            return {
                ...state,
            }
        default:
            return state
    }
}