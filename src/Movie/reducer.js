import {
    FETCH_MOVIE_ID,
    FETCH_MOVIE_ID_FAIL,
    FETCH_MOVIE_ID_SUCCESS,
    FETCH_CREDITS,
    FETCH_CREDITS_FAIL,
    FETCH_CREDITS_SUCCESS,
    FETCH_SIMILAR,
    FETCH_SIMILAR_FAIL,
    FETCH_SIMILAR_SUCCESS,
    FETCH_RATINGS,
    FETCH_RATINGS_SUCCESS,
    FETCH_RATINGS_FAIL
} from './actions'

const initialState = {
    details: {},
    credits: {},
    similar: {},
    ratings: {}
}

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIE_ID:
            return state
        case FETCH_MOVIE_ID_SUCCESS:
            return {
                ...state,
                details: action.data
            }
        case FETCH_MOVIE_ID_FAIL:
            return state
        case FETCH_CREDITS:
            return state
        case FETCH_CREDITS_SUCCESS:
            return {
                ...state,
                credits: action.data
            }
        case FETCH_CREDITS_FAIL:
            return state
        case FETCH_SIMILAR:
            return state
        case FETCH_SIMILAR_SUCCESS:
            return {
                ...state,
                similar: action.data
            }
        case FETCH_SIMILAR_FAIL:
            return state
        case FETCH_RATINGS:
            return state
        case FETCH_RATINGS_SUCCESS:
            return {
                ...state,
                ratings: action.data
            }
        case FETCH_RATINGS_FAIL:
            return state
        default:
            return state
    }
}