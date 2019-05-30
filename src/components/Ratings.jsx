import React from 'react'
import tmdb from '../assets/tmdb.png'
import imdb from '../assets/imdb.png'
import rt from '../assets/rt.png'
import metacritic from '../assets/metacritic.png'

const images = {
    "Internet Movie Database": imdb,
    "Rotten Tomatoes": rt,
    "Metacritic": metacritic
}

const Ratings = ({ ratings, tmdbRating }) => {
    return (
        <div className='ratings'>
            {ratings.map((critic) => <div className="critic">
                <img src={images[critic.Source]} alt={critic.Source}/>
                <p>{critic.Value}</p>
            </div>)}
            <div className="critic">
                <img src={tmdb} alt="The Movie Database" />
                <p>{tmdbRating}</p>
            </div>
        </div>
    )
}

export default Ratings