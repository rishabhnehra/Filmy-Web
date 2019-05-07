const getPopularList = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`

export const FETCH_POPULAR = "FETCH_POPULAR"
export const FETCH_POPULAR_SUCCESS = "FETCH_POPULAR_SUCCESS"
export const FETCH_POPULAR_FAILURE = "FETCH_POPULAR_FAILURE"

export const fetchPopular = () => ({
    type: FETCH_POPULAR,
    isFetching: true
})

export const fetchPopularSuccess = (data) => ({
    type: FETCH_POPULAR_SUCCESS,
    data,
    isFetching: false
})

export const fetchPopularFailure = (error) => ({
    type: FETCH_POPULAR_FAILURE,
    error,
    isFetching: false
})

export const getPopular = () => {
    return dispatch => {
        dispatch(fetchPopular())
        fetch(getPopularList)
            .then(response => {
                if(response.ok) return response.json()
                throw new Error(response.statusText)
            })
            .then(data => dispatch(fetchPopularSuccess(data)))
            .catch(error => dispatch(fetchPopularFailure(error)))
    }
}