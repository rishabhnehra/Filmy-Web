import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Snackbar } from '@material/react-snackbar'
import '@material/react-snackbar/dist/snackbar.css';

import MovieGrid from '../components/MovieGrid'
import HeaderTab from '../HeaderTab/HeaderTab'
import { getUpComing } from './actions'

class UpComing extends Component {

    componentDidMount = () => {
        this.props.getUpComing()
    }

    render() {
        const { data } = this.props.upComing
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
    upComing: state.upComing,
    fetching: state.fetching
})

const mapActionsToProps = (dispatch) => ({
    getUpComing: () => dispatch(getUpComing())
})

export default connect(mapStateToProps, mapActionsToProps)(UpComing)