import React, { Component, Fragment } from 'react';
import { popular } from './services'
import {
  fetchPopularFailure,
  fetchPopularRequest,
  fetchPopularSuccess
} from './actions/Popular'

import { connect } from 'react-redux';

class App extends Component {

  componentDidMount = () => {
    console.log(this.props)
    this.props.fetchPopularRequest()
    popular().then(response => {
      if (response.ok)
        return response.json()
      throw new Error(response.statusText)
    })
      .then(data => {
        this.props.fetchPopularSuccess(data)
      })
      .catch(error => {
        this.props.fetchPopularFailure(error)
      })
  }


  render() {
    const { data, isFetching, error } = this.props
    return (
      <Fragment>
        {isFetching && <progress></progress>}
        {data.results && <ul>
          {data.results.map(result =>
            <li>
              <h2>{result.original_title}</h2>
            </li>)}
        </ul>}
      </Fragment>
    );
  }
}

const mapStateToProps = state => (state)

const mapDispatchToProps = dispatch => ({
  fetchPopularFailure: () => dispatch(fetchPopularFailure()),
  fetchPopularRequest: (error) => dispatch(fetchPopularRequest(error)),
  fetchPopularSuccess: (data) => dispatch(fetchPopularSuccess(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);