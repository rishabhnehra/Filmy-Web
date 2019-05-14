import {
    FETCH_PERSON_ID,
    FETCH_PERSON_ID_SUCCESS,
    FETCH_PERSON_ID_FAIL,
    FETCH_PERSON_MOVIE_CREDITS,
    FETCH_PERSON_MOVIE_CREDITS_FAIL,
    FETCH_PERSON_MOVIE_CREDITS_SUCCESS
} from "./actions";

const initialState = {
    details: {},
    movie_credits: {}
}

export const personReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PERSON_ID:
            return state
        case FETCH_PERSON_ID_SUCCESS:
            return {
                ...state,
                details: action.data
            }
        case FETCH_PERSON_ID_FAIL:
            return state
        case FETCH_PERSON_MOVIE_CREDITS:
            return state
        case FETCH_PERSON_MOVIE_CREDITS_SUCCESS:
            return {
                ...state,
                movie_credits: action.data
            }
        case FETCH_PERSON_MOVIE_CREDITS_FAIL:
            return state
        default:
            return state
    }
}