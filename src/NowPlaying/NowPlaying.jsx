import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getNowPlaying } from './actions'
import { Snackbar } from '@material/react-snackbar'
import '@material/react-snackbar/dist/snackbar.css';

import MovieGrid from '../components/MovieGrid'


class NowPlaying extends Component {

    componentDidMount = () => {
        this.props.getNowPlaying()
    }

    render() {
        const { data } = this.props.nowPlaying
        const { isFetching, message} = this.props.fetching
        return (
            <Fragment>
                <MovieGrid data={data} />
                {isFetching && <Snackbar message={message} />}
                {message && <Snackbar message={message}/>}
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