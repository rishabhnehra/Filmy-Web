import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPerson, getPersonMovieCredits } from './actions';
import { Snackbar } from '@material/react-snackbar'
import '@material/react-snackbar/dist/snackbar.css';

class Person extends Component {

    componentDidMount() {
        const { id } = this.props.match.params.id
        this.props.getPerson(id)
        this.props.getPersonMovieCredits(id)
    }

    render() {
        const { details, movie_credits } = this.props.person
        const { isFetching, message } = this.props.fetching
        return(
            <div>
                <img src={`https://image.tmdb.org/t/p/w500/${details.profile_path}`}></img>
                <h3>{details.name}</h3>
                <p>{details.birthday}</p>
                <p>{details.biography}</p>
                <ul>
                    {movie_credits && movie_credits.cast.map(cast => <li>{cast}</li>)}
                </ul>
                {isFetching && <Snackbar message={message} />}
                {message && <Snackbar message={message}/>}
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
    getPersonMovieCredits : (id) => dispatch(getPersonMovieCredits(id))
})

export default connect(mapStateToProps, mapActionToProps)(Person)