import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getUpComing } from './actions'

class UpComing extends Component {

    componentDidMount = () => {
        this.props.getUpComing()
    }

    render() {
        const { data, isFetching, error } = this.props.upComing
        return (
            <Fragment>
                <h1>Up Coming</h1>
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
    upComing: state.upComing
})

const mapActionsToProps = (dispatch) => ({
    getUpComing: () => dispatch(getUpComing())
})

export default connect(mapStateToProps, mapActionsToProps)(UpComing)