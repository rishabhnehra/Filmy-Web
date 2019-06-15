import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Snackbar } from '@material/react-snackbar'
import { Link } from 'react-router-dom'

import { getPerson, getPersonMovieCredits } from './actions';
import Movie from '../components/MovieGrid'

import '@material/react-snackbar/dist/snackbar.css';

class Person extends Component {

    componentDidMount() {
        const { id } = this.props.match.params
        this.props.getPerson(id)
        this.props.getPersonMovieCredits(id)
    }

    render() {
        const { details, movie_credits } = this.props.person
        const { isFetching, message } = this.props.fetching
        return (
            <div>
                <div className="flex person__hero">
                    {details.profile_path && <img className="cast__profile_pic cast__profile_pic--large" src={`https://image.tmdb.org/t/p/w500/${details.profile_path}`} />}
                    <div className="person__hero__details">
                        <h3>{details.name}</h3>
                        <p>{details.birthday}</p>
                        <p>{details.place_of_birth}</p>
                    </div>
                </div>
                <div className="person__biography">
                    <p>{details.biography}</p>
                </div>
                {movie_credits.cast && movie_credits.cast.map(cast => <Link to={`/movie/${cast.id}`}><li>{cast.title} - {cast.character}</li></Link>)}
                {isFetching && <Snackbar message={message} />}
                {message && <Snackbar message={message} />}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    person: state.person,
    fetching: state.fetching
})

const mapActionToProps = (dispatch) => ({
    getPerson: (id) => dispatch(getPerson(id)),
    getPersonMovieCredits: (id) => dispatch(getPersonMovieCredits(id))
})

Person.propTypes = {
    person: PropTypes.shape({
        details: PropTypes.object,
        movie_credits: PropTypes.object
    }),
    fetching: PropTypes.shape({
        isFetching: PropTypes.bool,
        message: PropTypes.string
    }),
    getPerson: PropTypes.func,
    getPersonMovieCredits: PropTypes.func
}

export default connect(mapStateToProps, mapActionToProps)(Person)