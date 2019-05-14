import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPerson } from './actions';

class Person extends Component {

    componentDidMount() {
        const { id } = this.props.match.params.id
        this.props.getPerson(id)
    }

    render() {
        const { person } = this.props
        const { isFetching, message } = this.props.fetching
        return(
            <h1>Person ID: {this.props.match.params.id}</h1>
        )
    }
}

const mapStateToProps = (state) => ({
    person: state.person,
    fetching: state.fetching
})

const mapActionToProps = (dispatch) => ({
    getPerson: (id) => dispatch(getPerson(id))
})

export default connect(mapStateToProps, mapActionToProps)(Person)