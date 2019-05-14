import { 
    fetchingData, 
    fetchDataFail, 
    fetchDataSuccessful } from '../Fetching/actions'

const getUpComingList = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}`

export const FETCH_UP_COMING = "FETCH_UP_COMING"
export const FETCH_UP_COMING_SUCCESS = "FETCH_UP_COMING_SUCCESS"
export const FETCH_UP_COMING_FAILURE = "FETCH_UP_COMING_FAILURE"

export const fetchUpComing = () => ({
    type: FETCH_UP_COMING,
    isFetching: true,
    message: "Fetching data"
})

export const fetchUpComingSuccess = (data) => ({
    type: FETCH_UP_COMING_SUCCESS,
    data,
    isFetching: false,
    message: "Data loaded successfully"
})

export const fetchUpComingFailure = (error) => ({
    type: FETCH_UP_COMING_FAILURE,
    message: error,
    isFetching: false
})

export const getUpComing = () => {
    return dispatch => {
        dispatch(fetchingData())
        dispatch(fetchUpComing())
        fetch(getUpComingList)
            .then(response => {
                if(response.ok) return response.json()
                return Promise.reject(`Error ${response.status} : ${response.statusText}`)
            })
            .then(data => {
                dispatch(fetchDataSuccessful())
                dispatch(fetchUpComingSuccess(data))
            })
            .catch(error => {
                dispatch(fetchDataFail(error))
                dispatch(fetchUpComingFailure(error))
            })
    }
}