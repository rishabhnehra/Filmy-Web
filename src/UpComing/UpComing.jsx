import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getUpComing } from './actions'
import { Snackbar } from '@material/react-snackbar'
import '@material/react-snackbar/dist/snackbar.css';


class UpComing extends Component {

    componentDidMount = () => {
        this.props.getUpComing()
    }

    render() {
        const { data } = this.props.upComing
        const { isFetching, message } = this.props.fetching
        return (
            <Fragment>
                <h1>Up Coming</h1>
                {data.results && <ul>
                    {data.results.map((result, index) =>
                        <li key={index}>
                            <h2>{result.title}</h2>
                        </li>)}
                </ul>}
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