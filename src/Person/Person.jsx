import React, { Component } from 'react'

class Person extends Component {
    render() {
        return(
            <h1>Person ID: {this.props.match.params.id}</h1>
        )
    }
}

export default Person