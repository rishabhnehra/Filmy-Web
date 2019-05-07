const getNowPlayingList = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`

export const FETCH_NOW_PLAYING = "FETCH_NOW_PLAYING"
export const FETCH_NOW_PLAYING_SUCCESS = "FETCH_NOW_PLAYING_SUCCESS"
export const FETCH_NOW_PLAYING_FAILURE = "FETCH_NOW_PLAYING_FAILURE"

export const fetchNowPlaying = () => ({
    type: FETCH_NOW_PLAYING,
    isFetching: true
})

export const fetchNowPlayingSuccess = (data) => ({
    type: FETCH_NOW_PLAYING_SUCCESS,
    data,
    isFetching: false
})

export const fetchNowPlayingFailure = (error) => ({
    type: FETCH_NOW_PLAYING_FAILURE,
    error,
    isFetching: false
})

export const getNowPlaying = () => {
    return dispatch => {
        dispatch(fetchNowPlaying())
        fetch(getNowPlayingList)
            .then(response => {
                if(response.ok) return response.json()
                throw new Error(response.statusText)
            })
            .then(data => dispatch(fetchNowPlayingSuccess(data)))
            .catch(error => dispatch(fetchNowPlayingFailure(error)))
    }
}