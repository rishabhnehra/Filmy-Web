import {
    FETCH_POPULAR_FAILURE,
    FETCH_POPULAR,
    FETCH_POPULAR_SUCCESS,
} from './actions'

const initialState = {
    data: []
}

export const popularReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POPULAR:
            return {
                ...state,
            }
        case FETCH_POPULAR_SUCCESS:
            return {
                ...state,
                data: action.data,
            }
        case FETCH_POPULAR_FAILURE:
            return {
                ...state,
            }
        default:
            return state
    }
}