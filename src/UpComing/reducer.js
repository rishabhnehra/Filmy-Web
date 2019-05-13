import {
    FETCH_UP_COMING,
    FETCH_UP_COMING_SUCCESS,
    FETCH_UP_COMING_FAILURE
} from './actions'

const initialState = {
    isFetching: false,
    message: null,
    data: []
}

export const upComingReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_UP_COMING:
            return {
                ...state
            }
        case FETCH_UP_COMING_SUCCESS:
            return {
                ...state,
                data: action.data,
            }
        case FETCH_UP_COMING_FAILURE:
            return {
                ...state
            }
        default:
            return state
    }
}