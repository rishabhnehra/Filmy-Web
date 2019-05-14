import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getMovie, getCredtis, getSimilar } from './actions'
import { Snackbar } from '@material/react-snackbar'
import '@material/react-snackbar/dist/snackbar.css';

const mapStateToProps = (state) => ({
    movie: state.movie,
    fetching: state.fetching
})

const mapActionsToProps = (dispatch) => ({
    getMovie: (id) => dispatch(getMovie(id)),
    getCredtis: (id) => dispatch(getCredtis(id)),
    getSimilar: (id) => dispatch(getSimilar(id))
})

class Movie extends Component {

    componentDidMount() {
        const { id } = this.props.match.params
        this.props.getCredtis(id)
        this.props.getMovie(id)
        this.props.getSimilar(id)

    }

    render() {
        const { details, credits, similar } = this.props.movie
        const { isFetching, message } = this.props.fetching
        return (
            <div>
                < div >
                    <img src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}></img>
                    <h1>{details.title}</h1>
                    <h3>{details.tagline}</h3>
                    <p>{details.overview}</p>
                    <ul>
                        <li>Runtime: {details.runtime} mins</li>
                        <li>Genre: {details.genres && details.genres.map((genre) => <span key={genre.name}>{genre.name}</span>)}</li>
                        <li>Language: {details.original_language}</li>
                        <li>Release Date: {details.release_date}</li>
                    </ul>
                    <h2>Cast</h2>
                    <ul>
                        {credits.cast && credits.cast.map((cast => <Link to={`/person/${cast.id}`}><li key={cast.id}>{cast.name}</li></Link>))}
                    </ul>
                    <h2>Crew</h2>
                    <ul>
                        {credits.crew && credits.crew.map((crew) => <li key={crew.id}>{crew.name}</li>)}
                    </ul>
                    <h2>
                        Similar
                        </h2>
                    <ul>
                        {similar.results && similar.results.map(s => <li key={s.id}>{s.title}</li>)}
                    </ul>
                </div >
                {isFetching && <Snackbar message={message} />}
                {message && <Snackbar message={message} />}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Movie)