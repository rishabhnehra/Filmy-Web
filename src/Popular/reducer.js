import {
    FETCH_POPULAR_FAILURE,
    FETCH_POPULAR,
    FETCH_POPULAR_SUCCESS,
} from './actions'

const initialState = {
    isFetching: false,
    error: null,
    data: []
}

export const popularReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POPULAR:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case FETCH_POPULAR_SUCCESS:
            return {
                ...state,
                isFetching: action.isFetching,
                data: action.data,
            }
        case FETCH_POPULAR_FAILURE:
            return {
                ...state,
                isFetching: action.isFetching,
                error: action.error
            }
        default:
            return state
    }
}