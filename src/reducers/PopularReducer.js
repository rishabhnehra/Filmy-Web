import {
    FETCH_POPULAR_FAILURE,
    FETCH_POPULAR_REQUEST,
    FETCH_POPULAR_SUCCESS,
} from '../actions/Popular'

const initialState = {
    isFetching: false,
    error: null,
    data: []
}

export const PopularReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POPULAR_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_POPULAR_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data,
            }
        case FETCH_POPULAR_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        default:
            return state
    }
}