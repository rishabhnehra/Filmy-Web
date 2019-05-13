import { 
    fetchingData, 
    fetchDataFail, 
    fetchDataSuccessful } from '../Fetching/actions'

const getPopularList = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`

export const FETCH_POPULAR = "FETCH_POPULAR"
export const FETCH_POPULAR_SUCCESS = "FETCH_POPULAR_SUCCESS"
export const FETCH_POPULAR_FAILURE = "FETCH_POPULAR_FAILURE"

export const fetchPopular = () => ({
    type: FETCH_POPULAR,
})

export const fetchPopularSuccess = (data) => ({
    type: FETCH_POPULAR_SUCCESS,
    data,

})

export const fetchPopularFailure = (message) => ({
    type: FETCH_POPULAR_FAILURE,
    data: message
})

export const getPopular = () => {
    return dispatch => {
        dispatch(fetchingData())
        dispatch(fetchPopular())
        fetch(getPopularList)
            .then(response => {
                if(response.ok) return response.json()
                throw new Error(response.statusText)
            })
            .then(data => {
                dispatch(fetchDataSuccessful())
                dispatch(fetchPopularSuccess(data))
            })
            .catch(error => {
                dispatch(fetchDataFail(error))
                dispatch(fetchPopularFailure(error))
            })
    }
}