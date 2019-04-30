export const FETCH_POPULAR_REQUEST = "FETCH_POPULAR_REQUEST"
export const FETCH_POPULAR_SUCCESS = "FETCH_POPULAR_SUCCESS"
export const FETCH_POPULAR_FAILURE = "FETCH_POPULAR_FAILURE"

export const fetchPopularRequest = () => ({
    type: FETCH_POPULAR_REQUEST
})

export const fetchPopularSuccess = (data) => ({
    type: FETCH_POPULAR_SUCCESS,
    data
})

export const fetchPopularFailure = (error) => ({
    type: FETCH_POPULAR_FAILURE,
    error
})