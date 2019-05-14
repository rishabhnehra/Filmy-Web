import {
    fetchingData,
    fetchDataSuccessful,
    fetchDataFail
} from '../Fetching/actions'

export const FETCH_MOVIE_ID = "FETCH_MOVIE_ID"
export const FETCH_MOVIE_ID_SUCCESS = "FETCH_MOVIE_ID_SUCCESS"
export const FETCH_MOVIE_ID_FAIL = "FETCH_MOVIE_ID_FAIL"

export const FETCH_CREDITS = "FETCH_CREDITS"
export const FETCH_CREDITS_SUCCESS = "FETCH_CREDITS_SUCCESS"
export const FETCH_CREDITS_FAIL = "FETCH_CREDITS_FAIL"

export const FETCH_SIMILAR = "FETCH_SIMILAR"
export const FETCH_SIMILAR_SUCCESS = "FETCH_SIMILAR_SUCCESS"
export const FETCH_SIMILAR_FAIL = "FETCH_SIMILAR_FAIL"

export const fetchMovie = () => ({
    type: FETCH_MOVIE_ID,
})

export const fetchMovieSuccess = (data) => ({
    type: FETCH_MOVIE_ID_SUCCESS,
    data
})

export const fetchMovieFail = (error) => ({
    type: FETCH_MOVIE_ID_FAIL,
    error
})

export const fetchCredits = () => ({
    type: FETCH_CREDITS
})

export const fetchCreditsSuccess = (data) => ({
    type: FETCH_CREDITS_SUCCESS,
    data
})

export const fetchCreditsFail = (error) => ({
    type: FETCH_CREDITS_FAIL,
    error
})

export const fetchSimilar = () => ({
    type: FETCH_SIMILAR
})

export const fetchSimilarSuccess = (data) => ({
    type: FETCH_SIMILAR_SUCCESS,
    data
})

export const fetchSimilarFail = (error) => ({
    type: FETCH_SIMILAR_FAIL,
    error
})

export const getMovie = (id) => {
    return (dispatch) => {
        dispatch(fetchingData())
        dispatch(fetchMovie())
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
            .then(response => {
                if(response.ok) return response.json()
                return Promise.reject(`Error ${response.status} : ${response.statusText}`)
            })
            .then(data => {
                dispatch(fetchDataSuccessful())
                dispatch(fetchMovieSuccess(data))
            })
            .catch(error => {
                dispatch(fetchDataFail(error))
                dispatch(fetchMovieFail(error))
            })
    }
}

export const getCredtis = (id) => {
    return (dispatch) => {
        dispatch(fetchingData())
        dispatch(fetchCredits())
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
            .then(response => {
                if(response.ok) return response.json()
                return Promise.reject(`Error ${response.status} : ${response.statusText}`)
            })
            .then(data => {
                dispatch(fetchCreditsSuccess(data))
                dispatch(fetchDataSuccessful())
            })
            .catch(error => {
                dispatch(fetchCreditsFail(error))
                dispatch(fetchDataFail(error))
            })
    }
}

export const getSimilar = (id) => {
    return (dispatch) => {
        dispatch(fetchingData())
        dispatch(fetchSimilar())
        fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
            .then(response => {
                if (response.ok) return response.json()
                return Promise.reject(`Error ${response.status} : ${response.statusText}`)
            })
            .then(data => {
                dispatch(fetchSimilarSuccess(data))
                dispatch(fetchDataSuccessful())
            })
            .catch(error => {
                dispatch(fetchSimilarFail(error))
                dispatch(fetchDataFail(error))
            })
    }
}