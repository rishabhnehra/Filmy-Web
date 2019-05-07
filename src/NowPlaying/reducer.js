import {
    FETCH_NOW_PLAYING,
    FETCH_NOW_PLAYING_SUCCESS,
    FETCH_NOW_PLAYING_FAILURE
} from './actions'

const initialState = {
    isFetching: false,
    error: null,
    data: []
}

export const nowPlayingReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOW_PLAYING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case FETCH_NOW_PLAYING_SUCCESS:
            return {
                ...state,
                isFetching: action.isFetching,
                data: action.data,
            }
        case FETCH_NOW_PLAYING_FAILURE:
            return {
                ...state,
                isFetching: action.isFetching,
                error: action.error
            }
        default:
            return state
    }
}