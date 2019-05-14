import { 
    FETCH_PERSON_ID, 
    FETCH_PERSON_ID_SUCCESS, 
    FETCH_PERSON_ID_FAIL } from "./actions";


export const personReducer = (state = {}, action) => {
    switch(action.type){
        case FETCH_PERSON_ID:
            return state
        case FETCH_PERSON_ID_SUCCESS:
            return action.data
        case FETCH_PERSON_ID_FAIL:
            return state
        default:
            return state
    }
}