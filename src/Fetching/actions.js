export const FETCHING_DATA = "FETCHING_DATA"
export const FETCH_DATA_SUCCESSFUL = "FETCH_DATA_SUCCESSFUL"
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL"
export const fetchingDataMessage = "Fetching data"

export const fetchingData = () => ({
    type: FETCHING_DATA,
    message: fetchingDataMessage
})

export const fetchDataSuccessful = () => ({
    type: FETCH_DATA_SUCCESSFUL,
    message: null
})

export const fetchDataFail = (error) => ({
    type: FETCH_DATA_FAIL,
    message: error.message
})