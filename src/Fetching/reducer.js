import {
    FETCHING_DATA,
    FETCH_DATA_SUCCESSFUL,
    FETCH_DATA_FAIL
} from './actions'

const initialState = {
    isFetching: false,
    message: null
}

export const fetchingReducer = (state = initialState, { type, message }) => {
    switch (type) {
        case FETCHING_DATA:
            return {
                isFetching: true,
                message
            }
        case FETCH_DATA_SUCCESSFUL: 
            return {
                isFetching: false,
                message
            }
        case FETCH_DATA_FAIL:
            return {
                isFetching: true,
                message
            }
        default:
            return state
    }
}