import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Snackbar } from '@material/react-snackbar'
import '@material/react-snackbar/dist/snackbar.css';

import MovieGrid from '../components/MovieGrid'
import HeaderTab from '../HeaderTab/HeaderTab'
import { getNowPlaying } from './actions'

class NowPlaying extends Component {

    componentDidMount = () => {
        this.props.getNowPlaying()
    }

    render() {
        const { data } = this.props.nowPlaying
        const { isFetching, message } = this.props.fetching
        return (
            <Fragment>
                <MovieGrid data={data.results} />
                {isFetching && <Snackbar message={message} />}
                {message && <Snackbar message={message} />}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    nowPlaying: state.nowPlaying,
    fetching: state.fetching
})

const mapActionsToProps = (dispatch) => ({
    getNowPlaying: () => dispatch(getNowPlaying())
})

export default connect(mapStateToProps, mapActionsToProps)(NowPlaying)