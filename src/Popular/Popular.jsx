import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Snackbar } from '@material/react-snackbar'
import '@material/react-snackbar/dist/snackbar.css';

import { getPopular } from './actions'

class Popular extends Component {

    componentDidMount = () => {
        this.props.getPopular()
    }

    render() {
        const { data } = this.props.popular
        const { isFetching, message } = this.props.fetching
        return (
            <div>
                {data.results && <ul>
                    {data.results.map((result, index) =>
                        <li key={index}>
                            <h2>{result.title}</h2>
                        </li>)}
                </ul>}
                {isFetching && <Snackbar message={message} />}
                {message && <Snackbar message={message}/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    popular: state.popular,
    fetching: state.fetching
})

const mapActionsToProps = (dispatch) => ({
    getPopular: () => dispatch(getPopular())
})

export default connect(mapStateToProps, mapActionsToProps)(Popular)