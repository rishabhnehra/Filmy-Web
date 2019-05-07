import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getNowPlaying } from './actions'

class NowPlaying extends Component {

    componentDidMount = () => {
        this.props.getNowPlaying()
    }

    render() {
        const { data, isFetching, error } = this.props.nowPlaying
        return (
            <Fragment>
                <h1>Now Playing</h1>
                {isFetching && <progress></progress>}
                {error && <p>ERROR: {error}</p>}
                {data.results && <ul>
                    {data.results.map((result, index) =>
                        <li key={index}>
                            <h2>{result.title}</h2>
                        </li>)}
                </ul>}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    nowPlaying: state.nowPlaying
})

const mapActionsToProps = (dispatch) => ({
    getNowPlaying: () => dispatch(getNowPlaying())
})

export default connect(mapStateToProps, mapActionsToProps)(NowPlaying)