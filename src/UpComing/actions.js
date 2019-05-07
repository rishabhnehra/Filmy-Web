const getUpComingList = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}`

export const FETCH_UP_COMING = "FETCH_UP_COMING"
export const FETCH_UP_COMING_SUCCESS = "FETCH_UP_COMING_SUCCESS"
export const FETCH_UP_COMING_FAILURE = "FETCH_UP_COMING_FAILURE"

export const fetchUpComing = () => ({
    type: FETCH_UP_COMING,
    isFetching: true
})

export const fetchUpComingSuccess = (data) => ({
    type: FETCH_UP_COMING_SUCCESS,
    data,
    isFetching: false
})

export const fetchUpComingFailure = (error) => ({
    type: FETCH_UP_COMING_FAILURE,
    error,
    isFetching: false
})

export const getUpComing = () => {
    return dispatch => {
        dispatch(fetchUpComing())
        fetch(getUpComingList)
            .then(response => {
                if(response.ok) return response.json()
                throw new Error(response.statusText)
            })
            .then(data => dispatch(fetchUpComingSuccess(data)))
            .catch(error => dispatch(fetchUpComingFailure(error)))
    }
}