import {
    fetchingData,
    fetchDataSuccessful,
    fetchDataFail
} from "../Fetching/actions";

export const FETCH_PERSON_ID = "FETCH_PERSON_ID"
export const FETCH_PERSON_ID_SUCCESS = "FETCH_PERSON_ID_SUCCESS"
export const FETCH_PERSON_ID_FAIL = "FETCH_PERSON_ID_FAIL"

export const FETCH_PERSON_MOVIE_CREDITS = "FETCH_PERSON_MOVIE_CREDITS"
export const FETCH_PERSON_MOVIE_CREDITS_SUCCESS = "FETCH_PERSON_MOVIE_CREDITS_SUCCESS"
export const FETCH_PERSON_MOVIE_CREDITS_FAIL = "FETCH_PERSON_MOVIE_CREDITS_FAIL"

export const fetchPerson = () => ({
    type: FETCH_PERSON_ID
})

export const fetchPersonSuccess = (data) => ({
    type: FETCH_PERSON_ID_SUCCESS,
    data
})

export const fetchPersonFail = (error) => ({
    type: FETCH_PERSON_ID_FAIL,
    error
})

export const fetchPersonMovieCredits = () => ({
    type: FETCH_PERSON_MOVIE_CREDITS
})

export const fetchPersonMovieCreditsSuccess = (data) => ({
    type: FETCH_PERSON_MOVIE_CREDITS_SUCCESS,
    data
})

export const fetchPersonMovieCreditsFail = (error) => ({
    type: FETCH_PERSON_MOVIE_CREDITS_FAIL,
    error
})

export const getPerson = (id) => {
    return (dispatch) => {
        dispatch(fetchingData())
        dispatch(fetchPerson())
        fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
            .then(response => {
                if (response.ok) return response.json()
                throw new Error(`Error ${response.status} : ${response.statusText}`)
            })
            .then(data => {
                dispatch(fetchPersonSuccess(data))
                dispatch(fetchDataSuccessful())
            })
            .catch(error => {
                dispatch(fetchPersonFail(error))
                dispatch(fetchDataFail(error))
            })
    }
}

export const getPersonMovieCredits = (id) => {
    return (dispatch) => {
        dispatch(fetchingData())
        dispatch(fetchPersonMovieCredits())
        fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
            .then(response => {
                if (response.ok) return response.json()
                throw new Error(`Error ${response.status} : ${response.statusText}`)
            })
            .then(data => {
                dispatch(fetchPersonMovieCreditsSuccess(data))
                dispatch(fetchDataSuccessful())
            })
            .catch(error => {
                dispatch(fetchPersonMovieCreditsFail(error))
                dispatch(fetchDataFail(error))
            })
    }
}