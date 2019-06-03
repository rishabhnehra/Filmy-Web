import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    getMovie,
    getCredtis,
    getSimilar,
    getRatings,
    getVideos
} from './actions'
import { Snackbar } from '@material/react-snackbar'
import { Chip } from '@material/react-chips'
import List, { ListItem, ListItemText, ListItemGraphic } from '@material/react-list'
import Button from '@material/react-button'

import '@material/react-snackbar/dist/snackbar.css';
import "@material/react-chips/dist/chips.css";
import '@material/react-list/dist/list.css';
import '@material/react-button/dist/button.css';

import DialogList from '../components/DialogList'
import MovieGrid from '../components/MovieGrid'
import Ratings from '../components/Ratings'
import Youtube from '../components/Youtube'

const mapStateToProps = (state) => ({
    movie: state.movie,
    fetching: state.fetching
})

const mapActionsToProps = (dispatch) => ({
    getMovie: (id) => dispatch(getMovie(id)),
    getCredtis: (id) => dispatch(getCredtis(id)),
    getSimilar: (id) => dispatch(getSimilar(id)),
    getRatings: (id) => dispatch(getRatings(id)),
    getVideos: (id) => dispatch(getVideos(id))
})

class Movie extends Component {

    state = {
        isCastDialogOpen: false,
        isCrewDialogOpen: false
    }

    getAllDetails = async (id) => {
        this.props.getMovie(id)
        this.props.getCredtis(id)
        this.props.getSimilar(id)
        this.props.getVideos(id)
    }

    componentDidMount() {
        const { id } = this.props.match.params
        this.getAllDetails(id)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id)
            this.getAllDetails(this.props.match.params.id)
    }

    render() {
        const { isCastDialogOpen, isCrewDialogOpen } = this.state
        const { details, credits, similar, ratings, videos } = this.props.movie
        const { isFetching, message } = this.props.fetching
        return (
            <div>
                <section className="backdrop">
                    <img src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`} />
                </section>
                <section className="movie_header">
                    <p className="movie_title">{details.title}</p>
                    <p className="movie_tagline">{details.tagline}</p>
                    <p className="movie_overview">{details.overview}</p>
                </section>
                <Youtube videos={videos} />
                <Ratings ratings={ratings} tmdbRating={details.vote_average} />
                <ul className="movie_stats">
                    <li>Runtime: {details.runtime} mins</li>
                    <li>Genre: {details.genres && details.genres.map((genre, index) => <Chip className="chip" key={genre.name} label={genre.name} />)}</li>
                    <li>Language: {details.original_language}</li>
                    <li>Release Date: {details.release_date}</li>
                </ul>
                <section className="cast">
                    <div className="cast__header">
                        <h2>Cast</h2>
                        <Button onClick={() => this.setState({ isCastDialogOpen: true })}>More</Button>
                    </div>
                    <List twoLine>
                        {credits.cast && credits.cast.slice(0, 5).map((cast =>
                            <ListItem key={cast.id} onClick={() => this.props.history.push(`/person/${cast.id}`)}>
                                <ListItemGraphic className="cast__profile_pic" graphic={<img  src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`} />} />
                                <ListItemText
                                    primaryText={cast.name}
                                    secondaryText={cast.character}
                                />
                            </ListItem>
                        ))
                        }
                    </List>
                </section>
                <hr />
                <section className="cast">
                    <div className="cast__header">
                        <h2>Crew</h2>
                        <Button onClick={() => this.setState({ isCrewDialogOpen: true })}>More</Button>
                    </div>

                    <List twoLine>
                        {credits.crew && credits.crew.slice(0, 5).map((crew =>
                            <ListItem key={crew.id} onClick={() => this.props.history.push(`/person/${crew.id}`)}>
                                <ListItemGraphic className="cast__profile_pic" graphic={<img src={`https://image.tmdb.org/t/p/w200/${crew.profile_path}`} />} />
                                <ListItemText
                                    primaryText={crew.name}
                                    secondaryText={crew.department}
                                />
                            </ListItem>
                        ))
                        }
                    </List>
                </section>
                <section className="similar">
                    <h2>Similar</h2>
                    <MovieGrid data={similar} />
                </section>
                <DialogList isOpen={isCastDialogOpen} title='Cast' list={credits.cast} onClose={() => this.setState({ isCastDialogOpen: false })} />
                <DialogList isOpen={isCrewDialogOpen} title='Crew' list={credits.crew} onClose={() => this.setState({ isCrewDialogOpen: false })} />
                {isFetching && <Snackbar message={message} />}
                {message && <Snackbar message={message} />}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Movie)