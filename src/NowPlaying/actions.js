import { 
    fetchingData, 
    fetchDataFail, 
    fetchDataSuccessful } from '../Fetching/actions'

const getNowPlayingList = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}`

export const FETCH_NOW_PLAYING = "FETCH_NOW_PLAYING"
export const FETCH_NOW_PLAYING_SUCCESS = "FETCH_NOW_PLAYING_SUCCESS"
export const FETCH_NOW_PLAYING_FAILURE = "FETCH_NOW_PLAYING_FAILURE"

export const fetchNowPlaying = () => ({
    type: FETCH_NOW_PLAYING,
    isFetching: true,
    message: "Fetching data"
})

export const fetchNowPlayingSuccess = (data) => ({
    type: FETCH_NOW_PLAYING_SUCCESS,
    data,
    isFetching: false,
    message: "Data loaded successfully"
})

export const fetchNowPlayingFailure = (error) => ({
    type: FETCH_NOW_PLAYING_FAILURE,
    message: error,
    isFetching: false
})

export const getNowPlaying = () => {
    return dispatch => {
        dispatch(fetchNowPlaying())
        dispatch(fetchingData())
        fetch(getNowPlayingList)
            .then(response => {
                if(response.ok) return response.json()
                throw new Error(`Error ${response.status} : ${response.statusText}`)
            })
            .then(data => {
                dispatch(fetchDataSuccessful())
                dispatch(fetchNowPlayingSuccess(data))
            })
            .catch(error => {
                dispatch(fetchDataFail(error))
                dispatch(fetchNowPlayingFailure(error))
            })
    }
}