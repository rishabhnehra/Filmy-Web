import {
    FETCH_UP_COMING,
    FETCH_UP_COMING_SUCCESS,
    FETCH_UP_COMING_FAILURE
} from './actions'

const initialState = {
    isFetching: false,
    error: null,
    data: []
}

export const upComingReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_UP_COMING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case FETCH_UP_COMING_SUCCESS:
            return {
                ...state,
                isFetching: action.isFetching,
                data: action.data,
            }
        case FETCH_UP_COMING_FAILURE:
            return {
                ...state,
                isFetching: action.isFetching,
                error: action.error
            }
        default:
            return state
    }
}