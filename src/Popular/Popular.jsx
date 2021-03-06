import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Snackbar } from '@material/react-snackbar'

import '@material/react-layout-grid/dist/layout-grid.css';
import '@material/react-snackbar/dist/snackbar.css';

import MovieGrid from '../components/MovieGrid'
import HeaderTab from '../components/HeaderTab'
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
                {/* <HeaderTab /> */}
                <MovieGrid data={data.results} />
                {isFetching && <Snackbar message={message} />}
                {message && <Snackbar message={message} />}
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