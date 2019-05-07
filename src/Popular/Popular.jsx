import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getPopular } from './actions'

class Popular extends Component {

    componentDidMount = () => {
        this.props.getPopular()
    }

    render() {
        const { data, isFetching, error } = this.props.popular
        return (
            <div>
                <h1>Popular</h1>
                {isFetching && <progress></progress>}
                {error && <p>ERROR: {error}</p>}
                {data.results && <ul>
                    {data.results.map((result, index) =>
                        <li key={index}>
                            <h2>{result.title}</h2>
                        </li>)}
                </ul>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    popular: state.popular
})

const mapActionsToProps = (dispatch) => ({
    getPopular: () => dispatch(getPopular())
})

export default connect(mapStateToProps, mapActionsToProps)(Popular)